import React from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { getPhoneDialUrl } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section className="py-14 sm:py-16 bg-[#111827] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-1">
              Ready to Depart?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Planning a Journey?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
              Tell us where you’re going, and we’ll help you choose the right vehicle at the best available rate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/#booking-widget"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#C99A3E] hover:bg-[#B6872F] text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors shadow-2xs"
            >
              <Calendar className="w-4 h-4 fill-white" />
              <span>Book a Taxi</span>
            </Link>

            <a
              href={getPhoneDialUrl()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-5 rounded-lg text-sm border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C99A3E]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
