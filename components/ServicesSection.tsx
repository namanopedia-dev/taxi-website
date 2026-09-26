import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Car,
  Plane,
  ArrowRight,
  Repeat,
  Clock,
  Briefcase,
  Users,
  Train,
  Check,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Plane,
  ArrowRight,
  Repeat,
  Clock,
  Briefcase,
  Users,
  Train,
};

interface ServicesSectionProps {
  preview?: boolean;
}

export default function ServicesSection({ preview = false }: ServicesSectionProps) {
  const displayedServices = preview ? servicesData.slice(0, 4) : servicesData;

  return (
    <section id="services" className="py-16 md:py-20 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C99A3E] mb-2">
              <span>{preview ? "Popular Services" : "Our Core Offerings"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              Taxi Services Built Around Your Journey
            </h2>
            <p className="mt-2 text-base text-[#667085]">
              {preview
                ? "Reliable city commutes, airport transfers, and long-distance travel across North India."
                : "From everyday city travel to long-distance journeys, choose the service that fits your plans."}
            </p>
          </div>

          {preview && (
            <div className="mt-4 sm:mt-0 shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-[#C99A3E] transition-colors py-1.5 px-3 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#C99A3E]"
              >
                <span>View All 8 Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service) => {
            const Icon = iconMap[service.iconName] || Car;
            const serviceWaUrl = buildWhatsAppUrl(
              `Hello ${siteConfig.name}, I would like to book or enquire about your "${service.title}" service.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col justify-between hover:border-[#C99A3E]/60 transition-all duration-150 hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center text-[#111827] group-hover:bg-[#C99A3E] group-hover:text-white group-hover:border-[#C99A3E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#9CA3AF]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight group-hover:text-[#111827]">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#F0EEE6]">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <Check className="w-3.5 h-3.5 text-[#C99A3E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between text-xs font-semibold py-2.5 px-3 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] text-[#111827] hover:bg-[#111827] hover:text-white hover:border-[#111827] transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {preview && (
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-white border border-[#E5E7EB] text-xs font-bold text-[#111827]"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
