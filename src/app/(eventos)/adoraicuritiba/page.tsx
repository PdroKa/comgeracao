import { Header } from "@/components/landingPage/header";
import { HeroSection } from "@/components/landingPage/heroSection";
import { About } from "@/components/landingPage/sobre";
import { TeamSection } from "@/components/landingPage/teamSection";
import { PrincingSection } from "@/components/landingPage/princing";
import { FAQ } from "@/components/landingPage/FAQ";
import { Map } from "@/components/landingPage/map";
import { FooterAdoraiCwb } from "@/components/landingPage/footer";
import { Metadata } from "next";
import { CountdownTimer } from "./components/countdown";
import { ButtonWhatsApp } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Adorai Curitiba 2025 - Geracao de Adoradores",
  description: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar.",
}

export default function AdoraiCuritiba() {

  return (
    <div id="inicio" className="scroll-mt-36">
      <Header />
      <HeroSection />
      <About />
      <TeamSection />
      <CountdownTimer />
      <FAQ />
      <Map />
      <FooterAdoraiCwb />
      <ButtonWhatsApp href={'#WhatsApp'} children='Entre no grupo do WhatsApp' />
    </div>
  );
}
