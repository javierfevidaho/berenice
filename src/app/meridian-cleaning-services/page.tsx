import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Meridian Idaho | Berenice's Sparkle Clean",
  description:
    "Professional house cleaning and office cleaning in Meridian Idaho. Affordable maid service for Meridian ID homes and businesses. 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/meridian-cleaning-services` },
  openGraph: {
    title: "Cleaning Services Meridian Idaho | Berenice's Sparkle Clean",
    description:
      "Trusted affordable cleaning in Meridian ID. House cleaning, deep cleaning & office cleaning. Bilingual, insured. Get your free quote today!",
    url: `${SITE_URL}/meridian-cleaning-services`,
  },
};

export default function MeridianCleaningServices() {
  return (
    <CityPageTemplate
      city="Meridian"
      state="Idaho"
      headline="Affordable Cleaning Meridian, Idaho"
      intro="Meridian is one of the fastest-growing cities in America — and Berenice's Sparkle Clean is growing right alongside it. We offer professional house cleaning, deep cleaning, and office cleaning to Meridian residents and businesses."
      localDetails="With hundreds of new homes built every year in Meridian, Idaho, there's always a need for reliable, trustworthy cleaning services. Berenice's Sparkle Clean serves new construction move-ins, established neighborhoods, and thriving businesses across Meridian. We take pride in building long-term relationships with our Meridian clients — many have been with us for 10+ years. Our team is insured, bonded, bilingual, and ready to make your Meridian home or office shine."
      neighborhoods={[
        "Downtown Meridian",
        "Settler's Bridge",
        "Tuscany",
        "Locust Grove Area",
        "Linder Road Corridor",
        "Eagle Road Corridor",
        "Ten Mile Crossing",
        "Heritage Commons",
        "Spurwing",
      ]}
    />
  );
}
