import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lótus Tech EJ",
  description: "Landing page institucional da Lótus Tech EJ",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="pt-BR"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-60 md:scroll-pt-20`}
      >
      <body
          className="min-h-full flex flex-col"
          suppressHydrationWarning
      >
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}