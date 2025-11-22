'use client';

import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

interface ProjectDetailChallengeProps {
  challenge: string;
  image: string;
}

export default function ProjectDetailChallenge({ challenge, image }: ProjectDetailChallengeProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
              >
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Le défi
              </h2>
            </div>
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              {challenge}
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden border border-[#00FF9D]/10"
            style={{ boxShadow: '0 8px 32px rgba(0, 255, 157, 0.1)' }}
          >
            <Image
              src={image}
              alt={`Défi technique - ${challenge.substring(0, 50)}...`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

