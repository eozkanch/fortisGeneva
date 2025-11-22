'use client';

import { Bus, Car, Plane } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Notre <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>localisation</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            FORTIS Geneva - Au cœur de Genève, proche des transports publics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#00FF9D]/10"
            style={{ boxShadow: '0 8px 32px rgba(0, 255, 157, 0.1)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.5649847555157!2d6.141240576460982!3d46.20438827112595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b1c8b9f7a3d%3A0x8a8a8a8a8a8a8a8a!2sRoute%20des%20Jeunes%2020%2C%201201%20Gen%C3%A8ve%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1642587432123!5m2!1sfr!2sch"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FORTIS Geneva - Route des Jeunes 20, 1201 Genève"
              className="w-full"
            />
          </div>

          {/* Transport Info */}
          <div className="space-y-6">
            <h3 
              className="text-2xl font-bold text-white mb-6" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Accès & Transport
            </h3>

            <div className="space-y-4">
              {/* Public Transport */}
              <div className="p-6 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Transports publics</h4>
                    <p className="text-[#E0E0E0] text-sm">
                      Bus lignes 1, 5, 25 - Arrêt "Route des Jeunes"<br />
                      Tram 15 - Arrêt "Plainpalais" (5 min à pied)
                    </p>
                  </div>
                </div>
              </div>

              {/* Car */}
              <div className="p-6 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">En voiture</h4>
                    <p className="text-[#E0E0E0] text-sm">
                      Parking gratuit disponible<br />
                      Accès direct depuis l'autoroute A1<br />
                      Sortie "Genève-Centre"
                    </p>
                  </div>
                </div>
              </div>

              {/* Airport */}
              <div className="p-6 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] flex-shrink-0">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Aéroport</h4>
                    <p className="text-[#E0E0E0] text-sm">
                      15 minutes en voiture<br />
                      25 minutes en transport public<br />
                      Service de navette disponible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

