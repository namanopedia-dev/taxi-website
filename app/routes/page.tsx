import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import PageHeader from "@/components/PageHeader";
import RoutesSection from "@/components/RoutesSection";
import CTASection from "@/components/CTASection";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Outstation Taxi from Delhi | Agra, Jaipur, Haridwar, Chandigarh | CapitalRide Cabs",
  description:
    "Book reliable one-way and round-trip outstation cabs from New Delhi to Agra, Jaipur, Haridwar, Rishikesh, Dehradun, and Chandigarh at fixed transparent rates.",
};

const corridorNotes = [
  {
    corridor: "Yamuna Expressway (Delhi to Agra & Mathura)",
    speed: "Approx. 2.5 - 3.5 Hours",
    tip: "Smooth 6-lane access directly from Greater Noida with modern rest stops. Ideal for Taj Mahal day tours.",
  },
  {
    corridor: "Delhi–Mumbai Expressway (Delhi to Jaipur)",
    speed: "Approx. 4 - 4.5 Hours",
    tip: "Fast transit via Sohna bypass avoiding Old Gurgaon bottlenecks. Safe day and night highway driving.",
  },
  {
    corridor: "Delhi–Meerut Expressway (Delhi to Haridwar & Rishikesh)",
    speed: "Approx. 4 - 5 Hours",
    tip: "Elevated expressway from Akshardham to Meerut cut-off, saving over 90 minutes on pilgrimage routes.",
  },
];

export default function RoutesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
      <Header />

      <main className="flex-1">
        <PageHeader
          badge="Intercity Corridors"
          title="Popular Outstation Routes from Delhi"
          subtitle="One-way drops and flexible round-trip vacation packages to major North Indian heritage, spiritual, and commercial hubs."
        />

        {/* Routes Grid Component */}
        <RoutesSection />

        {/* Expressway Travel Insights */}
        <section className="py-14 sm:py-16 bg-[#FAF9F5] border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-1">
                Expressway Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Highway Information &amp; Rest Stops
              </h2>
              <p className="mt-2 text-sm text-[#667085]">
                Our chauffeurs are trained for high-speed expressways and adhere strictly to safe cruising limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {corridorNotes.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C99A3E] mb-2">
                    <Compass className="w-4 h-4" />
                    <span>{c.speed}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-2">
                    {c.corridor}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {c.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
