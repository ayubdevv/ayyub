"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Phone, Sparkles, Code2 } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { GithubIcon, TelegramIcon } from "../ui/Icons";
import DeveloperWorkspace from "../hero/DeveloperWorkspace";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-mesh-pattern bg-dot-grid"
    >
      {/* Subtle top ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-blue-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[220px] bg-cyan-500/8 blur-[110px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Top Status & Location Bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-b border-white/[0.06] mb-8 lg:mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-zinc-300">LOC:</span>
              <span className="text-zinc-200">Tashkent, UZ</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-zinc-300">EDN:</span>
              <span className="text-zinc-200">PDP Junior (2025–2026)</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Main Grid: Typography Left, Developer Workspace Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center my-auto">
          {/* Left Column: Oversized Editorial Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center z-10 overflow-visible"
          >
            {/* Subtitle / Category pill */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Frontend Developer &amp; Creative Developer
              </span>
            </motion.div>

            {/* Oversized Editorial Heading with Responsive clamp() */}
            <motion.div variants={itemVariants} className="mb-6 select-none overflow-visible">
              <h1 className="text-[clamp(2.15rem,7.5vw,3.25rem)] sm:text-6xl md:text-7xl lg:text-[clamp(2.75rem,4.9vw,4.9rem)] xl:text-[5.1rem] font-black tracking-tight leading-[1.04] text-white">
                <span className="block tracking-[-0.03em]">SHARIPOV</span>
                <span className="block tracking-[-0.03em] bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent pb-1">
                  MUHAMMADAYYUB
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-8"
            >
              Building modern, responsive and interactive digital experiences with{" "}
              <span className="text-white font-medium underline decoration-blue-500/60 decoration-2 underline-offset-4">
                React
              </span>
              ,{" "}
              <span className="text-white font-medium underline decoration-cyan-500/60 decoration-2 underline-offset-4">
                Next.js
              </span>{" "}
              and{" "}
              <span className="text-white font-medium underline decoration-blue-400/60 decoration-2 underline-offset-4">
                TypeScript
              </span>
              .
            </motion.p>

            {/* CTAs and Interaction */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <MagneticButton strength={15}>
                <a
                  href="#projects"
                  className="chrome-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider text-white uppercase group"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                  <span>Explore Projects</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={15}>
                <a
                  href="#contact"
                  className="glass-panel glass-panel-hover inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider text-zinc-200 hover:text-white uppercase transition-all"
                >
                  <span>Get In Touch</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Links Quick Access */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4 border-t border-white/[0.06]"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 mr-2">
                Connect:
              </span>

              <a
                href="https://github.com/ayubdevv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-panel text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://t.me/uzvyv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-panel text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all"
                aria-label="Telegram Account"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:yunsovdostobek@gmail.com"
                className="p-2.5 rounded-lg glass-panel text-zinc-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
                aria-label="Email Muhammadayyub"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+998337071275"
                className="p-2.5 rounded-lg glass-panel text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-600/10 transition-all"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full pt-4 pb-6 sm:py-6 flex items-center justify-center overflow-visible"
          >
            <DeveloperWorkspace />
          </motion.div>
        </div>

        {/* Scroll Indicator at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col items-center justify-center pt-8 pb-2 text-zinc-300"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 hover:text-white transition-colors"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-300 group-hover:text-cyan-400 transition-colors">
              Scroll To Discover
            </span>
            <div className="w-6 h-10 rounded-full border border-zinc-700 group-hover:border-blue-500 flex items-start justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#0066ff]"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
