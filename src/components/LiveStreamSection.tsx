import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Users } from 'lucide-react';

export const LiveStreamSection = () => {
  return (
    <section className="py-16 relative noise-texture">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-black text-champagne text-glow mb-4">
            LIVE SANCTUARY
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Join our live community sessions for real-time harm reduction discussions and peer support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/40 border-champagne/30 backdrop-blur-sm overflow-hidden group hover:border-champagne/50 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-display text-2xl text-champagne flex items-center justify-center gap-3">
                <Play className="w-6 h-6" />
                Tavern Live Stream
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Live Stream Embed */}
              <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden border border-champagne/20">
                <iframe
                  src="https://404live.plentifulpower.xyz/"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Tavern Live Stream"
                />
                
                {/* Overlay for when stream is offline */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-champagne/20 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-champagne" />
                    </div>
                    <p className="text-champagne font-display font-medium">
                      Click to join the live experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-champagne">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground font-inter">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-champagne/60 rounded-full"></div>
                      Real-time harm reduction discussions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-champagne/60 rounded-full"></div>
                      Anonymous peer support sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-champagne/60 rounded-full"></div>
                      Educational content and Q&A
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-champagne/60 rounded-full"></div>
                      Community-driven conversations
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-champagne">
                    Stream Schedule
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground font-inter">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-champagne">8PM - 11PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-champagne">6PM - 12AM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-champagne">7PM - 10PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-champagne text-background hover:bg-champagne-dark font-display flex-1"
                  asChild
                >
                  <a
                    href="http://live.tavernappy.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Join Live Stream
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-champagne text-champagne hover:bg-champagne hover:text-background font-display flex-1"
                  asChild
                >
                  <a
                    href="https://discord.gg/404gang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Join Discord
                  </a>
                </Button>
              </div>

              {/* Live Status Indicator */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-inter">
                  Stream status updates in real-time
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
