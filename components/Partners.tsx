'use client';

export default function Partners() {
  const partners = [
    { name: 'Dell', description: 'Serveurs et solutions de stockage enterprise' },
    { name: 'HP', description: 'Équipements réseau et postes de travail' },
    { name: 'Synology', description: 'Solutions NAS et sauvegarde' },
    { name: 'Ubiquiti', description: 'Infrastructure réseau sans fil' }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Nos partenaires <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>technologiques</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Nous travaillons avec les meilleurs fournisseurs du marché
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 text-center group"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="text-2xl font-bold text-[#00FF9D] mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: 'var(--font-space-grotesk)', textShadow: '0 0 15px rgba(0, 255, 157, 0.4)' }}
              >
                {partner.name}
              </div>
              <p className="text-[#E0E0E0] text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#00FF9D]/5 border border-[#00FF9D]/20 backdrop-blur-sm">
          <p className="text-[#E0E0E0] text-center">
            <strong className="text-[#00FF9D]">Avantage local :</strong> Achats via Digitec.ch pour bénéficier des tarifs locaux et d'un service après-vente optimal en Suisse.
          </p>
        </div>
      </div>
    </section>
  );
}

