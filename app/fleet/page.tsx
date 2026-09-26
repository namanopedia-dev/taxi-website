import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import FleetSection from "@/components/FleetSection";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Taxi Fleet in New Delhi | Sedans, Innova Crysta, Tempo Travellers | CapitalRide Cabs",
  description:
    "Explore our complete taxi fleet in New Delhi: Hyundai Aura, Maruti Dzire, Honda Amaze, Toyota Innova Crysta, Kia Carens, Kia Carnival, and 12-16 seater Tempo Travellers.",
};

const standards = [
  {
    title: "100% Commercial Yellow-Plate Registration",
    desc: "All vehicles operate under valid commercial permits with full passenger liability insurance.",
  },
  {
    title: "Thorough Pre-Trip Sanitization",
    desc: "Vacuumed interiors, sanitized handles, fresh upholstery, and functional dual air-conditioning.",
  },
  {
    title: "Quarterly Mechanical Audits",
    desc: "Rigorous brake, tyre, suspension, and engine maintenance by authorized manufacturer workshops.",
  },
  {
    title: "Luggage Carriers & Boot Space",
    desc: "Factory roof luggage carriers on MPVs and Tempo Travellers for hassle-free airport & highway trips.",
  },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Verified Fleet"
          title="A Fleet for Every Kind of Journey"
          subtitle="Explore our well-maintained collection of economy sedans, luxury MPVs, executive vans, and spacious group Tempo Travellers."
        />

        {/* Fleet Catalog Component */}
        <FleetSection />

        {/* Fleet Maintenance Standards */}
        <section className="py-14 sm:py-16 bg-white border-y border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-1">
                Safety &amp; Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Our Vehicle Readiness Protocol
              </h2>
              <p className="mt-2 text-sm text-[#667085]">
                We maintain our own vehicles rather than delegating quality control to third-party gig drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((std, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#C99A3E] mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111827] mb-1.5">
                    {std.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
