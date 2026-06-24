import React, { useState } from "react";
import { 
  ExternalLink, 
  Sparkles, 
  Laptop, 
  Smartphone, 
  Layout, 
  Cpu, 
  Database, 
  Award, 
  AlertCircle 
} from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

interface ProjectShowcaseProps {
  projects: Project[];
  themeMode?: "light" | "dark";
}

export function ProjectShowcase({ projects, themeMode = "dark" }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Explicit parameters for Categories per project
  const getProjectCategory = (id: string): string => {
    const cats: Record<string, string> = {
      vintagio: "Luxury Antique & Collectibles Marketplace",
      "fashion-perfumes": "Luxury Perfume E-commerce Platform",
      "mediawagon-crm": "Enterprise CRM & Team Hub",
      "space-ground": "Luxury Real Estate Investment Platform",
      "be-beauty": "Healthcare Skin, Hair & Aesthetics Website",
      hydshops: "Local Marketplace & Business Directory Hub"
    };
    return cats[id] || "Web Solutions";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelectedProject(proj)}
            className={`flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/5 group cursor-pointer ${
              themeMode === "light" 
                ? "bg-white border-slate-200 hover:border-rose-500/35" 
                : "bg-slate-900/10 border-white/10 hover:border-rose-500/35"
            }`}
          >
            {/* Visual Header Thumbnail */}
            <div className={`relative aspect-[16/10] overflow-hidden select-none border-b ${
              themeMode === "light" ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-white/5"
            }`}>
              {/* Window Controls Decorator */}
              <div className="absolute top-2.5 left-4 flex gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/75"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/75"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/75"></span>
              </div>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover filter brightness-[0.75] saturate-[0.8] hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-4 z-10 font-sans">
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                  themeMode === "light" 
                    ? "bg-slate-100/90 border border-slate-200 text-rose-500" 
                    : "bg-slate-950/80 border border-white/10 text-rose-400"
                }`}>
                  {proj.id === "mediawagon-crm" ? "STRONGEST WORK ✨" : "LIVE PRODUCTIONS"}
                </span>
              </div>
            </div>

            {/* Brief Content Pane */}
            <div className="p-6 flex flex-col flex-grow text-left space-y-4">
              <div className="space-y-1 font-sans">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl filter drop-shadow">{proj.icon}</span>
                  <span className="text-[10px] uppercase font-mono font-black text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/15">
                    {proj.role}
                  </span>
                </div>
                <h3 className={`text-lg font-display font-extrabold group-hover:text-rose-450 transition-colors duration-300 ${
                  themeMode === "light" ? "text-slate-900" : "text-white"
                }`}>
                  {proj.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                  {getProjectCategory(proj.id)}
                </span>
              </div>

              <p className="text-xs text-slate-405 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                {proj.description}
              </p>

              {/* Top highlights KPI bar */}
              <div className={`grid grid-cols-3 gap-2 p-3 border rounded-2xl select-none text-xs font-mono font-bold ${
                themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/50 border-white/5"
              }`}>
                {proj.metrics.slice(0, 3).map((metric, mi) => (
                  <div key={mi} className="text-center">
                    <div className="text-xs font-mono font-bold text-rose-500 tracking-tight">{metric.value}</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase tracking-widest leading-none mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies summary chips */}
              <div className="flex flex-wrap gap-1 pt-1">
                {proj.tech.slice(0, 5).map((t) => (
                  <span key={t} className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                    themeMode === "light" ? "bg-slate-100 border border-slate-200 text-slate-700" : "bg-[#09090c] border border-white/5 text-slate-300"
                  }`}>
                    {t}
                  </span>
                ))}
                {proj.tech.length > 5 && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                    themeMode === "light" ? "bg-slate-100 text-slate-600" : "bg-[#09090c] text-white"
                  }`}>
                    +{proj.tech.length - 5} more
                  </span>
                )}
              </div>

              {/* Inline CTAs linking to our advanced custom Case Study overlay panel */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <button
                  onClick={() => {
                    setSelectedProject(proj);
                  }}
                  className="px-4 py-2 bg-rose-500/10 border border-rose-500/25 text-rose-450 hover:bg-rose-500 hover:text-white rounded-xl text-[10px] font-mono tracking-widest font-black uppercase transition-all duration-300 cursor-pointer"
                >
                  Explore Case Study ✦
                </button>

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.stopPropagation(); // Avoid triggering open modal block when clicking external URLs
                    }}
                    className="text-[10px] font-mono text-slate-400 hover:text-rose-500 flex items-center gap-1 hover:underline"
                  >
                    <span>LIVE LINK</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comprehensive Custom Case Studies Overlay Document Viewport */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectCaseStudy 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            themeMode={themeMode}
          />
        )}
      </AnimatePresence>
    </>
  );
}
