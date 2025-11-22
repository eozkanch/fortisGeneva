'use client';

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Solutions informatiques d'<span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>excellence</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            Nous accompagnons votre entreprise dans sa transformation digitale avec des services sur mesure
          </p>
        </div>
      </div>
    </section>
  );
}

