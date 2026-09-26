import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site";
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
  Phone,
  MessageSquare,
} from "lucide-react";
import { buildWhatsAppUrl, getPhoneDialUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Taxi Services in New Delhi | Local, Airport & Outstation | CapitalRide Cabs",
  description:
    "Explore our complete taxi services in New Delhi: local city rides, IGI airport transfers, outstation one-way & round trips, corporate chauffeurs, and group rentals.",
};

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Tailored Mobility"
          title="Taxi Services Built Around Your Journey"
          subtitle="From everyday point-to-point city commutes in Delhi NCR to long-distance expressways and VIP event convoys."
        />

        {/* Detailed Services Listing */}
        <section className="py-14 sm:py-18 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {servicesData.map((service) => {
                const Icon = iconMap[service.iconName] || Car;
                const serviceWaUrl = buildWhatsAppUrl(
                  `Hello ${siteConfig.name}, I would like to book or enquire about your "${service.title}" service.`
                );

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F5] border border-[#E5E7EB] scroll-mt-24 transition-all hover:border-[#C99A3E]/60"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-8 text-left space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                            <Icon className="w-5 h-5 text-[#C99A3E]" />
                          </div>
                          <span className="text-xs font-mono font-bold text-[#C99A3E]">
                            SERVICE {service.number}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                          {service.title}
                        </h2>

                        <p className="text-base text-[#111827] font-medium leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <p className="text-sm text-[#667085] leading-relaxed">
                          {service.fullDesc}
                        </p>

                        {/* Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#374151]">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Action Box */}
                      <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-[#E5E7EB] text-left space-y-3">
                        <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
                          Ready to arrange this ride?
                        </div>
                        <p className="text-xs text-[#111827]">
                          Get instant driver availability and all-inclusive pricing via WhatsApp or phone.
                        </p>

                        <div className="space-y-2 pt-2">
                          <a
                            href={serviceWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
                          >
                            <MessageSquare className="w-4 h-4 fill-white" />
                            <span>{service.ctaText}</span>
                          </a>

                          <a
                            href={getPhoneDialUrl()}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
                          >
                            <Phone className="w-4 h-4 text-[#C99A3E]" />
                            <span>Call {siteConfig.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
