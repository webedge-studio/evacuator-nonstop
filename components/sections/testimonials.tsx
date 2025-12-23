import React from "react";

import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";

import { TestimonialsClient } from "@/components/sections/testimonials-client";
import { buildReviewsJsonLd } from "@/lib/reviewsSchema";
import { reviews } from "@/lib/constants/reviews";

import phoneIcon from "@/assets/icons/phone-icon.svg";

export const Testimonials = () => {
  const reviewsJsonLd = buildReviewsJsonLd({
    url: "https://evacuator-nonstop.md/",
    businessName: "Evacuator Nonstop",
    telephone: "+37369640892",
    addressLocality: "Chișinău",
    addressCountry: "MD",
    reviews,
  });

  return (
    <section
      className={
        "container flex flex-col items-center justify-center py-12 md:py-16"
      }
      id="testimonials"
    >
      <script
        id="reviews-jsonld"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      <h2 className="sr-only">
        Recenzii evacuator auto Chișinău – tractare și intervenții non-stop
      </h2>
      <h2 className={"section-heading mt-2 text-center"}>
        Ce spun clienții despre noi
      </h2>

      <p
        className={
          "py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"
        }
      >
        Opiniile reale ale clienților care au apelat la serviciile noastre de
        evacuare auto în Chișinău.
      </p>

      <TestimonialsClient />

      <AppButton
        className={
          "bg-primary mt-4 h-[52px] rounded-xl px-6 py-4 text-base text-black sm:px-12"
        }
        label={"Solicită evacuator acum"}
        icon={<Image src={phoneIcon} alt="" aria-hidden />}
        iconPosition={"left"}
      />
    </section>
  );
};
