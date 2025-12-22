"use client";

import React from "react";

import { InfoStat } from "@/components/shared/info-stat";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export const HeroInfoClient = () => {
  const swiperConfig = {
    modules: [Autoplay, Pagination],
    className: "my-swiper",
    spaceBetween: 48,
    navigation: true,
    slidesPerView: "auto" as const,
    loop: true,
    speed: 600,
    pagination: { clickable: true, el: ".swiper-pagination-hero", dynamicBullets: true },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className={"container flex flex-col gap-3 overflow-hidden xl:hidden"}>
      <Swiper {...swiperConfig}>
        <SwiperSlide>
          <InfoStat
            value="1500+"
            description="Clienți ajutați cu succes în Chișinău și suburbii"
            className="xl:justify-start"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoStat
            value="24/7"
            description="Disponibili non-stop pentru intervenții rapide în 15–20 min"
            className="xl:justify-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoStat
            value="4.9"
            description="Scor mediu din recenzii reale oferite de clienții noștri"
            className="xl:justify-end"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination-hero relative mt-4 text-center"></div>
    </div>
  );
};
