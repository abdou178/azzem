"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle,
  Clock,
} from "lucide-react";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function TrustBadges() {
  const { t, isRtl } = useAppLanguage();

  const trustPoints = [
    {
      icon: ShieldCheck,
      titleEn: "90-Day Parts & Gas Guarantee",
      titleAr: "ضمان 90 يوماً على القطع والغاز",
      descEn: "Full replacement warranty on all replaced capacitors, fan motors, and brazed joints.",
      descAr: "ضمان استبدال شامل على المكثفات ومحركات المراوح ولحام النحاس المعتمد.",
      iconColor: "text-sky-500",
    },
    {
      icon: Award,
      titleEn: "Certified Master HVAC Engineers",
      titleAr: "مهندسون وفنيون معتمدون في التكييف",
      descEn: "8+ years experience in UAE residential ducted split and central chiller systems.",
      descAr: "خبرة لا تقل عن 8 سنوات في أنظمة الدكت المركزي والتشيلر لفلل الإمارات.",
      iconColor: "text-amber-500",
    },
    {
      icon: CheckCircle,
      titleEn: "100% Genuine OEM Heavy-Duty Parts",
      titleAr: "قطع غيار أصلية 100% شديدة التحمل",
      descEn: "Factory-certified components rated for extreme 55°C Arabian Gulf summer heatwaves.",
      descAr: "قطع مصنعية أصلية مجهزة لتحمل درجات الحرارة العالية فوق 55 درجة مئوية.",
      iconColor: "text-emerald-500",
    },
    {
      icon: Clock,
      titleEn: "25–35 Min Guaranteed Villa Arrival",
      titleAr: "وصول 25–35 دقيقة لجميع الفلل",
      descEn: "Mobile workshops stationed near Arabian Ranches, Dubai Hills, and Damac Hills.",
      descAr: "سيارات صيانة متنقلة متمركزة في المرابع العربية ودبي هيلز وداماك هيلز.",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#0f172a] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Trust Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-[#111c33] border border-slate-200 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm">
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {isRtl ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isRtl ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supported Brands Ticker / Grid */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
            {t.trust.supportedBrands}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CONTRACTOR_PROFILE.supportedBrands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
