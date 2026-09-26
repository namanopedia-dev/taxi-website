export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  highway: string;
  startingPrice: number;
  startingPriceFormatted: string;
  tripType: "One-Way / Round-Trip" | "City Transfer";
  popularFor: string;
  highlights: string[];
}

export const routesData: PopularRoute[] = [
  {
    id: "delhi-agra",
    from: "Delhi",
    to: "Agra",
    distance: "Approx. 230 km",
    duration: "3.5 - 4 Hours",
    highway: "Yamuna Expressway",
    startingPrice: 3500,
    startingPriceFormatted: "₹3,500",
    tripType: "One-Way / Round-Trip",
    popularFor: "Taj Mahal, Agra Fort day trips",
    highlights: ["Yamuna Expressway toll-friendly", "Flexible pickup in Delhi NCR", "Door-to-door hotel drop"],
  },
  {
    id: "delhi-jaipur",
    from: "Delhi",
    to: "Jaipur",
    distance: "Approx. 280 km",
    duration: "4 - 4.5 Hours",
    highway: "Delhi-Mumbai Expressway (NH 48)",
    startingPrice: 4200,
    startingPriceFormatted: "₹4,200",
    tripType: "One-Way / Round-Trip",
    popularFor: "Pink City tourism & business travel",
    highlights: ["New high-speed expressway", "Chauffeurs trained for long highway stretches", "Clean rest stop breaks"],
  },
  {
    id: "delhi-haridwar",
    from: "Delhi",
    to: "Haridwar",
    distance: "Approx. 220 km",
    duration: "4 - 4.5 Hours",
    highway: "Delhi-Meerut Expressway / NH 334",
    startingPrice: 3400,
    startingPriceFormatted: "₹3,400",
    tripType: "One-Way / Round-Trip",
    popularFor: "Ganga Aarti & spiritual pilgrimage",
    highlights: ["Early morning departure ready", "Direct ghat drop-off", "Senior-citizen friendly drivers"],
  },
  {
    id: "delhi-rishikesh",
    from: "Delhi",
    to: "Rishikesh",
    distance: "Approx. 240 km",
    duration: "4.5 - 5 Hours",
    highway: "NH 334 / Cheela Range bypass",
    startingPrice: 3700,
    startingPriceFormatted: "₹3,700",
    tripType: "One-Way / Round-Trip",
    popularFor: "Yoga retreats, rafting & foothills",
    highlights: ["Smooth mountain foothills transit", "Luggage carriers available", "Trained hilly road chauffeurs"],
  },
  {
    id: "delhi-dehradun",
    from: "Delhi",
    to: "Dehradun",
    distance: "Approx. 255 km",
    duration: "4.5 - 5 Hours",
    highway: "Delhi-Dehradun Economic Corridor",
    startingPrice: 3900,
    startingPriceFormatted: "₹3,900",
    tripType: "One-Way / Round-Trip",
    popularFor: "Capital city visits & onward travel",
    highlights: ["Direct city/airport link", "Comfortable sedans and Innovas", "Reliable hill-ready fleet"],
  },
  {
    id: "delhi-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    distance: "Approx. 245 km",
    duration: "4 - 4.5 Hours",
    highway: "NH 44 (Grand Trunk Road)",
    startingPrice: 3800,
    startingPriceFormatted: "₹3,800",
    tripType: "One-Way / Round-Trip",
    popularFor: "Corporate meetings & Tri-city transit",
    highlights: ["Famous Murthal dhaba meal stops", "Smooth 6-lane expressway travel", "Same-day return discounts"],
  },
  {
    id: "delhi-mathura",
    from: "Delhi",
    to: "Mathura & Vrindavan",
    distance: "Approx. 180 km",
    duration: "2.5 - 3 Hours",
    highway: "Yamuna Expressway",
    startingPrice: 2800,
    startingPriceFormatted: "₹2,800",
    tripType: "One-Way / Round-Trip",
    popularFor: "Krishna Janmabhoomi & temples",
    highlights: ["Quick express drive", "Temples tour coordination", "Multi-point pickup option"],
  },
  {
    id: "delhi-airport-transfer",
    from: "Delhi Airport (IGI T1/T2/T3)",
    to: "Anywhere in Delhi NCR",
    distance: "City transfer",
    duration: "30 - 75 Mins",
    highway: "Airport Express / Ring Roads",
    startingPrice: 999,
    startingPriceFormatted: "₹999",
    tripType: "City Transfer",
    popularFor: "Flight arrivals & airport departures",
    highlights: ["Chauffeur paging available", "Luggage assistance included", "Guaranteed zero surge pricing"],
  },
];
