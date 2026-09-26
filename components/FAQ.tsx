"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#667085]">
            Everything you need to know about our taxi reservations, fleet capabilities, and outstation fares.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-[#FAF9F5] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3E]"
                >
                  <span className="font-bold text-sm sm:text-base text-[#111827]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#111827] text-white border-[#111827]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB]/50 bg-white animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
