import React from "react";
import { cn } from "@/lib/utils";

interface StatisticItemProps {
  value: string;
  description: string;
  className?: string;
}

export const InfoStat = ({ value, description, className }: StatisticItemProps) => {
  return (
    <div
      className={cn(
        className ?? "",
        "flex flex-col items-center justify-center gap-1 px-2.5 text-center xl:flex-row xl:gap-6 xl:text-start"
      )}
    >
      <span className="text-statistic-number-gray text-3xl font-bold lg:text-5xl">{value || "0"}</span>
      <span className="text-statistic-gray px-6 text-xs leading-[18px] font-medium md:text-sm xl:max-w-[214px] xl:px-0 xl:leading-[26px]">
        {description || ""}
      </span>
    </div>
  );
};
