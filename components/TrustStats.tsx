import React from "react";
import { trustStats } from "@/data/site";
import { ShieldCheck, Award, Users, Headphones } from "lucide-react";

const statIcons = [Award, ShieldCheck, Users, Headphones];

export default function TrustStats() {
  return (
    <section className="bg-white border-y border-[#E5E7EB] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="flex items-start gap-4 p-2"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#111827] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5 hidden sm:block">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
