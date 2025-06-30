import "@/app/globals.css";
import { Roboto, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open',
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.className} ${openSans.variable}`}>
      <body
        cz-shortcut-listen="true"
        className={` bg-background text-white antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        {children}
      </body>
      <GoogleAnalytics gaId="G-YCQ09E7RWN" />
    </html >
  );
}
