import PageHero from '@/components/PageHero';
import ServicesOverview from '@/components/ServicesOverview';
import ServiceDetail from '@/components/ServiceDetail';
import AdditionalServices from '@/components/AdditionalServices';
import servicesData from '@/data/data.json';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Solutions informatiques complètes : configuration serveurs, infrastructure réseau, support 24/7 et services IT à Genève. Devis gratuit.',
  openGraph: {
    title: 'Nos Services - FORTIS Geneva',
    description: 'Solutions informatiques complètes pour votre entreprise',
    images: ['/images/services-bg.webp'],
  },
};

export default function ServicesPage() {
  const services = servicesData.services.list;

  // Service-specific data
  const serviceData: Record<string, any> = {
    'server-setup': {
      process: [
        { number: '1', title: 'Audit & Analyse', description: 'Évaluation de votre infrastructure existante' },
        { number: '2', title: 'Conception', description: 'Architecture serveur adaptée à vos besoins' },
        { number: '3', title: 'Déploiement', description: 'Installation et configuration sécurisée' },
        { number: '4', title: 'Support', description: 'Maintenance et monitoring continu' }
      ],
      image: '/images/server-setup.webp',
      details: [
        'Serveurs Windows Server 2019/2022',
        'Solutions Linux (Ubuntu Server, CentOS, RHEL)',
        'Virtualisation (VMware vSphere, Hyper-V)',
        'Configuration haute disponibilité et clustering',
        'Migration de serveurs existants',
        'Optimisation des performances'
      ]
    },
    'network-setup': {
      benefits: [
        { icon: '🚀', title: 'Performance', description: 'Débit optimisé pour vos applications' },
        { icon: '🔒', title: 'Sécurité', description: 'Protection avancée contre les menaces' },
        { icon: '📈', title: 'Évolutivité', description: 'Infrastructure qui grandit avec vous' }
      ],
      image: '/images/network-setup.webp',
      details: [
        'Architecture réseau LAN/WAN',
        'Configuration switches et routeurs',
        'Sécurité réseau et pare-feu nouvelle génération',
        'Réseaux sans fil professionnels (Wi-Fi 6)',
        'Monitoring et supervision en temps réel',
        'Optimisation des performances réseau'
      ]
    },
    'service-config': {
      technologies: [
        'Microsoft 365',
        'Exchange Server',
        'SharePoint',
        'SQL Server',
        'Active Directory',
        'IIS',
        'Apache',
        'Docker'
      ],
      image: '/images/service-config.webp',
      details: [
        'Services de messagerie (Microsoft Exchange, Office 365)',
        'Bases de données (SQL Server, MySQL, PostgreSQL)',
        'Services web et applications métier',
        'Systèmes de sauvegarde automatisée',
        'Solutions de télétravail et VPN',
        'Serveurs de fichiers et partage collaboratif'
      ]
    },
    'support-247': {
      sla: [
        { metric: '99.9%', label: 'Disponibilité garantie' },
        { metric: '< 15min', label: 'Temps de réponse' },
        { metric: '< 2h', label: 'Intervention sur site' }
      ],
      image: '/images/support-247.webp',
      details: [
        'Niveau 1 : Hotline et assistance utilisateurs',
        'Niveau 2 : Support technique spécialisé',
        'Niveau 3 : Expertise avancée et développement',
        'Intervention sur site en urgence (2h max)',
        'Maintenance préventive planifiée',
        'Monitoring proactif des systèmes'
      ]
    }
  };

  return (
    <>
      <PageHero
        title="Nos Services"
        subtitle="Solutions informatiques complètes pour votre entreprise"
        backgroundImage="/images/services-bg.webp"
      />

      <ServicesOverview />

      {/* Main Services */}
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          title={service.title}
          icon={service.icon}
          description={service.description}
          details={serviceData[service.id]?.details || service.details}
          image={serviceData[service.id]?.image || '/images/service-config.webp'}
          reverse={index % 2 === 1}
          process={serviceData[service.id]?.process}
          benefits={serviceData[service.id]?.benefits}
          technologies={serviceData[service.id]?.technologies}
          sla={serviceData[service.id]?.sla}
        />
      ))}

      <AdditionalServices />

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Besoin d'un service{' '}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00e68a]"
                style={{ textShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
              >
                spécifique
              </span> ?
            </h2>
            <p className="text-[#E0E0E0] text-lg md:text-xl mb-10 leading-relaxed">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour votre projet informatique.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 inline-flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)' }}
              >
                Demander un devis
              </a>
              <a
                href="/projects"
                className="px-8 py-4 rounded-xl bg-[#00FF9D]/10 border-2 border-[#00FF9D]/30 text-[#00FF9D] font-semibold hover:bg-[#00FF9D]/20 hover:border-[#00FF9D] transition-all duration-300 inline-flex items-center justify-center"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

