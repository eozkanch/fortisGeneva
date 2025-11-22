'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 relative overflow-hidden border-t border-[#00FF9D]/10" role="contentinfo">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF9D] to-transparent opacity-50" style={{ boxShadow: '0 0 10px #00FF9D' }}></div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00FF9D]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="relative h-12 w-auto">
                  <Image 
                    src="/logo-fortis.png" 
                    alt="Fortis Geneva Logo" 
                    width={140} 
                    height={48} 
                    className="object-contain h-12 w-auto"
                  />
               </div>
               <div className="flex flex-col">
                  <span className="text-[#00FF9D] font-bold text-xl tracking-wide leading-none" style={{ fontFamily: 'var(--font-space-grotesk)', textShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}>
                    FORTIS
                  </span>
                  <span className="text-[#E0E0E0] text-xs uppercase tracking-[0.2em] leading-none mt-0.5 opacity-80">
                    Geneva
                  </span>
               </div>
            </div>
            <p className="text-[#E0E0E0] leading-relaxed text-sm">
              Solutions informatiques d'excellence pour les entreprises genevoises. 
              Infrastructure, sécurité et innovation au service de votre croissance.
            </p>
            <div className="flex gap-4">
              {/* Social Icons with Lucide React */}
              <a 
                href="https://twitter.com/fortisgeneva" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00FF9D] hover:text-[#050505] flex items-center justify-center transition-all duration-300 group border border-[#00FF9D]/20"
                style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                }}
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/fortisgeneva" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00FF9D] hover:text-[#050505] flex items-center justify-center transition-all duration-300 group border border-[#00FF9D]/20"
                style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                }}
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
              </a>
              <a 
                href="https://instagram.com/fortisgeneva" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00FF9D] hover:text-[#050505] flex items-center justify-center transition-all duration-300 group border border-[#00FF9D]/20"
                style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                }}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#00FF9D]" style={{ textShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}>Services</h4>
            <ul className="space-y-3">
              {[
                'Configuration Serveurs',
                'Infrastructure Réseau',
                'Cybersécurité',
                'Cloud & Backup',
                'Support 24/7'
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[#E0E0E0] hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-[#00FF9D] rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 3px #00FF9D' }}></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#00FF9D]" style={{ textShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}>Entreprise</h4>
            <ul className="space-y-3">
              {[
                { name: 'À Propos', href: '/about' },
                { name: 'Nos Projets', href: '/projects' },
                { name: 'Contact', href: '/contact' },
                { name: 'Confidentialité', href: '/privacy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#E0E0E0] hover:text-white hover:pl-2 transition-all duration-300 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#00FF9D]" style={{ textShadow: '0 0 10px rgba(0, 255, 157, 0.3)' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div 
                  className="mt-1 w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF9D] transition-all duration-300 border border-[#00FF9D]/20" 
                  style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <MapPin className="w-4 h-4 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
                </div>
                <span className="text-[#E0E0E0] text-sm group-hover:text-white transition-colors leading-relaxed">
                  Route des Jeunes 20,<br />1201 Genève, Suisse
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div 
                  className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF9D] transition-all duration-300 border border-[#00FF9D]/20" 
                  style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <Phone className="w-4 h-4 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
                </div>
                <a href="tel:+41225550123" className="text-[#E0E0E0] text-sm group-hover:text-white transition-colors hover:text-[#00FF9D]">
                  +41 22 555 01 23
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div 
                  className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF9D] transition-all duration-300 border border-[#00FF9D]/20" 
                  style={{ boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 157, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 255, 157, 0.2)';
                  }}
                >
                  <Mail className="w-4 h-4 text-[#00FF9D] group-hover:text-[#050505] transition-colors" />
                </div>
                <a href="mailto:contact@fortis-geneva.ch" className="text-[#E0E0E0] text-sm group-hover:text-white transition-colors hover:text-[#00FF9D]">
                  contact@fortis-geneva.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-[#E0E0E0] text-xs">
              &copy; {new Date().getFullYear()} Fortis Geneva IT Services. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-[#E0E0E0] text-xs font-mono">CHE-698.875.674</span>
               <div className="h-3 w-px bg-[#00FF9D]/20"></div>
               <span className="text-[#E0E0E0] text-xs">Designed with ❤️ in Geneva</span>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="pt-6 border-t border-[#00FF9D]/10 flex items-center justify-center">
            <p className="text-[#E0E0E0] text-xs flex items-center gap-2">
              <span className="opacity-60">Site développé par</span>
              <a 
                href="https://eozkan.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FF9D] hover:text-[#00e68a] font-semibold transition-colors flex items-center gap-1 group"
                style={{ textShadow: '0 0 5px rgba(0, 255, 157, 0.3)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 10px rgba(0, 255, 157, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 5px rgba(0, 255, 157, 0.3)';
                }}
              >
                E. Özkan
                <svg 
                  className="w-3 h-3 text-[#00FF9D] group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

