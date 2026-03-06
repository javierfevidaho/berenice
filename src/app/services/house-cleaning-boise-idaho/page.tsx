import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "House Cleaning Boise Idaho | Berenice's Sparkle Clean",
  description:
    "Professional house cleaning services in Boise, Idaho. Affordable, reliable, and thorough residential cleaning. Berenice's Sparkle Clean — 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/house-cleaning-boise-idaho` },
  openGraph: {
    title: "House Cleaning Boise Idaho | Berenice's Sparkle Clean",
    description:
      "Trusted house cleaning in Boise ID. Weekly, bi-weekly, or monthly plans. Insured, bilingual, affordable. Get your free quote today!",
    url: `${SITE_URL}/services/house-cleaning-boise-idaho`,
  },
};

export default function HouseCleaningBoiseIdaho() {
  return (
    <ServicePageTemplate
      title="House Cleaning"
      headline="House Cleaning Boise Idaho"
      intro="Looking for a reliable, affordable house cleaning service in Boise, Idaho? Berenice's Sparkle Clean has been trusted by Boise families for over 20 years. We offer flexible scheduling, eco-friendly products, and a 100% satisfaction guarantee."
      features={[
        "20+ years of experience cleaning Boise homes",
        "Fully insured and bonded for your protection",
        "Flexible scheduling: weekly, bi-weekly, or monthly",
        "Bilingual team — English and Spanish",
        "All cleaning supplies and equipment provided",
        "Background-checked, professional cleaners",
        "Satisfaction guarantee — we fix it free if missed",
      ]}
      included={[
        "Kitchen: counters, stovetop, sink, microwave exterior, cabinet fronts",
        "Bathrooms: toilet, tub/shower, sink, mirror, floors",
        "All bedrooms: dusting, vacuuming, making beds",
        "Living areas: dusting furniture, vacuuming, mopping hard floors",
        "Trash removal throughout home",
        "Window sills and ledges dusted",
        "Door handles and light switches wiped down",
        "Add-on: inside oven, inside fridge, inside cabinets",
      ]}
      areas={[
        "Boise, Idaho",
        "North End Boise",
        "East Boise",
        "Southwest Boise",
        "Southeast Boise",
        "Nampa, Idaho",
        "Meridian, Idaho",
        "Eagle, Idaho",
      ]}
      faq={[
        {
          q: "How much does house cleaning cost in Boise Idaho?",
          a: "Our Boise house cleaning starts at $80 for studios and small apartments, $130 for medium homes (2–3 bedrooms), and $200+ for large homes. Contact us for an exact quote based on your home's size and condition.",
        },
        {
          q: "Do I need to be home when the cleaners arrive?",
          a: "No, you don't need to be home. Many of our Boise clients leave a key or provide an access code. We are fully insured and bonded for your peace of mind.",
        },
        {
          q: "Do you bring your own cleaning supplies?",
          a: "Yes! We bring all cleaning supplies and equipment. If you prefer we use your specific products, just let us know.",
        },
        {
          q: "How far in advance do I need to book?",
          a: "We recommend booking 1–3 days in advance, but we also offer same-day cleaning in Boise when availability allows. Call us to check!",
        },
      ]}
    />
  );
}
