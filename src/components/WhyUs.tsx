"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.whyUs;

  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">{w.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{w.h2}</h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">{w.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {w.reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl">{r.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {w.stats.map((s) => (
            <div key={s.label} className="bg-teal-600 rounded-2xl py-6 px-4 text-center text-white">
              <div className="text-2xl font-extrabold">{s.value}</div>
              <div className="text-teal-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
