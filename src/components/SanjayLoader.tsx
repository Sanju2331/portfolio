import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SanjayLoaderProps {
  onComplete: () => void;
}

export function SanjayLoader({ onComplete }: SanjayLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    // Increment percent count dynamically
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShouldExit(true);
            setTimeout(onComplete, 600); // call parent complete after exit transition
          }, 400);
          return 100;
        }
        // randomized increment speeds
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letterContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const letterVariants = {
    initial: { y: 25, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#08080A] z-[9999] flex flex-col items-center justify-center text-white font-sans"
        >
          {/* Subtle cosmic glow bubble in loader background */}
          <div className="absolute w-96 h-96 rounded-full bg-rose-500/10 filter blur-[90px] animate-pulse pointer-events-none" />

          <div className="space-y-6 text-center z-10">
            {/* Spinning active loading status circle */}
            <div className="flex justify-center mb-2">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <span className="absolute w-full h-full rounded-full border border-rose-500/20"></span>
                <span className="absolute w-full h-full rounded-full border-t border-rose-500 animate-spin"></span>
                <span className="text-[10px] font-mono text-rose-500 font-bold">{percent}%</span>
              </div>
            </div>

            {/* Letter-by-letter Sanjay name revealing */}
            <motion.h1
              variants={letterContainerVariants}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-6xl font-display font-black tracking-[0.25em] flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-rose-400 pl-[0.25em]"
            >
              {"SANJAY".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub descriptive metadata */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400"
            >
              Web Developer · React · PHP
            </motion.p>

            {/* Micro decorative loader line progress bar */}
            <div className="w-48 h-[1.5px] bg-white/5 rounded-full mx-auto relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 to-indigo-500"
                style={{ width: `${percent}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
