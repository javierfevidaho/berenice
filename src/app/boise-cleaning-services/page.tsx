import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Boise Idaho | Servicios de Limpieza Boise | Berenice's Sparkle Clean",
  description:
    "Professional house, office & commercial cleaning in Boise Idaho. Limpieza profesional en Boise ID. Affordable, insured, bilingual. 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/boise-cleaning-services` },
};

export default function BoiseCleaningServices() {
  return (
    <CityPageTemplate
      en={{
        city: "Boise", state: "Idaho",
        headline: "Cleaning Services Boise, Idaho",
        intro: "Berenice's Sparkle Clean is Boise's trusted name in professional cleaning. From cozy North End homes to downtown offices, we've been keeping Boise clean for over 20 years.",
        whyTitle: "Why Boise Trusts Berenice's Sparkle Clean",
        localDetails: "As a locally owned and operated business based in Boise, Idaho, we understand what Boise homes and businesses need. Whether you're in a historic Craftsman bungalow in the North End, a new build in southwest Boise, or a downtown office — our team knows how to clean it right. We use eco-friendly products safe for families and pets, and our bilingual team makes communication easy for all Boise residents. We are fully insured, bonded, and proud to be part of the Treasure Valley community.",
        neighborhoodsTitle: "Neighborhoods We Serve in Boise",
        neighborhoods: ["North End", "Bench", "East End / Harrison Blvd", "Southwest Boise", "Southeast Boise", "Downtown Boise", "West Boise", "Vista / Overland", "Warm Springs"],
        servicesTitle: "Our Cleaning Services in Boise, Idaho",
        ctaLabel: "Get Free Quote in Boise",
      }}
      es={{
        city: "Boise", state: "Idaho",
        headline: "Servicios de Limpieza en Boise, Idaho",
        intro: "Berenice's Sparkle Clean es el nombre de confianza en limpieza profesional de Boise. Desde acogedores hogares en el North End hasta oficinas en el centro, llevamos más de 20 años manteniendo limpio a Boise.",
        whyTitle: "Por Qué Boise Confía en Berenice's Sparkle Clean",
        localDetails: "Como empresa local con sede en Boise, Idaho, entendemos lo que los hogares y negocios de Boise necesitan. Ya sea una casa histórica en el North End, una nueva construcción en el suroeste de Boise o una oficina en el centro — nuestro equipo sabe cómo limpiarla correctamente. Usamos productos ecológicos seguros para familias y mascotas, y nuestro equipo bilingüe hace la comunicación fácil para todos los residentes de Boise. Estamos completamente aseguradas, certificadas y orgullosas de ser parte de la comunidad del Valle del Tesoro.",
        neighborhoodsTitle: "Vecindarios que Servimos en Boise",
        neighborhoods: ["North End", "Bench", "East End / Harrison Blvd", "Southwest Boise", "Southeast Boise", "Downtown Boise", "West Boise", "Vista / Overland", "Warm Springs"],
        servicesTitle: "Nuestros Servicios de Limpieza en Boise, Idaho",
        ctaLabel: "Cotización Gratis en Boise",
      }}
    />
  );
}
