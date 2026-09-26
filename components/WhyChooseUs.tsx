import React from "react";
import {
  UserCheck,
  Sparkles,
  Clock,
  CheckCircle,
  Compass,
  Headphones,
} from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description: "Experienced, courteous and customer-focused drivers with commercial licenses and verified background credentials.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Vehicles",
    description: "Well-maintained, odor-free and regularly serviced fleet equipped with functional air-conditioning and spacious seating.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We prioritize punctual pickups and planned journeys, monitoring traffic and flight schedules so you never wait.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Communication",
    description: "Confirm vehicle model, total estimated fare, toll guidelines, and driver details well before your trip begins.",
  },
  {
    icon: Compass,
    title: "Local Knowledge",
    description: "Drivers intimately familiar with Delhi NCR bypass routes, expressway exits, airport terminals, and heritage spots.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated assistance for early morning airport runs, midnight railway pickups, and emergency road coordination.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            The CapitalRide Standard
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Why Delhi Travelers Rely On Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Built on reliability, courteous hospitality, and straightforward pricing—not algorithmic surge charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E5E7EB] flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827] mb-4 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
