import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Taxi Service in New Delhi`,
  description:
    "Reliable local, airport and outstation taxi services from New Delhi. Book sedans, SUVs and Tempo Travellers by phone or WhatsApp.",
  keywords: [
    "taxi service in Delhi",
    "Delhi airport taxi",
    "Delhi outstation taxi",
    "Delhi to Agra taxi",
    "Delhi to Jaipur taxi",
    "Tempo Traveller Delhi",
    "corporate taxi service Delhi",
    "chauffeur service Delhi",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://capitalride.example"),
  openGraph: {
    title: `${siteConfig.name} | Taxi Service in New Delhi`,
    description:
      "Reliable local, airport and outstation taxi services from New Delhi. Book sedans, SUVs and Tempo Travellers by phone or WhatsApp.",
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Chauffeur & Taxi Service`,
      },
    ],
  },
  icons: {
    icon: "/logo-mark.svg",
    apple: "/logo-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#F7F6F1] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
