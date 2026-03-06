import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Deep Cleaning Meridian Idaho | Limpieza Profunda Meridian Idaho | Berenice's Sparkle Clean",
  description:
    "Professional deep cleaning in Meridian Idaho. Limpieza profunda profesional en Meridian ID. Thorough, affordable, bilingual. 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/deep-cleaning-meridian-idaho` },
};

const enContent = {
  title: "Deep Cleaning",
  headline: "Deep Cleaning Service Meridian Idaho",
  intro: "Our deep cleaning service in Meridian, Idaho goes far beyond a standard clean. We target every corner, every surface, and every detail that regular cleaning misses — leaving your home or office truly spotless.",
  whyTitle: "Why Choose Our Deep Cleaning?",
  features: [
    "Full top-to-bottom deep clean — no shortcuts",
    "Inside appliances: oven, refrigerator, microwave",
    "Grout scrubbing and tile cleaning",
    "Baseboards, door frames, and window tracks",
    "20+ years deep cleaning experience in Idaho",
    "Ideal before parties, after renovation, or seasonal refresh",
    "100% satisfaction guaranteed",
  ],
  includedTitle: "What's Included",
  included: [
    "Kitchen: inside oven, fridge, dishwasher, all cabinets exterior",
    "Bathrooms: grout scrubbing, behind toilet, shower tracks",
    "All baseboards, door frames, window sills wiped and sanitized",
    "Ceiling fan blades and light fixtures dusted",
    "Inside all closets: shelves dusted, floors vacuumed",
    "Window tracks and sliding door tracks cleaned",
    "All switch plates and outlet covers sanitized",
    "Under furniture vacuuming and mopping",
  ],
  areasTitle: "Deep Cleaning Available In:",
  areas: ["Meridian, Idaho", "Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Eagle, Idaho", "Kuna, Idaho", "Star, Idaho"],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { q: "How often should I get a deep cleaning in Meridian Idaho?", a: "We recommend a deep cleaning every 3–6 months, plus a regular maintenance clean in between. First-time clients often start with a deep clean before switching to weekly or bi-weekly service." },
    { q: "How long does a deep cleaning take?", a: "Depending on home size and condition, deep cleanings typically take 3–6 hours. We'll give you a time estimate when you book." },
    { q: "Is deep cleaning more expensive than regular cleaning?", a: "Yes, deep cleaning takes more time and effort. Prices start around $180 for small homes in Meridian. Contact us for an exact quote." },
  ],
};

const esContent = {
  title: "Limpieza Profunda",
  headline: "Limpieza Profunda en Meridian, Idaho",
  intro: "Nuestro servicio de limpieza profunda en Meridian, Idaho va mucho más allá de una limpieza estándar. Llegamos a cada rincón, cada superficie y cada detalle que la limpieza regular no alcanza — dejando tu hogar u oficina verdaderamente impecable.",
  whyTitle: "¿Por Qué Elegir Nuestra Limpieza Profunda?",
  features: [
    "Limpieza profunda de arriba a abajo — sin atajos",
    "Interior de electrodomésticos: horno, refrigerador, microondas",
    "Tallado de juntas y limpieza de azulejos",
    "Rodapiés, marcos de puertas y rieles de ventanas",
    "Más de 20 años de experiencia en limpieza profunda en Idaho",
    "Ideal antes de fiestas, después de remodelaciones o para limpieza de temporada",
    "Garantía de satisfacción al 100%",
  ],
  includedTitle: "Qué Incluye el Servicio",
  included: [
    "Cocina: interior de horno, refrigerador, lavavajillas, exterior de gabinetes",
    "Baños: tallado de juntas, detrás del inodoro, rieles de ducha",
    "Todos los rodapiés, marcos de puertas y marcos de ventanas limpios y desinfectados",
    "Aspas de ventiladores de techo y lámparas desempolvadas",
    "Interior de todos los clósets: repisas y pisos limpiados",
    "Rieles de ventanas y puertas corredizas limpiados",
    "Placas de apagadores y tapas de contactos desinfectadas",
    "Aspirado y trapeado debajo de muebles",
  ],
  areasTitle: "Limpieza Profunda Disponible En:",
  areas: ["Meridian, Idaho", "Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Eagle, Idaho", "Kuna, Idaho", "Star, Idaho"],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    { q: "¿Con qué frecuencia debo hacer una limpieza profunda en Meridian Idaho?", a: "Recomendamos una limpieza profunda cada 3–6 meses, más una limpieza de mantenimiento regular entre cada una. Los clientes nuevos frecuentemente empiezan con una limpieza profunda antes de pasar a servicio semanal o quincenal." },
    { q: "¿Cuánto tiempo tarda una limpieza profunda?", a: "Según el tamaño y estado del hogar, la limpieza profunda tarda entre 3 y 6 horas. Te daremos un estimado de tiempo cuando reserves." },
    { q: "¿La limpieza profunda es más cara que la limpieza regular?", a: "Sí, requiere más tiempo y esfuerzo. Los precios comienzan en aproximadamente $180 para casas pequeñas en Meridian. Contáctanos para una cotización exacta." },
  ],
};

export default function DeepCleaningMeridianIdaho() {
  return <ServicePageTemplate en={enContent} es={esContent} />;
}
