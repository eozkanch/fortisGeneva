import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fortis-geneva.ch'),
  title: {
    default: "FORTIS Geneva - Solutions IT d'Excellence à Genève",
    template: "%s | FORTIS Geneva"
  },
  description: "Services informatiques premium pour entreprises à Genève. Infrastructure, sécurité et support géré par des experts. Configuration serveurs, réseaux, cloud et cybersécurité.",
  keywords: ["IT Genève", "services informatiques", "infrastructure réseau", "sécurité IT", "support 24/7", "cloud migration", "cybersécurité", "serveurs", "Suisse"],
  authors: [{ name: "FORTIS Geneva" }],
  creator: "FORTIS Geneva",
  publisher: "FORTIS Geneva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://fortis-geneva.ch",
    siteName: "FORTIS Geneva",
    title: "FORTIS Geneva - Solutions IT d'Excellence à Genève",
    description: "Services informatiques premium pour entreprises à Genève. Infrastructure, sécurité et support géré par des experts.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "FORTIS Geneva - Solutions IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORTIS Geneva - Solutions IT d'Excellence",
    description: "Services informatiques premium pour entreprises à Genève",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://fortis-geneva.ch",
  },
  icons: {
    icon: "/logo-fortis.png",
    apple: "/logo-fortis.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white font-sans min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00FF9D] focus:text-[#050505] focus:rounded-lg focus:font-semibold">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" className="grow pt-16" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
