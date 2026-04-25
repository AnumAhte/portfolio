"use client";

/**
 * Projects Section — THE most important section.
 * Width/centering handled by global container in page.tsx.
 *
 * Layout:
 *   [ Featured Project — full width, horizontal on desktop ]
 *   [ Project 2 (col 1) ]  [ Project 3 (col 2) ]
 */

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ExternalLink, Star, BookOpen, CheckSquare, Bot, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    id: 1,
    featured: true,
    emoji: "📘",
    icon: <BookOpen size={28} />,
    title: "AI-Powered Book Platform with RAG Chatbot",
    tagline: "Talk to books. Get intelligent answers.",
    description:
      "An advanced AI application that allows users to interact with book content through a RAG-based intelligent chatbot. Ask any question and receive context-aware, accurate answers sourced directly from embedded book content.",
    highlights: [
      "RAG (Retrieval-Augmented Generation) based chatbot",
      "Context-aware responses from embedded content",
      "Real-time information retrieval from knowledge base",
      "Interactive AI experience",
    ],
    tech: ["Next.js", "Tailwind CSS", "AI APIs", "RAG Architecture", "TypeScript"],
    liveUrl: "https://physical-ai-book-one.vercel.app/",
    githubUrl: null,
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    glow: "rgba(168,85,247,0.4)",
    cardBg: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/30",
  },
  {
    id: 2,
    featured: false,
    emoji: "🤖",
    icon: <CheckSquare size={28} />,
    title: "Smart Todo App with AI Chatbot",
    tagline: "Productivity meets intelligence.",
    description:
      "A full-featured productivity app combining task management with an intelligent chatbot assistant. Manage your tasks with CRUD operations while your AI assistant helps you prioritize, plan, and stay on track.",
    highlights: [
      "Complete Task CRUD with authentication",
      "Built-in AI Chatbot assistant",
      "Secure user authentication system",
      "Deployed with Docker on cloud infrastructure",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "AI Chatbot", "Docker", "Authentication"],
    liveUrl: "https://todo-app-chatbot-alpha.vercel.app/login",
    githubUrl: null,
    gradient: "from-violet-600 via-fuchsia-600 to-pink-500",
    glow: "rgba(139,92,246,0.4)",
    cardBg: "from-violet-500/10 to-fuchsia-500/5",
    border: "border-violet-500/25",
  },
  {
    id: 3,
    featured: false,
    emoji: "🧠",
    icon: <Bot size={28} />,
    title: "AI Employee (Digital FTE)",
    tagline: "Your 24/7 digital team member.",
    description:
      "An AI-powered virtual employee designed to automate business tasks and operate around the clock without human intervention. Handles repetitive workflows, executes tasks, and acts as a fully autonomous digital team member.",
    highlights: [
      "Automates repetitive business workflows",
      "Handles responses and task execution autonomously",
      "Works continuously as a digital team member",
      "Improves efficiency and reduces manual effort",
    ],
    tech: ["Python", "FastAPI", "AI Logic", "Automation", "Agentic AI"],
    liveUrl: null,
    githubUrl: "https://github.com/AnumAhte/Ai_employee.git",
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    glow: "rgba(16,185,129,0.35)",
    cardBg: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/25",
  },
];

/* ── Visual header inside every card ── */
function ProjectVisual({
  gradient,
  icon,
  emoji,
  fill = false,
}: {
  gradient: string;
  icon: React.ReactNode;
  emoji: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center ${
        fill ? "h-full min-h-[220px]" : "h-44 rounded-2xl"
      }`}
    >
      {/* Light blobs inside visual */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
        <span className="text-3xl drop-shadow-lg">{emoji}</span>
      </div>
    </div>
  );
}

/* ── Shared action buttons ── */
function ProjectButtons({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <div className="flex gap-3 mt-auto pt-2">
      {project.liveUrl && (
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${project.glow}` }}
          whileTap={{ scale: 0.96 }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-md transition-all duration-200`}
        >
          <ExternalLink size={14} />
          Live Demo
        </motion.a>
      )}
      {project.githubUrl && (
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold glass border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
        >
          <GithubIcon size={14} />
          View Code
        </motion.a>
      )}
      {project.liveUrl && !project.githubUrl && (
        <motion.a
          href="https://github.com/AnumAhte"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base glass border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
        >
          <GithubIcon size={14} />
        </motion.a>
      )}
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, type: "tween" } },
};

export default function Projects() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects[0];
  const rest     = projects.slice(1);

  return (
    <section id="projects" className="py-24 relative overflow-hidden mesh-gradient" ref={ref}>
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">
          What I&apos;ve built
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] mb-5">
          Featured <span className="gradient-text section-title-line">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl leading-relaxed">
          Real projects that blend full stack engineering with AI capabilities — built to solve real problems.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-7"
      >
        {/* ── Featured card — full-width horizontal layout ── */}
        <motion.article
          variants={cardVariants}
          whileHover={{ y: -6, boxShadow: `0 30px 60px ${featured.glow}` }}
          className={`relative glass border ${featured.border} rounded-3xl overflow-hidden shine-effect bg-gradient-to-br ${featured.cardBg} flex flex-col lg:flex-row transition-all duration-300 neon-border`}
        >
          {/* Featured badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
            <Star size={10} fill="white" />
            Featured
          </div>

          {/* Left: gradient visual */}
          <div className="lg:w-[38%] flex-shrink-0">
            <ProjectVisual
              gradient={featured.gradient}
              icon={featured.icon}
              emoji={featured.emoji}
              fill
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col flex-1 p-8 gap-5">
            {/* Project number */}
            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">
              Project 01
            </p>

            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text-primary)] leading-tight mb-1">
                {featured.title}
              </h3>
              <p className="text-sm font-semibold text-[var(--accent)]">{featured.tagline}</p>
            </div>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {featured.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-1.5">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <ArrowUpRight size={12} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-sm font-semibold glass border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>

            <ProjectButtons project={featured} />
          </div>
        </motion.article>

        {/* ── Regular cards — 2-column grid ── */}
        <div className="grid sm:grid-cols-2 gap-7">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: `0 25px 50px ${project.glow}` }}
              className={`relative glass border ${project.border} rounded-3xl overflow-hidden shine-effect bg-gradient-to-br ${project.cardBg} flex flex-col transition-all duration-300`}
            >
              {/* Project number */}
              <div className="absolute top-4 left-4 z-10 text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">
                0{i + 2}
              </div>

              <div className="p-5 pb-0">
                <ProjectVisual
                  gradient={project.gradient}
                  icon={project.icon}
                  emoji={project.emoji}
                />
              </div>

              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent)]">{project.tagline}</p>
                </div>

                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <ArrowUpRight size={12} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-sm font-semibold glass border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ProjectButtons project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-14"
      >
        <p className="text-[var(--text-secondary)] mb-5 text-base">
          Curious about more work? Check out my full GitHub profile.
        </p>
        <motion.a
          href="https://github.com/AnumAhte"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.35)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 glass border border-[var(--border)] rounded-2xl text-[var(--text-primary)] font-semibold hover:border-purple-500/50 transition-all duration-200"
        >
          <GithubIcon size={20} />
          View All Projects on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}
