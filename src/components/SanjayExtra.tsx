import React, { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export function SanjayExtra({ themeMode }: { themeMode: "dark" | "light" }) {
  const isLight = themeMode === "light";
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const services = [
    {
      title: "Interactive E-Commerce Architectures",
      desc: "Full-stack integration linking React.js user components directly with secure relational PHP APIs backends."
    },
    {
      title: "Corporate Visual Conversion Auditing",
      desc: "Analyzing visual layouts margins, styling shifts, and assets budget to optimize checkout funnel retention."
    },
    {
      title: "Third-Party Secure Gateway Pipes",
      desc: "Safe integrations of gateway systems (like Razorpay) with robust webhook listeners verifications."
    }
  ];

  const faqs: FAQItem[] = [
    {
      q: "Are you available for hybrid or on-site roles in Hyderabad, India?",
      a: "Absolutely. I am currently situated in Hyderabad, Telangana, and I am highly active for hybrid or on-site roles. I can easily commute to local IT campuses (such as Hitec City, Madhapur, Gachibowli, or Durgam Cheruvu)."
    },
    {
      q: "What payment gateways and transactional SDKs have you deployed?",
      a: "I've successfully integrated fully functional Razorpay e-commerce payment checkouts. This includes writing secure database parameters tables in MySQL, verifying webhook responses, and creating receipt PDFs upon payment success."
    },
    {
      q: "How exactly does your MBA benefit your technical coding output?",
      a: "My MBA in Business Strategy teaches me to write code that aligns with real corporate metrics. Rather than over-engineering features, I focus on optimizing page load speeds, reducing bounce rates, maintaining clean layouts, and driving conversions."
    }
  ];

  return (
    <section id="faq_extra" className="scroll-mt-32 space-y-8 text-left">
      {/* Visual Section Banner Header */}
      <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/5 select-none shadow-xl">
        <img
          src="images/Faq.png"
          alt="FAQ consulting Srikonda Sanjay"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] saturate-[0.8] hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 sm:left-8 z-10">
          <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#3b82f6] bg-[#3b82f6]/10 px-2.5 py-0.5 rounded-full border border-[#3b82f6]/20">
            12 . EXTRA SERVICES & FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mt-1">
            FAQ, Services, & Guidelines
          </h2>
        </div>
      </div>

      {/* Main Container */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? "bg-white border-slate-200" : "bg-slate-900/10 border-white/5"} space-y-8`}>
        
        {/* Services Render */}
        <div className="space-y-4">
          <h3 className={`text-base sm:text-lg font-ui font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span>Operational Services Offered</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((serv, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 text-xs font-bold select-none">
                    0{index + 1}
                  </div>
                  <h4 className={`text-xs sm:text-sm font-ui font-black ${isLight ? "text-slate-950" : "text-white"}`}>{serv.title}</h4>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{serv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion list */}
        <div className="space-y-4 border-t border-white/5 pt-6">
          <h3 className={`text-base sm:text-lg font-ui font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
            <HelpCircle className="w-5 h-5 text-rose-500" />
            <span>Interactive Frequently Asked Questions (FAQ)</span>
          </h3>
          
          <div className="space-y-2.5">
            {faqs.map((item, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-rose-500/20" 
                      : isLight 
                        ? "border-slate-200 hover:border-slate-300" 
                        : "border-white/5 hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                    className={`w-full p-4 flex items-center justify-between text-left transition font-ui font-bold text-xs sm:text-sm cursor-pointer ${
                      isOpen ? "text-rose-500 bg-rose-500/5" : isLight ? "text-slate-800 hover:bg-slate-100/50" : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : "text-slate-400"}`} />
                  </button>

                  {isOpen && (
                    <div className={`p-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans border-t ${
                      isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/40 border-white/5"
                    }`}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Privacy Guarantees Policy footer card */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 select-none ${
          isLight ? "bg-slate-100/60 border-slate-200 animate-pulse" : "bg-slate-950/60 border-white/5"
        }`}>
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className={`text-xs font-mono font-black uppercase text-emerald-500`}>Privacy Policy & Cookies Guidelines</h5>
            <p className="text-[10px] sm:text-[11px] text-slate-400 leading-normal">
              "This portfolio application respects user security and data integrity. We do not transmit tracking cookies, telemetry metrics, or sell user records. Contact inquiries are directly received by Srikonda Sanjay via a secure transport pipeline."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
