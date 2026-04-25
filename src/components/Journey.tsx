"use client";

/**
 * Journey Section — alternating timeline.
 * Width/centering handled by global container in page.tsx.
 */

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { BookOpen, Code2, Brain, Rocket, Zap, Star } from "lucide-react";

const timeline = [
  {
    period: "The Beginning",
    date: "2022",
    icon: <BookOpen size={20} />,
    title: "Started My Developer Journey",
    description: "Began with the fundamentals — HTML, CSS, and JavaScript. Built static websites and got comfortable thinking like a developer. Every great journey starts with a single line of code.",
    tags: ["HTML", "CSS", "JavaScript", "Fundamentals"],
    gradient: "from-zinc-500 to-zinc-600",
    side: "left",
  },
  {
    period: "Going React",
    date: "2022–2023",
    icon: <Code2 size={20} />,
    title: "Mastered React & Modern Frontend",
    description: "Dove deep into React, component architecture, hooks, state management, and the modern JS ecosystem. Built my first full interactive apps and learned what it means to engineer a UI, not just style it.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    gradient: "from-purple-500 to-violet-600",
    side: "right",
  },
  {
    period: "Full Stack Leap",
    date: "2023",
    icon: <Rocket size={20} />,
    title: "Became a Full Stack Developer",
    description: "Added Python and FastAPI to my arsenal. Built complete applications with authentication, REST APIs, and database integrations. Deployed with Docker and Vercel. Projects went from 'frontend only' to 'full product'.",
    tags: ["Python", "FastAPI", "Docker", "REST APIs", "Full Stack"],
    gradient: "from-violet-500 to-purple-600",
    side: "left",
  },
  {
    period: "AI Awakening",
    date: "2023–2024",
    icon: <Brain size={20} />,
    title: "Entered the World of AI Development",
    description: "Started integrating LLMs and AI APIs into real applications. Built chatbots, worked with embeddings, and discovered the power of RAG (Retrieval-Augmented Generation) for intelligent document querying.",
    tags: ["LLM Integration", "AI APIs", "Embeddings", "RAG", "Chatbots"],
    gradient: "from-fuchsia-500 to-pink-600",
    side: "right",
  },
  {
    period: "Agentic AI Era",
    date: "2024–Present",
    icon: <Zap size={20} />,
    title: "Building Agentic AI Systems",
    description: "Now building autonomous AI agents — systems that plan, act, and deliver results without human intervention. Working on Digital FTE concepts, agentic workflows, and AI-powered business automation that runs 24/7.",
    tags: ["Agentic AI", "Automation", "Digital FTE", "AI Workflows", "LangChain"],
    gradient: "from-amber-500 to-orange-600",
    side: "left",
  },
  {
    period: "Now",
    date: "2025+",
    icon: <Star size={20} />,
    title: "Shipping AI-Powered Products",
    description: "Combining everything: modern web development, AI integration, and agentic systems to build products that genuinely help people. Open to exciting roles where I can push the boundaries of what's possible with AI.",
    tags: ["Production AI", "Full Stack", "Open to Work", "Impact-Driven"],
    gradient: "from-emerald-500 to-teal-600",
    side: "right",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, type: "tween" } },
};

function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = item.side === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
      className={`relative flex items-start gap-4 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-row`}
    >
      {/* Desktop center dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg ring-4 ring-[var(--bg-primary)] shadow-purple-500/30`} />
      </div>

      {/* Mobile icon */}
      <div className="flex-shrink-0 lg:hidden">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md`}>
          {item.icon}
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4, boxShadow: "0 0 0 1px rgba(168,85,247,0.4), 0 20px 48px rgba(168,85,247,0.25)" }}
        className="w-full lg:w-[calc(50%-3rem)] glass border border-[var(--border)] rounded-2xl p-7 shine-effect hover:border-[var(--accent)] transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={`hidden lg:flex w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} items-center justify-center text-white shadow-md`}>
            {item.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest">
              {item.period} · {item.date}
            </p>
            <h3 className="font-bold text-[var(--text-primary)] text-lg leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-sm font-medium glass border border-[var(--border)] text-[var(--text-secondary)]">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="hidden lg:block w-[calc(50%-3rem)]" />
    </motion.div>
  );
}

export default function Journey() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-28 relative overflow-hidden mesh-gradient" ref={ref}>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[36rem] h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">
          How I got here
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] mb-5">
          My <span className="gradient-text section-title-line">Journey</span>
        </h2>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl leading-relaxed">
          From writing my first HTML tag to building autonomous AI agents — here&apos;s the story so far.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical centre line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
