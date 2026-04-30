/* global React, Icon, SectionLabel, GradientText, GlassCard, useInView */
const { useState } = React;

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSent(true); setSubmitting(false); }, 600);
  };

  const cls = (f) => `contact-input ${focused === f ? "focused" : ""}`;
  const onChg = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const infos = [
    { icon: "mail",            color: "#c084fc", label: "Email",    value: "anumahtesham2026@gmail.com", href: "mailto:anumahtesham2026@gmail.com" },
    { icon: "map-pin",         color: "#a78bfa", label: "Location", value: "Pakistan 🇵🇰" },
    { icon: "message-square",  color: "#e879f9", label: "Status",   value: "Open to opportunities" },
  ];

  return (
    <section id="contact" ref={ref} className={`section mesh-gradient ${inView ? "in" : ""}`}>
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      <div className="section-head">
        <SectionLabel>Let&apos;s build something great</SectionLabel>
        <h2 className="section-title">Get in <GradientText>Touch</GradientText></h2>
        <p className="section-sub">Whether it&apos;s a job opportunity, collaboration, or just a hello — I&apos;d love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          {infos.map(i => (
            <GlassCard key={i.label} className="contact-info-card">
              <div className="contact-icon"><Icon name={i.icon} size={20} style={{ color: i.color }} /></div>
              <div>
                <p className="contact-label">{i.label}</p>
                {i.href
                  ? <a href={i.href}>{i.value}</a>
                  : <p className="contact-value">{i.value}</p>}
              </div>
            </GlassCard>
          ))}
          <div className="contact-socials">
            <a href="https://github.com/AnumAhte" target="_blank" rel="noreferrer" className="contact-social github">GitHub</a>
            <a href="https://linkedin.com/in/anum-ahtesham-7308a42b6" target="_blank" rel="noreferrer" className="contact-social linkedin">LinkedIn</a>
          </div>
        </div>

        <div className="contact-form-wrap glass-card">
          {!sent ? (
            <form onSubmit={submit}>
              <h3>Send me a message</h3>
              <input className={cls("name")} name="name" placeholder="Your Name" onChange={onChg} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} required />
              <input className={cls("email")} name="email" type="email" placeholder="Your Email" onChange={onChg} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} required />
              <input className={cls("subject")} name="subject" placeholder="Subject" onChange={onChg} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
              <textarea className={cls("message")} name="message" rows={5} placeholder="Message" onChange={onChg} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} required />
              <button type="submit" disabled={submitting} className="btn-primary" style={{ width: "100%" }}>
                {submitting ? "Sending..." : <>Send Message <Icon name="send" size={14} /></>}
              </button>
            </form>
          ) : (
            <div className="sent-state">
              <Icon name="check-circle" size={50} style={{ color: "#34d399" }} />
              <h3>Message Sent!</h3>
              <p>I&apos;ll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
