"use client";

import React, { useState } from "react";
import {
  Flame,
  Droplets,
  Zap,
  Snowflake,
  Cpu,
  AlertTriangle,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";
import {
  EMERGENCY_ISSUES,
  SUBURBS_COVERAGE,
  CONTRACTOR_PROFILE,
} from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function InteractiveACTriage() {
  const { t, isRtl } = useAppLanguage();
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
        return <Flame className="w-5 h-5 text-orange-500" />;
      case "ac-ceiling-water-leak":
        return <Droplets className="w-5 h-5 text-sky-500" />;
      case "compressor-tripping-breaker":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "frozen-ac-ice-buildup":
        return <Snowflake className="w-5 h-5 text-cyan-500" />;
      case "thermostat-error-code":
        return <Cpu className="w-5 h-5 text-purple-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
    }
  };

  const generateWhatsAppUrl = () => {
    const issueTitle = isRtl ? selectedIssue.titleAr : selectedIssue.titleEn;
    const suburbName = isRtl ? selectedSuburb.nameAr : selectedSuburb.nameEn;
    const urgency = isRtl ? selectedIssue.urgencyAr : selectedIssue.urgencyEn;

    const message = isRtl
      ? `🚨 *طلب طوارئ صيانة تكييف - شركة عظيم دبي*
📍 *الموقع:* ${suburbName}
⚠️ *العطل المشخص:* ${issueTitle}
⚡ *درجة الخطورة:* ${urgency}
⏱️ *الوقت المقدر للوصول:* ${selectedSuburb.estimatedArrivalMin} دقيقة
يرجى إرسال أقرب فني مجهز بالقطع فوراً.`
      : `🚨 *URGENT AC EMERGENCY DISPATCH - Azeem AC Dubai*
📍 *Location:* ${suburbName}
⚠️ *Detected Issue:* ${issueTitle}
⚡ *Severity:* ${urgency}
⏱️ *Target ETA:* ${selectedSuburb.estimatedArrivalMin} Mins
Please dispatch the nearest on-call HVAC van immediately.`;

    return `https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="emergency-triage"
      className="py-16 sm:py-20 bg-slate-100/60 dark:bg-[#070b14] text-slate-900 dark:text-white transition-colors border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-orange-500" />
            <span>{t.triage.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.triage.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.triage.subtitle}
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Selectable Fault Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
              {t.triage.selectIssue}
            </h3>

            <div className="space-y-2.5">
              {EMERGENCY_ISSUES.map((issue) => {
                const isSelected = issue.id === selectedIssueId;
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`w-full text-start p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center gap-4 ${
                      isSelected
                        ? "bg-white dark:bg-[#111c33] border-sky-500 shadow-md ring-1 ring-sky-500/30"
                        : "bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        {getIssueIcon(issue.id)}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {isRtl ? issue.urgencyAr : issue.urgencyEn}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {isRtl ? issue.titleAr : issue.titleEn}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                        {isRtl ? issue.descriptionAr : issue.descriptionEn}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-center w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 shrink-0">
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-sky-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Suburb Selection & Dispatch Action (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            {/* Suburb Selector */}
            <div className="bg-white dark:bg-[#111c33] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <label htmlFor="triage-suburb-select" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2.5">
                {t.triage.selectLocation}
              </label>

              <div className="relative">
                <select
                  id="triage-suburb-select"
                  aria-label="Select your Dubai Villa Community"
                  value={selectedSuburbId}
                  onChange={(e) => setSelectedSuburbId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl p-3 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 outline-none appearance-none cursor-pointer"
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

              <div className="flex items-center justify-between mt-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-500" />
                  {isRtl ? "الوقت التقديري للوصول:" : "Est. Arrival ETA:"}
                </span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {selectedSuburb.estimatedArrivalMin} {isRtl ? "دقيقة" : "Minutes"}
                </span>
              </div>
            </div>

            {/* Generated Ticket Summary */}
            <div className="bg-white dark:bg-[#111c33] rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {t.triage.selectedSummary}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  {isRtl ? "جاهز للإرسال" : "Ready to Dispatch"}
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{t.triage.faultLabel}</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {isRtl ? selectedIssue.titleAr : selectedIssue.titleEn}
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{t.triage.locationLabel}</span>
                  <p className="text-sm font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {isRtl ? selectedSuburb.nameAr : selectedSuburb.nameEn}
                  </p>
                </div>

                {/* Immediate Safety Recommendation */}
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl p-3 text-amber-900 dark:text-amber-200">
                  <span className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300 text-xs mb-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    {t.triage.recommendedAction}
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {isRtl ? selectedIssue.recommendedActionAr : selectedIssue.recommendedActionEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold p-3.5 rounded-xl shadow-sm text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.triage.dispatchBtn}</span>
                </a>

                <a
                  href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold p-3 rounded-xl transition-all text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 fill-current text-orange-400" />
                  <span>{t.triage.directCallBtn}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
