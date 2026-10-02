export interface SiteConfig {
  name: string;
  tagline: string;
  businessType: string;
  primaryLocation: string;
  serviceRegion: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: string;
  operatingHours: string;
  establishedYear: number;
}

export const siteConfig: SiteConfig = {
  name: "CapitalRide Cabs",
  tagline: "Reliable Rides. Every Time.",
  businessType: "Professional taxi and chauffeur transportation service",
  primaryLocation: "New Delhi, Delhi, India",
  serviceRegion: "Delhi NCR and major North Indian intercity destinations",
  phone: "+91 93540 58400",
  phoneRaw: "919354058400",
  whatsapp: "+91 93540 58400",
  whatsappRaw: "919354058400",
  email: "hello@capitalride.example",
  address: "101, Business Avenue, Connaught Place, New Delhi, Delhi 110001",
  operatingHours: "24 Hours / 7 Days a Week",
  establishedYear: 2018,
};

export interface TrustStat {
  value: string;
  label: string;
  sublabel: string;
}

export const trustStats: TrustStat[] = [
  {
    value: "8+ Years",
    label: "Serving Delhi & NCR",
    sublabel: "Experienced local drivers",
  },
  {
    value: "25,000+",
    label: "Trips Completed",
    sublabel: "City & outstation journeys",
  },
  {
    value: "40+",
    label: "Professional Drivers",
    sublabel: "Background-verified fleet",
  },
  {
    value: "24/7",
    label: "Customer Support",
    sublabel: "Always reachable via phone",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Routes", href: "/routes" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceAreas = {
  delhiNcr: [
    "New Delhi",
    "Central Delhi",
    "South Delhi",
    "Gurgaon",
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    "Faridabad",
  ],
  outstationDestinations: [
    "Agra",
    "Jaipur",
    "Haridwar",
    "Rishikesh",
    "Dehradun",
    "Chandigarh",
    "Mathura",
  ],
};
