import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-champagne/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl font-bold text-champagne tracking-wider"
          >
            404
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-8"
          >
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-champagne transition-colors duration-300 font-mono text-sm"
            >
              PRIVACY
            </a>
            <a
              href="#terms"
              className="text-muted-foreground hover:text-champagne transition-colors duration-300 font-mono text-sm"
            >
              TERMS
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-champagne transition-colors duration-300 font-mono text-sm"
            >
              CONTACT
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground font-mono text-sm"
          >
            © 2024 404 UNDERGROUND
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-muted-foreground font-mono">
            ACCESSING THE DIGITAL UNDERGROUND SINCE 2024
          </p>
        </motion.div>
      </div>
    </footer>
  );
};