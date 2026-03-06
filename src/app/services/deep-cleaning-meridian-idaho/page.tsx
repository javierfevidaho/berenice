import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Deep Cleaning Service Meridian Idaho | Berenice's Sparkle Clean",
  description:
    "Professional deep cleaning services in Meridian Idaho. Full top-to-bottom deep clean for homes and offices. Affordable, thorough, and guaranteed. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/deep-cleaning-meridian-idaho` },
  openGraph: {
    title: "Deep Cleaning Meridian Idaho | Berenice's Sparkle Clean",
    description:
      "Deep cleaning in Meridian ID — baseboards, inside appliances, grout, and every detail. 20 years experience. Get your free quote today.",
    url: `${SITE_URL}/services/deep-cleaning-meridian-idaho`,
  },
};

export default function DeepCleaningMeridianIdaho() {
  return (
    <ServicePageTemplate
      title="Deep Cleaning"
      headline="Deep Cleaning Service Meridian Idaho"
      intro="Our deep cleaning service in Meridian, Idaho goes far beyond a standard clean. We target every corner, every surface, and every detail that regular cleaning misses — leaving your home or office truly spotless."
      features={[
        "Full top-to-bottom deep clean — no shortcuts",
        "Inside appliances: oven, refrigerator, microwave",
        "Grout scrubbing and tile cleaning",
        "Baseboards, door frames, and window tracks",
        "20+ years deep cleaning experience in Idaho",
        "Ideal before parties, after renovation, or seasonal refresh",
        "100% satisfaction guaranteed",
      ]}
      included={[
        "Kitchen: inside oven, fridge, dishwasher, all cabinets exterior",
        "Bathrooms: grout scrubbing, behind toilet, shower tracks",
        "All baseboards, door frames, window sills wiped and sanitized",
        "Ceiling fan blades and light fixtures dusted",
        "Inside all closets: shelves dusted, floors vacuumed",
        "Window tracks and sliding door tracks cleaned",
        "All switch plates and outlet covers sanitized",
        "Under furniture vacuuming and mopping",
      ]}
      areas={[
        "Meridian, Idaho",
        "Boise, Idaho",
        "Nampa, Idaho",
        "Caldwell, Idaho",
        "Eagle, Idaho",
        "Kuna, Idaho",
        "Star, Idaho",
      ]}
      faq={[
        {
          q: "How often should I get a deep cleaning in Meridian Idaho?",
          a: "We recommend a deep cleaning every 3–6 months, plus a regular maintenance clean in between. First-time clients often start with a deep clean before switching to weekly or bi-weekly service.",
        },
        {
          q: "How long does a deep cleaning take?",
          a: "Depending on home size and condition, deep cleanings typically take 3–6 hours. We'll give you a time estimate when you book.",
        },
        {
          q: "Is deep cleaning more expensive than regular cleaning?",
          a: "Yes, deep cleaning takes more time and effort. However, it's a worthwhile investment — prices start around $180 for small homes in Meridian. Contact us for an exact quote.",
        },
      ]}
    />
  );
}
