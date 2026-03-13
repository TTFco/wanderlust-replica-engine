import { motion } from "framer-motion";
import africaImg from "@/assets/dest-africa.jpg";
import asiaImg from "@/assets/dest-asia.jpg";
import southAmericaImg from "@/assets/dest-south-america.jpg";
import europeImg from "@/assets/dest-europe.jpg";

const destinations = [
  { name: "Africa", image: africaImg, description: "Untamed wilderness & safari adventures" },
  { name: "Asia", image: asiaImg, description: "Ancient temples & tropical serenity" },
  { name: "South America", image: southAmericaImg, description: "Mountain peaks & vibrant cultures" },
  { name: "Europe", image: europeImg, description: "Coastal charm & timeless elegance" },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 px-6 lg:px-16 bg-secondary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          Browse our destinations
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative aspect-[3/4] rounded overflow-hidden cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 card-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-display text-2xl text-primary-foreground font-semibold mb-1">
                  {dest.name}
                </h3>
                <p className="font-body text-sm text-primary-foreground/75 tracking-wide">
                  {dest.description}
                </p>
                <span className="inline-block mt-4 text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/80 border-b border-primary-foreground/40 pb-0.5 group-hover:border-primary-foreground transition-colors">
                  Discover
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
