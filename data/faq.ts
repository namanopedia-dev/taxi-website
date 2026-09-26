export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I book a taxi?",
    answer: "You can request a booking through the website form, call us directly at +91 98765 43210, or contact us on WhatsApp. We confirm availability and share fixed, transparent pricing right away.",
  },
  {
    id: "faq-2",
    question: "Do you provide airport pickup and drop?",
    answer: "Yes, airport pickup and drop services are available to and from Delhi Indira Gandhi International Airport (Terminals 1, 2, and 3) 24 hours a day, including flight delay monitoring.",
  },
  {
    id: "faq-3",
    question: "Do you provide one-way outstation taxis?",
    answer: "Yes, one-way and round-trip outstation bookings are available from Delhi NCR to all major North Indian cities including Agra, Jaipur, Haridwar, Rishikesh, Dehradun, and Chandigarh.",
  },
  {
    id: "faq-4",
    question: "Can I book a car for the entire day?",
    answer: "Yes, full-day vehicle rental with a driver is available with convenient 8 hours / 80 km or 12 hours / 120 km packages for local meetings, family functions, and city sightseeing.",
  },
  {
    id: "faq-5",
    question: "Do you provide large vehicles for groups?",
    answer: "Yes. We offer 7-seater vehicles (Innova Crysta, Kia Carens, Rumion), 9-seater luxury vans (Force Urbania), as well as 12-seater and 16-seater Tempo Travellers.",
  },
  {
    id: "faq-6",
    question: "Do you provide wedding transportation?",
    answer: "Yes, we provide dedicated cars and larger vehicles for weddings, family functions, conferences, and event guest logistics across Delhi NCR and destination wedding routes.",
  },
  {
    id: "faq-7",
    question: "What additional charges may apply?",
    answer: "Tolls, parking, interstate taxes, driver allowance (for outstation multi-day trips) and applicable night charges (₹300 between 10 PM - 6 AM) may be additional depending on your exact journey. All details are clearly confirmed before departure.",
  },
];
