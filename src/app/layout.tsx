import "./globals.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        cz-shortcut-listen="true"
        className={`${roboto.className} bg-background text-white antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        {children}
      </body>
      <GoogleAnalytics gaId="G-YCQ09E7RWN"/>
    </html >
  );
}
