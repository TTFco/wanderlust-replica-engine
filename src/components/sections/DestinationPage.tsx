import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MoonStar } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import { fadeInUp } from "@/lib/animations";
import type { DestinationPageData, StayItem } from "@/types/destination";

interface DestinationPageProps {
  page: DestinationPageData;
}

const DestinationPage = ({ page }: DestinationPageProps) => {
  const [currentHeroVideoIndex, setCurrentHeroVideoIndex] = useState(0);
  const [currentOverviewVideoIndex, setCurrentOverviewVideoIndex] = useState(0);
  const [isHeroVideoReady, setIsHeroVideoReady] = useState(false);
  const [heroLoadProgress, setHeroLoadProgress] = useState(10);
  const overviewSectionRef = useRef<HTMLElement | null>(null);
  const heroProgressIntervalRef = useRef<number | null>(null);
  const activeHeroTheme =
    page.hero.themes[currentHeroVideoIndex] ?? page.hero.themes[0];

  useEffect(() => {
    setIsHeroVideoReady(false);
    setHeroLoadProgress(10);

    if (heroProgressIntervalRef.current !== null) {
      window.clearInterval(heroProgressIntervalRef.current);
    }

    heroProgressIntervalRef.current = window.setInterval(() => {
      setHeroLoadProgress((previous) => Math.min(previous + 3, 92));
    }, 90);

    return () => {
      if (heroProgressIntervalRef.current !== null) {
        window.clearInterval(heroProgressIntervalRef.current);
      }
    };
  }, [currentHeroVideoIndex]);

  const handleHeroVideoReady = () => {
    setIsHeroVideoReady(true);
    setHeroLoadProgress(100);
    if (heroProgressIntervalRef.current !== null) {
      window.clearInterval(heroProgressIntervalRef.current);
    }
  };

  const playNextHeroVideo = () => {
    setCurrentHeroVideoIndex(
      (prevIndex) => (prevIndex + 1) % page.hero.videos.length,
    );
  };

  const playNextOverviewVideo = () => {
    setCurrentOverviewVideoIndex(
      (prevIndex) => (prevIndex + 1) % page.overview.videos.length,
    );
  };

  const scrollToOverview = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    overviewSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SiteLayout>
      <section
        className="relative flex min-h-[100svh] items-end overflow-hidden"
        id={page.hero.id}
      >
        <div className="absolute inset-0 bg-[#0e1b23]" />
        <video
          key={page.hero.videos[currentHeroVideoIndex]}
          src={page.hero.videos[currentHeroVideoIndex]}
          autoPlay
          muted
          preload="auto"
          playsInline
          onEnded={playNextHeroVideo}
          onLoadedData={handleHeroVideoReady}
          className={`absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-500 ${
            isHeroVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {!isHeroVideoReady ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0e1b23]/70 backdrop-blur-sm">
            <div className="w-[78%] max-w-xl">
              <div className="relative h-3 overflow-hidden rounded-full border border-white/25 bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent transition-all duration-100"
                  style={{ width: `${heroLoadProgress}%` }}
                />
                <span
                  className="absolute top-[-1.65rem] text-xs font-body uppercase tracking-[0.22em] text-white/90 transition-all duration-100"
                  style={{ left: `calc(${heroLoadProgress}% - 1.4rem)` }}
                >
                  Wait
                </span>
              </div>
            </div>
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/15" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 container px-4 pb-14 sm:px-6 sm:pb-20 lg:px-16 lg:pb-28"
        >
          <p
            className={`mb-3 font-body text-[11px] uppercase tracking-[0.24em] sm:mb-4 sm:text-xs sm:tracking-[0.35em] ${activeHeroTheme.eyebrow}`}
          >
            thetravelfrenzy.com presents
          </p>
          <h1
            className={`mb-5 max-w-4xl font-display text-3xl leading-tight transition-colors duration-500 sm:text-4xl md:text-6xl lg:text-7xl ${activeHeroTheme.title}`}
          >
            {page.hero.title}
          </h1>
          <p
            className={`mb-7 max-w-2xl font-body text-sm transition-colors duration-500 sm:text-base md:text-xl ${activeHeroTheme.subtitle}`}
          >
            {page.hero.subtitle}
          </p>
          <a
            href={`#${page.overview.id}`}
            onClick={scrollToOverview}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-xs uppercase tracking-[0.15em] transition duration-300 sm:px-7 sm:py-3 sm:text-sm sm:tracking-[0.22em] ${activeHeroTheme.cta}`}
          >
            {page.hero.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <section
        id={page.overview.id}
        ref={overviewSectionRef}
        className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeInUp}>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.28em] text-accent">
              Overview
            </p>
            <h2 className="mb-5 font-display text-2xl sm:text-3xl md:text-5xl">
              {page.overview.title}
            </h2>
            <p className="font-body text-sm leading-7 text-foreground/80 sm:text-base md:text-lg md:leading-8">
              {page.overview.description}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative overflow-hidden rounded-3xl border border-border"
          >
            <video
              key={page.overview.videos[currentOverviewVideoIndex]}
              src={page.overview.videos[currentOverviewVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={playNextOverviewVideo}
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] lg:h-[520px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.reasonsTitle}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {page.reasonsToVisit.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-[1px] transition hover:-translate-y-1 hover:bg-card"
                >
                  <Icon className="mb-4 h-7 w-7 text-accent" />
                  <h3 className="mb-3 font-display text-xl">{item.title}</h3>
                  <p className="font-body text-sm leading-7 text-foreground/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.topPlacesTitle}
          </motion.h2>
          <div className={page.topPlacesGridClassName}>
            {page.topPlaces.map((place, index) => (
              <motion.article
                key={place.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                className="group relative h-64 overflow-hidden rounded-2xl border border-border sm:h-80"
              >
                <video
                  src={place.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-display text-xl text-primary-foreground sm:bottom-5 sm:left-5 sm:text-2xl">
                  {place.name}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.experiencesTitle}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {page.experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card/80"
              >
                <div className="h-44 overflow-hidden sm:h-52">
                  <video
                    src={experience.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-display text-xl sm:text-2xl">
                    {experience.title}
                  </h3>
                  <p className="font-body text-sm leading-7 text-foreground/70">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.itinerariesTitle}
          </motion.h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {page.itineraries.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="rounded-3xl border border-border bg-card/80 p-5 sm:p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-2xl sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.plan.map((line) => (
                    <li
                      key={line}
                      className="font-body text-sm leading-7 text-foreground/75"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.staysTitle}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {page.stays.map((stay, index) => (
              <StayCard key={stay.title} item={stay} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-14 sm:text-3xl md:text-5xl"
          >
            {page.responsibleTravelTitle}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {page.responsibleTravel.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="rounded-2xl border border-border bg-card/80 p-5 text-center sm:p-7"
                >
                  <Icon className="mx-auto mb-4 h-8 w-8 text-accent" />
                  <h3 className="mb-3 font-display text-xl sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-7 text-foreground/70">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="container">
          <motion.h2
            {...fadeInUp}
            className="mb-10 text-center font-display text-2xl sm:mb-12 sm:text-3xl md:text-5xl"
          >
            {page.bestTimeTitle}
          </motion.h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {page.bestTime.map((period) => (
              <motion.div
                key={period.months}
                {...fadeInUp}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card/80 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:justify-between"
              >
                <h3 className="font-display text-xl text-accent sm:text-2xl">
                  {period.months}
                </h3>
                <p className="font-body text-sm text-foreground/70 md:max-w-2xl">
                  {period.info}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 pb-16 sm:px-6 sm:pb-24 lg:px-16">
        <motion.div
          {...fadeInUp}
          className="container relative overflow-hidden rounded-3xl border border-border"
        >
          {page.cta.media.type === "image" ? (
            <img
              src={page.cta.media.src}
              alt={page.cta.media.alt}
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
          ) : (
            <video
              src={page.cta.media.src}
              autoPlay
              muted
              preload="none"
              loop
              playsInline
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-16">
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.2em] text-white/70 sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {page.cta.eyebrow}
            </p>
            <h2 className="mb-5 max-w-2xl font-display text-3xl sm:text-4xl md:text-6xl">
              {page.cta.title}
            </h2>
            <button className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-xs uppercase tracking-[0.14em] text-accent-foreground transition hover:scale-[1.02] hover:brightness-110 sm:px-7 sm:text-sm sm:tracking-[0.2em]">
              {page.cta.buttonLabel}
              <MoonStar className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

interface StayCardProps {
  item: StayItem;
  index: number;
}

const StayCard = ({ item, index }: StayCardProps) => {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.09, duration: 0.6 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card/80"
    >
      <div className="h-48 overflow-hidden sm:h-60">
        {item.media.type === "image" ? (
          <img
            src={item.media.src}
            alt={item.media.alt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <video
            src={item.media.src}
            autoPlay
            muted
            preload="none"
            loop
            playsInline
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mb-2 font-display text-xl sm:text-2xl">{item.title}</h3>
        <p className="font-body text-sm leading-7 text-foreground/70">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
};

export default DestinationPage;
