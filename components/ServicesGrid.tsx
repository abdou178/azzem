"use client";

import React from "react";
import {
  Zap,
  Gauge,
  Droplets,
  Cpu,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { CORE_SERVICES, CONTRACTOR_PROFILE, ServiceItem } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function ServicesGrid() {
  const { t, isRtl } = useAppLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-orange-500" />;
      case "Gauge":
        return <Gauge className="w-5 h-5 text-sky-500" />;
      case "Droplets":
        return <Droplets className="w-5 h-5 text-blue-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <Zap className="w-5 h-5 text-orange-500" />;
    }
  };

  const getServiceWhatsAppLink = (service: ServiceItem) => {
    const title = isRtl ? service.titleAr : service.titleEn;
    const msg = isRtl
      ? `🚨 *طلب خدمة تكييف:* ${title}\nأرجو إرسال فني متخصص إلى فيلتي في دبي. الهاتف: ${CONTRACTOR_PROFILE.phoneFormatted}`
      : `🚨 *AC SERVICE REQUEST:* ${title}\nPlease dispatch an HVAC technician to my villa in Dubai. Phone: ${CONTRACTOR_PROFILE.phoneFormatted}`;

    return `https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-[#0b1120] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.services.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const bullets = isRtl ? service.bulletPointsAr : service.bulletPointsEn;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#111c33] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Price */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <div className="text-end">
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">
                        {t.services.startingFrom}
                      </span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">
                        {service.priceFromAED}{" "}
                        <span className="text-xs font-medium text-slate-500">AED</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {isRtl ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {isRtl ? service.shortDescAr : service.shortDescEn}
                  </p>

                  {/* Time & Warranty Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                      <Clock className="w-3 h-3 text-sky-500" />
                      {isRtl ? service.timeEstimateAr : service.timeEstimateEn}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      {isRtl ? service.warrantyAr : service.warrantyEn}
                    </span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-1.5 mb-6 border-t border-slate-100 dark:border-slate-800 pt-3">
                    {bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dispatch Button */}
                <div className="pt-2">
                  <a
                    href={getServiceWhatsAppLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-orange-600 dark:hover:bg-orange-600 text-white font-semibold p-3 rounded-xl text-xs transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>{t.services.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
