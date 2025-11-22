'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Proposez-vous des devis gratuits ?',
      answer: 'Oui, nous proposons des consultations et devis gratuits pour tous vos projets IT. Notre équipe se déplace également sur site si nécessaire.'
    },
    {
      question: 'Quels sont vos délais d\'intervention ?',
      answer: 'Pour les urgences, nous intervenons sous 2h maximum. Pour les projets planifiés, les délais varient selon la complexité, généralement entre 1 et 8 semaines.'
    },
    {
      question: 'Travaillez-vous avec des petites entreprises ?',
      answer: 'Absolument ! Nous accompagnons des entreprises de toutes tailles, des startups aux grandes corporations, en adaptant nos solutions à vos besoins et budget.'
    },
    {
      question: 'Vos services sont-ils disponibles en dehors de Genève ?',
      answer: 'Oui, nous intervenons dans toute la Suisse romande et, pour certains projets, dans toute la Suisse. Des frais de déplacement peuvent s\'appliquer.'
    },
    {
      question: 'Proposez-vous de la formation ?',
      answer: 'Oui, nous proposons des formations sur mesure pour vos équipes sur l\'utilisation des nouvelles technologies et les bonnes pratiques IT.'
    },
    {
      question: 'Comment se déroule un projet type ?',
      answer: 'Audit initial → Proposition technique et financière → Planification → Implémentation → Formation → Support continu. Chaque étape est validée avec vous.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Questions <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>fréquentes</span>
          </h2>
          <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
            Réponses aux questions les plus courantes sur nos services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:ring-offset-2 focus:ring-offset-[#050505] rounded-xl group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 id={`faq-question-${index}`} className="text-lg font-semibold text-white pr-4 group-hover:text-[#00FF9D] transition-colors duration-300">
                  {faq.question}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 text-[#00FF9D] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#E0E0E0] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

