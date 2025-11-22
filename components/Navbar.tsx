'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [particles, setParticles] = useState<Array<{width: number, height: number, left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    if (isOpen) {
      const generatedParticles = Array.from({ length: 15 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2,
      }));
      setParticles(generatedParticles);
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      role="banner"
    >
      <div 
        className={`w-full h-16 transition-all duration-300 border-b border-[#00FF9D]/20 backdrop-blur-2xl flex items-center justify-between px-4 md:px-8 lg:px-12 ${
          scrolled 
            ? 'bg-[#050505]/98 supports-[backdrop-filter]:bg-[#050505]/95 shadow-[0_4px_24px_rgba(0,255,157,0.1)]' 
            : 'bg-[#050505]/85 supports-[backdrop-filter]:bg-[#050505]/75 shadow-[0_8px_32px_rgba(0,255,157,0.08)]'
        }`}
        style={{
          boxShadow: scrolled 
            ? '0 4px 24px rgba(0, 255, 157, 0.15), 0 0 40px rgba(0, 255, 157, 0.05), inset 0 1px 0 rgba(0, 255, 157, 0.1)' 
            : '0 8px 32px rgba(0, 255, 157, 0.1), 0 0 60px rgba(0, 255, 157, 0.05), inset 0 1px 0 rgba(0, 255, 157, 0.1)'
        }}
      >
        {/* Gradient Overlay - 2025 Trend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/0 via-[#00FF9D]/5 to-[#00FF9D]/0 pointer-events-none opacity-50"></div>
        {/* Logo Area */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative h-12 w-auto overflow-hidden transition-all group-hover:scale-105">
             <Image 
               src="/logo-fortis.png" 
               alt="Fortis Geneva Logo" 
               width={120} 
               height={48} 
               className="object-contain h-12 w-auto"
               priority
             />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-[#00FF9D] font-bold text-lg tracking-wide leading-none group-hover:text-[#00e68a] transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)', textShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}>
              FORTIS
            </span>
            <span className="text-[#E0E0E0] text-[10px] uppercase tracking-[0.2em] leading-none mt-0.5 opacity-80">
              Geneva
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative z-10 hidden md:flex items-center gap-8">
          {[
            { name: 'Accueil', href: '/' },
            { name: 'À Propos', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Projets', href: '/projects' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="relative text-sm font-medium text-[#E0E0E0] hover:text-white transition-colors py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF9D] transition-all duration-300 group-hover:w-full" style={{ boxShadow: '0 0 5px #00FF9D' }}></span>
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold rounded-lg hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 text-sm"
            style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.5)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 157, 0.5)';
            }}
          >
            Contactez-nous
          </Link>
        </nav>

        {/* Mobile Menu Button - 2025 Style Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 w-11 h-11 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:ring-offset-2 focus:ring-offset-[#050505] rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 hover:bg-[#00FF9D]/20 transition-all duration-300 group"
          style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 157, 0.2)';
          }}
        >
          <div className="flex flex-col gap-1.5 items-center justify-center w-5">
            <span 
              className={`h-0.5 bg-[#00FF9D] transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} 
              style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.8)' }}
            />
            <span 
              className={`h-0.5 bg-[#00FF9D] transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} 
              style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.8)' }}
            />
            <span 
              className={`h-0.5 bg-[#00FF9D] transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-3'}`} 
              style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.8)' }}
            />
          </div>
        </button>

        {/* Mobile Navigation Modal - Slide from Right */}
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
            isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
        >
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"></div>
        </div>

        {/* Modal Panel - Slide from Right */}
        <div 
          className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-50 md:hidden transition-all duration-500 ease-out ${
            isOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ margin: 0, padding: 0, right: 0 }}
        >
          {/* Modal Background */}
          <div className="h-screen w-full bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] border-l border-[#00FF9D]/20 backdrop-blur-2xl overflow-y-auto" style={{ margin: 0, padding: 0 }}>
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/5 via-transparent to-[#00FF9D]/10 pointer-events-none"></div>
            
            {/* Floating Particles Effect - Only render on client */}
            {particles.length > 0 && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#00FF9D]/10 animate-pulse"
                    style={{
                      width: `${particle.width}px`,
                      height: `${particle.height}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animationDelay: `${particle.delay}s`,
                      animationDuration: `${particle.duration}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Menu Content */}
            <nav className="relative z-10 min-h-full flex flex-col gap-6 px-5 py-6">
              {/* Close Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-auto">
                    <Image 
                      src="/logo-fortis.png" 
                      alt="Fortis Geneva Logo" 
                      width={120} 
                      height={48} 
                      className="object-contain h-12 w-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#00FF9D] font-bold text-lg tracking-wide leading-none" style={{ fontFamily: 'var(--font-space-grotesk)', textShadow: '0 0 15px rgba(0, 255, 157, 0.4)' }}>
                      FORTIS
                    </span>
                    <span className="text-[#E0E0E0] text-[10px] uppercase tracking-[0.2em] leading-none mt-0.5 opacity-80">
                      Geneva
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 hover:bg-[#00FF9D]/20 transition-all"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 157, 0.2)' }}
                  aria-label="Fermer le menu"
                >
                  <svg className="w-5 h-5 text-[#00FF9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links - Modern Card Style */}
              <nav className="space-y-3" aria-label="Navigation principale">
                <h2 id="mobile-menu-title" className="sr-only">Menu de navigation</h2>
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À Propos', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projets', href: '/projects' },
              ].map((item, index) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-6 py-4 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 hover:bg-[#00FF9D]/5 transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.2)';
                    e.currentTarget.style.transform = 'translateX(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/0 via-[#00FF9D]/5 to-[#00FF9D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10 text-xl font-medium text-white group-hover:text-[#00FF9D] transition-colors flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00FF9D] opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 8px rgba(0, 255, 157, 0.8)' }}></span>
                    {item.name}
                  </span>
                </Link>
              ))}
              </nav>
            
              {/* CTA Button - Enhanced 2025 Style */}
              <Link 
                href="/contact"
                onClick={closeMenu}
                className="mt-6 block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#00FF9D] to-[#00e68a] text-[#050505] font-bold transition-all duration-300 text-base relative overflow-hidden group"
                style={{ boxShadow: '0 8px 24px rgba(0, 255, 157, 0.4)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 157, 0.4)';
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                }}
              >
                <span className="relative z-10">Contactez-nous</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00e68a] to-[#00FF9D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

