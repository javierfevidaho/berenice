import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "House Cleaning Boise Idaho | Limpieza de Casas Boise | Berenice's Sparkle Clean",
  description:
    "Professional house cleaning in Boise Idaho. Limpieza de casas profesional en Boise ID. Affordable, insured, bilingual. 20 years experience. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/house-cleaning-boise-idaho` },
};

const enContent = {
  title: "House Cleaning",
  headline: "House Cleaning Boise Idaho",
  intro: "Looking for a reliable, affordable house cleaning service in Boise, Idaho? Berenice's Sparkle Clean has been trusted by Boise families for over 20 years. Flexible scheduling, eco-friendly products, and a 100% satisfaction guarantee.",
  whyTitle: "Why Choose Our House Cleaning?",
  features: [
    "20+ years of experience cleaning Boise homes",
    "Fully insured and bonded for your protection",
    "Flexible scheduling: weekly, bi-weekly, or monthly",
    "Bilingual team — English and Spanish",
    "All cleaning supplies and equipment provided",
    "Background-checked, professional cleaners",
    "Satisfaction guarantee — we fix it free if missed",
  ],
  includedTitle: "What's Included",
  included: [
    "Kitchen: counters, stovetop, sink, microwave exterior, cabinet fronts",
    "Bathrooms: toilet, tub/shower, sink, mirror, floors",
    "All bedrooms: dusting, vacuuming, making beds",
    "Living areas: dusting furniture, vacuuming, mopping hard floors",
    "Trash removal throughout home",
    "Window sills and ledges dusted",
    "Door handles and light switches wiped down",
    "Add-on: inside oven, inside fridge, inside cabinets",
  ],
  areasTitle: "House Cleaning Available In:",
  areas: ["Boise, Idaho", "North End Boise", "East Boise", "Southwest Boise", "Southeast Boise", "Nampa, Idaho", "Meridian, Idaho", "Eagle, Idaho"],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { q: "How much does house cleaning cost in Boise Idaho?", a: "Our Boise house cleaning starts at $80 for studios and small apartments, $130 for medium homes (2–3 bedrooms), and $200+ for large homes. Contact us for an exact quote." },
    { q: "Do I need to be home when the cleaners arrive?", a: "No. Many of our Boise clients leave a key or provide an access code. We are fully insured and bonded." },
    { q: "Do you bring your own cleaning supplies?", a: "Yes! We bring all cleaning supplies and equipment. If you prefer we use your specific products, just let us know." },
    { q: "How far in advance do I need to book?", a: "We recommend 1–3 days in advance, but we also offer same-day cleaning in Boise when availability allows." },
  ],
};

const esContent = {
  title: "Limpieza de Casas",
  headline: "Limpieza de Casas en Boise, Idaho",
  intro: "¿Buscas un servicio de limpieza de casas confiable y accesible en Boise, Idaho? Berenice's Sparkle Clean ha sido de confianza para las familias de Boise por más de 20 años. Horarios flexibles, productos ecológicos y garantía de satisfacción al 100%.",
  whyTitle: "¿Por Qué Elegir Nuestra Limpieza de Casas?",
  features: [
    "Más de 20 años limpiando hogares en Boise",
    "Totalmente asegurada y certificada",
    "Horarios flexibles: semanal, quincenal o mensual",
    "Equipo bilingüe — Inglés y Español",
    "Todos los materiales de limpieza incluidos",
    "Personal verificado y profesional",
    "Garantía de satisfacción — si algo falta, lo arreglamos gratis",
  ],
  includedTitle: "Qué Incluye el Servicio",
  included: [
    "Cocina: gabinetes exteriores, estufa, fregadero, microondas exterior",
    "Baños: inodoro, tina/ducha, lavabo, espejo, pisos",
    "Habitaciones: desempolvado, aspirado, tender camas",
    "Áreas sociales: desempolvado, aspirado, trapeado de pisos duros",
    "Retiro de basura en toda la casa",
    "Marcos de ventanas y repisas desempolvados",
    "Manijas y apagadores desinfectados",
    "Extra: interior de horno, refrigerador, gabinetes (bajo pedido)",
  ],
  areasTitle: "Limpieza de Casas Disponible En:",
  areas: ["Boise, Idaho", "North End Boise", "East Boise", "Southwest Boise", "Southeast Boise", "Nampa, Idaho", "Meridian, Idaho", "Eagle, Idaho"],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    { q: "¿Cuánto cuesta la limpieza de casas en Boise Idaho?", a: "La limpieza de casas en Boise comienza en $80 para estudios y apartamentos pequeños, $130 para casas medianas (2–3 habitaciones) y $200+ para casas grandes. Contáctanos para una cotización exacta." },
    { q: "¿Necesito estar en casa cuando lleguen las limpiadoras?", a: "No. Muchos de nuestros clientes en Boise dejan una llave o dan un código de acceso. Estamos completamente aseguradas y certificadas." },
    { q: "¿Traen sus propios materiales de limpieza?", a: "¡Sí! Traemos todos los materiales y equipos. Si prefieres que usemos tus productos específicos, solo avísanos." },
    { q: "¿Con cuánta anticipación debo reservar?", a: "Recomendamos de 1 a 3 días de anticipación, pero también ofrecemos servicio el mismo día en Boise cuando hay disponibilidad." },
  ],
};

export default function HouseCleaningBoiseIdaho() {
  return <ServicePageTemplate en={enContent} es={esContent} />;
}
