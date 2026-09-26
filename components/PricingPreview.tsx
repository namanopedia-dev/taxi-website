import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PricingPreview() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
              Transparent Tariffs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              Simple, Upfront Pricing
            </h2>
            <p className="mt-2 text-base text-[#667085]">
              No surge multipliers or mysterious cancellation fees. Know your base fare before departure.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 shrink-0">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-[#C99A3E] transition-colors py-1.5 px-3 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#C99A3E]"
            >
              <span>View Full 10-Vehicle Rate Card</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
            </Link>
          </div>
        </div>

        {/* 3 Tier Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Tier 1: Local & City */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col justify-between hover:border-[#C99A3E]/60 transition-colors">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#E5E7EB] text-[#111827]">
                Local &amp; City Commutes
              </span>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold text-[#111827]">₹14</span>
                <span className="text-sm font-semibold text-[#667085]"> / km</span>
              </div>
              <p className="text-xs text-[#667085] mb-4">
                Compact sedans (Dzire, Aura) for point-to-point city trips in Delhi NCR.
              </p>
              <ul className="space-y-2 text-xs text-[#374151] pt-3 border-t border-[#F0EEE6]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Doorstep pickup anywhere in NCR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>8h / 80km packages from ₹1,800</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dual air-conditioning guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] text-xs font-semibold text-[#111827] hover:bg-[#111827] hover:text-white transition-colors"
              >
                <span>View Sedan Tariffs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          </div>

          {/* Tier 2: Airport Transfers */}
          <div className="bg-white rounded-xl border-2 border-[#111827] p-6 flex flex-col justify-between relative shadow-sm">
            <div className="absolute -top-3 right-4 bg-[#C99A3E] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Popular Flat Rate
            </div>
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#E5E7EB] text-[#111827]">
                Airport Pickup / Drop
              </span>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold text-[#111827]">₹999</span>
                <span className="text-sm font-semibold text-[#667085]"> onwards</span>
              </div>
              <p className="text-xs text-[#667085] mb-4">
                IGI Terminal 1, 2 &amp; 3 transfers with flight delay tracking.
              </p>
              <ul className="space-y-2 text-xs text-[#374151] pt-3 border-t border-[#F0EEE6]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero surge pricing 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated luggage assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free waiting up to 30 mins after landing</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services#airport-transfers"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#111827] text-white text-xs font-semibold hover:bg-[#1f2937] transition-colors"
              >
                <span>Book Airport Ride</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          </div>

          {/* Tier 3: Outstation & Highway */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col justify-between hover:border-[#C99A3E]/60 transition-colors">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#E5E7EB] text-[#111827]">
                Outstation Intercity
              </span>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold text-[#111827]">₹24</span>
                <span className="text-sm font-semibold text-[#667085]"> / km (Innova)</span>
              </div>
              <p className="text-xs text-[#667085] mb-4">
                Agra, Jaipur, Rishikesh, Dehradun &amp; hill stations in comfort.
              </p>
              <ul className="space-y-2 text-xs text-[#374151] pt-3 border-t border-[#F0EEE6]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>One-way &amp; round-trip packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Experienced expressway chauffeurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tempo Travellers (12 &amp; 16s) available</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] text-xs font-semibold text-[#111827] hover:bg-[#111827] hover:text-white transition-colors"
              >
                <span>View Full Tariff Card</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
