import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-20 px-6 lg:px-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4">The Travel Frenzy</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Extraordinary travel experiences across four continents. 
              Where luxury meets purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/60">
              Explore
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#destinations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Experiences</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Journal</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-primary-foreground/60">
              Get In Touch
            </h4>
            <p className="font-body text-sm text-primary-foreground/80 mb-4">
              hello@thetravelfrenzy.com
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2026 The Travel Frenzy. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
