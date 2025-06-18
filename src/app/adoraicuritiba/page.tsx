import { Header } from "@/components/landingPage/header";
import { HeroSection } from "@/components/landingPage/heroSection";
import { About } from "@/components/landingPage/sobre";
import { TeamSection } from "@/components/landingPage/teamSection";
import { PrincingSection } from "@/components/landingPage/princing";
import { FAQ } from "@/components/landingPage/FAQ";
import { Map } from "@/components/landingPage/map";
import { FooterAdoraiCwb } from "@/components/landingPage/footer";
import { Metadata } from "next";
import CountdownTimer from "./components/countdown";
import { getSEOTags } from "../lib/seo";

export const metadata: Metadata = getSEOTags({
  appTitle: "Adorai Curitiba 2025 | Evento Católico de Adoração",
  appDescription: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar." ,
  appDomain: "https://comgeracao.com.br/adoraicuritiba",
  keywords: [
    "Adorai Curitiba",
    "Adorai Curitiba 2025",
    "Adorai Curitiba 2K25",
    "Retiro espiritual católico",
    "Evento católico em Curitiba",
    "Um Chamado para Transformar Gerações",
    "Geração de adoradores",
    "Verdadeiros adoradores",
    "Adoração e louvor",
    "Retiro para jovens católicos",
    "Jovens adoradores",
    "Santa Missa",
    "Pentecostes",
    "Nossa Senhora Aparecida",
    "12 de outubro evento católico",
    "Moises Rocha",
    "Eduardo oliveira pregador",
    "Padre ailton cardoso",
    "Gil motta",
    "Presença real de Jesus",
    "Geração de Adoradores",
    "comgeracao",
    "Avivalista",
    "comunidade geração de adoradores",
  ],
  canonicalUrlRelative: "/adoraicuritiba"
})

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
