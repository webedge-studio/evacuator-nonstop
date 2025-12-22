import { Montserrat, Montserrat_Alternates } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});