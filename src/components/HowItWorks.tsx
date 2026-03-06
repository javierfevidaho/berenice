"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">{h.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">{h.h2}</h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">{h.description}</p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"
            aria-hidden="true"
          />
          <div className="grid md:grid-cols-3 gap-10">
            {h.steps.map((step) => (
              <div key={step.number} className="text-center group">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full bg-teal-50 border-2 border-teal-200 shadow-md flex flex-col items-center justify-center group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:shadow-teal-200 transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{step.icon}</span>
                    <span className="text-xs font-bold text-teal-600 group-hover:text-teal-100 transition-colors mt-0.5">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/#contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-100"
          >
            {h.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
