'use client';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Infrastructure IT <br />
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00e68a]" 
            style={{ textShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
          >
            Premium & Sécurisée
          </span>
        </h1>
        <p className="text-xl text-[#E0E0E0] mb-10 max-w-2xl mx-auto font-light">
          Votre partenaire technologique de confiance à Genève. Nous construisons l'avenir numérique de votre entreprise.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="/services" 
            className="px-8 py-4 bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-bold rounded-full hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 transform hover:-translate-y-1" 
            style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.5)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 157, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
            }}
          >
            Nos Services
          </a>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#050505] transition-all duration-300 transform hover:-translate-y-1"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}

