import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredDestinations } from "@/data/destinationContent";
import type { DestinationCardData } from "@/types/destination";

const homepageDestinations = featuredDestinations.slice(0, 7);

const DestinationLoopVideo = ({ videos }: { videos: string[] }) => {
  const playlist = useMemo(
    () => videos.filter((video) => video && video.trim().length > 0),
    [videos],
  );

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const playNextVideo = () => {
    if (playlist.length === 0) {
      return;
    }

    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setVideoLoaded(false);
  };

  useEffect(() => {
    if (videoLoaded || playlist.length === 0) {
      return;
    }

    // If a clip stalls or has an unsupported codec, advance to the next source.
    const timeoutId = window.setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
      setVideoLoaded(false);
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentVideoIndex, videoLoaded, playlist.length]);

  return (
    <>
      {playlist.length > 0 && (
        <video
          key={playlist[currentVideoIndex]}
          src={playlist[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={playNextVideo}
          onLoadedData={() => setVideoLoaded(true)}
          onError={playNextVideo}
          onStalled={playNextVideo}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {!videoLoaded && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-400 to-slate-600" />
      )}

      {playlist.length > 1 && (
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            playNextVideo();
          }}
          className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.35)] backdrop-blur-md transition hover:bg-white/18 hover:shadow-[0_0_26px_rgba(255,255,255,0.55)]"
          aria-label="Skip to next video"
        >
          <SkipForward className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

const DestinationCard = ({ destination }: { destination: DestinationCardData }) => {
  const { preview } = destination;

  const content = (
    <>
      {preview.type === "video-loop" ? (
        <DestinationLoopVideo videos={preview.sources} />
      ) : preview.type === "image" ? (
        <img
          src={preview.src}
          alt={preview.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : null}
      <div className="absolute inset-0 card-overlay" />
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 backdrop-blur-[1px]">
        <h3 className="mb-1 font-display text-2xl font-semibold text-primary-foreground">
          {destination.name}
        </h3>
        <p className="mb-2 font-display text-sm italic text-primary-foreground/90">
          {destination.subtitle}
        </p>
        <p className="mb-3 font-body text-sm tracking-wide text-primary-foreground/75">
          {destination.description}
        </p>
        <span className="inline-block border-b border-primary-foreground/40 pb-0.5 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors group-hover:border-primary-foreground">
          {destination.cta}
        </span>
      </div>
    </>
  );

  const className =
    "group relative mx-4 block h-96 w-80 flex-shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-[1px] transition-all duration-300 hover:bg-white/15 hover:shadow-3xl hover:shadow-white/10 first:ml-0 last:mr-24";

  if (destination.route) {
    return (
      <Link to={destination.route} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
};

const DestinationsSection = () => {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: "left" | "right") => {
    if (!cardsContainerRef.current) {
      return;
    }

    cardsContainerRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-secondary px-6 py-24 lg:px-16"
    >
      <button
        type="button"
        onClick={() => scrollCards("left")}
        aria-label="Scroll destinations left"
        className="absolute left-0 top-1/2 z-30 flex h-44 w-12 -translate-y-1/2 items-center justify-center rounded-r-2xl bg-[#10222e]/90 text-white transition-all duration-300 hover:scale-105 hover:bg-[#10222e]"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={() => scrollCards("right")}
        aria-label="Scroll destinations right"
        className="absolute right-0 top-1/2 z-30 flex h-44 w-12 -translate-y-1/2 items-center justify-center rounded-l-2xl bg-[#10222e]/90 text-white transition-all duration-300 hover:scale-105 hover:bg-[#10222e]"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center font-display text-3xl text-foreground md:text-5xl"
        >
          Browse our destinations
        </motion.h2>

        <div className="relative w-full">
          <div
            ref={cardsContainerRef}
            className="flex overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {homepageDestinations.map((destination, index) => (
              <motion.div
                key={`${destination.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
