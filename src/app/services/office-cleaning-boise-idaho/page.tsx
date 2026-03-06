import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Office Cleaning Boise Idaho | Berenice's Sparkle Clean",
  description:
    "Professional office cleaning services in Boise and Nampa Idaho. Daily, weekly, or monthly commercial cleaning for small and mid-size offices. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/office-cleaning-boise-idaho` },
  openGraph: {
    title: "Office Cleaning Boise Idaho | Berenice's Sparkle Clean",
    description:
      "Keep your Boise or Nampa office spotless. Flexible scheduling, fully insured, bilingual team. Contact Berenice's Sparkle Clean today.",
    url: `${SITE_URL}/services/office-cleaning-boise-idaho`,
  },
};

export default function OfficeCleaningBoiseIdaho() {
  return (
    <ServicePageTemplate
      title="Office Cleaning"
      headline="Office Cleaning Nampa Idaho & Boise"
      intro="A clean office is a productive office. Berenice's Sparkle Clean provides professional office cleaning services across Boise and Nampa, Idaho. We work around your schedule — morning, evening, or weekends — so your business never skips a beat."
      features={[
        "Serving offices in Boise and Nampa Idaho since 2004",
        "Flexible scheduling around your business hours",
        "Discreet, professional, and trustworthy team",
        "Fully insured — protecting your business and equipment",
        "Customizable cleaning checklists per your needs",
        "Daily, weekly, bi-weekly, and monthly plans",
        "Bilingual communication: English and Spanish",
      ]}
      included={[
        "Workstations and desks wiped and sanitized",
        "Common areas, lobbies, and conference rooms",
        "Breakroom and kitchen: sink, microwave, counters",
        "Restrooms: toilets, sinks, floors, mirrors, restocking",
        "Vacuuming carpets and mopping hard floors",
        "Trash removal and liner replacement",
        "Window sills, ledges, and glass surfaces",
        "Light switches, door handles, and high-touch surfaces disinfected",
      ]}
      areas={[
        "Boise, Idaho",
        "Nampa, Idaho",
        "Caldwell, Idaho",
        "Meridian, Idaho",
        "Eagle, Idaho",
        "Garden City, Idaho",
      ]}
      faq={[
        {
          q: "How much does office cleaning cost in Boise Idaho?",
          a: "Office cleaning in Boise starts around $80–$150 for small offices and is custom-quoted for larger spaces. We offer competitive rates for weekly and monthly contracts. Contact us for a free on-site or phone estimate.",
        },
        {
          q: "Can you clean our office after hours or on weekends?",
          a: "Absolutely. We offer early morning, evening, and weekend cleaning to avoid disrupting your work day. Just let us know your preferred schedule.",
        },
        {
          q: "Do you provide cleaning for Nampa and Caldwell offices too?",
          a: "Yes! We serve offices throughout the Treasure Valley including Nampa, Caldwell, Meridian, and Eagle, Idaho.",
        },
      ]}
    />
  );
}
