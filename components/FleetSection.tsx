"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fleetData } from "@/data/fleet";
import { Users, Luggage, Wind, ArrowRight, Check } from "lucide-react";
import { buildWhatsAppUrl, createFleetEnquiryMessage } from "@/lib/whatsapp";

const CATEGORIES = [
  { id: "all", label: "All Vehicles (10)" },
  { id: "sedan", label: "Sedans" },
  { id: "mpv", label: "SUVs & MPVs" },
  { id: "group", label: "Group & Vans" },
];

interface FleetSectionProps {
  preview?: boolean;
}

export default function FleetSection({ preview = false }: FleetSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // In preview mode on homepage, showcase top 3 distinct vehicle types
  const displayedFleet = preview
    ? fleetData.filter((v) => ["maruti-dzire", "toyota-innova-crysta", "tempo-traveller-12"].includes(v.id))
    : fleetData.filter((v) => {
        if (selectedCategory === "all") return true;
        if (selectedCategory === "sedan") return v.category.toLowerCase().includes("sedan");
        if (selectedCategory === "mpv") return v.category.toLowerCase().includes("mpv") || v.category.toLowerCase().includes("suv");
        if (selectedCategory === "group") return v.category.toLowerCase().includes("traveller") || v.category.toLowerCase().includes("van");
        return true;
      });

  return (
    <section id="fleet" className="py-16 md:py-20 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
              Well-Maintained Commercial Vehicles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              {preview ? "Featured Fleet Options" : "A Fleet for Every Kind of Journey"}
            </h2>
            <p className="mt-2 text-base text-[#667085]">
              {preview
                ? "From fuel-efficient sedans to luxury highway SUVs and spacious group travellers."
                : "From everyday sedans to spacious group travel, choose the right vehicle for your trip."}
            </p>
          </div>

          {/* If preview, show Link to full fleet; otherwise show category filter pills */}
          {preview ? (
            <div className="mt-4 md:mt-0 shrink-0">
              <Link
                href="/fleet"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-[#C99A3E] transition-colors py-1.5 px-3 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#C99A3E]"
              >
                <span>View Full 10-Car Fleet</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          ) : (
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#111827] text-white shadow-xs"
                      : "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#FAF9F5]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedFleet.map((vehicle) => {
            const waUrl = buildWhatsAppUrl(
              createFleetEnquiryMessage(vehicle.name, vehicle.category)
            );

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:border-[#C99A3E]/70 transition-all duration-200 hover:shadow-xs group"
              >
                {/* Vehicle Image Container */}
                <div>
                  <div className="relative h-52 sm:h-56 w-full bg-[#1F2937] overflow-hidden">
                    <Image
                      src={vehicle.imageUrl}
                      alt={`${vehicle.name} taxi Delhi`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#111827]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-white/10">
                        {vehicle.category}
                      </span>
                    </div>

                    {/* Rate pill */}
                    <div className="absolute bottom-3 right-3 bg-[#111827]/90 backdrop-blur-xs text-white px-3 py-1 rounded-md border border-white/15">
                      <span className="text-xs text-[#9CA3AF]">From </span>
                      <span className="text-sm font-bold text-[#C99A3E]">{vehicle.rateFormatted}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                      <span className="opacity-90">{vehicle.popularFor}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#111827] tracking-tight">
                        {vehicle.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#C99A3E]">
                        {vehicle.tag}
                      </span>
                    </div>

                    {/* Capacity Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] text-xs text-[#111827] mb-4">
                      <div className="flex items-center gap-1.5" title="Passenger Capacity">
                        <Users className="w-3.5 h-3.5 text-[#C99A3E] shrink-0" />
                        <span>{vehicle.passengers} Pax</span>
                      </div>
                      <div className="flex items-center gap-1.5" title="Luggage Space">
                        <Luggage className="w-3.5 h-3.5 text-[#C99A3E] shrink-0" />
                        <span>{vehicle.luggage}</span>
                      </div>
                      <div className="flex items-center gap-1.5" title="Air Conditioning">
                        <Wind className="w-3.5 h-3.5 text-[#C99A3E] shrink-0" />
                        <span>Dual AC</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-1.5 text-xs text-[#4B5563] mb-5">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-colors shadow-2xs"
                  >
                    <span>Book This Vehicle</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Bottom Note */}
        <div className="mt-10 p-4 rounded-lg bg-white border border-[#E5E7EB] text-xs text-[#667085] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span>All vehicles include air-conditioning, commercial taxi registration (yellow plate), and commercial passenger insurance.</span>
          <Link
            href="/pricing"
            className="font-semibold text-[#111827] hover:text-[#C99A3E] underline shrink-0"
          >
            View Complete Rate Card &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
