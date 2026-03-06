import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Move-In Move-Out Cleaning Boise Idaho | Limpieza de Mudanza Boise | Berenice's Sparkle Clean",
  description:
    "Move-in and move-out cleaning in Boise Idaho. Limpieza de mudanza en Boise ID. Get your deposit back. Insured, bilingual, same-day available. Free quote!",
  alternates: { canonical: `${SITE_URL}/services/move-in-move-out-cleaning-boise` },
};

const enContent = {
  title: "Move-In / Move-Out Cleaning",
  headline: "Move-In & Move-Out Cleaning Boise Idaho",
  intro: "Moving in Boise, Nampa, or across Treasure Valley? Our move-in and move-out cleaning service ensures you leave (or arrive in) a spotless property. We help tenants get their full deposit back and help landlords turn units faster.",
  whyTitle: "Why Choose Our Move-In/Out Cleaning?",
  features: [
    "Comprehensive top-to-bottom move-out clean",
    "Increases chances of getting your full deposit back",
    "Ideal for landlords turning units between tenants",
    "Fast scheduling — same week or same day available",
    "Serving all of Boise and Treasure Valley Idaho",
    "Detailed cleaning checklist that satisfies landlords",
    "100% satisfaction guaranteed",
  ],
  includedTitle: "What's Included",
  included: [
    "Full kitchen: inside/outside oven, fridge, all cabinets, drawers",
    "All bathrooms: deep scrub of tub, shower, toilet, grout",
    "All rooms: walls wiped, baseboards, windows, blinds",
    "Closets: fully emptied, shelves dusted, floors vacuumed",
    "Carpet vacuuming and hard floor mopping throughout",
    "Garage sweep if applicable",
    "All high-touch surfaces disinfected",
    "Trash removal — we haul everything out",
  ],
  areasTitle: "Move-In/Out Cleaning Available In:",
  areas: ["Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Meridian, Idaho", "Eagle, Idaho", "Star, Idaho", "Kuna, Idaho", "Garden City, Idaho"],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { q: "Will a move-out cleaning help me get my deposit back in Boise?", a: "In most cases, yes. Our detailed move-out cleaning checklist is designed to meet landlord and property management standards throughout Boise and the Treasure Valley." },
    { q: "How soon can you schedule a move-out clean in Boise?", a: "We often have same-week or even same-day availability. Call us right away when you know your move-out date." },
    { q: "Do you clean move-out rentals in Nampa and Meridian too?", a: "Yes! We cover all of the Treasure Valley including Nampa, Caldwell, Meridian, Eagle, and surrounding areas." },
  ],
};

const esContent = {
  title: "Limpieza de Mudanza",
  headline: "Limpieza de Entrada y Salida en Boise, Idaho",
  intro: "¿Te mudas en Boise, Nampa o en el Valle del Tesoro? Nuestro servicio de limpieza de mudanza garantiza que dejes (o llegues a) una propiedad impecable. Ayudamos a inquilinos a recuperar su depósito completo y a propietarios a entregar unidades más rápido.",
  whyTitle: "¿Por Qué Elegir Nuestra Limpieza de Mudanza?",
  features: [
    "Limpieza completa de arriba a abajo",
    "Aumenta las posibilidades de recuperar tu depósito completo",
    "Ideal para propietarios entre inquilinos",
    "Programación rápida — disponible en la misma semana o el mismo día",
    "Servicio en todo Boise y el Valle del Tesoro de Idaho",
    "Lista de limpieza detallada que satisface a los caseros",
    "Garantía de satisfacción al 100%",
  ],
  includedTitle: "Qué Incluye el Servicio",
  included: [
    "Cocina completa: interior/exterior de horno, refrigerador, todos los gabinetes y cajones",
    "Todos los baños: tallado profundo de tina, ducha, inodoro, juntas",
    "Todos los cuartos: paredes limpias, rodapiés, ventanas, persianas",
    "Clósets: completamente limpiados, repisas desempolvadas, pisos aspirados",
    "Aspirado de alfombras y trapeado de pisos duros en toda la propiedad",
    "Barrido del garaje si aplica",
    "Todas las superficies de alto contacto desinfectadas",
    "Retiro de basura — sacamos todo",
  ],
  areasTitle: "Limpieza de Mudanza Disponible En:",
  areas: ["Boise, Idaho", "Nampa, Idaho", "Caldwell, Idaho", "Meridian, Idaho", "Eagle, Idaho", "Star, Idaho", "Kuna, Idaho", "Garden City, Idaho"],
  faqTitle: "Preguntas Frecuentes",
  faq: [
    { q: "¿La limpieza de salida me ayudará a recuperar mi depósito en Boise?", a: "En la mayoría de los casos, sí. Nuestra lista de limpieza detallada está diseñada para cumplir con los estándares de caseros y administradores de propiedades en Boise y el Valle del Tesoro." },
    { q: "¿Con qué rapidez pueden programar la limpieza de salida en Boise?", a: "Frecuentemente tenemos disponibilidad la misma semana o incluso el mismo día. Llámanos tan pronto sepas tu fecha de salida." },
    { q: "¿También limpian rentales en Nampa y Meridian?", a: "¡Sí! Cubrimos todo el Valle del Tesoro incluyendo Nampa, Caldwell, Meridian, Eagle y áreas cercanas." },
  ],
};

export default function MoveInMoveOutCleaningBoise() {
  return <ServicePageTemplate en={enContent} es={esContent} />;
}
