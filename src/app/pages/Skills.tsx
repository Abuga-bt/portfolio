import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Monitor, Server, Wrench, ArrowRight, Flame } from 'lucide-react';
import { useInView } from '../components/hooks/useInView';

const skillCategories = [
  {
    icon: Monitor,
    title: 'Frontend',
    subtitle: 'What users see & feel',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    barGradient: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
    glow: 'rgba(139,92,246,0.25)',
    accent: '#A78BFA',
    skills: [
      { name: 'React', level: 85, emoji: '⚛️' },
      { name: 'TypeScript', level: 80, emoji: '🟦' },
      { name: 'Tailwind CSS', level: 90, emoji: '🎨' },
      { name: 'HTML / CSS', level: 95, emoji: '🌐' },
      { name: 'Framer Motion', level: 72, emoji: '✨' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    subtitle: 'What makes it tick',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    barGradient: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    glow: 'rgba(6,182,212,0.25)',
    accent: '#22D3EE',
    skills: [
      { name: 'Node.js', level: 75, emoji: '🟩' },
      { name: 'Express', level: 70, emoji: '🚂' },
      { name: 'PostgreSQL', level: 65, emoji: '🐘' },
      { name: 'MongoDB', level: 70, emoji: '🍃' },
      { name: 'REST APIs', level: 82, emoji: '🔌' },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & DevOps',
    subtitle: 'How I ship & maintain',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
    barGradient: 'linear-gradient(90deg, #F97316, #FBBF24)',
    glow: 'rgba(249,115,22,0.25)',
    accent: '#FB923C',
    skills: [
      { name: 'Git & GitHub', level: 85, emoji: '🐙' },
      { name: 'Docker', level: 60, emoji: '🐳' },
      { name: 'Figma', level: 75, emoji: '🎭' },
      { name: 'Vite', level: 80, emoji: '⚡' },
      { name: 'Linux / CLI', level: 68, emoji: '🐧' },
    ],
  },
];

const techLogos = [
  { name: 'React', color: '#61DAFB' }, { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#68A063' }, { name: 'Next.js', color: '#E5E7EB' },
  { name: 'PostgreSQL', color: '#336791' }, { name: 'MongoDB', color: '#47A248' },
  { name: 'Docker', color: '#2496ED' }, { name: 'Figma', color: '#F24E1E' },
  { name: 'Git', color: '#F05032' }, { name: 'Tailwind', color: '#38BDF8' },
  { name: 'Prisma', color: '#5A67D8' }, { name: 'Stripe', color: '#6772E5' },
];

function LevelDot({ filled }: { filled: boolean }) {
  return (
    <div className="w-2 h-2 rounded-full" style={{ background: filled ? 'currentColor' : 'rgba(255,255,255,0.1)' }} />
  );
}

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section className="min-h-[calc(100vh-73px)] px-6 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #EC4899, transparent)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #FBBF24, transparent)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', color: '#FB923C' }}>
            <Flame className="w-3.5 h-3.5" /> Tech Stack
          </span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#F0EEFF' }}>
            What I{' '}
            <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>work with</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-sm" style={{ color: '#7070A0' }}>
            Proficiency levels from real project experience — not tutorial completions.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.12 }}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(14,14,42,0.9)', border: '1px solid rgba(139,92,246,0.12)' }}
            >
              {/* Card header strip */}
              <div className="h-1.5 w-full" style={{ background: cat.gradient }} />

              <div className="p-6">
                {/* Title */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cat.gradient }}>
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: '#F0EEFF', fontSize: '1.05rem', lineHeight: 1.2 }}>{cat.title}</h3>
                    <p style={{ color: '#6060A0', fontSize: '0.72rem' }}>{cat.subtitle}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {cat.skills.map((skill, skillIdx) => {
                    const dots = Math.round(skill.level / 20);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: catIdx * 0.12 + skillIdx * 0.07 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="flex items-center gap-2 text-sm" style={{ color: '#C4C4E0', fontWeight: 500 }}>
                            <span style={{ fontSize: '0.85rem' }}>{skill.emoji}</span>
                            {skill.name}
                          </span>
                          {/* Dot proficiency */}
                          <span className="flex gap-1" style={{ color: cat.accent }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <LevelDot key={i} filled={i < dots} />
                            ))}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.1, delay: catIdx * 0.12 + skillIdx * 0.09, ease: 'easeOut' }}
                            style={{ background: cat.barGradient }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl p-6 mb-12"
          style={{ background: 'rgba(14,14,42,0.6)', border: '1px solid rgba(139,92,246,0.1)' }}
        >
          <p className="text-xs uppercase tracking-widest mb-5 text-center" style={{ color: '#5050A0', fontWeight: 600 }}>Also worked with</p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {techLogos.map(({ name, color }, i) => (
              <motion.span
                key={name}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04, type: 'spring', stiffness: 200 }}
                className="px-3.5 py-1.5 rounded-full text-xs"
                style={{ background: `${color}12`, border: `1px solid ${color}30`, color, fontWeight: 600 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F97316, #EC4899)', fontWeight: 600, boxShadow: '0 0 30px rgba(249,115,22,0.25)' }}
          >
            See Projects Built With These <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
