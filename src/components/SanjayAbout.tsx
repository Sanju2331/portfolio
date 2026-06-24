import React from "react";
import { motion } from "motion/react";
import { Award, Heart, ShieldCheck, TrendingUp } from "lucide-react";

export function SanjayAbout({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";

  return (
    <section id="about" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="images/about.png"
          alt="About Srikonda Sanjay - Strategy & Tech"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.85] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            02 . ABOUT ME
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            My Story, My Vision, My Journey
          </h2>
        </div>
      </div>

      {/* Intro Narrative */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-6`}>
        <div className="space-y-4 font-sans text-xs sm:text-sm leading-relaxed text-slate-400">
          <p className={isLight ? "text-slate-800" : "text-slate-100"}>
            Most web developers focus strictly on code structures, packages, and frameworks. Srikonda Sanjay brings an entirely unique dimension to your engineering pipeline—a strong **MBA in Business Strategy & Product Leadership** coupled with hands-on full-stack engineering proficiency (React, PHP, MySQL).
          </p>
          <p>
            During his undergraduate study in **B.Com (Computer Applications)**, Sanjay mastered relational query structures and analytical accounting. Driven to translate technical components into customer retention and bottom-line growth, he completed an MBA from the **Global Institute of Management** in 2025. This bridges strategic vision with solid, secure delivery.
          </p>
          <p>
            Currently, Sanjay serves as a **Web Developer Intern at MediaWagon**, where he architects scalable e-commerce systems, integrates reliable gateways (Razorpay, REST), and audits layouts to reduce resource shifts, serving upwards of 500+ active platform buyers daily.
          </p>
        </div>

        {/* Bullet targets specified in Srikonda's image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/5 select-none">
          {[
            { tag: "My Journey", desc: "Crossing the boundaries from transactional finance bookkeeping to React components." },
            { tag: "Value Addition", desc: "Optimizing responsive page sizes to ensure conversions on spotty mobile networks." },
            { tag: "My Build Approach", desc: "Designing semantic systems that are highly readable and search engine crawls friendly." },
            { tag: "Hobbies & Interests", desc: "Analyzing consumer retention behaviors, charting UI layouts, and tech blogs writing." },
            { tag: "Vision for Future", desc: "Aspirations to engineer highly resilient customer hubs powering commerce startups." }
          ].map((item, idx) => (
            <div key={idx} className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${isLight ? "bg-slate-50 border-slate-200/50" : "bg-slate-950/40 border-white/5"}`}>
              <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className={`text-[10px] uppercase font-mono font-black ${isLight ? "text-slate-900" : "text-slate-200"}`}>{item.tag}</span>
                <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic KPI Grid from diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
          {[
            { count: "98%", label: "UX Conversion Target", desc: "Perfect checkouts preventing cart desertion." },
            { count: "1.8s", label: "Page Latency Max", desc: "Highly minimized asset size optimized for 4G networks." },
            { count: "3x Faster", label: "Strategic Delivery", desc: "Translating mockups directly into functional models." }
          ].map((kpi, index) => (
            <div key={index} className={`p-4 rounded-xl border flex flex-col justify-between ${isLight ? "bg-slate-100/50 border-slate-200" : "bg-slate-950/60 border-white/5"}`}>
              <span className="text-2xl font-display font-black text-rose-500">{kpi.count}</span>
              <div className={`text-[10px] uppercase font-mono font-bold tracking-wider mt-1 ${isLight ? "text-slate-850" : "text-white"}`}>
                {kpi.label}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                {kpi.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
