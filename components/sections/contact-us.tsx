import Image from "next/image";
import Link from "next/link";

import mail from "@/assets/icons/mail-icon.svg";
import phone from "@/assets/icons/phone-icon.svg";
import instagram from "@/assets/icons/instagram.svg";

export const ContactUs = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact evacuator auto Chișinău",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Evacuator Nonstop",
      areaServed: "Chișinău, Moldova",
      telephone: "+37367294661",
      email: "evacuator-nonstop@gmail.com",
      url: "https://evacuator-nonstop.md/contact-us", // schimbă când ai domeniul live
      sameAs: ["https://www.instagram.com/evacuator.nonstop/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+37367294661",
          contactType: "customer service",
          availableLanguage: ["ro"],
          areaServed: "MD",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chișinău",
        addressRegion: "Chișinău",
        addressCountry: "MD",
      },
    },
  };

  return (
    <section
      className="h-[80vh] bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fafc_100%)] py-12 md:py-24"
      id="contact-us"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className={"container flex flex-col items-center justify-start"}>
        <h1 className={"section-heading mt-2 text-center"}>
          Contact evacuator auto Chișinău
        </h1>

        <p
          className={
            "py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"
          }
        >
          Sună-ne pentru evacuare auto non-stop în Chișinău și suburbii,
          intervenție rapidă garantată.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row md:gap-12">
          <div className={"flex items-center justify-center gap-2"}>
            <Image src={phone} alt="" />
            <Link
              href="tel:+37367294661"
              className="hover:text-primary-dark text-base font-medium transition-all duration-150 ease-in-out hover:cursor-pointer"
            >
              +373 67 294 661
            </Link>
          </div>
          <div className={"flex items-center justify-center gap-2"}>
            <Image src={mail} alt="" />
            <Link
              href={"mailto:evacuator-nonstop@gmail.com"}
              className="hover:text-primary-dark text-base font-medium transition-all duration-150 ease-in-out hover:cursor-pointer"
            >
              evacuator-nonstop@gmail.com
            </Link>
          </div>
          <div className={"flex items-center justify-center gap-2"}>
            <Image src={instagram} alt="" />
            <Link
              href={"https://www.instagram.com/evacuator.nonstop/"}
              className="hover:text-primary-dark text-base font-medium transition-all duration-150 ease-in-out hover:cursor-pointer"
            >
              evacuator.nonstop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
