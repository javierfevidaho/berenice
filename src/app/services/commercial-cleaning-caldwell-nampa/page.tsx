import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commercial Cleaning Caldwell Nampa Idaho | Berenice's Sparkle Clean",
  description:
    "Commercial cleaning services in Caldwell and Nampa Idaho. Large-scale janitorial services for businesses, retail, and facilities in Treasure Valley. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/commercial-cleaning-caldwell-nampa` },
  openGraph: {
    title: "Commercial Cleaning Caldwell & Nampa Idaho | Berenice's Sparkle Clean",
    description:
      "Professional commercial cleaning in Caldwell and Nampa ID. Scalable, affordable solutions for businesses of all sizes. Contact us today.",
    url: `${SITE_URL}/services/commercial-cleaning-caldwell-nampa`,
  },
};

export default function CommercialCleaningCaldwellNampa() {
  return (
    <ServicePageTemplate
      title="Commercial Cleaning"
      headline="Commercial Cleaning Caldwell & Nampa Idaho"
      intro="Berenice's Sparkle Clean provides comprehensive commercial cleaning services in Caldwell and Nampa, Idaho. From retail storefronts to warehouses, we deliver consistent, high-quality cleaning that keeps your facility looking its best."
      features={[
        "Large-scale commercial cleaning across Caldwell and Nampa",
        "Customized cleaning plans for any facility size",
        "Dedicated cleaning teams on flexible schedules",
        "Specialized equipment for large floor areas",
        "Fully insured with commercial liability coverage",
        "Transparent pricing with no hidden fees",
        "Long-term monthly and annual contracts available",
      ]}
      included={[
        "Full facility walkthrough and custom cleaning plan",
        "All common areas, lobbies, hallways, and restrooms",
        "Break rooms, kitchens, and cafeteria spaces",
        "Warehouse and storage area sweeping and mopping",
        "Window and glass cleaning (ground floor)",
        "High-touch surface disinfection",
        "Trash removal and recycling management",
        "Floor care: vacuuming, mopping, scrubbing on request",
      ]}
      areas={[
        "Caldwell, Idaho",
        "Nampa, Idaho",
        "Boise, Idaho",
        "Meridian, Idaho",
        "Treasure Valley, Idaho",
        "Canyon County, Idaho",
        "Ada County, Idaho",
      ]}
      faq={[
        {
          q: "Do you offer commercial cleaning contracts in Caldwell Idaho?",
          a: "Yes! We offer monthly and annual contracts for commercial cleaning in Caldwell and all of Canyon County. Contracts include priority scheduling and locked-in rates.",
        },
        {
          q: "What types of commercial facilities do you clean in Nampa?",
          a: "We clean offices, retail stores, restaurants (non-kitchen), warehouses, medical offices, auto dealerships, and more in Nampa, Idaho.",
        },
        {
          q: "How do I get a commercial cleaning quote?",
          a: "Fill out our contact form or call us. For large facilities, we offer free on-site estimates in Caldwell and Nampa.",
        },
      ]}
    />
  );
}
