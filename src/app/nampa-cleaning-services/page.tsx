import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Nampa Idaho | Berenice's Sparkle Clean",
  description:
    "Professional house cleaning and office cleaning in Nampa Idaho. Affordable, reliable, and insured. Berenice's Sparkle Clean serves all of Nampa ID. Free quote!",
  alternates: { canonical: `${SITE_URL}/nampa-cleaning-services` },
  openGraph: {
    title: "Cleaning Services Nampa Idaho | Berenice's Sparkle Clean",
    description:
      "Trusted house cleaning Nampa ID. Office and commercial cleaning too. Bilingual, affordable, 20 years experience. Get your free quote!",
    url: `${SITE_URL}/nampa-cleaning-services`,
  },
};

export default function NampaCleaningServices() {
  return (
    <CityPageTemplate
      city="Nampa"
      state="Idaho"
      headline="House Cleaning Nampa, Idaho"
      intro="Serving Nampa homeowners and businesses with reliable, affordable cleaning services. Berenice's Sparkle Clean is proud to be one of Nampa's most trusted cleaning companies."
      localDetails="Nampa is one of Idaho's fastest-growing cities, and Berenice's Sparkle Clean has been serving Nampa families and businesses for over 20 years. We know the neighborhoods, the homes, and the businesses of Nampa, Idaho. Our bilingual team — fluent in English and Spanish — serves the diverse Nampa community with pride. Whether you need weekly house cleaning, office cleaning, or a one-time deep clean, we've got you covered across all of Canyon County."
      neighborhoods={[
        "Downtown Nampa",
        "Midway Area",
        "Karcher Area",
        "Lake Ridge",
        "Flamingo Village",
        "Sunny Ridge",
        "North Nampa",
        "South Nampa",
      ]}
    />
  );
}
