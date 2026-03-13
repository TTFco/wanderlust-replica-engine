import { motion } from "framer-motion";
import heroImg from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Stunning tropical beach at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
        >
          I Dream Of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-primary-foreground max-w-3xl leading-tight"
        >
          Travel that ignites your soul
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href="#destinations"
            className="inline-block border border-primary-foreground/60 text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-primary-foreground/10 transition-all"
          >
            Start With Where
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
