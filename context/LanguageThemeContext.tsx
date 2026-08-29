"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { DICTIONARY } from "@/lib/contractor-data";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: typeof DICTIONARY["en"];
  theme: string | undefined;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function LanguageStateProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("azeem_ac_lang") as Language | null;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguageState(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("azeem_ac_lang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  }, [language, setLanguage]);

  const toggleTheme = useCallback(() => {
    const active = resolvedTheme || theme;
    setTheme(active === "dark" ? "light" : "dark");
  }, [resolvedTheme, theme, setTheme]);

  const isRtl = language === "ar";
  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
        theme: mounted ? (resolvedTheme || theme) : "dark",
        setTheme,
        toggleTheme,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageStateProvider>{children}</LanguageStateProvider>
    </NextThemesProvider>
  );
}

export function useAppLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useAppLanguage must be used within AppProviders");
  }
  return context;
}
