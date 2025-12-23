import React from "react";

import { FaqClient } from "@/components/sections/faq-client";
import { buildFaqJsonLd } from "@/lib/faqSchema";
import { questions } from "@/lib/constants/questions";

export const Faq = () => {
  const faqJsonLd = buildFaqJsonLd(questions);

  return (
    <section className="bg-[#F8FAFC] py-16" id="faq">
      <h2 className="sr-only">
        Întrebări frecvente evacuator auto Chișinău – tractare non-stop
      </h2>

      <script
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        className={
          "container flex flex-col items-center justify-center py-12 md:py-16"
        }
      >
        <h2 className={"section-heading mt-2 text-center"}>
          Întrebări frecvente
        </h2>

        <p
          className={
            "py-4 text-center text-sm leading-6 text-black/70 md:text-base"
          }
        >
          Răspunsuri rapide la cele mai frecvente întrebări.
        </p>

        <FaqClient />
      </div>
    </section>
  );
};
