/* global React, Icon */
const { useEffect, useState } = React;

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(entries => {
      const v = entries.filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (v) setActive(`#${v.target.id}`);
    }, { rootMargin: "-15% 0px -75% 0px", threshold: [0, 0.25, 0.5] });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const click = (href) => {
    setMenuOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className={`nav-pill ${scrolled ? "scrolled" : ""}`}>
            {scrolled && <div className="nav-glow-line" />}
            <a className="nav-brand" href="#hero" onClick={(e) => { e.preventDefault(); click("#hero"); }}>
              <div className="logo-mark">AA</div>
              <span className="logo-word"><span className="gradient-text">Anum</span><span className="dot">.</span></span>
            </a>

            <nav className="nav-links">
              {navLinks.map(l => (
                <button
                  key={l.label}
                  onClick={() => click(l.href)}
                  className={`nav-link ${active === l.href ? "active" : ""}`}
                >
                  {active === l.href && <span className="nav-pill-bg" />}
                  <span style={{ position: "relative" }}>{l.label}</span>
                </button>
              ))}
            </nav>

            <div className="nav-actions">
              <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
                <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
              </button>
              <button onClick={() => click("#contact")} className="hire-btn">
                <span className="status-dot" />
                Hire Me
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
                <Icon name={menuOpen ? "x" : "menu"} size={17} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-drawer">
          <div className="container">
            <div className="drawer-card">
              {navLinks.map(l => (
                <button key={l.label} onClick={() => click(l.href)} className="drawer-link">
                  {l.label}
                </button>
              ))}
              <button onClick={() => click("#contact")} className="btn-primary" style={{ width: "100%", marginTop: 4 }}>
                <span className="status-dot" /> Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

window.Navbar = Navbar;
