import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideoUrl } from "@/data/videoUrlMap";

const optimizeCloudinaryVideoUrl = (url: string, width: number) => {
  if (!url.includes("/video/upload/")) {
    return url;
  }

  return url.replace(
    "/video/upload/",
    `/video/upload/f_auto,vc_auto,q_auto:good,w_${width}/`,
  );
};

const getCloudinaryPosterUrl = (videoUrl: string) => {
  if (!videoUrl.includes("/video/upload/")) {
    return undefined;
  }

  const transformed = videoUrl
    .replace("/video/upload/", "/video/upload/f_auto,q_auto,w_1600,so_0/")
    .replace(/\.(mp4|mov|webm|m4v|3gp)(\?.*)?$/i, ".jpg$2");

  return transformed;
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = useMemo(() => {
    const rawSources = [
      getVideoUrl("heroVideo1"),
      getVideoUrl("heroVideo2"),
      getVideoUrl("heroVideo3"),
    ].filter((video) => video.length > 0);

    return rawSources.map((source, index) =>
      optimizeCloudinaryVideoUrl(source, index === 0 ? 1920 : 1600),
    );
  }, []);

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

  useEffect(() => {
    if (videoSources.length === 0) {
      return;
    }

    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "video";
    preloadLink.href = videoSources[0];
    preloadLink.setAttribute("fetchpriority", "high");
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [videoSources]);

  return (
    <section
      id="hero-section"
      className="relative h-[100svh] w-full overflow-hidden"
    >
      {videoSources.length > 0 && (
        <video
          ref={videoRef}
          key={currentVideoIndex}
          src={videoSources[currentVideoIndex]}
          poster={getCloudinaryPosterUrl(videoSources[currentVideoIndex])}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={skipToNextVideo}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      <div className="absolute right-3 top-1/2 z-30 -translate-y-1/2 sm:right-6">
        <button
          onClick={skipToNextVideo}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-background shadow-none transition-all duration-200 hover:scale-110 hover:text-primary-foreground sm:h-14 sm:w-14"
          aria-label="Skip to next video"
        >
          <span className="text-3xl font-bold">››</span>
        </button>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24 lg:px-16">
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
          className="max-w-[92%] font-display text-4xl font-normal leading-tight text-primary-foreground sm:max-w-3xl sm:text-5xl md:text-7xl lg:text-8xl"
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
