import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ResourcesSection = () => {
  const resources = [
    {
      category: "DEV TOOLS",
      items: [
        { name: "GitHub", url: "https://github.com", description: "Code repositories and collaboration" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", description: "Technical Q&A community" },
        { name: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and discussions" }
      ]
    },
    {
      category: "LEARNING",
      items: [
        { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Free coding education" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", description: "University-level courses" },
        { name: "Coursera", url: "https://coursera.org", description: "Professional online courses" }
      ]
    },
    {
      category: "SECURITY",
      items: [
        { name: "OWASP", url: "https://owasp.org", description: "Web application security" },
        { name: "Krebs on Security", url: "https://krebsonsecurity.com", description: "Cybersecurity news" },
        { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", description: "Data breach checker" }
      ]
    },
    {
      category: "PRIVACY",
      items: [
        { name: "Tor Project", url: "https://torproject.org", description: "Anonymous browsing" },
        { name: "ProtonMail", url: "https://protonmail.com", description: "Encrypted email service" },
        { name: "Signal", url: "https://signal.org", description: "Secure messaging app" }
      ]
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
            RESOURCES
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Essential tools and knowledge bases for the digital underground community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-champagne/20 p-6 h-full">
                <h3 className="font-display text-xl font-bold text-champagne mb-6 tracking-wide">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 0.4 }}
                      className="group"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 h-auto hover:bg-champagne/10 transition-all duration-300"
                        asChild
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="text-left">
                            <div className="font-display font-bold text-champagne group-hover:text-champagne-light transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card/20 backdrop-blur-sm border border-champagne/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-display text-lg font-bold text-champagne mb-3 tracking-wide">
              CONTRIBUTE TO THE UNDERGROUND
            </h3>
            <p className="text-muted-foreground font-inter mb-4">
              Know of essential resources that should be included? Share them with the community.
            </p>
            <Button
              variant="outline"
              className="border-champagne text-champagne hover:bg-champagne hover:text-background transition-all duration-300"
            >
              Submit Resource
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};