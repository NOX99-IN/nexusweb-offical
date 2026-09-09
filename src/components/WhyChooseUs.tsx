import React from 'react';
import { WHY_CHOOSE_US, PROCESS_STEPS, BUSINESS_INFO } from '../data';
import { Zap, CheckCircle2, PhoneCall, UserCheck, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { ThreeDTilt } from './ThreeDTilt';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#93c5fd]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#4edea3]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#c0c1ff]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-white" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#4edea3]" />;
    }
  };

  return (
    <section id="why-us" className="w-full bg-[#131b2e] py-16 lg:py-24 border-y border-[#222a3d] relative overflow-hidden">
      <div id="about" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 3D Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-[#171f33] px-3.5 py-1 rounded-full border border-[#2d3449] mb-3 shadow-sm">
            Speed &amp; Dependability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Local Businesses Work With Us
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl mt-3 leading-relaxed">
            We strip out bloated corporate agency retainers and deliver business websites designed strictly to generate real inquiries.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 1200 }}>
          {WHY_CHOOSE_US.map((pillar, index) => {
            const pillarGradients = [
              'bg-gradient-to-br from-[#1e1b4b]/85 via-[#0f172a]/95 to-[#172554]/75 border-blue-500/35 hover:border-blue-400/70',
              'bg-gradient-to-br from-[#064e3b]/85 via-[#0f172a]/95 to-[#065f46]/75 border-emerald-500/35 hover:border-emerald-400/70',
              'bg-gradient-to-br from-[#581c87]/85 via-[#0f172a]/95 to-[#3b0764]/75 border-purple-500/35 hover:border-purple-400/70',
              'bg-gradient-to-br from-[#701a75]/85 via-[#0f172a]/95 to-[#831843]/75 border-pink-500/35 hover:border-pink-400/70',
            ];
            const gradient = pillarGradients[index % pillarGradients.length];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ThreeDTilt maxTilt={12} scale={1.03} className="h-full rounded-2xl">
                  <div
                    className={`p-6 rounded-2xl ${gradient} border shadow-lg hover:shadow-[0_20px_35px_-10px_rgba(0,112,243,0.3)] flex flex-col justify-between h-full transition-all duration-300`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div style={{ transform: 'translateZ(20px)' }}>
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/15 shadow-inner">
                        {getIcon(pillar.iconName)}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div
                      className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <span className="text-xs font-semibold text-[#4edea3] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {pillar.subBadge}
                      </span>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Process Sub-Section */}
        <div id="process" className="mt-20 pt-16 border-t border-[#222a3d]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3] bg-gradient-to-r from-emerald-950/80 to-teal-950/80 px-3.5 py-1 rounded-full border border-emerald-500/40 mb-2 shadow-sm">
              Simple 4-Step Delivery
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              From First Message to Live Website in Days
            </h3>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-lg mt-2">
              No meetings that could have been an email. A swift, transparent process built around your schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ perspective: 1200 }}>
            {PROCESS_STEPS.map((step, idx) => {
              const stepGradients = [
                'bg-gradient-to-br from-[#1e1b4b]/75 via-[#0f172a]/90 to-[#1e3a8a]/60 border-blue-500/30 hover:border-blue-400/60',
                'bg-gradient-to-br from-[#064e3b]/75 via-[#0f172a]/90 to-[#047857]/60 border-emerald-500/30 hover:border-emerald-400/60',
                'bg-gradient-to-br from-[#581c87]/75 via-[#0f172a]/90 to-[#6b21a8]/60 border-purple-500/30 hover:border-purple-400/60',
                'bg-gradient-to-br from-[#0c4a6e]/75 via-[#0f172a]/90 to-[#0284c7]/60 border-cyan-500/30 hover:border-cyan-400/60',
              ];
              const stepGrad = stepGradients[idx % stepGradients.length];

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <ThreeDTilt maxTilt={10} scale={1.03} className="h-full rounded-xl">
                    <div
                      className={`relative p-6 rounded-xl ${stepGrad} border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div style={{ transform: 'translateZ(20px)' }}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-black text-[#93c5fd] font-mono">
                            {step.stepNumber}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-white/10 backdrop-blur-sm text-[#4edea3] border border-white/10">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {idx < PROCESS_STEPS.length - 1 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                          <div className="w-6 h-6 rounded-full bg-[#1e273f] border border-blue-400/40 flex items-center justify-center text-[#93c5fd] shadow-md">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  </ThreeDTilt>
                </motion.div>
              );
            })}
          </div>

          {/* Inline CTA with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-900/70 to-emerald-950/90 border border-indigo-500/40 shadow-[0_15px_35px_rgba(30,27,75,0.4)] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <p className="font-bold text-white text-base sm:text-lg">
                Ready to take your business to the next level?
              </p>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                Get a custom quote and design consultation directly from Biswaranjan Pradhan.
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20start%20the%20process%20for%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm transition-all shadow-[0_8px_20px_-4px_rgba(0,165,114,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
