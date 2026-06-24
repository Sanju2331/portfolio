import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, X, ChevronRight, CornerDownLeft, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";

export function SanjayBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    { text: "Why hire Sanjay?", label: "Hire Him" },
    { text: "Tell me about his e-commerce skills.", label: "E-commerce" },
    { text: "Does he understand database design?", label: "Database" },
    { text: "How can I contact Sanjay?", label: "Contact Info" }
  ];

  // Initialize with a welcome message from the AI double
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Hi! I'm Sanjay's AI recruiter assistant. You can ask me any question about Sanjay's development skills, projects at MediaWagon, his MBA-focused business edge, or how to get him on your team! Try clicking one of the suggestions below.",
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  // Sync scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text) return;

    // Append user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send history to preserve conversational context
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI server");
      }

      const resData = await response.json();
      const assistantMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "assistant",
        content: resData.content,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "assistant",
        content: "Oops! I ran into a minor connection glitch checking Sanjay's neural database. Please retry in a second or call him directly at +91-7660983973!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="sanjay-ai-bot-trigger"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 shadow-2xl hover:shadow-rose-500/30 text-white px-5 py-4 rounded-full font-ui font-semibold text-sm cursor-pointer border border-rose-400/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Chat AI Sanjay Double</span>
            <MessageSquare className="w-4 h-4 ml-1" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="sanjay-ai-bot-card"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[430px] h-[580px] flex flex-col glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-950/40 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-display text-lg text-rose-400 font-bold tracking-wider">
                    SS
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0A0A0C]"></span>
                </div>
                <div>
                  <h3 className="font-ui font-bold text-sm tracking-tight flex items-center gap-1.5 text-white">
                    Sanjay AI Response Bot
                    <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <span className="font-mono font-medium">gemini-3.5-flash</span>
                    <span>•</span>
                    <span>Double Active</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Body */}
            <div
              ref={scrollRef}
              className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-4 bg-slate-950/20"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-[13px] leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "bg-rose-500 text-white rounded-br-none"
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-none p-3 bg-slate-900 border border-slate-800 text-slate-400 text-[13px] flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-rose-500" />
                    <span>Double is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Starter prompts pills */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-950/30 border-t border-white/5">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-2">
                  Interactive Quick Ask:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {starterPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(p.text)}
                      className="text-[11px] font-medium font-ui py-1.5 px-3 rounded-full bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:text-rose-400 transition cursor-pointer"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Form Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-slate-950/60 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask e.g. What PHP frameworks does Sanjay use?"
                className="flex-grow bg-slate-900 text-white border border-white/5 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-rose-500 focus:bg-slate-900/80 transition"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="bg-rose-500 hover:bg-rose-600 disabled:bg-slate-800 text-white rounded-xl p-2.5 transition flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
