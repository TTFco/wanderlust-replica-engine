import { motion } from "framer-motion";
import { getVideoUrl } from "@/data/videoUrlMap";

const luxuryImg =
  "https://images.pexels.com/photos/17072982/pexels-photo-17072982.jpeg?auto=compress&cs=tinysrgb&w=1600";
const extraordinaryExperiencesVideo = getVideoUrl(
  "homeExtraordinaryExperiencesVideo",
);

const ExperienceSection = () => {
  return (
    <section
      id="experiences"
      className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
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
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
            ) : (
              <img
                src={luxuryImg}
                alt="Luxury overwater bungalows at sunset"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
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
            <h2 className="mb-5 font-display text-2xl leading-snug text-foreground sm:mb-6 sm:text-3xl md:text-5xl">
              Where luxury meets the wild
            </h2>
            <p className="mb-8 font-body leading-relaxed text-muted-foreground">
              From private island retreats to intimate safari lodges nestled
              deep in the bush, every experience is crafted to connect you with
              the extraordinary. We believe travel should transform — not just
              transport.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary px-7 py-3 text-sm font-body uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent sm:px-8 sm:tracking-widest"
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
