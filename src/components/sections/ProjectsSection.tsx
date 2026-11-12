"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  Bot,
  Car,
  ShoppingBag,
  Laptop,
  Moon,
  Smartphone,
  Eye,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import MagneticButton from "../ui/MagneticButton";

// Interactive simulated browser mockup component
function ProjectBrowserMockup({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState(0);

  if (project.id === "oson-prava") {
    const tabs = [
      { id: "exam", label: "State Exam Simulator", icon: Shield },
      { id: "simulator", label: "2D Intersection Sim", icon: Car },
      { id: "ai", label: "24/7 AI Murabbiy", icon: Bot },
      { id: "signs", label: "Signs & Fines Catalog", icon: Layers },
    ];

    return (
      <div className="w-full rounded-2xl overflow-hidden bg-[#07090e] border border-white/10 shadow-2xl flex flex-col">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#0d1017] border-b border-white/[0.08] flex items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-emerald-400 text-[10px]">🔒</span>
              <span className="text-zinc-300 truncate">https://osonprava-five.vercel.app/</span>
            </div>
            <span className="text-[10px] text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-950/60">
              NEXT.JS
            </span>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span className="hidden sm:inline">Launch</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mockup Sub-Navigation Tabs */}
        <div className="px-4 py-2 bg-[#090b12] border-b border-white/5 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-blue-600/20 text-cyan-300 border border-blue-500/30"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mockup Canvas Screen */}
        <div className="p-6 bg-gradient-to-b from-[#07090e] to-[#040407] min-h-[300px] flex flex-col justify-between">
          {activeTab === 0 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    Official Exam Mode
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Davlat Imtihoni — B Toifasi (20 Savol)
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-xs font-bold">
                  ⏱ 19:42
                </div>
              </div>

              {/* Question preview card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-xs sm:text-sm font-medium text-zinc-200">
                  12. Quyidagi chorrahada birinchi navbatda qaysi transport vositasi harakatlanish huquqiga ega?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center justify-between">
                    <span>A) Asosiy yo‘ldagi ko‘k avtomobil</span>
                    <span className="font-mono text-[10px]">Tug‘ri ✓</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-zinc-300">
                    B) O‘ngdan kelayotgan qizil avtomobil
                  </div>
                </div>
              </div>

              {/* Question badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                  <span
                    key={num}
                    className={`w-6 h-6 rounded flex items-center justify-center font-mono text-[10px] ${
                      num === 12
                        ? "bg-blue-600 text-white font-bold"
                        : num < 12
                        ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/30"
                        : "bg-white/[0.04] text-zinc-300"
                    }`}
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono text-cyan-400">
                  Chorraha Harakati Simulyatori (2D Canvas)
                </span>
                <span className="text-[10px] font-mono text-zinc-300">Interactive Turn Logic</span>
              </div>

              {/* Visual 2D crossroad graphic */}
              <div className="relative w-full h-44 rounded-xl bg-[#0b0e17] border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Roads */}
                <div className="absolute inset-y-0 w-24 bg-zinc-800/80 border-x border-dashed border-zinc-600" />
                <div className="absolute inset-x-0 h-24 bg-zinc-800/80 border-y border-dashed border-zinc-600" />

                {/* Center intersection */}
                <div className="absolute w-24 h-24 bg-zinc-800" />

                {/* Simulated vehicles */}
                <div className="absolute top-4 w-6 h-10 rounded bg-blue-500 border border-white/40 shadow-lg flex items-center justify-center text-[10px] text-white font-bold">
                  1
                </div>
                <div className="absolute bottom-4 w-6 h-10 rounded bg-emerald-500 border border-white/40 shadow-lg flex items-center justify-center text-[10px] text-white font-bold">
                  2
                </div>
                <div className="absolute left-6 w-10 h-6 rounded bg-amber-500 border border-white/40 shadow-lg flex items-center justify-center text-[10px] text-white font-bold">
                  3
                </div>

                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-mono text-cyan-300 border border-white/10">
                  Priority: Blue &rarr; Green &rarr; Amber
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                  🤖
                </div>
                <span className="text-xs font-bold text-white">Oson AI Murabbiy 24/7</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.04] text-zinc-300 max-w-[85%]">
                  <p className="font-semibold text-white mb-0.5">Foydalanuvchi:</p>
                  Aylanma harakatda (krugda) kim birinchi yuradi?
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 max-w-[90%] ml-auto">
                  <p className="font-semibold text-emerald-400 mb-0.5">Oson AI:</p>
                  O‘zbekiston YHQga ko‘ra, agar boshqa belgilar o‘rnatilmagan bo‘lsa, aylanma harakatdagi transport vositasi imtiyozga ega!
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono text-cyan-400">
                  Yo‘l Belgilari & Jarimalar Katalogi
                </span>
                <span className="text-[10px] font-mono text-zinc-300">Qidiruv & Filtrlar</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-[11px] border-2 border-white">
                    ⛔
                  </div>
                  <div>
                    <div className="font-bold text-white text-[11px]">3.1 Kirish taqiqlangan</div>
                    <div className="text-[10px] text-zinc-300">G‘isht belgisi</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-[11px] border-2 border-white">
                    ⬆️
                  </div>
                  <div>
                    <div className="font-bold text-white text-[11px]">4.1.1 To‘g‘riga harakat</div>
                    <div className="text-[10px] text-zinc-300">Buyuruvchi belgi</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Live Banner */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-300">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Live Deployment Active
            </span>
            <span className="text-zinc-300">Designed for Uzbek Drivers</span>
          </div>
        </div>
      </div>
    );
  }

  // Project 02: SWOO Online Shop
  const swooTabs = [
    { id: "store", label: "Tech Storefront", icon: ShoppingBag },
    { id: "categories", label: "Multi-Category Nav", icon: Laptop },
    { id: "quickview", label: "Product Quick View", icon: Eye },
    { id: "theme", label: "Dark & Light Mode", icon: Moon },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#07090e] border border-white/10 shadow-2xl flex flex-col">
      {/* Browser Top Bar */}
      <div className="px-4 py-3 bg-[#0d1017] border-b border-white/[0.08] flex items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-emerald-400 text-[10px]">🔒</span>
            <span className="text-zinc-300 truncate">https://swoo-com-mk44.vercel.app/</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/60">
            TAILWIND 4
          </span>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <span className="hidden sm:inline">Launch</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mockup Sub-Navigation Tabs */}
      <div className="px-4 py-2 bg-[#090b12] border-b border-white/5 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {swooTabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isSelected = activeTab === idx;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mockup Screen */}
      <div className="p-6 bg-gradient-to-b from-[#07090e] to-[#040407] min-h-[300px] flex flex-col justify-between">
        {activeTab === 0 && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Header / Brand strip */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                  S
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    SWOO TECH MARKET
                  </h4>
                  <span className="text-[10px] text-zinc-300">Premium Consumer Electronics</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300">USD $</span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300">Eng</span>
              </div>
            </div>

            {/* Product card showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                    -15% OFF
                  </span>
                  <span className="text-zinc-300 text-xs">⭐ 4.9</span>
                </div>
                <div className="h-20 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 text-xs font-mono">
                  [MacBook Pro M3 Max]
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs font-bold text-white">Apple MacBook Pro 16&quot;</p>
                    <p className="text-xs text-emerald-400 font-bold">$2,499.00</p>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold">
                    Cart +
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px] font-bold">
                    HOT DEAL
                  </span>
                  <span className="text-zinc-300 text-xs">⭐ 5.0</span>
                </div>
                <div className="h-20 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 text-xs font-mono">
                  [Sony WH-1000XM5]
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs font-bold text-white">Sony Wireless Headphones</p>
                    <p className="text-xs text-emerald-400 font-bold">$348.00</p>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold">
                    Cart +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <span className="text-xs font-mono text-emerald-400">Explore Tech Categories</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Smartphones", "Laptops & PCs", "Audio & Bass", "Gaming Gear"].map((cat) => (
                <div
                  key={cat}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center hover:border-emerald-500/40 transition-all cursor-pointer"
                >
                  <p className="text-xs font-bold text-white">{cat}</p>
                  <p className="text-[10px] text-zinc-300 mt-1">Browse Catalog</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Quick View Modal Preview</span>
              <span className="text-[10px] font-mono text-emerald-400">In Stock (24 units)</span>
            </div>
            <p className="text-xs text-zinc-300">
              High-resolution product imagery preview, dynamic technical specifications table, interactive quantity selector, and instant checkout integration.
            </p>
          </div>
        )}

        {activeTab === 3 && (
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Theme Switcher Interface</span>
              <span className="text-[10px] font-mono text-zinc-300">Dark / Light Modes</span>
            </div>
            <p className="text-xs text-zinc-300">
              Engineered with modern CSS variables, backdrop blur filters, and persistent preference memory across sessions.
            </p>
          </div>
        )}

        {/* Bottom Status */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Deployment Active
          </span>
          <span className="text-zinc-300">Modern E-Commerce Storefront</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>// 03. FEATURED WORK & PRODUCTION DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          <p className="text-sm font-mono text-zinc-300 sm:text-right max-w-sm">
            Real deployed web applications inspected for architectural integrity and responsive excellence.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-24 sm:space-y-32">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              {/* Left/Text Side */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Meta / Number Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-mono font-black text-blue-500/30">
                    {project.number}
                  </span>
                  <div className="h-6 w-px bg-white/10" />
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {project.year} • {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-zinc-300 mb-6">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                    Key Implementations:
                  </p>
                  {project.highlights.slice(0, 4).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.03] border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton strength={15}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chrome-button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider text-white uppercase group"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </MagneticButton>

                  <span className="text-xs font-mono text-zinc-300">
                    Live on Vercel
                  </span>
                </div>
              </div>

              {/* Right Side: Interactive High-Fidelity Browser Mockup */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-cyan-500/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
                  <div className="relative">
                    <ProjectBrowserMockup project={project} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
