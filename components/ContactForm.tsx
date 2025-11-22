'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          budget: '',
          timeline: '',
          message: '',
          newsletter: false,
          privacy: false
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/20"
      style={{ boxShadow: '0 20px 60px rgba(0, 255, 157, 0.15), inset 0 1px 0 rgba(0, 255, 157, 0.1)' }}
    >
      <div className="mb-8">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4" 
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Demande de devis <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>gratuit</span>
        </h2>
        <p className="text-[#E0E0E0]">
          Remplissez ce formulaire et nous vous recontacterons dans les 24h pour discuter de vos besoins IT.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0] mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white placeholder-[#666] focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
            placeholder="Jean Dupont"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
            Adresse e-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white placeholder-[#666] focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
            placeholder="jean.dupont@example.com"
          />
        </div>

        {/* Company & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#E0E0E0] mb-2">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white placeholder-[#666] focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
              placeholder="Nom de l'entreprise"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#E0E0E0] mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white placeholder-[#666] focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
              placeholder="+41"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#E0E0E0] mb-2">
            Type de projet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
          >
            <option value="">Sélectionnez votre besoin</option>
            <option value="infrastructure">Infrastructure Réseau</option>
            <option value="servers">Configuration Serveurs</option>
            <option value="support">Support IT 24/7</option>
            <option value="cloud">Migration Cloud</option>
            <option value="security">Audit Sécurité</option>
            <option value="backup">Sauvegarde & Recovery</option>
            <option value="other">Autre projet</option>
          </select>
        </div>

        {/* Budget & Timeline */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-[#E0E0E0] mb-2">
              Budget approximatif
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
            >
              <option value="">Sélectionnez votre budget</option>
              <option value="<10k">Moins de CHF 10'000</option>
              <option value="10k-25k">CHF 10'000 - 25'000</option>
              <option value="25k-50k">CHF 25'000 - 50'000</option>
              <option value="50k-100k">CHF 50'000 - 100'000</option>
              <option value=">100k">Plus de CHF 100'000</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-[#E0E0E0] mb-2">
              Délai souhaité
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300"
            >
              <option value="">Sélectionnez le délai</option>
              <option value="urgent">Urgent (&lt; 1 mois)</option>
              <option value="1-3months">1-3 mois</option>
              <option value="3-6months">3-6 mois</option>
              <option value="6months+">Plus de 6 mois</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#E0E0E0] mb-2">
            Description du projet *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-[#050505]/80 border border-[#00FF9D]/20 text-white placeholder-[#666] focus:outline-none focus:border-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 transition-all duration-300 resize-none"
            placeholder="Décrivez votre projet, vos besoins actuels et vos objectifs..."
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-[#00FF9D]/30 bg-[#050505]/80 text-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 focus:ring-offset-0"
            />
            <span className="text-sm text-[#E0E0E0]">
              J'accepte de recevoir des informations sur les services FORTIS Geneva
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1 w-5 h-5 rounded border-[#00FF9D]/30 bg-[#050505]/80 text-[#00FF9D] focus:ring-2 focus:ring-[#00FF9D]/20 focus:ring-offset-0"
            />
            <span className="text-sm text-[#E0E0E0]">
              J'accepte la <a href="#privacy" className="text-[#00FF9D] hover:underline">politique de confidentialité</a> *
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 rounded-xl bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:ring-offset-2 focus:ring-offset-[#050505]"
          style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)' }}
          aria-label="Envoyer le formulaire de contact"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              Envoi en cours...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <span>✓</span>
              Message envoyé !
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Envoyer la demande
            </>
          )}
        </button>
      </form>
    </div>
  );
}

