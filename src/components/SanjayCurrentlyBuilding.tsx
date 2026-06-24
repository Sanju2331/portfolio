import React from "react";
import { Check, Flame, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface BuildingProject {
  id: string;
  name: string;
  type: string;
  status: "Active Maintenance" | "Feature Sprint" | "Production Live";
  phase: string;
  progress: number;
  tech: string[];
  description: string;
}

const CURRENT_PROJECTS: BuildingProject[] = [
  {
    id: "vintagio",
    name: "Vintagio Marketplace",
    type: "Luxury Antique E-Store",
    status: "Active Maintenance",
    phase: "Security Audits & Inventory Scale",
    progress: 100,
    tech: ["PHP Core", "MySQL", "Bootstrap 5", "AJAX"],
    description: "Maintaining core performance levels, product-listing databases, and secure payment processing channels."
  },
  {
    id: "fashion-perfumes",
    name: "Fashion Club Perfumes",
    type: "Fragrance E-Commerce",
    status: "Production Live",
    phase: "Mobile Conversion Fine-tuning",
    progress: 100,
    tech: ["PHP OOP", "MySQL", "JavaScript ES6+", "HTML5"],
    description: "Auditing Core Web Vitals to reduce Cumulative Layout Shift and page latency under spotty cell networks."
  },
  {
    id: "mediawagon-crm",
    name: "MediaWagon CRM",
    type: "Enterprise Workspace Portal",
    status: "Feature Sprint",
    phase: "Automated Report Schedulers",
    progress: 95,
    tech: ["React.js", "Tailwind CSS", "PHP REST API", "MySQL"],
    description: "Integrating multi-role authorization levels alongside employee timesheets and real-time report logs."
  },
  {
    id: "hydshops",
    name: "HydShops",
    type: "Local Hyper-Local Search",
    status: "Active Maintenance",
    phase: "Vendor Self-CRUD System",
    progress: 100,
    tech: ["React.js", "Tailwind CSS", "PHP", "MySQL"],
    description: "Upgrading localized indexing search and lightweight catalog interfaces for non-technical local sellers."
  },
  {
    id: "space-ground",
    name: "Space & Ground",
    type: "Real Estate Investment Portal",
    status: "Active Maintenance",
    phase: "Yield Calculator Calibration",
    progress: 100,
    tech: ["React.js", "Tailwind CSS", "Chart.js", "PHP"],
    description: "Optimizing browser computational yield widgets and ensuring robust lead storage vaults."
  }
];

export function SanjayCurrentlyBuilding({ 
  themeMode, 
  onSelectProject 
}: { 
  themeMode: "dark" | "light"; 
  onSelectProject?: (projectId: string) => void;
}) {
  const isLight = themeMode === "light";

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-rose-500/10 pb-4">
        <div className="space-y-1">
          <span className="text-rose-500 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            LIVE PIPELINE (CLICK TO VIEW CASE STUDY)
          </span>
          <h3 className={`text-xl sm:text-2xl font-display font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            CURRENTLY BUILDING & MAINTAINING
          </h3>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs opacity-60 text-slate-400">
          Last updated: June 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CURRENT_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            onClick={() => onSelectProject?.(project.id)}
            className={`p-5 rounded-3xl border flex flex-col justify-between group h-fit relative overflow-hidden transition-all duration-300 cursor-pointer hover:border-rose-500/35 hover:shadow-xl hover:shadow-rose-500/5 ${
              isLight 
                ? "bg-white border-slate-200 hover:shadow-md" 
                : "bg-slate-900/10 border-white/5 hover:bg-slate-950/40"
            }`}
          >
            {/* Top background accent glowing dots */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-4">
              {/* Header Status & Code */}
              <div className="flex items-center justify-between select-none">
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                  {project.type}
                </span>
                
                <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>{project.status}</span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h4 className={`text-sm sm:text-base font-display font-black tracking-tight group-hover:text-rose-500 transition-colors ${isLight ? "text-slate-950" : "text-white"}`}>
                  {project.name} <span className="opacity-0 group-hover:opacity-100 transition-all font-mono text-xs ml-1">↗</span>
                </h4>
                <p className="text-[11.5px] leading-relaxed text-slate-400 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Active Subphase details */}
              <div className={`p-2.5 rounded-xl border text-[10.5px] font-mono ${
                isLight ? "bg-slate-50 border-slate-100 text-slate-600" : "bg-slate-950/30 border-white/5 text-slate-400"
              }`}>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span className="opacity-60 uppercase tracking-wider text-[9px] font-black">SPINNING FOCUS:</span>
                </div>
                <div className="pl-5 mt-0.5 font-sans leading-tight">
                  {project.phase}
                </div>
              </div>
            </div>

            {/* Bottom Tech List */}
            <div className="pt-4 border-t border-white/5 mt-5 flex flex-wrap gap-1.5 select-none">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-[8.5px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    isLight 
                      ? "bg-slate-100 text-slate-600 border border-slate-200" 
                      : "bg-slate-950 text-slate-300 border border-white/5"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
