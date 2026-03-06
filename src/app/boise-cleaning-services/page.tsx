import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Boise Idaho | Berenice's Sparkle Clean",
  description:
    "Professional house, office & commercial cleaning services in Boise Idaho. Berenice's Sparkle Clean — affordable, insured, bilingual. 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/boise-cleaning-services` },
  openGraph: {
    title: "Cleaning Services Boise Idaho | Berenice's Sparkle Clean",
    description:
      "Trusted cleaning services in Boise ID. Residential, office & commercial cleaning. Insured, bilingual, affordable. Get your free quote today.",
    url: `${SITE_URL}/boise-cleaning-services`,
  },
};

export default function BoiseCleaningServices() {
  return (
    <CityPageTemplate
      city="Boise"
      state="Idaho"
      headline="Cleaning Services Boise, Idaho"
      intro="Berenice's Sparkle Clean is Boise's trusted name in professional cleaning. From cozy North End homes to downtown offices, we've been keeping Boise clean for over 20 years."
      localDetails="As a locally owned and operated business based in Boise, Idaho, we understand what Boise homes and businesses need. Whether you're in a historic Craftsman bungalow in the North End, a new build in southwest Boise, or a downtown office — our team knows how to clean it right. We use eco-friendly products safe for families and pets, and our bilingual team makes communication easy for all Boise residents. We are fully insured, bonded, and proud to be part of the Treasure Valley community."
      neighborhoods={[
        "North End",
        "Bench",
        "East End / Harrison Blvd",
        "Southwest Boise",
        "Southeast Boise",
        "Downtown Boise",
        "West Boise",
        "Vista / Overland",
        "Warm Springs",
      ]}
    />
  );
}
