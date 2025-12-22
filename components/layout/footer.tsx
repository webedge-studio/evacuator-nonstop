import Image from "next/image";
import Link from "next/link";

import mail from "@/assets/icons/mail-icon.svg";
import phone from "@/assets/icons/phone-icon.svg";
import instagram from "@/assets/icons/instagram.svg";
import logo from "@/assets/images/branding/evacuator-logo-new.svg";

export const Footer = () => (
  <footer className="overflow-hidden bg-[#F3F4F5] py-20" id="footer">
    <div className={"container"}>
      <div className={"flex flex-col gap-12 md:justify-between lg:flex-row"}>
        <div className="flex flex-col gap-4 pb-4">
          <div className="text-xl font-semibold">Contacte</div>
          <div className="flex flex-col justify-center gap-4">
            <div className={"flex items-center gap-4"}>
              <Image src={phone} alt={"Phone icon"} />
              <Link
                href="tel:+37369640892"
                className="hover:text-primary/70 text-sm transition-all duration-150 ease-in-out hover:cursor-pointer"
              >
                +373 69 640 892
              </Link>
            </div>
            <div className={"flex items-center gap-4"}>
              <Image src={mail} alt={"Mail icon"} />
              <Link
                href={"mailto:evacuator-nonstop@gmail.com"}
                className="hover:text-primary/70 text-sm transition-all duration-150 ease-in-out hover:cursor-pointer"
              >
                evacuator-nonstop@gmail.com
              </Link>
            </div>
            <div className={"flex items-center gap-4"}>
              <Image src={instagram} alt={"Instagram icon"} />
              <Link
                href={"https://www.instagram.com/evacuator.nonstop/"}
                className="hover:text-primary/70 text-sm transition-all duration-150 ease-in-out hover:cursor-pointer"
              >
                evacuator.nonstop
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-4 lg:justify-end">
          <div className={"flex items-center gap-4 lg:justify-end"}>
            <p className="text-sm">Chișinău, Republica Moldova</p>
          </div>
          <div className={"flex items-center gap-4"}>
            <p className="text-sm">Evacuator auto non-stop în Chișinău și suburbii, disponibil 24/7.</p>
          </div>
        </div>
      </div>
      <hr className={"py-2.5"} />
      <div className={"flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"}>
        <Image src={logo} alt="Logo" className={"max-w-[130px] lg:max-w-[200px]"} />
        <div className={"text-xs"}>© 2025 Evacuator Nonstop. Toate drepturile rezervate.</div>
      </div>
    </div>
  </footer>
);
