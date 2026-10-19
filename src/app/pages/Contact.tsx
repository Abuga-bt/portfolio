import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useInView } from '../components/hooks/useInView';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sallyabuga11@gmail.com', href: 'mailto:alex@example.com', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null, color: '#EC4899', gradient: 'linear-gradient(135deg, #EC4899, #F472B6)' },
  { icon: Github, label: 'GitHub', value: '@Abuga-bt', href: 'https://github.com', color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)' },
];

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: '#8B5CF6' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#06B6D4' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#EC4899' },
];

export function Contact() {
  const { ref, isInView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-[calc(100vh-73px)] px-6 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4" style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)', color: '#F472B6' }}>
            <MessageSquare className="w-3.5 h-3.5" /> Let's Connect
          </span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#F0EEFF' }}>
            Get in{' '}
            <span style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              touch
            </span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#9090B0' }}>
            Whether it's a job opportunity, a cool project, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: info cards + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, gradient }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(14, 14, 42, 0.9)', border: '1px solid rgba(139, 92, 246, 0.15)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: gradient }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#6060A0', fontWeight: 600 }}>{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: '#C4C4E0', fontWeight: 500 }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: '#C4C4E0', fontWeight: 500 }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="p-5 rounded-2xl" style={{ background: 'rgba(14, 14, 42, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: '#22C55E', boxShadow: '0 0 10px #22C55E' }} />
                <span style={{ color: '#86EFAC', fontWeight: 600 }}>Available for opportunities</span>
              </div>
              <p className="mt-2 text-sm" style={{ color: '#9090B0' }}>Currently open to junior developer roles and freelance projects.</p>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ background: 'rgba(14, 14, 42, 0.9)', border: `1.5px solid ${color}40`, color }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                style={{ background: 'rgba(14, 14, 42, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #22C55E, #16A34A)' }}>
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#F0EEFF' }}>Message Sent!</h3>
                <p className="mt-2" style={{ color: '#9090B0' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105"
                  style={{ background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', color: '#A78BFA', fontWeight: 600 }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl space-y-5"
                style={{ background: 'rgba(14, 14, 42, 0.9)', border: '1px solid rgba(139, 92, 246, 0.15)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: '#6060A0', fontWeight: 600 }}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Ann"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{ background: 'rgba(26, 26, 53, 0.8)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#F0EEFF', fontSize: '0.9rem' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: '#6060A0', fontWeight: 600 }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{ background: 'rgba(26, 26, 53, 0.8)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#F0EEFF', fontSize: '0.9rem' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: '#6060A0', fontWeight: 600 }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Project collab / Just saying hi"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{ background: 'rgba(26, 26, 53, 0.8)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#F0EEFF', fontSize: '0.9rem' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.6)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)')}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: '#6060A0', fontWeight: 600 }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me what you have in mind..."
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                    style={{ background: 'rgba(26, 26, 53, 0.8)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#F0EEFF', fontSize: '0.9rem' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.6)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', fontWeight: 600, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
