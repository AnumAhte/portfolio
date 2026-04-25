"use client";

/**
 * Hero Section — full viewport width.
 * Manages its own inner max-w-7xl container so backgrounds span the full screen
 * while content aligns with the global container used by all other sections.
 */

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ROLES = [
  "Full Stack Developer",
  "Agentic AI Developer",
  "Next.js Specialist",
  "AI Chatbot Builder",
  "Problem Solver",
];

function useTypingEffect(phrases: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [displayed,   setDisplayed]   = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex === 1) {
          setIsDeleting(false);
          setCharIndex(0);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, pauseDuration]);

  return displayed;
}

function Orb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-25 pointer-events-none ${className}`}
      animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);
  const heroRef   = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Full-viewport background orbs */}
      <Orb className="w-[32rem] h-[32rem] bg-violet-700 top-0 -left-32"     delay={0} />
      <Orb className="w-96      h-96      bg-purple-700 top-1/3 right-0"    delay={2} />
      <Orb className="w-72      h-72      bg-fuchsia-600 bottom-16 left-1/4" delay={4} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Inner content — same max-w-7xl axis as global container ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
              <Sparkles size={14} className="text-purple-400" />
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[var(--text-secondary)] font-medium mb-3"
            >
              Hi there 👋, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.0]"
              style={{ fontFamily: "var(--font-poppins, 'Poppins'), sans-serif", letterSpacing: "-0.04em" }}
            >
              <span className="animated-gradient-text">Anum</span>
              <br />
              <span className="text-[var(--text-primary)]">Ahtesham</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10"
            >
              <Zap size={20} className="text-purple-400 flex-shrink-0" />
              <span className="text-2xl sm:text-3xl font-semibold text-[var(--accent)]">
                {typedRole}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-[var(--text-secondary)] leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
            >
              I build{" "}
              <span className="text-[var(--text-primary)] font-semibold">real-world AI-powered web applications</span>{" "}
              — from intelligent RAG chatbots to full-stack production platforms.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col gap-1.5 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {[
                "✦ Built production AI projects using Next.js & FastAPI",
                "✦ Experience with AI chatbots, RAG systems & automation",
              ].map((line) => (
                <p key={line} className="text-base text-[var(--text-muted)] font-medium">
                  {line}
                </p>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View Projects
                <ArrowDown size={17} className="rotate-[-90deg]" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost group"
              >
                Hire Me
                <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform duration-200">→</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <span className="text-sm text-[var(--text-muted)]">Find me on:</span>
              {[
                { href: "https://github.com/AnumAhte", icon: <GithubIcon size={20} />,   label: "GitHub"   },
                { href: "https://linkedin.com",         icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mt-8 inline-flex items-stretch glass border border-[var(--border)] rounded-2xl overflow-hidden divide-x divide-[var(--border)]"
            >
              {[
                { value: "10+", label: "Projects"    },
                { value: "2+",  label: "Years Exp."  },
                { value: "8+",  label: "Technologies" },
              ].map(({ value, label }) => (
                <div key={label} className="flex-1 px-5 py-3 text-center hover:bg-white/5 transition-colors duration-200">
                  <div className="text-xl font-extrabold gradient-text leading-none tabular-nums">{value}</div>
                  <div className="text-sm text-[var(--text-muted)] font-medium mt-0.5 whitespace-nowrap">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative flex-shrink-0"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-30 scale-110 pulse-ring" />

            {/* Ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-violet-600 shadow-2xl float-animation">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#06040f] flex items-center justify-center">
                {/* Inner radial glow */}
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 40% 35%, rgba(139,92,246,0.30) 0%, transparent 65%)" }} />
                <div className="relative text-center z-10">
                  <div
                    className="text-6xl sm:text-7xl font-extrabold gradient-text select-none"
                    style={{ fontFamily: "var(--font-poppins, 'Poppins'), sans-serif", letterSpacing: "-0.04em" }}
                  >AA</div>
                  <p className="text-xs text-purple-300 mt-1 font-semibold tracking-[0.2em] uppercase">Dev</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 px-3 py-1.5 glass border border-purple-500/30 rounded-full text-xs font-bold text-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.3)]"
            >
              🤖 AI Dev
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-3 -left-3 px-3 py-1.5 glass border border-violet-500/30 rounded-full text-xs font-bold text-violet-400 shadow-[0_0_16px_rgba(139,92,246,0.3)]"
            >
              ⚡ Next.js
            </motion.div>
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-1/2 -right-16 -translate-y-1/2 px-3 py-1.5 glass border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.3)] hidden sm:block"
            >
              🐍 Python
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.button>
      </div>
    </section>
  );
}
