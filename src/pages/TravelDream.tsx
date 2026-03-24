import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  Globe,
  Heart,
  Compass,
  Camera,
  Utensils,
  Mountain,
  Waves,
  TreePine,
  Sun,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const dreamHero =
  "https://images.pexels.com/photos/18824171/pexels-photo-18824171.jpeg?auto=compress&cs=tinysrgb&w=1920";
const dreamAfrica =
  "https://images.pexels.com/photos/34214/africa-landscape-sunset-nature.jpg?auto=compress&cs=tinysrgb&w=1600";
const dreamAsia =
  "https://images.pexels.com/photos/4112948/pexels-photo-4112948.jpeg?auto=compress&cs=tinysrgb&w=1600";
const dreamSouthAmerica =
  "https://images.pexels.com/photos/2827744/pexels-photo-2827744.jpeg?auto=compress&cs=tinysrgb&w=1600";

const STEPS = [
  {
    num: 1,
    title: "Where to?",
    desc: "Choose your dream destination",
    icon: Compass,
  },
  {
    num: 2,
    title: "With Who?",
    desc: "Select your travel companions",
    icon: Users,
  },
  {
    num: 3,
    title: "Your Bucketlist",
    desc: "Tick off your must-dos",
    icon: Star,
  },
];

const destinations = [
  {
    id: "africa",
    name: "Africa",
    subtitle: "Safaris, sunsets & soul",
    img: dreamAfrica,
  },
  {
    id: "asia",
    name: "Asia",
    subtitle: "Temples, trails & tranquility",
    img: dreamAsia,
  },
  {
    id: "south-america",
    name: "South America",
    subtitle: "Mountains, magic & more",
    img: dreamSouthAmerica,
  },
];

const travellerTypes = [
  { id: "solo", label: "Solo", icon: "🧭", desc: "Just me, myself and I" },
  {
    id: "couple",
    label: "Couple",
    icon: "💑",
    desc: "A romantic escape for two",
  },
  { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦", desc: "Fun for all ages" },
  {
    id: "friends",
    label: "Friends",
    icon: "👥",
    desc: "Adventures with your crew",
  },
];

const travelPersonas = [
  {
    id: "adventurer",
    label: "The Adventurer",
    icon: Mountain,
    desc: "Thrill-seeker at heart",
  },
  {
    id: "relaxer",
    label: "The Relaxer",
    icon: Waves,
    desc: "Beach days & spa vibes",
  },
  {
    id: "culture",
    label: "The Culture Seeker",
    icon: Camera,
    desc: "Immerse in local life",
  },
  {
    id: "foodie",
    label: "The Foodie",
    icon: Utensils,
    desc: "Eat your way around the world",
  },
];

const bucketlistItems = [
  { id: "safari", label: "Go on a safari", icon: "🦁" },
  { id: "northern-lights", label: "See the northern lights", icon: "🌌" },
  { id: "scuba", label: "Scuba dive a coral reef", icon: "🤿" },
  { id: "volcano", label: "Hike an active volcano", icon: "🌋" },
  { id: "train", label: "Ride a scenic train", icon: "🚂" },
  { id: "floating-market", label: "Visit a floating market", icon: "🛶" },
  { id: "hot-air", label: "Hot air balloon ride", icon: "🎈" },
  { id: "stargazing", label: "Stargazing in the desert", icon: "⭐" },
  { id: "waterfall", label: "Swim under a waterfall", icon: "💧" },
  { id: "local-cooking", label: "Take a local cooking class", icon: "👨‍🍳" },
  { id: "ancient-ruins", label: "Explore ancient ruins", icon: "🏛️" },
  { id: "wildlife", label: "Spot rare wildlife", icon: "🐘" },
];

const TravelDream = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null,
  );
  const [selectedTravellerType, setSelectedTravellerType] = useState<
    string | null
  >(null);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [selectedBucketlist, setSelectedBucketlist] = useState<string[]>([]);

  const toggleBucketlist = (id: string) => {
    setSelectedBucketlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return !!selectedDestination;
    if (currentStep === 2) return !!selectedTravellerType;
    if (currentStep === 3) return selectedBucketlist.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-foreground text-primary-foreground">
      {/* Intro / Landing */}
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            {/* Hero */}
            <div className="relative h-[70vh] w-full overflow-hidden">
              <img
                src={dreamHero}
                alt="Luxury safari camp at dusk"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-overlay" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
                >
                  YOUR
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-normal"
                >
                  Travel Dream
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 text-sm font-body tracking-[0.2em] uppercase text-primary-foreground/70"
                >
                  Start Building Your Dream Board
                </motion.p>
              </div>
            </div>

            {/* Intro text */}
            <div className="max-w-3xl mx-auto px-6 py-16 text-center">
              <p className="font-body text-lg leading-relaxed text-primary-foreground/80">
                There are two kinds of traveller in this world. The kind who
                look for the next travel hot spot and the kind who seek the
                unexpected. Well, the good news is that you <em>can</em> travel
                the world better.
              </p>
              <h3 className="font-display text-2xl mt-12 mb-8 text-primary-foreground/90">
                You have to spend time to make time
              </h3>
              <p className="font-body text-primary-foreground/60 mb-12">
                A journey starts with a dream…and a plan. You're just 3 easy
                (and fun) steps away from creating your ideal Travel Dream
                Board.
              </p>
            </div>

            {/* Steps overview */}
            <div className="max-w-4xl mx-auto px-6 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {STEPS.map((step) => (
                  <div key={step.num} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-primary-foreground/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                    <p className="text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">
                      Step {step.num}
                    </p>
                    <h4 className="font-display text-xl mb-2">{step.title}</h4>
                    <p className="text-sm font-body text-primary-foreground/60">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pb-20">
              <p className="text-sm font-body text-primary-foreground/50 mb-4 tracking-wider uppercase">
                Continue to Step 1
              </p>
              <p className="text-sm font-body text-primary-foreground/40 mb-6">
                Select which part of the planet you wish to explore
              </p>
              <button
                onClick={() => setCurrentStep(1)}
                className="inline-block border border-accent bg-accent text-accent-foreground px-10 py-3 text-sm font-body tracking-widest uppercase hover:bg-accent/90 transition-all"
              >
                Go
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 1: Where to? */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="min-h-screen px-6 py-24"
          >
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
                Step 1
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-3">
                Where are you dreaming of travelling?
              </h2>
              <p className="font-body text-primary-foreground/60 mb-12">
                Begin by choosing which part of the world inspires you
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestination(dest.id)}
                    className={`group relative overflow-hidden rounded-sm aspect-[4/3] transition-all duration-300 ${
                      selectedDestination === dest.id
                        ? "ring-2 ring-accent ring-offset-2 ring-offset-foreground scale-[1.02]"
                        : "hover:scale-[1.02]"
                    }`}
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 card-overlay" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left">
                      <h3 className="font-display text-2xl text-primary-foreground">
                        {dest.name}
                      </h3>
                      <p className="font-body text-sm text-primary-foreground/70 mt-1">
                        {dest.subtitle}
                      </p>
                    </div>
                    {selectedDestination === dest.id && (
                      <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Globe className="w-4 h-4 text-accent-foreground" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <StepNavigation
                step={1}
                canProceed={canProceed()}
                onBack={() => setCurrentStep(0)}
                onNext={() => setCurrentStep(2)}
                backLabel="Back to start"
              />

              <StepIndicator currentStep={1} />
            </div>
          </motion.div>
        )}

        {/* Step 2: With Who? */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="min-h-screen px-6 py-24"
          >
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
                Step 2
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-3">
                Who are you travelling with?
              </h2>
              <p className="font-body text-primary-foreground/60 mb-12">
                Select your traveller type
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {travellerTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTravellerType(type.id)}
                    className={`p-6 rounded-sm border text-center transition-all duration-300 ${
                      selectedTravellerType === type.id
                        ? "border-accent bg-accent/10"
                        : "border-primary-foreground/10 hover:border-primary-foreground/30"
                    }`}
                  >
                    <span className="text-3xl block mb-3">{type.icon}</span>
                    <h4 className="font-display text-lg mb-1">{type.label}</h4>
                    <p className="text-xs font-body text-primary-foreground/50">
                      {type.desc}
                    </p>
                  </button>
                ))}
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-center mb-3">
                What kind of traveller are you?
              </h3>
              <p className="font-body text-primary-foreground/60 text-center mb-10">
                Choose a travel persona that's most like you
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {travelPersonas.map((persona) => (
                  <button
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona.id)}
                    className={`p-6 rounded-sm border text-center transition-all duration-300 ${
                      selectedPersona === persona.id
                        ? "border-accent bg-accent/10"
                        : "border-primary-foreground/10 hover:border-primary-foreground/30"
                    }`}
                  >
                    <persona.icon
                      className={`w-8 h-8 mx-auto mb-3 ${selectedPersona === persona.id ? "text-accent" : "text-primary-foreground/60"}`}
                    />
                    <h4 className="font-display text-base mb-1">
                      {persona.label}
                    </h4>
                    <p className="text-xs font-body text-primary-foreground/50">
                      {persona.desc}
                    </p>
                  </button>
                ))}
              </div>

              <StepNavigation
                step={2}
                canProceed={canProceed()}
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
                backLabel="Back to Step 1"
              />

              <StepIndicator currentStep={2} />
            </div>
          </motion.div>
        )}

        {/* Step 3: Bucketlist */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="min-h-screen px-6 py-24"
          >
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-body tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
                Step 3
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-3">
                Your Bucketlist
              </h2>
              <p className="font-body text-primary-foreground/60 mb-12">
                Tick off your bucket list must-dos
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                {bucketlistItems.map((item) => {
                  const selected = selectedBucketlist.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleBucketlist(item.id)}
                      className={`p-5 rounded-sm border text-left transition-all duration-300 ${
                        selected
                          ? "border-accent bg-accent/10"
                          : "border-primary-foreground/10 hover:border-primary-foreground/30"
                      }`}
                    >
                      <span className="text-2xl block mb-3">{item.icon}</span>
                      <p className="font-body text-sm">{item.label}</p>
                      {selected && (
                        <div className="mt-2">
                          <Heart className="w-4 h-4 text-accent fill-accent" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <StepNavigation
                step={3}
                canProceed={canProceed()}
                onBack={() => setCurrentStep(2)}
                onNext={() => {
                  // Could navigate to a summary or back home
                  navigate("/");
                }}
                backLabel="Back to Step 2"
                nextLabel="Complete Your Dream"
              />

              <StepIndicator currentStep={3} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StepNavigation = ({
  step,
  canProceed,
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel,
}: {
  step: number;
  canProceed: boolean;
  onBack: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel?: string;
}) => (
  <div className="flex items-center justify-center gap-8 mb-16">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-sm font-body text-accent hover:text-accent/80 transition-colors"
    >
      <ChevronLeft className="w-4 h-4" />
      {backLabel}
    </button>
    <button
      onClick={onNext}
      disabled={!canProceed}
      className={`flex items-center gap-2 px-8 py-3 text-sm font-body tracking-widest uppercase transition-all ${
        canProceed
          ? "bg-accent text-accent-foreground hover:bg-accent/90"
          : "bg-primary-foreground/10 text-primary-foreground/30 cursor-not-allowed"
      }`}
    >
      {nextLabel || `Continue To Step ${step + 1}`}
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
  <div className="border-t border-primary-foreground/10 pt-12">
    <p className="text-center font-body text-sm text-primary-foreground/40 mb-8 tracking-wider">
      Your Travel Dream
    </p>
    <div className="flex justify-center gap-12 md:gap-16">
      {STEPS.map((step) => (
        <div key={step.num} className="text-center">
          <div
            className={`w-12 h-12 mx-auto mb-3 rounded-full border flex items-center justify-center ${
              step.num === currentStep
                ? "border-accent"
                : step.num < currentStep
                  ? "border-primary-foreground/40"
                  : "border-primary-foreground/15"
            }`}
          >
            <step.icon
              className={`w-5 h-5 ${
                step.num === currentStep
                  ? "text-accent"
                  : step.num < currentStep
                    ? "text-primary-foreground/60"
                    : "text-primary-foreground/20"
              }`}
            />
          </div>
          <p className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-foreground/40">
            Step {step.num}
          </p>
          <p
            className={`font-display text-sm mt-1 ${step.num === currentStep ? "text-primary-foreground" : "text-primary-foreground/40"}`}
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TravelDream;
