"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl, createGeneralEnquiryMessage, getPhoneDialUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone || !/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!message.trim()) {
      setError("Please write a brief enquiry message.");
      return;
    }

    setError("");
    setSent(true);

    const waMsg = createGeneralEnquiryMessage(name, phone, message);
    const waUrl = buildWhatsAppUrl(waMsg);

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setMessage("");
    setSent(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl text-left mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C99A3E] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Need a Taxi? Let’s Talk.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#667085]">
            Our dispatch desk is ready 24/7. Call us directly or send a message for instant confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info & Fast Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-7 space-y-5 shadow-2xs">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Phone Reservation
                  </h4>
                  <a
                    href={getPhoneDialUrl()}
                    className="text-lg font-bold text-[#111827] hover:text-[#C99A3E] transition-colors mt-0.5 block"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Direct line to our Delhi control room
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    WhatsApp Booking
                  </h4>
                  <a
                    href={buildWhatsAppUrl(createGeneralEnquiryMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-[#111827] hover:text-[#C99A3E] transition-colors mt-0.5 block"
                  >
                    {siteConfig.whatsapp}
                  </a>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Fast response, vehicle photos &amp; fare quotations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base font-semibold text-[#111827] hover:text-[#C99A3E] transition-colors mt-0.5 block"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-[#667085] mt-0.5">
                    For corporate contracts &amp; event logistics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C99A3E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    Fleet Office Address
                  </h4>
                  <p className="text-sm font-medium text-[#111827] mt-0.5">
                    {siteConfig.address}
                  </p>
                  <p className="text-xs text-[#667085] mt-0.5">
                    Operating: {siteConfig.operatingHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getPhoneDialUrl()}
                className="flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C99A3E]" />
                <span>Call Now</span>
              </a>

              <a
                href={buildWhatsAppUrl(createGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact / Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-2xs text-left">
              <h3 className="text-lg font-bold text-[#111827] mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#667085] mb-5">
                Have a custom question or specific itinerary? We will respond promptly.
              </p>

              {sent ? (
                <div className="py-6 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-[#111827]">
                    Enquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#667085] max-w-sm mx-auto">
                    Your enquiry has been formatted and opened in WhatsApp. If WhatsApp didn’t open automatically, click below:
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={buildWhatsAppUrl(createGeneralEnquiryMessage(name, phone, message))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 px-4 rounded-lg text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open in WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#667085] hover:text-[#111827] underline mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#111827] mb-1.5">
                      Your Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] focus:bg-white focus:border-[#C99A3E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#111827] mb-1.5">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] focus:bg-white focus:border-[#C99A3E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#111827] mb-1.5">
                      Message / Trip Requirements <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your travel dates, vehicle requirement, or questions..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#E5E7EB] rounded-lg text-sm text-[#111827] focus:bg-white focus:border-[#C99A3E] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold py-3 px-4 rounded-lg text-sm transition-colors shadow-2xs"
                  >
                    <Send className="w-4 h-4 text-[#C99A3E]" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
