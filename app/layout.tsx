import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/content";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.headline,
};

// Applies the stored theme before first paint; defaults to dark.
const themeInit = `(function(){try{if(localStorage.theme==="light"){document.documentElement.classList.remove("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
