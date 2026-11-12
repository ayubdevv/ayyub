"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { GithubIcon, TelegramIcon } from "../ui/Icons";

export default function Footer() {
  const [tashkentTime, setTashkentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Tashkent",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTashkentTime(timeString);
      } catch {
        setTashkentTime("13:00:00");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#030406] relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Wordmark & Role */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center font-mono text-xs font-black text-white">
                  SM
                </div>
              </div>
              <span className="font-mono text-sm tracking-[0.2em] font-bold text-white uppercase">
                SHARIPOV MUHAMMADAYYUB
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-mono">
              Frontend Developer & Creative Developer • Tashkent, Uzbekistan
            </p>
          </div>

          {/* Tashkent Live Time Widget */}
          <div className="flex items-center gap-4 glass-panel px-4 py-2 rounded-2xl border border-white/10 font-mono text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300">TASHKENT (UTC+5):</span>
            </div>
            <span className="text-white font-bold">{tashkentTime || "13:00:00"}</span>
          </div>

          {/* Back To Top Button */}
          <MagneticButton strength={20}>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-full glass-panel text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all flex items-center gap-2 text-xs font-mono uppercase tracking-wider group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-300">
          <p>© {new Date().getFullYear()} Sharipov Muhammadayyub. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-zinc-300">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-semibold">Next.js 15</span>
            <span>&</span>
            <span className="text-blue-400 font-semibold">Tailwind CSS 4</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
