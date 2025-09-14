import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedPipe } from './AnimatedPipe';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative noise-texture">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-6xl lg:text-8xl font-black text-champagne text-glow leading-none tracking-wider"
            >
              404
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground font-inter max-w-lg"
            >
              Digital Underground.
              <br />
              <span className="text-champagne">Where the Lost Connect.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="bg-champagne text-background hover:bg-champagne-dark font-display text-lg px-8 py-6 glow-champagne animate-glow-pulse"
              asChild
            >
              <motion.a
                href="https://discord.gg/prophetgang"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ENTER THE SERVER
              </motion.a>
            </Button>
            
            <p className="text-sm text-muted-foreground font-inter">
              A digital sanctuary for tech enthusiasts, hackers, and digital nomads
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Pipe Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-96 lg:h-[600px] relative"
        >
          <div className="absolute inset-0 bg-gradient-radial from-champagne/10 via-transparent to-transparent rounded-full blur-3xl animate-glow-pulse"></div>
          <AnimatedPipe />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-muted-foreground text-sm font-inter">EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};