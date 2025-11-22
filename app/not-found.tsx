'use client';

import Link from 'next/link';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00FF9D]/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Cursor Glow Effect - Only on client */}
      {isClient && (
        <div 
          className="absolute pointer-events-none z-0 transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 255, 157, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        ></div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number with Glow Effect */}
          <div className="mb-8 relative">
            <h1 
              className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] via-[#00e68a] to-[#00FF9D] leading-none"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                textShadow: '0 0 40px rgba(0, 255, 157, 0.5)',
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 157, 0.3))'
              }}
            >
              404
            </h1>
            <div 
              className="absolute inset-0 blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(0, 255, 157, 0.4) 0%, transparent 70%)',
                transform: 'scale(1.2)'
              }}
            ></div>
          </div>

          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div 
              className="w-24 h-24 rounded-full bg-[#00FF9D]/10 border-2 border-[#00FF9D]/30 flex items-center justify-center group hover:bg-[#00FF9D]/20 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 157, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 157, 0.6)';
                e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 157, 0.3)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <AlertCircle 
                className="w-12 h-12 text-[#00FF9D] group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 157, 0.8))' }}
              />
            </div>
          </div>

          {/* Title */}
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Page <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>introuvable</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#E0E0E0] mb-12 max-w-md mx-auto leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Elle a peut-être été supprimée ou l'URL est incorrecte.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00FF9D] to-[#00e68a] text-[#050505] font-bold rounded-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
              style={{ boxShadow: '0 8px 24px rgba(0, 255, 157, 0.4)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.4)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e68a] to-[#00FF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold rounded-xl hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 flex items-center gap-2"
              style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 157, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-[#00FF9D]/10">
            <p className="text-[#E0E0E0] text-sm mb-6">Ou explorez nos pages principales :</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Projets', href: '/projects' },
                { name: 'À Propos', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg bg-[#0a0a0a]/50 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 hover:bg-[#00FF9D]/5 text-[#E0E0E0] hover:text-white transition-all duration-300 text-sm"
                  style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

