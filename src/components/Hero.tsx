"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ROLES = [
  "Frontend Developer",
  "Agentic AI Developer",
  "AI Chatbot Builder",
];

function useTypingEffect(phrases: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      className={`absolute rounded-full blur-3xl opacity-60 pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -22, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Background Orbs */}
      <Orb className="w-[32rem] h-[32rem] bg-[rgba(109,40,217,0.55)] top-0 -left-32" />
      <Orb className="w-96 h-96 bg-[rgba(124,58,237,0.45)] top-1/3 right-0" delay={2} />
      <Orb className="w-72 h-72 bg-[rgba(232,121,249,0.40)] bottom-16 left-1/4" delay={4} />

      <div className="relative z-10 w-full global-container py-32">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 border border-[var(--border)] text-[var(--accent)]"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
              <Sparkles size={14} />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-display"
            >
              <span className="animated-gradient-text">Anum</span>
              <br />
              <span className="text-[var(--text-primary)]">Ahtesham</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-2xl sm:text-3xl font-bold min-h-[44px]"
            >
              <Zap size={28} className="text-amber-400 flex-shrink-0" />
              <span className="text-[var(--text-primary)]">
                {typedRole}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build real-world AI-powered web applications — from RAG chatbots to full-stack platforms.
            </motion.p>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col gap-1.5 px-5 py-3.5 rounded-2xl bg-purple-500/5 border border-[var(--border)] text-left max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-sm text-[var(--text-secondary)]">✦ Built real-world AI apps using Next.js &amp; FastAPI</p>
              <p className="text-sm text-[var(--text-secondary)]">✦ Specialized in RAG chatbots &amp; automation systems</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3.5 justify-center lg:justify-start mt-1"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowDown size={14} />
              </a>
              <a href="#contact" className="btn-ghost">
                Hire Me
              </a>
            </motion.div>

            {/* Social tiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex gap-2.5 justify-center lg:justify-start mt-2"
            >
              {[
                { href: "https://github.com/AnumAhte", icon: <GithubIcon size={20} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/anum-ahtesham-7308a42b6/", icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
                { href: "mailto:anumahtesham2026@gmail.com", icon: <Mail size={20} />, label: "Email" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-purple-500/50 transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-7xl xl:text-8xl font-extrabold shadow-[0_30px_80px_rgba(168,85,247,0.45)] float-animation">
              AA
              {/* pulse rings */}
              <span className="absolute -inset-5 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: "3s" }} />
              <span className="absolute -inset-10 rounded-full border border-purple-400/15" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll-down button */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full glass border border-[var(--border)] flex items-center justify-center text-[var(--accent)] hover:border-purple-500/60 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
