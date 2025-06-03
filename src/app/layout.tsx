import "./globals.css";
import type { Metadata } from "next";

import { SmoothScrollToHash } from "@/lib/SmoothScrollToHash";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/config/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Adorai Curitiba",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph Image`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="prefetch" as="document" href="https://checkout.einscricao.app//?event_id=100725&apiUrl=https://www.e-inscricao.com&msApiUrl=https://ei-pay.e-inscricao.com&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://participants.e-inscricao.com&hostUrl=https%3A%2F%2Fwww.e-inscricao.com%2Fcolodedeus%2Fgeracaoatmk25&themeColorPrimary=%23010101&themeColorSecondary=%23ddbb53&themeLogo=https%3A%2F%2Fi.ibb.co%2F0RQVFWvq%2FLogo-remove-500.png" />
      </head>
      <body className={`${roboto.className} bg-background text-white antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        {children}
      </body>
    </html>
  );
}
