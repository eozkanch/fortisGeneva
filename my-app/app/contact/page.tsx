import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactMap from '@/components/ContactMap';
import ContactFAQ from '@/components/ContactFAQ';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez FORTIS Geneva - Route des Jeunes 20, 1201 Genève. Téléphone: +41 22 555 01 23. Devis gratuit pour vos projets IT. Support 24/7.',
  openGraph: {
    title: 'Contact - FORTIS Geneva',
    description: 'Discutons de votre projet informatique',
    images: ['/images/contact-bg.webp'],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Discutons de votre projet informatique"
        backgroundImage="/images/contact-bg.webp"
      />

      {/* Contact Main Content */}
      <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />

      {/* FAQ Section */}
      <ContactFAQ />
    </>
  );
}

