import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "House & Office Cleaning Services Boise ID | Berenice's Sparkle Clean",
    template: "%s | Berenice's Sparkle Clean",
  },
  description:
    "Berenice's Sparkle Clean offers affordable house cleaning, office cleaning, and commercial cleaning in Boise, Nampa, Caldwell, Meridian, and the Treasure Valley Idaho. 20 years of experience. Free quotes! También hablamos Español.",
  keywords: [
    "cleaning services Boise Idaho",
    "house cleaning Nampa ID",
    "office cleaning Caldwell",
    "affordable cleaning Meridian Idaho",
    "maid service Treasure Valley",
    "commercial cleaning Boise",
    "limpieza de casas Boise Idaho",
    "servicio de limpieza Nampa Idaho",
  ],
  authors: [{ name: "Berenice's Sparkle Clean" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Berenice's Sparkle Clean",
    title: "House & Office Cleaning Services Boise ID | Berenice's Sparkle Clean",
    description:
      "Professional cleaning services in Boise, Nampa, Caldwell & Meridian Idaho. Residential, office & commercial cleaning. 20 years experience. Bilingual. Free quotes!",
  },
  twitter: {
    card: "summary_large_image",
    title: "House & Office Cleaning Services Boise ID | Berenice's Sparkle Clean",
    description:
      "Affordable professional cleaning in Boise, Nampa, Caldwell & Meridian. Residential, office & commercial. Free quotes!",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description:
    "Professional residential, office and commercial cleaning services in Boise, Nampa, Caldwell, Meridian and the Treasure Valley, Idaho. Bilingual English/Spanish team.",
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boise",
    addressRegion: "ID",
    postalCode: "83702",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.coordinates.lat,
    longitude: BUSINESS.coordinates.lng,
  },
  areaServed: [
    { "@type": "City", name: "Boise", containedIn: { "@type": "State", name: "Idaho" } },
    { "@type": "City", name: "Nampa", containedIn: { "@type": "State", name: "Idaho" } },
    { "@type": "City", name: "Caldwell", containedIn: { "@type": "State", name: "Idaho" } },
    { "@type": "City", name: "Meridian", containedIn: { "@type": "State", name: "Idaho" } },
    { "@type": "Place", name: "Treasure Valley, Idaho" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Cleaning Boise Idaho" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning Boise Idaho" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning Caldwell Nampa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-in Move-out Cleaning Boise" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning Meridian Idaho" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-slate-800`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
