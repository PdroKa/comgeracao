import "./globals.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";
import { Link } from "lucide-react";
import Script from "next/script";

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
      <Script rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

        <body
          cz-shortcut-listen="true"
          className={`${roboto.className} bg-background text-white antialiased scroll-smooth`}>
          <SmoothScrollToHash />
          {children}
        </body>
        <GoogleAnalytics gaId="G-YCQ09E7RWN" />
    </html >
  );
}
