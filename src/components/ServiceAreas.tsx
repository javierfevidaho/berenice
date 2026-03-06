"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceAreas() {
  const { t } = useLanguage();
  const a = t.areas;

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">{a.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{a.h2}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg">{a.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {a.cities.map((city) => (
            <Link
              key={city.name}
              href={`/${city.slug}`}
              className="group block bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-teal-300 hover:bg-teal-50 hover:shadow-lg transition-all duration-300"
              aria-label={`Cleaning services in ${city.name}, Idaho`}
            >
              <span className="text-3xl">{city.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-teal-700">
                {city.name}, Idaho
              </h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{city.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-teal-600 text-sm font-semibold">
                {city.viewServices}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">{a.alsoServing}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {a.otherAreas.map((area) => (
              <span
                key={area}
                className="bg-white border border-teal-200 text-teal-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-5">
            {a.notSure}{" "}
            <Link href="/#contact" className="text-teal-600 hover:underline font-medium">
              {a.contactUs}
            </Link>{" "}
            {a.notSureEnd}
          </p>
        </div>
      </div>
    </section>
  );
}
