/* global React, Icon, SectionLabel, GradientText, GlassCard, Pill, useInView */
function About() {
  const [ref, inView] = useInView();
  const stats = [
    { label: "Projects Built", value: "10+", icon: "rocket" },
    { label: "Tech Stack",     value: "8+",  icon: "code-2" },
    { label: "AI Models Used", value: "5+",  icon: "brain"  },
    { label: "Cups of Coffee", value: "∞",   icon: "coffee" },
  ];
  const highlights = [
    { icon: "code-2",   color: "#c084fc", title: "Full Stack Development",
      desc: "Crafting end-to-end web applications using React, Next.js, TypeScript, and FastAPI — from pixel-perfect UIs to robust backend APIs." },
    { icon: "brain",    color: "#a78bfa", title: "Agentic AI Systems",
      desc: "Building intelligent agents and RAG-based chatbots that retrieve, reason, and respond — turning raw AI capabilities into real-world tools." },
    { icon: "lightbulb",color: "#e879f9", title: "Fast Learner & Innovator",
      desc: "I thrive in new tech environments. Whether it's a new framework, AI model, or deployment tool — I pick it up fast and ship it faster." },
  ];

  return (
    <section id="about" ref={ref} className={`section mesh-gradient ${inView ? "in" : ""}`}>
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      <div className="section-head">
        <SectionLabel>Get to know me</SectionLabel>
        <h2 className="section-title">About <GradientText underline>Me</GradientText></h2>
        <p className="section-sub">A developer who sits at the crossroads of modern web engineering and artificial intelligence.</p>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p>I&apos;m <strong>Anum Ahtesham</strong>, a passionate full stack developer and agentic AI developer who loves turning complex problems into elegant, intuitive solutions.</p>
          <p>My journey in tech is driven by an obsession with building things that <em className="purple-em">actually work in the real world</em>. I specialize in React/Next.js frontends, Python/FastAPI backends, and AI-powered features — including RAG chatbots, agentic workflows, and intelligent automation.</p>
          <p>I believe great software is 20% code and 80% thinking clearly about the problem. <strong>Ship fast, iterate intelligently.</strong></p>

          <div className="trait-row">
            {["🎯 Goal-Oriented","⚡ Fast Learner","🤝 Team Player","🧠 AI Enthusiast","🔄 Iterative Thinker","🚀 Shipping Mindset"].map(t => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="stats">
            {stats.map(s => (
              <GlassCard key={s.label} className="stat">
                <div className="stat-icon"><Icon name={s.icon} size={18} /></div>
                <div className="stat-num animated-gradient-text tabular-nums">{s.value}</div>
                <div className="stat-lab">{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="about-right">
          {highlights.map(h => (
            <GlassCard key={h.title} className="highlight">
              <div className="highlight-accent" />
              <div className="highlight-icon"><Icon name={h.icon} size={22} style={{ color: h.color }} /></div>
              <div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

window.About = About;
