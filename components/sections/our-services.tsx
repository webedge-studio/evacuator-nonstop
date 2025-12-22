import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";
import { ServiceCard } from "@/components/shared/service-card";
import { buildServicesJsonLd } from "@/lib/serviceSchema";

import evacuatorIcon from "@/assets/icons/evacuator-icon.svg";
import warningIcon from "@/assets/icons/warning-icon.svg";
import roadIcon from "@/assets/icons/road-icon.svg";
import suvIcon from "@/assets/icons/suv-icon.svg";
import batteryIcon from "@/assets/icons/battery-icon.svg";
import keyIcon from "@/assets/icons/key-icon.svg";
import phoneIcon from "@/assets/icons/phone-icon.svg";

export const OurServices = () => {
  const servicesJsonLd = buildServicesJsonLd();

  return (
    <section
      className={"container flex flex-col items-center justify-center py-12 md:py-16"}
      aria-labelledby="servicii-evacuator"
      id="services"
    >
      <script
        id="services-jsonld"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <h2 id="servicii-evacuator" className="sr-only">
        Servicii evacuator auto în Chișinău – tractare și asistență rutieră 24/7
      </h2>
      <h2 className={"section-heading mt-2 text-center"}>Serviciile noastre</h2>

      <p className={"py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"}>
        Intervenim rapid 24/7 pentru evacuare, tractare și asistență rutieră, oriunde în Chișinău.
      </p>

      <div className="grid w-full grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:items-start lg:grid-cols-3 xl:gap-10">
        <ServiceCard
          label={"Evacuare auto"}
          content={"Evacuare auto rapidă pentru mașini avariate, defecte sau blocate."}
          icon={<Image src={evacuatorIcon} alt="" aria-hidden />}
        />
        <ServiceCard
          label={"Tractare după accident"}
          content={"Tractare auto după accident, intervenție rapidă și transport sigur."}
          icon={<Image src={warningIcon} alt="" aria-hidden />}
        />
        <ServiceCard
          label={"Transport auto"}
          content={"Transportăm automobile pe platformă, local sau în afara orașului."}
          icon={<Image src={roadIcon} alt="" aria-hidden />}
        />

        <ServiceCard
          label={"Evacuare SUV & microbuze"}
          content={"Evacuare SUV-uri și microbuze cu platformă adaptată vehiculelor grele."}
          icon={<Image src={suvIcon} alt="" aria-hidden />}
        />
        <ServiceCard
          label={"Asistență rutieră"}
          content={"Asistență rutieră non-stop: baterie, pană, probleme minore."}
          icon={<Image src={batteryIcon} alt="" aria-hidden />}
        />
        <ServiceCard
          label={"Mașini blocate"}
          content={"Deblocare mașini și evacuare în caz de uși sau chei blocate."}
          icon={<Image src={keyIcon} alt="" aria-hidden />}
        />
      </div>
      <AppButton
        className={"bg-primary mt-12 h-[52px] rounded-xl px-6 py-4 text-base text-black sm:px-12"}
        label={"Solicită evacuator auto acum"}
        icon={<Image src={phoneIcon} alt="" aria-hidden />}
        iconPosition={"left"}
      />
    </section>
  );
};
