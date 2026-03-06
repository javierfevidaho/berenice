"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export type ServicePageContent = {
  title: string;
  headline: string;
  intro: string;
  whyTitle: string;
  features: string[];
  includedTitle: string;
  included: string[];
  areasTitle: string;
  areas: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
};

type Props = {
  en: ServicePageContent;
  es: ServicePageContent;
};

export default function ServicePageTemplate({ en, es }: Props) {
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
              Berenice&apos;s Sparkle Clean · Boise, Idaho
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">{c.headline}</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{c.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105">
                {lang === "es" ? "Cotización Gratis" : "Get Free Quote"}
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="border-2 border-white/40 hover:border-white/70 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10">
                📞 {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Features + Included */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">{c.whyTitle}</h2>
              <ul className="space-y-4">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="inline-block mt-8 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105">
                {lang === "es" ? `Reservar ${c.title}` : `Book ${c.title} Now`}
              </Link>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">{c.includedTitle}</h2>
              <ul className="space-y-3">
                {c.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="text-teal-500 font-bold text-base shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-14 bg-teal-50 border-y border-teal-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{c.areasTitle}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {c.areas.map((a) => (
                <span key={a} className="bg-white border border-teal-200 text-teal-700 text-sm font-medium px-4 py-2 rounded-full">
                  📍 {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {c.faq.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">{c.faqTitle}</h2>
              <div className="space-y-5">
                {c.faq.map((item) => (
                  <details key={item.q} className="border border-slate-200 rounded-xl p-5 group">
                    <summary className="font-semibold text-slate-800 cursor-pointer list-none flex items-center justify-between gap-3">
                      {item.q}
                      <svg className="w-5 h-5 text-teal-500 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-slate-500 text-sm leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
