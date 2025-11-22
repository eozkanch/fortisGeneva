'use client';

interface ProjectDetailTechnologiesProps {
  technologies: string[];
}

export default function ProjectDetailTechnologies({ technologies }: ProjectDetailTechnologiesProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Technologies <span className="text-[#00FF9D]" style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}>déployées</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-xl bg-[#050505]/80 backdrop-blur-xl border border-[#00FF9D]/20 text-[#00FF9D] font-medium text-sm hover:border-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all duration-300"
              style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

