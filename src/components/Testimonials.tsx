"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">{tm.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{tm.h2}</h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">{tm.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tm.items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col hover:shadow-lg transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-1 mb-4" aria-label="5 stars">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full w-fit mb-3">
                {item.service}
              </span>

              <p className="text-slate-600 text-sm leading-relaxed flex-grow" itemProp="reviewBody">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" itemProp="author">{item.name}</div>
                  <div className="text-slate-400 text-xs">📍 {item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
