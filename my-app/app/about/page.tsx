import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CompanyOverview from '@/components/CompanyOverview';
import Expertise from '@/components/Expertise';
import Methodology from '@/components/Methodology';
import Partners from '@/components/Partners';
import Team from '@/components/Team';
import AboutCTA from '@/components/AboutCTA';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'À propos de FORTIS Geneva - Entreprise IT basée à Genève, spécialisée dans les solutions informatiques sur mesure pour PME et grandes entreprises.',
  openGraph: {
    title: 'À Propos de FORTIS Geneva',
    description: 'Votre partenaire IT de confiance à Genève',
    images: ['/images/about-bg.webp'],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À Propos de Fortis Geneva"
        subtitle="Votre partenaire IT de confiance à Genève"
        backgroundImage="/images/about-bg.webp"
      />
      <CompanyOverview />
      <Expertise />
      <Methodology />
      <Partners />
      <Team />
      <AboutCTA />
    </>
  );
}

