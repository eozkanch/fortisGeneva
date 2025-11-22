'use client';

import { CheckCircle2 } from 'lucide-react';

export default function Methodology() {
  const methodologies = [
    {
      title: 'Conforme aux normes ITIL',
      description: 'Processus standardisés et documentation complète pour une gestion optimale des services IT.'
    },
    {
      title: 'Services sécurisés et durables',
      description: 'Implémentation de solutions robustes avec focus sur la sécurité et la pérennité.'
    },
    {
      title: 'Interventions rapides en Suisse',
      description: 'Équipe locale disponible pour des interventions sur site dans toute la Suisse.'
    }
  ];

  const processSteps = [
    { number: 1, title: 'Analyse', description: 'Audit de l\'existant' },
    { number: 2, title: 'Conception', description: 'Architecture sur mesure' },
    { number: 3, title: 'Implémentation', description: 'Déploiement sécurisé' },
    { number: 4, title: 'Maintenance', description: 'Support continu' }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Notre <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>méthodologie</span>
              </h2>
              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Nous appliquons les meilleures pratiques de l'industrie pour garantir la qualité et la fiabilité de nos services.
              </p>
            </div>

            {/* Methodology List */}
            <div className="space-y-4">
              {methodologies.map((method, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
                  style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.15)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300"
                    style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {method.title}
                    </h4>
                    <p className="text-[#E0E0E0] text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Process Diagram */}
          <div className="grid grid-cols-2 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#00FF9D]/20 hover:border-[#00FF9D]/50 transition-all duration-300 text-center group"
                style={{ boxShadow: '0 8px 24px rgba(0, 255, 157, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00e68a] text-[#050505] font-bold text-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
                >
                  {step.number}
                </div>
                <h5 
                  className="text-white font-semibold mb-2" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {step.title}
                </h5>
                <p className="text-[#E0E0E0] text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

