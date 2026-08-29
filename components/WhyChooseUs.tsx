"use client";

import React from "react";
import {
  Clock,
  CheckCircle,
  Receipt,
  ShieldAlert,
  Award,
  Sparkles,
  Check,
  X,
  Shield,
  Zap,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function WhyChooseUs() {
  const { t, isRtl } = useAppLanguage();

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-5 h-5 text-orange-500" />;
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case "Receipt":
        return <Receipt className="w-5 h-5 text-sky-500" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case "Award":
        return <Award className="w-5 h-5 text-amber-500" />;
      case "Sparkle":
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      default:
        return <Shield className="w-5 h-5 text-sky-500" />;
    }
  };

  const comparisonRows = [
    {
      feat: t.whyUs.row1.feat,
      us: t.whyUs.row1.us,
      them: t.whyUs.row1.them,
    },
    {
      feat: t.whyUs.row2.feat,
      us: t.whyUs.row2.us,
      them: t.whyUs.row2.them,
    },
    {
      feat: t.whyUs.row3.feat,
      us: t.whyUs.row3.us,
      them: t.whyUs.row3.them,
    },
    {
      feat: t.whyUs.row4.feat,
      us: t.whyUs.row4.us,
      them: t.whyUs.row4.them,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070b14] transition-colors border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.whyUs.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#111c33] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="p-2.5 bg-slate-50 dark:bg-slate-900 w-fit rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
                {getWhyIcon(item.icon)}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {isRtl ? item.titleAr : item.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isRtl ? item.descAr : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Clean Corporate Comparison Table */}
        <div className="bg-white dark:bg-[#111c33] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {t.whyUs.comparisonTitle}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 text-start w-1/3">
                    {t.whyUs.colFeature}
                  </th>
                  <th className="py-3 px-4 font-bold text-slate-900 dark:text-white text-start w-1/3 bg-slate-50 dark:bg-slate-900/60 rounded-t-lg">
                    {t.whyUs.colUs}
                  </th>
                  <th className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 text-start w-1/3">
                    {t.whyUs.colOthers}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-4 px-4 font-medium text-slate-700 dark:text-slate-300">
                      {row.feat}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/60">
                      <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Check className="w-4 h-4 shrink-0 stroke-[2.5]" />
                        {row.us}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                        <X className="w-4 h-4 shrink-0 text-slate-400" />
                        {row.them}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
