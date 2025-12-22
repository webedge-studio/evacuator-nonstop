import React from "react";

interface ServiceCardProps {
  index?: string;
  label: string;
  content: string;
  cta?: string;
  tags?: string[];
  icon?: React.ReactNode;
}

export const ServiceCard = ({ label, content, tags, icon }: ServiceCardProps) => {
  return (
    <div className="bg-yellow-card/10 flex h-full flex-col gap-3 rounded-xl p-6 shadow-[0_5px_24px_rgba(0,0,0,0.08)] lg:gap-4">
      <div className="flex flex-col gap-3">
        {icon && <div className="flex items-center justify-start">{icon}</div>}
        <h3 className="text-lg font-bold">{label}</h3>
      </div>
      <p className="font-helvetica-neue text-sm font-medium text-black/60 lg:text-base">{content}</p>
    </div>
  );
};
