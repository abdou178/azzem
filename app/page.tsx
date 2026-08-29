"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import InteractiveACTriage from "@/components/InteractiveACTriage";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TransparentPricing from "@/components/TransparentPricing";
import SuburbCoverage from "@/components/SuburbCoverage";
import VerifiedReviews from "@/components/VerifiedReviews";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* 1. High-Impact Direct Response Hero */}
      <HeroSection />

      {/* 2. Trust Badges & Supported OEM Brands */}
      <TrustBadges />

      {/* 3. Interactive Emergency AC Triage & 1-Tap SOS Dispatch */}
      <InteractiveACTriage />

      {/* 4. Core Emergency HVAC Services */}
      <ServicesGrid />

      {/* 5. Why Choose Us & Direct Comparison Matrix */}
      <WhyChooseUs />

      {/* 6. Honest & Transparent Pricing */}
      <TransparentPricing />

      {/* 7. Dubai Villa Suburbs Priority Coverage */}
      <SuburbCoverage />

      {/* 8. Real Verified Homeowner Testimonials */}
      <VerifiedReviews />

      {/* 9. Comprehensive Contractor Footer */}
      <Footer />
    </main>
  );
}
