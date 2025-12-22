"use client";
import React, { useState } from "react";

import { FAQItem } from "@/components/shared/faq-item";
import { questions } from "@/lib/constants/questions";

export const FaqClient = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);

  const handleItemClick = (index: number) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <>
      <div className="mt-4 flex flex-col gap-1.5 md:gap-2.5 md:p-4">
        {!!questions?.length &&
          questions?.map((item, index) => (
            <FAQItem
              onClick={handleItemClick}
              key={index}
              index={index + 1}
              question={item?.question}
              answer={item?.answer}
              open={selectedItem === index + 1}
            />
          ))}
      </div>
    </>
  );
};
