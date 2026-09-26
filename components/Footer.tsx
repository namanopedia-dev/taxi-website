import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { getPhoneDialUrl, buildWhatsAppUrl, createGeneralEnquiryMessage } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] text-[#9CA3AF] border-t border-white/10 pt-16 pb-24 md:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block relative w-[190px] h-[40px]">
              <Image
                src="/logo-white.svg"
                alt={siteConfig.name}
                width={190}
                height={40}
                className="h-auto w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              {siteConfig.tagline} Professional taxi, airport, and outstation chauffeur service operating from the heart of New Delhi.
            </p>
            <div className="pt-2 text-xs text-[#9CA3AF]">
              <span className="font-semibold text-white">Office:</span> {siteConfig.address}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#local-taxi" className="hover:text-white transition-colors">
                  Local Taxi
                </Link>
              </li>
              <li>
                <Link href="/services#airport-transfers" className="hover:text-white transition-colors">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link href="/services#outstation-one-way" className="hover:text-white transition-colors">
                  Outstation One-Way &amp; Round Trip
                </Link>
              </li>
              <li>
                <Link href="/services#corporate-travel" className="hover:text-white transition-colors">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link href="/services#full-day-rental" className="hover:text-white transition-colors">
                  Full-Day Rental
                </Link>
              </li>
              <li>
                <Link href="/services#wedding-events" className="hover:text-white transition-colors">
                  Wedding Transport
                </Link>
              </li>
              <li>
                <Link href="/services#railway-transfers" className="hover:text-white transition-colors">
                  Railway Station Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fleet */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Sedans (Dzire, Aura)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Premium Sedans (Honda Amaze)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Family MPVs (Toyota Rumion)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  SUVs (Innova Crysta, Carens)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Luxury MPV (Kia Carnival)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Luxury Van (Force Urbania)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Tempo Traveller (12 &amp; 16 Seater)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors">
                  Vehicle Fleet
                </Link>
              </li>
              <li>
                <Link href="/routes" className="hover:text-white transition-colors">
                  Intercity Routes
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              24/7 Booking Desk
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C99A3E] shrink-0" />
                <a href={getPhoneDialUrl()} className="text-white hover:text-[#C99A3E] transition-colors font-medium">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#C99A3E] shrink-0" />
                <a
                  href={buildWhatsAppUrl(createGeneralEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C99A3E] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[#9CA3AF]">
                <MapPin className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>Connaught Place, New Delhi 110001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#9CA3AF] cursor-default">Privacy Policy</span>
            <span className="text-[#374151]">•</span>
            <span className="hover:text-[#9CA3AF] cursor-default">Terms &amp; Conditions</span>
            <span className="text-[#374151]">•</span>
            <span className="hover:text-[#9CA3AF] cursor-default">Delhi Commercial Taxi Regulation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
