import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kissan Global Gully — Rooted in India. Crafted for the Street.",
  description:
    "Bridging global food formats with authentic Indian regional flavours. Four fiery, farm-fresh fusion creations — Achari BBQ, Thecha Salsa, Chettinad Pepper Dip & Bhut Jolokia Cream Cheese.",
  keywords: [
    "Kissan",
    "Global Gully",
    "Indian sauces",
    "regional flavours",
    "Achari BBQ",
    "Thecha Salsa",
    "Chettinad Pepper Dip",
    "Bhut Jolokia Cream Cheese",
    "Indian street food",
    "fusion condiments",
  ],
  openGraph: {
    title: "Kissan Global Gully",
    description: "Rooted in India. Crafted for the Street.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
