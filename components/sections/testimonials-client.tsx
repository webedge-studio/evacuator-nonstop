"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { ReviewItem } from "@/components/shared/review-item";
import { reviews } from "@/lib/constants/reviews";

export default function TestimonialsClient() {
  const testimonialsSwiperConfig = {
    modules: [Autoplay, Pagination],
    className: "testimonials-swiper",
    spaceBetween: 24,
    navigation: true,
    slidesPerView: "auto" as const,
    loop: true,
    speed: 600,
    autoHeight: true,
    pagination: {
      clickable: true,
      el: ".swiper-pagination-testimonial",
      dynamicBullets: true,
    },
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
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className={"container flex flex-col gap-3 overflow-hidden py-8"}>
      <Swiper {...testimonialsSwiperConfig}>
        {!!reviews?.length &&
          reviews?.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewItem
                value={item?.rating}
                content={item?.body}
                author={`${item?.author}, ${item?.area}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="swiper-pagination-testimonial relative mt-8 text-center"></div>
    </div>
  );
}
