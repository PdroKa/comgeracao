import "./globals.css";

import { SmoothScrollToHash } from "@/lib/SmoothScrollToHash";
import { Roboto } from "next/font/google";

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
      <body className={`${roboto.className} bg-background text-white antialiased scroll-smooth`}>
        <SmoothScrollToHash />
        {children}
      </body>
    </html>
  );
}
