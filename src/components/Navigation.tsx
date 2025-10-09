import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DiscordWidget } from './DiscordWidget';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'rules', label: 'RULES' },
    { id: 'resources', label: 'RESOURCES' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-champagne/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Discord Widget */}
          <div className="flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display text-3xl font-bold text-champagne text-glow cursor-pointer tracking-wider"
              onClick={() => onSectionChange('hero')}
            >
              404
            </motion.div>

            {/* Discord Widget */}
            <div className="hidden lg:block">
              <DiscordWidget />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`font-inter font-medium transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-champagne text-glow' 
                    : 'text-muted-foreground hover:text-champagne'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Join Discord Button */}
          <Button
            variant="outline"
            className="hidden md:block font-display glow-champagne border-champagne text-champagne hover:bg-champagne hover:text-background transition-all duration-300"
            asChild
          >
            <motion.a
              href="https://discord.gg/404gang"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ENTER SERVER
            </motion.a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-champagne"
            onClick={() => {/* Mobile menu toggle */}}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};