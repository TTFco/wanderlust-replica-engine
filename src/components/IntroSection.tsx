import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 font-display text-2xl text-foreground sm:mb-8 sm:text-3xl md:text-5xl"
        >
          Our world doesn't have time for average
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          That's why we need travellers like you, who seek to go beyond ordinary
          luxury travel — to experiences that leave our world a better place.{" "}
          <em className="text-display italic text-foreground">
            The Travel Frenzy
          </em>{" "}
          takes you to extraordinary destinations where cultures, wildlife, and
          landscapes converge into something unforgettable.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
