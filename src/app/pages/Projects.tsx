import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Github, ExternalLink, ArrowRight, LayoutDashboard, Dumbbell,
  ShoppingBag, BrainCircuit, MessageCircle, BarChart3, X
} from 'lucide-react';
import { useInView } from '../components/hooks/useInView';

const ALL_TAGS = ['React', 'Python', 'MySQL', 'Tailwind', 'FastAPI', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI', 'Socket.io'];
const projects = [
  {
    id: 1,
    title: 'Job Application Tracker',
    description: 'Full-stack job tracking app with AI-powered CV tailoring, smart job import, JWT authentication, forgot password via Gmail, and real-time application status dashboard.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=600&fit=crop&auto=format',
    tags: ['React', 'Python', 'MySQL', 'Tailwind'],
    github: 'https://github.com/Abuga-bt/job-tracker',
    demo: 'https://job-tracker-sally.netlify.app',
    icon: LayoutDashboard,
    palette: { from: '#378ADD', to: '#1D9E75', glow: 'rgba(55,138,221,0.4)', text: '#93C5FD' },
    featured: true,
    year: '2026',
  },
  {
    id: 2,
    title: 'SkillShare Sytem',
    description: 'A community platform where users can exchange skills, connect with others and arrange learning sessions. Features real-time messaging, user profiles, skill listings, exchange requests and a review system.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/Abuga-bt/Skillshare',
    demo: 'https://skill-share-system.netlify.app',
    icon: BrainCircuit,
    palette: { from: '#06B6D4', to: '#3B82F6', glow: 'rgba(6,182,212,0.4)', text: '#67E8F9' },
    featured: false,
    year: '2026',
  },
  
  
];

function GradientBorder({ children, from, to, className = '' }: { children: React.ReactNode; from: string; to: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[1.5px] ${className}`} style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <div className="rounded-[calc(1rem-1.5px)] overflow-hidden h-full" style={{ background: '#0E0E2A' }}>
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ project, size = 'normal' }: { project: typeof projects[0]; size?: 'featured' | 'normal' }) {
  const isFeatured = size === 'featured';
  return (
    <GradientBorder from={project.palette.from} to={project.palette.to} className="h-full group">
      <div className="relative h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: isFeatured ? '240px' : '160px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #0E0E2A 0%, rgba(14,14,42,0.2) 60%, transparent 100%)` }} />
          {/* Icon badge */}
          <div
            className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})` }}
          >
            <project.icon className="w-4 h-4 text-white" />
          </div>
          {/* Year */}
          <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(7,7,26,0.7)', color: project.palette.text, border: `1px solid ${project.palette.from}40` }}>
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: isFeatured ? '1.25rem' : '1.05rem', color: '#F0EEFF', marginBottom: '0.5rem' }}>
            {project.title}
          </h3>
          <p style={{ color: '#7070A0', fontSize: '0.85rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1rem' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${project.palette.from}18`, color: project.palette.text, border: `1px solid ${project.palette.from}30`, fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#9090B0', fontWeight: 500 }}>
              <Github className="w-3.5 h-3.5" /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})`, fontWeight: 600 }}>
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </a>
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}

export function Projects() {
  const { ref, isInView } = useInView();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    if (activeFilters.length === 0) return projects;
    return projects.filter((p) => activeFilters.every((f) => p.tags.includes(f)));
  }, [activeFilters]);

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section className="min-h-[calc(100vh-73px)] px-6 py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, #EC4899, transparent)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm mb-4" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', color: '#A78BFA' }}>
            Featured Projects
          </span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: '#F0EEFF' }}>
            Things I've{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              shipped
            </span>
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm" style={{ color: '#7070A0' }}>
            {projects.length} projects spanning full-stack web apps, AI tools, and real-time systems.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {/* Active filter pills */}
            {activeFilters.map((f) => (
                <motion.button
                  key={f}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  onClick={() => toggleFilter(f)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', color: '#fff', fontWeight: 700 }}
                >
                  {f} <X className="w-3 h-3" />
                </motion.button>
              ))}

            {/* Tag options */}
            {ALL_TAGS.filter((t) => !activeFilters.includes(t)).map((tag) => {
              const usedInVisible = projects.some((p) => p.tags.includes(tag));
              if (!usedInVisible) return null;
              return (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag)}
                  className="px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(14,14,42,0.9)', border: '1px solid rgba(139,92,246,0.2)', color: '#9090B0', fontWeight: 500 }}
                >
                  {tag}
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="px-3.5 py-1.5 rounded-full text-xs transition-all hover:opacity-80"
                style={{ color: '#6060A0', fontWeight: 500 }}
              >
                Clear all
              </button>
            )}
          </div>
        </motion.div>

        {/* No results */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p style={{ color: '#6060A0', fontSize: '1rem' }}>No projects match all selected filters.</p>
            <button onClick={() => setActiveFilters([])} className="mt-3 text-sm underline" style={{ color: '#A78BFA' }}>Clear filters</button>
          </motion.div>
        )}

        {/* Bento grid */}
        {filtered.length > 0 && (
            <motion.div key={activeFilters.join(',')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              {/* Featured row */}
              {featured.length > 0 && (
                <div className={`grid gap-4 mb-4 ${featured.length === 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {featured.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ProjectCard project={project} size="featured" />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Regular row */}
              {regular.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {regular.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (featured.length + i) * 0.08 }}
                    >
                      <ProjectCard project={project} size="normal" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-14 mb-10"
        >
          {[
            { value: '3+', label: 'Projects shipped', color: '#378ADD' },
          { value: '10+', label: 'Technologies used', color: '#1D9E75' },
          { value: '100%', label: 'Passion driven', color: '#7F77DD' },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center">
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '2.2rem', background: `linear-gradient(135deg, ${color}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {value}
              </div>
              <div style={{ color: '#6060A0', fontSize: '0.8rem', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', fontWeight: 600, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
          >
            Interested? Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
