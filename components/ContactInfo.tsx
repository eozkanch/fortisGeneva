'use client';

import { MapPin, Phone, Mail, Clock, PhoneCall, Mail as MailIcon } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <div className="p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/20"
        style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
      >
        <h3 
          className="text-2xl font-bold text-white mb-4" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Informations de contact
        </h3>
        <p className="text-[#E0E0E0] mb-6">
          Notre équipe d'experts est à votre disposition pour étudier vos besoins et vous proposer des solutions adaptées.
        </p>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
            >
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Adresse</h4>
              <p className="text-[#E0E0E0]">
                Route des Jeunes 20<br />
                1201 Genève, Suisse
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
            >
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Téléphone</h4>
              <Link href="tel:+41225550123" className="text-[#00FF9D] hover:text-[#00e68a] transition-colors">
                +41 22 555 01 23
              </Link>
              <p className="text-[#00FF9D]/80 text-sm mt-1">Lun-Ven: 8h-18h | Urgences: 24/7</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
            >
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">E-mail</h4>
              <Link href="mailto:contact@fortisgeneva.ch" className="text-[#00FF9D] hover:text-[#00e68a] transition-colors">
                contact@fortisgeneva.ch
              </Link>
              <p className="text-[#00FF9D]/80 text-sm mt-1">Réponse sous 24h garantie</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}
            >
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Horaires</h4>
              <p className="text-[#E0E0E0] text-sm">
                Lundi - Vendredi: 8h00 - 18h00<br />
                Samedi: 9h00 - 12h00<br />
                Support d'urgence: 24h/24, 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/20"
        style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
      >
        <h4 
          className="text-xl font-bold text-white mb-6" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Contact rapide
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="tel:+41225550123"
            className="p-4 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
            style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-3 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h5 className="text-white font-semibold text-sm mb-1">Appelez-nous</h5>
            <p className="text-[#E0E0E0] text-xs">Discussion immédiate</p>
          </Link>
          <Link
            href="mailto:contact@fortisgeneva.ch"
            className="p-4 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/10 hover:border-[#00FF9D]/40 transition-all duration-300 group"
            style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mb-3 group-hover:bg-[#00FF9D] group-hover:text-[#050505] transition-all duration-300">
              <MailIcon className="w-5 h-5" />
            </div>
            <h5 className="text-white font-semibold text-sm mb-1">E-mail</h5>
            <p className="text-[#E0E0E0] text-xs">Réponse sous 24h</p>
          </Link>
        </div>
      </div>

      {/* Legal Info */}
      <div className="p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/20"
        style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
      >
        <h4 
          className="text-xl font-bold text-white mb-4" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Informations légales
        </h4>
        <div className="space-y-2 text-sm text-[#E0E0E0]">
          <p><strong className="text-white">Prestataire de services :</strong> FORTIS Geneva</p>
          <p><strong className="text-white">Adresse :</strong> Route des Jeunes 20, 1201 Genève</p>
          <p><strong className="text-white">N° TVA / Fiscal :</strong> CHE-698.875.674</p>
          <p><strong className="text-white">Forme juridique :</strong> Société à responsabilité limitée</p>
          <p><strong className="text-white">Registre du commerce :</strong> Genève</p>
        </div>
      </div>
    </div>
  );
}

