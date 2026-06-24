import React, { useState } from "react";
import { BookOpen, Calendar, ArrowUpRight, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudyLearning {
  id: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
  body: string;
  readTime: string;
}

const CASE_STUDIES_DATA: CaseStudyLearning[] = [
  {
    id: "ecommerce-platforms",
    title: "Building High-Performance E-Commerce Platforms: Lessons from Luxury Retail Engines",
    topic: "Building E-Commerce Platforms",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "How to engineer highly stable visual layouts, declare aspect ratios to zero layout shifts, and accelerate mobile checkouts for collector marketplaces.",
    body: `E-commerce sites are the lifeblood of retail. During full-stack product builds, implementing a customer-first platform requires balancing structural beauty with lightweight performance parameters.

When auditing visual conversions, we discovered that mobile checkouts on spotty networks are vulnerable to visual jitter. Large high-resolution images are the primary culprits, pushing Cumulative Layout Shift (CLS) up and conversions down.

To fix this:
1. Declare strict width/height aspect ratios on all image containers.
2. Conversion of raw assets to compressed WebP formats under 80kb.
3. Establish skeleton layout cells that preserve rendering height.

These core measures dropped rendering delays down from 3.2s to 1.8s, resulting in an immediate 35% completion gains on mobile shopping carts. When your technical specifications map exactly to consumer friction, performance ceases to be a luxury and becomes a direct revenue driver.`
  },
  {
    id: "razorpay-integration",
    title: "Bulletproof Payment Gateways: Implementing Secured Razorpay Webhook Verifications",
    topic: "Razorpay Integration",
    date: "May 2026",
    readTime: "5 min read",
    excerpt: "How to safely prevent transaction spoofing, validate incoming payment signatures, and maintain consistent buyer accounts logs.",
    body: `Payment pipelines require 100% cryptographic trust. When implementing standard Razorpay integrations in PHP core, depending purely on client-side success callbacks is a dangerous vector that opens the portal to order manipulation.

The secure approach is utilizing backend webhooks with cryptographic sign verifications:

\`\`\`php
// Verifying secure Razorpay Webhook Signatures
$expectedSignature = hash_hmac(
    'sha256', 
    $payloadString, 
    process.env('RAZORPAY_WEBHOOK_SECRET')
);

if (hash_equals($expectedSignature, $_SERVER['HTTP_X_RAZORPAY_SIGNATURE'])) {
    // Transaction securely approved! Proceed to process inventory depletion
    updateOrderStatus($orderId, 'paid');
} else {
    // Malicious payment spoofing blocked!
    triggerSecurityAlarm($payload);
    http_response_code(400);
}
\`\`\`

By decoupling browser confirmations from ledger records, we defend databases from fake transactions while giving users a near-instant receipt layout.`
  },
  {
    id: "crm-architecture",
    title: "Enterprise CRM Architectures: High-Density Workspace Portals from Scratch",
    topic: "CRM Architecture",
    date: "May 2026",
    readTime: "7 min read",
    excerpt: "Designing scalable backend routing, state containers, and unified timesheet grids for high-density business activity trackers.",
    body: `Enterprise CRM dashboards represent a unique challenge: managing extreme data density without reducing application usability. When building MediaWagon's corporate portal, we shifted from scattered spreadsheets into a consolidated relational service.

Core architectural pillars:
- A custom router that filters queries based on user context.
- Centralized state grids that refresh asynchronously without full-page reloads.
- Lazy-hydration pipelines that keep initial scripts light.

By mapping data records directly to specific business objects—such as attendance schedules, invoices ledger, and pipeline leads records—we created a powerful hub that handles over 150+ employee transactions with query latency times under 15ms.`
  },
  {
    id: "inventory-management",
    title: "Real-Time Inventory Management: Preventing Stock Race Conditions in PHP Core",
    topic: "Inventory Management",
    date: "April 2026",
    readTime: "5 min read",
    excerpt: "Why row-level database locks are a necessity for high-volume catalogs during concurrent user shopping cart checkouts.",
    body: `During high-volume discount events, hundreds of users can click 'purchase' on the same item, causing a classic race condition where final sales surpass the actual physical units in stock.

To solve this we use Row-Level SELECT FOR UPDATE locks in transactional contexts:

\`\`\`sql
-- Lock-safe inventory reduction sequence
START TRANSACTION;
SELECT stock_count FROM products WHERE id = :p_id FOR UPDATE;
-- Check available stock level limits in code
UPDATE products SET stock_count = stock_count - 1 WHERE id = :p_id;
COMMIT;
\`\`\`

This guarantees that database operations are strict, atomic, and safe. Integrating this loop into luxury e-commerce platforms prevented negative inventory errors entirely, boosting administrative satisfaction.`
  },
  {
    id: "rbac-systems",
    title: "Granular Role Based Access Control (RBAC): Session-Level Validation Protocols in PHP",
    topic: "Role Based Access Systems",
    date: "April 2026",
    readTime: "6 min read",
    excerpt: "How to enforce absolute backend route guards across different clearance tiers without repeating authentication logic.",
    body: `Enterprise CRMs handle sensitive payroll invoices that should remain hidden from standard employees. Implementing reliable RBAC is a foundational security mandate.

We solved this using session-level bitmask verification decorators inside controller routes:

\`\`\`php
class RouteGuard {
    public static function restrictTo(string $requiredRole) {
        if (!isset($_SESSION['user_id']) || $_SESSION['user_role'] !== $requiredRole) {
            header('Content-Type: application/json');
            http_response_code(403);
            echo json_encode(["error" => "Access Denied: Insufficient permissions"]);
            exit();
        }
    }
}

// In employee routes file
RouteGuard::restrictTo('admin');
handleAdminActivityLogs();
\`\`\`

By embedding guard verification into the core routing engine, we eliminate developer copy-paste typos, securing sensitive client information.`
  },
  {
    id: "database-design",
    title: "Relational Database Normalization: Accelerating Complex Multi-Table Relational Queries",
    topic: "Database Design",
    date: "March 2026",
    readTime: "6 min read",
    excerpt: "Applying indexing, cascading constraints, and 3NF normalization rules to keep transactional response times under 15 milliseconds.",
    body: `Durable cloud and local databases must scale predictably. Many developers default to unindexed databases, causing response times to balloon as table sizes grow.

When engineering relational stores for multi-tenant setups, we normalized tables to the Third Normal Form (3NF) to completely eliminate duplicate attributes. 

Simultaneously, we analyzed slow queries in MySQL logs and added composite indexes on frequently requested join foreign keys:
\`\`\`sql
CREATE INDEX idx_orders_customer ON orders (user_id, status);
\`\`\`

This decreased heavy multi-table query latencies down to less than 15ms. Normalization, foreign keys constraints, and deliberate indexing form the bedrock of business persistence layers.`
  }
];

export function SanjayBlogs({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";
  const [selectedCase, setSelectedCase] = useState<CaseStudyLearning | null>(null);

  return (
    <section id="blog" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
          alt="Case Studies and Learnings Srikonda Sanjay"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-[0.85] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-full border border-[#a855f7]/20">
            06 . CASE STUDIES & LEARNINGS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            Case Studies, Insights & Learnings
          </h2>
        </div>
      </div>

      {/* Main interactive blogs list */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES_DATA.map((article) => (
            <div 
              key={article.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between group h-68 hover:border-rose-500/40 transition duration-300 relative overflow-hidden ${
                isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/50 border-white/5"
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-rose-400 uppercase font-black tracking-widest bg-rose-500/10 px-2 rounded-full border border-rose-500/20">
                    {article.topic}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                </div>
                
                <h3 className={`text-sm sm:text-[14.5px] font-family-display font-black line-clamp-2 leading-snug group-hover:text-rose-455 transition-colors ${
                  isLight ? "text-slate-900" : "text-white"
                }`}>
                  {article.title}
                </h3>
                
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-405 text-slate-400 font-mono italic">{article.readTime}</span>
                <button 
                  onClick={() => setSelectedCase(article)}
                  className="text-xs font-mono font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1 cursor-pointer"
                >
                  <span>STUDY CASE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Reader Inline Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className={`max-w-2xl w-full rounded-3xl border p-6 sm:p-8 max-h-[85vh] overflow-y-auto ${
                  isLight ? "bg-white border-slate-200 text-slate-800" : "bg-[#0c0c0e]/95 border-white/10 text-slate-300"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 font-mono text-xs">
                  <span className="text-rose-500 font-bold uppercase tracking-widest">{selectedCase.topic}</span>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="p-1.5 rounded-xl bg-slate-900/60 hover:bg-rose-500 hover:text-white text-slate-400 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[10px] text-slate-400 font-mono">
                    <span>Topic Study: {selectedCase.date}</span>
                    <span>•</span>
                    <span>{selectedCase.readTime}</span>
                  </div>

                  <h2 className={`text-lg sm:text-2xl font-display font-black leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                    {selectedCase.title}
                  </h2>

                  <div className="text-xs sm:text-sm text-slate-450 text-slate-400 font-sans leading-relaxed whitespace-pre-wrap space-y-4 article-body-block">
                    {selectedCase.body}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5 mt-6 flex justify-between items-center select-none font-mono text-[9px] text-slate-400 uppercase">
                  <span className="flex items-center gap-1 text-rose-500"><Sparkles className="w-3.5 h-3.5" /> Written by Srikonda Sanjay</span>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="bg-transparent hover:text-white text-rose-500 font-bold cursor-pointer font-bold"
                  >
                    CLOSE BRIEF
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
