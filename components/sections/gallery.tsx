import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";

import phoneIcon from "@/assets/icons/phone-icon.svg";
import image1 from "@/assets/images/gallery/evacuator-auto-chisinau-transport-autoturism-platforma-nonstop.webp";
import image2 from "@/assets/images/gallery/evacuator-auto-chisinau-transport-suv-platforma.webp"
import image3 from "@/assets/images/gallery/evacuator-auto-noaptea-chisinau.webp";
import image4 from "@/assets/images/gallery/evacuator-auto-chisinau-transport-autoturism-platforma.webp";
import image5 from "@/assets/images/gallery/evacuator-auto-nonstop-chisinau.webp";
import image6 from "@/assets/images/gallery/evacuator-auto-iveco-daily-chisinau-nonstop.webp";

export const Gallery = () => {
  return (
    <section className="bg-[#F8FAFC]" id="gallery">
      <h2 className="sr-only"> Evacuator auto în Chișinău – intervenții reale, tractare și transport auto</h2>
      <div className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
        <h2 className={"section-heading mt-2 text-center"}>Procesul nostru în acțiune</h2>
        <p className={"py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"}>
          Momente reale din intervențiile noastre de evacuare auto în Chișinău.
        </p>
        <div className="flex flex-col gap-4 py-10 md:gap-6">
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            <div className="col-span-1 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)] lg:col-span-2">
              <Image
                src={image1}
                alt={"Evacuator auto transportând autoturism pe platformă în Chișinău, intervenție non-stop"}
                className={"h-full max-h-[120px] rounded-2xl object-cover md:object-[50%_50%] md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="col-span-1 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)]">
              <Image
                src={image2}
                alt={"Evacuator auto transportând SUV pe platformă în Chișinău, intervenție non-stop"}
                className={"h-full max-h-[120px] rounded-2xl object-cover object-[50%_40%] md:object-[50%_50%]   md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="col-span-2 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)] md:col-span-1 lg:col-span-2">
              <Image
                src={image3}
                alt={"Evacuator auto noaptea în Chișinău, intervenție non-stop pentru tractare vehicule"}
                className={"max-h-[120px] rounded-2xl object-cover object-[50%_40%] md:object-[50%_60%] md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            <div className="col-span-1 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)]">
              <Image
                src={image6}
                alt={"Evacuator auto Iveco Daily în Chișinău, disponibil pentru intervenții non-stop"}
                className={"h-full max-h-[120px] rounded-2xl object-cover object-[50%_50%] md:object-[50%_50%] md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
 
            </div>
            <div className="col-span-1 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)] lg:col-span-2">
              <Image
                src={image5}
                alt={"Evacuator auto nonstop în Chișinău, intervenție rapidă 24/7"}
                className={"h-full max-h-[120px] rounded-2xl object-cover md:object-[50%_50%] md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="col-span-2 h-full drop-shadow-[0_3px_32px_rgba(0,0,0,0.08)] md:col-span-1 lg:col-span-2">
              <Image
                src={image4}
                alt={"Evacuator auto transportând autoturism pe platformă în Chișinău, intervenție non-stop"}
                className={"max-h-[120px] rounded-2xl object-cover object-[50%_40%] md:object-[50%_60%] md:max-h-[200px]"}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <p className={"py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"}>
            Suntem acolo unde este nevoie, pentru evacuare auto rapidă în Chișinău.
          </p>
          <AppButton
            className={"bg-primary h-[52px] rounded-xl px-4 py-4 text-base text-black sm:px-12"}
            label={"Sună pentru evacuator auto"}
            icon={<Image src={phoneIcon} alt="Phone icon" />}
            iconPosition={"left"}
          />
        </div>
      </div>
    </section>
  );
};
