import heroAsset from "@/assets/phuket-hero.asset.json";
import interiorAsset from "@/assets/phuket-interior.asset.json";
import climate from "@/assets/healing-climate.jpg";
import precision from "@/assets/precision-suite.jpg";
import wellness from "@/assets/wellness-pavilion.jpg";
import kitchen from "@/assets/longevity-kitchen.jpg";
import residence from "@/assets/phuket-residence.jpg";
import concierge from "@/assets/phuket-concierge.jpg";
import flourish from "@/assets/phuket-flourish.jpg";
import resetImg from "@/assets/phuket-reset.jpg";

export const IMG = {
  hero: heroAsset.url,
  interior: interiorAsset.url,
  climate,
  residence,
  concierge,
};

export const SPACE_IMAGES = [precision, wellness, kitchen];

export const JOURNEY_MEDIA: Record<string, { img: string; to: string }> = {
  discover: { img: "/discover/discover-welcome.jpg", to: "/discover" },
  reset: { img: resetImg, to: "/journey" },
  rebuild: { img: "/home-narrative/family.jpg", to: "/journey" },
  flourish: { img: flourish, to: "/journey" },
};
