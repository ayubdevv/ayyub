"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import MagneticButton from "../ui/MagneticButton";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerResumeDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.2 },
        colors: ["#0066ff", "#00e5ff", "#ffffff"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#040407]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Custom Wordmark */}
          <Link
            href="#"
            className="group flex items-center gap-3 select-none"
            aria-label="Sharipov Muhammadayyub Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                <span className="font-mono text-xs font-black text-white group-hover:text-cyan-400 transition-colors">
                  SM
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.2em] font-bold text-zinc-100 group-hover:text-white transition-colors uppercase">
                MUHAMMADAYYUB
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                FRONTEND DEV
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-200 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-blue-600/30 border border-blue-500/40 -z-10 shadow-[0_0_12px_rgba(0,102,255,0.3)]" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton strength={15}>
              <a
                href="/Sharipov_Muhammadayyub_Resume.pdf"
                download="Sharipov_Muhammadayyub_Resume.pdf"
                onClick={triggerResumeDownload}
                className="chrome-button flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-white uppercase group"
                aria-label="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
                <span className="text-[10px] opacity-75 font-mono">PDF</span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-panel text-zinc-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#040407]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4">
            <p className="font-mono text-xs text-zinc-300 uppercase tracking-widest px-2">
              Navigation
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] text-lg font-medium text-zinc-200 hover:text-white transition-all"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-300" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="/Sharipov_Muhammadayyub_Resume.pdf"
              download="Sharipov_Muhammadayyub_Resume.pdf"
              onClick={() => {
                triggerResumeDownload();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-between text-xs text-zinc-300 font-mono pt-2">
              <span>Tashkent, Uzbekistan</span>
              <span className="text-emerald-400">Available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

