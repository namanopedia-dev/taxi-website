import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import FleetSection from "@/components/FleetSection";
import RoutesSection from "@/components/RoutesSection";
import PricingPreview from "@/components/PricingPreview";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      {/* Global Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero & Fast Booking Widget */}
        <Hero />

        {/* 2. Trust Credentials Bar */}
        <TrustStats />

        {/* 3. Core Services Highlights (with link to /services) */}
        <ServicesSection preview={true} />

        {/* 4. 3-Step Booking Process */}
        <HowItWorks />

        {/* 5. Featured Vehicles (with link to /fleet) */}
        <FleetSection preview={true} />

        {/* 6. Popular Outstation Corridors (with link to /routes) */}
        <RoutesSection preview={true} />

        {/* 7. Tariff Snapshot & Pricing Teaser (with link to /pricing) */}
        <PricingPreview />

        {/* 8. Company Story & Driver Safety Snapshot (with link to /about) */}
        <AboutPreview />

        {/* 9. Traveler Feedback */}
        <TestimonialsSection />

        {/* 10. Pre-Footer Direct Action Banner */}
        <CTASection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
}
