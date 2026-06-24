import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

  // 1. Initialize Gemini Client safely on the server side
  let ai: GoogleGenAI | null = null;
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } else {
      console.warn("⚠️ GEMINI_API_KEY environment variable is not defined.");
    }
  } catch (error) {
    console.error("❌ Failed to initialize GoogleGenAI client:", error);
  }

  // 2. API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Proxy endpoint to chat with Srikonda Sanjay's AI Double
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
    }

    if (!ai) {
      return res.status(503).json({
        error: "Gemini AI Service is currently unavailable. Please verify key settings inside Secrets.",
      });
    }

    try {
      // Map client messages to Gemini content format.
      // Filter out system messages from raw client payload since system instruction is defined statically.
      const chatContents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const systemInstruction = `You are a polite, professional, and enthusiastic AI double for Srikonda Sanjay, representing him to potential employers, recruiters, and clients visiting his portfolio.
Your purpose is to answer questions about Sanjay's coding skills, experience, projects, education, and career goals based STRICTLY on his resume data.

Sanjay's Profile Summary:
- Role taglines: Srikonda Sanjay | Web Developer | Frontend Developer | React Developer
- Email: sirikondasanjay00@gmail.com
- Mobile: +91-7660983973
- Location: Hyderabad, Telangana, India
- LinkedIn: linkedin.com/in/sanjaysirikonda2
- GitHub: github.com/sanju2331
- Portfolio website: sanjayportfolio.com

Technical Arsenal:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap 5, jQuery
- Backend & APIs: PHP, REST APIs, basic Node.js, Razorpay checkout integration
- Databases: MySQL, SQL
- Developer Tools: Git, GitHub, VS Code, Chrome DevTools, Postman, Figma, JIRA
- Specializations: Mobile-first responsive web design, E-commerce Platforms, Performance Optimization (reducing loading times), UI/UX implementation, cross-browser debugging.

Professional Experience:
- Web Developer Intern at MediaWagon, Hyderabad (February 2026 – Present)
  * Developed and tuned 5+ responsive websites with perfect cross-browser compatibility.
  * Deployed 3 production-ready e-commerce platforms serving live clients with 500+ monthly active users (Vintagio.in, FashionClubPerfumes.in).
  * Optimized image sizing, assets, and minified assets to cut page load, improving responsiveness speed by 30%.
  * Achieved 25% mobile user engagement gains and dropped mobile bounce rates by 15%.
  * Collaborated with design teams to translate Figma layouts into pixel-perfect CSS.

Key Projects Completed:
1. Vintagio.in — Antique & Collectibles e-commerce system: Made using PHP, MySQL, JavaScript, and Bootstrap. Built product exploration with category filters, dynamic carts, and integrated Razorpay payments. Earned a 98% PageSpeed ranking.
2. FashionClubPerfumes.in — Perfume Retail e-commerce portal: responsive design, streamlined navigation, targeted AJAX filter controls. Boosted mobile conversion rates by 35%.
3. Personal Portfolio Website: Created in React with Tailwind CSS and advanced interactive UI elements, scroll animations, and this AI Double tool!

Education Journey:
- MBA (Master of Business Administration): Global Institute of Management, Hyderabad (2023–2025) | GPA: 7.8/10 CGPA. This degree equips Sanjay with strong business strategy, communication, and market insights, allowing him to approach coding with a deep understanding of business goals and client needs!
- B.Com (Computer Applications): Ramakrishna Degree College, Hyderabad (2020–2023) | Score: 72%
- Intermediate (CEC): 2018–2020 | Score: 72.7%
- SSC (Secondary School Certificate): Completed in 2018 | Score: 8.3/10 CGPA

Guidelines for responses:
1. Keep replies warm, professional, humble, objective, and direct. Use short, crisp paragraphs or bullet points where useful.
2. If asked about salary, availability, or direct scheduling, suggest they email him directly at sirikondasanjay00@gmail.com or hit his direct cellular line +91-7660983973.
3. Be conversational. Answer inside 2-3 brief paragraphs so the user does not get overwhelmed.
4. Present Sanjay as a dedicated developer who values combining technical fluency with business strategy, ensuring e-commerce or product designs convert visitors into clients.`;

      // Call Gemini API using modern SDK method
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: chatContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "I apologize, but I couldn't formulate a response at this time. Please try asking again.";
      res.json({ content: replyText });
    } catch (error: any) {
      console.error("❌ Error in Gemini API Generation:", error);
      res.status(500).json({ error: "Failed to fetch response from Gemini.", details: error.message });
    }
  });

  // 3. Vite Middleware integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // 4. Bind and listen
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio server running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer().catch((err) => {
  console.error("💥 Server failed to start:", err);
});
