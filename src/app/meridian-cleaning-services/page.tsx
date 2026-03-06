import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Meridian Idaho | Servicios de Limpieza Meridian | Berenice's Sparkle Clean",
  description:
    "Professional house cleaning and office cleaning in Meridian Idaho. Limpieza de casas y oficinas en Meridian ID. Affordable, bilingual, insured. Free quote!",
  alternates: { canonical: `${SITE_URL}/meridian-cleaning-services` },
};

export default function MeridianCleaningServices() {
  return (
    <CityPageTemplate
      en={{
        city: "Meridian", state: "Idaho",
        headline: "Affordable Cleaning Meridian, Idaho",
        intro: "Meridian is one of the fastest-growing cities in America — and Berenice's Sparkle Clean is growing right alongside it. Professional house cleaning, deep cleaning, and office cleaning for Meridian residents and businesses.",
        whyTitle: "Why Meridian Trusts Berenice's Sparkle Clean",
        localDetails: "With hundreds of new homes built every year in Meridian, Idaho, there's always a need for reliable, trustworthy cleaning services. Berenice's Sparkle Clean serves new construction move-ins, established neighborhoods, and thriving businesses across Meridian. We take pride in building long-term relationships with our Meridian clients — many have been with us for 10+ years. Our team is insured, bonded, bilingual, and ready to make your Meridian home or office shine.",
        neighborhoodsTitle: "Neighborhoods We Serve in Meridian",
        neighborhoods: ["Downtown Meridian", "Settler's Bridge", "Tuscany", "Locust Grove Area", "Linder Road Corridor", "Eagle Road Corridor", "Ten Mile Crossing", "Heritage Commons", "Spurwing"],
        servicesTitle: "Our Cleaning Services in Meridian, Idaho",
        ctaLabel: "Get Free Quote in Meridian",
      }}
      es={{
        city: "Meridian", state: "Idaho",
        headline: "Limpieza Accesible en Meridian, Idaho",
        intro: "Meridian es una de las ciudades de más rápido crecimiento en América — y Berenice's Sparkle Clean crece junto a ella. Limpieza profesional de casas, limpieza profunda y limpieza de oficinas para residentes y negocios de Meridian.",
        whyTitle: "Por Qué Meridian Confía en Berenice's Sparkle Clean",
        localDetails: "Con cientos de casas nuevas construidas cada año en Meridian, Idaho, siempre hay necesidad de servicios de limpieza confiables. Berenice's Sparkle Clean sirve a mudanzas de nuevas construcciones, vecindarios establecidos y negocios prósperos en toda Meridian. Nos enorgullece construir relaciones a largo plazo con nuestros clientes de Meridian — muchos han estado con nosotras por más de 10 años. Nuestro equipo está asegurado, certificado, es bilingüe y está listo para hacer brillar tu hogar u oficina en Meridian.",
        neighborhoodsTitle: "Vecindarios que Servimos en Meridian",
        neighborhoods: ["Downtown Meridian", "Settler's Bridge", "Tuscany", "Locust Grove Area", "Linder Road Corridor", "Eagle Road Corridor", "Ten Mile Crossing", "Heritage Commons", "Spurwing"],
        servicesTitle: "Nuestros Servicios de Limpieza en Meridian, Idaho",
        ctaLabel: "Cotización Gratis en Meridian",
      }}
    />
  );
}
