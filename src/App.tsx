import React, { useState, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Menu,
  X,
  Cpu,
  Layers,
  Flame,
  FileDown,
  ArrowUpRight,
  BookOpen,
  SendHorizontal,
  Sun,
  Moon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_DATA, EXPERIENCE_DATA } from "./data";
import { Project } from "./types";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ProjectCaseStudy } from "./components/ProjectCaseStudy";
import { SanjayPhoto } from "./components/SanjayPhoto";
import { SanjayBot } from "./components/SanjayBot";
import { SanjayLoader } from "./components/SanjayLoader";
import { SanjayToolsOrbit } from "./components/SanjayToolsOrbit";
import { SanjayCurrentlyBuilding } from "./components/SanjayCurrentlyBuilding";

import { SanjayAbout } from "./components/SanjayAbout";
import { SanjayEducation } from "./components/SanjayEducation";
import { SanjayExperience } from "./components/SanjayExperience";
import { SanjayAchievements } from "./components/SanjayAchievements";
import { SanjayLearning } from "./components/SanjayLearning";
import { SanjayBlogs } from "./components/SanjayBlogs";
import { SanjayExtra } from "./components/SanjayExtra";

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [themePreset, setThemePreset] = useState<"universe" | "emerald" | "cyber" | "vintage">("universe");
  
  // Single-Page Active Router state
  const [activePage, setActivePage] = useState<"profile" | "timeline" | "projects" | "blogs" | "contact">("profile");
  
  // Selected project from profile card clicks to open global Case Study
  const [selectedProjectFromProfile, setSelectedProjectFromProfile] = useState<Project | null>(null);

  const handleSelectProjectFromProfile = (projectId: string) => {
    const found = PROJECT_DATA.find((p) => p.id === projectId);
    if (found) {
      setSelectedProjectFromProfile(found);
    }
  };
  
  // High-fidelity presentation view engine states (Continuous vs Tabbed)
  const [viewMode, setViewMode] = useState<"continuous" | "tabbed">("continuous");
  const [activeSection, setActiveSection] = useState("profile");

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCjIgMCBvYmoKICA8PCAvVHlwZSAvUGFnZXMKICAgICAvS2lkcyBbIDMgMCBSIF0KICAgICAvQ291bnQgMQogID4+CmVuZG9iagozIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2UKICAgICAvUGFyZW50IDIgMCBSCiAgICAgL01lZGlhQm94IFsgMCAwIDU5NSA4NDIgXQogICAgIC9Db255ZW50cyA0IDAgUgogICAgIC9SZXNvdXJjZXMgPDwgL0ZvbnQgPDwgL0YxIDUgMCBSID4+ID4+CiAgPj4KZW5kb2JqCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDI2NiA+PgpzdHJlYW0KQlQKICAvRjEgMjQgVGYKICA3MCA3ODAgVGQKICAoS3Jpa29uZGEgU2FuamF5IC0gU2VuaW9yIFdleXMgRGV2ZWxvcGVyIFJlc3VtZSkgVGoKICAvRjEgMTIgVGYKICAwIC00MCBUZApzZXByYXRvciAoU3Jpa29uZGEgU2FuamF5IG9mZmljaWFsIHJlc3VtZSBkb3dubG9hZC4gTUJBICZhbXA7IGZ1bGwtc3RhY2sgZW5naW5lZXIuKSBUagogIDAgLTIwIFRqCnNlcHJhdG9yIChDb250YWN0OiBzaXJpa29uZGFzYW5qYXkwMEBnbWFpbC5jb20gfCArOTE3NjYwOTgzOTczKSBUagogIDAgLTIwIFRqCnNlcHJhdG9yIChQb3J0Zm9saW86IGh0dHBzOi8vc2FuamF5LnByb2R1Y3RzKSBUagogIDAgLTIwIFRqCnNlcHJhdG9yIChTcGVjaWFsaXN0IGluIFJlYWN0LCBQSFAsIE15U1FMLCBFLUNvbW1lcmNlIFBsYXRmb3JtcykgVGoKIEVVCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iaagogIDw8IC9UeXBlIC9Gb250CiAgICAgL1N1YnR5cGUgL1R5cGUxCiAgICAgL0Jhc2VGb250IC9IZWx2ZXRpY2EKICA+PgplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE1IDAwMDAwIG4gCDAwMDAwMDAwNjkgMDAwMDAgbSAKMDAwMDAwMDEzOSAwMDAwMCBuIAowMDAwMDAwMjc4IDAwMDAwIG4gCDAwMDAwMDA1OTQgMDAwMDAgbSAKdHJhaWxlcgogIDw8IC9TaXplIDYKICAgICAvUm9vdCAxIDAgUgogID4+CnN0YXJ0eHJlZgogNjczCiUlRU9GCg==";
    link.download = "Srikonda_Sanjay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Router overlay & Entrance countdown states
  const [isLoaderActive, setIsLoaderActive] = useState(true);

  // Rotating headline index
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const rotatingTaglines = [
    "MBA Graduate → Business Thinker → Product Builder",
    "Building Business Platforms & E-Commerce Systems",
    "CRM Solutions & Modern Web Experiences",
    "Currently working on production projects at MediaWagon"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("sirikondasanjay00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+917660983973");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    // Simulate sending form email
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
      setFormName("");
      setFormEmail("");
      setFormMsg("");
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1200);
  };

  // Dynamic design variables matching selected style suggestions
  const presetConfig = {
    universe: {
      accent: "#f43f5e", // rose-500
      accentHover: "#e11d48",
      accentMuted: "rgba(244, 63, 94, 0.15)",
      accentBorder: "rgba(244, 63, 94, 0.3)",
      glow1: "rgba(244, 63, 94, 0.35)",
      glow2: "rgba(99, 102, 241, 0.25)",
    },
    emerald: {
      accent: "#10b981", // emerald-500
      accentHover: "#059669",
      accentMuted: "rgba(16, 185, 129, 0.15)",
      accentBorder: "rgba(16, 185, 129, 0.3)",
      glow1: "rgba(16, 185, 129, 0.35)",
      glow2: "rgba(20, 184, 166, 0.25)",
    },
    cyber: {
      accent: "#06b6d4", // cyan-500
      accentHover: "#0891b2",
      accentMuted: "rgba(6, 182, 212, 0.15)",
      accentBorder: "rgba(6, 182, 212, 0.3)",
      glow1: "rgba(168, 85, 247, 0.35)",
      glow2: "rgba(6, 182, 212, 0.25)",
    },
    vintage: {
      accent: "#f59e0b", // amber-500
      accentHover: "#d97706",
      accentMuted: "rgba(245, 158, 11, 0.15)",
      accentBorder: "rgba(245, 158, 11, 0.3)",
      glow1: "rgba(245, 158, 11, 0.35)",
      glow2: "rgba(120, 113, 108, 0.25)",
    }
  }[themePreset];

  const listItems = [
    { label: "Profile Overview", id: "profile", idx: "01" },
    { label: "Timeline & Tool Stack", id: "timeline", idx: "02" },
    { label: "Projects Case Studies (6)", id: "projects", idx: "03" },
    { label: "Technical Blogs", id: "blogs", idx: "04" },
    { label: "Direct Channels", id: "contact", idx: "05" }
  ];

  // Monitor coordinates and set active sections when scrolling under continuous view Mode
  useEffect(() => {
    if (viewMode !== "continuous") return;
    const handleScroll = () => {
      const sections = ["profile", "timeline", "projects", "blogs", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const sect of sections) {
        const el = document.getElementById(`${sect}-section`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewMode]);

  const handleNavClick = (id: string) => {
    if (viewMode === "continuous") {
      const el = document.getElementById(`${id}-section`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    } else {
      setActivePage(id as any);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Overriding style classes based on theme preset style suggestions */}
      <style>{`
        :root {
          --theme-accent: ${presetConfig.accent};
          --theme-accent-hover: ${presetConfig.accentHover};
          --theme-accent-muted: ${presetConfig.accentMuted};
          --theme-accent-border: ${presetConfig.accentBorder};
          --theme-glow-1: ${presetConfig.glow1};
          --theme-glow-2: ${presetConfig.glow2};
        }

        /* Dynamically shift classes */
        .text-rose-500, .text-rose-450, .text-rose-400 {
          color: var(--theme-accent) !important;
        }
        .bg-rose-500, .bg-rose-600 {
          background-color: var(--theme-accent) !important;
        }
        .bg-rose-500\\/10 {
          background-color: var(--theme-accent-muted) !important;
        }
        .hover\\:bg-rose-600:hover {
          background-color: var(--theme-accent-hover) !important;
        }
        .border-rose-500\\/20 {
          border-color: var(--theme-accent-border) !important;
        }
        .border-rose-500\\/30, .border-rose-500\\/25 {
          border-color: var(--theme-accent-border) !important;
        }
        .hover\\:border-rose-500\\/20:hover {
          border-color: var(--theme-accent-border) !important;
        }
        .group-hover\\:border-rose-500\\/35:hover, .group-hover\\:border-rose-500\\/30:hover {
          border-color: var(--theme-accent) !important;
        }
        .hover\\:text-rose-500:hover {
          color: var(--theme-accent) !important;
        }
        .hover\\:text-rose-400:hover {
          color: var(--theme-accent-hover) !important;
        }
        .glow-spot-1 {
          background: radial-gradient(circle, var(--theme-glow-1) 0%, transparent 70%) !important;
        }
        .glow-spot-2 {
          background: radial-gradient(circle, var(--theme-glow-2) 0%, transparent 70%) !important;
        }
        .shadow-rose-500\\/15 {
          box-shadow: 0 10px 15px -3px var(--theme-accent-muted) !important;
        }
        .shadow-rose-500\\/25, .shadow-rose-500\\/5 {
          box-shadow: 0 10px 25px -3px var(--theme-accent-muted) !important;
        }
      `}</style>

      {/* Immersive Staggered Entrance Loader */}
      <SanjayLoader onComplete={() => setIsLoaderActive(false)} />

      <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${themeMode === "light" ? "bg-slate-50 text-slate-900" : "bg-[#08080A] text-slate-100"}`}>
        {/* Dynamic Ambient Background Blobs */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full glow-spot-1 filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute top-[50%] right-[-10%] w-[40rem] h-[40rem] rounded-full glow-spot-2 filter blur-3xl opacity-30 pointer-events-none" />

        {/* Sticky Header Navigation (REPLACES THE SIDEBAR FULLY COHESIVELY) */}
        <nav className={`fixed top-4 left-4 right-4 z-40 rounded-2xl border transition-all duration-300 ${themeMode === "light" ? "bg-white/90 border-slate-200/55 shadow-md" : "bg-slate-950/80 border-white/5 shadow-2xl"} backdrop-blur-md`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              {/* Branding Logo */}
              <button
                onClick={() => {
                  if (viewMode === "continuous") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveSection("profile");
                  } else {
                    setActivePage("profile");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`font-display text-2xl tracking-widest font-bold text-left cursor-pointer ${themeMode === "light" ? "text-slate-900" : "text-white"}`}
              >
                SS<span className="text-rose-500">.</span>
              </button>
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase ${themeMode === "light" ? "bg-slate-200/60 text-slate-600" : "bg-white/5 text-slate-400 border border-white/5"}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Web Dev @ MediaWagon</span>
              </div>
            </div>

            {/* Desktop Center Page Links */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-900/30 p-1 rounded-xl border border-white/5 select-none font-mono text-xs">
              {listItems.map((item) => {
                const isActive = viewMode === "continuous" ? activeSection === item.id : activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-rose-500 text-white shadow-md shadow-rose-500/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="opacity-60 text-[9px] mr-1">{item.idx}.</span>
                    {item.label.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {/* Swatch Settings / Utilities */}
            <div className="flex items-center gap-3">
              {/* Layout Mode Selector (Continuous/Tabbed) */}
              <div className={`hidden md:flex items-center gap-1 p-1 rounded-xl border ${themeMode === "light" ? "bg-slate-100 border-slate-200" : "bg-slate-900/30 border-white/5"}`}>
                <button
                  onClick={() => {
                    setViewMode("continuous");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-[10.5px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === "continuous"
                      ? "bg-rose-500 text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  title="Single comprehensive custom feed with table of contents scroll"
                >
                  Continuous
                </button>
                <button
                  onClick={() => {
                    setViewMode("tabbed");
                    setActivePage("profile");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-[10.5px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === "tabbed"
                      ? "bg-rose-500 text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  title="Separated modular highlights pages split view"
                >
                  Tabbed
                </button>
              </div>

              {/* Theme Settings Preset Swatches */}
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border select-none ${themeMode === "light" ? "bg-slate-100 border-slate-200" : "bg-slate-900/60 border-white/5"}`}>
                <span className={`text-[8px] font-mono font-bold mr-1 uppercase tracking-widest ${themeMode === "light" ? "text-slate-600" : "text-slate-400"}`}>Preset:</span>
                {[
                  { id: "universe", color: "bg-rose-500" },
                  { id: "emerald", color: "bg-emerald-500" },
                  { id: "cyber", color: "bg-cyan-500" },
                  { id: "vintage", color: "bg-amber-500" }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setThemePreset(p.id as any)}
                    className={`w-3 h-3 rounded-full ${p.color} transition-all duration-300 relative cursor-pointer ${themePreset === p.id ? "scale-125 ring-2 ring-white" : "opacity-45 hover:opacity-100"}`}
                    title={`Theme Preset: ${p.id}`}
                  />
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
                className={`p-2 rounded-xl border cursor-pointer hover:bg-white/5 transition-all ${themeMode === "light" ? "border-slate-200 bg-slate-100 text-slate-800" : "border-white/5 bg-slate-900"}`}
                title={`Theme Mode: Switch to ${themeMode === "light" ? "Dark Mode" : "Light Mode"}`}
              >
                {themeMode === "light" ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Mobile Drawer Trigger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border md:hidden cursor-pointer ${themeMode === "light" ? "border-slate-200 text-slate-800" : "border-white/5 text-slate-100"}`}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Menu Drawer with Page Swappers */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`border-t md:hidden ${themeMode === "light" ? "bg-white border-slate-200" : "bg-[#090c13] border-white/5"}`}
              >
                <div className="px-6 py-4 flex flex-col gap-2 font-mono text-xs select-none">
                  {/* View mode toggle inside mobile menu */}
                  <div className="flex items-center justify-between pb-3 border-b border-rose-500/10 mb-2">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Presentation View:</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setViewMode("continuous")}
                        className={`px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${viewMode === "continuous" ? "bg-rose-500 text-white" : "bg-white/5 text-slate-400"}`}
                      >
                        Continuous
                      </button>
                      <button
                        onClick={() => {
                          setViewMode("tabbed");
                          setActivePage("profile");
                        }}
                        className={`px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${viewMode === "tabbed" ? "bg-rose-500 text-white" : "bg-white/5 text-slate-400"}`}
                      >
                        Tabbed
                      </button>
                    </div>
                  </div>

                  {listItems.map((item) => {
                    const isActive = viewMode === "continuous" ? activeSection === item.id : activePage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          handleNavClick(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`py-3 text-left transition-colors uppercase tracking-widest font-black flex items-center justify-between ${
                          isActive ? "text-rose-500" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>✦ {item.idx} . {item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* MAIN BODY WRAPPER centering the single full-width layout */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-28 md:py-36 min-h-[75vh]">
          {/* Information banner about current presentation Mode choice */}
          <div className="mb-10 text-left">
            <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none ${themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900/10 border-white/5"}`}>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-black text-rose-500 tracking-wider block">✦ PRESENTATION ENGINE CONFIGURATION</span>
                <p className={`text-[11px] leading-relaxed ${themeMode === "light" ? "text-slate-600" : "text-slate-400"}`}>
                  Currently viewing in <strong className="text-rose-500 uppercase">{viewMode === "continuous" ? "Continuous Scroll Index (Shows All Details)" : "Tabbed Highlights Mode (Shows Minimal Details)"}</strong>. Use the controls to toggle layout preferences or themes.
                </p>
              </div>
              <button
                onClick={() => {
                  setViewMode(viewMode === "continuous" ? "tabbed" : "continuous");
                  if (viewMode === "continuous") {
                    setActivePage("profile");
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2.5 px-4 shrink-0 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-[10px] font-mono tracking-widest font-black uppercase transition duration-300 cursor-pointer shadow-md shadow-rose-500/10"
              >
                Toggle Layout Grid
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "continuous" ? (
              <motion.div
                key="continuous-feed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-24"
              >
                {/* SECTION 1: PROFILE DIRECTORY */}
                <div id="profile-section" className="scroll-mt-32 space-y-16">
                  {/* Hero Intro banner */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                    {/* Left narrative block */}
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-3">
                        <span className="text-rose-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20 w-fit select-none">
                          <Sparkles className="w-4 h-4 text-rose-500" /> Business Thinker & Product Builder
                        </span>
                        
                        <h1 className={`text-4xl sm:text-6xl font-display font-black leading-tight tracking-tight ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                          Srikonda Sanjay
                        </h1>

                        {/* Slideline Rotating Tag */}
                        <div className="h-6 overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.p
                              key={rotatingIndex}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              className="text-xs sm:text-sm font-mono text-rose-400 font-bold uppercase tracking-widest text-left"
                            >
                              {rotatingTaglines[rotatingIndex]}
                            </motion.p>
                          </AnimatePresence>
                        </div>

                        <p className={`text-sm leading-relaxed font-sans max-w-2xl ${themeMode === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          MBA Graduate → Business Thinker → Product Builder. Building Business Platforms, E-Commerce Systems, CRM Solutions & Modern Web Experiences. Currently working on production projects at MediaWagon.
                        </p>
                      </div>

                      {/* Direct details coordinates badges */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                        {[
                          { val: "368+", label: "Products Managed" },
                          { val: "15+", label: "CRM Modules Built" },
                          { val: "2", label: "Gateway Integrations" },
                          { val: "6", label: "Client Projects" }
                        ].map((stat, idx) => (
                          <div key={idx} className={`p-4 rounded-2xl border text-center ${themeMode === "light" ? "bg-white border-slate-200 shadow-xs" : "bg-slate-900/10 border-white/5"}`}>
                            <span className="text-xl sm:text-2xl font-display font-black text-rose-500">{stat.val}</span>
                            <p className="text-[9px] uppercase font-mono text-slate-400 mt-1 leading-none">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Call-to-actions */}
                      <div className="flex flex-wrap gap-4 pt-2">
                        <button
                          onClick={() => handleNavClick("projects")}
                          className="px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-rose-500/10 cursor-pointer flex items-center gap-1.5 transition-all"
                        >
                          <span>Explore Projects</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={handleDownloadCV}
                          className={`px-5 py-3.5 rounded-xl border font-mono text-xs font-bold tracking-widest uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                            themeMode === "light"
                              ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          <FileDown className="w-4 h-4" />
                          <span>FETCH OFFICIAL CV</span>
                        </button>
                      </div>
                    </div>

                    {/* Right asset: Sanjay's profile photo frame */}
                    <div className="md:col-span-4 flex justify-center">
                      <SanjayPhoto />
                    </div>
                  </div>

                  {/* Currently Building Premium Section */}
                  <SanjayCurrentlyBuilding themeMode={themeMode} onSelectProject={handleSelectProjectFromProfile} />

                  {/* About Sanjay Component */}
                  <SanjayAbout themeMode={themeMode} />

                  {/* Achievements section */}
                  <SanjayAchievements themeMode={themeMode} />

                  {/* Frequently Asked Questions */}
                  <SanjayExtra themeMode={themeMode} />
                </div>

                {/* SECTION 2: TIMELINE & SKILLS STACK */}
                <div id="timeline-section" className="scroll-mt-32 space-y-16 border-t border-rose-500/10 pt-16">
                  {/* Skill orbits header */}
                  <div className="text-left space-y-4">
                    <span className="text-rose-500 font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                      TECHNICAL ARSENAL Orbits
                    </span>
                    <h2 className={`text-2xl sm:text-4xl font-display font-black ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                      Tech Stack Orbit & Capabilities
                    </h2>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-2xl">
                      A visual orbits map demonstrating hands-on technology proficiencies from frontend presentation interfaces to relational storage parameters.
                    </p>
                  </div>

                  {/* Orbiting Stacks canvas */}
                  <SanjayToolsOrbit themeMode={themeMode} />

                  {/* Dynamic skills categories grid list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                    {[
                      { title: "Frontend Fluency", skills: ["ReactJS (V19)", "ES6+ JS Script", "Tailwind CSS v4", "Bootstrap 5", "jQuery", "CSS3 / HTML5"] },
                      { title: "Backend Systems", skills: ["PHP Structuring", "REST APIs", "JSON DataConduits", "Razorpay Gateways", "Node.js Basics"] },
                      { title: "Relational Queries", skills: ["MySQL Server 8", "Structured SQL Keys", "Cascading Foreign Links", "Query Optimizations"] },
                      { title: "Workspaces Tools", skills: ["Git / GitHub Engine", "VS Code Studio", "Vite Bundler", "Postman APIs Client", "Lighthouse Tools"] }
                    ].map((cat, idx) => (
                      <div key={idx} className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200 shadow-2xs" : "bg-slate-900/15 border-white/5"}`}>
                        <h4 className={`text-xs font-mono font-black uppercase mb-3 ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>{cat.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((st) => (
                            <span key={st} className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/15 text-rose-400 font-semibold uppercase">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Work Experience timelines */}
                  <SanjayExperience themeMode={themeMode} />

                  {/* Education timelines */}
                  <SanjayEducation themeMode={themeMode} />

                  {/* Academy learnings updates and continuous certifications list */}
                  <SanjayLearning themeMode={themeMode} />
                </div>

                {/* SECTION 3: SEPARATE PROJECTS OVERVIEW PAGE */}
                <div id="projects-section" className="scroll-mt-32 space-y-8 text-left border-t border-rose-500/10 pt-16">
                  {/* High impact Projects banner */}
                  <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1541462608141-27b297b15575?auto=format&fit=crop&q=80&w=1200"
                      alt="Sanjay projects layout cover"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-[0.85] hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                    <div className="absolute bottom-5 left-6 sm:left-8 z-10">
                      <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-full border border-[#a855f7]/20">
                        03 . WORK PORTFOLIO
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
                        Projects Overview Page
                      </h2>
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/15 border-white/5"}`}>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      "Explore high-fidelity live web products and enterprise tools delivered for small and medium retailers in South India. Click the **Explore Case Study** button on any of the live production cards below to trigger the advanced inline sliding sheets—including exact modular components schemas, key SQL relational joins statements, and database design maps."
                    </p>
                  </div>

                  {/* Live Dynamic Projects List Showcase component */}
                  <ProjectShowcase projects={PROJECT_DATA} themeMode={themeMode} />
                </div>

                {/* SECTION 4: BLOGS & TECHNICAL INSIGHTS */}
                <div id="blogs-section" className="scroll-mt-32 text-left border-t border-rose-500/10 pt-16">
                  <SanjayBlogs themeMode={themeMode} />
                </div>

                {/* SECTION 5: RECRUITMENT CONTACT CHANNEL */}
                <div id="contact-section" className="scroll-mt-32 space-y-8 text-left border-t border-rose-500/10 pt-16">
                  <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
                      alt="Contact Srikonda Sanjay cover"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-[0.8] hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                    <div className="absolute bottom-5 left-6 sm:left-8 z-10">
                      <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#10b981] bg-[#10b981]/10 px-2.5 py-0.5 rounded-full border border-[#10b981]/20">
                        05 . CONTACT CHANNEL
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
                        Connect Coordinates & Channels
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Copy Coordinates Cards */}
                    <div className="space-y-4">
                      <div className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-4`}>
                        <h4 className="text-xs font-mono font-black uppercase text-rose-500">
                          Primary Communications Channels
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          Srikonda Sanjay is actively open for Full-Time positions as a Web Developer, React Frontend Developer, or Core PHP Engineer. Let's start transforming strategy targets into production scripts together!
                        </p>

                        <div className="space-y-3 pt-1">
                          {/* Email coordinates */}
                          <div className={`p-4 rounded-xl border flex items-center justify-between ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                            <div className="flex items-center gap-3 text-xs text-left">
                              <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                              <div>
                                <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">Email ID</span>
                                <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>sirikondasanjay00@gmail.com</span>
                              </div>
                            </div>
                            <button onClick={copyEmail} className="p-2 rounded-lg bg-slate-950/30 text-rose-500 hover:text-white cursor-pointer" title="Copy email">
                              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                            </button>
                          </div>

                          {/* Mobile Call Coordinates */}
                          <div className={`p-4 rounded-xl border flex items-center justify-between ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                            <div className="flex items-center gap-3 text-xs text-left">
                              <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                              <div>
                                <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">Cellular call</span>
                                <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>+91-7660983973</span>
                              </div>
                            </div>
                            <button onClick={copyPhone} className="p-2 rounded-lg bg-slate-950/30 text-rose-500 hover:text-white cursor-pointer" title="Copy cellular call">
                              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                            </button>
                          </div>

                          {/* Location coordinates */}
                          <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs text-left ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                            <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                            <div>
                              <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">STATION</span>
                              <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>Hyderabad, Telangana, India</span>
                            </div>
                          </div>
                        </div>

                        {/* Social linkages */}
                        <div className="flex items-center gap-3 pt-2">
                          <a href="https://linkedin.com/in/sanjaysirikonda2" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-blue-400 px-4 py-2.5 rounded-xl font-mono text-[10px] font-bold cursor-pointer transition">
                            <Linkedin className="w-4 h-4" />
                            <span>LINKEDIN ↗</span>
                          </a>
                          <a href="https://github.com/sanju2331" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-4 py-2.5 rounded-xl font-mono text-[10px] font-bold cursor-pointer transition">
                            <Github className="w-4 h-4" />
                            <span>GITHUB ↗</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Inquiry terminal submission form */}
                    <div className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200 animate-fade-in" : "bg-slate-900/15 border-white/5"} space-y-4`}>
                      <h4 className="text-xs font-mono font-black uppercase text-rose-500 flex items-center gap-1.5 hover:text-rose-450 font-bold">
                        <Send className="w-4 h-4 text-rose-500" /> Transmit Secure Inquiry
                      </h4>
                      <form onSubmit={handleContactSubmit} className="space-y-3 text-left font-sans text-xs">
                        <div>
                          <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="e.g. Rachel Green"
                            className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="e.g. rachel@fashionlabel.com"
                            className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Inquiry Message</label>
                          <textarea
                            required
                            rows={3}
                            value={formMsg}
                            onChange={(e) => setFormMsg(e.target.value)}
                            placeholder="Hi Sanjay, we would love to schedule a dynamic call regarding a full-stack engineer role in Bangalore/Hyderabad..."
                            className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white resize-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={formLoading}
                          className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-slate-700 text-white font-mono font-bold text-xs tracking-widest uppercase py-3 rounded-xl cursor-pointer shadow-lg hover:brightness-110 flex items-center justify-center gap-2 transition"
                        >
                          {formLoading ? <span>Transmitting...</span> : <><span>Transmit Message</span><SendHorizontal className="w-3.5 h-3.5" /></>}
                        </button>

                        <AnimatePresence>
                          {formSuccess && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-lg flex items-center gap-2 leading-relaxed">
                              <span>✦ Transmission successful! Sanjay has received details.</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-16"
              >
                
                {/* PAGE 1: PROFILE OVERVIEW (HOME BASE) */}
                {activePage === "profile" && (
                  <div className="space-y-16">
                    {/* Hero Intro banner */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                      {/* Left narrative block */}
                      <div className="md:col-span-8 space-y-6">
                        <div className="space-y-3">
                          <span className="text-rose-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20 w-fit select-none">
                            <Sparkles className="w-4 h-4 text-rose-500" /> Business Thinker & Product Builder
                          </span>
                          
                          <h1 className={`text-4xl sm:text-6xl font-display font-black leading-tight tracking-tight ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                            Srikonda Sanjay
                          </h1>

                          {/* Slideline Rotating Tag */}
                          <div className="h-6 overflow-hidden">
                            <AnimatePresence mode="wait">
                              <motion.p
                                key={rotatingIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="text-xs sm:text-sm font-mono text-rose-400 font-bold uppercase tracking-widest text-left"
                              >
                                {rotatingTaglines[rotatingIndex]}
                              </motion.p>
                            </AnimatePresence>
                          </div>

                          <p className={`text-sm leading-relaxed font-sans max-w-2xl ${themeMode === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            MBA Graduate → Business Thinker → Product Builder. Building Business Platforms, E-Commerce Systems, CRM Solutions & Modern Web Experiences. Currently working on production projects at MediaWagon.
                          </p>
                        </div>

                        {/* Direct details coordinates badges */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                          {[
                            { val: "368+", label: "Products Managed" },
                            { val: "15+", label: "CRM Modules Built" },
                            { val: "2", label: "Gateway Integrations" },
                            { val: "6", label: "Client Projects" }
                          ].map((stat, idx) => (
                            <div key={idx} className={`p-4 rounded-2xl border text-center ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"}`}>
                              <span className="text-xl sm:text-2xl font-display font-black text-rose-455 text-rose-500">{stat.val}</span>
                              <p className="text-[9px] uppercase font-mono text-slate-400 mt-1 leading-none">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Call-to-actions */}
                        <div className="flex flex-wrap gap-4 pt-2">
                          <button
                            onClick={() => setActivePage("projects")}
                            className="px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-rose-500/10 cursor-pointer flex items-center gap-1.5 transition-all"
                          >
                            <span>Explore Projects</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={handleDownloadCV}
                            className={`px-5 py-3.5 rounded-xl border font-mono text-xs font-bold tracking-widest uppercase cursor-pointer flex items-center gap-1.5 transition-all ${
                              themeMode === "light"
                                ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            <FileDown className="w-4 h-4" />
                            <span>FETCH OFFICIAL CV</span>
                          </button>
                        </div>
                      </div>

                      {/* Right asset: Sanjay's profile photo frame */}
                      <div className="md:col-span-4 flex justify-center">
                        <SanjayPhoto />
                      </div>
                    </div>

                    {/* Currently Building Premium Section */}
                    <SanjayCurrentlyBuilding themeMode={themeMode} onSelectProject={handleSelectProjectFromProfile} />

                    {/* About Sanjay Component */}
                    <SanjayAbout themeMode={themeMode} />

                    {/* Achievements section */}
                    <SanjayAchievements themeMode={themeMode} />

                    {/* Frequently Asked Questions */}
                    <SanjayExtra themeMode={themeMode} />
                  </div>
                )}

                {/* PAGE 2: TIMELINE & SKILLS STACK */}
                {activePage === "timeline" && (
                  <div className="space-y-16">
                    {/* Skill orbits header */}
                    <div className="text-left space-y-4">
                      <span className="text-rose-500 font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                        TECHNICAL ARSENAL Orbits
                      </span>
                      <h2 className={`text-2xl sm:text-4xl font-display font-black ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                        Tech Stack Orbit & Capabilities
                      </h2>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-2xl">
                        A visual orbits map demonstrating hands-on technology proficiencies from frontend presentation interfaces to relational storage parameters.
                      </p>
                    </div>

                    {/* Orbiting Stacks canvas */}
                    <SanjayToolsOrbit themeMode={themeMode} />

                    {/* Dynamic skills categories grid list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                      {[
                        { title: "Frontend Fluency", skills: ["ReactJS (V19)", "ES6+ JS Script", "Tailwind CSS v4", "Bootstrap 5", "jQuery", "CSS3 / HTML5"] },
                        { title: "Backend Systems", skills: ["PHP Structuring", "REST APIs", "JSON DataConduits", "Razorpay Gateways", "Node.js Basics"] },
                        { title: "Relational Queries", skills: ["MySQL Server 8", "Structured SQL Keys", "Cascading Foreign Links", "Query Optimizations"] },
                        { title: "Workspaces Tools", skills: ["Git / GitHub Engine", "VS Code Studio", "Vite Bundler", "Postman APIs Client", "Lighthouse Tools"] }
                      ].map((cat, idx) => (
                        <div key={idx} className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/15 border-white/5"}`}>
                          <h4 className={`text-xs font-mono font-black uppercase mb-3 ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>{cat.title}</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((st) => (
                              <span key={st} className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/15 text-rose-400 font-semibold uppercase">
                                {st}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Work Experience timelines */}
                    <SanjayExperience themeMode={themeMode} />

                    {/* Education timelines */}
                    <SanjayEducation themeMode={themeMode} />

                    {/* Academy learnings updates and continuous certifications list */}
                    <SanjayLearning themeMode={themeMode} />
                  </div>
                )}

                {/* PAGE 3: SEPARATE PROJECTS OVERVIEW PAGE (WITH MULTI SCREEN MODALS) */}
                {activePage === "projects" && (
                  <div className="space-y-8 text-left">
                    {/* High impact Projects banner */}
                    <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1541462608141-27b297b15575?auto=format&fit=crop&q=80&w=1200"
                        alt="Sanjay projects layout cover"
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-[0.85] hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                      <div className="absolute bottom-5 left-6 sm:left-8 z-10">
                        <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-full border border-[#a855f7]/20">
                          03 . WORK PORTFOLIO
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
                          Projects Overview Page
                        </h2>
                      </div>
                    </div>

                    <div className={`p-4 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/15 border-white/5"}`}>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        "Explore high-fidelity live web products and enterprise tools delivered for small and medium retailers in South India. Click the **Explore Case Study** button on any of the live production cards below to trigger the advanced inline sliding sheets—including exact modular components schemas, key SQL relational joins statements, and database design maps."
                      </p>
                    </div>

                    {/* Live Dynamic Projects List Showcase component */}
                    <ProjectShowcase projects={PROJECT_DATA} themeMode={themeMode} />
                  </div>
                )}

                {/* PAGE 4: BLOGS & TECHNICAL INSIGHTS */}
                {activePage === "blogs" && (
                  <div className="space-y-8 text-left">
                    {/* Blogs list */}
                    <SanjayBlogs themeMode={themeMode} />
                  </div>
                )}

                {/* PAGE 5: RECRUITMENT CONTACT CHANNEL */}
                {activePage === "contact" && (
                  <div className="space-y-8 text-left animate-fade-in">
                    <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
                        alt="Contact Srikonda Sanjay cover"
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-[0.8] hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                      <div className="absolute bottom-5 left-6 sm:left-8 z-10">
                        <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#10b981] bg-[#10b981]/10 px-2.5 py-0.5 rounded-full border border-[#10b981]/20">
                          05 . CONTACT CHANNEL
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
                          Connect Coordinates & Channels
                        </h2>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      {/* Copy Coordinates Cards */}
                      <div className="space-y-4">
                        <div className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-4`}>
                          <h4 className="text-xs font-mono font-black uppercase text-rose-500">
                            Primary Communications Channels
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            Srikonda Sanjay is actively open for Full-Time positions as a Web Developer, React Frontend Developer, or Core PHP Engineer. Let's start transforming strategy targets into production scripts together!
                          </p>

                          <div className="space-y-3 pt-1">
                            {/* Email coordinates */}
                            <div className={`p-4 rounded-xl border flex items-center justify-between ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                              <div className="flex items-center gap-3 text-xs text-left">
                                <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                                <div>
                                  <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">Email ID</span>
                                  <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>sirikondasanjay00@gmail.com</span>
                                </div>
                              </div>
                              <button onClick={copyEmail} className="p-2 rounded-lg bg-slate-950/30 text-rose-455 hover:text-white cursor-pointer" title="Copy email">
                                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                              </button>
                            </div>

                            {/* Mobile Call Coordinates */}
                            <div className={`p-4 rounded-xl border flex items-center justify-between ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                              <div className="flex items-center gap-3 text-xs text-left">
                                <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                                <div>
                                  <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">Cellular call</span>
                                  <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>+91-7660983973</span>
                                </div>
                              </div>
                              <button onClick={copyPhone} className="p-2 rounded-lg bg-slate-950/30 text-rose-500 hover:text-white cursor-pointer" title="Copy cellular call">
                                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                              </button>
                            </div>

                            {/* Location coordinates */}
                            <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs text-left ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"}`}>
                              <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                              <div>
                                <span className="text-[9px] uppercase font-mono text-slate-400 block font-black">STATION</span>
                                <span className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>Hyderabad, Telangana, India</span>
                              </div>
                            </div>
                          </div>

                          {/* Social linkages */}
                          <div className="flex items-center gap-3 pt-2">
                            <a href="https://linkedin.com/in/sanjaysirikonda2" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-blue-400 px-4 py-2.5 rounded-xl font-mono text-[10px] font-bold cursor-pointer transition">
                              <Linkedin className="w-4 h-4" />
                              <span>LINKEDIN ↗</span>
                            </a>
                            <a href="https://github.com/sanju2331" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-4 py-2.5 rounded-xl font-mono text-[10px] font-bold cursor-pointer transition">
                              <Github className="w-4 h-4" />
                              <span>GITHUB ↗</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Inquiry terminal submission form */}
                      <div className={`p-5 rounded-2xl border ${themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/15 border-white/5"} space-y-4`}>
                        <h4 className="text-xs font-mono font-black uppercase text-rose-500 flex items-center gap-1.5 hover:text-rose-400 font-bold">
                          <Send className="w-4 h-4 text-rose-500" /> Transmit Secure Inquiry
                        </h4>
                        <form onSubmit={handleContactSubmit} className="space-y-3 text-left font-sans text-xs">
                          <div>
                            <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Full Name</label>
                            <input
                              type="text"
                              required
                              value={formName}
                              onChange={(e) => setFormName(e.target.value)}
                              placeholder="e.g. Rachel Green"
                              className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Email Address</label>
                            <input
                              type="email"
                              required
                              value={formEmail}
                              onChange={(e) => setFormEmail(e.target.value)}
                              placeholder="e.g. rachel@fashionlabel.com"
                              className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1 font-bold">Inquiry Message</label>
                            <textarea
                              required
                              rows={3}
                              value={formMsg}
                              onChange={(e) => setFormMsg(e.target.value)}
                              placeholder="Hi Sanjay, we would love to schedule a dynamic call regarding a full-stack engineer role in Bangalore/Hyderabad..."
                              className="w-full px-3 py-2.5 rounded-xl border outline-none duration-300 bg-slate-950/20 border-white/10 text-white resize-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={formLoading}
                            className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-slate-700 text-white font-mono font-bold text-xs tracking-widest uppercase py-3 rounded-xl cursor-pointer shadow-lg hover:brightness-110 flex items-center justify-center gap-2 transition"
                          >
                            {formLoading ? <span>Transmitting...</span> : <><span>Transmit Message</span><SendHorizontal className="w-3.5 h-3.5" /></>}
                          </button>

                          <AnimatePresence>
                            {formSuccess && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-lg flex items-center gap-2 leading-relaxed">
                                <span>✦ Transmission successful! Sanjay has received details.</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </form>
                      </div>

                    </div>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <footer className={`border-t py-12 ${themeMode === "light" ? "bg-white border-slate-200 text-slate-500" : "bg-[#060608] border-white/5 text-slate-400"}`}>
          <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className={`font-display text-xl tracking-wider font-bold ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>SS</span>
              <span className="text-[11px] font-mono opacity-85">© {new Date().getFullYear()} Srikonda Sanjay. All rights reserved.</span>
            </div>

            <div className="flex gap-6 text-[11px] font-mono tracking-widest uppercase select-none">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="hover:text-rose-500 transition cursor-pointer font-bold"
              >
                BACK TO TOP UNIT ↑
              </button>
            </div>
          </div>
        </footer>

        {/* Floating recruiter companion bot */}
        <SanjayBot />

        {/* Global Case Study Overlay for Clicking Profile Projects */}
        <AnimatePresence>
          {selectedProjectFromProfile && (
            <ProjectCaseStudy 
              project={selectedProjectFromProfile} 
              onClose={() => setSelectedProjectFromProfile(null)} 
              themeMode={themeMode} 
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
