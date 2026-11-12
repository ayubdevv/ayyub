"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Download,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import MagneticButton from "../ui/MagneticButton";
import { GithubIcon, TelegramIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0066ff", "#00e5ff", "#ffffff"],
      });
    } catch {
      // ignore
    }
  };

  const handleTelegramSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Muhammadayyub! My name is ${visitorName || "a visitor"}.\n\n${visitorMessage}`
    );
    window.open(`https://t.me/uzvyv?text=${text}`, "_blank");
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${visitorName || "a collaborator"}`);
    const body = encodeURIComponent(visitorMessage);
    window.location.href = `mailto:yunsovdostobek@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-mesh-pattern">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>// 05. DIRECT COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
              LET&apos;S BUILD SOMETHING GREAT.
            </h2>
          </div>

          <p className="text-sm font-mono text-zinc-300 sm:text-right max-w-sm">
            Open for junior frontend opportunities, modern web builds, and collaborative projects.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* GitHub */}
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel p-6 rounded-3xl border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:text-blue-400 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Code & Repositories
              </p>
              <h3 className="text-base font-bold text-white mt-1">GitHub</h3>
            </div>
            <div className="pt-6 font-mono text-xs text-blue-400 flex items-center gap-1">
              <span>github.com/ayubdevv</span>
            </div>
          </a>

          {/* Telegram */}
          <a
            href={PERSONAL_INFO.contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Direct Messaging
              </p>
              <h3 className="text-base font-bold text-white mt-1">Telegram</h3>
            </div>
            <div className="pt-6 font-mono text-xs text-cyan-400 flex items-center gap-1">
              <span>t.me/uzvyv</span>
            </div>
          </a>

          {/* Email */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, "email")}
                  className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Electronic Mail
              </p>
              <h3 className="text-base font-bold text-white mt-1">Email</h3>
            </div>
            <div className="pt-6">
              <a
                href={PERSONAL_INFO.contact.emailLink}
                className="font-mono text-xs text-blue-400 hover:underline break-all"
              >
                {PERSONAL_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.phone, "phone")}
                  className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Direct Line
              </p>
              <h3 className="text-base font-bold text-white mt-1">Phone / Mobile</h3>
            </div>
            <div className="pt-6">
              <a
                href={PERSONAL_INFO.contact.phoneLink}
                className="font-mono text-xs text-emerald-400 hover:underline"
              >
                {PERSONAL_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Lower Row: Interactive Message Composer + Dedicated Resume Download Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Message Composer */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Quick Message Composer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-zinc-300 mb-6 font-light">
                Draft a message to launch directly into Telegram or your default email client.
              </p>

              <form onSubmit={handleTelegramSend} className="space-y-4">
                <div>
                  <label htmlFor="visitorName" className="block text-xs font-mono text-zinc-200 mb-1.5 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    id="visitorName"
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Alex, Tech Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="visitorMessage" className="block text-xs font-mono text-zinc-200 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    id="visitorMessage"
                    rows={4}
                    value={visitorMessage}
                    onChange={(e) => setVisitorMessage(e.target.value)}
                    placeholder="Hi Muhammadayyub, I looked through your projects and would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="chrome-button inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider"
                  >
                    <TelegramIcon className="w-3.5 h-3.5" />
                    <span>Send via Telegram</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="glass-panel inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-200 hover:text-white uppercase tracking-wider hover:border-white/20 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Dedicated Resume Download Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 font-mono text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-2">
                Download Curriculum Vitae
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                Download the official, unmodified PDF resume of Sharipov Muhammadayyub containing complete contact info, project highlights, verified skills, and PDP Junior coursework.
              </p>

              {/* Resume Quick Specs */}
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-300">
                  <span>File Name:</span>
                  <span className="text-zinc-200 truncate max-w-[180px]">
                    Sharipov_Muhammadayyub_Resume.pdf
                  </span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span>Format:</span>
                  <span className="text-zinc-200">Standard PDF</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span>Target Role:</span>
                  <span className="text-cyan-400">Frontend Developer</span>
                </div>
              </div>
            </div>

            <MagneticButton strength={15}>
              <a
                href="/Sharipov_Muhammadayyub_Resume.pdf"
                download="Sharipov_Muhammadayyub_Resume.pdf"
                onClick={triggerConfetti}
                className="chrome-button w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider group"
                aria-label="Download Sharipov Muhammadayyub Resume PDF"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
