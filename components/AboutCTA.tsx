'use client';

import Link from 'next/link';
import { ArrowRight, FolderKanban } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505] relative overflow-hidden border-t border-[#00FF9D]/10">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <div 
            className="p-8 md:p-12 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-2xl border border-[#00FF9D]/20"
            style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
          >
            <h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Prêt à collaborer avec{' '}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00e68a]"
                style={{ textShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
              >
                Fortis Geneva
              </span> ?
            </h2>
            
            <p className="text-[#E0E0E0] text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Discutons de vos projets et découvrez comment notre expertise peut faire la différence pour votre entreprise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00FF9D] to-[#00e68a] text-[#050505] font-bold rounded-xl transition-all duration-300 overflow-hidden flex items-center gap-2"
                style={{ boxShadow: '0 8px 24px rgba(0, 255, 157, 0.4)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.4)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00e68a] to-[#00FF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link 
                href="/projects"
                className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:border-[#00FF9D] hover:text-[#00FF9D] transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 4px 16px rgba(255, 255, 255, 0.05)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <FolderKanban className="w-5 h-5" />
                <span>Voir nos projets</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

