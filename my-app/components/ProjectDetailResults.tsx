'use client';

import { CheckCircle2 } from 'lucide-react';

interface ProjectDetailResultsProps {
  results: string[];
}

export default function ProjectDetailResults({ results }: ProjectDetailResultsProps) {
  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Résultats <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>obtenus</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 group"
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
              <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/20 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D] flex-shrink-0 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-[#E0E0E0] leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

