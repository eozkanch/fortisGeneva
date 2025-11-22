'use client';

import { Globe, Server, Database, Wrench, BarChart3 } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Infrastructures réseau sur mesure',
      description: 'Conception et implémentation d\'architectures réseau adaptées à votre environnement et vos contraintes métier.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Intégration de serveurs & data centers',
      description: 'Déploiement de solutions serveur robustes et évolutives pour héberger vos applications critiques.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Sauvegarde & reprise après sinistre',
      description: 'Stratégies de protection des données et plans de continuité d\'activité pour assurer la pérennité de votre entreprise.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Support IT 24/7 (niveaux 1, 2, 3)',
      description: 'Assistance technique multi-niveaux disponible en permanence pour garantir la disponibilité de vos systèmes.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Gestion des actifs & continuité de service',
      description: 'Suivi et optimisation de votre parc informatique pour maximiser votre retour sur investissement.'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Nos domaines d'<span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>expertise</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins informatiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.2)';
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
                {area.icon}
              </div>
              <h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF9D] transition-colors duration-300" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {area.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

