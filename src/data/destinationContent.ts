import {
  Bike,
  Building2,
  CalendarDays,
  Compass,
  Flower2,
  Hotel,
  Leaf,
  MoonStar,
  Mountain,
  ShieldCheck,
  Sparkles,
  Tent,
  Trees,
  Waves,
} from "lucide-react";
import type {
  DestinationCardData,
  DestinationPageData,
} from "@/types/destination";
import { getVideoUrl } from "@/data/videoUrlMap";

const africaImg =
  "https://images.pexels.com/photos/34214/africa-landscape-sunset-nature.jpg?auto=compress&cs=tinysrgb&w=1600";
const asiaImg =
  "https://images.pexels.com/photos/4112948/pexels-photo-4112948.jpeg?auto=compress&cs=tinysrgb&w=1600";
const southAmericaImg =
  "https://images.pexels.com/photos/2827744/pexels-photo-2827744.jpeg?auto=compress&cs=tinysrgb&w=1600";
const europeImg =
  "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1600";

const ladakh01Video = getVideoUrl("ladakh01Video");
const ladakh02Video = getVideoUrl("ladakh02Video");
const ladakh03Video = getVideoUrl("ladakh03Video");
const varanasi01Video = getVideoUrl("varanasi01Video");
const varanasi02Video = getVideoUrl("varanasi02Video");
const varanasi03Video = getVideoUrl("varanasi03Video");
const jim01Video = getVideoUrl("jim01Video");
const jim02Video = getVideoUrl("jim02Video");
const jim03Video = getVideoUrl("jim03Video");
const jaipur01Video = getVideoUrl("jaipur01Video");
const jaipur02Video = getVideoUrl("jaipur02Video");
const jaipur03Video = getVideoUrl("jaipur03Video");
const delhi01Video = getVideoUrl("delhi01Video");
const delhi02Video = getVideoUrl("delhi02Video");
const delhi03Video = getVideoUrl("delhi03Video");
const agra01Video = getVideoUrl("agra01Video");
const agra02Video = getVideoUrl("agra02Video");
const agra03Video = getVideoUrl("agra03Video");
const ladakhHero01 = getVideoUrl("ladakhHero01");
const ladakhHero02 = getVideoUrl("ladakhHero02");
const ladakhHero03 = getVideoUrl("ladakhHero03");
const ladakhOverviewVideo01 = getVideoUrl("ladakhOverviewVideo01");
const ladakhOverviewVideo02 = getVideoUrl("ladakhOverviewVideo02");
const ladakhOverviewVideo03 = getVideoUrl("ladakhOverviewVideo03");
const lehCityVideo = getVideoUrl("lehCityVideo");
const nubraValleyVideo = getVideoUrl("nubraValleyVideo");
const pangongLakeVideo = getVideoUrl("pangongLakeVideo");
const tsoMoririVideo = getVideoUrl("tsoMoririVideo");
const khardungLaVideo = getVideoUrl("khardungLaVideo");
const bikeExpeditionsVideo = getVideoUrl("bikeExpeditionsVideo");
const lakesideCampingVideo = getVideoUrl("lakesideCampingVideo");
const monasteryTrailsVideo = getVideoUrl("monasteryTrailsVideo");
const camelSafariVideo = getVideoUrl("camelSafariVideo");
const stargazingNightsVideo = getVideoUrl("stargazingNightsVideo");
const himanchalCardVideo01 = getVideoUrl("himanchalCardVideo01");
const himanchalCardVideo02 = getVideoUrl("himanchalCardVideo02");
const himanchalCardVideo03 = getVideoUrl("himanchalCardVideo03");
const himanchalHeroVideo01 = getVideoUrl("himanchalHeroVideo01");
const himanchalHeroVideo02 = getVideoUrl("himanchalHeroVideo02");
const himanchalHeroVideo03 = getVideoUrl("himanchalHeroVideo03");
const himanchalOverviewVideo01 = getVideoUrl("himanchalOverviewVideo01");
const himanchalOverviewVideo02 = getVideoUrl("himanchalOverviewVideo02");
const himanchalOverviewVideo03 = getVideoUrl("himanchalOverviewVideo03");
const himanchalTopPlaceLahaulValleyVideo = getVideoUrl(
  "himanchalTopPlaceLahaulValleyVideo",
);
const himanchalTopPlaceZanskarValleyVideo = getVideoUrl(
  "himanchalTopPlaceZanskarValleyVideo",
);
const himanchalTopPlaceSpitiVideo = getVideoUrl("himanchalTopPlaceSpitiVideo");
const himanchalTopPlaceShimlaVideo = getVideoUrl(
  "himanchalTopPlaceShimlaVideo",
);
const himanchalTopPlaceKinnaurValleyVideo = getVideoUrl(
  "himanchalTopPlaceKinnaurValleyVideo",
);
const himanchalTopPlaceManaliVideo = getVideoUrl(
  "himanchalTopPlaceManaliVideo",
);
const himanchalExperienceHighwayDrivesVideo = getVideoUrl(
  "himanchalExperienceHighwayDrivesVideo",
);
const himanchalExperienceVillageStaysVideo = getVideoUrl(
  "himanchalExperienceVillageStaysVideo",
);
const himanchalExperienceMonasteryStopsVideo = getVideoUrl(
  "himanchalExperienceMonasteryStopsVideo",
);
const himanchalExperienceSnowAndCedarTrailsVideo = getVideoUrl(
  "himanchalExperienceSnowAndCedarTrailsVideo",
);
const himanchalExperienceStargazingEscapesVideo = getVideoUrl(
  "himanchalExperienceStargazingEscapesVideo",
);
const himanchalStayMountainRetreatsVideo = getVideoUrl(
  "himanchalStayMountainRetreatsVideo",
);
const himanchalStayRiversideCampsVideo = getVideoUrl(
  "himanchalStayRiversideCampsVideo",
);
const himanchalStayHomestaysVideo = getVideoUrl("himanchalStayHomestaysVideo");
const himanchalCtaVideo = getVideoUrl("himanchalCtaVideo");

const ctaImage =
  "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const featuredDestinations: DestinationCardData[] = [
  {
    name: "Ladakh",
    subtitle: "The Land of High Passes",
    description: "Raw, rugged, unforgettable",
    cta: "Explore",
    route: "/ladakh",
    preview: {
      type: "video-loop",
      sources: [ladakh01Video, ladakh02Video, ladakh03Video],
    },
  },
  {
    name: "Himanchal Pradesh",
    subtitle: "Valleys of the Himalaya",
    description: "Forests, valleys, and mountain roads",
    cta: "Discover",
    route: "/himanchal-pradesh",
    preview: {
      type: "video-loop",
      sources: [
        himanchalCardVideo01,
        himanchalCardVideo02,
        himanchalCardVideo03,
      ],
    },
  },
  {
    name: "Varanasi",
    subtitle: "The Eternal City",
    description: "Spiritual, intense, timeless",
    cta: "Experience",
    preview: {
      type: "video-loop",
      sources: [varanasi01Video, varanasi02Video, varanasi03Video],
    },
  },
  {
    name: "Jim Corbett",
    subtitle: "Into the Wild",
    description: "Nature in its purest form",
    cta: "Go Wild",
    preview: {
      type: "video-loop",
      sources: [jim01Video, jim02Video, jim03Video],
    },
  },
  {
    name: "Jaipur",
    subtitle: "Royal Rajasthan",
    description: "Where royalty lives on",
    cta: "Explore",
    preview: {
      type: "video-loop",
      sources: [jaipur01Video, jaipur02Video, jaipur03Video],
    },
  },
  {
    name: "Delhi",
    subtitle: "The Heart of India",
    description: "Chaos, culture, contrast",
    cta: "Dive In",
    preview: {
      type: "video-loop",
      sources: [delhi01Video, delhi02Video, delhi03Video],
    },
  },
  {
    name: "Agra",
    subtitle: "The City of Love",
    description: "Built on love, remembered forever",
    cta: "Discover",
    preview: {
      type: "video-loop",
      sources: [agra01Video, agra02Video, agra03Video],
    },
  },
  {
    name: "Africa",
    subtitle: "Safaris, sunsets & soul",
    description: "A future collection of wild luxury itineraries",
    cta: "Soon",
    preview: {
      type: "image",
      src: africaImg,
      alt: "Africa destination preview",
    },
  },
  {
    name: "Asia",
    subtitle: "Temples, trails & tranquility",
    description: "A future collection of crafted journeys across Asia",
    cta: "Soon",
    preview: { type: "image", src: asiaImg, alt: "Asia destination preview" },
  },
  {
    name: "South America",
    subtitle: "Mountains, magic & more",
    description: "A future collection of cinematic South American routes",
    cta: "Soon",
    preview: {
      type: "image",
      src: southAmericaImg,
      alt: "South America destination preview",
    },
  },
  {
    name: "Europe",
    subtitle: "Culture, coastlines & grand cities",
    description: "A future collection of elegant European escapes",
    cta: "Soon",
    preview: {
      type: "image",
      src: europeImg,
      alt: "Europe destination preview",
    },
  },
];

export const ladakhPageData: DestinationPageData = {
  slug: "ladakh",
  hero: {
    id: "ladakh-hero",
    videos: [ladakhHero01, ladakhHero02, ladakhHero03],
    title: "Ladakh - Land of High Passes",
    subtitle: "Where the mountains whisper, and silence becomes your story.",
    ctaLabel: "Explore Ladakh",
    themes: [
      {
        eyebrow: "text-amber-100/90",
        title: "text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)]",
        subtitle: "text-amber-50/95",
        cta: "border-white/35 bg-black/25 text-white hover:bg-black/40",
      },
      {
        eyebrow: "text-slate-100/90",
        title: "text-slate-50 drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]",
        subtitle: "text-slate-100/95",
        cta: "border-slate-100/45 bg-slate-900/30 text-slate-50 hover:bg-slate-900/45",
      },
      {
        eyebrow: "text-amber-100/95",
        title: "text-amber-50 drop-shadow-[0_3px_16px_rgba(0,0,0,0.65)]",
        subtitle: "text-amber-50/95",
        cta: "border-amber-100/45 bg-black/30 text-amber-50 hover:bg-black/45",
      },
    ],
  },
  overview: {
    id: "ladakh-overview",
    title: "A high-altitude epic carved in silence",
    description:
      "Ladakh is not just a destination; it is a cinematic passage through stark mountain realms, turquoise lakes, and prayer-flag horizons. Every bend in its roads reveals a frame worth pausing for, from ancient monasteries balanced on cliffs to valleys where rivers sketch silver paths through desert terrain. Here, the journey slows down and the senses sharpen.",
    videos: [
      ladakhOverviewVideo01,
      ladakhOverviewVideo02,
      ladakhOverviewVideo03,
    ],
  },
  reasonsTitle: "Why Visit Ladakh",
  reasonsToVisit: [
    {
      icon: Mountain,
      title: "Epic Landscapes",
      description:
        "Snow-clad passes, moonlike valleys, and dramatic roads that feel made for cinema.",
    },
    {
      icon: Waves,
      title: "High-Altitude Lakes",
      description:
        "Pangong and Tso Moriri mirror the sky with surreal shades of sapphire and silver.",
    },
    {
      icon: Compass,
      title: "Living Culture",
      description:
        "Monasteries, prayer flags, and warm Ladakhi hospitality shape every encounter.",
    },
    {
      icon: Bike,
      title: "Adventure Pulse",
      description:
        "From bike expeditions to mountain drives, every route is an adrenaline story.",
    },
    {
      icon: Sparkles,
      title: "Soulful Silence",
      description:
        "Clear air, open skies, and deep quiet make Ladakh a reset for mind and body.",
    },
  ],
  topPlacesTitle: "Top Places",
  topPlacesGridClassName: "grid md:grid-cols-2 xl:grid-cols-5 gap-6",
  topPlaces: [
    { name: "Leh", video: lehCityVideo },
    { name: "Nubra Valley", video: nubraValleyVideo },
    { name: "Pangong Lake", video: pangongLakeVideo },
    { name: "Tso Moriri", video: tsoMoririVideo },
    { name: "Khardung La", video: khardungLaVideo },
  ],
  experiencesTitle: "Signature Experiences",
  experiences: [
    {
      title: "Bike Expeditions",
      description:
        "Ride iconic mountain highways with cinematic turn-after-turn views.",
      video: bikeExpeditionsVideo,
    },
    {
      title: "Lakeside Camping",
      description:
        "Sleep beneath a sky full of stars beside Ladakh's glacial waters.",
      video: lakesideCampingVideo,
    },
    {
      title: "Monastery Trails",
      description:
        "Walk through centuries-old gompas, murals, chants, and mountain calm.",
      video: monasteryTrailsVideo,
    },
    {
      title: "Camel Safari",
      description:
        "Cross Nubra's silver dunes with double-humped Bactrian camels.",
      video: camelSafariVideo,
    },
    {
      title: "Stargazing Nights",
      description:
        "Witness Milky Way clarity in one of India's darkest, highest skies.",
      video: stargazingNightsVideo,
    },
  ],
  itinerariesTitle: "Itinerary Ideas",
  itineraries: [
    {
      title: "5-7 Day Classic",
      plan: [
        "Day 1-2: Leh acclimatization + local monasteries",
        "Day 3: Leh to Nubra via Khardung La",
        "Day 4: Nubra dunes + village exploration",
        "Day 5-6: Pangong Lake sunrise route",
        "Day 7: Return to Leh and departure",
      ],
    },
    {
      title: "7-10 Day Deep Journey",
      plan: [
        "Day 1-2: Leh acclimatization and heritage walks",
        "Day 3-4: Nubra Valley and Diskit",
        "Day 5-6: Pangong + remote hamlets",
        "Day 7-8: Tso Moriri and Changthang region",
        "Day 9-10: Monastery circuit and leisure departure",
      ],
    },
  ],
  staysTitle: "Curated Stays",
  stays: [
    {
      title: "Luxury Camps",
      description: "Elegant tented suites with panoramic mountain views.",
      icon: Tent,
      media: {
        type: "image",
        src: "https://images.pexels.com/photos/1486396/pexels-photo-1486396.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Luxury camps in Ladakh",
      },
    },
    {
      title: "Boutique Hotels",
      description:
        "Curated interiors, comfort-first service, and local character.",
      icon: Hotel,
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
        alt: "Boutique hotel stay in Ladakh",
      },
    },
    {
      title: "Homestays",
      description:
        "Authentic Ladakhi homes for meaningful cultural connection.",
      icon: Building2,
      media: {
        type: "image",
        src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Homestay in Ladakh",
      },
    },
  ],
  responsibleTravelTitle: "Responsible Travel",
  responsibleTravel: [
    {
      icon: Leaf,
      title: "Leave No Trace",
      text: "Carry reusable bottles, avoid litter, and respect fragile high-altitude ecosystems.",
    },
    {
      icon: Flower2,
      title: "Respect Local Culture",
      text: "Dress mindfully at monasteries and support local artisans and family-run stays.",
    },
    {
      icon: ShieldCheck,
      title: "Travel Thoughtfully",
      text: "Acclimatize well, choose ethical operators, and keep your footprint minimal.",
    },
  ],
  bestTimeTitle: "Best Time To Visit",
  bestTime: [
    {
      months: "May - June",
      info: "Fresh mountain bloom, clear roads, and balanced weather for first-time travelers.",
    },
    {
      months: "July - August",
      info: "Prime adventure season for bike trips and high-pass drives across Ladakh.",
    },
    {
      months: "September - October",
      info: "Golden light, crisp air, and thinner crowds for a cinematic slow-travel vibe.",
    },
  ],
  cta: {
    eyebrow: "Your next chapter",
    title: "Start Your Ladakh Journey",
    buttonLabel: "Plan My Trip",
    media: { type: "image", src: ctaImage, alt: "Ladakh journey" },
  },
};

export const himanchalPageData: DestinationPageData = {
  slug: "himanchal-pradesh",
  hero: {
    id: "himanchal-hero",
    videos: [himanchalHeroVideo01, himanchalHeroVideo02, himanchalHeroVideo03],
    title: "Himanchal Pradesh - Valleys, forests, and Himalayan roads",
    subtitle:
      "A slower mountain story built from cedar air, high passes, river bends, and long scenic drives.",
    ctaLabel: "Explore Himanchal",
    themes: [
      {
        eyebrow: "text-emerald-50/90",
        title: "text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.58)]",
        subtitle: "text-emerald-50/95",
        cta: "border-white/35 bg-black/25 text-white hover:bg-black/40",
      },
      {
        eyebrow: "text-slate-100/90",
        title: "text-slate-50 drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]",
        subtitle: "text-slate-100/95",
        cta: "border-slate-100/45 bg-slate-900/30 text-slate-50 hover:bg-slate-900/45",
      },
      {
        eyebrow: "text-amber-100/90",
        title: "text-amber-50 drop-shadow-[0_3px_16px_rgba(0,0,0,0.65)]",
        subtitle: "text-amber-50/95",
        cta: "border-amber-100/45 bg-black/30 text-amber-50 hover:bg-black/45",
      },
    ],
  },
  overview: {
    id: "himanchal-overview",
    title: "A broad Himalayan canvas with many moods",
    description:
      "Himanchal Pradesh moves between elegant hill stations, sparse high-altitude valleys, monastery circuits, and river-cut mountain roads. It is ideal for travelers who want variety within one destination: forested calm in one stretch, raw terrain in the next, and a different cultural texture from valley to valley.",
    videos: [
      himanchalOverviewVideo01,
      himanchalOverviewVideo02,
      himanchalOverviewVideo03,
    ],
  },
  reasonsTitle: "Why Visit Himanchal Pradesh",
  reasonsToVisit: [
    {
      icon: Mountain,
      title: "Layered Valleys",
      description:
        "From glacier-fed basins to cedar-lined hill towns, every stretch of Himanchal feels visually distinct.",
    },
    {
      icon: Waves,
      title: "Rivers and Lakes",
      description:
        "Fast rivers, reflective lakes, and crisp alpine air shape the rhythm of the journey.",
    },
    {
      icon: Compass,
      title: "Road Trip Country",
      description:
        "Mountain highways, village detours, and high-pass drives make the route as memorable as the stay.",
    },
    {
      icon: Trees,
      title: "Forest Calm",
      description:
        "Pine, deodar, and orchard country bring softness and quiet to the Himalayan scale.",
    },
    {
      icon: Sparkles,
      title: "Four-Season Mood",
      description:
        "Snow, bloom, monsoon haze, and autumn light each give Himanchal a different cinematic character.",
    },
  ],
  topPlacesTitle: "Top Places",
  topPlacesGridClassName: "grid md:grid-cols-2 xl:grid-cols-3 gap-6",
  topPlaces: [
    { name: "Lahaul Valley", video: himanchalTopPlaceLahaulValleyVideo },
    { name: "Zanskar Valley", video: himanchalTopPlaceZanskarValleyVideo },
    { name: "Spiti", video: himanchalTopPlaceSpitiVideo },
    { name: "Shimla", video: himanchalTopPlaceShimlaVideo },
    { name: "Kinnaur Valley", video: himanchalTopPlaceKinnaurValleyVideo },
    { name: "Manali", video: himanchalTopPlaceManaliVideo },
  ],
  experiencesTitle: "Signature Experiences",
  experiences: [
    {
      title: "Highway Drives",
      description:
        "Cross changing terrains from orchard belts to stark high-altitude passes.",
      video: himanchalExperienceHighwayDrivesVideo,
    },
    {
      title: "Village Stays",
      description:
        "Slow down in wood-and-stone homes framed by terraces, rivers, and pine ridges.",
      video: himanchalExperienceVillageStaysVideo,
    },
    {
      title: "Monastery Stops",
      description:
        "Move between Buddhist enclaves, prayer walls, and remote hilltop spiritual sites.",
      video: himanchalExperienceMonasteryStopsVideo,
    },
    {
      title: "Snow and Cedar Trails",
      description:
        "Blend easy walks, lookout points, and alpine trails across changing elevations.",
      video: himanchalExperienceSnowAndCedarTrailsVideo,
    },
    {
      title: "Stargazing Escapes",
      description:
        "End the day under cold, clear skies in Spiti and the quieter valleys.",
      video: himanchalExperienceStargazingEscapesVideo,
    },
  ],
  itinerariesTitle: "Itinerary Ideas",
  itineraries: [
    {
      title: "6-8 Day Valley Circuit",
      plan: [
        "Day 1-2: Shimla and slow acclimatization through hill town routes",
        "Day 3: Kinnaur Valley villages and scenic river bends",
        "Day 4-5: Spiti monasteries, viewpoints, and night skies",
        "Day 6: Lahaul Valley drive with extended mountain stops",
        "Day 7-8: Manali wind-down and departure",
      ],
    },
    {
      title: "8-10 Day Deep Himalaya",
      plan: [
        "Day 1-2: Shimla and Kinnaur transit with orchard villages",
        "Day 3-5: Spiti villages, monasteries, and high-altitude landscapes",
        "Day 6: Zanskar-facing frontier stretches and long scenic routes",
        "Day 7-8: Lahaul Valley and hidden detours",
        "Day 9-10: Manali leisure, cafes, and forest trails",
      ],
    },
  ],
  staysTitle: "Curated Stays",
  stays: [
    {
      title: "Mountain Retreats",
      description:
        "Glass-fronted stays with ridge views, fireplaces, and quiet mornings.",
      icon: Hotel,
      media: {
        type: "video",
        src: himanchalStayMountainRetreatsVideo,
        alt: "Mountain retreat in Himanchal",
      },
    },
    {
      title: "Riverside Camps",
      description:
        "Comfortable tented escapes close to river valleys and star-heavy skies.",
      icon: Tent,
      media: {
        type: "video",
        src: himanchalStayRiversideCampsVideo,
        alt: "Riverside camp in Himanchal",
      },
    },
    {
      title: "Homestays",
      description:
        "Family-run homes with local food, slower mornings, and region-specific stories.",
      icon: Building2,
      media: {
        type: "video",
        src: himanchalStayHomestaysVideo,
        alt: "Homestay in Himanchal",
      },
    },
  ],
  responsibleTravelTitle: "Responsible Travel",
  responsibleTravel: [
    {
      icon: Leaf,
      title: "Protect Fragile Routes",
      text: "Travel light, keep plastic use low, and respect the carrying capacity of mountain roads and villages.",
    },
    {
      icon: Flower2,
      title: "Respect Local Rhythm",
      text: "Support local cafes, artisans, and family-run stays while staying mindful in spiritual spaces.",
    },
    {
      icon: ShieldCheck,
      title: "Travel Safely",
      text: "Plan around weather windows, road conditions, and altitude changes instead of overloading the itinerary.",
    },
  ],
  bestTimeTitle: "Best Time To Visit",
  bestTime: [
    {
      months: "March - June",
      info: "Spring into early summer brings orchards, clear roads, and balanced conditions across the hill towns.",
    },
    {
      months: "July - September",
      info: "Green valleys and dramatic skies create a richer mood, though road planning matters more in this period.",
    },
    {
      months: "October - February",
      info: "Cold-season travel brings snow and sharper light for travelers aiming for a quieter mountain atmosphere.",
    },
  ],
  cta: {
    eyebrow: "Your next chapter",
    title: "Start Your Himanchal Journey",
    buttonLabel: "Plan My Trip",
    media: {
      type: "video",
      src: himanchalCtaVideo,
      alt: "Himanchal journey",
    },
  },
};
