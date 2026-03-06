"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Berenice's Sparkle Clean home">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white text-lg font-bold select-none">
              ✦
            </div>
            <div className="leading-tight">
              <span className={`block text-sm font-extrabold transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                Berenice&apos;s
              </span>
              <span className={`block text-xs font-semibold tracking-wide transition-colors ${scrolled ? "text-teal-600" : "text-teal-200"}`}>
                Sparkle Clean
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {t.navbar.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${scrolled ? "text-slate-700" : "text-white/90"}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className={`text-sm font-semibold transition-colors hover:text-teal-400 ${scrolled ? "text-teal-600" : "text-teal-200"}`}
            >
              {BUSINESS.phone}
            </a>

            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
              className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 text-xs font-bold transition-all hover:scale-105 ${
                scrolled
                  ? "border-slate-300 text-slate-600 hover:border-teal-500 hover:text-teal-600"
                  : "border-white/40 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              <span className="text-base leading-none">{lang === "en" ? "🇲🇽" : "🇺🇸"}</span>
              {lang === "en" ? "Español" : "English"}
            </button>

            <Link
              href="/#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              {t.navbar.freeQuote}
            </Link>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
              className={`flex items-center gap-1 border rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
                scrolled
                  ? "border-slate-300 text-slate-600"
                  : "border-white/40 text-white"
              }`}
            >
              <span>{lang === "en" ? "🇲🇽" : "🇺🇸"}</span>
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
              aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-slate-100 py-3 shadow-lg">
            {t.navbar.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-slate-700 hover:bg-teal-50 hover:text-teal-700 font-medium text-sm"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-1 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 border border-teal-600 text-teal-700 font-semibold py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
              >
                📞 {BUSINESS.phone}
              </a>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="bg-teal-600 hover:bg-teal-700 text-white text-center font-semibold py-2.5 rounded-full text-sm transition-colors"
              >
                {t.navbar.freeQuote}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
