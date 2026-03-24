import type { LucideIcon } from "lucide-react";

export interface VideoLoopPreview {
  type: "video-loop";
  sources: string[];
}

export interface ImagePreview {
  type: "image";
  src: string;
  alt: string;
}

export type DestinationPreview = VideoLoopPreview | ImagePreview;

export interface DestinationCardData {
  name: string;
  subtitle: string;
  description: string;
  cta: string;
  route?: string;
  preview: DestinationPreview;
}

export interface HeroTheme {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface IconDescriptionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TopPlaceItem {
  name: string;
  video: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  video: string;
}

export interface ItineraryItem {
  title: string;
  plan: string[];
}

export interface StayItem {
  title: string;
  description: string;
  icon: LucideIcon;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
}

export interface ResponsibleTravelItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface BestTimeItem {
  months: string;
  info: string;
}

export interface DestinationPageData {
  slug: string;
  hero: {
    id: string;
    videos: string[];
    title: string;
    subtitle: string;
    ctaLabel: string;
    themes: HeroTheme[];
  };
  overview: {
    id: string;
    title: string;
    description: string;
    videos: string[];
  };
  reasonsTitle: string;
  reasonsToVisit: IconDescriptionItem[];
  topPlacesTitle: string;
  topPlacesGridClassName: string;
  topPlaces: TopPlaceItem[];
  experiencesTitle: string;
  experiences: ExperienceItem[];
  itinerariesTitle: string;
  itineraries: ItineraryItem[];
  staysTitle: string;
  stays: StayItem[];
  responsibleTravelTitle: string;
  responsibleTravel: ResponsibleTravelItem[];
  bestTimeTitle: string;
  bestTime: BestTimeItem[];
  cta: {
    eyebrow: string;
    title: string;
    buttonLabel: string;
    media: {
      type: "image" | "video";
      src: string;
      alt: string;
    };
  };
}
