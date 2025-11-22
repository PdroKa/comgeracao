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
  pagination:{
    next: "https://comgeracao.com.br/adoraicuritiba/checkout"
  }
}

export default function AdoraiCuritiba() {
const siteOnline = false;

if (!siteOnline) {
    return <CountdownTimer targetDate={new Date('2026-12-31T23:59:59')} />;
}
  return (
    <div id="inicio" className="scroll-mt-36">
      <Header />
      <HeroSection />
      <About />
      <TeamSection />
      <PrincingSection />
      <FAQ />
      <Map />
      <FooterAdoraiCwb />
      <ButtonWhatsApp
        href={'https://api.whatsapp.com/send/?phone=%2B554199301105&text=%20Oi%20gera%C3%A7%C3%A3o%2C%20Tudo%20bem%3F%0AGostaria%20de%20tirar%20uma%20duvida&type=phone_number&app_absent=0'}
        children='Entre no grupo do WhatsApp' />
    </div>
  );
}
