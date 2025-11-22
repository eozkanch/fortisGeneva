'use client';

import { Database, Cloud, Shield, GraduationCap } from 'lucide-react';

export default function AdditionalServices() {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Sauvegarde & Recovery',
      description: 'Solutions de sauvegarde automatisée et plans de reprise d\'activité pour protéger vos données critiques.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Migration Cloud',
      description: 'Accompagnement dans la migration vers le cloud (Azure, AWS) avec stratégie hybride sur mesure.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Audit Sécurité',
      description: 'Évaluation complète de votre sécurité informatique et recommandations pour renforcer vos défenses.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Formation',
      description: 'Formation de vos équipes sur les outils et bonnes pratiques pour optimiser l\'usage de votre IT.'
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
            Services <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>Complémentaires</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            D'autres services pour compléter votre infrastructure IT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
                {service.icon}
              </div>
              <h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF9D] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {service.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

