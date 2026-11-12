"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layers,
  Sparkles,
  Cpu,
  FileCode2,
  Terminal,
  Check,
  Globe2,
  GitBranch,
  Braces,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-dot-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>// 02. TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              SKILLS & CAPABILITIES
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(0,102,255,0.4)] border border-blue-400/50"
                    : "glass-panel text-zinc-300 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Languages (col-span-6) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Core Foundations
                  </span>
                  <h3 className="text-lg font-bold text-white">Languages</h3>
                </div>
              </div>
              <span className="font-mono text-xs text-zinc-300 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5">
                4 Technologies
              </span>
            </div>

            <p className="text-xs text-zinc-300 mb-6 font-light leading-relaxed">
              Strong foundation in modern, strictly typed syntax, asynchronous operations, and semantic page structure.
            </p>

            <div className="space-y-3">
              {[
                { name: "TypeScript", role: "Typed JavaScript Architecture", tag: "Strict Mode", icon: "TS" },
                { name: "JavaScript", role: "ES6+, Async/Await, Web APIs", tag: "Modern ES", icon: "JS" },
                { name: "HTML5", role: "Semantic Structure & Accessibility", tag: "Standards", icon: "HTML" },
                { name: "CSS3", role: "Modern Flexbox, Grid & Animations", tag: "Layouts", icon: "CSS" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-zinc-300">{item.role}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Frontend Frameworks (col-span-6) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Modern Stack
                  </span>
                  <h3 className="text-lg font-bold text-white">Frontend Frameworks</h3>
                </div>
              </div>
              <span className="font-mono text-xs text-zinc-300 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5">
                Modern Standard
              </span>
            </div>

            <p className="text-xs text-zinc-300 mb-6 font-light leading-relaxed">
              Component-driven web applications built for speed, SEO excellence, and fluid user interactions.
            </p>

            <div className="space-y-3">
              {[
                {
                  name: "React 19",
                  role: "Modern Hooks, Suspense, Concurrent Features",
                  badge: "v19 Core",
                },
                {
                  name: "Next.js 15",
                  role: "App Router, SSR, Optimization & Route Handlers",
                  badge: "v15 App Router",
                },
                {
                  name: "Tailwind CSS 4",
                  role: "Utility-First Engine, Modern Design Tokens",
                  badge: "v4 Styling",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                      ⚡
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{item.name}</div>
                      <div className="text-[11px] text-zinc-300">{item.role}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 font-medium px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Forms & UI Systems (col-span-5) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Interactive UI
                  </span>
                  <h3 className="text-lg font-bold text-white">Forms & UI Ecosystem</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "React Hook Form",
                  desc: "Performant form state & validation without extra rerenders",
                },
                {
                  name: "React Toastify",
                  desc: "Non-intrusive, accessible notifications and alert toasts",
                },
                {
                  name: "Ant Design Icons",
                  desc: "Crisp vector iconography system for clean UI cues",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all"
                >
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 mt-1 pl-5.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Other / Browser & Engineering Tools (col-span-7) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                      Engineering Tooling
                    </span>
                    <h3 className="text-lg font-bold text-white">Browser & Workflows</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-300">Industry Standard</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    name: "Responsive Design",
                    detail: "Mobile-first viewports & fluid layout architectures",
                  },
                  {
                    name: "Git & GitHub",
                    detail: "Branch management, version history & code hosting",
                  },
                  {
                    name: "Browser APIs",
                    detail: "DOM events, Web Storage, Canvas, Fetch & Audio",
                  },
                  {
                    name: "DevTools Debugging",
                    detail: "Performance profiling, element inspection & console analysis",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all"
                  >
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-[11px] text-zinc-300 mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live TypeScript code snippet container */}
            <div className="rounded-2xl bg-[#030407] border border-white/10 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-zinc-300">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>developer.config.ts</span>
                </span>
                <span>TypeScript 5.x</span>
              </div>
              <pre className="text-[12px] leading-relaxed">
                <code>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>:{" "}
                  <span className="text-amber-300">FrontendEngineer</span> = &#123;{"\n"}
                  {"  "}name: <span className="text-emerald-400">&quot;Sharipov Muhammadayyub&quot;</span>,{"\n"}
                  {"  "}stack: [<span className="text-emerald-400">&quot;React 19&quot;</span>, <span className="text-emerald-400">&quot;Next.js 15&quot;</span>, <span className="text-emerald-400">&quot;TypeScript&quot;</span>],{"\n"}
                  {"  "}passion: <span className="text-emerald-400">&quot;Building award-winning digital experiences&quot;</span>{"\n"}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

