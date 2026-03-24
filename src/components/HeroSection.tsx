import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideoUrl } from "@/data/videoUrlMap";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = [
    getVideoUrl("heroVideo1"),
    getVideoUrl("heroVideo2"),
    getVideoUrl("heroVideo3"),
  ].filter((video) => video.length > 0);

  const skipToNextVideo = () => {
    if (videoSources.length === 0) {
      return;
    }

    setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
  };

  // No manual addEventListener needed: onEnded handles switching.

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || videoSources.length === 0) return;

    // Adjust playback speed for the second clip (2x)
    if (currentVideoIndex === 1) {
      videoEl.playbackRate = 2.0;
    } else {
      videoEl.playbackRate = 1.0;
    }

    videoEl.load();
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // autoplay can be blocked; keeping muted ensures most browsers allow it.
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      });
    }
  }, [currentVideoIndex, videoSources.length]);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {videoSources.length > 0 && (
        <video
          ref={videoRef}
          key={currentVideoIndex}
          src={videoSources[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={skipToNextVideo}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      <div className="absolute right-6 top-1/2 z-30 -translate-y-1/2">
        <button
          onClick={skipToNextVideo}
          className="flex h-14 w-14 items-center justify-center rounded-full text-background bg-transparent shadow-none transition-all duration-200 hover:scale-110 hover:text-primary-foreground"
          aria-label="Skip to next video"
        >
          <span className="text-3xl font-bold">››</span>
        </button>
      </div>

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
          <button
            onClick={() => navigate("/travel-dream")}
            className="inline-block border border-primary-foreground/60 text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-primary-foreground/10 transition-all"
          >
            Start With Where
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
