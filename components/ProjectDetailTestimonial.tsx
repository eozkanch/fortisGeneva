'use client';

import { Quote } from 'lucide-react';

interface ProjectDetailTestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function ProjectDetailTestimonial({ quote, author, role }: ProjectDetailTestimonialProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-8 md:p-12 rounded-3xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/20"
            style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
          >
            <Quote className="w-12 h-12 text-[#00FF9D]/30 mb-6" />
            <p className="text-[#E0E0E0] text-lg md:text-xl leading-relaxed mb-8">
              "{quote}"
            </p>
            <div className="border-t border-[#00FF9D]/10 pt-6">
              <div className="font-bold text-white text-lg">{author}</div>
              <div className="text-[#00FF9D] text-sm mt-1">{role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

