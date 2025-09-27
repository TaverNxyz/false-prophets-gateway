import React from 'react';
import { motion } from 'framer-motion';

export const FallbackPipe = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated CSS Pipe */}
      <div className="relative">
        {/* Pipe Bowl */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-champagne/60 bg-gradient-to-br from-champagne/20 to-champagne/5 relative"
          animate={{
            boxShadow: [
              "0 0 20px rgba(247, 231, 206, 0.3)",
              "0 0 40px rgba(247, 231, 206, 0.6)",
              "0 0 20px rgba(247, 231, 206, 0.3)"
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Crystal Effect */}
          <motion.div
            className="absolute inset-2 bg-gradient-to-br from-white/40 to-transparent rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Pipe Stem */}
        <div className="absolute top-1/2 left-full w-32 h-2 -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-r from-champagne/40 to-champagne/20 rounded-full border border-champagne/30" />
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/60 to-transparent rounded-full" />
        </div>

        {/* Animated Flame */}
        <motion.div
          className="absolute -bottom-8 left-4 w-4 h-6"
          animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            y: [0, -2, 1, -1, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-blue-400 via-white to-transparent rounded-full opacity-80" />
          <div className="absolute inset-1 bg-gradient-to-t from-blue-200 to-transparent rounded-full" />
        </motion.div>

        {/* Vapor Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-champagne/40 rounded-full"
            style={{
              left: `${60 + i * 8}px`,
              top: `${30 - i * 2}px`
            }}
            animate={{
              y: [-20, -60],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-champagne/5 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};