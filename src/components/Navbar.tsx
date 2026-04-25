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
          scrolled
            ? "py-2"
            : "py-3"
        }`}
      >
        {/* Pill-shaped floating bar */}
        <div className="global-container">
          <div
            className={`relative flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-[rgba(3,3,10,0.92)] backdrop-blur-2xl border border-[rgba(139,92,246,0.28)] shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(168,85,247,0.10)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Subtle top glow line when scrolled */}
            {scrolled && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            )}

            {/* Brand */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-2.5 select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Animated logo mark */}
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-[0_0_16px_rgba(168,85,247,0.5)]" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center text-white font-black text-sm tracking-tighter">
                  AA
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight" style={{ fontFamily: "var(--font-poppins, 'Poppins'), sans-serif" }}>
                <span className="gradient-text">Anum</span>
                <span className="text-[var(--text-muted)]">.</span>
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
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-white/5 border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl border border-[var(--border)] bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-purple-500/40 transition-all duration-200"
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(168,85,247,0.55)" }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Hire Me
              </motion.a>

              {/* Mobile toggle */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden w-9 h-9 rounded-xl border border-[var(--border)] bg-white/5 flex items-center justify-center text-[var(--text-secondary)]"
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
              <div className="bg-[rgba(3,3,10,0.97)] backdrop-blur-2xl border border-[rgba(139,92,246,0.28)] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.75)] overflow-hidden p-3">
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
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all duration-200"
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
