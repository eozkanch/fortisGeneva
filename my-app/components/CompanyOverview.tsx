'use client';

import Image from 'next/image';
import { Target, Lock, Handshake } from 'lucide-react';

export default function CompanyOverview() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Sécurité',
      description: 'La sécurité est au cœur de nos solutions'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Partenariat',
      description: 'Nous construisons des relations durables'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Qui sommes-nous ?
            </h2>
            <div className="space-y-4 text-[#E0E0E0] leading-relaxed">
              <p className="text-lg">
                Fortis Geneva est une entreprise IT basée à Genève, spécialisée dans les solutions informatiques sur mesure pour les PME, les institutions publiques et les entreprises privées. Nous nous engageons à fournir des services IT de haute qualité, sécurisés et durables.
              </p>
              <p>
                Forte de plus de 15 années d'expérience dans le secteur informatique, notre équipe d'experts combine savoir-faire technique et approche orientée client pour répondre aux défis technologiques d'aujourd'hui.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
                  style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-3 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300"
                    style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {value.title}
                  </h4>
                  <p className="text-[#E0E0E0] text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#00FF9D]/20"
              style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.1)' }}
            >
              <Image
                src="/images/company-overview.webp"
                alt="Bureau FORTIS Geneva - Équipe IT professionnelle à Genève"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#00FF9D]/10 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

