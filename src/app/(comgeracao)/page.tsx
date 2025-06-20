import { Metadata } from "next";
import { getSEOTags } from "@/app/lib/seo";

export const metadata: Metadata = getSEOTags({
  appTitle: "Adorai Curitiba 2025 - Geracao de Adoradores",
  appDescription: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar." ,
  appDomain: "https://comgeracao.com.br",
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
