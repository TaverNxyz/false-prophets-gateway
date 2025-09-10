import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const rules = [
  {
    number: "01",
    title: "Respect Above All",
    description: "Treat every community member with dignity and respect. No judgment, harassment, or discrimination of any kind will be tolerated.",
    severity: "Zero Tolerance"
  },
  {
    number: "02", 
    title: "Harm Reduction Focus",
    description: "All discussions must prioritize safety and harm reduction. We do not encourage substance use but provide information to reduce risks for those who choose to use.",
    severity: "Core Principle"
  },
  {
    number: "03",
    title: "No Sourcing",
    description: "Absolutely no discussion of sources, suppliers, or methods to obtain illegal substances. This includes hints, coded language, or private message requests.",
    severity: "Immediate Ban"
  },
  {
    number: "04",
    title: "Medical Disclaimer",
    description: "Nothing shared here constitutes medical advice. Always consult healthcare professionals for medical concerns. We are peers, not doctors.",
    severity: "Legal Requirement"
  },
  {
    number: "05",
    title: "Privacy & Anonymity", 
    description: "Never share personal information or attempt to identify other members. What happens in False Prophets stays in False Prophets.",
    severity: "Permanent Ban"
  },
  {
    number: "06",
    title: "Evidence-Based Information",
    description: "When sharing harm reduction information, cite reputable sources. Misinformation can be deadly. If unsure, ask or research first.",
    severity: "Content Removal"
  },
  {
    number: "07",
    title: "No Glorification",
    description: "Do not glorify, romanticize, or encourage substance use. Focus on safety, support, and honest discussion about challenges.",
    severity: "Warning System"
  },
  {
    number: "08",
    title: "Mental Health Support",
    description: "If someone expresses suicidal thoughts or severe mental health crisis, immediately contact moderators or emergency services. We care about your safety.",
    severity: "Community Duty"
  }
];

export const RulesSection = () => {
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
            COMMUNITY CODE
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            These rules exist to protect our community and ensure everyone feels safe to share their experiences. 
            Violation of these principles jeopardizes the sanctuary we've built together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/40 border-champagne/30 backdrop-blur-sm h-full group hover:border-champagne/50 hover:bg-card/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl font-display font-black text-champagne/60">
                        {rule.number}
                      </div>
                      <div>
                        <CardTitle className="font-display text-xl text-champagne">
                          {rule.title}
                        </CardTitle>
                        <div className={`text-xs font-inter px-2 py-1 rounded-full mt-2 inline-block ${
                          rule.severity === 'Zero Tolerance' || rule.severity === 'Immediate Ban' || rule.severity === 'Permanent Ban'
                            ? 'bg-destructive/20 text-destructive'
                            : rule.severity === 'Core Principle' || rule.severity === 'Community Duty'
                            ? 'bg-champagne/20 text-champagne'
                            : 'bg-muted/40 text-muted-foreground'
                        }`}>
                          {rule.severity}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-card/20 border-champagne/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-champagne">
                  Enforcement & Appeals
                </h3>
                <div className="text-muted-foreground font-inter leading-relaxed space-y-3">
                  <p>
                    <strong className="text-champagne">Moderator Discretion:</strong> All rules are interpreted and enforced 
                    at moderator discretion based on context, intent, and community safety.
                  </p>
                  <p>
                    <strong className="text-champagne">Appeals Process:</strong> Believe a moderation action was unfair? 
                    Contact server administration through the designated appeal channel within 48 hours.
                  </p>
                  <p>
                    <strong className="text-champagne">Progressive Discipline:</strong> Most violations follow a 
                    warning → temporary ban → permanent ban progression, except for zero-tolerance issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};