"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/data/site";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { getPhoneDialUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB] py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-[#E5E7EB]/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="relative w-[180px] sm:w-[210px] h-[40px] flex items-center">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={210}
                height={42}
                priority
                className="h-auto w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-[#C99A3E] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C99A3E]"
                      : "text-[#111827] hover:text-[#C99A3E] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C99A3E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getPhoneDialUrl()}
              className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#111827] hover:text-[#C99A3E] transition-colors px-3 py-2 rounded-md hover:bg-[#F7F6F1]"
              title={`Call ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4 text-[#C99A3E]" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              href="/#booking-widget"
              className="inline-flex items-center gap-2 bg-[#111827] text-white hover:bg-[#1F2937] text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors border border-transparent shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#C99A3E]" />
              <span>Book a Taxi</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#111827] hover:text-[#C99A3E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C99A3E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-[#FAF9F5] text-[#C99A3E] font-semibold"
                      : "text-[#111827] hover:text-[#C99A3E] hover:bg-[#F7F6F1]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex flex-col gap-3">
            <a
              href={getPhoneDialUrl()}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#F7F6F1] text-[#111827] font-semibold text-sm border border-[#E5E7EB]"
            >
              <Phone className="w-4 h-4 text-[#C99A3E]" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <Link
              href="/#booking-widget"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#111827] text-white font-semibold text-sm"
            >
              <Calendar className="w-4 h-4 text-[#C99A3E]" />
              <span>Book a Taxi Online</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
