import { Metadata } from "next";
import { getSEOTags } from "./lib/seo";

export const metadata: Metadata = getSEOTags({
  appTitle: "Adorai Curitiba 2025 | 2 Dias de Adoração",
  appDescription: `Adorai Curitiba 2025 - Curitiba para Jesus, pelas mãos de Maria.
    Imagine um evento onde o céu toca a terra, onde corações são incendiados pelo amor de Deus e onde uma geração se levanta para adorar em espírito e em verdade. Em 2024 vivemos o extraordinário! Uma juventude despertando para seu propósito. Em 2025, será ainda maior.`,
  appDomain: "https://comgeracao.com.br/",
  keywords: [
    "Adorai",
    "Adorai Curitiba 2025",
    "Retiro espiritual católico",
    "Evento católico em Curitiba",
    "ComGeração",
    "Geração de adoradores",
    "Verdadeiros adoradores",
    "Adoração e louvor",
    "Retiro para jovens católicos",
    "Jovens adoradores",
    "Santa Missa Curitiba",
    "Pentecostes 2025",
    "Nossa Senhora Aparecida",
    "12 de outubro evento católico",
    "Louvor e Adoração em Curitiba",
    "Evento cristão 2025",
    "Retiro mariano",
    "Pré-Adorai Hard Rock",
    "Ebook Pentecostes católico",
    "Formação católica Curitiba"
  ],
  canonicalUrlRelative: "/"
})

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Carregando...</h1>
    </div>
  );
}
