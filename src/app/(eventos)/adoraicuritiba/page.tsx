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

export const metadata: Metadata = {
  title: "Adorai Curitiba 2025 - Geracao de Adoradores",
  description: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar.",
  keywords: [
    "Adorai Curitiba",
    "Adorai Curitiba 2025",
    "ComGeração",
    "Geração de Adoradores",
    "Verdadeiros adoradores",
    "Retiro católico em Curitiba",
    "Evento católico em Curitiba",
    "Adoração e louvor",
    "Retiro para jovens católicos",
    "Santa Missa Curitiba",
    "Pentecostes católico",
    "Presença real de Jesus",
    "Nossa Senhora Aparecida",
    "11 e 12 de outubro evento católico",
    "Pregador Moises Rocha",
    "Eduardo Oliveira pregador",
    "Padre Ailton Cardoso",
    "Gil Motta Adoração"
  ]
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
    </div>
  );
}
