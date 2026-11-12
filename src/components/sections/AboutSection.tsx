"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Calendar, Clock, Terminal, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>// 01. PROFILE & BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              ABOUT MUHAMMADAYYUB
            </h2>
          </div>

          <p className="text-sm font-mono text-zinc-300 sm:text-right max-w-xs">
            Focused on mastering modern frontend architecture and expressive interactive design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Key Metadata Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl">
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src="/portrait.jpg"
                  alt="Sharipov Muhammadayyub"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out scale-[1.02] group-hover:scale-100"
                  priority
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-transparent to-transparent opacity-80" />

                {/* Badge inside photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                      Based In
                    </p>
                    <p className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Tashkent, Uzbekistan
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-mono text-zinc-300">EXP</span>
                </div>
                <div className="text-2xl font-black text-white">~1 Year</div>
                <div className="text-xs text-zinc-300">Intensive learning & hands-on code</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-mono text-zinc-300">ACADEMY</span>
                </div>
                <div className="text-2xl font-black text-white">PDP Junior</div>
                <div className="text-xs text-zinc-300">Frontend Course (2025–2026)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Engineering Principles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                The Journey
              </div>

              <div className="space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-light mt-2">
                {PERSONAL_INFO.aboutStory.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Status Banner */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                      Curriculum
                    </p>
                    <p className="text-sm font-semibold text-white">
                      PDP Junior Frontend Development
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>2025 — 2026 Cohort</span>
                </div>
              </div>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2 mb-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Component-First Thinking</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  Building modular, maintainable, and strictly typed components that scale gracefully across apps.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-2 mb-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Fluid Responsiveness</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  Zero horizontal overflow, fluid typographic scales, and tested usability across mobile and desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

