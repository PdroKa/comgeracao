import { Metadata } from "next";
import { getSEOTags } from "../lib/seo";

export const metadata: Metadata = getSEOTags({
  appTitle: "Bem-vindo a Geração de Adoradores",
  appDescription: "Adorai Curitiba 2025 — Curitiba para Jesus, pelas mãos de Maria. Um evento onde o céu toca a terra e uma geração se levanta para adorar." ,
  appDomain: "https://comgeracao.com.br/",
  keywords: [
    "Adorai",
    "Adorai Curitiba",
    "Adorai Curitiba 2025",
    "Evento católico em Curitiba",
    "Comunidade Geração de adoradores",
    "Geração de adoradores",
    "Verdadeiros adoradores",
    "Adoração e louvor",
    "Retiro para jovens católicos",
    "Jovens adoradores",
    "Santa Missa",
    "Pentecostes",
    "Nossa Senhora Aparecida",
    "12 de outubro evento católico",
    "Louvor e Adoração em Curitiba",
    "Evento cristão 2025",
    "Retiro mariano",
    "Adorar em espírito e em verdade",
    "Presença real de Jesus",
    "99 não é 100",
    "Avivalista",
    "Corações incendiados",
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
