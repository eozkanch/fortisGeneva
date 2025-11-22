'use client';

import Image from 'next/image';
import { Server, Network, Settings, Wrench, CheckCircle2, Rocket, Lock, TrendingUp } from 'lucide-react';

interface ServiceDetailProps {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  image: string;
  reverse?: boolean;
  process?: Array<{ number: string; title: string; description: string }>;
  benefits?: Array<{ icon: React.ReactNode; title: string; description: string }>;
  technologies?: string[];
  sla?: Array<{ metric: string; label: string }>;
}

const iconMap: Record<string, React.ReactNode> = {
  '🖥️': <Server className="w-8 h-8" />,
  '🔧': <Network className="w-8 h-8" />,
  '⚙️': <Settings className="w-8 h-8" />,
  '🛠️': <Wrench className="w-8 h-8" />,
};

const benefitIconMap: Record<string, React.ReactNode> = {
  '🚀': <Rocket className="w-6 h-6" />,
  '🔒': <Lock className="w-6 h-6" />,
  '📈': <TrendingUp className="w-6 h-6" />,
};

export default function ServiceDetail({
  id,
  title,
  icon,
  description,
  details,
  image,
  reverse = false,
  process,
  benefits,
  technologies,
  sla
}: ServiceDetailProps) {
  return (
    <section id={id} className={`py-24 ${reverse ? 'bg-[#0a0a0a]' : 'bg-[#050505]'} border-t border-[#00FF9D]/10`}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${reverse ? 'md:col-start-2' : ''}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.2)' }}
              >
                {iconMap[icon] || <Server className="w-8 h-8" />}
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white" 
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {title}
              </h2>
            </div>
            
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Nos prestations :</h4>
              <ul className="space-y-3">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF9D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E0E0E0]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Steps */}
            {process && (
              <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white">Notre approche :</h4>
                <div className="grid grid-cols-2 gap-4">
                  {process.map((step, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300"
                      style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#00FF9D] text-[#050505] flex items-center justify-center font-bold text-sm">
                          {step.number}
                        </div>
                        <h5 className="text-white font-semibold text-sm">{step.title}</h5>
                      </div>
                      <p className="text-[#E0E0E0] text-xs">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {benefits && (
              <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white">Avantages :</h4>
                <div className="grid grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 hover:border-[#00FF9D]/30 transition-all duration-300 text-center"
                      style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] mx-auto mb-3">
                        {benefitIconMap[benefit.icon as string] || <Rocket className="w-6 h-6" />}
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">{benefit.title}</h5>
                      <p className="text-[#E0E0E0] text-xs">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {technologies && (
              <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white">Technologies maîtrisées :</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/20 text-[#00FF9D] text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* SLA */}
            {sla && (
              <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white">Nos engagements SLA :</h4>
                <div className="grid grid-cols-3 gap-4">
                  {sla.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#00FF9D]/10 text-center"
                      style={{ boxShadow: '0 4px 16px rgba(0, 255, 157, 0.05)' }}
                    >
                      <div 
                        className="text-2xl font-bold text-[#00FF9D] mb-2"
                        style={{ textShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
                      >
                        {item.metric}
                      </div>
                      <div className="text-[#E0E0E0] text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          <div className={`relative h-96 rounded-2xl overflow-hidden border border-[#00FF9D]/10 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
            style={{ boxShadow: '0 8px 32px rgba(0, 255, 157, 0.1)' }}
          >
            <Image
              src={image}
              alt={`${title} - ${description.substring(0, 60)}...`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

