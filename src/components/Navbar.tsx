import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Info,
  Mail,
  MapPin,
  Menu,
  Search,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  destinationNavigation,
  primaryNavigation,
  siteConfig,
} from "@/config/site";
import { extractSectionId, navigateToSection } from "@/lib/navigation";

const desktopIcons = {
  Home,
  Experiences: Star,
  About: Info,
  Contact: Mail,
} as const;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [drawerDestinationsOpen, setDrawerDestinationsOpen] = useState(true);
  const [showHeadingBubble, setShowHeadingBubble] = useState(false);
  const lastScrollY = useRef(0);
  const headingBubbleTimeoutRef = useRef<number | null>(null);

  const scrollHomepageHeroIntoView = () => {
    const hero = document.getElementById("hero-section");

    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToHomepageHero = () => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollHomepageHeroIntoView, 60);
      return;
    }

    scrollHomepageHeroIntoView();
  };

  const handlePrimaryNavigation = (href: string) => {
    if (href === "/") {
      goToHomepageHero();
      return;
    }

    navigateToSection({
      href,
      currentPathname: location.pathname,
      navigate,
    });
  };

  const showHeadingHint = () => {
    setShowHeadingBubble(true);
    if (headingBubbleTimeoutRef.current !== null) {
      window.clearTimeout(headingBubbleTimeoutRef.current);
    }
    headingBubbleTimeoutRef.current = window.setTimeout(() => {
      setShowHeadingBubble(false);
    }, 3000);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const hero = document.getElementById("hero-section");
      const heroHeight = hero?.offsetHeight || window.innerHeight;
      setScrolled(currentScrollY >= heroHeight * 0.9);

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (headingBubbleTimeoutRef.current !== null) {
        window.clearTimeout(headingBubbleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-white" : "bg-transparent"}`}
      >
        <div className="container flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-12">
          <div className="relative flex items-center gap-2 sm:gap-4">
            <div
              className="flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                backgroundColor: scrolled ? "#10222e" : "transparent",
                width: "56px",
                height: "56px",
              }}
            >
              <img
                src={siteConfig.brandLogo}
                alt={`${siteConfig.brandName} logo`}
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
              />
            </div>
            <button
              type="button"
              onClick={showHeadingHint}
              className={`max-w-[42vw] truncate font-header text-2xl font-semibold tracking-wide sm:max-w-none sm:text-4xl ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <span className={scrolled ? "text-black" : "text-white"}>
                {siteConfig.brandName}
              </span>
            </button>

            <AnimatePresence>
              {showHeadingBubble && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full z-50 mt-2 hidden max-w-[80vw] whitespace-nowrap rounded-xl border border-white/35 bg-white/90 px-3 py-2 text-xs font-medium text-[#10222e] shadow-xl sm:left-20 sm:block"
                >
                  {siteConfig.headingHint}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className={`${scrolled ? "hidden" : "hidden md:flex"} items-center gap-8`}
          >
            <button
              type="button"
              onClick={() => handlePrimaryNavigation(primaryNavigation[0].to)}
              className={`text-lg font-body font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {primaryNavigation[0].label}
            </button>

            <div className="relative">
              <div
                onMouseEnter={() => setDestinationsOpen(true)}
                onMouseLeave={() => setDestinationsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-2 text-lg font-body font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Destinations
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${destinationsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {destinationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-white/30 bg-white/35 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="border-b border-white/35 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#10222e]/70">
                          Destinations
                        </p>
                      </div>
                      <div className="p-2">
                        {destinationNavigation.map((destination) => (
                          <Link
                            key={destination.label}
                            to={destination.to}
                            onClick={() => setDestinationsOpen(false)}
                            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[#10222e] transition hover:bg-white/55"
                          >
                            <span>{destination.label}</span>
                            <span className="text-[10px] uppercase tracking-[0.18em] text-[#10222e]/50">
                              {destination.available ? "Open" : "Soon"}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {primaryNavigation.slice(1).map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handlePrimaryNavigation(link.to)}
                className={`text-lg font-body font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Search
              className={`hidden h-7 w-7 cursor-pointer transition-colors sm:block ${
                scrolled ? "text-black" : "text-white"
              }`}
            />

            <button
              onClick={() => setMenuOpen((current) => !current)}
              className={`rounded-md p-2 text-white shadow-sm transition-all duration-200 ${
                scrolled ? "bg-[#10222e] md:flex" : "hidden"
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              initial={{ opacity: 0, scale: 0.35, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.35, y: 8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 1, originY: 0 }}
              className="fixed right-3 top-20 z-50 w-[calc(100vw-1.5rem)] max-w-[320px] overflow-hidden rounded-2xl border border-white/25 bg-white/12 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-full flex-col p-4">
                <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#10222e" }}
                    >
                      <img
                        src={siteConfig.brandLogo}
                        alt="logo"
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-white/70">
                      Navigation
                    </span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="rounded-full p-1.5 text-white/70 transition hover:bg-white/20 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <nav className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        handlePrimaryNavigation("/");
                        setMenuOpen(false);
                      }}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-white transition-all duration-150 hover:bg-white/15"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-white/10"
                          style={{ backgroundColor: "rgba(16,34,46,0.5)" }}
                        >
                          <Home className="h-4 w-4 text-white/80" />
                        </span>
                        <span className="text-base font-semibold tracking-wide">
                          Home
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05, duration: 0.2 }}
                    className="rounded-xl bg-white/5"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setDrawerDestinationsOpen((current) => !current)
                      }
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-white transition-all duration-150 hover:bg-white/15"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-white/10"
                          style={{ backgroundColor: "rgba(16,34,46,0.5)" }}
                        >
                          <MapPin className="h-4 w-4 text-white/80" />
                        </span>
                        <span className="text-base font-semibold tracking-wide">
                          Destinations
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-white/55 transition-transform ${drawerDestinationsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {drawerDestinationsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden px-3 pb-3"
                        >
                          <div className="space-y-1 border-t border-white/10 pt-2">
                            {destinationNavigation.map((destination) => (
                              <Link
                                key={destination.label}
                                to={destination.to}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                              >
                                <span>{destination.label}</span>
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                                  {destination.available ? "Open" : "Soon"}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {primaryNavigation.slice(1).map((link, index) => {
                    const sectionId = extractSectionId(link.to);
                    const Icon =
                      desktopIcons[link.label as keyof typeof desktopIcons];

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: (index + 2) * 0.05,
                          duration: 0.2,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            handlePrimaryNavigation(link.to);
                            setMenuOpen(false);
                          }}
                          className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-white transition-all duration-150 hover:bg-white/15"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-white/10"
                              style={{ backgroundColor: "rgba(16,34,46,0.5)" }}
                            >
                              <Icon className="h-4 w-4 text-white/80" />
                            </span>
                            <span className="text-base font-semibold tracking-wide">
                              {sectionId ? link.label : link.to}
                            </span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-4 border-t border-white/20 pt-4">
                  <p className="text-center text-xs uppercase tracking-widest text-white/40">
                    {siteConfig.brandName}
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
