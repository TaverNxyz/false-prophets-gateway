import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, Globe, BookOpen } from 'lucide-react';

const resourceCategories = [
  {
    title: "Emergency Resources",
    icon: <Phone className="w-6 h-6" />,
    description: "Immediate help for overdoses and medical emergencies",
    resources: [
      {
        name: "Emergency Services",
        description: "Call for immediate medical emergencies",
        link: "tel:911",
        badge: "24/7"
      },
      {
        name: "Poison Control Center",
        description: "Expert guidance for poisoning and overdoses",
        link: "tel:1-800-222-1222",
        badge: "Free"
      },
      {
        name: "Crisis Text Line",
        description: "Text HOME to 741741 for crisis support",
        link: "sms:741741",
        badge: "Anonymous"
      }
    ]
  },
  {
    title: "Harm Reduction Organizations",
    icon: <Globe className="w-6 h-6" />,
    description: "Professional harm reduction resources and support",
    resources: [
      {
        name: "DanceSafe",
        description: "Drug testing kits and harm reduction education",
        link: "https://dancesafe.org",
        badge: "Testing Kits"
      },
      {
        name: "Harm Reduction Guide",
        description: "Comprehensive harm reduction practices",
        link: "https://harmreduction.org",
        badge: "Educational"
      },
      {
        name: "The Loop",
        description: "Drug checking and harm reduction services",
        link: "https://wearetheloop.org",
        badge: "UK Based"
      }
    ]
  },
  {
    title: "Scientific Information",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Evidence-based information about substances",
    resources: [
      {
        name: "PsychonautWiki",
        description: "Comprehensive substance information database",
        link: "https://psychonautwiki.org",
        badge: "Detailed"
      },
      {
        name: "Erowid",
        description: "Experience reports and substance information",
        link: "https://erowid.org",
        badge: "Experiences"
      },
      {
        name: "TripSit",
        description: "Drug interaction checker and information",
        link: "https://tripsit.me",
        badge: "Interactions"
      }
    ]
  }
];

const treatmentResources = [
  {
    name: "SAMHSA National Helpline",
    description: "Treatment referral and information service for individuals and families facing mental health and/or substance use disorders",
    phone: "1-800-662-4357",
    features: ["24/7 availability", "Free", "Confidential", "English & Spanish"]
  },
  {
    name: "Crystal Meth Anonymous",
    description: "12-step fellowship for those recovering from crystal meth addiction",
    phone: "855-638-4373",
    features: ["Peer support", "Meeting locator", "Sponsorship program"]
  },
  {
    name: "Narcotics Anonymous",
    description: "Global fellowship of men and women for whom drugs have become a major problem",
    phone: "818-773-9999",
    features: ["Worldwide meetings", "Literature", "Step work"]
  }
];

export const ResourcesSection = () => {
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
            VITAL RESOURCES
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Curated resources for harm reduction, emergency support, and evidence-based information. 
            These tools can save lives and provide crucial support when you need it most.
          </p>
        </motion.div>

        {/* Quick Access Resources */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/40 border-champagne/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-champagne">
                      {category.icon}
                    </div>
                    <CardTitle className="font-display text-xl text-champagne">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.resources.map((resource, i) => (
                    <motion.div
                      key={resource.name}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-between border-champagne/20 hover:border-champagne/40 hover:bg-champagne/5"
                        asChild
                      >
                        <a 
                          href={resource.link}
                          target={resource.link.startsWith('http') ? "_blank" : undefined}
                          rel={resource.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          <div className="flex flex-col items-start">
                            <span className="font-medium text-champagne group-hover:text-champagne-light">
                              {resource.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {resource.description}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-champagne/20 text-champagne px-2 py-1 rounded-full">
                              {resource.badge}
                            </span>
                            <ExternalLink className="w-4 h-4 text-champagne/60" />
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Treatment & Recovery Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl font-bold text-champagne text-center mb-8">
            Treatment & Recovery Support
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {treatmentResources.map((resource, index) => (
              <Card key={resource.name} className="bg-card/30 border-champagne/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-display text-lg font-bold text-champagne mb-2">
                        {resource.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Button
                        size="sm"
                        className="bg-champagne text-background hover:bg-champagne-dark w-full font-display"
                        asChild
                      >
                        <a href={`tel:${resource.phone}`}>
                          Call {resource.phone}
                        </a>
                      </Button>
                      
                      <div className="flex flex-wrap gap-1">
                        {resource.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-muted/40 text-muted-foreground px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-destructive/10 border-destructive/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-6 text-center">
              <h4 className="font-display text-lg font-bold text-destructive mb-3">
                ⚠️ Important Medical Disclaimer
              </h4>
              <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                <strong>Nothing provided here constitutes medical advice.</strong> Always consult with 
                qualified healthcare professionals for medical concerns. In case of emergency, call your 
                local emergency services immediately. The information and resources provided are for 
                educational and harm reduction purposes only.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};