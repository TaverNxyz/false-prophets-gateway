import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const principles = [
  {
    title: "Safety First",
    description: "Evidence-based harm reduction practices and safety protocols for all substances.",
    icon: "🛡️"
  },
  {
    title: "Anonymity Protected",  
    description: "Complete privacy and confidentiality for all community members and discussions.",
    icon: "🔒"
  },
  {
    title: "Mutual Respect",
    description: "Zero tolerance for judgment, discrimination, or harmful behavior towards others.",
    icon: "🤝"
  },
  {
    title: "Science-Based Info",
    description: "Accurate, research-backed information from trusted medical and scientific sources.",
    icon: "🧬"
  }
];

export const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 relative noise-texture">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-black text-champagne text-glow mb-6">
            OUR SANCTUARY
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            False Prophets exists as a judgment-free digital sanctuary where individuals can engage in 
            open, honest discourse about substance use while prioritizing harm reduction and community support. 
            We provide a platform built on respect, science, and genuine human connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-champagne/20 backdrop-blur-sm h-full group hover:border-champagne/40 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-champagne">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/30 border-champagne/30 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-champagne">
                    Why We Exist
                  </h3>
                  <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                    <p>
                      Traditional approaches to substance use often emphasize abstinence-only policies 
                      that ignore the reality of human behavior and can inadvertently increase harm.
                    </p>
                    <p>
                      We believe in meeting people where they are, providing practical safety information, 
                      emotional support, and resources that actually save lives.
                    </p>
                    <p className="text-champagne font-medium">
                      Every conversation here has the potential to prevent overdoses, reduce infections, 
                      and save lives through informed decision-making.
                    </p>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-champagne/10 to-transparent border border-champagne/20">
                    <div className="text-6xl lg:text-8xl font-display font-black text-champagne/20 mb-4">
                      "
                    </div>
                    <blockquote className="text-lg italic text-champagne leading-relaxed">
                      Information saves lives.
                      <br />
                      Community heals souls.
                    </blockquote>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};