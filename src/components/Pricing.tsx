"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">{p.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{p.h2}</h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">{p.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-shadow hover:shadow-xl ${
                tier.highlight
                  ? "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-200"
                  : "bg-white border-slate-100 text-slate-800"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {p.mostPopular}
                </span>
              )}

              <h3 className={`text-lg font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                {tier.name}
              </h3>
              <p className={`text-xs mt-0.5 ${tier.highlight ? "text-teal-200" : "text-slate-400"}`}>
                {tier.subtitle}
              </p>

              <div className="mt-4 mb-6">
                <span className={`text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-teal-600"}`}>
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-2.5 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-teal-200" : "text-teal-500"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.highlight ? "text-teal-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`mt-8 block text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  tier.highlight
                    ? "bg-white text-teal-700 hover:bg-teal-50"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          {p.disclaimer}{" "}
          <Link href="/#contact" className="text-teal-600 hover:underline font-medium">
            {p.disclaimerLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
