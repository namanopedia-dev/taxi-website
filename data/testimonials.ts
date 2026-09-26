/**
 * Demonstration Customer Feedback Data
 * Note: These are representative demo reviews showing realistic client feedback
 * for CapitalRide Cabs Delhi service. No fake verification badges are claimed.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  trip: string;
  date: string;
  quote: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rahul Mehta",
    city: "New Delhi",
    trip: "Delhi – Agra Round Trip",
    date: "Recent Trip",
    quote: "Booked a Delhi–Agra round trip for my family. The driver was punctual and the car was very comfortable.",
  },
  {
    id: "test-2",
    name: "Priya Sharma",
    city: "Gurgaon",
    trip: "IGI Airport Early Morning Drop",
    date: "Recent Trip",
    quote: "Needed an early-morning airport drop and everything was handled smoothly.",
  },
  {
    id: "test-3",
    name: "Arjun Kapoor",
    city: "Noida",
    trip: "Delhi – Jaipur Outstation",
    date: "Recent Trip",
    quote: "We booked an Innova for a family trip to Jaipur. Comfortable vehicle and professional service.",
  },
  {
    id: "test-4",
    name: "Neha Verma",
    city: "South Delhi",
    trip: "Local Full-Day Rental",
    date: "Recent Trip",
    quote: "The booking process was simple and the team responded quickly on WhatsApp.",
  },
];
