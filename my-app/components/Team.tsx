'use client';

export default function Team() {
  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '8', label: 'Experts certifiés' },
    { number: '200+', label: 'Projets réalisés' },
    { number: '24/7', label: 'Support disponible' }
  ];

  const certifications = [
    'Microsoft Certified',
    'Cisco CCNA/CCNP',
    'VMware VCP',
    'ITIL Foundation',
    'CompTIA Security+'
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Notre <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>équipe</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Des experts passionnés à votre service
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#00FF9D]/20 hover:border-[#00FF9D]/50 transition-all duration-300 text-center group"
              style={{ boxShadow: '0 8px 24px rgba(0, 255, 157, 0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="text-4xl md:text-5xl font-bold text-[#00FF9D] mb-2" 
                style={{ 
                  fontFamily: 'var(--font-space-grotesk)',
                  textShadow: '0 0 20px rgba(0, 255, 157, 0.5)'
                }}
              >
                {stat.number}
              </div>
              <div className="text-[#E0E0E0] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 
            className="text-2xl font-bold text-white mb-6" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Certifications de l'équipe
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[#00FF9D] font-semibold text-sm hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300"
                style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

