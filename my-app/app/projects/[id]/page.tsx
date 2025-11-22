import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ProjectDetailHero from '@/components/ProjectDetailHero';
import ProjectDetailOverview from '@/components/ProjectDetailOverview';
import ProjectDetailChallenge from '@/components/ProjectDetailChallenge';
import ProjectDetailSolution from '@/components/ProjectDetailSolution';
import ProjectDetailTechnologies from '@/components/ProjectDetailTechnologies';
import ProjectDetailResults from '@/components/ProjectDetailResults';
import ProjectDetailTestimonial from '@/components/ProjectDetailTestimonial';
import projectsData from '@/data/projects.json';

export async function generateStaticParams() {
  return projectsData.projects.list.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.projects.list.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Projet non trouvé',
    };
  }

  return {
    title: project.title,
    description: `${project.description} - ${project.client} - ${project.year}`,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [`/images/${id}-hero.webp`],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.projects.list.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get appropriate background images based on project ID
  const backgroundImages: Record<string, string> = {
    'epfl-network': '/images/epfl-hero.webp',
    'swisstrans-datacenter': '/images/swisstrans-hero.webp',
    'genevatech-cloud': '/images/genevatech-hero.webp'
  };

  const challengeImages: Record<string, string> = {
    'epfl-network': '/images/epfl-challenge.webp',
    'swisstrans-datacenter': '/images/swisstrans-challenge.webp',
    'genevatech-cloud': '/images/genevatech-challenge.webp'
  };

  const solutionImages: Record<string, string> = {
    'epfl-network': '/images/epfl-solution.webp',
    'swisstrans-datacenter': '/images/swisstrans-solution.webp',
    'genevatech-cloud': '/images/genevatech-solution.webp'
  };

  return (
    <>
      <ProjectDetailHero
        title={project.title}
        category={project.category}
        year={project.year}
        client={project.client}
        backgroundImage={backgroundImages[project.id] || backgroundImages['epfl-network']}
      />

      <ProjectDetailOverview
        description={project.description}
        challenge={project.details.challenge}
        stats={project.details.stats}
      />

      <ProjectDetailChallenge
        challenge={project.details.challenge}
        image={challengeImages[project.id] || challengeImages['epfl-network']}
      />

      <ProjectDetailSolution
        solution={project.details.solution}
        image={solutionImages[project.id] || solutionImages['epfl-network']}
      />

      <ProjectDetailTechnologies
        technologies={project.details.technologies}
      />

      <ProjectDetailResults
        results={project.details.results}
      />

      <ProjectDetailTestimonial
        quote={project.details.testimonial.quote}
        author={project.details.testimonial.author}
        role={project.details.testimonial.role}
      />

      {/* CTA Section */}
      <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Un projet similaire en{' '}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00e68a]"
                style={{ textShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
              >
                vue
              </span> ?
            </h2>
            <p className="text-[#E0E0E0] text-lg md:text-xl mb-10 leading-relaxed">
              Découvrez comment nous pouvons sécuriser et optimiser votre infrastructure avec des solutions sur mesure.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-[#00FF9D] text-[#00FF9D] font-semibold hover:bg-[#00FF9D] hover:text-[#050505] transition-all duration-300 inline-flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)' }}
              >
                Discuter de votre projet
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 rounded-xl bg-[#00FF9D]/10 border-2 border-[#00FF9D]/30 text-[#00FF9D] font-semibold hover:bg-[#00FF9D]/20 hover:border-[#00FF9D] transition-all duration-300 inline-flex items-center justify-center"
              >
                Voir d'autres projets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

