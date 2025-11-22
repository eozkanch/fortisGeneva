'use client';

import Link from 'next/link';
import { Check, TrendingUp, Shield, Clock } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Expertise Locale',
      description: 'Équipe d\'experts basée en Suisse, interventions rapides'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Support 24/7',
      description: 'Assistance technique continue, 365 jours par an'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conformité ITIL',
      description: 'Processus conformes aux meilleures pratiques'
    }
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '200+', label: 'Projets réalisés' },
    { number: '24/7', label: 'Support technique' },
    { number: '99.9%', label: 'Disponibilité' }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/3 via-transparent to-[#00FF9D]/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Pourquoi <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>Fortis Geneva</span> ?
              </h2>
              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Basée à Genève, Fortis Geneva est votre partenaire de confiance pour tous vos besoins informatiques. 
                Nous combinons expertise technique et service client d'exception.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 hover:bg-[#00FF9D]/5 transition-all duration-300"
                  style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300"
                    style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-[#E0E0E0] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-bold rounded-xl hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 157, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              En savoir plus
            </Link>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#00FF9D]/20 hover:border-[#00FF9D]/50 transition-all duration-300 text-center relative overflow-hidden"
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
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/0 to-[#00FF9D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div 
                    className="text-4xl md:text-5xl font-bold text-[#00FF9D] mb-2" 
                    style={{ 
                      fontFamily: 'var(--font-space-grotesk)',
                      textShadow: '0 0 20px rgba(0, 255, 157, 0.5)'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[#E0E0E0] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

