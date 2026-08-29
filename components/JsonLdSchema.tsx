import React from "react";
import { CONTRACTOR_PROFILE, CORE_SERVICES, SUBURBS_COVERAGE } from "@/lib/contractor-data";

export default function JsonLdSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "EmergencyService", "LocalBusiness"],
    "@id": "https://azeemacdubai.com/#organization",
    "name": CONTRACTOR_PROFILE.businessNameEn,
    "alternateName": CONTRACTOR_PROFILE.businessNameAr,
    "description": "24/7 Emergency AC repair, compressor replacement, refrigerant leak detection, and central chiller maintenance for luxury villas in Dubai.",
    "url": "https://azeemacdubai.com",
    "telephone": CONTRACTOR_PROFILE.phoneRaw,
    "email": CONTRACTOR_PROFILE.email,
    "priceRange": `AED ${CONTRACTOR_PROFILE.startingPriceAED} - 1500`,
    "currenciesAccepted": "AED",
    "paymentAccepted": "Cash, Credit Card, Apple Pay, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arabian Ranches & Ras Al Khor Industrial Area",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0560",
      "longitude": "55.2470"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": SUBURBS_COVERAGE.map((suburb) => ({
      "@type": "AdministrativeArea",
      "name": suburb.nameEn,
      "alternateName": suburb.nameAr,
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": CONTRACTOR_PROFILE.rating.toString(),
      "reviewCount": CONTRACTOR_PROFILE.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Emergency AC Repair Services",
      "itemListElement": CORE_SERVICES.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.titleEn,
          "description": service.shortDescEn,
        },
        "price": service.priceFromAED.toString(),
        "priceCurrency": "AED",
        "position": index + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
