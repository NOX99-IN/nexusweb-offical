import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { Rocket, MapPin, Smartphone, MessageSquare, LayoutGrid, ShieldCheck, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { ThreeDTilt } from './ThreeDTilt';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#93c5fd]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#4edea3]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#c0c1ff]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#4edea3]" />;
      case 'Grid':
        return <LayoutGrid className="w-6 h-6 text-[#93c5fd]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#93c5fd]" />;
      default:
        return <Rocket className="w-6 h-6 text-[#93c5fd]" />;
    }
  };

  const getServiceGradient = (id: string, index: number) => {
    const gradients = [
      {
        bg: 'bg-gradient-to-br from-[#1e1b4b]/80 via-[#0f172a]/95 to-[#172554]/75',
        border: 'border-blue-500/35 hover:border-blue-400/70',
        iconBg: 'bg-gradient-to-br from-blue-500/30 to-blue-600/10 text-blue-300 border border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(37,99,235,0.18)]'
      },
      {
        bg: 'bg-gradient-to-br from-[#064e3b]/80 via-[#0f172a]/95 to-[#065f46]/75',
        border: 'border-emerald-500/35 hover:border-emerald-400/70',
        iconBg: 'bg-gradient-to-br from-emerald-500/30 to-emerald-600/10 text-emerald-300 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(0,165,114,0.18)]'
      },
      {
        bg: 'bg-gradient-to-br from-[#581c87]/80 via-[#0f172a]/95 to-[#3b0764]/75',
        border: 'border-purple-500/35 hover:border-purple-400/70',
        iconBg: 'bg-gradient-to-br from-purple-500/30 to-purple-600/10 text-purple-300 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(168,85,247,0.18)]'
      },
      {
        bg: 'bg-gradient-to-br from-[#065f46]/80 via-[#0f172a]/95 to-[#0f766e]/75',
        border: 'border-teal-500/35 hover:border-teal-400/70',
        iconBg: 'bg-gradient-to-br from-teal-500/30 to-teal-600/10 text-teal-300 border border-teal-400/40 shadow-[0_0_20px_rgba(20,184,166,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(20,184,166,0.18)]'
      },
      {
        bg: 'bg-gradient-to-br from-[#701a75]/80 via-[#0f172a]/95 to-[#831843]/75',
        border: 'border-pink-500/35 hover:border-pink-400/70',
        iconBg: 'bg-gradient-to-br from-pink-500/30 to-pink-600/10 text-pink-300 border border-pink-400/40 shadow-[0_0_20px_rgba(236,72,153,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(236,72,153,0.18)]'
      },
      {
        bg: 'bg-gradient-to-br from-[#0c4a6e]/80 via-[#0f172a]/95 to-[#1e3a8a]/75',
        border: 'border-cyan-500/35 hover:border-cyan-400/70',
        iconBg: 'bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 text-cyan-300 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.35)]',
        glow: 'shadow-[0_8px_30px_rgba(6,182,212,0.18)]'
      }
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="services" className="w-full bg-gradient-to-b from-[#0b1326] via-[#0f172a] to-[#0b1326] py-16 lg:py-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-gradient-to-r from-blue-950/80 to-indigo-950/80 px-3.5 py-1 rounded-full border border-blue-500/30 mb-3 inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" /> What We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What We Build For Your Business
            </h2>
          </div>
          <p className="text-base text-[#94a3b8] max-w-md leading-relaxed">
            Every website comes complete with commercial tooling configured to turn casual local searches into active paying customers.
          </p>
        </motion.div>

        {/* 6 Services Grid with 3D Tilt & 3D Service Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {SERVICES.map((service, index) => {
            const style = getServiceGradient(service.id, index);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <ThreeDTilt maxTilt={10} scale={1.03} className="h-full rounded-2xl">
                  <div
                    className={`p-7 rounded-2xl ${style.bg} ${style.border} ${style.glow} border shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between h-full`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div>
                      {/* 3D Elevated Service Icon Pedestal */}
                      <div
                        className="relative mb-6"
                        style={{ transform: 'translateZ(30px)' }}
                      >
                        <div
                          className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 relative`}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <div style={{ transform: 'translateZ(10px)' }}>
                            {getIcon(service.iconName)}
                          </div>
                          {/* 3D Pedestal Base Rim */}
                          <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none -translate-z-10" />
                        </div>
                      </div>

                      <h3
                        className="text-xl font-bold text-white mb-2.5 group-hover:text-[#93c5fd] transition-colors"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm text-[#94a3b8] leading-relaxed"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div
                      className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#4edea3] font-medium">
                        <Check className="w-3.5 h-3.5" /> Included in all plans
                      </span>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service.title)}%20for%20my%20business.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#93c5fd] hover:text-white flex items-center gap-0.5 group-hover:translate-x-1 transition-transform"
                      >
                        Inquire <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
