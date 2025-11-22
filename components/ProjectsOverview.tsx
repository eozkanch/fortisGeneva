'use client';

export default function ProjectsOverview() {
  const stats = [
    { number: '50+', label: 'Projets réalisés' },
    { number: '15+', label: 'Clients satisfaits' },
    { number: '99.9%', label: 'Taux de réussite' },
    { number: '24/7', label: 'Support continu' }
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-[#050505]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 group"
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
              <div 
                className="text-3xl md:text-4xl font-bold text-[#00FF9D] mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
              >
                {stat.number}
              </div>
              <div className="text-[#E0E0E0] text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

