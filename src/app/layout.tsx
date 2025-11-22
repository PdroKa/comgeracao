import "@/app/styles/globals.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollToHash } from "@/app/lib/SmoothScrollToHash";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${roboto.className}`}>
      <body
        cz-shortcut-listen="true"
        className={` bg-background text-white antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        <Analytics />
        {children}
      </body>
      <GoogleAnalytics gaId="G-YCQ09E7RWN" />
    </html >
  );
}
