/* global React, Icon */
const quickLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];
const socials = [
  { label: "GitHub",   href: "https://github.com/AnumAhte",                       icon: "github"   },
  { label: "LinkedIn", href: "https://linkedin.com/in/anum-ahtesham-7308a42b6",   icon: "linkedin" },
  { label: "Email",    href: "mailto:anumahtesham2026@gmail.com",                 icon: "mail"     },
];

function Footer() {
  const click = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer dot-pattern">
      <div className="footer-line" />
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="footer-logo"><Icon name="code-2" size={16} style={{ color: "#fff" }} /></div>
              <span className="footer-name gradient-text">Anum Ahtesham</span>
            </div>
            <p>Full Stack Developer &amp; Agentic AI Developer. Building intelligent web experiences that matter.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.label}><button onClick={() => click(l.href)}>{l.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
                  <Icon name={s.icon} size={18} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Anum Ahtesham. All rights reserved.</p>
          <p>Built with <Icon name="heart" size={12} style={{ color: "#c084fc", verticalAlign: "middle" }} /> using Next.js, TypeScript &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
