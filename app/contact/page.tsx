import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/data/site";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { buildWhatsAppUrl, createGeneralEnquiryMessage, getPhoneDialUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Book Taxi | New Delhi Dispatch Desk | CapitalRide Cabs",
  description:
    "Contact CapitalRide Cabs 24/7 for taxi bookings in New Delhi. Call +91 98765 43210 or chat on WhatsApp. Office: Connaught Place, New Delhi.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Direct Dispatch Desk"
          title="Contact &amp; Book Your Taxi"
          subtitle="Speak with our Connaught Place dispatch team 24/7. We confirm driver availability, vehicle specifications, and exact fares within minutes."
        />

        {/* Hero Booking & Contact Block */}
        <section className="py-12 sm:py-16 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Direct Fast Channels */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] space-y-5">
                  <h2 className="text-xl font-bold text-[#111827] tracking-tight">
                    Immediate Support &amp; Bookings
                  </h2>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Prefer direct human interaction? Our local Delhi phone and WhatsApp lines are open around the clock.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#C99A3E]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          Phone Hotline
                        </div>
                        <a
                          href={getPhoneDialUrl()}
                          className="text-base font-bold text-[#111827] hover:text-[#C99A3E] transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                        <p className="text-[11px] text-[#667085]">Instant connection to live coordinator</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-[#C99A3E]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          WhatsApp Dispatch
                        </div>
                        <a
                          href={buildWhatsAppUrl(createGeneralEnquiryMessage())}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-bold text-[#111827] hover:text-[#C99A3E] transition-colors"
                        >
                          {siteConfig.whatsapp}
                        </a>
                        <p className="text-[11px] text-[#667085]">Share live locations &amp; receive driver details</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#C99A3E]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          Email Enquiries
                        </div>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-sm font-semibold text-[#111827] hover:text-[#C99A3E] transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                        <p className="text-[11px] text-[#667085]">Corporate RFPs &amp; event bulk logistics</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#C99A3E]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          Central Fleet Depot
                        </div>
                        <div className="text-xs font-semibold text-[#111827]">
                          {siteConfig.address}
                        </div>
                        <p className="text-[11px] text-[#667085]">Operating: {siteConfig.operatingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Call Action Card */}
                <div className="p-5 rounded-xl bg-[#111827] text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Need an urgent airport cab?</h3>
                    <p className="text-xs text-[#9CA3AF]">Pickup in under 45 mins</p>
                  </div>
                  <a
                    href={getPhoneDialUrl()}
                    className="inline-flex items-center gap-1.5 bg-[#C99A3E] hover:bg-[#B6872F] text-white text-xs font-semibold py-2 px-3.5 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Complete Booking Form */}
              <div className="lg:col-span-7">
                <div className="mb-3 text-left">
                  <h3 className="text-lg font-bold text-[#111827]">
                    Request a Reservation Online
                  </h3>
                  <p className="text-xs text-[#667085]">
                    Submit your itinerary details below to receive a direct quote on WhatsApp.
                  </p>
                </div>
                <BookingForm />
              </div>

            </div>
          </div>
        </section>

        {/* Contact Message Form Component */}
        <ContactSection />

        {/* FAQs */}
        <FAQ />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
