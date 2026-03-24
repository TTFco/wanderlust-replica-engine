import { motion } from "framer-motion";
import { getVideoUrl } from "@/data/videoUrlMap";

const luxuryImg =
  "https://images.pexels.com/photos/17072982/pexels-photo-17072982.jpeg?auto=compress&cs=tinysrgb&w=1600";
const extraordinaryExperiencesVideo = getVideoUrl(
  "homeExtraordinaryExperiencesVideo",
);

const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-24 px-6 lg:px-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded"
          >
            {extraordinaryExperiencesVideo ? (
              <video
                src={extraordinaryExperiencesVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-[500px] object-cover"
              />
            ) : (
              <img
                src={luxuryImg}
                alt="Luxury overwater bungalows at sunset"
                className="w-full h-[500px] object-cover"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Extraordinary Experiences
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-snug">
              Where luxury meets the wild
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From private island retreats to intimate safari lodges nestled
              deep in the bush, every experience is crafted to connect you with
              the extraordinary. We believe travel should transform — not just
              transport.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-accent transition-colors"
            >
              Plan Your Journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
