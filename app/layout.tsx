import type { Metadata } from "next";

import { montserrat, montserratAlternates } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://evacuator-nonstop.md"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[montserrat.variable, montserratAlternates.variable].join(" ")}>
      <body className={`font-montserrat-alternates antialiased`}>{children}</body>
    </html>
  );
}
