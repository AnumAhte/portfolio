"use client";

/**
 * Footer — full viewport width, has its own inner max-w-7xl container
 * aligned with the Navbar and global content container.
 */

import { motion } from "framer-motion";
import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const quickLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/AnumAhte",         icon: <GithubIcon size={18} />   },
  { label: "LinkedIn", href: "https://linkedin.com/in/anum-ahtesham-7308a42b6",                  icon: <LinkedinIcon size={18} /> },
  { label: "Email",    href: "mailto:anumahtesham2026@gmail.com",         icon: <Mail size={18} />         },
];

export default function Footer() {
  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden dot-pattern">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-extrabold text-lg gradient-text">Anum Ahtesham</span>
            </div>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Full Stack Developer & Agentic AI Developer. Building intelligent web experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scroll(href)}
                    className="text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  <span className="text-[var(--text-muted)]">{icon}</span>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Anum Ahtesham. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-purple-400 mx-1" fill="currentColor" />
            using Next.js, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
