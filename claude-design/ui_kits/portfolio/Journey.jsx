/* global React, Icon, SectionLabel, GradientText, useInView */
const timeline = [
  { period: "The Beginning",   date: "2022",         icon: "book-open", title: "Started My Developer Journey",
    description: "Began with the fundamentals — HTML, CSS, and JavaScript. Built static websites and got comfortable thinking like a developer.",
    tags: ["HTML","CSS","JavaScript","Fundamentals"], gradient: "linear-gradient(135deg,#71717a,#52525b)", side: "left" },
  { period: "Going React",     date: "2022–2023",    icon: "code-2",    title: "Mastered React & Modern Frontend",
    description: "Dove deep into React, component architecture, hooks, state management, and the modern JS ecosystem.",
    tags: ["React.js","TypeScript","Next.js","Tailwind"], gradient: "linear-gradient(135deg,#a855f7,#8b5cf6)", side: "right" },
  { period: "Full Stack Leap", date: "2023",         icon: "rocket",    title: "Became a Full Stack Developer",
    description: "Added Python and FastAPI to my arsenal. Built complete applications with auth, REST APIs, and databases.",
    tags: ["Python","FastAPI","Docker","REST APIs"], gradient: "linear-gradient(135deg,#8b5cf6,#9333ea)", side: "left" },
  { period: "AI Awakening",    date: "2023–2024",    icon: "brain",     title: "Entered the World of AI Development",
    description: "Started integrating LLMs and AI APIs into real applications. Built chatbots and discovered the power of RAG.",
    tags: ["LLM","AI APIs","Embeddings","RAG"], gradient: "linear-gradient(135deg,#e879f9,#ec4899)", side: "right" },
  { period: "Agentic AI Era",  date: "2024–Present", icon: "zap",       title: "Building Agentic AI Systems",
    description: "Now building autonomous AI agents — systems that plan, act, and deliver results without human intervention.",
    tags: ["Agentic AI","Automation","Digital FTE","LangChain"], gradient: "linear-gradient(135deg,#f59e0b,#f97316)", side: "left" },
  { period: "Now",             date: "2025+",        icon: "star",      title: "Shipping AI-Powered Products",
    description: "Combining everything: modern web dev, AI integration, and agentic systems. Open to roles where I can push the boundaries.",
    tags: ["Production AI","Full Stack","Open to Work"], gradient: "linear-gradient(135deg,#10b981,#14b8a6)", side: "right" },
];

function Journey() {
  const [ref, inView] = useInView();

  return (
    <section id="journey" ref={ref} className={`section mesh-gradient ${inView ? "in" : ""}`}>
      <div className="bg-blob blob-3" />
      <div className="bg-blob blob-4" />

      <div className="section-head">
        <SectionLabel>How I got here</SectionLabel>
        <h2 className="section-title">My <GradientText underline>Journey</GradientText></h2>
        <p className="section-sub">From writing my first HTML tag to building autonomous AI agents — here&apos;s the story so far.</p>
      </div>

      <div className="timeline">
        <div className="timeline-line" />
        {timeline.map((it, i) => (
          <div key={it.title} className={`timeline-item ${it.side}`}>
            <div className="timeline-dot" style={{ background: it.gradient }} />
            <div className="timeline-card glass-card">
              <div className="timeline-head">
                <div className="timeline-icon" style={{ background: it.gradient }}>
                  <Icon name={it.icon} size={20} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="timeline-period">{it.period} · {it.date}</p>
                  <h3>{it.title}</h3>
                </div>
              </div>
              <p>{it.description}</p>
              <div className="timeline-tags">
                {it.tags.map(t => <span key={t} className="pill pill-tech">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Journey = Journey;
