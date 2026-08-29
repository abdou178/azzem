"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { SUBURBS_COVERAGE, CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function SuburbCoverage() {
  const { t, isRtl } = useAppLanguage();

  const getAreaWhatsAppLink = (suburbName: string) => {
    const msg = isRtl
      ? `🚨 *طلب طوارئ تكييف من:* ${suburbName}\nأرجو إرسال فني طوارئ إلى مجمع الفلل الخاص بي في دبي.`
      : `🚨 *EMERGENCY AC DISPATCH REQUEST:* ${suburbName}\nPlease send the nearest mobile AC repair van to my villa.`;

    return `https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="coverage" className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070b14] transition-colors border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.coverage.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.coverage.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* 10 Suburb Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {SUBURBS_COVERAGE.map((suburb) => {
            const name = isRtl ? suburb.nameAr : suburb.nameEn;
            const type = isRtl ? suburb.typeAr : suburb.typeEn;

            return (
              <div
                key={suburb.id}
                className="p-4 rounded-xl bg-white dark:bg-[#111c33] border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <MapPin className="w-4 h-4 text-sky-500" />
                    <span className="flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
                      <Clock className="w-3 h-3" />
                      {suburb.estimatedArrivalMin} {isRtl ? "دقيقة" : "mins"}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {name}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
                    {type}
                  </p>
                </div>

                <a
                  href={getAreaWhatsAppLink(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2 px-3 rounded-lg text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.coverage.callFromArea}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Central Operations Reassurance */}
        <div className="bg-white dark:bg-[#111c33] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-start">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {isRtl
                ? "فيلا خاصة أو قصر خارج المناطق المذكورة أعلاه؟"
                : "Live in a villa community not listed above?"}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {isRtl
                ? "نغطي كافة أحياء وفلل دبي وضواحيها. اتصل بمركز الطوارئ لتحديد أقرب سيارة صيانة متاحة فوراً."
                : "We cover all residential villa communities across Dubai. Call our central dispatch line to deploy the nearest crew."}
            </p>
          </div>

          <a
            href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span className="font-mono" dir="ltr">
              {CONTRACTOR_PROFILE.phoneFormatted}
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
