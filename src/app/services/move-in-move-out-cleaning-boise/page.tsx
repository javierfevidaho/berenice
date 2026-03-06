import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Move-In Move-Out Cleaning Boise Idaho | Berenice's Sparkle Clean",
  description:
    "Move-in and move-out cleaning services in Boise Idaho. Get your full deposit back with our thorough move-out clean. Serving Nampa, Meridian & Treasure Valley. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/move-in-move-out-cleaning-boise` },
  openGraph: {
    title: "Move-In / Move-Out Cleaning Boise Idaho | Berenice's Sparkle Clean",
    description:
      "Moving in or out in Boise ID? Our move-out cleaning service helps you get your full deposit back. Fast, affordable, thorough. Call now!",
    url: `${SITE_URL}/services/move-in-move-out-cleaning-boise`,
  },
};

export default function MoveInMoveOutCleaningBoise() {
  return (
    <ServicePageTemplate
      title="Move-In / Move-Out Cleaning"
      headline="Move-In & Move-Out Cleaning Boise Idaho"
      intro="Moving in Boise, Nampa, or across the Treasure Valley? Our move-in and move-out cleaning service ensures you leave (or arrive in) a spotless property. We help tenants get their full deposit back and help landlords turn units faster."
      features={[
        "Comprehensive top-to-bottom move-out clean",
        "Increases chances of getting your full deposit back",
        "Ideal for landlords turning units between tenants",
        "Fast scheduling — same week or same day available",
        "Serving all of Boise and Treasure Valley Idaho",
        "Detailed cleaning checklist that satisfies landlords",
        "100% satisfaction guaranteed",
      ]}
      included={[
        "Full kitchen: inside/outside oven, fridge, all cabinets, drawers",
        "All bathrooms: deep scrub of tub, shower, toilet, grout",
        "All rooms: walls wiped, baseboards, windows, blinds",
        "Closets: fully emptied, shelves dusted, floors vacuumed",
        "Carpet vacuuming and hard floor mopping throughout",
        "Garage sweep if applicable",
        "All high-touch surfaces disinfected",
        "Trash removal — we haul everything out",
      ]}
      areas={[
        "Boise, Idaho",
        "Nampa, Idaho",
        "Caldwell, Idaho",
        "Meridian, Idaho",
        "Eagle, Idaho",
        "Star, Idaho",
        "Kuna, Idaho",
        "Garden City, Idaho",
      ]}
      faq={[
        {
          q: "Will a move-out cleaning help me get my deposit back in Boise?",
          a: "In most cases, yes. Our detailed move-out cleaning checklist is designed to meet landlord and property management standards throughout Boise and the Treasure Valley.",
        },
        {
          q: "How soon can you schedule a move-out clean in Boise?",
          a: "We often have same-week or even same-day availability. Call us right away when you know your move-out date to secure your spot.",
        },
        {
          q: "Do you clean move-out rentals in Nampa and Meridian too?",
          a: "Yes! We cover all of the Treasure Valley including Nampa, Caldwell, Meridian, Eagle, and surrounding areas for move-in and move-out cleaning.",
        },
      ]}
    />
  );
}
