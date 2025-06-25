import { Metadata } from "next";
import { getSEOTags } from "@/app/lib/seo";

export const metadata: Metadata = getSEOTags({
  appTitle: "Adorai Curitiba 2025 - Geracao de Adoradores",
  appDescription: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar." ,
  appDomain: "https://comgeracao.com.br",
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
  ],
  canonicalUrlRelative: "/"
})

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Bem-vindo a Geração de Adoradores...</h1>
    </div>
  );
}
