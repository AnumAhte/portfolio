/* global React */
const { useEffect, useRef, useState } = React;

// ─── Lucide icon wrapper ────────────────────────────────────────────
function toPascal(name) {
  return name.split("-").map(s => s[0].toUpperCase() + s.slice(1)).join("");
}

// Brand glyphs not in lucide vanilla — match the original Icons.tsx in the repo
const BRAND_SVGS = {
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
};

function Icon({ name, size = 20, className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    // Brand glyphs first (not in lucide vanilla)
    if (BRAND_SVGS[name]) {
      ref.current.innerHTML = BRAND_SVGS[name];
      const svg = ref.current.querySelector("svg");
      if (svg) { svg.setAttribute("width", size); svg.setAttribute("height", size); }
      return;
    }
    if (!window.lucide) return;
    const key = toPascal(name);
    const iconNode = window.lucide[key] || window.lucide.icons?.[key];
    if (!iconNode) return;
    // iconNode shape varies. It can be:
    //   [tag, attrs, children]  -- a single SVG node, OR
    //   [ [childTag, childAttrs], ... ]  -- a list of child nodes (no outer svg)
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("xmlns", ns);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const renderChild = (node) => {
      if (!Array.isArray(node)) return;
      const [tag, attrs] = node;
      if (typeof tag !== "string" || !attrs) return;
      const c = document.createElementNS(ns, tag);
      Object.entries(attrs).forEach(([k, v]) => c.setAttribute(k, v));
      svg.appendChild(c);
    };
    // Decide which shape we have
    if (typeof iconNode[0] === "string") {
      // [tag, attrs, children]
      const children = iconNode[2] || [];
      children.forEach(renderChild);
    } else {
      iconNode.forEach(renderChild);
    }
    ref.current.innerHTML = "";
    ref.current.appendChild(svg);
  }, [name, size]);
  return <span ref={ref} className={className} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
}

// ─── Section eyebrow ────────────────────────────────────────────────
function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

// ─── Gradient-clipped text ─────────────────────────────────────────
function GradientText({ children, underline = false, className = "" }) {
  return (
    <span className={`gradient-text ${underline ? "section-title-line" : ""} ${className}`}>
      {children}
    </span>
  );
}

// ─── Glass card wrapper ─────────────────────────────────────────────
function GlassCard({ children, className = "", style = {}, hoverable = true }) {
  return (
    <div
      className={`glass-card ${hoverable ? "hoverable" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

// ─── Pill / chip ────────────────────────────────────────────────────
function Pill({ children, variant = "default", className = "" }) {
  return <span className={`pill pill-${variant} ${className}`}>{children}</span>;
}

// ─── Gradient orb (animated) ────────────────────────────────────────
function Orb({ size = 320, color = "#7c3aed", style = {}, delay = 0 }) {
  return (
    <div
      className="orb"
      style={{
        width: size, height: size, background: color,
        animationDelay: `${delay}s`, ...style,
      }}
    />
  );
}

// ─── In-view hook ───────────────────────────────────────────────────
function useInView(opts = { threshold: 0.1, once: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        if (opts.once) obs.disconnect();
      } else if (!opts.once) {
        setInView(false);
      }
    }, { threshold: opts.threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

Object.assign(window, { Icon, SectionLabel, GradientText, GlassCard, Pill, Orb, useInView });
