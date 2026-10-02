import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { routesData } from "@/data/routes";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl, createRouteEnquiryMessage, getPhoneDialUrl } from "@/lib/whatsapp";

interface RoutesSectionProps {
  preview?: boolean;
}

export default function RoutesSection({ preview = false }: RoutesSectionProps) {
  const displayedRoutes = preview
    ? routesData.filter((r) => ["delhi-agra", "delhi-jaipur", "delhi-rishikesh", "delhi-airport-transfer"].includes(r.id))
    : routesData;

  return (
    <section id="routes" className="py-16 md:py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
              Intercity &amp; Expressway Transit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              {preview ? "Top Outstation Destinations" : "Popular Routes from Delhi"}
            </h2>
            <p className="mt-2 text-base text-[#667085]">
              {preview
                ? "Direct expressway transit from Delhi NCR to popular weekend getaways and pilgrimage destinations."
                : "Comfortable one-way and round-trip travel to popular destinations across North India with seasoned highway drivers."}
            </p>
          </div>

          {preview && (
            <div className="mt-4 sm:mt-0 shrink-0">
              <Link
                href="/routes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-[#C99A3E] transition-colors py-1.5 px-3 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] hover:border-[#C99A3E]"
              >
                <span>View All 8 Routes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          )}
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedRoutes.map((route) => {
            const waUrl = buildWhatsAppUrl(
              createRouteEnquiryMessage(route.from, route.to)
            );

            return (
              <div
                key={route.id}
                className="bg-[#FAF9F5] rounded-xl border border-[#E5E7EB] p-5 flex flex-col justify-between hover:border-[#C99A3E] transition-all duration-150 hover:shadow-2xs group"
              >
                <div>
                  {/* Trip Type badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[#111827]">
                      {route.tripType}
                    </span>
                    <span className="text-xs font-mono text-[#667085]">
                      {route.duration}
                    </span>
                  </div>

                  {/* Route Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-base text-[#111827] tracking-tight">
                      {route.from}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E] shrink-0" />
                    <span className="font-bold text-base text-[#111827] tracking-tight">
                      {route.to}
                    </span>
                  </div>

                  <p className="text-xs text-[#667085] mb-3">
                    Via {route.highway}
                  </p>

                  {/* Distance & Info */}
                  <div className="text-xs text-[#4B5563] space-y-1 mb-4 pt-2 border-t border-[#E5E7EB]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#667085]">Distance:</span>
                      <span className="font-semibold text-[#111827]">{route.distance}</span>
                    </div>
                    <div className="text-[11px] text-[#667085] pt-1">
                      {route.popularFor}
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-[#667085]">Starting from</span>
                    <div className="text-base font-bold text-[#111827]">
                      {route.startingPriceFormatted}
                      <span className="text-[10px] font-normal text-[#667085]"> onwards</span>
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-[#E5E7EB] hover:bg-[#111827] hover:text-white hover:border-[#111827] text-xs font-semibold text-[#111827] transition-colors"
                  >
                    <span>Book This Route</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outstation notice */}
        <div className="mt-8 text-center text-xs text-[#667085]">
          Looking for a custom destination or multi-city tour? Call our travel desk at{" "}
          <a href={getPhoneDialUrl()} className="font-semibold text-[#111827] underline">
            {siteConfig.phone}
          </a>{" "}
          or{" "}
          <Link href="/routes" className="font-semibold text-[#C99A3E] underline">
            explore all route guides
          </Link>.
        </div>

      </div>
    </section>
  );
}
