"use client";

/**
 * Contact Section
 * Width/centering handled by global container in page.tsx.
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Send, CheckCircle, MapPin, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting]   = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-xl glass border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base bg-transparent outline-none transition-all duration-200 ${
      focusedField === field
        ? "border-purple-500/70 shadow-[0_0_0_3px_rgba(168,85,247,0.15)]"
        : "border-[var(--border)] hover:border-zinc-600"
    }`;

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "tween" } },
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden mesh-gradient" ref={ref}>
      <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">
          Let&apos;s build something great
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] mb-5">
          Get in <span className="gradient-text section-title-line">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl leading-relaxed">
          Whether it&apos;s a job opportunity, collaboration, or just a hello — I&apos;d love to hear from you.
        </p>
      </motion.div>

      {/* Two-column: info + form */}
      <div className="grid lg:grid-cols-5 gap-10 items-start">

        {/* Left: Info + Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-2 space-y-6"
        >
          {[
            { icon: <Mail        size={20} className="text-purple-400"  />, label: "Email",    value: "anumahtesham2026@gmail.com", href: "mailto:ahumahtesham@gmail.com" },
            { icon: <MapPin      size={20} className="text-violet-400"  />, label: "Location", value: "Pakistan 🇵🇰",            href: null },
            { icon: <MessageSquare size={20} className="text-fuchsia-400"/>, label: "Status",  value: "Open to opportunities",  href: null, badge: true },
          ].map(({ icon, label, value, href, badge }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ x: 4, boxShadow: "0 0 0 1px rgba(168,85,247,0.35), 0 16px 40px rgba(168,85,247,0.22)" }}
              className="glass border border-[var(--border)] rounded-2xl p-6 flex items-center gap-4 hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl glass border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-wide mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    {badge && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />}
                    {value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Social buttons */}
          <motion.div variants={itemVariants} className="pt-2">
            <p className="text-sm text-[var(--text-muted)] font-medium mb-4">Find me online:</p>
            <div className="flex gap-3">
              {[
                { href: "https://github.com/AnumAhte", icon: <GithubIcon size={22} />, label: "GitHub",   gradient: "from-zinc-700 to-zinc-900" },
                { href: "https://linkedin.com/in/anum-ahtesham-7308a42b6",         icon: <LinkedinIcon size={22} />, label: "LinkedIn", gradient: "from-blue-600 to-blue-700" },
              ].map(({ href, icon, label, gradient }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${gradient} text-white text-sm font-semibold shadow-md transition-all duration-200`}
                >
                  {icon}
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-3"
        >
          <motion.div
            variants={itemVariants}
            className="glass border border-[var(--border)] rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="relative space-y-5"
                >
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                    Send me a message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Your Name</label>
                      <input type="text"  name="name"  value={form.name}  onChange={handleChange} onFocus={() => setFocusedField("name")}  onBlur={() => setFocusedField(null)} placeholder="Anum Ahtesham"  required className={inputClasses("name")} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} placeholder="you@example.com" required className={inputClasses("email")} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} placeholder="Job Opportunity / Collaboration / Hello" className={inputClasses("subject")} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} placeholder="Tell me about your project or opportunity..." required rows={5} className={`${inputClasses("message")} resize-none`} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={!submitting ? { scale: 1.02 } : {}}
                    whileTap={!submitting ? { scale: 0.97 } : {}}
                    className="w-full btn-primary rounded-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {submitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <><Send size={18} />Send Message</>
                    )}
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="relative text-center py-12 px-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-6"
                  >
                    <CheckCircle size={40} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Message Sent! 🎉</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Thanks for reaching out! I&apos;ll get back to you very soon.</p>
                  <motion.button
                    onClick={() => { setSubmitted(false); setError(null); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass border border-[var(--border)] rounded-xl text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
