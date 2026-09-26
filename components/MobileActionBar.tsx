"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { getPhoneDialUrl, buildWhatsAppUrl, createGeneralEnquiryMessage } from "@/lib/whatsapp";

export default function MobileActionBar() {
  const pathname = usePathname();
  const waUrl = buildWhatsAppUrl(createGeneralEnquiryMessage());

  const handleBookClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const target = document.querySelector("#booking-widget");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827] text-white border-t border-white/10 px-2 py-2 shadow-2xl backdrop-blur-md"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href={getPhoneDialUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/10 active:bg-white/20 text-white transition-colors"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4 text-[#C99A3E] mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] active:bg-[#20bd5a] text-white transition-colors shadow-xs"
          aria-label="Open WhatsApp chat"
        >
          <MessageSquare className="w-4 h-4 fill-white mb-1" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Action */}
        <Link
          href="/#booking-widget"
          onClick={handleBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#C99A3E] active:bg-[#B6872F] text-white transition-colors"
          aria-label="Book a Taxi"
        >
          <Calendar className="w-4 h-4 fill-white mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Book</span>
        </Link>
      </div>
    </aside>
  );
}
