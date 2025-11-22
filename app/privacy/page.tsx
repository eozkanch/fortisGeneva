import PageHero from '@/components/PageHero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de FORTIS Geneva IT Services. Conforme RGPD et lois suisses.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Politique de Confidentialité"
        subtitle="Protection de vos données personnelles"
        backgroundImage="/images/hero-bg.webp"
      />

      <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8 text-[#E0E0E0]">
              {/* Introduction */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  FORTIS Geneva IT Services ("nous", "notre", "nos") s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles 
                  conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois suisses sur la protection des données.
                </p>
              </div>

              {/* Data Collection */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  2. Données collectées
                </h2>
                <p className="leading-relaxed mb-4">
                  Nous collectons les types de données personnelles suivants :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="text-white">Données d'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone</li>
                  <li><strong className="text-white">Données professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité</li>
                  <li><strong className="text-white">Données de communication :</strong> messages, demandes de contact, historique des échanges</li>
                  <li><strong className="text-white">Données techniques :</strong> adresse IP, type de navigateur, pages visitées (via cookies)</li>
                  <li><strong className="text-white">Données de projet :</strong> informations relatives à vos projets IT et besoins</li>
                </ul>
              </div>

              {/* Usage */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  3. Utilisation des données
                </h2>
                <p className="leading-relaxed mb-4">
                  Nous utilisons vos données personnelles pour :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Fournir nos services IT et support technique</li>
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Protéger nos droits et prévenir la fraude</li>
                </ul>
              </div>

              {/* Legal Basis */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  4. Base légale du traitement
                </h2>
                <p className="leading-relaxed">
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="space-y-2 ml-6 list-disc mt-4">
                  <li><strong className="text-white">Votre consentement :</strong> pour l'envoi de communications marketing</li>
                  <li><strong className="text-white">L'exécution d'un contrat :</strong> pour la fourniture de nos services</li>
                  <li><strong className="text-white">L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité</li>
                  <li><strong className="text-white">L'obligation légale :</strong> pour le respect des réglementations applicables</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  5. Partage des données
                </h2>
                <p className="leading-relaxed mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations avec :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="text-white">Prestataires de services :</strong> hébergeurs, outils de communication, services de paiement (sous contrat de confidentialité)</li>
                  <li><strong className="text-white">Autorités légales :</strong> si requis par la loi ou une ordonnance judiciaire</li>
                  <li><strong className="text-white">Partenaires techniques :</strong> uniquement pour la fourniture de nos services</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  6. Sécurité des données
                </h2>
                <p className="leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre 
                  l'accès non autorisé, la perte, la destruction ou l'altération. Ces mesures incluent le chiffrement, l'authentification, 
                  les contrôles d'accès et la formation de notre personnel.
                </p>
              </div>

              {/* Data Retention */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  7. Conservation des données
                </h2>
                <p className="leading-relaxed">
                  Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités pour lesquelles elles 
                  ont été collectées, ou conformément aux obligations légales. Les données de contact sont conservées pendant 3 ans après le 
                  dernier contact, sauf demande de suppression de votre part.
                </p>
              </div>

              {/* Your Rights */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  8. Vos droits
                </h2>
                <p className="leading-relaxed mb-4">
                  Conformément au RGPD et aux lois suisses, vous disposez des droits suivants :
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong className="text-white">Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-white">Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong className="text-white">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@fortis-geneva.ch" className="text-[#00FF9D] hover:underline">privacy@fortis-geneva.ch</a>
                </p>
              </div>

              {/* Cookies */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  9. Cookies
                </h2>
                <p className="leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience. Les cookies essentiels sont nécessaires au fonctionnement 
                  du site. Les cookies analytiques nous aident à comprendre comment vous utilisez notre site. Vous pouvez gérer vos préférences 
                  de cookies dans les paramètres de votre navigateur.
                </p>
              </div>

              {/* Contact */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  10. Contact
                </h2>
                <p className="leading-relaxed mb-4">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :
                </p>
                <div className="space-y-2 text-[#E0E0E0]">
                  <p><strong className="text-white">FORTIS Geneva IT Services</strong></p>
                  <p>Route des Jeunes 20, 1201 Genève, Suisse</p>
                  <p>E-mail : <a href="mailto:privacy@fortis-geneva.ch" className="text-[#00FF9D] hover:underline">privacy@fortis-geneva.ch</a></p>
                  <p>Téléphone : <a href="tel:+41225550123" className="text-[#00FF9D] hover:underline">+41 22 555 01 23</a></p>
                </div>
              </div>

              {/* Updates */}
              <div className="p-8 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <h2 
                  className="text-2xl font-bold text-white mb-4" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  11. Modifications
                </h2>
                <p className="leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées 
                  sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                  de nos pratiques de protection des données.
                </p>
                <p className="leading-relaxed mt-4 text-sm text-[#00FF9D]/80">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

