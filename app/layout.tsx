import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/context/LanguageThemeContext";
import EmergencyTopBanner from "@/components/EmergencyTopBanner";
import Navbar from "@/components/Navbar";
import StickyMobileDispatchDock from "@/components/StickyMobileDispatchDock";
import JsonLdSchema from "@/components/JsonLdSchema";
import { CONTRACTOR_PROFILE } from "@/lib/contractor-data";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Azeem AC Maintenance Dubai | 24/7 Emergency AC Repair & Chiller Service",
  description:
    "24/7 Emergency AC Repair in Dubai. Fast 25-minute arrival across Arabian Ranches, Dubai Hills Estate, Damac Hills & The Villa. Compressor replacement, refrigerant gas refill, drain unclogging & chiller PCB repair with 90-day warranty.",
  keywords: [
    "AC repair Dubai",
    "Emergency AC maintenance Dubai",
    "Arabian Ranches AC repair",
    "Dubai Hills AC maintenance",
    "Damac Hills AC technician",
    "24/7 AC repair Dubai",
    "AC compressor replacement Dubai",
    "AC gas refill Dubai R410A",
    "AC water leaking ceiling Dubai",
    "تصليح مكيفات دبي",
    "طوارئ صيانة تكييف دبي",
    "صيانة تكييف المرابع العربية",
    "فني تكييف دبي هيلز",
  ],
  authors: [{ name: CONTRACTOR_PROFILE.businessNameEn }],
  creator: CONTRACTOR_PROFILE.businessNameEn,
  publisher: CONTRACTOR_PROFILE.businessNameEn,
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Azeem AC Maintenance Dubai | 24/7 Emergency AC Repair",
    description:
      "Rapid 25-35 minute emergency AC repair across Dubai villas. 90-day guarantee on genuine parts.",
    url: "https://azeemacdubai.com",
    siteName: "Azeem AC Maintenance Dubai",
    locale: "en_AE",
    alternateLocale: "ar_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azeem AC Maintenance Dubai | 24/7 Emergency AC Repair",
    description:
      "Rapid 25-minute emergency AC dispatch for Dubai luxury villas. Call +971 56 145 8557.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="dark">
      <head>
        <JsonLdSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-orange-500 selection:text-white flex flex-col">
        <AppProviders>
          <EmergencyTopBanner />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <StickyMobileDispatchDock />
        </AppProviders>
      </body>
    </html>
  );
}
