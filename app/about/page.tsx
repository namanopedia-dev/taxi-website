import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import TrustStats from "@/components/TrustStats";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { UserCheck, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About CapitalRide Cabs | Reliable Taxi & Chauffeur Service in New Delhi",
  description:
    "Learn about CapitalRide Cabs: our 8+ year journey in New Delhi, our driver safety protocols, Connaught Place fleet office, and our commitment to comfortable, surge-free travel.",
};

const safetyPillars = [
  {
    icon: UserCheck,
    title: "Rigorous Chauffeur Vetting",
    desc: "Every driver undergoes background verification, commercial license cross-checks, and periodic defensive driving orientation.",
  },
  {
    icon: ShieldCheck,
    title: "Direct Accountability",
    desc: "We assign dedicated dispatchers for every ride. If there are flight delays or route changes, our local Delhi team coordinates directly.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Hospitality",
    desc: "Courteous drivers who assist with luggage, respect passenger privacy, and maintain safe highway speeds without aggressive driving.",
  },
  {
    icon: MapPin,
    title: "Deep Delhi NCR Roots",
    desc: "Operating from Connaught Place since 2018, we understand traffic choke points, peak airport hours, and best intercity expressway access.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Company Heritage"
          title="About CapitalRide Cabs"
          subtitle="Delivering reliable, comfortable, and surge-free chauffeur taxi services across New Delhi and North India since 2018."
        />

        {/* About Section Component */}
        <AboutSection />

        {/* Trust Stats Bar */}
        <TrustStats />

        {/* Safety & Driver Standards */}
        <section className="py-14 sm:py-16 bg-white border-y border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-1">
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Safety, Courtesy &amp; Reliability
              </h2>
              <p className="mt-2 text-sm text-[#667085]">
                What sets CapitalRide Cabs apart from anonymous ride-hailing apps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#C99A3E] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#111827] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Service Area */}
        <ServiceAreaSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
