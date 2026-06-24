import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Database,
  Cpu,
  Layers,
  Award,
  Wrench,
  Compass,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Briefcase,
  Layers2,
  Calendar,
  UserCheck,
  Smartphone,
  Laptop,
  Layout,
  Play,
  Maximize2,
  Plus,
  Send,
  Lock,
  Eye,
  Check,
  TrendingUp,
  FileText,
  CreditCard,
  DollarSign,
  BriefcaseBusiness,
  TrendingDown,
  User,
  Trash2,
  PlusCircle,
  ShieldAlert,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

interface ProjectCaseStudyProps {
  project: Project;
  onClose: () => void;
  themeMode: "light" | "dark";
}

export function ProjectCaseStudy({ project, onClose, themeMode }: ProjectCaseStudyProps) {
  const [activeTab, setActiveTab] = useState<"narrative" | "features" | "engineering" | "gallery">("narrative");
  const [lightboxImage, setLightboxImage] = useState<{ url: string; label: string } | null>(null);
  
  // Custom states for interactive gallery
  const [galleryMode, setGalleryMode] = useState<"desktop" | "mobile" | "admin" | "database" | "payment">("desktop");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // States for interactive storytelling chapters
  const [activeStoryStep, setActiveStoryStep] = useState<"problem" | "design" | "dev" | "db" | "deploy">("problem");

  // CRM Simulation States
  const [crmRole, setCrmRole] = useState<"admin" | "manager" | "employee">("admin");
  const [attendanceLogs, setAttendanceLogs] = useState([
    { id: 1, name: "Sanjay S.", role: "Lead Web Dev", status: "Present", time: "09:12 AM" },
    { id: 2, name: "John Doe", role: "UI Designer", status: "Present", time: "09:30 AM" },
    { id: 3, name: "Jane Smith", role: "SEO Specialist", status: "Present", time: "08:45 AM" }
  ]);
  const [leadFilter, setLeadFilter] = useState<"all" | "new" | "negotiation">("all");
  const [crmLeads, setCrmLeads] = useState([
    { id: 101, client: "Telangana Textiles", value: "₹45,000", stage: "new", date: "June 20" },
    { id: 102, client: "Lotus Clinic", value: "₹75,000", stage: "negotiation", date: "June 19" },
    { id: 103, client: "Vintagio India", value: "₹1,20,000", stage: "negotiation", date: "June 18" }
  ]);
  
  // Space & Ground Real Estate state
  const [propertyPrice, setPropertyPrice] = useState(8500000); // 85 Lakhs INR
  const [rentPercent, setRentPercent] = useState(4.2); // 4.2% rental yield
  const [appreciationPercent, setAppreciationPercent] = useState(7.5); // 7.5% annual growth

  // Be Beauty before-after slider divider coordinate
  const [sliderIndex, setSliderIndex] = useState(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Database join hover state
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  // Handle Before/After dragging
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderIndex(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left-click dragging
      handleSliderMove(e.clientX);
    }
  };

  // Simulated screenshot metadata with interactive device presets
  const getSimulatedScreenshots = () => {
    const data: Record<string, { desktop: string[]; mobile: string[]; admin: string[] }> = {
      vintagio: {
        desktop: [
          "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1200", // Home landing
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200"  // Product pages
        ],
        mobile: [
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        ]
      },
      "fashion-perfumes": {
        desktop: [
          "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1200"
        ],
        mobile: [
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        ]
      },
      "mediawagon-crm": {
        desktop: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        ],
        mobile: [
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        ]
      },
      "space-ground": {
        desktop: [
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200"
        ],
        mobile: [
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        ]
      },
      "be-beauty": {
        desktop: [
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
        ],
        mobile: [
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        ]
      },
      hydshops: {
        desktop: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1200"
        ],
        mobile: [
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
        ],
        admin: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        ]
      }
    };
    return data[project.id] || { desktop: [], mobile: [], admin: [] };
  };

  const screenshots = getSimulatedScreenshots();
  const currentScreensList = screenshots[galleryMode];

  // Storytelling structured definitions for real-world projects
  const storyChapters = {
    problem: {
      title: "Business Problem & Client Need",
      desc: project.id === "mediawagon-crm" 
        ? "MediaWagon handled 150+ personnel tracking, shift clocks, follow-up logs, and client billing invoicing across multiple scattered Google Sheets. Data loss, overlapping leaf bookings, untracked agent client follow-ups, and massive report generation delays cost the business up to 25 hours per week in pure operational friction."
        : project.id === "vintagio"
        ? "Luxury antique collectibles depend deeply on details, proof of authentic value, and curated display themes. Traditional local collectors struggled with poor discoverability, complex inventories updates, and lack of transaction safety gates, resulting in zero digital orders."
        : project.id === "fashion-perfumes"
        ? "High-fashion perfume brands live by luxury visual presentation. Existing shopping frames had enormous Cumulative Layout Shift (CLS > 0.35) due to unoptimized assets loading. Pages were slow (FCP > 3.5s) on standard cell networks, causing customer conversions to sink by 15%."
        : project.id === "space-ground"
        ? "Premium property buyers request direct ROI charts and mortgage transparency. Standard property tools offered generic list pages with static files, leading to high friction, low lead conversion rates, and trust deficits."
        : project.id === "be-beauty"
        ? "Aesthetic clinics rely fully on proof of specialized healthcare expertise and clinical success. Without doctor schedule slots grids and real interactive before-after outcomes galleries, call volumes stayed low and dropouts were high."
        : "Hyper-local retail shopkeepers suffered from zero internet discovery channels. Buyers had no local product index directories to check local offers or contact sellers, locking neighborhood commerce in traditional silos."
    },
    design: {
      title: "Tactical UI/UX Design & Brand Assets",
      desc: project.id === "fashion-perfumes"
        ? "Designed a striking layout using luxury pink, deep purple gradient accent blocks, and strict aspect-ratio container grids. We balanced visual negative space with high-contrast elegant serif typography to reflect luxury elegance."
        : project.id === "vintagio"
        ? "Created an antique gold and stone theme context. The interface utilizes generous margins, clean typography pairings, and spacious product card designs resembling museum auctions, allowing each rare figurine or clock to shine."
        : "Engineered high-density layout panels emphasizing immediate visibility. All control buttons and data grid layouts are optimized with a responsive structural hierarchy to show deep data cleanly without clutter."
    },
    dev: {
      title: "Developer Work & Logic Execution",
      desc: "Built using modular architectures to ensure performant loading. We integrated lazy-loading layout blocks, deferred script parsing, local storage caching strategies, and verified REST API endpoints using clean, robust design patterns."
    },
    db: {
      title: "Database Normalization & Performance",
      desc: project.id === "mediawagon-crm"
        ? "Mapped structured indexing using 9 dynamic relational tables. Multi-column schemas, cascade-safe foreign keys, and strict MySQL prepared queries ensure indexing latencies remain under 15ms even during clock-in rush hours."
        : "Architected custom schema grids, indexing product catalogs, category IDs, and transactions ledger logs, enabling ultra-fast querying while maintaining consistent relational integrity."
    },
    deploy: {
      title: "Production Deployment & Care",
      desc: "Deployed using stable web servers, optimized using automated pipelines that compress heavy images to modern WebP files, bundle assets, and establish SSL/TLS encryption parameters to ensure secure delivery with 99.9% uprates."
    }
  };

  // Safe variables for project features
  const getProjectFeaturesSpecs = () => {
    const defaultFeatures = {
      customer: ["Interactive Product catalog", "Dynamic Keyword Search", "Interactive detail overlays", "Comprehensive responsive cards"],
      admin: ["Real-time database records dashboard", "User/CRUD management console", "Comprehensive order log charts", "Dynamic banner file uploading"],
      integrations: ["Razorpay payment processing API", "SMTP swift notification alerts"]
    };

    const specific: Record<string, typeof defaultFeatures> = {
      "vintagio": {
        customer: ["Elegant Rare Catalog", "Era & Century Filter", "AJAX Wishlist & Cart", "Secure User registration checkout"],
        admin: ["Interactive Inventory Ledger", "Category Taxonomy CRUD", "Pending Orders workflow ledger", "Content & Banner manager"],
        integrations: ["Razorpay Secure Gateway v3", "SMTP Gmail automation webhooks"]
      },
      "fashion-perfumes": {
        customer: ["Interactive Scent Notes filter", "Fragrance Collections Grid", "Luxury cart sliders", "User Profile billing details"],
        admin: ["Stock parameters controller", "Visual order tracking lists", "Dynamic product banner updating", "Customer inquiry manager"],
        integrations: ["Razorpay Payments SDK", "SMTP automated order confirmation emails"]
      },
      "mediawagon-crm": {
        customer: ["Staff Clock-In timesheets dashboard", "Role-based leaves request panel", "Kanban customer Pipeline lists", "Digital Invoice creator scheduler"],
        admin: ["Granular RBAC Permission system", "Full Performance Analytic chart boards", "Expense auditing logger", "System clock activity auditor-track"],
        integrations: ["JSON Web token sessions", "MySQL database transaction managers"]
      },
      "space-ground": {
        customer: ["Amortization Yield ROI panel", "Luxury property listings gallery", "Interactive Consultation booking slots", "Interactive filter maps"],
        admin: ["Hot Leads captured logs console", "Broker profile assignments manager", "Dynamic property catalog publisher", "Analytical interest tracker"],
        integrations: ["React-charts engine", "MySQL Lead captures database APIs"]
      },
      "be-beauty": {
        customer: ["Treatment profile catalog list", "Doctors rosters calendar interface", "Interactive Before-After slider viewport", "Inquire capture templates"],
        admin: ["Appointment scheduler coordinator", "Interactive Leads logs board", "Gallery album publisher", "Doctor profile editor"],
        integrations: ["React UI components layers", "Client-side LocalStorage analytics"]
      },
      "hydshops": {
        customer: ["Hyperlocal Directory Index", "Advanced region categories system", "Sellers catalog contact cards", "Search querying engine"],
        admin: ["Vendor signup registrations", "Self-management product shop dashboard", "Catalog review approvals panel", "Promotional banner spaces"],
        integrations: ["PHP local server API endpoints", "MySQL multi-joint indexes"]
      }
    };
    return specific[project.id] || defaultFeatures;
  };

  const features = getProjectFeaturesSpecs();

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler for tabs
  const handleTabClick = (sectionId: "narrative" | "features" | "engineering" | "gallery") => {
    setActiveTab(sectionId);
    const element = document.getElementById(`case-section-${sectionId}`);
    if (element) {
      if (scrollContainerRef.current) {
        const offset = element.offsetTop - 140; // accounted for sticky headings
        scrollContainerRef.current.scrollTo({ top: offset, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Scrollspy effect to highlight active tab
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections: ("narrative" | "features" | "engineering" | "gallery")[] = [
        "narrative",
        "features",
        "engineering",
        "gallery"
      ];
      for (const s of sections) {
        const el = document.getElementById(`case-section-${s}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if top of element aligns close to current window threshold
          if (rect.top <= 240 && rect.bottom >= 200) {
            setActiveTab(s);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="case-study-scroll-container"
      ref={scrollContainerRef}
      className={`fixed inset-0 z-50 overflow-y-auto ${themeMode === "light" ? "bg-[#f8fafc]" : "bg-[#04060b]"}`}
    >
      {/* HEADER BAR FOR CONVERSIONS */}
      <div className={`fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${
        themeMode === "light" ? "bg-[#f8fafc]/90 border-slate-200" : "bg-[#04060b]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            id="back-to-grid-btn"
            onClick={onClose}
            className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition duration-300 cursor-pointer ${
              themeMode === "light" 
                ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200" 
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>BACK TO PORTFOLIO REEL</span>
          </button>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border hidden sm:inline-block ${
              themeMode === "light" ? "bg-slate-100 border-slate-200 text-slate-600" : "bg-rose-500/10 border-rose-500/20 text-rose-400"
            }`}>
              Currently Inspecting Case: {project.title}
            </span>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white font-mono text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                <span>LAUNCH SITE ↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CASE CONTENT VIEWPORT */}
      <div className="pt-24 pb-20">
         {/* HERO BANNER SECTION WITH PARALLAX VIBE & LAUNCH STATS */}
        <div className="relative min-h-[50vh] flex items-center overflow-hidden border-b border-white/5 select-none pt-12 md:pt-16 pb-20">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              src={project.image} 
              alt={project.title}
              initial={{ scale: 1.12, opacity: 0 }}
              animate={{ scale: 1.02, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover filter brightness-[0.25] saturate-[0.6]"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
              themeMode === "light" ? "from-[#f8fafc]" : "from-[#04060b]"
            }`} />
            <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Primary title metrics summary */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8 space-y-6"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <motion.span 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="text-2xl filter drop-shadow"
                  >
                    {project.icon}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[10px] font-mono font-black uppercase tracking-widest text-rose-550 border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 rounded-full text-rose-500"
                  >
                    SaaS Project Launch Platform • {project.role}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full text-emerald-400 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Enterprise Grade
                  </motion.span>
                </div>

                <div className="space-y-3">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-rose-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest block"
                  >
                    {project.subtitle}
                  </motion.span>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-4xl sm:text-6xl font-display font-black leading-tight tracking-tight ${
                      themeMode === "light" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`text-sm sm:text-base leading-relaxed max-w-3xl font-light font-sans ${
                      themeMode === "light" ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Performance stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-2">
                  {[
                    { title: "SPEED LATENCY", val: project.id === "fashion-perfumes" ? "1.8s Load" : "1.2s Load", icon: <Cpu className="w-4 h-4 text-rose-500" /> },
                    { title: "USER CAP", val: "500+ buyers", icon: <UserCheck className="w-4 h-4 text-emerald-400" /> },
                    { title: "REDUX REDUCTION", val: "+30% latency", icon: <Sparkles className="w-4 h-4 text-[#a855f7]" /> }
                  ].map((stat, sIdx) => (
                    <motion.div 
                      key={sIdx} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + sIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition hover:scale-[1.02] ${
                        themeMode === "light" 
                          ? "bg-white border-slate-200 shadow-sm" 
                          : "bg-slate-900/15 border-white/5"
                      }`}
                    >
                      <div className="mt-1">{stat.icon}</div>
                      <div>
                        <span className="text-[9px] uppercase font-mono text-slate-400 block font-bold tracking-wider">{stat.title}</span>
                        <span className={`text-sm font-display font-black group-hover:text-rose-400 ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>{stat.val}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FLOATING SAAS CARD PREVIEW PANEL */}
              <motion.div 
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 flex justify-center"
              >
                <div className={`p-6 rounded-3xl border text-left select-none space-y-4 w-full max-w-sm shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                  themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-950/80 border-white/10 backdrop-blur-xl"
                }`}>
                  <div className="absolute top-[-30%] right-[-10%] w-48 h-48 rounded-full bg-rose-500/10 filter blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b pb-3 border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded-full border border-[#a855f7]/25">LAUNCH SPECIFICATION SHEET</span>
                    <Clock className="w-4 h-4 text-[#a855f7] animate-spin" style={{ animationDuration: "12s" }} />
                  </div>

                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Developer Rank:</span>
                      <strong className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>{project.role}</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Environment Node:</span>
                      <strong className="font-mono text-[10px] text-rose-400 uppercase font-black">Production Live 🟢</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Development Span:</span>
                      <strong className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>
                        {project.id === "mediawagon-crm" ? "6 Months (Continuous)" : project.id === "vintagio" ? "4 Months (Complete)" : "2.5 Months"}
                      </strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Database Core:</span>
                      <strong className={`font-semibold ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>MySQL Server 8.x</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5 justify-start">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-rose-500/5 text-rose-400 border border-rose-500/15 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* PRIMARY SWITCHER FOR SPEC SECTIONS */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-left">
          
          {/* TAB SYSTEM NAVIGATION */}
          <div className={`sticky top-[73px] z-30 flex border-b overflow-x-auto select-none no-scrollbar gap-8 mb-8 backdrop-blur-md rounded-b-xl py-1 transition-all ${
            themeMode === "light" 
              ? "bg-[#f8fafc]/90 border-slate-200" 
              : "bg-[#04060b]/90 border-white/5"
          }`}>
            {[
              { id: "narrative", label: "01 . Project Storytelling & Problem", icon: <Compass className="w-4 h-4" /> },
              { id: "features", label: "02 . Interactive Custom Modules & Dashboard", icon: <Wrench className="w-4 h-4" /> },
              { id: "engineering", label: "03 . Technical Architecture & DB Schemes", icon: <Database className="w-4 h-4" /> },
              { id: "gallery", label: "04 . Device mockups & screenshot placement", icon: <Laptop className="w-4 h-4" /> }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabClick(section.id as any)}
                className={`py-4 text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold transition duration-300 relative cursor-pointer flex-shrink-0 flex items-center gap-2 ${
                  activeTab === section.id 
                    ? "text-rose-500" 
                    : "text-slate-450 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                {section.icon}
                <span>{section.label}</span>
                {activeTab === section.id && (
                  <motion.div layoutId="casePrimaryLineSelector" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            
            {/* VIEWPORT SECTION 1: NARRATIVE AND PROBLEMS */}
            <div id="case-section-narrative" className="scroll-mt-36 border-b border-rose-500/10 pb-16">
              <motion.div
                key="narrative-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
              >
                {/* LEFT CONTEXT FLOW INDEX MENU */}
                <div className="md:col-span-4 space-y-4">
                  <div className={`p-5 rounded-3xl border sticky top-28 select-none text-left space-y-4 ${
                    themeMode === "light" ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"
                  }`}>
                    <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block font-black">
                      ✦ CASE STUDY LIFECYCLE (Audited Steps)
                    </span>
                    <div className="flex flex-col gap-2">
                      {[
                        { id: "problem", label: "01 . Business Bottlenecks" },
                        { id: "design", label: "02 . UI/UX Design System" },
                        { id: "dev", label: "03 . Frontend / Backend Logic" },
                        { id: "db", label: "04 . Normalized Database design" },
                        { id: "deploy", label: "05 . Clustered Deployments" }
                      ].map((step) => (
                        <button
                          key={step.id}
                          onClick={() => setActiveStoryStep(step.id as any)}
                          className={`w-full py-2.5 px-4 text-left rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                            activeStoryStep === step.id
                              ? "bg-rose-500 text-white shadow-md shadow-rose-500/10"
                              : "text-slate-450 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                          }`}
                        >
                          {step.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT DETAILED NARRATIVE PANEL STORYTELLING */}
                <div className="md:col-span-8 space-y-8 text-left">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-950/40 border-white/5"
                  }`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-rose-500" />
                        <h2 className={`text-xl sm:text-2xl font-display font-black uppercase ${
                          themeMode === "light" ? "text-slate-900" : "text-white"
                        }`}>
                          {storyChapters[activeStoryStep].title}
                        </h2>
                      </div>
                      
                      <p className={`text-sm sm:text-base leading-relaxed font-sans font-light ${
                        themeMode === "light" ? "text-slate-650" : "text-slate-300"
                      }`}>
                        {storyChapters[activeStoryStep].desc}
                      </p>
                    </div>

                    {/* STORYTELLING METRIC BLOCKS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-white/5 font-sans text-xs">
                      <div className={`p-4 rounded-2xl border ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-[#090b0e] border-white/5"}`}>
                        <span className="text-[10px] uppercase font-mono font-bold text-rose-500 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4" /> Strategic Assessment
                        </span>
                        <p className="text-[12px] text-slate-400 mt-2 leading-relaxed">
                          Every step represents an intentional software engineering choice focused on performance outcomes. Our development phase reduces memory footprint and eliminates unneeded dynamic requests loops.
                        </p>
                      </div>

                      <div className={`p-4 rounded-2xl border ${themeMode === "light" ? "bg-slate-50 border-slate-200" : "bg-[#090b0e] border-white/5"}`}>
                        <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Production Outcomes
                        </span>
                        <p className="text-[12px] text-slate-400 mt-2 leading-relaxed">
                          By avoiding generic frameworks overhead, we successfully secured sub-second rendering benchmarks on low-resource mobile viewports, converting directly to active customer inquiries.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FREQUENT RECRUITMENT QA BLOCK */}
                  <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
                    themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-950/40 border-white/5"
                  }`}>
                    <h3 className={`text-sm font-mono font-black uppercase text-rose-500`}>✦ ENTERPRISE ROADMAP TIMELINE</h3>
                    <div className="space-y-4 font-sans text-xs">
                      {[
                        { title: "RESEARCH & SCOPE DESIGN", desc: "User journey audits, mapping SQL indices requirement, selecting color palettes." },
                        { title: "FRONTEND SYSTEM ASSEMBLY", desc: "Coding responsive blocks using HTML/CSS/Tailwind and React to achieve 100% layout consistency." },
                        { title: "CORE LOGIC & DATABASE COUPLING", desc: "Implementing Core PHP controllers, building secure prepared statements indexes, and executing payment integrations." },
                        { title: "PERFORMANCE VALIDATIONS", desc: "Rigorous CLS reduction assessments, bundle size refactoring, and mobile speed audits." }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                          className="flex gap-4 items-start"
                        >
                          <span className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                            {idx + 1}
                          </span>
                          <div className="space-y-0.5">
                            <strong className={`font-bold block text-[11px] uppercase tracking-wide ${themeMode === "light" ? "text-slate-800" : "text-white"}`}>{item.title}</strong>
                            <p className="text-slate-450 text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* VIEWPORT SECTION 2: INTERACTIVE CUSTOM MODULE PREVIEWS */}
            <div id="case-section-features" className="scroll-mt-36 pt-4 border-b border-rose-500/10 pb-16">
              <motion.div
                key="features-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 text-left"
              >
                {/* MODULE SPEC CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 rounded-3xl border space-y-4 ${
                      themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900/10 border-white/5"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-black uppercase text-rose-500 block border-b border-rose-500/10 pb-2">
                      ✦ CUSTOMER PLATFORM MODULES
                    </span>
                    <ul className="space-y-3 font-sans text-xs">
                      {features.customer.map((f, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className={`${themeMode === "light" ? "text-slate-700" : "text-slate-300"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 rounded-3xl border space-y-4 ${
                      themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900/10 border-white/5"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-black uppercase text-[#a855f7] block border-b border-[#a855f7]/10 pb-2">
                      ✦ ADMIN CORE SPECIFICATIONS
                    </span>
                    <ul className="space-y-3 font-sans text-xs">
                      {features.admin.map((f, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5" />
                          <span className={`${themeMode === "light" ? "text-slate-700" : "text-slate-300"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 rounded-3xl border space-y-4 ${
                      themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-900/10 border-white/5"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-black uppercase text-emerald-400 block border-b border-emerald-500/10 pb-2">
                      ✦ INTEGRATIONS & CHANNELS
                    </span>
                    <ul className="space-y-3 font-sans text-xs">
                      {features.integrations.map((f, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={`${themeMode === "light" ? "text-slate-700" : "text-slate-300"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* BESPOKE DYNAMIC INTERACTIVE WIDGET PER PROJECT */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                    themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-950/40 border-white/10"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-white/5">
                    <div>
                      <span className="text-[9px] font-mono text-rose-500 uppercase font-black tracking-widest block">✦ EXCLUSIVE INTERACTIVE PREVIEW</span>
                      <h3 className={`text-base sm:text-lg font-display font-black uppercase ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                        {project.id === "mediawagon-crm" && "MediaWagon Custom Live CRM Dashboard Simulator"}
                        {project.id === "vintagio" && "Premium Product Launch Display Showcase"}
                        {project.id === "fashion-perfumes" && "Luxury Floating Scent Skeletons Simulator"}
                        {project.id === "space-ground" && "Immersive ROI & Mortgage Amortization Calculator"}
                        {project.id === "be-beauty" && "Precision Before/After Clinical Transformation Grids"}
                        {project.id === "hydshops" && "Hyperlocal Business listings index lookup"}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full select-none">
                      Fully Interactive Demo Block
                    </span>
                  </div>

                  {/* 1. MEDIAWAGON CRM INTERACTIVE CORE */}
                  {project.id === "mediawagon-crm" && (
                    <div className="space-y-6 font-sans text-xs">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-white/5">
                        <div className="space-y-1 text-left">
                          <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Simulation Mode: Role-Based Views</span>
                          <p className="text-[11px] text-slate-450 leading-relaxed text-slate-450">Currently viewing CRM panels as: <strong className="text-rose-420 uppercase text-rose-400 font-black">{crmRole}</strong>. Swapping changes access logs permissions dynamically!</p>
                        </div>
                        <div className="flex gap-2">
                          {["admin", "manager", "employee"].map((role) => (
                            <button
                              key={role}
                              onClick={() => setCrmRole(role as any)}
                              className={`px-3 py-1.5 rounded-lg text-[10px] uppercase font-mono font-bold tracking-wider transition cursor-pointer ${
                                crmRole === role ? "bg-rose-500 text-white shadow-md shadow-rose-500/10" : "bg-white/5 hover:bg-white/10 text-slate-400"
                              }`}
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* SIMULATED GRID MODULES */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-left">
                        
                        {/* attendance timesheet tracker demo */}
                        <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-white/5">
                            <span className="font-mono text-[10px] text-rose-400 font-bold tracking-widest block">✦ Clock-In Timesheets Logs Tracker</span>
                            <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> DB safe
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {attendanceLogs.map((log) => (
                              <div key={log.id} className="p-2.5 rounded-xl bg-[#090b0e] border border-white/5 flex items-center justify-between text-xs font-mono">
                                <div className="space-y-0.5">
                                  <strong className="text-white block font-bold">{log.name}</strong>
                                  <span className="text-[9px] text-slate-400">{log.role}</span>
                                </div>
                                <div className="text-right">
                                  <span className="text-[9px] uppercase font-black text-emerald-400 block">{log.status}</span>
                                  <span className="text-[9.5px] text-slate-400 leading-none block">{log.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button 
                            onClick={() => {
                              const newLog = { id: Date.now(), name: "John Guest", role: "Auditor Core", status: "Present", time: "10:15 AM" };
                              setAttendanceLogs([...attendanceLogs, newLog]);
                            }}
                            className="w-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/35 text-rose-400 uppercase font-mono py-2 rounded-xl text-[10px] font-bold tracking-widest cursor-pointer transition"
                          >
                            + CLOCK IN TEST AGENT (Simulate DB Query)
                          </button>
                        </div>

                        {/* leads board filter pipeline */}
                        <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-white/5">
                            <span className="font-mono text-[10px] text-[#a855f7] font-bold tracking-widest block">✦ Kanban Client Pipeline Leads</span>
                            <div className="flex gap-1">
                              {["all", "new", "negotiation"].map((fl) => (
                                <button
                                  key={fl}
                                  onClick={() => setLeadFilter(fl as any)}
                                  className={`px-2 py-0.5 rounded text-[9px] uppercase font-mono font-bold ${
                                    leadFilter === fl ? "bg-[#a855f7] text-white" : "bg-white/5 text-slate-400"
                                  }`}
                                >
                                  {fl}
                                </button>
                              ))}
                            </div>
                          </div>

                          {crmRole === "employee" ? (
                            <div className="p-6 text-center border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center space-y-2">
                              <Lock className="w-6 h-6 text-rose-500 animate-bounce" />
                              <strong className="text-[11px] block uppercase text-rose-400">ACCESS DENIED FOR ROLE [EMPLOYEE]</strong>
                              <p className="text-[10px] text-slate-500 leading-relaxed max-w-xs">This data contains custom invoices and leads pipelines restricted by RBAC rules. Select Admin view mode above to unlock coordinates!</p>
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              {crmLeads
                                .filter((ld) => leadFilter === "all" || ld.stage === leadFilter)
                                .map((ld) => (
                                  <div key={ld.id} className="p-3 rounded-xl bg-[#0a0c10] border border-white/5 flex justify-between items-center flex-wrap gap-2 text-xs font-sans">
                                    <div className="text-left">
                                      <strong className="text-white font-bold block">{ld.client}</strong>
                                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Lead value : {ld.value}</span>
                                    </div>
                                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/15 font-mono text-[9px] uppercase tracking-wider">
                                      {ld.stage}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}

                  {/* 2. VINTAGIO DISPLAY PLATFORM */}
                  {project.id === "vintagio" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans text-xs text-left">
                      {[
                        { title: "Rare Vintage Wall Clock", price: "₹85,000", era: "19th Century France", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=400" },
                        { title: "Curated Antique Brass Telescope", price: "₹1,45,000", era: "Victorian Era", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400" },
                        { title: "Etruscan Style Bronze Urn", price: "₹60,000", era: "700 BC Roman Ref", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" }
                      ].map((art, idx) => (
                        <div key={idx} className="p-4 rounded-3xl bg-slate-950 border border-white/5 space-y-3 flex flex-col justify-between group cursor-help">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                            <img src={art.image} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                            <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-slate-950/80 backdrop-blur rounded text-[9px] font-mono font-bold text-amber-500 uppercase">
                              {art.era}
                            </span>
                          </div>
                          <div>
                            <strong className="text-white block font-bold leading-tight">{art.title}</strong>
                            <span className="text-sm font-display font-black text-rose-400 block mt-1">{art.price}</span>
                          </div>
                          <button 
                            onClick={() => alert(`Simulated Vintagio catalog logic: item ${art.title} added to browser session cart!`)}
                            className="w-full bg-rose-500 text-white font-mono text-[10px] tracking-widest font-bold uppercase py-2 rounded-xl hover:bg-rose-600 transition"
                          >
                            + ADD TO WISHLIST
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3. FASHION CLUB GLASSMORPHIC SCENTS */}
                  {project.id === "fashion-perfumes" && (
                    <div className="space-y-6 text-left">
                      <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                        Hover over these fragrance blocks to initiate floating visuals animations designed to replicate luxurious perfume launches. This layout maintains a lightweight page size.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { name: "ROSE & CRIMSON COUTURE", note: "Turkish Damascus Rose, Saffron, Oud Wood", color: "from-rose-500/20 to-purple-950/40" },
                          { name: "NEROLI NOIR PLATINUM", note: "Italian Bergamot, Amber Noir, White Musk", color: "from-amber-500/20 to-amber-950/40" },
                          { name: "JASMINE VELOUR COUTURE", note: "Indian Sambac Jasmine, Vanilla Orchid", color: "from-pink-500/20 to-slate-950/40" }
                        ].map((perf, idx) => (
                          <div 
                            key={idx}
                            className={`p-5 rounded-3xl border bg-gradient-to-b ${perf.color} border-white/5 space-y-4 hover:border-rose-500/20 transition-all duration-300 transform hover:scale-[1.02] cursor-help`}
                          >
                            <div className="h-28 flex items-center justify-center relative">
                              {/* Simulated Glass Scent Bottle via clean CSS */}
                              <div className="w-16 h-24 rounded-2xl bg-white/10 backdrop-blur border border-white/20 relative shadow-xl flex flex-col justify-between p-2 flex-shrink-0 animate-pulse" style={{ animationDuration: `${2.5 + idx}s` }}>
                                <div className="w-6 h-4 mx-auto bg-amber-500/20 border border-white/10 rounded-sm mb-1" />
                                <div className="w-full flex-grow border border-white/5 rounded-lg bg-pink-500/10 flex items-center justify-center font-mono font-bold text-[8px] text-white">
                                  N° {idx + 5}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1 text-center sm:text-left">
                              <strong className="text-white font-mono text-[11px] block uppercase font-black leading-none">{perf.name}</strong>
                              <p className="text-[10px] text-slate-400 leading-tight">{perf.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4. SPACE & GROUND ROI CALCULATOR */}
                  {project.id === "space-ground" && (
                    <div className="space-y-6 font-sans text-xs text-left max-w-3xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Property Cost (INR)</label>
                          <input 
                            type="range" 
                            min="2000000" 
                            max="30000000" 
                            step="500000"
                            value={propertyPrice} 
                            onChange={(e) => setPropertyPrice(Number(e.target.value))}
                            className="w-full accent-rose-500"
                          />
                          <span className="text-sm font-display font-black text-white">₹{(propertyPrice / 100000).toFixed(1)} Lakhs</span>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Target Rental Yield %</label>
                          <input 
                            type="range" 
                            min="2" 
                            max="10" 
                            step="0.1"
                            value={rentPercent} 
                            onChange={(e) => setRentPercent(Number(e.target.value))}
                            className="w-full accent-rose-500"
                          />
                          <span className="text-sm font-display font-black text-rose-450 text-rose-500">{rentPercent}% Annually</span>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Est. Growth Appreciation %</label>
                          <input 
                            type="range" 
                            min="3" 
                            max="15" 
                            step="0.5"
                            value={appreciationPercent} 
                            onChange={(e) => setAppreciationPercent(Number(e.target.value))}
                            className="w-full accent-rose-500"
                          />
                          <span className="text-sm font-display font-black text-[#a855f7]">{appreciationPercent}% Annually</span>
                        </div>
                      </div>

                      {/* DYNAMIC CALCULATED PROJECTIONS PANELS */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/5">
                        <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                          <span className="text-[9px] uppercase font-mono text-slate-400 block">Calculated Monthly Rental Earnings</span>
                          <strong className="text-xl sm:text-2xl font-display font-black text-emerald-400 block">
                            ₹{Math.round((propertyPrice * (rentPercent / 100)) / 12).toLocaleString("en-IN")} / mo
                          </strong>
                        </div>

                        <div className="p-4 rounded-xl bg-[#090b0d] border border-white/5 space-y-1">
                          <span className="text-[9px] uppercase font-mono text-slate-400 block">First Year Capital Appreciation gain</span>
                          <strong className="text-xl sm:text-2xl font-display font-black text-teal-400 block">
                            +₹{Math.round(propertyPrice * (appreciationPercent / 100)).toLocaleString("en-IN")}
                          </strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 5. BE BEAUTY CLINICAL transform slider */}
                  {project.id === "be-beauty" && (
                    <div className="space-y-6 text-left max-w-2xl mx-auto font-sans text-xs">
                      <p className="text-xs text-slate-400 leading-relaxed text-center">
                        Drag the golden clinical separator left or right to witness clinical diagnostics skincare results! Showcase of medical aesthetics trust.
                      </p>

                      <div 
                        ref={sliderContainerRef}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden cursor-ew-resize border border-white/10 select-none shadow-2xl"
                      >
                        {/* RIGHT IMAGE (AFTER TREATMENT) */}
                        <img 
                          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" 
                          alt="After skin diagnostics wellness treatment results"
                          className="absolute inset-0 w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-emerald-500/80 text-white rounded font-mono font-bold text-[9px] uppercase tracking-widest shadow">
                          ✦ Post-Treatment outcome glow
                        </div>

                        {/* LEFT IMAGE (BEFORE TREATMENT OVERLAY) */}
                        <div 
                          className="absolute inset-y-0 left-0 overflow-hidden"
                          style={{ width: `${sliderIndex}%` }}
                        >
                          <img 
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                            alt="Before skin aesthetics treatment clinic care"
                            className="absolute inset-0 w-full h-full object-cover filter saturate-[0.6] brightness-[0.75] contrast-[0.95]"
                            style={{ width: sliderContainerRef.current?.getBoundingClientRect().width }}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-rose-500/80 text-white rounded font-mono font-bold text-[9px] uppercase tracking-widest shadow">
                            ✦ Initial diagnostic state
                          </div>
                        </div>

                        {/* GLOWING DIVIDER LINE */}
                        <div 
                          className="absolute inset-y-0 w-1 bg-amber-400 z-20 flex items-center justify-center transform -translate-x-1/2 cursor-ew-resize shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                          style={{ left: `${sliderIndex}%` }}
                        >
                          <div className="w-6 h-6 rounded-full bg-amber-400 border border-white text-slate-900 flex items-center justify-center font-bold text-[9.5px]">
                            ⇄
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 6. HYDSHOPS BUSINESS DIRECTORY */}
                  {project.id === "hydshops" && (
                    <div className="space-y-6 text-left max-w-3xl mx-auto font-sans text-xs">
                      <div className="flex justify-between items-center bg-slate-950 p-3.5 rounded-xl border border-white/5">
                        <span className="font-mono text-[9px] text-[#10b981] font-bold block uppercase tracking-widest">✦ Simulated Hyperlocal Category Lookup</span>
                        <span className="text-[9.5px] text-slate-400 font-mono">ONBOARDED: 75+ ACTIVE LOCAL RETAILERS</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { title: "Sai Lakshmi Furniture Emporium", region: "Kukatpally, Hyd", cat: "Home Decor & Wooden work" },
                          { title: "Medicos Care Diagnostics Retail", region: "Gachibowli, Hyd", cat: "Healthcare essentials store" },
                          { title: "Sanjay Spices & Organic Grocers", region: "Secunderabad, Hyd", cat: "Organic food suppliers" },
                          { title: "MediaWagon Tech Hardware Outlet", region: "Madhapur, Hyd", cat: "Business accessories retail" }
                        ].map((shop, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-white/5 space-y-2 flex justify-between items-center hover:border-emerald-500/20 transition">
                            <div className="space-y-0.5 text-left">
                              <strong className="text-white font-bold block leading-tight">{shop.title}</strong>
                              <span className="text-[9px] text-[#10b981] uppercase font-mono block leading-none">{shop.region}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 font-mono text-[9px]">
                              {shop.cat.split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              </motion.div>
            </div>
 
            {/* VIEWPORT SECTION 3: TECHNICAL ARCHITECTURE & SCHEMAS */}
            <div id="case-section-engineering" className="scroll-mt-36 pt-4 border-b border-rose-500/10 pb-16">
              <motion.div
                key="engineering-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12 text-left"
              >
                {/* 1. ARCHITECTURE CHART DIAGRAM */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                    themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-950/40 border-white/5"
                  }`}
                >
                  <div className="border-b pb-4 border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-rose-500 uppercase font-black tracking-widest block font-bold">03.1 SYSTEM SCHEMATICS LAYOUT</span>
                    <h3 className={`text-base sm:text-lg font-display font-black uppercase ${themeMode === "light" ? "text-slate-900" : "text-white"}`}>
                      Relational Entity & Join Dependencies Chart
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Hover over any table to witness the cascade joins lines highlight dynamically. Prepared indexes operate under 15ms.
                    </p>
                  </div>

                  {/* HIGH FIDELITY DIAGRAM SVG FOR ALL PROJECTS */}
                  {project.id === "mediawagon-crm" ? (
                    <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
                        
                        {/* employees table */}
                        <motion.div 
                          onMouseEnter={() => setHoveredTable("employees")}
                          onMouseLeave={() => setHoveredTable(null)}
                          initial={{ opacity: 0, y: 25, rotateX: -10 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            hoveredTable === "employees" || hoveredTable === null 
                              ? "bg-slate-900 border-rose-500 shadow-lg shadow-rose-500/10" 
                              : "bg-slate-950/50 border-white/5 opacity-50"
                          }`}
                        >
                          <strong className="text-white uppercase text-[10px] block border-b border-white/10 pb-1 mb-2">🏷️ employees</strong>
                          <ul className="space-y-1 text-slate-400 text-[10.5px]">
                            <li>🔑 id : INT [PK]</li>
                            <li>• full_name : VARCHAR</li>
                            <li>• role_tag : VARCHAR</li>
                            <li>• permission : VARCHAR</li>
                          </ul>
                          <span className="text-[8px] text-rose-400 font-bold block mt-2 uppercase">1-to-Many attendance Joins</span>
                        </motion.div>

                        {/* attendance table */}
                        <motion.div 
                          onMouseEnter={() => setHoveredTable("attendance")}
                          onMouseLeave={() => setHoveredTable(null)}
                          initial={{ opacity: 0, y: 25, rotateX: -10 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            hoveredTable === "attendance" || hoveredTable === null 
                              ? "bg-slate-900 border-[#a855f7] shadow-lg shadow-[#a855f7]/10" 
                              : "bg-slate-950/50 border-white/5 opacity-50"
                          }`}
                        >
                          <strong className="text-white uppercase text-[10px] block border-b border-white/10 pb-1 mb-2">⏰ attendance_log</strong>
                          <ul className="space-y-1 text-slate-400 text-[10.5px]">
                            <li>🔑 id : INT [PK]</li>
                            <li>🔗 emp_id : INT [FK]</li>
                            <li>• clock_in : DATETIME</li>
                            <li>• clock_out : DATETIME</li>
                          </ul>
                          <span className="text-[8px] text-[#a855f7] font-bold block mt-2 uppercase">Links To employees (emp_id)</span>
                        </motion.div>

                        {/* leads pipeline table */}
                        <motion.div 
                          onMouseEnter={() => setHoveredTable("leads")}
                          onMouseLeave={() => setHoveredTable(null)}
                          initial={{ opacity: 0, y: 25, rotateX: -10 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            hoveredTable === "leads" || hoveredTable === null 
                              ? "bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10" 
                              : "bg-slate-950/50 border-white/5 opacity-50"
                          }`}
                        >
                          <strong className="text-white uppercase text-[10px] block border-b border-white/10 pb-1 mb-2">🎯 leads_pipeline</strong>
                          <ul className="space-y-1 text-slate-400 text-[10.5px]">
                            <li>🔑 id : INT [PK]</li>
                            <li>🔗 assigned_to : INT [FK]</li>
                            <li>• client : VARCHAR</li>
                            <li>• status : VARCHAR</li>
                          </ul>
                          <span className="text-[8px] text-amber-500 font-bold block mt-2 uppercase">Cascade delete joins</span>
                        </motion.div>

                        {/* invoices table */}
                        <motion.div 
                          onMouseEnter={() => setHoveredTable("invoices")}
                          onMouseLeave={() => setHoveredTable(null)}
                          initial={{ opacity: 0, y: 25, rotateX: -10 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            hoveredTable === "invoices" || hoveredTable === null 
                              ? "bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10" 
                              : "bg-slate-950/50 border-white/5 opacity-50"
                          }`}
                        >
                          <strong className="text-white uppercase text-[10px] block border-b border-white/10 pb-1 mb-2">🧾 invoices</strong>
                          <ul className="space-y-1 text-slate-400 text-[10.5px]">
                            <li>🔑 id : INT [PK]</li>
                            <li>🔗 client_id : INT [FK]</li>
                            <li>• tax_percent : DECIMAL</li>
                            <li>• audit_hash : VARCHAR</li>
                          </ul>
                          <span className="text-[8px] text-emerald-400 font-bold block mt-2 uppercase">Invoicing balance safe</span>
                        </motion.div>

                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 space-y-4">
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        For standard production deployments, the system normalizes relational models between parent items lists and category filters indices inside InnoDB storage structures:
                      </p>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-4 rounded-xl bg-[#0b0c11] border border-white/5 font-mono text-rose-400 text-[11px] leading-relaxed"
                      >
                        <div><span className="text-slate-500">// Relational Model mappings</span></div>
                        <div>CREATE TABLE products (</div>
                        <div className="pl-4">id INT PRIMARY KEY AUTO_INCREMENT,</div>
                        <div className="pl-4">title VARCHAR(100) NOT NULL,</div>
                        <div className="pl-4">category_id INT,</div>
                        <div className="pl-4">FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL</div>
                        <div>);</div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* 2. REAL SQL INDEX DEPLOYMENT STATEMENTS */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
                    themeMode === "light" ? "bg-white border-slate-200 shadow-sm" : "bg-slate-950/40 border-white/5"
                  }`}
                >
                  <h3 className={`text-xs font-mono font-black uppercase text-[#a855f7]`}>
                    ✦ DATABASE TRANSACTION SCRIPTS (Audited Indexes)
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-[11px] text-emerald-400 leading-relaxed">
                    <div><span className="text-slate-500">-- Optimized indexing checks to guarantee under 15ms loading on 500+ records</span></div>
                    {project.id === "mediawagon-crm" ? (
                      <>
                        <div>CREATE UNIQUE INDEX idx_emp_ref ON employees (id, role_tag);</div>
                        <div>CREATE INDEX idx_attendance_time ON attendance_log (emp_id, clock_in);</div>
                      </>
                    ) : (
                      <>
                        <div>CREATE INDEX idx_product_cat ON products (category_id, current_price);</div>
                        <div>ALTER TABLE products ADD FULLTEXT INDEX search_idx (title, description);</div>
                      </>
                    )}
                  </div>
                </motion.div>

              </motion.div>
            </div>

            {/* VIEWPORT SECTION 4: DEVICE MOCKUPS FRAME WORKSHOPS */}
            <div id="case-section-gallery" className="scroll-mt-36 pt-4 pb-16">
              <motion.div
                key="gallery-pane"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* INJECT DEVICE FRAME SWITCHER */}
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 border-b pb-4 border-slate-200 dark:border-white/5">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] uppercase font-mono font-bold text-rose-500 tracking-wider block">✦ MULTI-SCREEN HIGH-FIDELITY MOCKUP DEVICES</span>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed max-w-xl">
                      Select mockups coordinates to change perspective viewport frames. Each frame operates as a modular asset sandbox. Click screen preview to launch our dynamic lightbox!
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 bg-slate-950/40 border border-white/5 p-1 rounded-2xl select-none">
                    {[
                      { id: "desktop", label: "Desktop View", icon: <Laptop className="w-3.5 h-3.5" /> },
                      { id: "mobile", label: "Mobile View", icon: <Smartphone className="w-3.5 h-3.5" /> },
                      { id: "admin", label: "Admin Console", icon: <Layout className="w-3.5 h-3.5" /> },
                      { id: "database", label: "Database Schema", icon: <Database className="w-3.5 h-3.5" /> },
                      { id: "payment", label: "Razorpay Secure", icon: <CreditCard className="w-3.5 h-3.5" /> }
                    ].map((d) => (
                      <button
                        key={d.id}
                        onClick={() => {
                          setGalleryMode(d.id as any);
                          setActiveScreenshotIdx(0);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase transition flex items-center gap-1.5 cursor-pointer ${
                          galleryMode === d.id ? "bg-rose-500 text-white shadow-sm" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {d.icon}
                        <span>{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* DEVICE PRESET VIEWER AREA */}
                <div className="flex items-center justify-center p-4 sm:p-8 rounded-3xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-950/20">
                  
                  {/* IMAC DESKTOP FRAME */}
                  {galleryMode === "desktop" && (
                    <div className="w-full max-w-4xl space-y-4">
                      {/* Beautiful iMac outer casing */}
                      <div className="rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl relative overflow-hidden aspect-[16/10] flex flex-col justify-between p-1">
                        {/* URL BAR DECORATOR */}
                        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-white/5 select-none text-[9px] font-mono">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          </div>
                          <div className="bg-[#04060b] text-slate-400 px-10 py-1 rounded border border-white/5 flex-grow text-center text-[10px] uppercase block font-bold truncate">
                            {project.liveUrl || `https://${project.id}.in`}
                          </div>
                          <div className="w-16" />
                        </div>

                        {/* SCREEN SIMULATORS WITH OVERLAY BADGE */}
                        <div className="relative flex-grow bg-slate-950 flex items-center justify-center overflow-hidden">
                          <img 
                            src={currentScreensList[activeScreenshotIdx] || project.image} 
                            alt={`${project.title} Desktop Viewport Mock` } 
                            className="w-full h-full object-cover select-none filter brightness-50 hover:scale-102 duration-300 transition"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* OVERLAY CLEAR LABELS */}
                          <div className="absolute inset-0 bg-slate-950/85 flex flex-col items-center justify-center space-y-3 p-6 text-center z-10 backdrop-blur-3xs hover:opacity-0 transition-opacity duration-300">
                            <span className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 flex items-center justify-center font-bold text-sm select-none">✦</span>
                            <strong className="text-white text-xs sm:text-sm font-mono block uppercase font-black">
                              {activeScreenshotIdx === 0 ? "Replace with Full Homepage Screenshot" : "Replace with Product Page Screenshot"}
                            </strong>
                            <p className="text-[10px] text-slate-400 max-w-xs leading-relaxed">
                              This mockup represents the high-fidelity web production layout. Click the magnifying button below to inspect as a lightbox!
                            </p>
                            <button 
                              onClick={() => setLightboxImage({ url: currentScreensList[activeScreenshotIdx] || project.image, label: "Full Homepage / Product Page" })}
                              className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-[10px] font-mono tracking-widest font-bold uppercase transition"
                            >
                              <Eye className="w-3.5 h-3.5 inline mr-1" /> LIGHTBOX PREVIEW
                            </button>
                          </div>
                        </div>

                        {/* IMAC LOWER STRIP WITH LOGO */}
                        <div className="bg-slate-800 py-1.5 flex items-center justify-center text-[9px] font-mono text-slate-300 border-t border-slate-700 select-none uppercase font-black tracking-widest">
                          Srikonda Sanjay Studio
                        </div>
                      </div>

                      {/* iMac desktop base stand */}
                      <div className="w-32 h-14 bg-slate-700 border-b border-slate-800 mx-auto rounded-b-xl select-none" />
                    </div>
                  )}

                  {/* IPHONE MOBILE FRAME */}
                  {galleryMode === "mobile" && (
                    <div className="w-72 relative">
                      {/* Phone outer case */}
                      <div className="rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-950 shadow-2xl relative overflow-hidden aspect-[9/18] flex flex-col justify-between p-1">
                        
                        {/* PHONE NOTCH DECORATOR */}
                        <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-28 h-4 rounded-full bg-slate-800 z-30 flex items-center justify-between px-4 select-none text-[8px] text-slate-400">
                          <span className="font-bold">09:41</span>
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" />
                          <div className="flex gap-0.5">
                            <span className="w-1 h-1.5 bg-slate-400"></span>
                            <span className="w-1 h-2 bg-slate-400"></span>
                            <span className="w-1 h-2.5 bg-slate-400"></span>
                          </div>
                        </div>

                        {/* PHONE SCREEN WINDOW */}
                        <div className="relative flex-grow bg-slate-950 rounded-[2rem] overflow-hidden flex items-center justify-center">
                          <img 
                            src={screenshots.mobile[0] || project.image} 
                            alt={`${project.title} Mobile iPhone View` } 
                            className="w-full h-full object-cover select-none filter brightness-50"
                            referrerPolicy="no-referrer"
                          />

                          {/* OVERLAY CLEAR LABELS */}
                          <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center space-y-3 p-4 text-center z-10 hover:opacity-0 transition-opacity duration-350">
                            <Smartphone className="w-8 h-8 text-rose-500" />
                            <strong className="text-white text-xs font-mono block uppercase font-black">
                              Replace with Mobile View Screenshot
                            </strong>
                            <p className="text-[10px] text-slate-450 max-w-xs leading-relaxed text-slate-400">
                              Optimized responsive grid ensuring first contentful paint latency under 1.8s.
                            </p>
                            <button 
                              onClick={() => setLightboxImage({ url: screenshots.mobile[0] || project.image, label: "Mobile Responsive Viewport" })}
                              className="px-3.5 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-[9px] font-mono tracking-widest font-black uppercase transition"
                            >
                              LAUNCH VIEW
                            </button>
                          </div>
                        </div>

                        {/* PHONE HOME INDICATOR DASH */}
                        <div className="h-4 flex items-center justify-center select-none">
                          <div className="w-24 h-1 rounded-full bg-slate-700" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ADMIN ANALYTICS DASHBOARD FRAME */}
                  {galleryMode === "admin" && (
                    <div className="w-full max-w-4xl">
                      {/* Beautiful Dark themed frame */}
                      <div className="rounded-2xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden aspect-[16/10] flex flex-col justify-between">
                        {/* URL dashboard header */}
                        <div className="bg-slate-900 border-b border-white/5 px-4 py-2 flex items-center justify-between text-[10px] font-mono select-none">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          </div>
                          <span className="text-slate-450 font-bold font-black text-[9.5px] uppercase">
                            Admin Dashboard Analytics Interface Console
                          </span>
                          <Lock className="w-3.5 h-3.5 text-rose-550 text-rose-500" />
                        </div>

                        {/* SIMULATED ANALYTICS INTERFACE SCREEN */}
                        <div className="relative flex-grow bg-[#090b0f] flex items-center justify-center">
                          <img 
                            src={screenshots.admin[0] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"} 
                            alt={`${project.title} Admin Console Mock` } 
                            className="w-full h-full object-cover select-none filter brightness-50"
                            referrerPolicy="no-referrer"
                          />

                          {/* OVERLAY CLEAR LABELS */}
                          <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center space-y-3 p-6 text-center z-10 hover:opacity-0 transition-opacity duration-300">
                            <span className="px-3 py-1 bg-[#a855f7]/10 border border-[#a855f7]/25 text-[#a855f7] font-mono uppercase font-black text-[9px] block">✦ ADMINISTRATIVE MODULE</span>
                            <strong className="text-white text-xs sm:text-sm font-mono block uppercase font-black">
                              Replace with Dashboard Screenshot
                            </strong>
                            <p className="text-[10px] text-slate-400 max-w-xs leading-relaxed">
                              Real-time inventory indices, attendance schedules, leads trackers, and dynamic content update panels.
                            </p>
                            <button 
                              onClick={() => setLightboxImage({ url: screenshots.admin[0] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", label: "Admin Analytics Console UI" })}
                              className="px-4 py-2 bg-[#a855f7] hover:bg-purple-600 text-white rounded-xl text-[10px] font-mono tracking-widest font-black uppercase transition"
                            >
                              INSPECT FRAME
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* DATABASE DIAGRAM SCHEMA GENERATOR */}
                  {galleryMode === "database" && (
                    <div className="w-full max-w-4xl">
                      <div className="rounded-2xl border border-white/10 bg-[#07090e] shadow-2xl overflow-hidden p-6 font-mono text-xs select-none">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
                          <div className="flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Database className="w-3.5 h-3.5" /> RELATIONAL SCHEMA DESIGNER (3NF NORMALIZED)
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] text-left leading-relaxed">
                          {/* TABLE 1 */}
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 hover:border-emerald-500/20 transition-all duration-300">
                            <div className="text-[10px] text-rose-450 text-rose-500 font-bold border-b border-white/5 pb-1 uppercase">Table: USERS</div>
                            <div>id <span className="text-slate-500">INT [PK, AUTO_INC]</span></div>
                            <div>email <span className="text-slate-500">VARCHAR(120) [UNIQUE]</span></div>
                            <div>password_hash <span className="text-slate-500">VARCHAR(255)</span></div>
                            <div>role <span className="text-slate-500">VARCHAR(30) [DEFAULT 'client']</span></div>
                            <div>created_at <span className="text-slate-500">TIMESTAMP</span></div>
                          </div>

                          {/* TABLE 2 */}
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 hover:border-indigo-500/20 transition-all duration-300">
                            <div className="text-[10px] text-indigo-400 font-bold border-b border-white/5 pb-1 uppercase">Table: PRODUCTS</div>
                            <div>id <span className="text-slate-500">INT [PK, AUTO_INC]</span></div>
                            <div>title <span className="text-slate-500">VARCHAR(150) NOT NULL</span></div>
                            <div>price <span className="text-slate-500">DECIMAL(10,2)</span></div>
                            <div>stock_count <span className="text-slate-500">INT [DEFAULT 0]</span></div>
                            <div>category_id <span className="text-slate-500">INT [FK ➔ categories.id]</span></div>
                            <div>updated_at <span className="text-slate-500">TIMESTAMP</span></div>
                          </div>

                          {/* TABLE 3 */}
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 hover:border-amber-500/20 transition-all duration-300">
                            <div className="text-[10px] text-amber-500 font-bold border-b border-white/5 pb-1 uppercase">Table: TRANSACTIONS</div>
                            <div>id <span className="text-slate-500">INT [PK, AUTO_INC]</span></div>
                            <div>order_id <span className="text-slate-500">INT [FK ➔ orders.id]</span></div>
                            <div>razorpay_payment_id <span className="text-slate-500">VARCHAR(100)</span></div>
                            <div>amount_paid <span className="text-slate-500">DECIMAL(10,2)</span></div>
                            <div>payment_status <span className="text-slate-500">VARCHAR(30)</span></div>
                            <div>verified_at <span className="text-slate-500">TIMESTAMP</span></div>
                          </div>
                        </div>

                        <div className="mt-5 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-slate-400 text-center leading-normal">
                          ✦ <strong>FOREIGN KEY CONSTRAINTS DECLARED:</strong> CASCADE deletions are prohibited to maintain chronological financial ledger logs consistency. Database diagrams are indexed optimally on foreign constraint coordinates to drop querying overhead limits to less than 15ms.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SECURED PAYMENT GATEWAY COMPONENT */}
                  {galleryMode === "payment" && (
                    <div className="w-full max-w-sm">
                      <div className="rounded-3xl border border-white/10 bg-slate-900 text-left p-6 font-sans space-y-5 shadow-2xl relative overflow-hidden">
                        
                        {/* Secured Title */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 select-none">
                            <Lock className="w-3 h-3 text-emerald-400" /> SECURED SECURE CONNECTION
                          </span>
                          <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest select-none">
                            Razorpay API v3
                          </span>
                        </div>

                        {/* Order Detail Summary */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">BILLING FOR:</span>
                          <h4 className="text-sm font-bold text-white font-display uppercase tracking-tight">{project.title} Client Portal</h4>
                          <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded-xl border border-white/5 mt-2">
                            <span className="text-xs text-slate-400">Net Amount Payload:</span>
                            <span className="text-xs font-bold text-emerald-400 font-mono">₹{project.id === "vintagio" ? "12,450.00" : "5,800.00"}</span>
                          </div>
                        </div>

                        {/* Card Input Simulation form */}
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-slate-400 uppercase block">Secure Card Entry Credentials</label>
                            <input 
                              type="text" 
                              disabled
                              value="4111 •••• •••• 1111" 
                              className="w-full p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-mono focus:outline-none" 
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[9px] font-mono text-slate-400 uppercase block">Exp. Date</label>
                              <input 
                                type="text" 
                                disabled
                                value="12/29" 
                                className="w-full p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-mono" 
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-mono text-slate-400 uppercase block">Secure CVV</label>
                              <input 
                                type="text" 
                                disabled
                                value="•••" 
                                className="w-full p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-mono" 
                              />
                            </div>
                          </div>
                        </div>

                        {/* Interactive Click Simulator trigger */}
                        <button
                          onClick={() => {
                            alert("API callback success: payment_id_razor_948271. Secure payment webhook signatures verified! Checkout payload finalized.");
                          }}
                          className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-bold tracking-widest uppercase text-xs rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer transition flex items-center justify-center gap-1.5"
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>SIMULATE TEST CHECKOUT</span>
                        </button>

                        <p className="text-[9px] leading-relaxed text-slate-400 text-center">
                          Cards and CVV fields are mock details sandbox limits. Clicking initiates standard secure mock webhook response simulations.
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

      {/* FULL SCREEN LIGHTBOX PREVIEW OVERLAY */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-55 bg-[#04060b]/96 flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between select-none">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                Active Lightbox : {lightboxImage.label}
              </span>
              <button 
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-slate-900 border border-white/10 text-white font-mono text-xs uppercase cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <div className="max-w-5xl max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative select-none">
              <img 
                src={lightboxImage.url} 
                alt="Active light box mock screenshot" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-[11px] text-slate-450 mt-4 leading-relaxed max-w-md text-center text-slate-400 select-none">
              Double click or slide to exit. These assets are mockups demonstrating high-fidelity real business web configurations.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
