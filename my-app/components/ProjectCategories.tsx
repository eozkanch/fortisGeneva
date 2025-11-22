'use client';

import { Globe, Server, Cloud, Shield } from 'lucide-react';

export default function ProjectCategories() {
  const categories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Infrastructure Réseau',
      description: 'Conception et déploiement de réseaux sécurisés pour entreprises et institutions',
      projects: [
        'EPFL - Laboratoires de recherche',
        'Hôpitaux Universitaires de Genève',
        'Banque Cantonal Vaudoise'
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Data Centers',
      description: 'Modernisation et optimisation d\'infrastructures data center critiques',
      projects: [
        'SwissTrans - Rénovation complète',
        'Swiss Post - Migration haute disponibilité',
        'Rolex - Infrastructure de production'
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Migration Cloud',
      description: 'Accompagnement dans la transformation digitale et migration cloud',
      projects: [
        'GenèveTech - Azure migration',
        'Nestlé R&D - Stratégie hybride',
        'ONU Genève - Office 365 deployment'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sécurité IT',
      description: 'Audit sécurité et implémentation de solutions de protection avancées',
      projects: [
        'Banque Privée Edmond de Rothschild',
        'CERN - Security assessment',
        'Ville de Genève - Cyber défense'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Nos domaines d'<span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>intervention</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Expertise technique dans tous les secteurs IT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-4 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300 group-hover:scale-110"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
              >
                {category.icon}
              </div>
              <h3 
                className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF9D] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {category.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.projects.map((project, idx) => (
                  <li key={idx} className="text-[#00FF9D]/80 text-xs flex items-start gap-2">
                    <span className="text-[#00FF9D] mt-1">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

