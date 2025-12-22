"use client";

import React, { MouseEvent, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { AppButton } from "@/components/shared/app-button";
import { useScrollSection } from "@/lib/hooks/useScrollSection";

import phone from "@/assets/icons/phone-icon.svg";

export const BurgerMenu = () => {
  const { goToSection } = useScrollSection();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => goToSection(sectionId), 500);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="justify-self-end lg:hidden">
        <input
          type="checkbox"
          id="checkbox2"
          className={cn(isOpen && "nav-open", "checkbox2 visuallyHidden")}
          onChange={() => setIsOpen((prev) => !prev)}
          checked={isOpen}
        />
        <label htmlFor="checkbox2">
          <div className="hamburger hamburger2">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </div>
        </label>
      </div>

      <div
        className={cn(
          "fixed top-[111px] right-0 bottom-0 left-0 z-40 flex flex-col bg-white/93 backdrop-blur-sm transition-transform duration-250 ease-out lg:hidden",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <nav className="font-montserrat-alternates mt-12 flex flex-1 flex-col items-center gap-2 text-lg font-medium text-black/80">
          <Link href="/" onClick={(e) => handleScroll(e, "services")} className="group default-transition py-2">
            <span className="link">Servicii</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "pricing")} className="group default-transition py-2">
            <span className="link">Prețuri</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "gallery")} className="group default-transition py-2">
            <span className="link">Gelerie</span>
          </Link>
          <Link href="/" onClick={(e) => handleScroll(e, "testimonials")} className="group default-transition py-2">
            <span className="link">Recenzii</span>
          </Link>
          <div className="mt-6">
            <AppButton
              icon={<Image src={phone} alt={"Phone icon"} className={"h-3.5 w-3.5"} />}
              label={"069 640 892"}
              linkRef="tel:+37369640892"
              className="bg-primary h-[44px] rounded-xl px-12 py-3 text-sm text-black md:text-base"
            />
          </div>
        </nav>

        <div className="px-6 pb-6 text-xs text-neutral-500">© {new Date().getFullYear()} Evacuator Nonstop</div>
      </div>
    </>
  );
};
