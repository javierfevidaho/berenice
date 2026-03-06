import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Cleaning Services Nampa Idaho | Servicios de Limpieza Nampa | Berenice's Sparkle Clean",
  description:
    "Professional house and office cleaning in Nampa Idaho. Limpieza de casas y oficinas en Nampa ID. Affordable, bilingual, insured. Free quote!",
  alternates: { canonical: `${SITE_URL}/nampa-cleaning-services` },
};

export default function NampaCleaningServices() {
  return (
    <CityPageTemplate
      en={{
        city: "Nampa", state: "Idaho",
        headline: "House Cleaning Nampa, Idaho",
        intro: "Serving Nampa homeowners and businesses with reliable, affordable cleaning. Berenice's Sparkle Clean is proud to be one of Nampa's most trusted cleaning companies.",
        whyTitle: "Why Nampa Trusts Berenice's Sparkle Clean",
        localDetails: "Nampa is one of Idaho's fastest-growing cities, and Berenice's Sparkle Clean has been serving Nampa families and businesses for over 20 years. We know the neighborhoods, the homes, and the businesses of Nampa, Idaho. Our bilingual team — fluent in English and Spanish — serves the diverse Nampa community with pride. Whether you need weekly house cleaning, office cleaning, or a one-time deep clean, we've got you covered across all of Canyon County.",
        neighborhoodsTitle: "Neighborhoods We Serve in Nampa",
        neighborhoods: ["Downtown Nampa", "Midway Area", "Karcher Area", "Lake Ridge", "Flamingo Village", "Sunny Ridge", "North Nampa", "South Nampa"],
        servicesTitle: "Our Cleaning Services in Nampa, Idaho",
        ctaLabel: "Get Free Quote in Nampa",
      }}
      es={{
        city: "Nampa", state: "Idaho",
        headline: "Limpieza de Casas en Nampa, Idaho",
        intro: "Servicio confiable y accesible de limpieza para propietarios y negocios de Nampa. Berenice's Sparkle Clean es una de las empresas de limpieza más confiables de Nampa.",
        whyTitle: "Por Qué Nampa Confía en Berenice's Sparkle Clean",
        localDetails: "Nampa es una de las ciudades de más rápido crecimiento en Idaho, y Berenice's Sparkle Clean ha servido a las familias y negocios de Nampa por más de 20 años. Conocemos los vecindarios, los hogares y los negocios de Nampa, Idaho. Nuestro equipo bilingüe — con fluidez en inglés y español — sirve a la diversa comunidad de Nampa con orgullo. Ya sea que necesites limpieza de casa semanal, limpieza de oficina o una limpieza profunda de una vez, te cubrimos en todo el Condado de Canyon.",
        neighborhoodsTitle: "Vecindarios que Servimos en Nampa",
        neighborhoods: ["Downtown Nampa", "Midway Area", "Karcher Area", "Lake Ridge", "Flamingo Village", "Sunny Ridge", "North Nampa", "South Nampa"],
        servicesTitle: "Nuestros Servicios de Limpieza en Nampa, Idaho",
        ctaLabel: "Cotización Gratis en Nampa",
      }}
    />
  );
}
