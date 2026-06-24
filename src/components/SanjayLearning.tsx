import React from "react";
import { Compass, BookOpen, Clock, Target, ArrowRight } from "lucide-react";

export function SanjayLearning({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";

  const topics = [
    { title: "Advanced Next.js 15 & React Server Components", platform: "Udemy & Vercel Labs" },
    { title: "GraphQL APIs Query Federation", platform: "Apollo Server documentation" },
    { title: "Modern Software System Architectures", platform: "Coursera Strategic Engineering" },
    { title: "Edge Caching Layers & Vercel Middleware", platform: "Self-paced exploratory labs" },
    { title: "Relational Query Splicing & Caching with Redis", platform: "Technical deep-dives" }
  ];

  return (
    <section id="learning" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
          alt="Learning Journey roadmap Srikonda Sanjay"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.8] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            09 . LEARNING JOURNEY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            What I'm Learning & Exploring
          </h2>
        </div>
      </div>

      {/* Main layout container */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-6`}>
        
        {/* Core Study Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className={`text-base font-ui font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
              <Clock className="w-5 h-5 text-rose-400" />
              <span>Current Study Focus & Platforms</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Srikonda Sanjay constantly expands his coding toolkit to complement his strategic MBA foundations. Here is what is active on his study workbench:
            </p>
            <div className="space-y-2.5">
              {topics.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border flex justify-between items-center ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"
                  }`}
                >
                  <div className="space-y-0.5">
                    <p className={`text-xs font-semibold ${isLight ? "text-slate-800" : "text-slate-200"}`}>{t.title}</p>
                    <span className="text-[10px] font-mono text-slate-400">Platform: {t.platform}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap & Tech Milestones targets */}
          <div className="space-y-4">
            <h4 className={`text-base font-ui font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
              <Compass className="w-5 h-5 text-rose-400" />
              <span>Roadmap & New Technologies</span>
            </h4>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              <p>
                Sanjay is currently charting his progression towards full-stack architectures. His next targets include:
              </p>
              
              <div className="grid grid-cols-2 gap-2 select-none">
                {[
                  "NodeJS deep internals", "Docker containers", "Advanced TypeScript", "CI/CD deployments", "Redis databases", "GraphQL federation"
                ].map((roadmap, rIdx) => (
                  <div key={rIdx} className={`p-2.5 rounded-lg border text-center font-mono text-[10px] uppercase font-bold text-rose-400 ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-white/5"
                  }`}>
                    🚀 {roadmap}
                  </div>
                ))}
              </div>

              {/* Business-Logic Goals */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isLight ? "bg-slate-100/60 border-slate-200" : "bg-slate-950/50 border-white/5"
              }`}>
                <Target className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className={`text-xs font-mono font-black uppercase text-rose-400`}>Aspirations & Scaling Goals</h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    "My absolute milestone goal is to architect resilient full-stack retail engines handling 10k+ concurrent transactions seamlessly, converting marketing behavioral analysis directly into lightweight, responsive user-centric checkouts."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
