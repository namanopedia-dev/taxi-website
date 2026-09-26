export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  ctaText: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "local-taxi",
    number: "01",
    title: "Local Taxi",
    shortDesc: "Comfortable point-to-point taxi service within Delhi NCR.",
    fullDesc: "Dependable city transfers for shopping, family visits, office commute, or medical appointments across Delhi, Gurgaon, Noida, and Faridabad.",
    highlights: ["Point-to-point billing", "Clean air-conditioned cars", "Punctual doorstep pickup", "Experienced city chauffeurs"],
    ctaText: "Book Local Taxi",
    iconName: "Car",
  },
  {
    id: "airport-transfers",
    number: "02",
    title: "Airport Pickup & Drop",
    shortDesc: "Reliable transfers to and from Indira Gandhi International Airport (IGI T1, T2 & T3).",
    fullDesc: "Flight-friendly scheduling with dedicated buffer times. Available 24 hours including early morning and midnight arrivals/departures.",
    highlights: ["Flight tracking support", "Doorstep pickup & drop", "Terminal assistance", "24/7 availability"],
    ctaText: "Book Airport Taxi",
    iconName: "Plane",
  },
  {
    id: "outstation-one-way",
    number: "03",
    title: "Outstation One-Way",
    shortDesc: "Convenient one-way travel between Delhi and nearby cities without paying two-way charges.",
    fullDesc: "Ideal when you are relocating or staying at your destination. Pay only for the single journey with clear toll and tax estimates.",
    highlights: ["No return fare trap", "All expressway routes", "Dedicated non-shared cab", "Driver allowance included"],
    ctaText: "Book One-Way Cab",
    iconName: "ArrowRight",
  },
  {
    id: "outstation-round-trip",
    number: "04",
    title: "Outstation Round Trip",
    shortDesc: "Comfortable round-trip intercity travel with flexible return schedules and dedicated chauffeur.",
    fullDesc: "Plan your weekend getaways or business trips to Agra, Jaipur, Chandigarh, or Uttarakhand with the vehicle at your disposal.",
    highlights: ["Vehicle stays with you", "Flexible stops & detours", "Experienced highway drivers", "Well-maintained fleet"],
    ctaText: "Book Round Trip",
    iconName: "Repeat",
  },
  {
    id: "full-day-rental",
    number: "05",
    title: "Full-Day Rental",
    shortDesc: "Hire a car with a driver for local travel, meetings, shopping, events, and multiple stops.",
    fullDesc: "Book for 8 hrs / 80 km or 12 hrs / 120 km packages. Travel across multiple locations without waiting or booking repeated rides.",
    highlights: ["Multiple stops made easy", "Packages: 8h/80km & 12h/120km", "Zero wait-time hassle", "Professional dress code"],
    ctaText: "Book Day Rental",
    iconName: "Clock",
  },
  {
    id: "corporate-travel",
    number: "06",
    title: "Corporate Travel",
    shortDesc: "Reliable transport for business meetings, employee movement, client visits, and corporate travel.",
    fullDesc: "Discreet and professional chauffeur service for visiting executives, daily delegates, and airport transfers with GST compliant invoicing.",
    highlights: ["GST compliant billing", "Courteous vetted drivers", "Executive class vehicles", "Corporate invoicing support"],
    ctaText: "Enquire Corporate Cab",
    iconName: "Briefcase",
  },
  {
    id: "wedding-events",
    number: "07",
    title: "Wedding & Event Transportation",
    shortDesc: "Dedicated cars and larger vehicles for weddings, family functions, conferences, and events.",
    fullDesc: "Coordinate guest transfers smoothly. From luxury sedans for bride & groom to multiple SUVs and Tempo Travellers for guest groups.",
    highlights: ["Group convoy coordination", "Spacious 7 to 16 seaters", "Uniformed drivers", "On-ground dispatch support"],
    ctaText: "Enquire Wedding Fleet",
    iconName: "Users",
  },
  {
    id: "railway-transfers",
    number: "08",
    title: "Railway Station Transfers",
    shortDesc: "Pickup and drop-off to major Delhi railway stations (New Delhi, Old Delhi, Anand Vihar, Nizamuddin).",
    fullDesc: "Eliminate parking stress and autotaxi haggling with pre-scheduled, luggage-friendly station pickups and drops at fixed transparent rates.",
    highlights: ["All major Delhi junctions", "Luggage boot assistance", "Scheduled punctuality", "Transparent rates"],
    ctaText: "Book Station Taxi",
    iconName: "Train",
  },
];
