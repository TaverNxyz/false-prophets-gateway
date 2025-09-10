import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="border-t border-champagne/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="font-display text-2xl text-champagne text-glow">
              FALSE PROPHETS
            </div>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
              A judgment-free sanctuary for harm reduction discourse and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:text-center">
            <h4 className="font-display text-champagne font-medium">Quick Access</h4>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href="tel:911" 
                  className="text-muted-foreground hover:text-champagne transition-colors font-inter"
                >
                  Emergency: 911
                </a>
              </div>
              <div>
                <a
                  href="tel:1-800-662-4357"
                  className="text-muted-foreground hover:text-champagne transition-colors font-inter"
                >
                  SAMHSA: 1-800-662-4357
                </a>
              </div>
              <div>
                <a
                  href="sms:741741"
                  className="text-muted-foreground hover:text-champagne transition-colors font-inter"
                >
                  Crisis Text: 741741
                </a>
              </div>
            </div>
          </div>

          {/* Join Discord */}
          <div className="md:text-right space-y-4">
            <motion.a
              href="https://discord.gg/prophetgang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-champagne text-background px-6 py-3 rounded font-display font-medium hover:bg-champagne-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN OUR COMMUNITY
            </motion.a>
            <p className="text-xs text-muted-foreground font-inter">
              Available 24/7 for peer support and harm reduction information
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-champagne/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-muted-foreground font-inter">
              © 2024 False Prophets Community. Educational content for harm reduction purposes only.
            </div>
            
            {/* Pipe Pattern */}
            <div className="flex space-x-2 opacity-20">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-4 h-4 border border-champagne/40 rounded-full"
                />
              ))}
            </div>
            
            <div className="text-xs text-muted-foreground font-inter">
              Not medical advice. Consult healthcare professionals.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};