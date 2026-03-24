import { Facebook, Instagram, Twitter } from "lucide-react";
import dataGlacierLogo from "@/assets/Black.svg";
import brandLogo from "@/assets/DP_logo-Photoroom.png";

export const siteConfig = {
  brandName: "The Travel Frenzy",
  siteLabel: "thetravelfrenzy.com",
  supportEmail: "hello@thetravelfrenzy.com",
  copyrightLabel: "© 2026 The Travel Frenzy. All rights reserved.",
  headingHint: "It's company name click where you actually need to ;)",
  brandLogo,
  dataGlacierLogo,
} as const;

export const destinationNavigation = [
  { label: "Ladakh", to: "/ladakh", available: true },
  { label: "Himanchal Pradesh", to: "/himanchal-pradesh", available: true },
  { label: "Varanasi", to: "/#destinations", available: false },
  { label: "Jim Corbett", to: "/#destinations", available: false },
  { label: "Jaipur", to: "/#destinations", available: false },
  { label: "Delhi", to: "/#destinations", available: false },
  { label: "Agra", to: "/#destinations", available: false },
] as const;

export const primaryNavigation = [
  { label: "Home", to: "/" },
  { label: "Experiences", to: "/#experiences" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
] as const;

export const footerExploreLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Our Story", href: "#about" },
  { label: "Journal", href: "#" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
] as const;
