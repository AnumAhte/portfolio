"use client";

/**
 * Skills Section
 * Width/centering handled by global container in page.tsx.
 */

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Globe, Layers, Server, Brain, Container, Palette } from "lucide-react";

const skillCategories = [
  {
    label: "Frontend",
    icon: <Globe size={22} />,
    color: "purple",
    gradient: "from-purple-500 to-violet-500",
    glow: "rgba(168,85,247,0.35)",
    skills: [
      { name: "HTML5 & CSS3",           level: 92 },
      { name: "JavaScript (ES6+)",      level: 88 },
      { name: "TypeScript",             level: 82 },
      { name: "React.js",               level: 88 },
      { name: "Next.js (App Router)",   level: 85 },
    ],
  },
  {
    label: "Styling",
    icon: <Palette size={22} />,
    color: "fuchsia",
    gradient: "from-fuchsia-500 to-pink-500",
    glow: "rgba(217,70,239,0.35)",
    skills: [
      { name: "Tailwind CSS",       level: 90 },
      { name: "Framer Motion",      level: 78 },
      { name: "Responsive Design",  level: 92 },
    ],
  },
  {
    label: "Backend",
    icon: <Server size={22} />,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.3)",
    skills: [
      { name: "Python",     level: 85 },
      { name: "FastAPI",    level: 80 },
      { name: "REST APIs",  level: 85 },
    ],
  },
  {
    label: "AI & Agentic",
    icon: <Brain size={22} />,
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.35)",
    skills: [
      { name: "AI Chatbot Development", level: 82 },
      { name: "RAG Architecture",       level: 78 },
      { name: "Agentic AI Workflows",   level: 75 },
      { name: "LLM Integration",        level: 80 },
    ],
  },
  {
    label: "Architecture",
    icon: <Layers size={22} />,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    skills: [
      { name: "Full Stack Architecture", level: 80 },
      { name: "API Design",              level: 82 },
      { name: "State Management",        level: 78 },
    ],
  },
  {
    label: "DevOps",
    icon: <Container size={22} />,
    color: "sky",
    gradient: "from-sky-500 to-cyan-500",
    glow: "rgba(14,165,233,0.3)",
    skills: [
      { name: "Docker (Containerization)",    level: 70 },
      { name: "Deployment (Vercel/Railway)", level: 80 },
      { name: "Git & Version Control",        level: 85 },
    ],
  },
];

// Must be explicit strings so Tailwind doesn't purge them
const colorMap: Record<string, string> = {
  purple:  "text-purple-400  bg-purple-500/10  border-purple-500/20",
  fuchsia: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  violet:  "text-violet-400  bg-violet-500/10  border-violet-500/20",
  amber:   "text-amber-400   bg-amber-500/10   border-amber-500/20",
  sky:     "text-sky-400     bg-sky-500/10     border-sky-500/20",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "tween" } },
};

function SkillBar({ name, level, gradient, delay }: {
  name: string; level: number; gradient: string; delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-[var(--text-secondary)]">{name}</span>
        <span className="text-[var(--text-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative overflow-hidden mesh-gradient" ref={ref}>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">
          What I work with
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] mb-5">
          My <span className="gradient-text section-title-line">Skills</span>
        </h2>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl leading-relaxed">
          A curated toolkit I use to build intelligent, performant, and beautiful products.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map(({ label, icon, color, gradient, glow, skills }, i) => {
          const avg = Math.round(skills.reduce((s, sk) => s + sk.level, 0) / skills.length);
          const levelLabel = avg >= 85 ? "Expert" : avg >= 78 ? "Advanced" : "Intermediate";
          const levelClass  = avg >= 85 ? "badge-expert" : avg >= 78 ? "badge-advanced" : "badge-intermediate";

          return (
            <motion.div
              key={label}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: `0 0 0 1px ${glow}, 0 24px 56px ${glow}` }}
              className={`relative glass border rounded-2xl overflow-hidden shine-effect transition-all duration-300 ${colorMap[color]}`}
            >
              {/* Coloured top accent strip */}
              <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

              <div className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                      {icon}
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] text-xl">{label}</h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${levelClass}`}>
                    {levelLabel}
                  </span>
                </div>

                <div className="space-y-3">
                  {skills.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={gradient}
                      delay={i * 0.1 + j * 0.08}
                    />
                  ))}
                </div>
              </div>

              {/* Faint background icon */}
              <div className="absolute -right-4 -bottom-4 opacity-5 text-current pointer-events-none" style={{ transform: "scale(5)", transformOrigin: "center" }}>
                {icon}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tech Badge Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-14 text-center"
      >
        <p className="text-base text-[var(--text-muted)] mb-6 font-medium uppercase tracking-widest">
          Technologies at a glance
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Next.js","React","TypeScript","Tailwind CSS","Python","FastAPI",
            "Framer Motion","Docker","REST API","RAG","LangChain","OpenAI API",
            "Vercel","Git","HTML5","CSS3"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 0 12px rgba(168,85,247,0.3)" }}
              className="px-4 py-2 glass border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
