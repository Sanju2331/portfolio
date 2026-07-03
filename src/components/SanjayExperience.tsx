import React from "react";
import { Briefcase, Compass, FileText, CheckCircle, TrendingUp, Laptop } from "lucide-react";

export function SanjayExperience({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";

  const responsibilities = [
    "Designing and engineering pixel-perfect web layout components following high-fidelity Figma drafts.",
    "Spearheading cross-browser accessibility and visual auditing on Safari, Mobile iOS browsers, Chrome, and Edge.",
    "Eliminating unstable layout shifts (CLS), dropping metric values from 0.32 to a secure 0.02 using height-preserving CSS skeleton cells.",
    "Optimizing asset load times from 3.2 seconds down to 1.8 seconds using smart asset slicing and lazy hydration.",
    "Authoring secure PHP backends and integrating e-commerce gateways like Razorpay with real-time webhook verifications.",
    "Collaborating within an agile team using Git, GitHub version controls, Slack consultations, and weekly delivery sprints."
  ];

  const toolsUsed = [
    "React.js", "PHP 8.2", "MySQL", "JavaScript ES6+", "AJAX (Fetch)", "Bootstrap 5", "Vite", "Razorpay SDK", "Git/GitHub", "Postman", "Figma", "Lighthouse Auditor"
  ];

  return (
    <section id="experience" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="images/experience.png"
          alt="Professional Experience MediaWagon"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.8] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            04 . EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            My Professional Experience
          </h2>
        </div>
      </div>

      {/* MediaWagon Detail Card */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-6`}>
        
        {/* Core Header info */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-rose-400 font-mono text-xs font-bold uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
              Feb 2026 – Present
            </span>
            <span className="text-slate-400 text-xs font-mono flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              📍 Hyderabad, Telangana
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg sm:text-2xl font-display font-black leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                Web Developer Intern <span className="text-rose-500">@ MediaWagon</span>
              </h3>
              <p className="text-xs text-slate-400 italic font-mono mt-0.5">
                MediaWagon is a premier digital solution and marketing consultancy in Hyd.
              </p>
            </div>
          </div>
        </div>

        {/* Day-to-Day Responsibilities */}
        <div className="space-y-3.5">
          <h4 className={`text-xs font-mono font-black uppercase flex items-center gap-1.5 ${isLight ? "text-slate-800" : "text-slate-200"}`}>
            <Laptop className="w-4 h-4 text-rose-500" />
            <span>Day-to-day responsibilities</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {responsibilities.map((resp, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs text-slate-400 font-sans leading-relaxed ${
                  isLight ? "bg-slate-50 border-slate-200/50" : "bg-slate-950/25 border-white/5"
                }`}
              >
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="space-y-2.5 border-t border-white/5 pt-5 select-none">
          <h4 className={`text-xs font-mono font-black uppercase ${isLight ? "text-slate-800" : "text-slate-200"}`}>
            💼 Technologies & Tools Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {toolsUsed.map((tool) => (
              <span 
                key={tool} 
                className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border font-semibold ${
                  isLight ? "bg-slate-200/30 border-slate-200 text-slate-700" : "bg-slate-950/50 border-white/5 text-slate-300"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Business Impact / Outcomes statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/5">
          <div className={`p-4 rounded-xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
            <span className="text-xl font-display font-bold text-rose-500">5+ Shipped</span>
            <p className="text-[10px] uppercase font-mono mt-1 text-slate-400 font-bold">Real-World Platforms</p>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Fully deployed and accessible client solutions.</p>
          </div>
          <div className={`p-4 rounded-xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
            <span className="text-xl font-display font-bold text-rose-500">+35% Mob. Clicks</span>
            <p className="text-[10px] uppercase font-mono mt-1 text-slate-400 font-bold">Conversion Rate Gain</p>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Achieved via micro-interactions & speed tuning.</p>
          </div>
          <div className={`p-4 rounded-xl border ${isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
            <span className="text-xl font-display font-bold text-rose-500">1.1s Sliced</span>
            <p className="text-[10px] uppercase font-mono mt-1 text-slate-400 font-bold">Loading Speed Win</p>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Decreasing bounce rates for e-commerce retailers.</p>
          </div>
        </div>

        {/* MEDIAWAGON CHRONOLOGICAL JOURNEY TIMELINE */}
        <div className="space-y-4 border-t border-white/5 pt-6">
          <h4 className={`text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 ${isLight ? "text-slate-800" : "text-slate-200"}`}>
            <span className="w-1.5 h-3 bg-rose-500 rounded-xs" />
            <span>MEDIAWAGON INTERNSHIP JOURNEY TIMELINE</span>
          </h4>
          
          <div className="relative pl-6 border-l-2 border-rose-500/10 space-y-6 pt-2">
            {[
              {
                date: "February 2026",
                title: "Joined MediaWagon Team",
                desc: "Onboarded as Web Developer Intern. Set up local workspace development environments, initiated client audit logs, and integrated agile ticket workflows.",
                color: "from-blue-500/20 to-blue-500/5",
                badge: "ONBOARDING"
              },
              {
                date: "March 2026",
                title: "Worked on Vintagio Marketplace",
                desc: "Engineered core PHP architecture, catalog filters schema, dynamic cart mechanics, and integrated PayPal/local gateways templates.",
                color: "from-amber-600/20 to-stone-800/40",
                badge: "VINTAGIO FEATURE"
              },
              {
                date: "April 2026",
                title: "Worked on Fashion Club Perfumes",
                desc: "Redesigned fragrance presentation viewport layers, automated WebP compression cycles, and completed cumulative layout shift tweaks.",
                color: "from-pink-600/20 to-purple-900/40",
                badge: "FASHION CLUB"
              },
              {
                date: "May 2026",
                title: "Built Enterprise CRM Modules",
                desc: "Coded strict OOP control states representing staff clock-in routines, roles permissions validation loops, and optimized relational database query indexing.",
                color: "from-cyan-600/20 to-blue-900/40",
                badge: "CRM BUILD"
              },
              {
                date: "June 2026",
                title: "Developed Space & Ground",
                desc: "Structured full property catalogs layouts, mortgage yield widgets math scripts, and realtors contact captures forms.",
                color: "from-purple-600/20 to-indigo-950/40",
                badge: "SPACE & GROUND"
              },
              {
                date: "Current",
                title: "Maintaining Client Deliveries",
                desc: "Actively deploying hotfixes, performance monitoring, SEO updates, and direct technical consulting with retail stakeholders.",
                color: "from-emerald-500/20 to-emerald-500/5",
                badge: "PRODUCTION MASTER"
              }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Bullet */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-rose-500 bg-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </span>

                <div className={`p-4 rounded-2xl border transition duration-300 hover:border-rose-500/30 ${
                  isLight 
                    ? "bg-slate-50 border-slate-200 hover:shadow-xs" 
                    : "bg-slate-900/10 border-white/5 hover:bg-slate-950/40"
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                    <span className="text-[10px] font-mono font-bold text-rose-455 text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                      {milestone.date}
                    </span>
                    <span className="text-[8.5px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                      {milestone.badge}
                    </span>
                  </div>
                  <h5 className={`text-sm font-display font-black tracking-tight mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>
                    {milestone.title}
                  </h5>
                  <p className="text-xs text-slate-450 leading-relaxed text-slate-400 font-sans">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Mentorship Growth */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 ${
          isLight ? "bg-slate-100/60 border-slate-200" : "bg-slate-950/60 border-white/5"
        }`}>
          <Compass className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className={`text-xs font-mono font-black uppercase text-rose-400`}>What Srikonda Learned & Mentored</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              "My internship at MediaWagon served as an incredible sandbox. Beyond refining my asynchronous APIs and React 19 component structures, it trained me to view technical solutions purely as vectors for business health—understanding product lifecycle strategy, delivering updates securely, and communicating closely with retail stakeholders."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
