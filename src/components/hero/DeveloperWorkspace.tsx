"use client";

import { useState, useRef, MouseEvent } from "react";
import { Check, Copy, Terminal, Sparkles, Code2 } from "lucide-react";

export default function DeveloperWorkspace() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const codeSnippet = `const developer = {
  name: "Muhammadayyub",
  role: "Frontend Developer",
  stack: ["React", "Next.js", "TypeScript"],
  projects: ["OSON PRAVA", "SWOO"]
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Lightweight mouse tilt effect (CSS perspective, zero continuous animation loop)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Keep tilt subtle (max 3.5 degrees) for sleek feel
    setRotate({
      x: -(y / (rect.height / 2)) * 3.5,
      y: (x / (rect.width / 2)) * 3.5,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto select-none"
    >
      {/* Subtle ambient electric-blue glow underneath */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent blur-xl opacity-60 pointer-events-none" />

      {/* Main Code Editor Window */}
      <div className="relative rounded-2xl bg-[#080a10]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Editor Titlebar */}
        <div className="px-4 py-3 bg-[#0d101a]/95 border-b border-white/[0.08] flex items-center justify-between gap-3">
          {/* Minimal window controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/85 hover:bg-[#ff5f56] transition-colors inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/85 hover:bg-[#ffbd2e] transition-colors inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/85 hover:bg-[#27c93f] transition-colors inline-block" />
          </div>

          {/* Active File Tab with Electric-Blue Accent */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#131726] border border-white/5 text-xs font-mono text-zinc-300">
            <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-1 py-0.2 rounded border border-cyan-500/30">
              TS
            </span>
            <span className="text-zinc-200 text-xs">developer.config.ts</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          {/* Quick Copy Action */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Copy code snippet"
            aria-label="Copy code snippet"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] text-emerald-400 hidden sm:inline">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Breadcrumb strip */}
        <div className="px-5 py-1.5 bg-[#06080d]/80 border-b border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <div className="flex items-center gap-1.5 truncate">
            <span>portfolio</span>
            <span>&gt;</span>
            <span>src</span>
            <span>&gt;</span>
            <span className="text-zinc-300">developer.config.ts</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-300">
            <span>TypeScript 5.x</span>
            <span>•</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Code Body with Line Numbers & Syntax Highlighting */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300">
          <div className="space-y-1.5">
            {/* Line 1 */}
            <div className="flex items-center">
              <span className="w-7 select-none text-zinc-300 text-right pr-3 font-mono text-[11px]">01</span>
              <div>
                <span className="text-blue-400 font-semibold">const</span>{" "}
                <span className="text-cyan-300 font-medium">developer</span> = &#123;
              </div>
            </div>

            {/* Line 2 */}
            <div className="flex items-center">
              <span className="w-7 select-none text-zinc-300 text-right pr-3 font-mono text-[11px]">02</span>
              <div className="pl-4">
                <span className="text-zinc-300">name</span>:{" "}
                <span className="text-emerald-300">&quot;Muhammadayyub&quot;</span>,
              </div>
            </div>

            {/* Line 3 */}
            <div className="flex items-center">
              <span className="w-7 select-none text-zinc-300 text-right pr-3 font-mono text-[11px]">03</span>
              <div className="pl-4">
                <span className="text-zinc-300">role</span>:{" "}
                <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,
              </div>
            </div>

            {/* Line 4: Active Line Highlight for Stack */}
            <div className="flex items-center -mx-5 sm:-mx-6 px-5 sm:px-6 py-0.5 bg-blue-500/[0.08] border-l-2 border-cyan-400">
              <span className="w-7 select-none text-cyan-400 text-right pr-3 font-mono text-[11px] font-bold">04</span>
              <div className="pl-4 flex items-center flex-wrap gap-1">
                <span className="text-zinc-300">stack</span>: [
                <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;TypeScript&quot;</span>
                ],
              </div>
            </div>

            {/* Line 5 */}
            <div className="flex items-center">
              <span className="w-7 select-none text-zinc-300 text-right pr-3 font-mono text-[11px]">05</span>
              <div className="pl-4 flex items-center flex-wrap gap-1">
                <span className="text-zinc-300">projects</span>: [
                <span className="text-cyan-300">&quot;OSON PRAVA&quot;</span>,{" "}
                <span className="text-cyan-300">&quot;SWOO&quot;</span>
                ]
              </div>
            </div>

            {/* Line 6 */}
            <div className="flex items-center">
              <span className="w-7 select-none text-zinc-300 text-right pr-3 font-mono text-[11px]">06</span>
              <div>
                &#125;;
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </div>
            </div>
          </div>
        </div>

        {/* Editor Bottom Status Bar with Subtle Electric-Blue Accent */}
        <div className="px-5 py-2.5 bg-[#06080d] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>ready</span>
            </span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-300">0 errors, 0 warnings</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">ESNext</span>
          </div>
        </div>
      </div>

      {/* Floating Overlapping UI Layer 1: Availability Status (Top Right) */}
      <div className="hidden sm:flex absolute -top-4 -right-3 lg:-right-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0c101d]/90 backdrop-blur-md border border-cyan-500/30 shadow-[0_10px_25px_rgba(0,102,255,0.25)] hover:translate-y-[-2px] transition-transform duration-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
            Available For Hire
          </span>
          <span className="text-[9px] font-mono text-zinc-300">
            Tashkent • UTC+5
          </span>
        </div>
      </div>

      {/* Floating Overlapping UI Layer 2: Core Stack Chips (Bottom Left) */}
      <div className="hidden sm:flex absolute -bottom-5 -left-3 lg:-left-4 z-20 items-center gap-2 p-2.5 rounded-2xl bg-[#0c101d]/95 backdrop-blur-md border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] transition-transform duration-200">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-[11px] font-mono font-medium">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Core Stack</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-zinc-200">
            React 19
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-zinc-200">
            Next.js 15
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-zinc-200">
            TypeScript
          </span>
        </div>
      </div>

      {/* Mobile-only visible compact status pill */}
      <div className="flex sm:hidden mt-3 items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for work</span>
        </div>
        <span className="text-zinc-300">Tashkent, UZ</span>
      </div>
    </div>
  );
}
