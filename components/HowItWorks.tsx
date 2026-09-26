import React from "react";
import { MessageSquareText, Car, CheckCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Share Your Trip",
    description: "Tell us where you're going and when using our quick form, WhatsApp, or phone call.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Choose Your Vehicle",
    description: "Select a vehicle that fits your trip and group size—from efficient sedans to 16-seater Tempo Travellers.",
    icon: Car,
  },
  {
    step: "03",
    title: "Confirm by Phone or WhatsApp",
    description: "We confirm availability and share fixed, transparent pricing with driver details before departure.",
    icon: CheckCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E]">
            Simple Booking Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2">
            No complex payment gateways or hidden cancellation traps. Clear, direct communication from inquiry to destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FAF9F5] rounded-xl border border-[#E5E7EB] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-mono text-[#C99A3E]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                      <Icon className="w-5 h-5 text-[#C99A3E]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E5E7EB]/60 flex items-center gap-1.5 text-xs font-semibold text-[#111827]">
                  <span>Step {idx + 1} of 3</span>
                  {idx < 2 && <ArrowRight className="w-3.5 h-3.5 text-[#C99A3E] ml-auto hidden md:block" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
