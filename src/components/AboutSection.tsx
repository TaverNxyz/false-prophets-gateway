import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const features = [
    {
      title: "Digital Anonymity",
      description: "Complete privacy protection for all members. What happens in 404 stays in 404.",
      icon: "🔒"
    },
    {
      title: "Tech Underground",
      description: "A community for hackers, developers, digital nomads, and tech enthusiasts.",
      icon: "💻"
    },
    {
      title: "No Judgment Zone", 
      description: "Open discourse without social barriers. Express yourself authentically.",
      icon: "🤝"
    },
    {
      title: "Knowledge Sharing",
      description: "Learn from experienced professionals and share your expertise.",
      icon: "🧠"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 noise-texture">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl lg:text-6xl font-black text-champagne text-glow mb-6 tracking-wider">
            404
          </h2>
          <p className="font-display text-xl text-champagne mb-4 tracking-wider">
            ERROR: CONFORMITY NOT FOUND
          </p>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            We're a digital underground community where tech enthusiasts, hackers, 
            developers, and digital nomads connect without the constraints of mainstream platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-champagne/20 p-6 h-full hover:border-champagne/40 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="font-display text-xl font-bold text-champagne tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-champagne/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-champagne mb-4 tracking-wide">
              THE DIGITAL UNDERGROUND
            </h3>
            <p className="text-muted-foreground font-inter text-lg leading-relaxed">
              In a world of filtered content and algorithmic echo chambers, 404 exists as a refuge 
              for authentic digital discourse. We're not just another tech community - we're a collective 
              of individuals who refuse to conform to sanitized online spaces. Here, real conversations 
              happen about technology, life, philosophy, and everything in between.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};