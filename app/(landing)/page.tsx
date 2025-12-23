import { Metadata } from "next";
import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/hero";
import { buildLocalBusinessJsonLd } from "@/lib/localBusinessSchema";

const OurServices = dynamic(
  () => import("@/components/sections/our-services"),
  {
    loading: () => null,
  },
);
const Pricing = dynamic(() => import("@/components/sections/pricing"), {
  loading: () => null,
});
const Gallery = dynamic(() => import("@/components/sections/gallery"), {
  loading: () => null,
});
const Faq = dynamic(() => import("@/components/sections/faq"), {
  loading: () => null,
});
const Testimonials = dynamic(
  () => import("@/components/sections/testimonials"),
  {
    loading: () => null,
  },
);

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
