import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Code2, Database, Palette, Rocket, GraduationCap, Heart, Coffee, Music, ArrowRight } from 'lucide-react';
import { useInView } from '../components/hooks/useInView';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building pixel-perfect UIs with React, TypeScript, and modern CSS that delight users.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Architecting robust APIs with Node.js, Express, and database solutions that scale.',
    gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
    glow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Translating design concepts into intuitive, beautiful, and accessible experiences.',
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing every layer of the stack — from Core Web Vitals to database queries.',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
    glow: 'rgba(249, 115, 22, 0.3)',
  },
];

const funFacts = [
  { icon: GraduationCap, label: 'IT Graduate 2026', color: '#8B5CF6' },
  { icon: Heart, label: 'Open Source Contributor', color: '#EC4899' },
  { icon: Coffee, label: '3+ cups/day', color: '#F97316' },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section className="min-h-[calc(100vh-73px)] px-6 py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm mb-4" style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', color: '#22D3EE' }}>
            About Me
          </span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#F0EEFF' }}>
            Passionate about building{' '}
            <span style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              great things
            </span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#9090B0' }}>
            I'm a junior full stack developer with a strong foundation in modern web technologies.
            With a keen eye for detail and a love for clean code, I create digital experiences
            that are both beautiful and functional.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl flex gap-5 group cursor-default"
              style={{ background: 'rgba(14, 14, 42, 0.8)', border: '1px solid rgba(139, 92, 246, 0.15)', transition: 'box-shadow 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 40px ${item.glow}`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: item.gradient }}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: '#F0EEFF', fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#9090B0', lineHeight: 1.6, fontSize: '0.92rem' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun facts row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {funFacts.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full"
              style={{ background: 'rgba(14, 14, 42, 0.9)', border: `1px solid ${color}30`, color: '#C4C4E0' }}
            >
              <Icon className="w-4 h-4" style={{ color }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', fontWeight: 600, boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
          >
            See My Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
