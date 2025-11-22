'use client';

import { Quote } from 'lucide-react';

export default function ProjectTestimonials() {
  const testimonials = [
    {
      quote: "BJK IT Services a parfaitement géré la sécurisation de nos laboratoires. Leur expertise technique et leur réactivité sont remarquables.",
      author: "Dr. Marc Dubois",
      role: "Directeur IT, EPFL"
    },
    {
      quote: "La migration de notre data center s'est déroulée sans interruption de service. Une prouesse technique impressionnante.",
      author: "Sophie Martin",
      role: "CTO, SwissTrans SA"
    },
    {
      quote: "L'accompagnement dans notre transformation cloud a été exemplaire. Équipe professionnelle et résultats au rendez-vous.",
      author: "Pierre Rousseau",
      role: "IT Manager, GenèveTech"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Témoignages <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>clients</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
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
              <Quote className="w-8 h-8 text-[#00FF9D]/30 mb-4" />
              <p className="text-[#E0E0E0] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-[#00FF9D]/10 pt-4">
                <div className="font-bold text-white text-sm">{testimonial.author}</div>
                <div className="text-[#00FF9D] text-xs mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

