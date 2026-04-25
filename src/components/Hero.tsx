"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

/* 🔥 Reduced + focused roles */
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
      className={`absolute rounded-full blur-3xl opacity-25 pointer-events-none ${className}`}
      animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
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
      <Orb className="w-[32rem] h-[32rem] bg-violet-700 top-0 -left-32" />
      <Orb className="w-96 h-96 bg-purple-700 top-1/3 right-0" delay={2} />
      <Orb className="w-72 h-72 bg-fuchsia-600 bottom-16 left-1/4" delay={4} />

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
              <Sparkles size={14} />
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                Anum
              </span>
              <br />
              Ahtesham
            </h1>

            {/* Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Zap className="text-purple-400" />
              <span className="text-2xl sm:text-3xl font-semibold text-purple-400">
                {typedRole} |
              </span>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I build real-world AI-powered web applications — from RAG chatbots to full-stack platforms.
            </p>

            {/* Trust */}
            <div className="mb-8 space-y-1 text-sm text-gray-400">
              <p>✦ Built real-world AI apps using Next.js & FastAPI</p>
              <p>✦ Specialized in RAG chatbots & automation systems</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500/10 transition"
              >
                Hire Me
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <a href="https://github.com/AnumAhte"><GithubIcon /></a>
              <a href="#"><LinkedinIcon /></a>
            </div>
          </div>

          {/* RIGHT Avatar */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-4xl font-bold">
            AA
          </div>

        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ArrowDown />
      </button>
    </section>
  );
}