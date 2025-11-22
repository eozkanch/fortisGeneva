'use client';

import Image from 'next/image';
import { Lightbulb, Lock, BarChart3, Zap } from 'lucide-react';

interface ProjectDetailSolutionProps {
  solution: string;
  image: string;
}

export default function ProjectDetailSolution({ solution, image }: ProjectDetailSolutionProps) {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Sécurité renforcée',
      description: 'Protection avancée avec segmentation et monitoring'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance optimisée',
      description: 'Architecture haute performance et scalable'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Disponibilité maximale',
      description: 'Redondance complète et haute disponibilité'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation continue',
      description: 'Solutions à la pointe de la technologie'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden border border-[#00FF9D]/10 order-2 md:order-1"
            style={{ boxShadow: '0 8px 32px rgba(0, 255, 157, 0.1)' }}
          >
            <Image
              src={image}
              alt={`Solution technique - ${solution.substring(0, 50)}...`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Notre solution
            </h2>
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              {solution}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 group"
                  style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-3 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-[#E0E0E0] text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

