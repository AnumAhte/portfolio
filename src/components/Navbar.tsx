"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Auto-highlight active section as user scrolls
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Pill-shaped floating bar */}
        <div className="global-container">
          <div
            className={`group/nav relative flex items-center justify-between h-14 px-4 rounded-full transition-all duration-500 backdrop-blur-2xl ${
              scrolled
                ? "bg-[rgba(3,3,10,0.85)] border border-[rgba(168,85,247,0.30)] shadow-[0_10px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(168,85,247,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]"
                : "bg-[rgba(10,8,22,0.55)] border border-[rgba(139,92,246,0.18)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            }`}
          >
            {/* Animated gradient sheen along the top edge */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent rounded-full" />
            {/* Soft bottom shadow line */}
            <div className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />

            {/* Brand */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-2.5 select-none pl-1"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Animated logo mark */}
              <div className="relative w-9 h-9 group/logo">
                {/* Outer glow ring on hover */}
                <span className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-violet-600 opacity-0 group-hover/logo:opacity-60 blur-md transition-opacity duration-300" />
                {/* Animated gradient bg */}
                <span className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,#7c3aed,#a855f7,#e879f9,#a855f7,#7c3aed)] bg-[length:200%_200%] animate-[gradient-x_5s_ease_infinite] shadow-[0_8px_24px_rgba(168,85,247,0.45)]" />
                {/* Top highlight */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/25 to-transparent opacity-60" />
                {/* Letters */}
                <span className="absolute inset-0 rounded-xl flex items-center justify-center text-white font-black text-sm tracking-tighter">
                  AA
                </span>
              </div>
              <span className="font-extrabold text-base tracking-tight" style={{ fontFamily: "var(--font-poppins, 'Poppins'), sans-serif" }}>
                <span className="animated-gradient-text">Anum</span>
                <span className="text-[var(--accent)]">.</span>
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-violet-500/20 to-fuchsia-500/25 border border-purple-400/40 shadow-[0_4px_16px_rgba(168,85,247,0.30),inset_0_1px_0_rgba(255,255,255,0.08)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {/* Hover underline accent */}
                    {!isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 pr-1">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full border border-[var(--border)] bg-[rgba(168,85,247,0.06)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-purple-500/50 hover:bg-[rgba(168,85,247,0.12)] transition-colors duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                    exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Hire Me CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex relative items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group/hire"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#7c3aed,#a855f7,#e879f9,#a855f7,#7c3aed)] bg-[length:300%_100%] animate-[gradient-x_4s_linear_infinite]" />
                {/* Hover glow */}
                <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.55)] opacity-0 group-hover/hire:opacity-100 transition-opacity duration-300" />
                {/* Top sheen */}
                <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full" />
                <span className="relative flex items-center gap-1.5">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  </span>
                  Hire Me
                </span>
              </motion.a>

              {/* Mobile toggle */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden w-9 h-9 rounded-full border border-[var(--border)] bg-[rgba(168,85,247,0.06)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-purple-500/50 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={menuOpen ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {menuOpen ? <X size={17} /> : <Menu size={17} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,   scale: 1     }}
            exit={{    opacity: 0, y: -12, scale: 0.97  }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[4.5rem] left-0 right-0 z-40 px-4 md:hidden"
          >
            <div className="global-container px-0">
              <div className="relative bg-[rgba(3,3,10,0.95)] backdrop-blur-2xl border border-[rgba(168,85,247,0.30)] rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.75),0_0_0_1px_rgba(168,85,247,0.10)] overflow-hidden p-3">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-purple-500/10 transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-1"
                  >
                    <button
                      onClick={() => handleNavClick("#contact")}
                      className="w-full btn-primary rounded-xl py-3 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Hire Me
                    </button>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
