'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  description: string;
  category: string;
  year: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  id,
  title,
  client,
  description,
  category,
  year,
  image,
  technologies
}: ProjectCardProps) {
  return (
    <div
      className="group rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 overflow-hidden hover:border-[#00FF9D]/40 transition-all duration-300"
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
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - ${client} - ${category}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <span className="px-3 py-1 rounded-lg bg-[#00FF9D]/20 backdrop-blur-sm border border-[#00FF9D]/30 text-[#00FF9D] text-xs font-medium">
            {category}
          </span>
          <span className="px-3 py-1 rounded-lg bg-[#050505]/80 backdrop-blur-sm border border-[#00FF9D]/20 text-[#E0E0E0] text-xs font-medium">
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF9D] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {title}
        </h3>
        <p className="text-[#00FF9D] text-sm font-medium mb-3">{client}</p>
        <p className="text-[#E0E0E0] text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[#00FF9D] text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center gap-2 text-[#00FF9D] font-medium text-sm hover:gap-3 transition-all duration-300 group/link"
        >
          Voir le détail
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

