'use client';

export default function Features() {
  const features = [
    { 
      title: 'Expertise Locale', 
      desc: 'Une équipe basée à Genève, disponible et réactive.', 
      icon: '🇨🇭' 
    },
    { 
      title: 'Sécurité Maximale', 
      desc: 'Protection avancée de vos données critiques.', 
      icon: '🛡️' 
    },
    { 
      title: 'Support 24/7', 
      desc: 'Assistance technique continue, 365 jours par an.', 
      icon: '⚡' 
    },
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Pourquoi Fortis Geneva ?
          </h2>
          <p className="text-[#E0E0E0] text-lg">
            L'excellence suisse au service de votre infrastructure IT
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#00FF9D]/20 hover:border-[#00FF9D]/50 transition-all duration-300 hover:shadow-lg group"
              style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 157, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.1)';
              }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 
                className="text-xl font-bold text-white mb-3" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#E0E0E0] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

