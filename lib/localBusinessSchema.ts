export const buildLocalBusinessJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://evacuator-nonstop.md/#localbusiness",

    name: "Evacuator Nonstop",
    url: "https://evacuator-nonstop.md",
    logo: "https://evacuator-nonstop.md/og-cover.jpg",
    image: "https://evacuator-nonstop.md/og-cover.jpg",

    description:
      "Servicii evacuator auto nonstop în Chișinău. Tractare auto, transport pe platformă, asistență rutieră 24/7 pentru autoturisme, SUV-uri, microbuze și utilitare.",

    telephone: "+37369640892",
    priceRange: "500–900 MDL",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Chișinău",
      addressCountry: "MD",
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chișinău și suburbii",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    sameAs: ["https://www.instagram.com/evacuator.nonstop/"],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evacuare auto",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tractare auto după accident",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport auto pe platformă",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asistență rutieră",
        },
      },
    ],
  };
};
