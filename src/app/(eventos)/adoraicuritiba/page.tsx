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
    "Adorai Curitiba 2K25",
    "O que é Adorai Curitiba",
    "@comgeracao",
    "Geração de Adoradores",
    "Comunidade Geração de Adoradores",
    "Verdadeiros adoradores",
    "Evento católico em Curitiba",
    "Um Chamado para Transformar Gerações",
    "Adoração e louvor",
    "Retiro para jovens católicos",
    "Jovens adoradores",
    "Santa Missa",
    "Pentecostes",
    "Nossa Senhora Aparecida",
    "11-12 de outubro evento católico",
    "Moises Rocha",
    "Eduardo oliveira pregador",
    "Padre Ailton cardoso",
    "Gil motta",
    "Presença real de Jesus",
    "Geração de Adoradores",
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
