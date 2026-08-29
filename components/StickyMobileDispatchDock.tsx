"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";
import { useAppLanguage } from "@/context/LanguageThemeContext";

export default function StickyMobileDispatchDock() {
  const { t, isRtl } = useAppLanguage();

  const defaultWhatsappMsg = encodeURIComponent(
    isRtl
      ? "🚨 مرحباً، أحتاج فني طوارئ لتصليح مكيف الفيلا في دبي فوراً. يرجى التواصل وتأكيد وقت الوصول."
      : "🚨 Hello Azeem AC Team, I have an urgent AC emergency at my Dubai villa. Please dispatch a technician ASAP."
  );

  return (
    <div
      aria-label="Mobile Emergency Dispatch Dock"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 sm:p-3 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Left: Call Dispatch */}
        <a
          href={`tel:${CONTRACTOR_PROFILE.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-3 rounded-xl shadow-sm text-xs tracking-tight transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">{t.dock.callNow}</span>
        </a>

        {/* Right: WhatsApp SOS */}
        <a
          href={`https://wa.me/${CONTRACTOR_PROFILE.whatsappNumber}?text=${defaultWhatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl shadow-sm text-xs tracking-tight transition-transform active:scale-95"
        >
          <MessageSquare className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">{t.dock.whatsappSOS}</span>
        </a>
      </div>
    </div>
  );
}
