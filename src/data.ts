import { Project, Experience, Education } from "./types";

export const PROJECT_DATA: Project[] = [
  {
    id: "vintagio",
    title: "Vintagio",
    subtitle: "Premium Antique & Collectibles Marketplace",
    description: "Vintagio is a premium e-commerce platform built to connect collectors, enthusiasts, and buyers with unique antique products, collectibles, décor pieces, vintage furniture, and rare artifacts.",
    role: "Full-Stack Web Developer",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
    metrics: [
      { label: "Mobile Speed", value: "98%" },
      { label: "Query Time", value: "<40ms" },
      { label: "Active Users", value: "500+" }
    ],
    liveUrl: "https://vintagio.in",
    icon: "🏺",
    color: "from-amber-600/20 to-stone-800/40",
    image: "/images/vintagio.png",
    fallbacks: [
      "/images/vintagio_cover.svg",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "Vintagio is a premium e-commerce platform built to connect collectors, enthusiasts, and buyers with unique antique products, collectibles, décor pieces, vintage furniture, and rare artifacts. The platform was designed with a luxury-first approach, focusing on elegant product presentation, easy navigation, and a seamless shopping experience. My role involved designing and developing the frontend and backend functionality, implementing product management systems, responsive layouts, shopping cart functionality, and customer-focused user experiences.",
    challenges: [
      "Traditional antique sellers often lack a modern online presence and struggle to showcase unique collectibles effectively.",
      "Handling large high-resolution images while maintaining fast page loading speeds on mobile networks. Actively solved by WebP formats migration, lazy layout rendering, and browser script deferrals."
    ],
    techStackDetailed: [
      "Frontend: HTML5, CSS3, JavaScript, Bootstrap 5",
      "Backend: Core PHP (OOP)",
      "Database: MySQL Server",
      "Interactions: AJAX dynamic shopping cart updating and webhook validation loops"
    ],
    screenshots: [
      "/images/vintagio1.png",
      "/images/vintagio2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/vintagio1.png",
        "/images/vintagio2.png",
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/vintagiomobile.png",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/vintagioadmin.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "fashion-perfumes",
    title: "Fashion Club Perfumes",
    subtitle: "Luxury Perfume E-commerce Platform",
    description: "Architected a beautiful luxury perfume shop specializing in lightweight page sizes, targeted AJAX filters, editorial layouts, and mobile shopping conversion paths.",
    role: "Frontend & Performance Lead",
    tech: ["HTML5", "CSS3", "JavaScript", "AJAX", "PHP", "MySQL", "Bootstrap"],
    metrics: [
      { label: "Mobile Conversion", value: "+35%" },
      { label: "Page Latency", value: "1.8s" },
      { label: "Bounce Reduction", value: "-15%" }
    ],
    liveUrl: "https://fashionclubperfumes.in",
    icon: "🌹",
    color: "from-pink-600/20 to-purple-900/40",
    image: "/images/fashion.png",
    fallbacks: [
      "/images/fashion_perfumes_cover.svg",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "FashionClubPerfumes delivers an editorial high-fashion layout that highlights dynamic perfume notes. Built on lightweight assets, the system eliminates bulky layout libraries and uses targeted AJAX calls to fetch fragrant collections in real-time. Mobile checkout was heavily consolidated for maximum user retention and ease of purchase.",
    challenges: [
      "Reduced Cumulative Layout Shift (CLS) from 0.32 down to 0.02 using CSS height skeletons.",
      "Optimized assets size by 70%, decreasing page latency to 1.8 seconds on mobile networks."
    ],
    techStackDetailed: [
      "Frontend: HTML5 Semantic Layouts, Custom Vanilla CSS Grid CSS3, ES6+ JS",
      "Backend/Database: PHP REST Endpoint Queries, MySQL Schema"
    ],
    screenshots: [
      "/images/fashion1.png",
      "/images/fashion2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/fashion1.png",
        "/images/fashion2.png",
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/fashionmobile.png",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/fashionadmin.png",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "mediawagon-crm",
    title: "MediaWagon CRM",
    subtitle: "Business Management & Employee Tracking System",
    description: "A comprehensive backend-driven Enterprise CRM managing client pipelines, attendance logs, invoices, and dynamic employee tracking with strict MySQL indexing.",
    role: "Lead Full-Stack CRM Engineer",
    tech: ["PHP (OOP)", "MySQL Server", "ReactJS", "Tailwind CSS", "AJAX", "REST SDK"],
    metrics: [
      { label: "Queries Lead Time", value: "<15ms" },
      { label: "Active Staff Logs", value: "150+" },
      { label: "Monthly Reports", value: "100%" }
    ],
    icon: "📊",
    color: "from-blue-600/20 to-cyan-950/40",
    image: "/images/mediawagon.png",
    fallbacks: [
      "/images/mediawagon_crm_cover.svg",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "This CRM is a highly sophisticated, multi-tenant portal designed to govern organizational workflows. By building responsive layouts centered on high data density, I engineered an interface that handles real-time updates seamlessly. The database operates on complex relational schema with precise indexing on foreign keys (such as employee_id join records) to achieve query latencies under 15 milliseconds even during peak attendance clock-in hours.",
    challenges: [
      "Ensuring strict role-based access control (RBAC) so managers can track leaves while hiding financial invoices from general staff. Resolved using custom PHP session validation and dynamic route intercepts.",
      "Optimized heavy MySQL relational joins across 9 dynamic tables with advanced indexing strategies."
    ],
    techStackDetailed: [
      "Backend: PHP 8.2 (Strict OOP Architecture with custom Router controller)",
      "Database: MySQL 8 (Indexed Relational Store, Transactions Safe InnoDB Engine)",
      "Frontend: React with Tailwind CSS v4, dynamic AJAX JSON callbacks."
    ],
    screenshots: [
      "/images/mediawagon1.png",
      "/images/mediawagon2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/mediawagon1.png",
        "/images/mediawagon2.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/mediawagonmobile.png",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/mediawagonadmin.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "space-ground",
    title: "Space & Ground",
    subtitle: "Real Estate Investment Advisory Platform",
    description: "Premium property portal presenting high-value residential developments, featuring advanced mortgage calculators and neighborhood visual bento-grids.",
    role: "Full-Stack Web Developer",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
    metrics: [
      { label: "Lead Form Convers", value: "+45%" },
      { label: "Asset Retain Rate", value: "94%" },
      { label: "Load Velocity", value: "1.2s" }
    ],
    icon: "🏢",
    color: "from-purple-600/20 to-indigo-950/40",
    image: "/images/space.png",
    fallbacks: [
      "/images/space_ground_cover.svg",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "Designed for premium real estate advisory, Space & Ground merges immersive imagery with highly complex mathematical calculations. I built mortgage rate and ROI analysis widgets that compute amortization tables instantly in React, transmitting direct customer data leads securely to realtors.",
    challenges: [
      "Dynamically computing property yields in the browser without slowing visual transitions. Solved using debounced React hook calculations.",
      "Creating an elegant, highly structured design style using custom Tailwind utilities to portray institutional-grade trust."
    ],
    techStackDetailed: [
      "Frontend: React.js, Tailwind CSS, Chart.js Visualizations",
      "Backend: PHP REST Lead Capturer",
      "Database: MySQL Client Vault"
    ],
    screenshots: [
      "/images/space1.png",
      "/images/space2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/space1.png",
        "/images/space2.png",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/spacemobile.png",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/spaceadmin.png",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "be-beauty",
    title: "Be Beauty",
    subtitle: "Skin, Hair & Aesthetics Clinic Website",
    description: "Be Beauty is a premium healthcare and aesthetics website created for a beauty, skincare, and wellness clinic. The goal was to establish trust and improve booking flows.",
    role: "Lead Frontend Engineer",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    metrics: [
      { label: "Bookings Conversion", value: "+60%" },
      { label: "Engagement Rate", value: "78%" },
      { label: "First Content Paint", value: "0.9s" }
    ],
    icon: "✨",
    color: "from-purple-600/20 to-rose-900/40",
    image: "/images/beauty.png",
    fallbacks: [
      "/images/be_beauty_cover.svg",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "Be Beauty is a premium healthcare and aesthetics website created for a beauty, skincare, and wellness clinic. The goal was to establish trust, showcase treatments, generate consultation leads, and create a luxury online experience. Inspired by high-end wellness brands, the layout focuses on elegant treatment presentation modules, before-and-after interactive galleries, and dynamic booking forms.",
    challenges: [
      "Establishing direct online credibility for specialized treatments. Resolved by implementing Dr. Profiles and verified outcome testimonial carousels.",
      "Optimizing scheduling calendar latency across different browsers. Implemented lightweight responsive structures using modern CSS Grid."
    ],
    techStackDetailed: [
      "Core Framework: React.js (TypeScript Strict)",
      "Styling Engine: Tailwind CSS (Soft luxury colors, premium typography, custom spacing)",
      "Interactive: Vanilla ES Modules"
    ],
    screenshots: [
      "/images/beauty1.png",
      "/images/beauty2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/beauty1.png",
        "/images/beauty2.png",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/beautymobile.png",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/beautyadmin.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  },
  {
    id: "hydshops",
    title: "HydShops",
    subtitle: "Local Business Marketplace Platform",
    description: "HydShops is a digital marketplace designed to help local businesses showcase products and connect with customers online as a hyper-local search index.",
    role: "Full-Stack Engineer",
    tech: ["React.js", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    metrics: [
      { label: "Onboarded Vendors", value: "75+" },
      { label: "Daily Search Volume", value: "1.2K" },
      { label: "Browse Bounce Rate", value: "20%" }
    ],
    icon: "🛍️",
    color: "from-emerald-600/20 to-teal-950/40",
    image: "/images/hydshops.png",
    fallbacks: [
      "/images/hydshops_cover.svg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
    ],
    caseStudy: "HydShops is a digital marketplace designed to help local businesses showcase products and connect with customers online. The platform acts as a bridge between local vendors and nearby buyers. Many local store owners struggled with internet discoverability, so I implemented a vendor self-registration system alongside category product indexes.",
    challenges: [
      "Local shop owners needed extremely basic, mobile-friendly CRUD interfaces to add listings. Designed an intuitive dashboard requiring only 3 input steps.",
      "Delivering near-instant localized filtering. Solved using optimized multi-column indexing across vendors, categories, and locations."
    ],
    techStackDetailed: [
      "Frontend Framework: React.js, Tailwind CSS",
      "Backend Services: Custom lightweight PHP routing API",
      "Database Layer: MySQL Relational Store (Structured Category mappings)"
    ],
    screenshots: [
      "/images/hydshops1.png",
      "/images/hydshops2.png"
    ],
    screenshotFallbacks: {
      desktop: [
        "/images/hydshops1.png",
        "/images/hydshops2.png",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=1200"
      ],
      mobile: [
        "/images/hydshopsmobile.png",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400"
      ],
      admin: [
        "/images/hydshopsadmin.png",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
      ]
    }
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "mediawagon",
    role: "Web Developer Intern",
    company: "MediaWagon",
    duration: "February 2026 – Present",
    location: "Durgam Cheruvu, Hyderabad, TS",
    highlights: [
      "Crafted and launched 5+ responsive customer sites with 100% verified cross-browser accessibility targeting Safari, Chrome, Edge, and iOS.",
      "Shipped 3 production e-commerce projects serving Hyderabad retailers, successfully managing up to 500+ monthly active shoppers.",
      "Cut load times in half (reducing latency from 3.2s down to 1.8s) via automated asset compression, script deferral, and layout shifts auditing.",
      "Integrated secure end-to-end payment networks using Razorpay gateways and verified REST standard client calls."
    ],
    metrics: [
      { label: "Projects Delivered", value: "5+" },
      { label: "Performance Gained", value: "+30%" },
      { label: "Mobile Engagement", value: "+25%" }
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "mba",
    degree: "MBA — Master of Business Administration",
    institution: "Global Institute of Management, Hyderabad",
    year: "2023 – 2025",
    score: "7.8/10 CGPA",
    type: "Business Strategy & Leadership"
  },
  {
    id: "bcom",
    degree: "B.Com (Computer Applications)",
    institution: "Ramakrishna Degree College, Hyderabad",
    year: "2020 – 2023",
    score: "72%",
    type: "Business Software & Web Tools"
  },
  {
    id: "inter",
    degree: "Intermediate — CEC",
    institution: "Hyderabad Junior College",
    year: "2018 – 2020",
    score: "72.7% (727/1000)",
    type: "Commerce & Economics"
  },
  {
    id: "ssc",
    degree: "SSC — Secondary School Certificate",
    institution: "Hyderabad Academy High School",
    year: "2018",
    score: "8.3/10 CGPA",
    type: "General Education"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Fluency",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS v4", "Bootstrap 5", "CSS3 / HTML5", "Modern jQuery"]
  },
  {
    name: "Backend & Systems",
    skills: ["PHP", "REST APIs", "Node.js (Basic)", "JSON Schema", "Razorpay Gateway"]
  },
  {
    name: "Data Stores",
    skills: ["MySQL", "SQL Database", "Relation Queries", "Database Auditing"]
  },
  {
    name: "Workplace & Jigs",
    skills: ["Git & GitHub", "VS Code", "Vite Bundler", "Chrome DevTools", "Figma", "Agile/Scrum"]
  }
];
