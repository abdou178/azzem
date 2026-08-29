"use client";

import React from "react";
import {
  Snowflake,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function Footer() {
  const { t, isRtl } = useAppLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-[#070b14] text-slate-300 border-t border-slate-800 pt-12 pb-24 lg:pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 text-sky-400 border border-slate-700">
                <Snowflake className="w-4 h-4 text-sky-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">
                  {isRtl ? CONTRACTOR_PROFILE.businessNameAr : CONTRACTOR_PROFILE.businessNameEn}
                </span>
                <span className="text-xs text-slate-400">
                  {isRtl ? "صيانة وتصليح تكييف الفلل • دبي" : "Luxury Villa HVAC Maintenance • Dubai"}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {t.footer.about}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{isRtl ? CONTRACTOR_PROFILE.operatingHoursAr : CONTRACTOR_PROFILE.operatingHoursEn}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#emergency-triage" className="hover:text-white transition-colors">
                  {isRtl ? "تشخيص الأعطال" : "Emergency Triage"}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {isRtl ? "لماذا نحن" : "Why Choose Us"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">
                  {t.nav.coverage}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.contactInfo}
            </h3>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
                className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    {isRtl ? "اتصال الطوارئ المباشر:" : "Emergency Direct Line:"}
                  </span>
                  <span className="font-mono font-bold text-xs" dir="ltr">
                    {CONTRACTOR_PROFILE.phoneFormatted}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 transition-colors text-white"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block">
                    {isRtl ? "واتساب الطوارئ:" : "WhatsApp Dispatch Line:"}
                  </span>
                  <span className="font-mono font-bold text-xs" dir="ltr">
                    +{CONTRACTOR_PROFILE.whatsappNumber}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2 text-xs text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{isRtl ? CONTRACTOR_PROFILE.baseLocationAr : CONTRACTOR_PROFILE.baseLocationEn}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {CONTRACTOR_PROFILE.businessNameEn}. {t.footer.rights}</p>
          <p className="text-slate-500 text-center sm:text-end max-w-md">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
