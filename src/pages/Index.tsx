import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { RulesSection } from '@/components/RulesSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { LiveStreamSection } from '@/components/LiveStreamSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Loading screen with smoke effect
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center noise-texture">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Cross Layout Container */}
          <div className="relative w-80 h-96 flex items-center justify-center">
            
            {/* Horizontal "404" */}
            <div className="absolute flex items-center justify-center space-x-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-display text-4xl font-black text-champagne text-glow tracking-wider"
              >
                4
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-display text-5xl font-black text-champagne text-glow tracking-wider"
              >
                0
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="font-display text-4xl font-black text-champagne text-glow tracking-wider"
              >
                4
              </motion.div>
            </div>

            {/* Vertical "PROPHET" */}
            <div className="absolute flex flex-col items-center justify-center space-y-2 mt-16">
              {['P', 'R', 'O', 'P', 'H', 'E', 'T'].map((letter, index) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + (index * 0.1), duration: 0.6 }}
                  className="font-display text-2xl font-black text-champagne text-glow tracking-wider"
                >
                  {letter}
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute inset-0 border border-champagne/20 rounded-lg"
            />
            
            {/* Corner Accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-champagne/60"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-champagne/60"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-champagne/60"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-champagne/60"
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="text-center mt-12"
          >
            <div className="text-muted-foreground font-inter text-sm tracking-wider">
              ACCESSING THE DIGITAL UNDERGROUND...
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "240px" }}
              transition={{ delay: 3.5, duration: 2, ease: "easeInOut" }}
              className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto mt-4"
            />
          </motion.div>

          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200]
                }}
                transition={{
                  delay: 2 + (i * 0.2),
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
                className="absolute w-1 h-1 bg-champagne/40 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <HeroSection />
            </motion.div>
          )}
          
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AboutSection />
            </motion.div>
          )}
          
          {activeSection === 'rules' && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <RulesSection />
            </motion.div>
          )}
          
          {activeSection === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ResourcesSection />
              <LiveStreamSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
