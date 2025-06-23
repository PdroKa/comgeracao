import "@/app/globals.css";
import { Roboto, Open_Sans } from "next/font/google";
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";
import { Button, ButtonWhatsApp } from "@/components/ui/button";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.className} ${openSans.variable} relative`}>
      <body
        cz-shortcut-listen="true"
        className={` bg-background text-white rounded-full antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        <ButtonWhatsApp href={'#WhatsApp'} children='Entre no grupo do WhatsApp' />
        {children}
      </body>
    </html >
  );
}
