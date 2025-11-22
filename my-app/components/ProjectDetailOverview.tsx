'use client';

interface ProjectDetailOverviewProps {
  description: string;
  challenge: string;
  stats: Array<{ value: string; label: string }>;
}

export default function ProjectDetailOverview({ description, challenge, stats }: ProjectDetailOverviewProps) {
  return (
    <section className="py-24 bg-[#050505] border-t border-[#00FF9D]/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white" 
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Vue d'ensemble du projet
            </h2>
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              {description}
            </p>
            <p className="text-[#E0E0E0] leading-relaxed">
              {challenge}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 group"
                style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 157, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 255, 157, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="text-3xl md:text-4xl font-bold text-[#00FF9D] mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#E0E0E0] text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

