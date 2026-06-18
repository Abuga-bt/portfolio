import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20 relative">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-4">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="mb-6 text-5xl md:text-7xl">
          Hi, I'm <span className="text-primary">Alex Rivera</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A passionate junior developer crafting beautiful and functional web experiences
          with modern technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="p-3 rounded-full hover:bg-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
