import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/data/site";
import { FileText, CheckCircle2, MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Taxi Fares & Pricing in New Delhi | Per Km Rates & Packages | CapitalRide Cabs",
  description:
    "Check our transparent taxi pricing in Delhi: starting from ₹14/km for sedans, ₹24/km for Innova Crysta, and local 8hr/80km packages. Zero hidden charges.",
};

const termsList = [
  "Kilometer reading is calculated from garage-to-garage or doorstep-to-doorstep as agreed before booking.",
  "Outstation round-trips require a minimum billing of 250 km per calendar day (300 km for Tempo Travellers).",
  "Toll taxes and state entry permits (Haryana, UP, Rajasthan, Punjab, Uttarakhand) are billed at actuals via FASTag receipt.",
  "Parking fees at airports, railway stations, and monuments are payable by passenger directly or billed against valid receipts.",
  "Driver allowance (₹300 - ₹500/day depending on vehicle) covers meals and accommodation on multi-day journeys.",
  "Night travel charge of ₹300 applies for pickups or drops scheduled between 10:00 PM and 06:00 AM.",
];

export default function PricingPage() {
  const quoteWaUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like a tailored fare breakdown for my route.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Clear Tariffs"
          title="Simple, Transparent Pricing"
          subtitle="No surge pricing or hidden booking fees. Clear per-kilometer rates, local full-day packages, and honest outstation billing."
        />

        {/* Pricing Table Component */}
        <PricingSection />

        {/* Detailed Fare Policy */}
        <section className="py-14 sm:py-16 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                <FileText className="w-5 h-5 text-[#C99A3E]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  Billing Terms &amp; Standard Conditions
                </h2>
                <p className="text-xs text-[#667085]">
                  What you should know before your trip commences
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-[#FAF9F5] p-6 rounded-xl border border-[#E5E7EB]">
              {termsList.map((term, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{term}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-amber-50/50 border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-[#111827]">
                  Need a GST Invoice for Corporate Reimbursement?
                </h3>
                <p className="text-xs text-[#667085] mt-0.5">
                  We issue GST-compliant tax invoices for corporate accounts, executive travel, and business visits.
                </p>
              </div>
              <a
                href={quoteWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#111827] text-white hover:bg-[#1f2937] text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C99A3E]" />
                <span>Request GST Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
