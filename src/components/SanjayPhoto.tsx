import React, { useRef, useState } from "react";
import { Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

export function SanjayPhoto() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position pointer relative to target element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Standard relative tilt offset multiplier (maximum of 12 degrees)
    const degX = -((mouseY - height / 2) / (height / 2)) * 12;
    const degY = ((mouseX - width / 2) / (width / 2)) * 12;
    
    setRotateX(degX);
    setRotateY(degY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Background radial soft ambient glow */}
      <div className="absolute w-[360px] h-[360px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none -translate-x-4 -translate-y-4" />

      {/* Styled 3D Perspective Card Wrapper */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="photo-frame w-72 h-88 md:w-80 md:h-96 relative group cursor-pointer overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-200 ease-out"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1}, 1)`,
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(244, 63, 94, 0.25)" 
            : "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Falling source image with non-referrer tags */}
        <img
          src="images/sanjay.png"
          alt="Srikonda Sanjay - Web Developer Portrait"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:brightness-105"
          referrerPolicy="no-referrer"
        />

        {/* 3D Depth layered spotlight gleam accent */}
        <div 
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-15"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15) 0%, transparent 60%)",
            transform: "translateZ(20px)"
          }}
        />

        {/* Ambient color dynamic filter on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500 z-10" />

        {/* Visual corner decorations for UI/UX look */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-rose-500/60 z-20 transition group-hover:border-rose-400 group-hover:scale-110" />
        <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-rose-500/60 z-20 transition group-hover:border-rose-400 group-hover:scale-110" />
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-rose-500/60 z-20 transition group-hover:border-rose-400 group-hover:scale-110" />
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-rose-500/60 z-20 transition group-hover:border-rose-400 group-hover:scale-110" />

        {/* Floating tech badge on image */}
        <div 
          className="absolute top-4 left-6 right-6 flex justify-between items-center z-25 pointer-events-none transition-transform duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            HYDERABAD, IN
          </span>
          <span className="text-[11px] font-mono flex items-center gap-1.5 px-2.5 py-1 bg-rose-500 font-bold text-white rounded-full shadow-lg">
            <Award className="w-3.5 h-3.5" />
            Active
          </span>
        </div>

        {/* Hover-triggered overlay content info */}
        <div 
          className="absolute bottom-6 left-6 right-6 z-25 transition-transform duration-500"
          style={{ transform: "translateZ(40px)" }}
        >
          <h4 className="font-display text-3xl text-white tracking-widest leading-none drop-shadow-md">
            S. SANJAY
          </h4>
          <p className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            React & PHP Specialist
          </p>
        </div>
      </div>

      {/* Styled bottom subtitle */}
      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mt-6 text-center select-none">
        ← Smooth Interactive 3D Perspective Tilt →
      </p>
    </div>
  );
}
