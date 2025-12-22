import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={"overflow-hidden"}>{children}</main>
      <Footer />
    </>
  );
}
