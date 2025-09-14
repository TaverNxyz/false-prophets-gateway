import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const RulesSection = () => {
  const rules = [
    {
      id: "01",
      title: "DIGITAL ANONYMITY",
      description: "Protect your identity and respect others' privacy. What's shared here stays here.",
      severity: "CRITICAL"
    },
    {
      id: "02", 
      title: "NO MAINSTREAM JUDGMENT",
      description: "We don't conform to conventional social norms. Express authentic thoughts without fear.",
      severity: "IMPORTANT"
    },
    {
      id: "03",
      title: "INTELLECTUAL DISCOURSE",
      description: "Engage in meaningful conversations. Low-effort posts and spam will be purged.",
      severity: "IMPORTANT"
    },
    {
      id: "04",
      title: "RESPECT THE UNDERGROUND",
      description: "No doxxing, harassment, or bringing mainstream drama into our space.",
      severity: "CRITICAL"
    },
    {
      id: "05",
      title: "TECH FOCUS",
      description: "Keep discussions relevant to technology, digital culture, and related topics.",
      severity: "MODERATE"
    },
    {
      id: "06",
      title: "NO CORPORATE SHILLS", 
      description: "Authentic voices only. Obvious marketing or corporate propaganda will be removed.",
      severity: "IMPORTANT"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "CRITICAL": return "text-red-400 border-red-400/30";
      case "IMPORTANT": return "text-champagne border-champagne/30";
      case "MODERATE": return "text-blue-400 border-blue-400/30";
      default: return "text-muted-foreground border-muted/30";
    }
  };

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
            SYSTEM RULES
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Our digital underground operates on principles that maintain authenticity and protect our community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-champagne/20 p-6 hover:border-champagne/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="font-display text-2xl font-black text-champagne tracking-wider">
                    {rule.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-champagne tracking-wide">
                        {rule.title}
                      </h3>
                      <span className={`text-xs font-mono px-3 py-1 rounded border ${getSeverityColor(rule.severity)}`}>
                        {rule.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card/20 backdrop-blur-sm border border-red-400/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-display text-lg font-bold text-red-400 mb-3 tracking-wide">
              VIOLATION PROTOCOL
            </h3>
            <p className="text-muted-foreground font-inter">
              Rule violations result in immediate removal from the underground. 
              No warnings, no appeals. Maintain the integrity of our digital sanctuary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};