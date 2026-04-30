"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        setError(data.error || "Something went wrong.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-xl glass border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base md:text-lg bg-transparent outline-none transition-all duration-200 ${
      focusedField === field
        ? "border-purple-500/70 shadow-[0_0_0_3px_rgba(168,85,247,0.15)]"
        : "border-[var(--border)] hover:border-zinc-600"
    }`;

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden mesh-gradient"
      ref={ref}
    >
      {/* background glow */}
      <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">
          Let&rsquo;s build something great
        </p>

        <h2 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] mb-5">
          Get in <span className="gradient-text section-title-line">Touch</span>
        </h2>

        <p className="max-w-2xl mx-auto text-xl text-[var(--text-secondary)] leading-relaxed">
          Whether it&rsquo;s a job opportunity, collaboration, or just a hello &mdash;
          I&rsquo;d love to hear from you.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="grid lg:grid-cols-5 gap-10 items-start">

        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-2 space-y-6"
        >
          {[
            {
              icon: <Mail size={20} className="text-purple-400" />,
              label: "Email",
              value: "anumahtesham2026@gmail.com",
              href: "mailto:anumahtesham2026@gmail.com",
            },
            {
              icon: <MapPin size={20} className="text-violet-400" />,
              label: "Location",
              value: "Pakistan 🇵🇰",
            },
            {
              icon: <MessageSquare size={20} className="text-fuchsia-400" />,
              label: "Status",
              value: "Open to opportunities",
            },
          ].map(({ icon, label, value, href }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="glass border border-[var(--border)] rounded-2xl p-6 flex items-center gap-4 hover:border-purple-500/50 transition"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border)]">
                {icon}
              </div>

              <div>
                <p className="text-xs uppercase text-[var(--text-muted)] mb-1">
                  {label}
                </p>

                {href ? (
                  <a
                    href={href}
                    className="text-base font-semibold hover:text-purple-400 transition"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-semibold">{value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Social */}
          <div className="pt-2 flex gap-3">
            <motion.a
              href="https://github.com/AnumAhte"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-white text-sm font-semibold transition-transform"
            >
              <GithubIcon size={16} /> GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/anum-ahtesham-7308a42b6/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-semibold transition-transform"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:col-span-3"
        >
          <div className="glass border border-[var(--border)] rounded-3xl p-8 sm:p-10 shadow-xl shadow-purple-500/10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-bold mb-6">
                    Send me a message
                  </h3>

                  <input
                    name="name"
                    placeholder="Your Name"
                    className={inputClasses("name")}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />

                  <input
                    name="email"
                    placeholder="Your Email"
                    className={inputClasses("email")}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />

                  <input
                    name="subject"
                    placeholder="Subject"
                    className={inputClasses("subject")}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className={inputClasses("message")}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full"
                  >
                    {submitting ? "Sending..." : <>Send Message <Send size={14} /></>}
                  </button>

                  {error && (
                    <p className="text-red-400 text-sm text-center">
                      {error}
                    </p>
                  )}
                </motion.form>
              ) : (
                <div className="text-center py-16">
                  <CheckCircle className="mx-auto text-emerald-400 mb-4" size={50} />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">
                    I’ll get back to you soon.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}