import React from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Clock, Award, MessageSquare, Phone, MapPin } from "lucide-react";
import { buildWhatsAppUrl, createGeneralEnquiryMessage, getPhoneDialUrl } from "@/lib/whatsapp";

export default function Hero() {
  const heroWhatsAppUrl = buildWhatsAppUrl(createGeneralEnquiryMessage());

  return (
    <section id="home" className="relative bg-[#F7F6F1] overflow-hidden">

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* ── Hero Content Area ─────────────────────────────────────── */}
      <div className="relative z-10 pt-28 pb-8 sm:pt-32 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start">

            {/* ── LEFT COLUMN: Headline & CTAs ─────────────────── */}
            <div className="lg:col-span-6 space-y-5 text-left">

              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#111827] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>Available 24/7 across Delhi NCR</span>
                <span className="text-[#D1D5DB]">|</span>
                <MapPin className="w-3 h-3 text-[#C99A3E]" />
                <span className="text-[#C99A3E] font-bold">New Delhi</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
                Comfortable Rides.{" "}
                <br className="hidden sm:block" />
                <span className="relative">
                  Wherever You&rsquo;re Going.
                  <span className="absolute -bottom-1 left-0 h-[3px] w-24 bg-[#C99A3E] rounded-full" />
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl pt-1">
                Reliable local, airport and outstation taxi services from New Delhi.
                Professional chauffeurs, fixed transparent fares — zero surge pricing.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C99A3E] hover:bg-[#b6872f] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Book on WhatsApp
                </a>

                <a
                  href={getPhoneDialUrl()}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F5] text-[#111827] font-semibold px-5 py-3 rounded-lg text-sm border border-[#E5E7EB] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C99A3E]" />
                  {siteConfig.phone}
                </a>
              </div>

              {/* Trust micro-badges */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#111827]">Verified Drivers</div>
                    <div className="text-[10px] text-[#667085]">Police verified &amp; uniformed</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#111827]">On-Time Pickup</div>
                    <div className="text-[10px] text-[#667085]">Punctuality guaranteed</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#111827]">Zero Surge Fare</div>
                    <div className="text-[10px] text-[#667085]">Pre-agreed tariffs always</div>
                  </div>
                </div>
              </div>

              {/* Vehicle quick-links */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { label: "Sedan from ₹14/km", href: "/fleet" },
                  { label: "Innova from ₹24/km", href: "/fleet" },
                  { label: "Agra from ₹3,500", href: "/routes" },
                  { label: "Airport from ₹999", href: "/routes" },
                ].map((chip) => (
                  <Link
                    key={chip.label}
                    href={chip.href}
                    className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded bg-white border border-[#E5E7EB] text-[#111827] hover:border-[#C99A3E] hover:text-[#C99A3E] transition-colors"
                  >
                    {chip.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN: Booking Form ───────────────────── */}
            <div id="booking-widget" className="lg:col-span-6">
              <BookingForm />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
