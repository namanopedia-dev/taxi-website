import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Chauffeur realism */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80"
                alt="CapitalRide Cabs chauffeur in New Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5E7EB] text-[#111827]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    CR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">
                      New Delhi Fleet Headquarters
                    </h4>
                    <p className="text-[11px] text-[#667085]">
                      Connaught Place, New Delhi 110001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block">
              About CapitalRide Cabs
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
              A Taxi Service Built on Dependability &amp; Human Care
            </h2>

            <p className="text-base text-[#111827] font-medium leading-relaxed">
              CapitalRide Cabs provides dependable taxi services across New Delhi and nearby destinations. Our focus is simple: comfortable vehicles, professional drivers, clear communication and reliable service.
            </p>

            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Operating for over 8 years from Connaught Place, we offer travelers what ride-hailing apps often fail to deliver: a clean, odor-free car arriving punctually at your doorstep, with a seasoned chauffeur who knows every expressway route.
            </p>

            {/* Service Philosophy Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-start gap-2 text-xs text-[#111827]">
                <Check className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>Zero hidden tolls or surprising extra fees</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#111827]">
                <Check className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>Police verified, uniformed chauffeurs</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#111827]">
                <Check className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>Direct contact with human dispatchers 24/7</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#111827]">
                <Check className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>Dedicated fleet for family &amp; business travel</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E]" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#FAF9F5] hover:bg-[#F0EEE6] border border-[#E5E7EB] text-[#111827] text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <span>Visit Our Delhi Office</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
