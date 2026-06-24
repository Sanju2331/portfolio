import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

export function SanjayEducation({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";

  const courses = [
    "Corporate Strategic Marketing",
    "Database Management Systems & MySQL Table Structures",
    "E-Commerce Product Lifecycle Management",
    "Digital Bookkeeping & Transaction Analysis",
    "Consumer Touchpoint Audits",
    "Asynchronous Script Architectures & Logical Flows"
  ];

  const educations = [
    {
      degree: "MBA — Master of Business Administration",
      school: "Global Institute of Management, Hyderabad, TS",
      year: "2023 – 2025",
      score: "7.8/10 CGPA",
      focus: "Business Strategy, Leadership & Marketing Analysis",
      note: "Specialized in transforming customer touchpoint behaviors into technical e-commerce lifecycles. Gained deep competency in strategic forecasting, corporate collaboration and lead pipeline conversion loops."
    },
    {
      degree: "B.Com (Computer Applications)",
      school: "Ramakrishna Degree College, Hyderabad",
      year: "2020 – 2023",
      score: "72%",
      focus: "Business Software, Systems & Relational Databases",
      note: "Introduced Srikonda to standard database logic (SQL), desktop accounting structures, procedural modeling, and corporate systems bookkeeping."
    },
    {
      degree: "Intermediate — CEC",
      school: "Hyderabad Junior College",
      year: "2018 – 2020",
      score: "72.7% (727/1000 Marks)",
      focus: "Commerce, Economics & Civic Studies",
      note: "Acquired core competencies in general commerce theories, financial accounting, assets categorization, and budget logs."
    },
    {
      degree: "SSC — Secondary School Certificate",
      school: "Hyderabad Academy High School",
      year: "2018",
      score: "8.3/10 CGPA",
      focus: "General Secondary Curriculum",
      note: "Built foundational analytics, general science principles, communication metrics, and logic competencies."
    }
  ];

  return (
    <section id="education" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
          alt="Academic Growth Srikonda Sanjay"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.8] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            03 . EDUCATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            Academic Background & Growth
          </h2>
        </div>
      </div>

      {/* Main timeline listing */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-8`}>
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
          {educations.map((item, idx) => (
            <div key={idx} className="relative group/edu">
              {/* Timeline Indicator Node */}
              <div className={`absolute top-1.5 left-[-31px] sm:left-[-39px] w-5 h-5 rounded-full z-10 flex items-center justify-center transition-all duration-300 ${
                idx === 0 
                  ? "bg-slate-950 border-2 border-rose-500" 
                  : "bg-slate-900 border-2 border-slate-700"
              }`}>
                <span className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-rose-500" : "bg-slate-400"}`}></span>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1.5 font-mono">
                  <span className="text-[11px] uppercase font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">{item.year}</span>
                  <span className={`text-xs ${isLight ? "text-slate-700" : "text-slate-300"}`}>Grade Metric: <strong className="text-rose-500">{item.score}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-rose-500 shrink-0" />
                  <h3 className={`text-base sm:text-lg font-ui font-black ${isLight ? "text-slate-900" : "text-white"}`}>
                    {item.degree}
                  </h3>
                </div>

                <p className="text-xs font-mono text-slate-400">
                  ✦ {item.school} | {item.focus}
                </p>

                <p className="text-[11px] sm:text-xs text-slate-400 font-sans leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Coursework group from image */}
        <div className={`p-5 rounded-2xl border ${isLight ? "bg-slate-50 border-slate-200/60" : "bg-slate-950/40 border-white/5"} space-y-3`}>
          <h4 className="text-xs font-mono font-black uppercase text-white flex items-center gap-1.5 select-none text-slate-200">
            <BookOpen className="w-4 h-4 text-rose-500" />
            <span>Structured Coursework & Competency Blocks</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {courses.map((c, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400 font-sans leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose Indicator */}
        <div className="flex items-center gap-2 select-none border-t border-white/5 pt-4">
          <Award className="w-4 h-4 text-rose-500" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Academic Focus: Build trust through business and database foundations.
          </span>
        </div>
      </div>
    </section>
  );
}
