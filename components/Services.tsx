'use client';

import Link from 'next/link';
import { Server, Network, Settings, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Configuration de Serveurs',
      description: 'Installation, configuration et optimisation de serveurs physiques et virtuels pour vos besoins métier.',
      href: '/services#server-setup'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Infrastructure Réseau',
      description: 'Conception et déploiement d\'infrastructures réseau sécurisées et performantes.',
      href: '/services#network-setup'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Services & Applications',
      description: 'Configuration et maintenance de services critiques pour votre activité.',
      href: '/services#service-config'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Support 24/7',
      description: 'Assistance technique continue avec intervention rapide en cas d\'incident.',
      href: '/services#support-247'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/2 via-transparent to-[#00FF9D]/3"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 157, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Nos <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>Services</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg md:text-xl max-w-2xl mx-auto">
            Solutions informatiques complètes pour votre entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative p-6 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.2)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/0 via-[#00FF9D]/5 to-[#00FF9D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF9D] transition-colors duration-300" 
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {service.title}
                </h3>
                <p className="text-[#E0E0E0] text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Link Arrow */}
                <div className="flex items-center gap-2 text-[#00FF9D] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>En savoir plus</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Bottom Border Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF9D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

