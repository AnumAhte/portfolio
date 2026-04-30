/* global React, Icon, SectionLabel, GradientText, GlassCard, useInView */
const skillCategories = [
  { label: "Frontend",       icon: "globe",     gradient: "linear-gradient(135deg,#a855f7,#8b5cf6)",
    skills: [["HTML5 & CSS3",92],["JavaScript (ES6+)",88],["TypeScript",82],["React.js",88],["Next.js (App Router)",85]] },
  { label: "Styling",        icon: "palette",   gradient: "linear-gradient(135deg,#e879f9,#ec4899)",
    skills: [["Tailwind CSS",90],["Framer Motion",78],["Responsive Design",92]] },
  { label: "Backend",        icon: "server",    gradient: "linear-gradient(135deg,#10b981,#14b8a6)",
    skills: [["Python",85],["FastAPI",80],["REST APIs",85]] },
  { label: "AI & Agentic",   icon: "brain",     gradient: "linear-gradient(135deg,#8b5cf6,#9333ea)",
    skills: [["AI Chatbot Development",82],["RAG Architecture",78],["Agentic AI Workflows",75],["LLM Integration",80]] },
  { label: "Architecture",   icon: "layers",    gradient: "linear-gradient(135deg,#f59e0b,#f97316)",
    skills: [["Full Stack Architecture",80],["API Design",82],["State Management",78]] },
  { label: "DevOps",         icon: "container", gradient: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
    skills: [["Docker",70],["Deployment (Vercel/Railway)",80],["Git & Version Control",85]] },
];

const techCloud = ["Next.js","React","TypeScript","Tailwind CSS","Python","FastAPI",
  "Framer Motion","Docker","REST API","RAG","LangChain","OpenAI API","Vercel","Git","HTML5","CSS3"];

function Skills() {
  const [ref, inView] = React.useState ? useInView() : [null,false];

  return (
    <section id="skills" ref={ref} className={`section mesh-gradient ${inView ? "in" : ""}`}>
      <div className="bg-blob blob-3" />
      <div className="bg-blob blob-4" />

      <div className="section-head">
        <SectionLabel>What I work with</SectionLabel>
        <h2 className="section-title">My <GradientText underline>Skills</GradientText></h2>
        <p className="section-sub">A curated toolkit I use to build intelligent, performant, and beautiful products.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map(cat => {
          const avg = Math.round(cat.skills.reduce((s, [, lvl]) => s + lvl, 0) / cat.skills.length);
          const lvl = avg >= 85 ? "Expert" : avg >= 78 ? "Advanced" : "Intermediate";
          const lvlClass = lvl === "Expert" ? "expert" : lvl === "Advanced" ? "advanced" : "intermediate";
          return (
            <GlassCard key={cat.label} className="skill-card">
              <div className="skill-strip" style={{ background: cat.gradient }} />
              <div className="skill-body">
                <div className="skill-head">
                  <div className="skill-icon" style={{ background: cat.gradient }}>
                    <Icon name={cat.icon} size={22} style={{ color: "#fff" }} />
                  </div>
                  <h3>{cat.label}</h3>
                  <span className={`pill pill-${lvlClass}`}>{lvl}</span>
                </div>
                <div className="bars">
                  {cat.skills.map(([name, level]) => (
                    <div className="bar-row" key={name}>
                      <div className="bar-meta"><span>{name}</span><span className="muted">{level}%</span></div>
                      <div className="bar-track">
                        <div className="bar-fill"
                          style={{ width: inView ? `${level}%` : 0, background: cat.gradient }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="tech-cloud-wrap">
        <p className="tech-cloud-eyebrow">Technologies at a glance</p>
        <div className="tech-cloud">
          {techCloud.map(t => <span key={t} className="pill">{t}</span>)}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
