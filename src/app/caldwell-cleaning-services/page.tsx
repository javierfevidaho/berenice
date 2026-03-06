import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Caldwell Idaho | Servicios de Limpieza Caldwell | Berenice's Sparkle Clean",
  description:
    "Affordable house and commercial cleaning in Caldwell Idaho. Limpieza de casas y comercial en Caldwell ID. Insured, bilingual, 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/caldwell-cleaning-services` },
};

export default function CaldwellCleaningServices() {
  return (
    <CityPageTemplate
      en={{
        city: "Caldwell", state: "Idaho",
        headline: "Commercial Cleaning Caldwell, Idaho",
        intro: "Berenice's Sparkle Clean serves homeowners and businesses throughout Caldwell, Idaho with reliable, affordable cleaning. From residential homes to commercial facilities, we deliver spotless results every time.",
        whyTitle: "Why Caldwell Trusts Berenice's Sparkle Clean",
        localDetails: "Caldwell, Idaho is a growing community with a rich agricultural heritage and a booming business scene. Berenice's Sparkle Clean has been a trusted cleaning partner for Caldwell families and businesses for over two decades. We offer flexible scheduling to fit any lifestyle or business operation, and our fully insured team is ready to tackle any cleaning challenge. Our bilingual service makes us especially accessible to Caldwell's large Spanish-speaking community.",
        neighborhoodsTitle: "Neighborhoods We Serve in Caldwell",
        neighborhoods: ["Downtown Caldwell", "Indian Creek Area", "Ustick Road Corridor", "Purple Sage Area", "Sunny Slope", "North Caldwell", "South Caldwell", "Middleton Road Area"],
        servicesTitle: "Our Cleaning Services in Caldwell, Idaho",
        ctaLabel: "Get Free Quote in Caldwell",
      }}
      es={{
        city: "Caldwell", state: "Idaho",
        headline: "Limpieza Comercial en Caldwell, Idaho",
        intro: "Berenice's Sparkle Clean sirve a propietarios y negocios en toda Caldwell, Idaho con limpieza confiable y accesible. Desde hogares residenciales hasta instalaciones comerciales, entregamos resultados impecables.",
        whyTitle: "Por Qué Caldwell Confía en Berenice's Sparkle Clean",
        localDetails: "Caldwell, Idaho es una comunidad en crecimiento con una rica herencia agrícola y una escena empresarial en auge. Berenice's Sparkle Clean ha sido un socio de limpieza de confianza para las familias y negocios de Caldwell por más de dos décadas. Ofrecemos horarios flexibles para cualquier estilo de vida u operación comercial, y nuestro equipo totalmente asegurado está listo para cualquier reto de limpieza. Nuestro servicio bilingüe nos hace especialmente accesibles para la gran comunidad hispanohablante de Caldwell.",
        neighborhoodsTitle: "Vecindarios que Servimos en Caldwell",
        neighborhoods: ["Downtown Caldwell", "Indian Creek Area", "Ustick Road Corridor", "Purple Sage Area", "Sunny Slope", "North Caldwell", "South Caldwell", "Middleton Road Area"],
        servicesTitle: "Nuestros Servicios de Limpieza en Caldwell, Idaho",
        ctaLabel: "Cotización Gratis en Caldwell",
      }}
    />
  );
}
