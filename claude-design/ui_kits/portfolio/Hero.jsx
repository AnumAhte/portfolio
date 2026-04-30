/* global React, Icon, Orb */
const { useEffect, useState } = React;

const ROLES = ["Frontend Developer", "Agentic AI Developer", "AI Chatbot Builder"];

function useTyping(phrases, typingSpeed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [c, setC] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = phrases[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, c + 1));
        if (c + 1 === cur.length) setTimeout(() => setDel(true), pause);
        else setC(c + 1);
      } else {
        setText(cur.slice(0, c - 1));
        if (c === 1) { setDel(false); setC(0); setI((i + 1) % phrases.length); }
        else setC(c - 1);
      }
    }, del ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(t);
  }, [c, del, i, phrases, typingSpeed, pause]);

  return text;
}

function Hero() {
  const role = useTyping(ROLES);

  return (
    <section id="hero" className="hero mesh-gradient">
      <Orb size={512} color="rgba(109,40,217,.7)" style={{ top: 0, left: -128 }} />
      <Orb size={384} color="rgba(124,58,237,.6)" style={{ top: "33%", right: 0 }} delay={2} />
      <Orb size={288} color="rgba(232,121,249,.5)" style={{ bottom: 64, left: "25%" }} delay={4} />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="status-pill">
            <span className="status-dot animated" />
            Available for opportunities
            <Icon name="sparkles" size={14} />
          </div>

          <h1 className="hero-name">
            <span className="gradient-text">Anum</span>
            <br />
            <span>Ahtesham</span>
          </h1>

          <div className="hero-role">
            <Icon name="zap" size={28} className="zap" />
            <span>{role}<span className="typing-cursor" /></span>
          </div>

          <p className="hero-tagline">
            I build real-world AI-powered web applications — from RAG chatbots to full-stack platforms.
          </p>

          <div className="hero-trust">
            <p>✦ Built real-world AI apps using Next.js &amp; FastAPI</p>
            <p>✦ Specialized in RAG chatbots &amp; automation systems</p>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects <Icon name="arrow-down" size={14} /></a>
            <a href="#contact"  className="btn-ghost">Hire Me</a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/AnumAhte" target="_blank" rel="noreferrer" className="social-btn"><Icon name="github" size={20} /></a>
            <a href="https://linkedin.com/in/anum-ahtesham-7308a42b6" target="_blank" rel="noreferrer" className="social-btn"><Icon name="linkedin" size={20} /></a>
            <a href="mailto:anumahtesham2026@gmail.com" className="social-btn"><Icon name="mail" size={20} /></a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar">
            <span>AA</span>
            <div className="avatar-pulse" />
          </div>
        </div>
      </div>

      <button
        className="scroll-down"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll"
      >
        <Icon name="arrow-down" size={20} />
      </button>
    </section>
  );
}

window.Hero = Hero;
