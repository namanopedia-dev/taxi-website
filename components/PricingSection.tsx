import React from "react";
import { pricingTableData, pricingTerms } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { Moon, UserCheck, AlertCircle, MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function PricingSection() {
  const quoteWaUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like a customized fare quotation for my upcoming taxi trip.`
  );

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            No Hidden Surcharges
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Clear per-kilometer tariffs and local full-day packages. We provide an exact upfront estimate before you board.
          </p>
        </div>

        {/* Pricing Factors Explanation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pricingTerms.factors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#E5E7EB] p-4 text-left"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                {factor.title}
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                {factor.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-2xs mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-[#E5E7EB] text-[#111827] font-semibold">
                  <th className="py-3.5 px-4 sm:px-6">Vehicle Model</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Seating</th>
                  <th className="py-3.5 px-4">Starting Rate (Per Km)</th>
                  <th className="py-3.5 px-4">Outstation Min.</th>
                  <th className="py-3.5 px-4 sm:px-6">Local Package (8h/80km)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-[#111827]">
                {pricingTableData.map((row, idx) => (
                  <tr
                    key={row.vehicle}
                    className={`hover:bg-[#FAF9F5]/70 transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#FCFBF8]"
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111827]">
                      {row.vehicle}
                    </td>
                    <td className="py-3.5 px-4 text-[#667085]">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-4 text-[#4B5563]">
                      {row.seating}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#C99A3E]">
                      {row.perKmRate}
                    </td>
                    <td className="py-3.5 px-4 text-[#667085]">
                      {row.minKmOutstation}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#111827]">
                      {row.localPackage8hr80km}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Notes */}
          <div className="bg-[#FAF9F5] border-t border-[#E5E7EB] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#667085]">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#111827]">
                <AlertCircle className="w-3.5 h-3.5 text-[#C99A3E] shrink-0" />
                <span>{pricingTerms.disclaimer}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#667085]">
                <span className="flex items-center gap-1">
                  <Moon className="w-3 h-3 text-[#667085]" />
                  {pricingTerms.nightCharge}
                </span>
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3 h-3 text-[#667085]" />
                  {pricingTerms.driverAllowance}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={quoteWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C99A3E]" />
                <span>Get Exact Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
