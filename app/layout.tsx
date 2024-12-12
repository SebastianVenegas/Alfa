"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { TawkToWidget } from "@/components/tawk-to-widget";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Alfa Insurance</title>
        <link rel="icon" href="/favicon.ico" />
        <Script id="tawk-script">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/YOUR_TAWK_TO_ID/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <div className="relative">{children}</div>
          <TawkToWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}