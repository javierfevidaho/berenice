import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Caldwell Idaho | Berenice's Sparkle Clean",
  description:
    "Affordable house cleaning and commercial cleaning in Caldwell Idaho. Berenice's Sparkle Clean serves all of Caldwell ID and Canyon County. Insured. Free quote!",
  alternates: { canonical: `${SITE_URL}/caldwell-cleaning-services` },
  openGraph: {
    title: "Cleaning Services Caldwell Idaho | Berenice's Sparkle Clean",
    description:
      "Professional cleaning in Caldwell ID — home, office, and commercial. Affordable, bilingual, 20 years experience. Get your free quote today!",
    url: `${SITE_URL}/caldwell-cleaning-services`,
  },
};

export default function CaldwellCleaningServices() {
  return (
    <CityPageTemplate
      city="Caldwell"
      state="Idaho"
      headline="Commercial Cleaning Caldwell, Idaho"
      intro="Berenice's Sparkle Clean serves homeowners and businesses throughout Caldwell, Idaho with reliable, affordable cleaning. From residential homes to commercial facilities, we deliver spotless results every time."
      localDetails="Caldwell, Idaho is a growing community with a rich agricultural heritage and a booming business scene. Berenice's Sparkle Clean has been a trusted cleaning partner for Caldwell families and businesses for over two decades. We offer flexible scheduling to fit any lifestyle or business operation, and our fully insured team is ready to tackle any cleaning challenge — big or small. Our bilingual service makes us especially accessible to Caldwell's large Spanish-speaking community."
      neighborhoods={[
        "Downtown Caldwell",
        "Indian Creek Area",
        "Ustick Road Corridor",
        "Purple Sage Area",
        "Sunny Slope",
        "North Caldwell",
        "South Caldwell",
        "Middleton Road Area",
      ]}
    />
  );
}
