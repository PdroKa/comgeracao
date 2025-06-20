import "@/app/globals.css";
import { Roboto, Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";

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
