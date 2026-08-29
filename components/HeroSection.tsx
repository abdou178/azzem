"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Clock,
  Star,
  ShieldCheck,
  Zap,
  Flame,
  Droplets,
  Snowflake,
  Cpu,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  CONTRACTOR_PROFILE,
  EMERGENCY_ISSUES,
  SUBURBS_COVERAGE,
} from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function HeroSection() {
  const { isRtl } = useAppLanguage();
  const [selectedIssueId, setSelectedIssueId] = useState<string>("ac-blowing-hot");
  const [selectedSuburbId, setSelectedSuburbId] = useState<string>("arabian-ranches");

  const selectedIssue =
    EMERGENCY_ISSUES.find((issue) => issue.id === selectedIssueId) ||
    EMERGENCY_ISSUES[0];

  const selectedSuburb =
    SUBURBS_COVERAGE.find((suburb) => suburb.id === selectedSuburbId) ||
    SUBURBS_COVERAGE[0];

  const getIssueIcon = (id: string) => {
    switch (id) {
      case "ac-blowing-hot":
        return <Flame className="w-4 h-4 text-orange-500 shrink-0" />;
      case "ac-ceiling-water-leak":
        return <Droplets className="w-4 h-4 text-sky-500 shrink-0" />;
      case "compressor-tripping-breaker":
        return <Zap className="w-4 h-4 text-amber-500 shrink-0" />;
      case "frozen-ac-ice-buildup":
        return <Snowflake className="w-4 h-4 text-cyan-500 shrink-0" />;
      case "thermostat-error-code":
        return <Cpu className="w-4 h-4 text-purple-500 shrink-0" />;
      default:
        return <Zap className="w-4 h-4 text-orange-500 shrink-0" />;
    }
  };

  const generateDispatchUrl = () => {
    const issueTitle = isRtl ? selectedIssue.titleAr : selectedIssue.titleEn;
    const suburbName = isRtl ? selectedSuburb.nameAr : selectedSuburb.nameEn;

    const message = isRtl
      ? `🚨 *طلب طوارئ صيانة تكييف - فلل دبي*
📍 *الموقع:* ${suburbName}
⚠️ *نوع المشكلة:* ${issueTitle}
⏱️ *وقت الوصول المتوقع:* ${selectedSuburb.estimatedArrivalMin} دقيقة
أرجو تأكيد إرسال فني الصيانة فوراً.`
      : `🚨 *PRIORITY AC DISPATCH REQUEST - Dubai Villas*
📍 *Community:* ${suburbName}
⚠️ *Reported Fault:* ${issueTitle}
⏱️ *Target ETA:* ${selectedSuburb.estimatedArrivalMin} Mins
Please dispatch the nearest technician with required parts immediately.`;

    return `https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-[#0b1120] transition-colors">
      {/* Subtle architectural radial lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Response Copy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 pt-2">
            
            {/* Clean Sub-badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 text-sky-800 dark:text-sky-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>
                {isRtl
                  ? "وحدة طوارئ تكييف فلل دبي • استجابة فورية"
                  : "Dubai Villa AC Breakdown Unit • Rapid Response"}
              </span>
            </div>

            {/* High Authority Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {isRtl ? (
                <>
                  طوارئ صيانة وتصليح المكيفات المركزية والتشيلر لفلل دبي الفاخرة 24/7
                </>
              ) : (
                <>
                  24/7 Emergency AC Repair & Chiller Diagnostics for Dubai Luxury Villas
                </>
              )}
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {isRtl
                ? "انقطاع التبريد، تسريب مياه السقف الجبس، أو فصل قاطع الكهرباء في حرارة الصيف يتطلب تدخلاً فورياً. فنيونا المعتمدون يصلون إلى مجمعات المرابع العربية ودبي هيلز وداماك هيلز خلال 25–35 دقيقة مع قطع الغيار الأصلية."
                : "AC blowing warm air, ceiling water leaks, or tripping breakers during extreme heat require immediate master diagnostics. Our certified technicians arrive at Arabian Ranches, Dubai Hills, and Damac Hills in 25–35 minutes with factory-grade OEM parts."}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-1">
              {/* Call Button */}
              <a
                href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-sm transition-all"
              >
                <Phone className="w-5 h-5 fill-current shrink-0" />
                <div className="flex flex-col items-start text-start leading-tight">
                  <span className="text-[11px] font-medium text-orange-100 uppercase tracking-wider">
                    {isRtl ? "اتصل بفني الطوارئ" : "Call Master Tech"}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-extrabold" dir="ltr">
                    {CONTRACTOR_PROFILE.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* WhatsApp SOS Button */}
              <a
                href={generateDispatchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-sm transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-current shrink-0" />
                <div className="flex flex-col items-start text-start leading-tight">
                  <span className="text-[11px] font-medium text-emerald-100 uppercase tracking-wider">
                    {isRtl ? "واتساب طوارئ" : "WhatsApp Priority SOS"}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold">
                    {isRtl ? "إرسال تذكرة الفحص" : "1-Tap Dispatch"}
                  </span>
                </div>
              </a>
            </div>

            {/* Clean Social Proof & Trust Row */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {CONTRACTOR_PROFILE.rating} / 5.0
                </span>
                <span>({CONTRACTOR_PROFILE.reviewCount}+ {isRtl ? "تقييم فلل" : "Villa Reviews"})</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <Clock className="w-3.5 h-3.5 text-sky-500" />
                <span>{isRtl ? "وصول 25–35 دقيقة" : "25–35 Min Arrival"}</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isRtl ? "ضمان 90 يوماً على القطع" : "90-Day Warranty"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Priority Dispatch Module (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white dark:bg-[#111c33] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-md">
              
              {/* Card Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{isRtl ? "طلب إرسال فني طوارئ للفيلا" : "Request Priority AC Dispatch"}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
                    {isRtl ? "متاح الآن 24/7" : "24/7 Standby"}
                  </span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {isRtl
                    ? "حدد نوع العطل والمنطقة لإرسال أقرب سيارة صيانة مجهزة بالقطع المطلوبة."
                    : "Select your AC fault and community to dispatch the nearest mobile workshop."}
                </p>
              </div>

              {/* Step 1: Select Fault */}
              <div className="space-y-2.5 mb-5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                  {isRtl ? "1. حدد نوع عطل المكيف:" : "1. Select AC Issue:"}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {EMERGENCY_ISSUES.slice(0, 4).map((issue) => {
                    const isSelected = issue.id === selectedIssueId;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssueId(issue.id)}
                        className={`w-full text-start p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-sky-50/70 dark:bg-sky-950/40 border-sky-500 text-slate-900 dark:text-white ring-1 ring-sky-500/30"
                            : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {getIssueIcon(issue.id)}
                          <span className="font-semibold truncate">
                            {isRtl ? issue.titleAr : issue.titleEn}
                          </span>
                        </div>

                        <div className="shrink-0 flex items-center">
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Villa Community */}
              <div className="space-y-2 mb-5">
                <label htmlFor="hero-suburb-select" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                  {isRtl ? "2. حدد مجمع الفلل السكني:" : "2. Select Villa Community:"}
                </label>
                <div className="relative">
                  <select
                    id="hero-suburb-select"
                    aria-label="Select your Dubai Villa Community"
                    value={selectedSuburbId}
                    onChange={(e) => setSelectedSuburbId(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl p-3 text-xs font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none appearance-none cursor-pointer"
                  >
                    {SUBURBS_COVERAGE.map((suburb) => (
                      <option key={suburb.id} value={suburb.id} className="bg-white dark:bg-slate-900">
                        {isRtl ? suburb.nameAr : suburb.nameEn} ({suburb.estimatedArrivalMin} {isRtl ? "دقيقة" : "mins"})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              </div>

              {/* Dynamic Dispatch Button */}
              <div className="space-y-2">
                <a
                  href={generateDispatchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold p-3.5 rounded-xl shadow-sm text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>
                    {isRtl ? "إرسال طلب طوارئ عبر الواتساب فوراً" : "Send Emergency Dispatch on WhatsApp"}
                  </span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1 pt-1">
                  <span>{isRtl ? "رسوم الفحص والكشف:" : "Diagnostic & Thermal Scan:"}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    From 180 AED <span className="font-normal text-slate-500">({isRtl ? "تُخصم عند التصليح" : "credited to repair"})</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
