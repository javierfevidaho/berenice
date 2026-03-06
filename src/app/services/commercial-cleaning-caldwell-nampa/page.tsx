import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Commercial Cleaning Caldwell Nampa | Limpieza Comercial Caldwell Nampa Idaho",
  description:
    "Commercial cleaning in Caldwell and Nampa Idaho. Limpieza comercial profesional en Caldwell y Nampa ID. Large-scale, insured, bilingual. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/commercial-cleaning-caldwell-nampa` },
};

const enContent = {
  title: "Commercial Cleaning",
  headline: "Commercial Cleaning Caldwell & Nampa Idaho",
  intro: "Berenice's Sparkle Clean provides comprehensive commercial cleaning in Caldwell and Nampa, Idaho. From retail storefronts to warehouses, we deliver consistent, high-quality cleaning that keeps your facility looking its best.",
  whyTitle: "Why Choose Our Commercial Cleaning?",
  features: [
    "Large-scale commercial cleaning across Caldwell and Nampa",
    "Customized cleaning plans for any facility size",
    "Dedicated cleaning teams on flexible schedules",
    "Specialized equipment for large floor areas",
    "Fully insured with commercial liability coverage",
    "Transparent pricing with no hidden fees",
    "Long-term monthly and annual contracts available",
  ],
  includedTitle: "What's Included",
  included: [
    "Full facility walkthrough and custom cleaning plan",
    "All common areas, lobbies, hallways, and restrooms",
    "Break rooms, kitchens, and cafeteria spaces",
    "Warehouse and storage area sweeping and mopping",
    "Window and glass cleaning (ground floor)",
    "High-touch surface disinfection",
    "Trash removal and recycling management",
    "Floor care: vacuuming, mopping, scrubbing on request",
  ],
  areasTitle: "Commercial Cleaning Available In:",
  areas: ["Caldwell, Idaho", "Nampa, Idaho", "Boise, Idaho", "Meridian, Idaho", "Canyon County, Idaho", "Ada County, Idaho"],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { q: "Do you offer commercial cleaning contracts in Caldwell Idaho?", a: "Yes! We offer monthly and annual contracts for commercial cleaning in Caldwell. Contracts include priority scheduling and locked-in rates." },
    { q: "What types of facilities do you clean in Nampa?", a: "We clean offices, retail stores, restaurants (non-kitchen), warehouses, medical offices, auto dealerships, and more in Nampa, Idaho." },
    { q: "How do I get a commercial cleaning quote?", a: "Fill out our contact form or call us. For large facilities, we offer free on-site estimates in Caldwell and Nampa." },
  ],
};

const esContent = {
  title: "Limpieza Comercial",
  headline: "Limpieza Comercial en Caldwell y Nampa Idaho",
  intro: "Berenice's Sparkle Clean ofrece limpieza comercial integral en Caldwell y Nampa, Idaho. Desde tiendas hasta almacenes, ofrecemos limpieza consistente y de alta calidad para mantener tu establecimiento en su mejor estado.",
  whyTitle: "¿Por Qué Elegir Nuestra Limpieza Comercial?",
  features: [
    "Limpieza comercial a gran escala en Caldwell y Nampa",
    "Planes de limpieza personalizados para cualquier tamaño de instalación",
    "Equipos dedicados con horarios flexibles",
    "Equipos especializados para grandes superficies",
    "Totalmente asegurada con cobertura de responsabilidad comercial",
    "Precios transparentes sin cargos ocultos",
    "Contratos mensuales y anuales disponibles",
  ],
  includedTitle: "Qué Incluye el Servicio",
  included: [
    "Recorrido completo y plan de limpieza personalizado",
    "Todas las áreas comunes, pasillos y baños",
    "Salas de descanso, cocinas y cafeterías",
    "Barrido y trapeado de almacenes y zonas de almacenamiento",
    "Limpieza de ventanas y vidrios (planta baja)",
    "Desinfección de superficies de alto contacto",
    "Gestión de basura y reciclaje",
    "Cuidado de pisos: aspirado, trapeado, tallado bajo pedido",
  ],
  areasTitle: "Limpieza Comercial Disponible En:",
  areas: ["Caldwell, Idaho", "Nampa, Idaho", "Boise, Idaho", "Meridian, Idaho", "Condado de Canyon, Idaho", "Condado de Ada, Idaho"],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    { q: "¿Ofrecen contratos de limpieza comercial en Caldwell Idaho?", a: "¡Sí! Ofrecemos contratos mensuales y anuales para limpieza comercial en Caldwell. Los contratos incluyen programación prioritaria y tarifas fijas." },
    { q: "¿Qué tipos de establecimientos limpian en Nampa?", a: "Limpiamos oficinas, tiendas, restaurantes (área de comedor), almacenes, consultorios médicos, distribuidoras de autos y más en Nampa, Idaho." },
    { q: "¿Cómo obtengo una cotización de limpieza comercial?", a: "Llena nuestro formulario de contacto o llámanos. Para instalaciones grandes, ofrecemos estimados gratuitos en sitio en Caldwell y Nampa." },
  ],
};

export default function CommercialCleaningCaldwellNampa() {
  return <ServicePageTemplate en={enContent} es={esContent} />;
}
