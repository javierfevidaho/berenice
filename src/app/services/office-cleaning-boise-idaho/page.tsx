import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Office Cleaning Boise Idaho | Limpieza de Oficinas Boise | Berenice's Sparkle Clean",
  description:
    "Professional office cleaning in Boise and Nampa Idaho. Limpieza de oficinas profesional en Boise ID. Flexible schedule, insured, bilingual. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/office-cleaning-boise-idaho` },
};

const enContent = {
  title: "Office Cleaning",
  headline: "Office Cleaning Nampa Idaho & Boise",
  intro: "A clean office is a productive office. Berenice's Sparkle Clean provides professional office cleaning in Boise and Nampa, Idaho. We work around your schedule so your business never skips a beat.",
  whyTitle: "Why Choose Our Office Cleaning?",
  features: [
    "Serving offices in Boise and Nampa Idaho since 2004",
    "Flexible scheduling around your business hours",
    "Discreet, professional, and trustworthy team",
    "Fully insured — protecting your business and equipment",
    "Customizable cleaning checklists per your needs",
    "Daily, weekly, bi-weekly, and monthly plans",
    "Bilingual communication: English and Spanish",
  ],
  includedTitle: "What's Included",
  included: [
    "Workstations and desks wiped and sanitized",
    "Common areas, lobbies, and conference rooms",
    "Breakroom and kitchen: sink, microwave, counters",
    "Restrooms: toilets, sinks, floors, mirrors, restocking",
    "Vacuuming carpets and mopping hard floors",
    "Trash removal and liner replacement",
    "Window sills, ledges, and glass surfaces",
    "High-touch surfaces disinfected",
  ],
  areasTitle: "Office Cleaning Available In:",
  areas: ["Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Meridian, Idaho", "Eagle, Idaho", "Garden City, Idaho"],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { q: "How much does office cleaning cost in Boise Idaho?", a: "Office cleaning in Boise starts around $80–$150 for small offices and is custom-quoted for larger spaces. Contact us for a free estimate." },
    { q: "Can you clean our office after hours or on weekends?", a: "Absolutely. We offer early morning, evening, and weekend cleaning to avoid disrupting your work day." },
    { q: "Do you serve Nampa and Caldwell offices too?", a: "Yes! We serve offices throughout the Treasure Valley including Nampa, Caldwell, Meridian, and Eagle, Idaho." },
  ],
};

const esContent = {
  title: "Limpieza de Oficinas",
  headline: "Limpieza de Oficinas en Nampa y Boise Idaho",
  intro: "Una oficina limpia es una oficina productiva. Berenice's Sparkle Clean ofrece limpieza profesional de oficinas en Boise y Nampa, Idaho. Trabajamos con tu horario para que tu negocio nunca se detenga.",
  whyTitle: "¿Por Qué Elegir Nuestra Limpieza de Oficinas?",
  features: [
    "Sirviendo oficinas en Boise y Nampa Idaho desde 2004",
    "Horarios flexibles alrededor de tu jornada laboral",
    "Equipo discreto, profesional y de confianza",
    "Totalmente asegurada — protegiendo tu negocio y equipo",
    "Listas de limpieza personalizables según tus necesidades",
    "Planes diarios, semanales, quincenales y mensuales",
    "Comunicación bilingüe: Inglés y Español",
  ],
  includedTitle: "Qué Incluye el Servicio",
  included: [
    "Escritorios y estaciones de trabajo limpiados y desinfectados",
    "Áreas comunes, lobbies y salas de conferencias",
    "Sala de descanso y cocina: fregadero, microondas, mostradores",
    "Baños: inodoros, lavabos, pisos, espejos, reposición de suministros",
    "Aspirado de alfombras y trapeado de pisos duros",
    "Retiro de basura y cambio de bolsas",
    "Marcos de ventanas y superficies de vidrio",
    "Desinfección de superficies de alto contacto",
  ],
  areasTitle: "Limpieza de Oficinas Disponible En:",
  areas: ["Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Meridian, Idaho", "Eagle, Idaho", "Garden City, Idaho"],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    { q: "¿Cuánto cuesta la limpieza de oficinas en Boise Idaho?", a: "La limpieza de oficinas en Boise comienza en $80–$150 para oficinas pequeñas y se cotiza de forma personalizada para espacios más grandes. Contáctanos para un estimado gratuito." },
    { q: "¿Pueden limpiar nuestra oficina fuera de horario o los fines de semana?", a: "Por supuesto. Ofrecemos limpieza temprano por la mañana, por la tarde y los fines de semana para no interrumpir tu jornada laboral." },
    { q: "¿También sirven oficinas en Nampa y Caldwell?", a: "¡Sí! Servimos oficinas en todo el Valle del Tesoro incluyendo Nampa, Caldwell, Meridian y Eagle, Idaho." },
  ],
};

export default function OfficeCleaningBoiseIdaho() {
  return <ServicePageTemplate en={enContent} es={esContent} />;
}
