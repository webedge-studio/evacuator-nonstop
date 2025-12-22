import React from "react";
import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";
import { HeroInfoClient } from "@/components/sections/hero-info-client";
import { InfoStat } from "@/components/shared/info-stat";

import truckImage from "@/assets/images/sections/evacuator-auto-nonstop-chisinau.webp";
import truckImageMobile from "@/assets/images/sections/evacuator-auto-nonstop-chisinau-480.webp";
import truckImageTablet from "@/assets/images/sections/evacuator-auto-nonstop-chisinau-768.webp";
import phone from "@/assets/icons/phone-icon.svg";
import whatsapp from "@/assets/icons/whatsapp-icon.svg";

export const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center gap-8 bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fafc_100%)] py-8 md:py-12 md:pt-[72px] md:pb-24 lg:gap-12"
      id="hero"
    >
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-0">
        <div className="flex flex-col gap-4 md:mt-6">
          <div>
            <h1
              className={
                "font-montserrat text-4xl font-bold md:text-4xl md:leading-[58px] lg:text-5xl"
              }
            >
              Evacuator Auto
            </h1>
            <h2
              className={
                "font-montserrat text-4xl leading-[44px] font-bold xl:text-5xl xl:leading-[58px]"
              }
            >
              Nonstop în Chișinău
            </h2>
          </div>

          <p
            className={
              "max-w-[467px] text-sm leading-[24px] font-medium text-black/70 lg:text-base"
            }
          >
            Servicii rapide de evacuare și tractare auto pentru orice tip de
            vehicul. Ajungem în 15–20 minute în Chișinău și suburbii, 24/7.
          </p>

          <div className={"mt-2 flex flex-col items-start gap-4 py-4 md:py-7"}>
            <AppButton
              icon={
                <Image
                  src={phone}
                  alt=""
                  aria-hidden
                  className={"h-3.5 w-3.5"}
                />
              }
              label={"Sună acum – 069 640 892"}
              linkRef="tel:+37369640892"
              className="bg-primary h-[44px] rounded-xl px-6 py-3 text-sm text-black md:text-base"
            />
            <AppButton
              icon={
                <Image
                  src={whatsapp}
                  alt=""
                  aria-hidden
                  className={"h-3.5 w-3.5"}
                />
              }
              label={"WhatsApp"}
              linkRef="tel:+37369640892"
              className="bg-whatsapp hover:bg-whatsapp-dark rounded-lg px-6 py-2.5 text-sm text-white md:text-base"
            />
          </div>
        </div>
        <div className={"flex items-center lg:ml-10"}>
          <div className={"rounded-3xl w-full"}>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={`${truckImageMobile.src} 480w, ${truckImageTablet.src} 768w`}
                sizes="100vw"
              />
              <img
                src={truckImage.src ?? truckImage}
                alt="Evacuator auto nonstop în Chișinău, intervenție rapidă 24/7"
                className="max-h-[250px] w-full rounded-3xl object-cover sm:max-h-[394px]"
                loading="eager"
                fetchPriority="high"
                width={1600}
                height={900}
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container hidden grid-cols-2 gap-3 md:gap-12 xl:grid xl:grid-cols-3">
        <InfoStat
          value="1500+"
          description="Clienți ajutați cu succes în Chișinău și suburbii"
          className="xl:justify-start"
        />
        <InfoStat
          value="24/7"
          description="Disponibili non-stop pentru intervenții rapide"
          className="xl:justify-center"
        />
        <InfoStat
          value="4.9"
          description="Scor mediu din recenzii reale oferite de clienții noștri"
          className="xl:justify-end"
        />
      </div>
      <HeroInfoClient />
    </section>
  );
};
