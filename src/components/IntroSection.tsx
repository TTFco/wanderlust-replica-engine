import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl text-foreground mb-8"
        >
          Our world doesn't have time for average
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          That's why we need travellers like you, who seek to go beyond ordinary luxury travel — 
          to experiences that leave our world a better place. <em className="text-display italic text-foreground">The Travel Frenzy</em> takes 
          you to extraordinary destinations where cultures, wildlife, and landscapes converge into 
          something unforgettable.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
