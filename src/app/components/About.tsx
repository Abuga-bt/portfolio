import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, Palette, Rocket } from 'lucide-react';

export function About() {
  const { ref, isInView } = useInView();

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive UIs with React, TypeScript, and modern CSS',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust APIs with Node.js, Express, and database management',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces with attention to user experience',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-6">About Me</h2>
          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
            I'm a junior full stack developer with a strong foundation in modern web technologies.
            With a keen eye for detail and a passion for learning, I'm dedicated to creating
            exceptional digital experiences that make a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
