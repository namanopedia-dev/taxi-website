import { siteConfig } from "@/data/site";

export interface BookingFormData {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle: string;
  name: string;
  phone: string;
  message?: string;
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encoded}`;
}

export function createBookingWhatsAppMessage(data: BookingFormData): string {
  let msg = `Hello ${siteConfig.name},\n` +
    `I would like to enquire about a taxi booking.\n\n` +
    `• Pickup: ${data.pickup}\n` +
    `• Destination: ${data.destination}\n` +
    `• Date: ${data.date}\n` +
    `• Time: ${data.time}\n` +
    `• Vehicle: ${data.vehicle}\n` +
    `• Name: ${data.name}\n` +
    `• Phone: ${data.phone}`;

  if (data.message && data.message.trim().length > 0) {
    msg += `\n• Note: ${data.message.trim()}`;
  }

  msg += `\n\nPlease share availability and fare.`;
  return msg;
}

export function createFleetEnquiryMessage(vehicleName: string, category: string): string {
  return `Hello ${siteConfig.name}, I am interested in booking the ${vehicleName} (${category}). Please share current availability and tariff details.`;
}

export function createRouteEnquiryMessage(from: string, to: string): string {
  return `Hello ${siteConfig.name}, I am interested in a ${from} to ${to} taxi service. Please share availability and estimated fare.`;
}

export function createGeneralEnquiryMessage(name?: string, phone?: string, userMessage?: string): string {
  if (name && phone && userMessage) {
    return `Hello ${siteConfig.name},\nEnquiry from ${name} (Phone: ${phone}):\n${userMessage}`;
  }
  return `Hello ${siteConfig.name}, I would like to enquire about your taxi services in Delhi NCR.`;
}

export function getPhoneDialUrl(): string {
  return `tel:+${siteConfig.phoneRaw}`;
}
