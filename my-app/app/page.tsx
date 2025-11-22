import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "FORTIS Geneva - Solutions informatiques premium pour entreprises à Genève. Infrastructure, sécurité, cloud et support 24/7.",
  openGraph: {
    title: "FORTIS Geneva - Solutions IT d'Excellence",
    description: "Services informatiques premium pour entreprises à Genève",
    images: ["/images/hero-bg.webp"],
  },
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FORTIS Geneva",
    "alternateName": "FORTIS Geneva IT Services",
    "url": "https://fortis-geneva.ch",
    "logo": "https://fortis-geneva.ch/logo-fortis.png",
    "description": "Services informatiques premium pour entreprises à Genève",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Route des Jeunes 20",
      "addressLocality": "Genève",
      "postalCode": "1201",
      "addressCountry": "CH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-22-555-01-23",
      "contactType": "customer service",
      "areaServed": "CH",
      "availableLanguage": ["fr", "en"]
    },
    "sameAs": [
      "https://twitter.com/fortisgeneva",
      "https://linkedin.com/company/fortisgeneva",
      "https://instagram.com/fortisgeneva"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Hero />
        <Services />
        <WhyChoose />
        <CTA />
      </div>
    </>
  );
}
