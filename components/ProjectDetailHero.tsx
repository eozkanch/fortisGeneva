'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  year: string;
  client: string;
  backgroundImage: string;
}

export default function ProjectDetailHero({
  title,
  category,
  year,
  client,
  backgroundImage
}: ProjectDetailHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-95"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4), rgba(10, 10, 10, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay - Daha şeffaf */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#00FF9D] hover:text-[#00e68a] transition-colors duration-300 text-sm font-medium"
            >
              Projets
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-lg bg-[#00FF9D]/20 backdrop-blur-sm border border-[#00FF9D]/30 text-[#00FF9D] text-sm font-medium">
              {category}
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#050505]/80 backdrop-blur-sm border border-[#00FF9D]/20 text-[#E0E0E0] text-sm font-medium">
              {year}
            </span>
            <span className="px-4 py-2 rounded-lg bg-[#050505]/80 backdrop-blur-sm border border-[#00FF9D]/20 text-[#E0E0E0] text-sm font-medium">
              {client}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

