import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#F7F6F1] border-b border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#667085] mb-4">
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              {b.href ? (
                <Link href={b.href} className="hover:text-[#111827] transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-[#111827] font-medium">{b.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span className="text-[#C99A3E] font-medium">{title}</span>
        </nav>

        {badge && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#C99A3E] mb-2">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] tracking-tight max-w-3xl">
          {title}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#667085] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
