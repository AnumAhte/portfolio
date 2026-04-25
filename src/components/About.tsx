"use client";

/**
 * About Section
 * Width/centering is handled by the global container in page.tsx.
 * This component only manages its own vertical spacing and content.
 */

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Brain, Rocket, Code2, Lightbulb, Star, Coffee } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+", icon: <Rocket size={18} /> },
  { label: "Tech Stack",     value: "8+",  icon: <Code2  size={18} /> },
  { label: "AI Models Used", value: "5+",  icon: <Brain  size={18} /> },
  { label: "Cups of Coffee", value: "∞",   icon: <Coffee size={18} /> },
];

const highlights = [
  {
    icon:   <Code2     size={22} className="text-purple-400" />,
    title:  "Full Stack Development",
    desc:   "Crafting end-to-end web applications using React, Next.js, TypeScript, and FastAPI — from pixel-perfect UIs to robust backend APIs.",
    color:  "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
  },
  {
    icon:   <Brain     size={22} className="text-violet-400" />,
    title:  "Agentic AI Systems",
    desc:   "Building intelligent agents and RAG-based chatbots that retrieve, reason, and respond — turning raw AI capabilities into real-world tools.",
    color:  "from-violet-500/10 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    icon:   <Lightbulb size={22} className="text-fuchsia-400" />,
    title:  "Fast Learner & Innovator",
    desc:   "I thrive in new tech environments. Whether it's a new framework, AI model, or deployment tool — I pick it up fast and ship it faster.",
    color:  "from-fuchsia-500/10 to-fuchsia-500/5",
    border: "border-fuchsia-500/20",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, type: "tween" } },
};

export default function About() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    /* py-20 = consistent section spacing; relative for the background blobs */
    <section id="about" className="py-24 relative overflow-hidden mesh-gradient" ref={ref}>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Section Header ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.p variants={itemVariants} className="section-label mb-3">
          Get to know me
        </motion.p>
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-5">
          About <span className="gradient-text section-title-line">Me</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed">
          A developer who sits at the crossroads of modern web engineering and artificial intelligence.
        </motion.p>
      </motion.div>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left: Bio + traits + stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-5">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I&apos;m <strong className="text-[var(--text-primary)] font-semibold">Anum Ahtesham</strong>, a passionate full stack developer and agentic AI developer who loves turning complex problems into elegant, intuitive solutions.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              My journey in tech is driven by an obsession with building things that{" "}
              <em className="text-purple-400 not-italic font-medium">actually work in the real world</em>. I specialize in React/Next.js frontends, Python/FastAPI backends, and AI-powered features — including RAG chatbots, agentic workflows, and intelligent automation.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I believe great software is 20% code and 80% thinking clearly about the problem. Whether I&apos;m shipping a production app or training an AI agent, I bring the same energy:{" "}
              <strong className="text-[var(--text-primary)] font-semibold">ship fast, iterate intelligently.</strong>
            </p>
          </motion.div>

          {/* Trait pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8">
            {["🎯 Goal-Oriented", "⚡ Fast Learner", "🤝 Team Player", "🧠 AI Enthusiast", "🔄 Iterative Thinker", "🚀 Shipping Mindset"].map((trait) => (
              <motion.span
                key={trait}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text-secondary)] hover:border-purple-500/40 hover:text-[var(--text-primary)] transition-all duration-200 cursor-default"
              >
                {trait}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {stats.map(({ label, value, icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -5, scale: 1.03, boxShadow: "0 0 30px rgba(168,85,247,0.3)" }}
                className="glass border border-[var(--border)] rounded-2xl p-4 text-center shine-effect hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-2 text-[var(--accent)] group-hover:scale-110 transition-transform duration-200">{icon}</div>
                <div className="text-3xl sm:text-4xl font-extrabold animated-gradient-text tabular-nums">{value}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-5"
        >
          {highlights.map(({ icon, title, desc, color, border }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.01, boxShadow: "0 0 30px rgba(168,85,247,0.22)" }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} border ${border} glass shine-effect group transition-all duration-300 overflow-hidden`}
            >
              {/* Animated left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-fuchsia-500 rounded-l-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4 pl-2">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-[var(--border)] group-hover:border-purple-500/40 transition-all duration-200">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1 text-xl">{title}</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">{desc}</p>
                </div>
              </div>
              <Star size={80} className="absolute -right-4 -bottom-4 text-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
