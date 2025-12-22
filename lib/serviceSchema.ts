export function buildServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evacuator Nonstop",
    url: "https://evacuator-nonstop.md/",
    telephone: "+37369640892",
    areaServed: ["Chișinău", "suburbii Chișinău", "Moldova"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chișinău",
      addressCountry: "MD",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii evacuator auto",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Evacuare auto",
          itemOffered: {
            "@type": "Service",
            name: "Evacuare auto non-stop",
            serviceType: "Evacuare auto",
            areaServed: "Chișinău",
          },
        },
        {
          "@type": "Offer",
          name: "Tractare după accident",
          itemOffered: {
            "@type": "Service",
            name: "Tractare auto după accident",
            serviceType: "Tractare auto",
            areaServed: "Chișinău",
          },
        },
        {
          "@type": "Offer",
          name: "Transport auto pe platformă",
          itemOffered: {
            "@type": "Service",
            name: "Transport auto pe platformă",
            serviceType: "Transport auto",
            areaServed: "Chișinău",
          },
        },
        {
          "@type": "Offer",
          name: "Evacuare SUV & microbuze",
          itemOffered: {
            "@type": "Service",
            name: "Evacuare SUV-uri și microbuze",
            serviceType: "Evacuare vehicule grele",
            areaServed: "Chișinău",
          },
        },
        {
          "@type": "Offer",
          name: "Asistență rutieră",
          itemOffered: {
            "@type": "Service",
            name: "Asistență rutieră 24/7",
            serviceType: "Asistență rutieră",
            areaServed: "Chișinău",
          },
        },
      ],
    },
  };
}
