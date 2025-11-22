import PageHero from '@/components/PageHero';
import ProjectsOverview from '@/components/ProjectsOverview';
import ProjectCard from '@/components/ProjectCard';
import ProjectCategories from '@/components/ProjectCategories';
import ProjectTestimonials from '@/components/ProjectTestimonials';
import ProjectProcess from '@/components/ProjectProcess';
import CTA from '@/components/CTA';
import projectsData from '@/data/projects.json';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Projets',
  description: 'Découvrez nos réalisations et projets de référence en infrastructure IT, data center et migration cloud. Études de cas EPFL, SwissTrans, GenèveTech.',
  openGraph: {
    title: 'Nos Projets - FORTIS Geneva',
    description: 'Découvrez nos réalisations et projets de référence',
    images: ['/images/projects-bg.webp'],
  },
};

export default function ProjectsPage() {
  const projects = projectsData.projects.list;

  return (
    <>
      <PageHero
        title="Nos Réalisations"
        subtitle="Projets de référence et études de cas"
        backgroundImage="/images/projects-bg.webp"
      />
      
      <ProjectsOverview />

      {/* Featured Projects */}
      <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Études de <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>cas</span>
            </h2>
            <p className="text-[#E0E0E0] text-lg max-w-2xl mx-auto">
              Découvrez nos projets les plus marquants et les défis que nous avons relevés pour nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                client={project.client}
                description={project.description}
                category={project.category}
                year={project.year}
                image={project.id === 'epfl-network' ? '/images/epfl-card.webp' : project.id === 'swisstrans-datacenter' ? '/images/swisstrans-card.webp' : '/images/genevatech-card.webp'}
                technologies={project.details.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectCategories />
      <ProjectTestimonials />
      <ProjectProcess />
      
      <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Votre projet sera le prochain{' '}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00e68a]"
                style={{ textShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
              >
                succès
              </span> ?
            </h2>
            <p className="text-[#E0E0E0] text-lg md:text-xl mb-10 leading-relaxed">
              Discutons de vos défis IT et découvrez comment notre expertise peut transformer votre infrastructure.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 inline-flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)' }}
              >
                Démarrer un projet
              </a>
              <a
                href="/services"
                className="px-8 py-4 rounded-xl bg-[#00FF9D]/10 border-2 border-[#00FF9D]/30 text-[#00FF9D] font-semibold hover:bg-[#00FF9D]/20 hover:border-[#00FF9D] transition-all duration-300 inline-flex items-center justify-center"
              >
                Voir nos services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

