import { NavLink, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Code2, Home, User, Zap, FolderGit2, Mail } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/about', label: 'About', icon: User, end: false },
  { to: '/skills', label: 'Skills', icon: Zap, end: false },
  { to: '/projects', label: 'Projects', icon: FolderGit2, end: false },
  { to: '/contact', label: 'Contact', icon: Mail, end: false },
];

// Per-route accent colors
const routeColors: Record<string, string> = {
  '/': '#8B5CF6',
  '/about': '#06B6D4',
  '/skills': '#F97316',
  '/projects': '#EC4899',
  '/contact': '#A855F7',
};

export function Navbar() {
  const { pathname } = useLocation();
  const accent = routeColors[pathname] ?? '#8B5CF6';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-4 py-3"
      style={{ background: 'rgba(7,7,26,0.75)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(139,92,246,0.12)' }}
    >
      {/* Accent glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`, transition: 'background 0.5s ease' }} />

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', boxShadow: '0 0 16px rgba(139,92,246,0.4)' }}>
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:block text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Alex Rivera
          </span>
        </NavLink>

        {/* Nav pills */}
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
            >
              {({ isActive }) => (
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm transition-colors duration-200"
                    style={{ color: isActive ? '#fff' : '#7070A0', fontWeight: isActive ? 600 : 400 }}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="hidden md:inline">{label}</span>
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hire me CTA */}
        <NavLink
          to="/contact"
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', fontWeight: 600, boxShadow: '0 0 16px rgba(139,92,246,0.25)', flexShrink: 0 }}
        >
          Hire me ✦
        </NavLink>
      </div>
    </motion.nav>
  );
}
