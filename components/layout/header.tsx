"use client";
import React, { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { AppButton } from "@/components/shared/app-button";
import { BurgerMenu } from "@/components/shared/burger-menu";
import { useScrollSection } from "@/lib/hooks/useScrollSection";

import logo from "@/assets/images/branding/evacuator-logo-new.svg";
import phone from "@/assets/icons/phone-icon.svg";
import clock from "@/assets/icons/header-clock.svg";

export const Header = () => {
  const { goToSection } = useScrollSection();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    goToSection(sectionId);
  };

  return (
    <header className="container">
      <div
        className={
          "bg-light-gray/90 mt-4 flex items-center justify-center gap-2 rounded-3xl py-2 text-xs md:gap-2.5 md:p-3 md:text-sm"
        }
      >
        <Image src={clock} alt={"Clock icon"} className={"w-3 md:w-auto"} />
        <span className={"hidden text-center font-semibold md:block"}>
          Disponibili 24/7 în Chișinău și suburbii. Ajungem în 15–20 minute.
        </span>
        <span className={"block text-center font-semibold md:hidden"}>Disponibili 24/7. Ajungem în 15–20 minute.</span>
      </div>
      <div
        className={cn(
          "z-50 grid grid-cols-2 items-center overflow-hidden bg-transparent py-4 transition-all duration-200 lg:grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)]"
        )}
      >
        <div className="w-full justify-self-start">
          <Image src={logo} alt="Logo" className={"max-w-[110px] md:max-w-[200px]"} />
        </div>

        <nav className="font-helvetica-neue hidden gap-4 justify-self-center font-medium lg:flex">
          <Link href="/" onClick={(e) => handleScroll(e, "services")} className={"group default-transition"}>
            <span className={"link"}>Servicii</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "pricing")} className={"group default-transition"}>
            <span className={"link"}>Prețuri</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "gallery")} className={"group default-transition"}>
            <span className={"link"}>Galerie</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "testimonials")} className={"group default-transition"}>
            <span className={"link"}>Recenzii</span>
          </Link>
        </nav>

        <div className="hidden justify-self-end font-medium lg:block">
          <AppButton
            icon={<Image src={phone} alt={"Phone icon"} className={"h-3.5 w-3.5"} />}
            label={"069 640 892"}
            linkRef="tel:+37369640892"
            className="bg-primary h-[44px] rounded-xl px-6 py-3 text-black"
          />
        </div>

        <BurgerMenu />
      </div>
      <hr className="opacity-40" />
    </header>
  );
};
