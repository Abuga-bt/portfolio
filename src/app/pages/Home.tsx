import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Layers, Zap, Coffee } from 'lucide-react';

const roles = ['Full Stack Developer', 'React Enthusiast', 'API Architect', 'UI Craftsman'];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && sub <= word.length) {
      setText(word.slice(0, sub));
      timeout = setTimeout(() => setSub((s) => s + 1), speed);
    } else if (!deleting && sub > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub > 0) {
      setText(word.slice(0, sub));
      timeout = setTimeout(() => setSub((s) => s - 1), speed / 2);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, speed, pause]);

  return text;
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } } };
const item = { hidden: { y: 32, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export function Home() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Animated mesh background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 60%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.12) 0%, transparent 60%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 10% 70%, rgba(6,182,212,0.1) 0%, transparent 60%)' }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(139,92,246,0.25) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }} />

      {/* Orbiting ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-[600px] h-[600px] rounded-full"
          style={{ border: '1px dashed rgba(139,92,246,0.18)' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
          style={{ border: '1px dashed rgba(236,72,153,0.15)' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm"
            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.35)', color: '#C4B5FD' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
            Available for work · June 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(3.2rem, 9vw, 6.5rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#F0EEFF',
            }}
          >
            Alex Rivera
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={item} className="mt-5 flex items-center justify-center gap-2 h-10">
          <Sparkles className="w-4 h-4 flex-shrink-0" style={{ color: '#FBBF24' }} />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              background: 'linear-gradient(90deg, #8B5CF6, #EC4899, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              minWidth: '260px',
              textAlign: 'left',
            }}
          >
            {typed}
            <span style={{ WebkitTextFillColor: '#8B5CF6', animation: 'blink 1s step-end infinite' }}>|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg max-w-xl mx-auto"
          style={{ color: '#7070A0', lineHeight: 1.75 }}
        >
          I build fast, accessible, and visually sharp web apps — from pixel-perfect UIs to
          battle-tested APIs. Currently seeking my next great team.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', boxShadow: '0 8px 32px rgba(139,92,246,0.35)' }}
          >
            See My Work <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/alex-rivera-resume.pdf"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{ background: 'rgba(139,92,246,0.1)', border: '1.5px solid rgba(139,92,246,0.4)', color: '#C4B5FD' }}
          >
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex gap-3 justify-center mt-8">
          {[
            { href: 'https://github.com', Icon: Github, label: 'GitHub', color: '#8B5CF6' },
            { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn', color: '#06B6D4' },
            { href: 'mailto:alex@example.com', Icon: Mail, label: 'Email', color: '#EC4899' },
          ].map(({ href, Icon, label, color }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{ background: 'rgba(14,14,42,0.9)', border: `1.5px solid ${color}35`, color }}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Mini stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-4 mt-16 max-w-sm mx-auto"
        >
          {[
            { icon: Layers, value: '6+', label: 'Projects', color: '#8B5CF6' },
            { icon: Zap, value: '12', label: 'Technologies', color: '#06B6D4' },
            { icon: Coffee, value: '∞', label: 'Cups of coffee', color: '#F97316' },
          ].map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 p-3 rounded-2xl"
              style={{ background: 'rgba(14,14,42,0.7)', border: `1px solid ${color}20` }}
            >
              <Icon className="w-4 h-4 mb-0.5" style={{ color }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#F0EEFF' }}>{value}</span>
              <span style={{ fontSize: '0.7rem', color: '#6060A0' }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
