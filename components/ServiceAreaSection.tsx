import React from "react";
import { serviceAreas } from "@/data/site";
import { MapPin, Navigation } from "lucide-react";

export default function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            Coverage &amp; Destination Hubs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Serving Delhi and Beyond
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Prompt pickup across the National Capital Region and scheduled outstation service to premier North Indian tourist, pilgrimage, and commercial cities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Delhi NCR Local Hubs */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E7EB] p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                <MapPin className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Delhi NCR Service Hubs
                </h3>
                <p className="text-xs text-[#667085]">
                  Doorstep pickup within 30-45 minutes of scheduled time
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {serviceAreas.delhiNcr.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs font-medium text-[#111827] hover:border-[#C99A3E] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3E]" />
                  <span>{area}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#667085]">
              <span>Coverage: All residential, corporate &amp; commercial zones</span>
              <span className="font-semibold text-[#111827]">24/7 Dispatch</span>
            </div>
          </div>

          {/* North Indian Outstation Destinations */}
          <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E7EB] p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                <Navigation className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Major Outstation Corridors
                </h3>
                <p className="text-xs text-[#667085]">
                  One-way drops &amp; multi-day round trip vacation packages
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {serviceAreas.outstationDestinations.map((dest) => (
                <span
                  key={dest}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs font-medium text-[#111827] hover:border-[#C99A3E] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111827]" />
                  <span>{dest}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#667085]">
              <span>Expressways: Yamuna, Delhi-Mumbai, Eastern Peripheral</span>
              <span className="font-semibold text-[#111827]">All Interstate Permits</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
