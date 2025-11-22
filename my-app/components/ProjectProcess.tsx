'use client';

import { Search, Layout, Settings, GraduationCap } from 'lucide-react';

export default function ProjectProcess() {
  const steps = [
    {
      number: '1',
      icon: <Search className="w-6 h-6" />,
      title: 'Analyse & Audit',
      description: 'Évaluation complète de votre infrastructure existante et identification des besoins'
    },
    {
      number: '2',
      icon: <Layout className="w-6 h-6" />,
      title: 'Conception & Planification',
      description: 'Conception de l\'architecture cible et planification détaillée du projet'
    },
    {
      number: '3',
      icon: <Settings className="w-6 h-6" />,
      title: 'Implémentation',
      description: 'Déploiement progressif avec tests et validation à chaque étape'
    },
    {
      number: '4',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Formation & Support',
      description: 'Formation des équipes et mise en place du support continu'
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
            Notre méthodologie <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>projet</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Une approche structurée pour garantir le succès de vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
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
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#00FF9D] text-[#050505] flex items-center justify-center font-bold text-lg border-4 border-[#050505] z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
              >
                {step.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-4 mt-4 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300 group-hover:scale-110"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
              >
                {step.icon}
              </div>
              <h3 
                className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF9D] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {step.title}
              </h3>
              <p className="text-[#E0E0E0] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

