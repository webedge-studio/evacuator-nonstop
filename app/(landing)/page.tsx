import { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { OurServices } from "@/components/sections/our-services";
import { Pricing } from "@/components/sections/pricing";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { buildLocalBusinessJsonLd } from "@/lib/localBusinessSchema";

export const metadata: Metadata = {
  title: "Evacuator auto nonstop Chișinău | 24/7",
  description:
    "Evacuator auto în Chișinău 24/7. Intervenție rapidă 15–20 min, transport autoturisme, microbuze și utilitare. Sună acum.",
  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Evacuator auto nonstop Chișinău | 24/7",
    description:
      "Intervenție rapidă 15–20 min în Chișinău și suburbii. Transport sigur, prețuri transparente.",
    url: "/",
    siteName: "Evacuator Nonstop",
    type: "website",
    locale: "ro_MD",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Evacuator auto nonstop Chișinău – intervenție 24/7",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evacuator auto nonstop Chișinău | 24/7",
    description: "Intervenție rapidă 15–20 min în Chișinău și suburbii.",
    images: ["/og-cover.jpg"],
  },
};

export default function LandingPage() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <Hero />
      <OurServices />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Faq />
    </>
  );
}
