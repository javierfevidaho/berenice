"use client";

import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          {h.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
          {h.h1_plain}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">
            {h.h1_highlight}
          </span>
          <br />
          {h.h1_location}
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 animate-fade-in-up delay-200">
          {h.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link
            href="/#contact"
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {h.cta_quote}
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="border-2 border-white/40 hover:border-white/80 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {h.cta_call} {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in-up delay-400">
          {h.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in-up delay-400">
          {h.badges.map((b) => (
            <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 72L1440 72L1440 36C1200 72 960 0 720 36C480 72 240 0 0 36L0 72Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
