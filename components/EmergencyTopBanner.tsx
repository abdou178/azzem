"use client";

import React from "react";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function EmergencyTopBanner() {
  const { isRtl } = useAppLanguage();

  return (
    <aside
      aria-label="Emergency Dispatch Status"
      className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 relative z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Status Indicator & Live Dispatch Message */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <p className="text-[11px] sm:text-xs font-medium text-slate-300">
            {isRtl ? (
              <>
                <strong className="text-white font-semibold">طواقم طوارئ التكييف في وضع الاستعداد</strong> • متوسط الوصول 25–35 دقيقة لجميع مجمعات الفلل
              </>
            ) : (
              <>
                <strong className="text-white font-semibold">On-Call Master Technicians on Standby</strong> • 25–35 Min Arrival Across Dubai Luxury Villas
              </>
            )}
          </p>
        </div>

        {/* Right Info: Direct Phone Dial */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            {isRtl ? "ضمان 90 يوماً" : "90-Day Parts Warranty"}
          </span>
          <a
            href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-mono text-xs" dir="ltr">
              {CONTRACTOR_PROFILE.phoneFormatted}
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
