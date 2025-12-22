import { Metadata } from "next";
import { ContactUs } from "@/components/sections/contact-us";

export const metadata: Metadata = {
  title: "Contact evacuator auto Chișinău | Intervenție 24/7",
  description:
    "Contact evacuator auto în Chișinău. Disponibili 24/7 pentru evacuare, tractare și asistență rutieră. Sună acum pentru intervenție rapidă.",

  alternates: {
    canonical: "/contact-us",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact evacuator auto Chișinău | 24/7",
    description: "Sună acum pentru evacuator auto în Chișinău. Intervenție rapidă 15–20 minute, non-stop.",
    url: "/contact-us",
    siteName: "Evacuator Nonstop",
    type: "website",
    locale: "ro_MD",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Contact evacuator auto Chișinău – intervenție rapidă 24/7",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact evacuator auto Chișinău | 24/7",
    description: "Evacuator auto non-stop în Chișinău. Sună acum pentru intervenție rapidă.",
    images: ["/og-cover.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUs />
    </>
  );
}
