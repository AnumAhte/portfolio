/* global React, Icon, SectionLabel, GradientText, GlassCard, useInView */
const projects = [
  { id: 1, featured: true, emoji: "📘", icon: "book-open",
    title: "AI-Powered Book Platform with RAG Chatbot", tagline: "Talk to books. Get intelligent answers.",
    solves: "Eliminates hours of manual reading by letting users query any book topic through an intelligent AI chatbot",
    description: "An advanced AI application that allows users to interact with book content through a RAG-based intelligent chatbot. Ask any question and receive context-aware, accurate answers sourced directly from embedded book content.",
    highlights: ["RAG (Retrieval-Augmented Generation) based chatbot","Context-aware responses from embedded content","Real-time information retrieval from knowledge base","Interactive AI experience"],
    tech: ["Next.js","Tailwind CSS","AI APIs","RAG Architecture","TypeScript"],
    liveUrl: "https://physical-ai-book-one.vercel.app/", githubUrl: null,
    gradient: "linear-gradient(135deg,#9333ea,#7c3aed,#4f46e5)" },
  { id: 2, emoji: "🤖", icon: "check-square",
    title: "Smart Todo App with AI Chatbot", tagline: "Productivity meets intelligence.",
    solves: "Replaces scattered task tools and manual planning with an AI assistant that helps you prioritize and execute faster",
    description: "A full-featured productivity app combining task management with an intelligent chatbot assistant. Manage your tasks with CRUD operations while your AI assistant helps you prioritize, plan, and stay on track.",
    highlights: ["Complete Task CRUD with authentication","Built-in AI Chatbot assistant","Secure user authentication system","Deployed with Docker"],
    tech: ["Next.js","TypeScript","FastAPI","AI Chatbot","Docker","Authentication"],
    liveUrl: "https://todo-app-chatbot-alpha.vercel.app/login", githubUrl: null,
    gradient: "linear-gradient(135deg,#9333ea,#e879f9,#ec4899)" },
  { id: 3, emoji: "🧠", icon: "bot",
    title: "AI Employee (Digital FTE)", tagline: "Your 24/7 digital team member.",
    solves: "Automates repetitive business workflows using agentic AI — cutting manual effort and running around the clock without human input",
    description: "An AI-powered virtual employee designed to automate business tasks and operate around the clock without human intervention. Handles repetitive workflows, executes tasks, and acts as a fully autonomous digital team member.",
    highlights: ["Automates repetitive business workflows","Handles responses and task execution autonomously","Works continuously as a digital team member","Improves efficiency and reduces manual effort"],
    tech: ["Python","FastAPI","AI Logic","Automation","Agentic AI"],
    liveUrl: null, githubUrl: "https://github.com/AnumAhte/Ai_employee.git",
    gradient: "linear-gradient(135deg,#10b981,#14b8a6,#06b6d4)" },
];

function ProjectVisual({ p, fill = false }) {
  return (
    <div className={`project-visual ${fill ? "fill" : ""}`} style={{ background: p.gradient }}>
      <div className="pv-grid" />
      <div className="pv-blobs" />
      <div className="pv-inner">
        <div className="pv-icon"><Icon name={p.icon} size={28} style={{ color: "#fff" }} /></div>
        <span className="pv-emoji">{p.emoji}</span>
      </div>
    </div>
  );
}

function ProjectButtons({ p }) {
  return (
    <div className="project-buttons">
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noreferrer"
           className="btn-primary" style={{ flex: 1, background: p.gradient }}>
          <Icon name="external-link" size={14} /> Live Demo
        </a>
      )}
      {p.githubUrl && (
        <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ flex: 1 }}>
          <Icon name="github" size={14} /> View Code
        </a>
      )}
      {p.liveUrl && !p.githubUrl && (
        <a href="https://github.com/AnumAhte" target="_blank" rel="noreferrer" className="btn-ghost" style={{ width: 56 }}>
          <Icon name="github" size={14} />
        </a>
      )}
    </div>
  );
}

function Projects() {
  const [ref, inView] = useInView();
  const featured = projects[0];
  const rest     = projects.slice(1);

  return (
    <section id="projects" ref={ref} className={`section mesh-gradient ${inView ? "in" : ""}`}>
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      <div className="section-head">
        <SectionLabel>What I&apos;ve built</SectionLabel>
        <h2 className="section-title">Featured <GradientText underline>Projects</GradientText></h2>
        <p className="section-sub">Real projects that blend full stack engineering with AI capabilities — built to solve real problems.</p>
      </div>

      <article className="project-featured glass-card neon-border">
        <div className="featured-badge">
          <Icon name="star" size={10} /> Featured
        </div>
        <div className="featured-visual"><ProjectVisual p={featured} fill /></div>
        <div className="featured-body">
          <p className="project-num">Project 01</p>
          <h3>{featured.title}</h3>
          <p className="project-tagline">{featured.tagline}</p>
          <p className="project-desc">{featured.description}</p>
          <div className="solves-strip">
            <span>Solves:</span>
            <p>{featured.solves}</p>
          </div>
          <ul className="project-highlights two-col">
            {featured.highlights.map(h => (
              <li key={h}><Icon name="arrow-up-right" size={12} /> {h}</li>
            ))}
          </ul>
          <div className="project-tech">
            {featured.tech.map(t => <span key={t} className="pill pill-tech">{t}</span>)}
          </div>
          <ProjectButtons p={featured} />
        </div>
      </article>

      <div className="projects-grid">
        {rest.map((p, i) => (
          <article key={p.id} className="project-card glass-card">
            <div className="project-num-corner">0{i + 2}</div>
            <div className="project-visual-wrap"><ProjectVisual p={p} /></div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
              <div className="solves-strip">
                <span>Solves:</span>
                <p>{p.solves}</p>
              </div>
              <ul className="project-highlights">
                {p.highlights.map(h => (
                  <li key={h}><Icon name="arrow-up-right" size={12} /> {h}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="pill pill-tech">{t}</span>)}
              </div>
              <ProjectButtons p={p} />
            </div>
          </article>
        ))}
      </div>

      <div className="github-cta">
        <p>Curious about more work? Check out my full GitHub profile.</p>
        <a href="https://github.com/AnumAhte" target="_blank" rel="noreferrer" className="btn-ghost btn-large">
          <Icon name="github" size={20} /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

window.Projects = Projects;
