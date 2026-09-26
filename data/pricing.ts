export interface PricingRow {
  vehicle: string;
  category: string;
  seating: string;
  perKmRate: string;
  minKmOutstation: string;
  localPackage8hr80km: string;
}

export const pricingTableData: PricingRow[] = [
  {
    vehicle: "Hyundai Aura",
    category: "Sedan",
    seating: "4 + 1",
    perKmRate: "₹14/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹1,800",
  },
  {
    vehicle: "Maruti Dzire",
    category: "Sedan",
    seating: "4 + 1",
    perKmRate: "₹14/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹1,800",
  },
  {
    vehicle: "Honda Amaze",
    category: "Premium Sedan",
    seating: "4 + 1",
    perKmRate: "₹15/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹2,000",
  },
  {
    vehicle: "Toyota Rumion",
    category: "MPV",
    seating: "6 + 1",
    perKmRate: "₹18/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹2,400",
  },
  {
    vehicle: "Kia Carens",
    category: "Premium MPV",
    seating: "6 + 1",
    perKmRate: "₹20/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹2,800",
  },
  {
    vehicle: "Innova Crysta",
    category: "Premium SUV/MPV",
    seating: "6 + 1",
    perKmRate: "₹24/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹3,400",
  },
  {
    vehicle: "Kia Carnival",
    category: "Luxury MPV",
    seating: "6 + 1",
    perKmRate: "₹40/km",
    minKmOutstation: "250 km/day",
    localPackage8hr80km: "₹5,500",
  },
  {
    vehicle: "Force Urbania",
    category: "Luxury Van",
    seating: "8/9 + 1",
    perKmRate: "₹35/km",
    minKmOutstation: "300 km/day",
    localPackage8hr80km: "₹5,000",
  },
  {
    vehicle: "Tempo Traveller 12-Seater",
    category: "Tempo Traveller",
    seating: "11/12 + 1",
    perKmRate: "₹32/km",
    minKmOutstation: "300 km/day",
    localPackage8hr80km: "₹4,500",
  },
  {
    vehicle: "Tempo Traveller 16-Seater",
    category: "Large Traveller",
    seating: "15/16 + 1",
    perKmRate: "₹38/km",
    minKmOutstation: "300 km/day",
    localPackage8hr80km: "₹5,200",
  },
];

export const pricingTerms = {
  disclaimer: "Additional charges may apply for tolls, parking, interstate taxes, driver allowance and night travel. Final fare is confirmed before the trip.",
  nightCharge: "Night Travel Charge: ₹300 (applicable between 10:00 PM and 6:00 AM)",
  driverAllowance: "Driver Allowance: From ₹300/day (for outstation multi-day trips)",
  factors: [
    { title: "Selected Vehicle", desc: "Compact sedan, premium SUV, or group tempo traveller" },
    { title: "Total Distance", desc: "Outstation trips calculated on per km basis (standard 250 km/day minimum)" },
    { title: "Trip Format", desc: "One-way drop, same-day return, or multi-day itinerary" },
    { title: "Tolls & State Taxes", desc: "Charged at actual FASTag government toll rates and state entry permits" },
  ],
};
