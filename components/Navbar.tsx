"use client";

import React, { useState } from "react";
import {
  Snowflake,
  Phone,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function Navbar() {
  const { language, toggleLanguage, theme, toggleTheme, t, isRtl, mounted } =
    useAppLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: isRtl ? "تشخيص الأعطال" : "Emergency Triage", href: "#emergency-triage" },
    { label: isRtl ? "لماذا نحن" : "Why Choose Us", href: "#why-us" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.coverage, href: "#coverage" },
    { label: t.nav.reviews, href: "#reviews" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4"
      >
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-sky-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform group-hover:scale-105">
            <Snowflake className="w-5 h-5 text-sky-400" />
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {isRtl ? CONTRACTOR_PROFILE.businessNameAr : CONTRACTOR_PROFILE.businessNameEn}
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {isRtl ? "خدمات تكييف وتشيلر الفلل الفاخرة • دبي" : "Dubai Luxury Villa HVAC & Chiller Services"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Arabic"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-lg transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-sky-500" />
            <span>{language === "en" ? "عربي" : "EN"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-lg transition-all"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Direct Emergency Call Button */}
          <a
            href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span className="font-mono tracking-tight" dir="ltr">
              {CONTRACTOR_PROFILE.phoneFormatted}
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1120] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-900 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl shadow-sm text-sm"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>{isRtl ? "اتصال الطوارئ المباشر:" : "Emergency Dispatch:"}</span>
            <span className="font-mono" dir="ltr">
              {CONTRACTOR_PROFILE.phoneFormatted}
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
