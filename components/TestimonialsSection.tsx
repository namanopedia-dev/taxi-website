import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            Passenger Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            What Our Travelers Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Demonstrative customer feedback from recent local journeys, outstation getaways, and airport transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C99A3E]/70 mb-3" />
                <p className="text-xs sm:text-sm text-[#111827] italic leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EEE6]">
                <div className="font-bold text-xs text-[#111827]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#667085] flex items-center justify-between mt-0.5">
                  <span>{item.city}</span>
                  <span className="text-[#C99A3E] font-medium">{item.trip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent demo note as requested */}
        <div className="mt-8 text-center text-[11px] text-[#9CA3AF]">
          * Note: Feedback shown above represents demo passenger experiences for portfolio illustration purposes.
        </div>

      </div>
    </section>
  );
}
