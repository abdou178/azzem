"use client";

import React from "react";
import {
  Star,
  CheckCircle2,
  Building,
} from "lucide-react";
import { TESTIMONIALS, CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function VerifiedReviews() {
  const { t, isRtl } = useAppLanguage();

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white dark:bg-[#0b1120] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.reviews.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {t.reviews.subtitle}
          </p>

          {/* Rating Summary */}
          <div className="mt-5 inline-flex items-center gap-3 bg-slate-50 dark:bg-[#111c33] border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {CONTRACTOR_PROFILE.rating} / 5.0 Rating
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 border-s border-slate-200 dark:border-slate-800 ps-3">
              {CONTRACTOR_PROFILE.reviewCount}+ {isRtl ? "تقييم موثق" : "Verified Villa Reviews"}
            </span>
          </div>
        </div>

        {/* Reviews 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => {
            const author = isRtl ? review.authorAr : review.authorEn;
            const community = isRtl ? review.communityAr : review.communityEn;
            const service = isRtl ? review.serviceAr : review.serviceEn;
            const date = isRtl ? review.dateAr : review.dateEn;
            const comment = isRtl ? review.commentAr : review.commentEn;

            return (
              <div
                key={review.id}
                className="bg-slate-50 dark:bg-[#111c33] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {t.reviews.verifiedBadge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                    &ldquo;{comment}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-200/80 dark:border-slate-800 pt-3 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {author}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {community}
                    </p>
                  </div>

                  <div className="text-end">
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block font-medium">
                      {service}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
