/**
 * Root Page
 *
 * Layout architecture:
 * ┌─ Navbar (fixed, full viewport width) ────────────────────────┐
 * │                                                               │
 * │  Hero  (full viewport width — has its own internal container) │
 * │                                                               │
 * │  ┌── Global container: max-w-7xl mx-auto px-6 ─────────────┐ │
 * │  │  About   (py-20)                                         │ │
 * │  │  Skills  (py-20)                                         │ │
 * │  │  Projects(py-20)                                         │ │
 * │  │  Journey (py-20)                                         │ │
 * │  │  Contact (py-20)                                         │ │
 * │  └──────────────────────────────────────────────────────────┘ │
 * │                                                               │
 * └─ Footer (full width, has its own internal container) ─────────┘
 *
 * Hero is kept outside the global container so its full-viewport
 * background gradients and orbs can span the entire screen width.
 * All other sections share ONE container for pixel-perfect alignment.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen mesh-gradient">
      {/* Fixed navigation — always full viewport width */}
      <Navbar />

      <main className="w-full">
        {/* Hero: full viewport width, manages its own inner container */}
        <Hero />

        {/* ── ONE global centered container for every other section ── */}
        <div className="global-container">
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Journey />
          <div className="section-divider" />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
