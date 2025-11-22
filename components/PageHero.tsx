'use client';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4), rgba(10, 10, 10, 0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Gradient Overlay - Daha şeffaf */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-[#E0E0E0] font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

