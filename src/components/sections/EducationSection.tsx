"use client";

import { GraduationCap, Calendar, CheckCircle2, BookOpen, Terminal, Sparkles } from "lucide-react";

export default function EducationSection() {
  const roadmapSteps = [
    {
      phase: "01",
      title: "Semantic Web Foundations",
      subtitle: "HTML5, Modern CSS3, Flexbox & Grid",
      skills: ["Semantic Structure", "Responsive Layouts", "CSS Architecture", "Cross-browser Support"],
      status: "Completed",
    },
    {
      phase: "02",
      title: "Modern JavaScript & Web APIs",
      subtitle: "ES6+, Async Programming & DOM APIs",
      skills: ["Asynchronous JS", "Fetch & REST APIs", "Storage & Canvas", "Object-Oriented Design"],
      status: "Completed",
    },
    {
      phase: "03",
      title: "Component Systems & React 19",
      subtitle: "Component Architecture, Hooks & UI State",
      skills: ["Functional Components", "Custom Hooks", "State Management", "Form Handling"],
      status: "Completed",
    },
    {
      phase: "04",
      title: "Production Next.js 15 & TypeScript",
      subtitle: "App Router, Static/Dynamic SSR & Strict Types",
      skills: ["App Router Routing", "TypeScript Interfaces", "Tailwind CSS 4", "Vercel Deployments"],
      status: "In Progress / Active Focus",
    },
  ];

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden bg-dot-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>// 04. ACADEMIC & TECHNICAL FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              EDUCATION & TIMELINE
            </h2>
          </div>

          <p className="text-sm font-mono text-zinc-300 sm:text-right max-w-sm">
            Structured practical curriculum focused on building production-grade frontend applications.
          </p>
        </div>

        {/* Main Education Feature Box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 mb-12 relative overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                    Academy & Institute
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs text-zinc-300">Tashkent</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                  PDP Junior
                </h3>
                <p className="text-sm font-medium text-zinc-200 mt-0.5">
                  Frontend Development Course
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>2025 — 2026</span>
              </div>

              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                Currently Enrolled
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-8">
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-4xl">
              An intensive frontend engineering program designed to transform foundational programming curiosity into production-ready software craftsmanship. The program emphasizes daily hands-on implementation, modern JavaScript standards, reusable React component architecture, and full application deployments.
            </p>
          </div>

          {/* Curriculum Milestones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {roadmapSteps.map((step) => (
              <div
                key={step.phase}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-blue-400">
                      Phase {step.phase}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        step.status.includes("Completed")
                          ? "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30"
                          : "bg-blue-950/60 text-cyan-300 border border-blue-500/30"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-[11px] text-zinc-300 mb-4">{step.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {step.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/[0.03]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

