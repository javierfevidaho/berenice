export const BUSINESS = {
  name: "Berenice's Sparkle Clean",
  shortName: "Sparkle Clean",
  owner: "Berenice",
  tagline: "Professional Cleaning Services in Boise, Idaho",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(208) 555-0100",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@berenicessparkleclean.com",
  address: {
    street: "Boise",
    city: "Boise",
    state: "ID",
    zip: "83702",
    full: "Boise, ID 83702",
  },
  coordinates: { lat: 43.615, lng: -116.2023 },
  yearsExperience: 20,
  priceRange: "$",
  languages: ["English", "Spanish"],
} as const;

export const SERVICE_AREAS = [
  { name: "Boise", state: "Idaho", slug: "boise-cleaning-services" },
  { name: "Nampa", state: "Idaho", slug: "nampa-cleaning-services" },
  { name: "Caldwell", state: "Idaho", slug: "caldwell-cleaning-services" },
  { name: "Meridian", state: "Idaho", slug: "meridian-cleaning-services" },
  { name: "Treasure Valley", state: "Idaho", slug: null },
  { name: "Eagle", state: "Idaho", slug: null },
  { name: "Star", state: "Idaho", slug: null },
  { name: "Kuna", state: "Idaho", slug: null },
] as const;

export const SERVICES = [
  {
    slug: "house-cleaning-boise-idaho",
    title: "House Cleaning",
    headline: "House Cleaning Boise ID",
    icon: "🏠",
    description: "Thorough top-to-bottom cleaning for homes of all sizes in Boise and surrounding areas.",
    shortDesc: "Reliable weekly, bi-weekly, or monthly home cleaning.",
  },
  {
    slug: null,
    title: "Apartment Cleaning",
    headline: "Apartment Cleaning Boise Idaho",
    icon: "🏢",
    description: "Efficient and affordable apartment cleaning tailored for studios, 1BR, and 2BR+ units.",
    shortDesc: "Studio to multi-bedroom apartment cleaning services.",
  },
  {
    slug: "office-cleaning-boise-idaho",
    title: "Office Cleaning",
    headline: "Office Cleaning Nampa Idaho",
    icon: "💼",
    description: "Keep your workspace spotless and professional. Daily, weekly, or monthly office cleaning in Boise and Nampa.",
    shortDesc: "Professional office cleaning on your schedule.",
  },
  {
    slug: "commercial-cleaning-caldwell-nampa",
    title: "Commercial Cleaning",
    headline: "Commercial Cleaning Caldwell & Meridian",
    icon: "🏭",
    description: "Large-scale commercial cleaning for businesses, retail stores, and facilities across Caldwell, Nampa, and Meridian.",
    shortDesc: "Scalable commercial cleaning for any business size.",
  },
  {
    slug: "move-in-move-out-cleaning-boise",
    title: "Move-In / Move-Out Cleaning",
    headline: "Move-In Move-Out Cleaning Boise ID",
    icon: "📦",
    description: "Get your deposit back or start fresh. Complete move-in and move-out cleaning throughout Treasure Valley.",
    shortDesc: "Full cleaning so you get your deposit back.",
  },
  {
    slug: "deep-cleaning-meridian-idaho",
    title: "Deep Cleaning",
    headline: "Deep Cleaning Meridian Idaho",
    icon: "✨",
    description: "Full deep-clean service for homes and offices that need extra attention — baseboards, appliances, and more.",
    shortDesc: "Top-to-bottom deep cleaning for stubborn grime.",
  },
] as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.berenicessparkleclean.com";
