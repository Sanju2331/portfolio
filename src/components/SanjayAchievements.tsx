import React from "react";
import { Trophy, Award, Medal, CheckSquare, Sparkles } from "lucide-react";

export function SanjayAchievements({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";

  const milestones = [
    {
      title: "98% PageSpeed Certification",
      desc: "Successfully audited e-commerce pipelines, optimizing layout cumulative shifts and asset delivery to secure a 98% Speed rating on Vintagio.in & FashionClubPerfumes.in.",
      icon: Medal
    },
    {
      title: "Corporate Strategic Marketing Excellence",
      desc: "Earned Certificate of Merit at Global Institute of Management for designing conversion-boosting visual mockups for retail checkout lines.",
      icon: Award
    },
    {
      title: "5+ Real-World Production Platforms Shipped",
      desc: "Led multi-component responsive web design and deployment serving authentic business enterprises located in Hyd.",
      icon: Trophy
    },
    {
      title: "Algorithmic Bookkeeping Award Winner",
      desc: "Recognized with of of excellence during Ramakrishna college academic workshops for creating a custom MySQL ledger transaction logic script.",
      icon: Sparkles
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="images/milestones.png"
          alt="Milestones Achievements Srikonda Sanjay"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.8] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            08 . ACHIEVEMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            My Milestones & Success
          </h2>
        </div>
      </div>

      {/* Main achievements grid */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {milestones.map((item, id) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={id} 
                className={`p-5 rounded-2xl border transition hover:border-rose-500/30 flex gap-4 ${
                  isLight ? "bg-slate-50 border-slate-200/60" : "bg-slate-950/65 border-white/5"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-sm sm:text-base font-ui font-black ${isLight ? "text-slate-900" : "text-white"}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Bullet Checklist */}
        <div className={`p-5 rounded-2xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"} space-y-3.5`}>
          <h4 className={`text-xs font-mono font-black uppercase text-slate-200 ${isLight ? "text-slate-700" : ""}`}>
            ✦ Professional Certifications Completed
          </h4>
          <div className="space-y-2.5">
            {[
              "Agile Product Lifecycle Engineering Certificate – Academy of Tech Hyd (2025)",
              "Full-Stack Relational Scripting (MySQL / Prepared PHP) – Lab Certified Pro (2024)",
              "Social Media Marketing Audits Certificate – Global Strategic Hub (2024)",
              "General Ledger Bookkeeping and Digital Asset Accounting Methods (2023)"
            ].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                <CheckSquare className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
