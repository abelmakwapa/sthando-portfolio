import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://sthandomakwapa.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sthando Abel Makwapa — Tech & Finance Innovator",
    template: "%s | Sthando Abel Makwapa",
  },
  description:
    "Portfolio of Sthando Abel Makwapa, BSc Computing with Finance student at the University of Botswana and creator of HarvestFlow, an agri-tech platform reducing post-harvest losses across Africa.",
  keywords: [
    "Sthando Abel Makwapa",
    "HarvestFlow",
    "Computing with Finance",
    "University of Botswana",
    "Drones for Africa Hackathon",
    "agri-tech",
    "fintech Botswana",
  ],
  authors: [{ name: "Sthando Abel Makwapa" }],
  openGraph: {
    title: "Sthando Abel Makwapa — Tech & Finance Innovator",
    description:
      "BSc Computing with Finance student building HarvestFlow, an agri-tech platform reducing post-harvest losses across Africa.",
    url: siteUrl,
    siteName: "Sthando Abel Makwapa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sthando Abel Makwapa — Tech & Finance Innovator",
    description:
      "BSc Computing with Finance student building HarvestFlow, an agri-tech platform reducing post-harvest losses across Africa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <RootProvider theme={{ forcedTheme: "dark", defaultTheme: "dark" }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
