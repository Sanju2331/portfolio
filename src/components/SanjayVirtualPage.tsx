import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  X, 
  ArrowLeft, 
  CheckCircle, 
  Cpu, 
  Layers, 
  ExternalLink,
  Code2, 
  Globe, 
  Award, 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Database, 
  FileText, 
  Send,
  MessageSquare
} from "lucide-react";
import { PROJECT_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from "../data";

interface SanjayVirtualPageProps {
  pageId: string;
  themeMode: "dark" | "light";
  onClose: () => void;
}

export function SanjayVirtualPage({ pageId, themeMode, onClose }: SanjayVirtualPageProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>("vintagio");
  const [copiedQuery, setCopiedQuery] = useState(false);

  // Sample production PHP MySQL code snippet to show real-world expertise
  const samplePhpQuery = `<?php
// Secure Prepared Statement logic for Sanjay's Vintagio E-commerce
$db = new mysqli("localhost", "sanjay_user", "secured_pass", "vintagio_db");

if ($db->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$productId = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
$stmt = $db->prepare("SELECT id, title, price, image, description, stock FROM Products WHERE id = ?");
$stmt->bind_param("i", $productId);
$stmt->execute();
$result = $stmt->get_result();

if ($product = $result->fetch_assoc()) {
    echo json_encode([
        "status" => "success",
        "data" => $product
    ]);
} else {
    echo json_encode(["status" => "fail", "message" => "Item not found"]);
}
$stmt->close();
?>`;

  const copyCode = () => {
    navigator.clipboard.writeText(samplePhpQuery);
    setCopiedQuery(true);
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  const isLight = themeMode === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isLight ? "bg-slate-50 text-slate-900" : "bg-[#09090C] text-slate-100"
      }`}
    >
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-rose-500/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/10 filter blur-[120px] pointer-events-none" />

      {/* Top sticky Navigation */}
      <nav className={`sticky top-0 z-10 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between ${
        isLight ? "bg-white/90 border-slate-200" : "bg-slate-950/90 border-white/5"
      }`}>
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className={`flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase px-3 py-2 rounded-xl border transition ${
              isLight ? "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200" : "bg-white/5 text-slate-300 hover:bg-white/10 border-white/10"
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Hub</span>
          </button>
          
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-500 font-bold block leading-none">Separate Page Mode</span>
            <span className="text-xs font-medium text-slate-400 capitalize">{pageId} • Deep Explanation</span>
          </div>
        </div>

        <div className="font-display text-xl font-black text-rose-500 font-bold">
          SRIKONDA SANJAY
        </div>

        <button
          onClick={onClose}
          className={`p-2 rounded-xl transition ${
            isLight ? "hover:bg-slate-200/50 text-slate-700" : "hover:bg-white/10 text-slate-300"
          }`}
          title="Exit Separate Page View"
        >
          <X className="w-5 h-5" />
        </button>
      </nav>

      {/* Main Content scroll block */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16 relative">
        
        {/* Render Segment 1: ABOUT */}
        {pageId === "about" && (
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                01 . Dynamic Business Background
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
                BUSINESS COMPOSURE<br />MEETS HIGH PERFORMANCE CODE
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
                Most web developers only care about syntax. Sanjay brings an entirely different dimension — an MBA in Business Strategy and Product Leadership. This powerful convergence allows Sanjay to build application layouts calibrated directly to maximize customer retention, conversion metrics, and business scalability.
              </p>
            </div>

            {/* Strategic KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { count: "98%", label: "UX Conversion Target", desc: "Crafting optimized flows preventing cart desertion." },
                { count: "1.8s", label: "Page Latency Max Limit", desc: "Lighter page sizes optimized for Indian mobile networks." },
                { count: "3x", label: "Business Translation Speed", desc: "Converting product descriptions into deployable live store pages." }
              ].map((kpi, index) => (
                <div key={index} className="p-6 rounded-2xl border border-white/5 bg-slate-950/40 space-y-2">
                  <div className="text-3xl font-display font-bold text-rose-500">{kpi.count}</div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">{kpi.label}</div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{kpi.desc}</p>
                </div>
              ))}
            </div>

            {/* Detailed Professional Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
              <div className="md:col-span-8 space-y-6">
                <h3 className="text-xl font-ui font-black text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-rose-500" /> Executive Summary & Strategy
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  Srikonda Sanjay completed his B.Com from Ramakrishna Degree College in 2023, where he discovered database modeling (MySQL/SQL) and logical workflows. Recognizing that technology must translate securely to business outcomes, he pursued an MBA from the Global Institute of Management, graduating in 2025 with high commendations in marketing strategy and leadership.
                </p>
                <blockquote className="border-l-2 border-rose-500 pl-4 py-1 italic text-xs text-slate-400 bg-white/5 rounded-r-xl">
                  "Sanjay does not simply write script packages — he architects online assets. He listens to marketing objectives first, maps operational pipelines, and only then designs efficient code solutions."
                </blockquote>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  Currently active as a Web Developer Intern at MediaWagon, Sanjay supports active online retailers, designs customer dashboards, integrates checkout flows, and reduces resource bundle payloads by up to 30%.
                </p>
              </div>

              <div className="md:col-span-4 p-6 rounded-2xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-rose-500">Core Focus Checklist</h4>
                <ul className="space-y-3">
                  {[
                    "Responsive Core Architectures",
                    "E-Commerce Conversions Boost",
                    "Secure Authentication Systems",
                    "Database Schemas Optimization",
                    "Agile Sprint Delivery Expert"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Render Segment 2: PROJECTS */}
        {pageId === "projects" && (
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                02 . Cases and Live Systems
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
                ACTIVE SITE CASE STUDIES & CODE SPECIFICATIONS
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
                Explore in-depth performance logs, server configurations, and database query code matching Srikonda Sanjay's live e-commerce deliverables.
              </p>
            </div>

            {/* Case Study Tab switcher */}
            <div className="flex border-b border-white/5 gap-4">
              {PROJECT_DATA.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setSelectedCaseStudy(proj.id)}
                  className={`pb-3 text-xs font-mono uppercase tracking-wider font-bold transition-all relative ${
                    selectedCaseStudy === proj.id ? "text-rose-500" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {proj.title}
                  {selectedCaseStudy === proj.id && (
                    <motion.div layoutId="activeCaseLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
                  )}
                </button>
              ))}
            </div>

            {/* In Depth Selected Case Study */}
            {PROJECT_DATA.filter(p => p.id === selectedCaseStudy).map((proj) => (
              <div key={proj.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{proj.icon}</span>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-rose-400">{proj.subtitle}</span>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{proj.title}</h2>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                    {proj.description} Sanjay integrated specific product filters, custom dynamic caching parameters, and styled layouts with responsive pixel alignment using modern styling engines.
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Technical Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.tech.map((t, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-white/5 text-xs text-slate-300 font-mono flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-rose-500" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/60 border border-white/5 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-white mb-2">Verified Analytics Boost</h4>
                    <div className="space-y-4">
                      {proj.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-xs font-sans text-slate-400">{metric.label}</span>
                          <span className="text-sm font-mono font-bold text-rose-500">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-rose-500 hover:bg-rose-600 font-ui text-xs text-white uppercase text-center py-3 rounded-xl block font-bold transition shadow-lg shadow-rose-500/10"
                    >
                      Explore live domain ↗
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Relational Database Backend Specs */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-ui font-black text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-rose-500" /> Relational SQL Performance Logic
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    View Srikonda Sanjay's clean, standard transactional PHP snippet mapped securely with prepared queries.
                  </p>
                </div>

                <button
                  onClick={copyCode}
                  className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 text-xs font-mono rounded-xl transition flex items-center gap-1.5"
                >
                  {copiedQuery ? "Copied!" : "Copy SQL Code"}
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-slate-950 text-[10px] sm:text-xs font-mono text-emerald-400 border border-white/5 overflow-x-auto overflow-y-auto max-h-72 leading-relaxed">
                <code>{samplePhpQuery}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Render Segment 3: JOURNEY */}
        {pageId === "journey" && (
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                03 . Chronology
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
                DETAILED TIMELINE PROGRESSIVE EXPANSION
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
                Explore a detailed walkthrough of Srikonda Sanjay's steps from formal finance applications to advanced technical delivery systems.
              </p>
            </div>

            {/* Vertical chronological path */}
            <div className="space-y-12">
              {[
                {
                  year: "Feb 2026 – Present",
                  title: "Web Developer Intern @ MediaWagon",
                  type: "Professional Experience",
                  desc: "Building real commerce platforms of up to 500+ active monthly buyers. Sanjay ensures absolute responsive layout styling on active Safari, Edge, Chrome, and iOS viewports.",
                  icon: <Briefcase className="w-5 h-5 text-rose-500" />
                },
                {
                  year: "2023 – 2025",
                  title: "MBA Specialization — Global Institute of Management",
                  type: "Advanced Education",
                  desc: "Secured a 7.8/10 CGPA. Specialized extensively in strategic business forecasting, technology lifecycle positioning, corporate workflow leadership, and financial commerce.",
                  icon: <GraduationCap className="w-5 h-5 text-rose-400" />
                },
                {
                  year: "2020 – 2023",
                  title: "B.Com (Computer Applications) — Ramakrishna Degree College",
                  type: "Foundation Degree",
                  desc: "Graduated with 72% score, modeling foundational data storage principles, relational tables schemas, basic programming concepts, and digital documentation systems.",
                  icon: <BookOpen className="w-5 h-5 text-slate-400" />
                },
                {
                  year: "2018 – 2020",
                  title: "Intermediate (CEC) — Hyderabad Junior College",
                  type: "General Commerce",
                  desc: "Scored 72.7% (727/1000) with a focused study of transactional commerce bookkeeping, resource layouts, and basic systems.",
                  icon: <FileText className="w-5 h-5 text-stone-500" />
                }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/5 space-y-2">
                  {/* Floating Left indicator dot */}
                  <div className="absolute left-[-11px] top-1.5 w-5 h-5 rounded-full border-2 border-rose-500 bg-slate-950 flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-rose-400 font-mono text-xs font-bold bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">{step.year}</span>
                    <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">{step.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {step.icon}
                    <h3 className="text-lg font-ui font-bold text-white">{step.title}</h3>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Segment 4: ARSENAL */}
        {pageId === "arsenal" && (
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                04 . Toolkits
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
                FINE-TUNED ENTERPRISE TECH STACKS
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
                A highly descriptive catalog of specific systems, dependencies, and diagnostic equipment Srikonda Sanjay uses to execute real web platforms daily.
              </p>
            </div>

            {/* Detailed stack grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {[
                {
                  title: "Frontend Runtimes & Layouts",
                  items: [
                    { name: "React.js 19", detail: "Structuring lightweight virtual components connected strictly via custom states." },
                    { name: "JavaScript ES6+", detail: "Asynchronous async/await operations, array mapping, event callbacks, AJAX, and JSON parsing." },
                    { name: "Tailwind CSS v4 & Bootstrap", detail: "Delivering fully responsive cross-device fluid layouts optimized for rapid load speeds." }
                  ]
                },
                {
                  title: "Relational PHP Backend Systems",
                  items: [
                    { name: "PHP Scripting", detail: "Managing backend parameters, routing logic, server configuration, session payloads, and SDKs." },
                    { name: "MySQL Relational Queries", detail: "Designing clean schemas, modeling products catalogs, storing secure credentials." },
                    { name: "REST APIs", detail: "Configuring high-performance JSON exchange conduits to push payment gateways (Razorpay hookbacks)." }
                  ]
                }
              ].map((grp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 space-y-4">
                  <h3 className="font-ui font-bold text-white text-md border-b border-white/5 pb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-rose-500 animate-pulse" />
                    <span>{grp.title}</span>
                  </h3>
                  <div className="space-y-4">
                    {grp.items.map((item, iIdx) => (
                      <div key={iIdx} className="space-y-1">
                        <div className="text-xs font-mono font-bold text-rose-400">{item.name}</div>
                        <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Segment 5: CONTACT */}
        {pageId === "contact" && (
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                05 . Direct Communication
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
                TRANSMIT YOUR RECRUITMENT SPECIFICATIONS
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
                Sanjay is available for active interviews. Provide details on salary packages, work structures (hybrid, on-site, remote) or project timelines below.
              </p>
            </div>

            {/* Direct coordinate badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:sirikondasanjay00@gmail.com" className="p-4 rounded-xl border border-white/5 bg-slate-950/40 flex items-center justify-between text-xs text-slate-300 font-mono hover:border-rose-500 hover:text-white transition cursor-pointer">
                <span>Email: sirikondasanjay00@gmail.com</span>
                <span className="text-rose-500">Send ↗</span>
              </a>
              <a href="tel:+917660983973" className="p-4 rounded-xl border border-white/5 bg-slate-950/40 flex items-center justify-between text-xs text-slate-300 font-mono hover:border-rose-500 hover:text-white transition cursor-pointer">
                <span>Cellular: +91-7660983973</span>
                <span className="text-rose-500">Call ↗</span>
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-rose-500/20 bg-slate-950/60 flex flex-col md:flex-row items-center gap-6 justify-between select-none">
              <div className="space-y-2">
                <h4 className="text-lg font-ui font-black text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-rose-500" /> Need a Fast AI Double Interview?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-md">
                  Click the floating chat bubble on Srikonda's live page. You have direct access to Sanjay's personalized AI recruiter avatar, capable of answering all questions regarding stack fluency immediately!
                </p>
              </div>
              <button 
                onClick={onClose}
                className="bg-rose-500 hover:bg-rose-600 text-white font-mono font-bold tracking-widest uppercase text-xs px-6 py-3 rounded-xl transition shadow-lg shadow-rose-500/20"
              >
                Launch Avatar Dialog
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Footer back block */}
      <footer className={`border-t py-12 mt-20 ${
        isLight ? "bg-white border-slate-200 text-slate-500" : "bg-slate-950 border-white/5 text-slate-400"
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono whitespace-nowrap opacity-80">Separate Page System • Developed for Srikonda Sanjay</span>
          <button
            onClick={onClose}
            className="text-[10px] font-mono tracking-widest uppercase hover:text-rose-500 transition"
          >
            ← Close & Exit Page
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
