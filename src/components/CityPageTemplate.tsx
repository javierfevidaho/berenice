"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export type CityPageContent = {
  city: string;
  state: string;
  headline: string;
  intro: string;
  whyTitle: string;
  localDetails: string;
  neighborhoodsTitle: string;
  neighborhoods: string[];
  servicesTitle: string;
  ctaLabel: string;
};

type Props = {
  en: CityPageContent;
  es: CityPageContent;
};

export default function CityPageTemplate({ en, es }: Props) {
  const { lang } = useLanguage();
  const c = lang === "es" ? es : en;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              📍 {lang === "es" ? "Servicio en" : "Serving"} {c.city}, {c.state}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">{c.headline}</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{c.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105">
                {c.ctaLabel}
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="border-2 border-white/40 hover:border-white/70 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10">
                📞 {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Local info */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5">{c.whyTitle}</h2>
            <p className="text-slate-600 leading-relaxed mb-8">{c.localDetails}</p>

            <h3 className="text-xl font-bold text-slate-800 mb-4">{c.neighborhoodsTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {c.neighborhoods.map((n) => (
                <span key={n} className="bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-4 py-2 rounded-full">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services in this city */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">{c.servicesTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => {
                const item = lang === "es"
                  ? { title: es.city, shortDesc: "" }
                  : { title: en.city, shortDesc: "" };
                // Use translated service names from context
                return (
                  <div key={svc.title} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="text-2xl">{svc.icon}</span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {lang === "es"
                        ? `${["Limpieza de Casas","Limpieza de Apartamentos","Limpieza de Oficinas","Limpieza Comercial","Limpieza de Mudanza","Limpieza Profunda"][i]} — ${c.city}`
                        : `${["House Cleaning","Apartment Cleaning","Office Cleaning","Commercial Cleaning","Move-In/Out Cleaning","Deep Cleaning"][i]} — ${c.city}`
                      }
                    </h3>
                    {svc.slug && (
                      <Link href={`/services/${svc.slug}`} className="mt-4 inline-block text-teal-600 text-sm font-semibold hover:underline">
                        {lang === "es" ? "Ver más →" : "Learn more →"}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
