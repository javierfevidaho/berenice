"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { en } from "@/lib/translations/en";
import { es } from "@/lib/translations/es";
import type { Lang, Translation } from "@/lib/translations/types";

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Restore preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = lang === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
