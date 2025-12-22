import React from "react";
import Image from "next/image";

import yellowStar from "@/assets/icons/yellow-star.svg";

interface FAQItemProps {
  value: number;
  content: string;
  author: string;
}

export const ReviewItem = ({ value, content, author }: FAQItemProps) => {
  return (
    <div className="bg-icon-bg flex flex-col gap-5 rounded-2xl p-6">
      <div className="flex flex-col gap-5">
        <div className="flex gap-1">
          {[...Array(value)].map((_, index) => (
            <Image key={index} src={yellowStar} alt="" aria-hidden />
          ))}
        </div>
        <p className="text-sm italic">{content || "Content indisponibil"}</p>
      </div>
      <p className="text-sm italic">{author || "Autor indisponibil"}</p>
    </div>
  );
};
