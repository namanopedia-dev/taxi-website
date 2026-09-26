"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  buildWhatsAppUrl,
  createBookingWhatsAppMessage,
  getPhoneDialUrl,
  type BookingFormData,
} from "@/lib/whatsapp";
import {
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Car,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
} from "lucide-react";

const VEHICLE_OPTIONS = [
  { value: "Sedan (Dzire / Aura)", label: "Sedan (Dzire / Aura) • 4 Pax" },
  { value: "Premium Sedan (Honda Amaze)", label: "Premium Sedan (Amaze) • 4 Pax" },
  { value: "SUV / MPV (Innova Crysta / Rumion)", label: "SUV / MPV (Innova / Rumion) • 6 Pax" },
  { value: "Premium Luxury (Kia Carnival)", label: "Premium Luxury (Carnival) • 6 Pax" },
  { value: "Tempo Traveller (12/16 Seater)", label: "Tempo Traveller • Group 12-16 Pax" },
];

interface FormErrors {
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
  vehicle?: string;
  name?: string;
  phone?: string;
}

interface BookingFormProps {
  initialVehicle?: string;
  initialDestination?: string;
  compact?: boolean;
}

export default function BookingForm({
  initialVehicle = "Sedan (Dzire / Aura)",
  initialDestination = "",
  compact = false,
}: BookingFormProps) {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<BookingFormData>({
    pickup: "New Delhi",
    destination: initialDestination,
    date: today,
    time: "09:00",
    vehicle: initialVehicle,
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.pickup.trim()) {
      errs.pickup = "Please enter your pickup location.";
    }
    if (!formData.destination.trim()) {
      errs.destination = "Please enter your destination.";
    }
    if (!formData.date) {
      errs.date = "Please select a journey date.";
    }
    if (!formData.time) {
      errs.time = "Please choose a pickup time.";
    }
    if (!formData.vehicle) {
      errs.vehicle = "Please select a vehicle category.";
    }
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone) {
      errs.phone = "Please enter your contact phone number.";
    } else if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const msg = createBookingWhatsAppMessage(formData);
    const waUrl = buildWhatsAppUrl(msg);

    // Save submitted state
    setSubmittedData(formData);

    // Automatically trigger WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
  };

  if (submittedData) {
    const waUrl = buildWhatsAppUrl(createBookingWhatsAppMessage(submittedData));

    return (
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-lg mb-6">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
          <div>
            <h3 className="text-base font-bold text-emerald-950">
              Your enquiry is ready to send.
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800">
              We connect you directly to our New Delhi dispatch team on WhatsApp or Phone to confirm availability and lowest fare.
            </p>
          </div>
        </div>

        {/* Enquiry Summary */}
        <div className="bg-[#F7F6F1] rounded-lg p-4 mb-6 border border-[#E5E7EB] text-xs sm:text-sm space-y-2 text-[#111827]">
          <div className="font-semibold text-xs uppercase tracking-wider text-[#667085] mb-1">
            Enquiry Details
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div><span className="text-[#667085]">Route:</span> {submittedData.pickup} → {submittedData.destination}</div>
            <div><span className="text-[#667085]">Vehicle:</span> {submittedData.vehicle}</div>
            <div><span className="text-[#667085]">Schedule:</span> {submittedData.date} at {submittedData.time}</div>
            <div><span className="text-[#667085]">Contact:</span> {submittedData.name} ({submittedData.phone})</div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-5 rounded-lg transition-colors text-sm shadow-xs"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Chat</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={getPhoneDialUrl()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold py-3 px-5 rounded-lg transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-[#C99A3E]" />
            <span>Call Now: {siteConfig.phone}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#667085] hover:text-[#111827] transition-colors underline mx-auto block text-center"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Edit details or request another taxi</span>
        </button>
      </div>
    );
  }

  return (
    <form
      id="booking-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-7 shadow-sm text-left"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E7EB]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] tracking-tight">
            Quick Taxi Enquiry
          </h3>
          <p className="text-xs text-[#667085]">
            Instant WhatsApp confirmation • No advance payment required
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-[#F7F6F1] text-[#C99A3E] border border-[#E5E7EB]">
          24/7 Service
        </span>
      </div>

      <div className="space-y-4">
        {/* Pickup and Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="pickup"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Pickup Location <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <MapPin className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <input
                type="text"
                id="pickup"
                value={formData.pickup}
                onChange={(e) => {
                  setFormData({ ...formData, pickup: e.target.value });
                  if (errors.pickup) setErrors({ ...errors, pickup: undefined });
                }}
                placeholder="e.g. Connaught Place, Delhi"
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] placeholder-[#9CA3AF] transition-colors focus:bg-white focus:outline-none ${
                  errors.pickup ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.pickup && (
              <p className="text-xs text-red-600 mt-1">{errors.pickup}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Destination <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <MapPin className="w-4 h-4 text-[#111827]" />
              </div>
              <input
                type="text"
                id="destination"
                value={formData.destination}
                onChange={(e) => {
                  setFormData({ ...formData, destination: e.target.value });
                  if (errors.destination) setErrors({ ...errors, destination: undefined });
                }}
                placeholder="e.g. Agra, Airport, Gurgaon"
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] placeholder-[#9CA3AF] transition-colors focus:bg-white focus:outline-none ${
                  errors.destination ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.destination && (
              <p className="text-xs text-red-600 mt-1">{errors.destination}</p>
            )}
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Date of Journey <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <CalendarIcon className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <input
                type="date"
                id="date"
                min={today}
                value={formData.date}
                onChange={(e) => {
                  setFormData({ ...formData, date: e.target.value });
                  if (errors.date) setErrors({ ...errors, date: undefined });
                }}
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] transition-colors focus:bg-white focus:outline-none ${
                  errors.date ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.date && (
              <p className="text-xs text-red-600 mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Pickup Time <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <Clock className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <input
                type="time"
                id="time"
                value={formData.time}
                onChange={(e) => {
                  setFormData({ ...formData, time: e.target.value });
                  if (errors.time) setErrors({ ...errors, time: undefined });
                }}
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] transition-colors focus:bg-white focus:outline-none ${
                  errors.time ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.time && (
              <p className="text-xs text-red-600 mt-1">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label
            htmlFor="vehicle"
            className="block text-xs font-semibold text-[#111827] mb-1.5"
          >
            Vehicle Type <span className="text-amber-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
              <Car className="w-4 h-4 text-[#C99A3E]" />
            </div>
            <select
              id="vehicle"
              value={formData.vehicle}
              onChange={(e) => {
                setFormData({ ...formData, vehicle: e.target.value });
                if (errors.vehicle) setErrors({ ...errors, vehicle: undefined });
              }}
              className="w-full pl-9 pr-8 py-2.5 bg-[#FAF9F5] border border-[#E5E7EB] text-sm rounded-lg text-[#111827] transition-colors focus:bg-white focus:border-[#C99A3E] focus:outline-none appearance-none"
            >
              {VEHICLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {errors.vehicle && (
            <p className="text-xs text-red-600 mt-1">{errors.vehicle}</p>
          )}
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Your Name <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <User className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="Full Name"
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] placeholder-[#9CA3AF] transition-colors focus:bg-white focus:outline-none ${
                  errors.name ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-[#111827] mb-1.5"
            >
              Phone Number <span className="text-amber-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#667085]">
                <Phone className="w-4 h-4 text-[#C99A3E]" />
              </div>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="10-digit mobile number"
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF9F5] border text-sm rounded-lg text-[#111827] placeholder-[#9CA3AF] transition-colors focus:bg-white focus:outline-none ${
                  errors.phone ? "border-red-400 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#C99A3E]"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Optional Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-[#111827] mb-1.5"
          >
            Special Instructions / Stops <span className="text-[#667085] font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none text-[#667085]">
              <MessageSquare className="w-4 h-4 text-[#C99A3E]" />
            </div>
            <textarea
              id="message"
              rows={compact ? 2 : 2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Extra luggage, flight number, airport terminal, or round-trip return date"
              className="w-full pl-9 pr-3 py-2 bg-[#FAF9F5] border border-[#E5E7EB] text-sm rounded-lg text-[#111827] placeholder-[#9CA3AF] transition-colors focus:bg-white focus:border-[#C99A3E] focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#111827] hover:bg-[#1f2937] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm group"
          >
            <MessageSquare className="w-4 h-4 text-[#C99A3E] group-hover:scale-110 transition-transform" />
            <span>Request a Booking via WhatsApp</span>
          </button>
        </div>

        <div className="flex items-center justify-between pt-1 text-[11px] text-[#667085]">
          <span>Direct dispatch: <a href={getPhoneDialUrl()} className="font-semibold text-[#111827] hover:text-[#C99A3E] underline">{siteConfig.phone}</a></span>
          <span>No credit card needed</span>
        </div>
      </div>
    </form>
  );
}
