"use client";

import React from "react";
import {
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { PRICING_PLANS, CONTRACTOR_PROFILE, PricingPlan } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function TransparentPricing() {
  const { t, isRtl } = useAppLanguage();

  const getPlanWhatsAppLink = (plan: PricingPlan) => {
    const title = isRtl ? plan.titleAr : plan.titleEn;
    const msg = isRtl
      ? `🚨 *استفسار عن باقة:* ${title} (${plan.priceAED} درهم)\nأرغب في حجز زيارة فحص وصيانة طارئة لفيلتي في دبي.`
      : `🚨 *PRICING PACKAGE INQUIRY:* ${title} (${plan.priceAED} AED)\nI'd like to book an emergency diagnostic/repair visit for my villa in Dubai.`;

    return `https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white dark:bg-[#0b1120] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.pricing.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const includes = isRtl ? plan.includesAr : plan.includesEn;
            const tag = isRtl ? plan.tagAr : plan.tagEn;
            const response = isRtl ? plan.responseAr : plan.responseEn;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? "bg-slate-900 text-white dark:bg-[#111c33] border-2 border-sky-500 shadow-lg lg:-translate-y-1"
                    : "bg-slate-50 dark:bg-[#111c33]/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="bg-sky-500 text-slate-950 text-[11px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-sm">
                      {t.pricing.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${plan.popular ? "text-sky-400" : "text-slate-500 dark:text-slate-400"}`}>
                      {tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {isRtl ? plan.titleAr : plan.titleEn}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {plan.priceAED}
                    </span>
                    <div className="flex flex-col text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>AED</span>
                      <span className="text-[10px] text-emerald-500 font-normal">
                        {isRtl ? "شامل الفحص" : "Tax Included"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600 dark:text-slate-400"}`}>
                    {isRtl ? plan.descriptionAr : plan.descriptionEn}
                  </p>

                  {/* Response Time Tag */}
                  <div className="flex items-center gap-2 mb-5 p-2.5 rounded-lg bg-white/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      {response}
                    </span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 mb-6">
                    {includes.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-snug">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-sky-400" : "text-emerald-500"}`} />
                        <span className={plan.popular ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-To-Action Button */}
                <div>
                  <a
                    href={getPlanWhatsAppLink(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold p-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm ${
                      plan.popular
                        ? "bg-sky-500 hover:bg-sky-400 text-slate-950"
                        : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{t.pricing.bookDiagnostic}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              {isRtl
                ? "جميع الإصلاحات وقطع الغيار مغطاة بضمان كتابي معتمد لمدة 90 يوماً. رسوم الكشف (180 درهم) تُخصم بالكامل عند تنفيذ الإصلاح."
                : "All repairs and replacement components are backed by a 90-day written guarantee. Diagnostic fee (180 AED) is 100% credited toward repair."}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
