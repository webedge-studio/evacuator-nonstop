import React from "react";

interface ServiceCardProps {
  title: string;
  subTitle: string;
  content: string;
  cta?: string;
  icon?: React.ReactNode;
  price: string;
  secondPrice?: string;
}

export const PricingCard = ({ title, subTitle, content, icon, price, secondPrice }: ServiceCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between gap-3 rounded-2xl border-2 border-[rgba(0,0,0,0.06)] bg-white p-6 lg:gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {icon && <div className="bg-icon-bg flex w-fit items-center justify-start rounded-2xl p-2.5">{icon}</div>}
          <div className="text-lg font-bold">{title}</div>
          <div className="text-base font-semibold text-black/80 italic">{subTitle}</div>
        </div>
        <p className="text-sm font-medium text-black/60 lg:text-base">{content}</p>
      </div>
      <div>
        <hr className={"my-2 border-t border-black/10"} />
        <div className="flex flex-col items-start justify-between gap-2 pt-2 xl:flex-row xl:items-center">
          <h3 className="text-primary-dark text-xl font-bold">{`de la ${price || 0} lei`}</h3>
          <span className="text-xs font-medium text-[#888888]/80 italic">{`+${secondPrice || 0} lei / km in afara orasului`}</span>
        </div>
      </div>
    </div>
  );
};
