import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";
import { PricingCard } from "@/components/shared/pricing-card";

import carIcon from "@/assets/icons/car-icon.svg";
import busIcon from "@/assets/icons/bus-icon.svg";
import tractorIcon from "@/assets/icons/tractor-icon.svg";
import phoneIcon from "@/assets/icons/phone-icon.svg";

export default function Pricing() {
  return (
    <section
      className={
        "container flex flex-col items-center justify-center py-12 md:py-16"
      }
      id="pricing"
    >
      <h2 className={"section-heading mt-2 text-center md:max-w-[776px]"}>
        Prețuri în funcție de masa autovehiculului
      </h2>

      <p
        className={
          "py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"
        }
      >
        Tarife transparente, stabilite corect în funcție de greutatea mașinii.
      </p>

      <div className="grid w-full grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:items-start lg:grid-cols-3 xl:gap-10">
        <PricingCard
          title="Autoturisme ușoare"
          subTitle="Până la 2.5 tone"
          content="Intervenție rapidă pentru mașini ușoare avariate sau defecte."
          price="500"
          secondPrice={"10"}
          icon={<Image src={carIcon} alt={"Car Icon"} />}
        />
        <PricingCard
          title="Busuri & Microbuze"
          subTitle="2.5 - 3.5 tone"
          content="Tractare sigură pentru microbuze și busuri de orice dimensiune."
          price="700"
          secondPrice={"10"}
          icon={<Image src={busIcon} alt={"Bus Icon"} />}
        />
        <PricingCard
          title="Utilitare"
          subTitle="Pana la 4 tone"
          content="Evacuare utilitare grele cu platformă dedicată, rapid și sigur."
          price="900"
          secondPrice={"12"}
          icon={
            <Image
              src={tractorIcon}
              alt={"Tractor Icon"}
              className={"scale-x-[-1] opacity-80"}
            />
          }
        />
      </div>
      <AppButton
        className={
          "bg-primary mt-12 h-[52px] rounded-xl px-6 py-4 text-base text-black sm:px-12"
        }
        label={"Cere intervenție rapidă"}
        icon={<Image src={phoneIcon} alt="Phone icon" />}
        iconPosition={"left"}
      />
    </section>
  );
}
