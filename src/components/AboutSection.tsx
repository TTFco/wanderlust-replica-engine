import { motion } from "framer-motion";
import { Globe, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Sustainable Travel",
    description:
      "We tread lightly, ensuring every journey leaves a positive footprint on the communities and ecosystems we visit.",
  },
  {
    icon: Heart,
    title: "Authentic Connections",
    description:
      "Immerse yourself in local cultures through curated experiences that go far beyond the typical tourist trail.",
  },
  {
    icon: Shield,
    title: "Conservation First",
    description:
      "A portion of every journey directly supports wildlife conservation and community development projects.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-secondary px-4 py-16 sm:px-6 sm:py-24 lg:px-16"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 font-display text-2xl text-foreground sm:mb-16 sm:text-3xl md:text-5xl"
        >
          What drives us
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:mb-6 sm:h-16 sm:w-16">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
