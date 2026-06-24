import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Cpu } from "lucide-react";

interface SkillNode {
  name: string;
  r: number; // radius from center
  speed: number; // speed divider
  startAngle: number;
}

const SKILL_NODES: SkillNode[] = [
  // Core Hub - Ring 1 (r: 75)
  { name: "React 19", r: 75, speed: 8, startAngle: 0 },
  { name: "PHP Core", r: 75, speed: 8, startAngle: 90 },
  { name: "MySQL Stack", r: 75, speed: 8, startAngle: 180 },
  { name: "TypeScript", r: 75, speed: 8, startAngle: 270 },

  // Integration & Frameworks - Ring 2 (r: 135)
  { name: "Vite App", r: 135, speed: 13, startAngle: 20 },
  { name: "Node.js", r: 135, speed: 13, startAngle: 80 },
  { name: "Tailwind v4", r: 135, speed: 13, startAngle: 140 },
  { name: "Bootstrap 5", r: 135, speed: 13, startAngle: 200 },
  { name: "Express.js", r: 135, speed: 13, startAngle: 260 },
  { name: "Git & Hub", r: 135, speed: 13, startAngle: 320 },

  // Engineering & Cloud - Ring 3 (r: 195)
  { name: "@google/genai", r: 195, speed: 18, startAngle: 40 },
  { name: "Razorpay SDK", r: 195, speed: 18, startAngle: 100 },
  { name: "REST APIs", r: 195, speed: 18, startAngle: 160 },
  { name: "JSON Schema", r: 195, speed: 18, startAngle: 220 },
  { name: "AJAX Fetch", r: 195, speed: 18, startAngle: 280 },
  { name: "DevTools Pro", r: 195, speed: 18, startAngle: 340 },

  // Specialized - Ring 4 (r: 250)
  { name: "Figma UI", r: 250, speed: 24, startAngle: 15 },
  { name: "jQuery Lib", r: 250, speed: 24, startAngle: 105 },
  { name: "PageSpeed SEO", r: 250, speed: 24, startAngle: 195 },
  { name: "Agile Scrum", r: 250, speed: 24, startAngle: 285 }
];

export function SanjayToolsOrbit({ themeMode }: { themeMode: "dark" | "light" }) {
  const [angleOffset, setAngleOffset] = useState(0);
  const [containerSize, setContainerSize] = useState(480);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Responsive boundary resizing
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setContainerSize(270);
      } else if (width < 480) {
        setContainerSize(320);
      } else if (width < 640) {
        setContainerSize(370);
      } else if (width < 1024) {
        setContainerSize(420);
      } else {
        setContainerSize(480);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate the orbits smoothly
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined && previousTimeRef.current !== null) {
        // Increment angle speed
        setAngleOffset((prev) => prev + 0.35);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const center = containerSize / 2;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-12">
      {/* Visual Orbit Left side */}
      <div className="lg:col-span-6 flex justify-center relative select-none">
        <div 
          className="relative rounded-full aspect-square flex items-center justify-center transition-all duration-300"
          style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
        >
          {/* Outer Ring boundary */}
          <div className="absolute rounded-full border border-white/5 animate-pulse" style={{ width: `${containerSize * 0.95}px`, height: `${containerSize * 0.95}px` }}></div>
          {/* Third Ring boundary */}
          <div className="absolute rounded-full border border-white/5" style={{ width: `${containerSize * 0.78}px`, height: `${containerSize * 0.78}px` }}></div>
          {/* Middle Ring boundary */}
          <div className="absolute rounded-full border border-white/10" style={{ width: `${containerSize * 0.54}px`, height: `${containerSize * 0.54}px` }}></div>
          {/* Inner Ring boundary */}
          <div className="absolute rounded-full border border-white/5" style={{ width: `${containerSize * 0.3}px`, height: `${containerSize * 0.3}px` }}></div>

          {/* Center piece */}
          <div className="absolute w-24 h-24 rounded-full border border-rose-500/30 flex flex-col items-center justify-center bg-slate-950/65 backdrop-blur-xl z-20 shadow-lg shadow-rose-500/5">
            <span className="font-display text-lg text-white font-extrabold tracking-widest leading-none">SS</span>
            <span className="font-mono text-[6px] tracking-widest text-slate-400 uppercase mt-1">STACK ORB</span>
            <span className="absolute w-28 h-28 rounded-full border border-dashed border-rose-500/10 animate-spin-slow"></span>
          </div>

          {/* Render individual node rings */}
          {SKILL_NODES.map((node) => {
            // Scale radius based on current container size
            const scaledRadius = node.r * (containerSize / 500);

            // Calculate rotational coordinates
            const currentAngle = node.startAngle + (angleOffset * (10 / node.speed));
            const radians = (currentAngle * Math.PI) / 180;
            const x = center + scaledRadius * Math.cos(radians);
            const y = center + scaledRadius * Math.sin(radians);

            return (
              <div
                key={node.name}
                className="absolute z-10 transition-shadow duration-300 pointer-events-auto"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <div 
                  className={`text-[8px] sm:text-[9px] font-mono tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border font-bold uppercase transition-all duration-300 shadow bg-slate-950/90 whitespace-nowrap group cursor-crosshair hover:bg-rose-500 hover:text-white ${
                    themeMode === "light"
                      ? "border-slate-250 text-slate-200"
                      : "border-white/10 text-slate-300 hover:border-rose-500"
                  }`}
                >
                  <span className="text-rose-500 group-hover:text-white mr-1 opacity-70">•</span>
                  {node.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual copy text list on Right side */}
      <div className="lg:col-span-6 text-left space-y-6">
        <div className="space-y-3 p-1">
          <span className="text-rose-500 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4 animate-spin-slow" /> Tech Arsenal & Confluence
          </span>
          <h2 className={`text-3xl md:text-4xl font-display font-black leading-tight ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
            PRODUCTION-READY STACK & EXPERIENCE
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed font-sans ${themeMode === "light" ? "text-slate-600" : "text-slate-400"}`}>
            An advanced, production-tested technology portfolio demonstrating hands-on architectural expertise. Each skill is matched directly to professional systems shipped during my MediaWagon tenure.
          </p>
        </div>

        {/* High-Fidelity Skill levels block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {[
            {
              name: "ReactJS (v18/19)",
              level: "95% - Production Lead",
              projects: ["Space & Ground", "Be Beauty", "Portfolio"],
              desc: "Dynamic virtual DOM, custom hooks state pipelines, code-splitting and latency fine-tuning."
            },
            {
              name: "Core PHP (OOP)",
              level: "92% - Backend Architect",
              projects: ["Vintagio", "Fashion Club", "MediaWagon CRM"],
              desc: "Object-oriented scripting, router controllers, dynamic API responses, session security."
            },
            {
              name: "MySQL Database",
              level: "90% - Query Optimizer",
              projects: ["Vintagio", "Fashion Club", "CRM", "HydShops", "Space & Ground"],
              desc: "Multi-table relational schema audits, advanced indexing on foreign keys, transaction safety."
            },
            {
              name: "JavaScript (ES6+)",
              level: "94% - Core Logic",
              projects: ["All Shipped Projects"],
              desc: "Asynchronous AJAX, Promise structures, modular systems, state managers & event hooks."
            },
            {
              name: "Bootstrap 5",
              level: "96% - Express Layouts",
              projects: ["Vintagio", "Fashion Club"],
              desc: "Responsive grids, skeleton presets, clean typography setups & utility layout speeds."
            },
            {
              name: "Tailwind CSS v4",
              level: "95% - Fluid Styling",
              projects: ["Space & Ground", "Be Beauty", "Portfolio", "CRM"],
              desc: "Custom configuration theme presets, modular designs, aesthetic negative space alignment."
            },
            {
              name: "Razorpay SDK",
              level: "88% - Gateway Expert",
              projects: ["Vintagio", "Fashion Club"],
              desc: "Secure checkout setups, callback authentication loops, order webhook validation scripts."
            },
            {
              name: "Git & Versioning",
              level: "93% - Workflow Lead",
              projects: ["All Shipped Projects"],
              desc: "Branch controls, robust conflict resolutions, CI/CD integrations, deployment checkpoints."
            }
          ].map((skillData) => (
            <div 
              key={skillData.name} 
              className={`p-4 rounded-2xl border space-y-2.5 transition duration-300 hover:border-rose-500/30 ${
                themeMode === "light" 
                  ? "bg-white border-slate-200 shadow-2xs" 
                  : "bg-slate-900/10 border-white/5 bg-slate-950/20"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-[12.5px] font-display font-black ${themeMode === "light" ? "text-slate-950" : "text-white"}`}>
                  {skillData.name}
                </span>
                <span className="text-[9px] font-mono font-bold text-rose-500 px-1.5 py-0.5 rounded bg-rose-500/10">
                  {skillData.level}
                </span>
              </div>
              
              <p className="text-[10.5px] text-slate-400 font-sans leading-normal">
                {skillData.desc}
              </p>

              <div className="space-y-1.5 pt-1.5 border-t border-white/5">
                <span className="text-[8.5px] font-mono tracking-widest text-slate-500 uppercase block font-black">
                  USED IN:
                </span>
                <div className="flex flex-wrap gap-1 font-mono">
                  {skillData.projects.map((proj) => (
                    <span 
                      key={proj} 
                      className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                        themeMode === "light"
                          ? "bg-slate-100 text-slate-600 border border-slate-200"
                          : "bg-rose-500/10 border border-rose-500/15 text-rose-400"
                      }`}
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
