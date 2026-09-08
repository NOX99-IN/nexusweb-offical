import React, { useState } from 'react';
import { PORTFOLIO_CASES, BUSINESS_INFO } from '../data';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowRight, CheckCircle2, Star, MessageCircle } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="w-full bg-[#0b1326] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3] bg-[#00a572]/10 px-3.5 py-1 rounded-full border border-[#00a572]/30 mb-3 inline-block">
              Proof of Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Recent Client Success Stories
            </h2>
          </div>
          <p className="text-base text-[#94a3b8] max-w-md leading-relaxed">
            Explore how local brands transformed their presence from invisible to generating daily inbound telephone and WhatsApp leads.
          </p>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CASES.map((item, index) => {
            const caseGradients = [
              'bg-gradient-to-br from-[#1e1b4b]/90 via-[#0f172a]/95 to-[#172554]/80 border-blue-500/40 hover:border-blue-400/70 shadow-[0_16px_40px_rgba(37,99,235,0.12)]',
              'bg-gradient-to-br from-[#701a75]/90 via-[#0f172a]/95 to-[#831843]/80 border-pink-500/40 hover:border-pink-400/70 shadow-[0_16px_40px_rgba(236,72,153,0.12)]',
              'bg-gradient-to-br from-[#0c4a6e]/90 via-[#0f172a]/95 to-[#155e75]/80 border-cyan-500/40 hover:border-cyan-400/70 shadow-[0_16px_40px_rgba(6,182,212,0.12)]',
              'bg-gradient-to-br from-[#064e3b]/90 via-[#0f172a]/95 to-[#065f46]/80 border-emerald-500/40 hover:border-emerald-400/70 shadow-[0_16px_40px_rgba(0,165,114,0.12)]',
            ];
            const gradient = caseGradients[index % caseGradients.length];

            return (
              <div
                key={item.id}
                className={`rounded-3xl ${gradient} border overflow-hidden shadow-xl flex flex-col group transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Card Image Banner */}
                <div className="relative h-64 overflow-hidden bg-[#131b2e]">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-70" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-[#93c5fd] font-semibold text-xs backdrop-blur border border-blue-500/30">
                      {item.category}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-gradient-to-r from-[#00a572] to-[#10b981] text-white font-bold text-xs backdrop-blur shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#93c5fd] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] mt-2.5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metrics 3-Column Grid */}
                    <div className="grid grid-cols-3 gap-3 my-6 p-3.5 rounded-xl bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] border border-white/10 backdrop-blur-sm shadow-inner">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="text-left">
                          <span className="text-xl sm:text-2xl font-extrabold text-[#4edea3] block">
                            {metric.value}
                          </span>
                          <span className="text-[11px] font-semibold text-white block mt-0.5">
                            {metric.label}
                          </span>
                          <span className="text-[10px] text-[#94a3b8] truncate block">
                            {metric.sublabel}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCase(item)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#93c5fd] hover:text-white transition-colors group-hover:underline"
                    >
                      <span>View Live Case Study Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20can%20you%20show%20me%20the%20${encodeURIComponent(
                        item.title
                      )}%20demo%20or%20something%20similar%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-[#00a572] text-[#dae2fd] hover:text-white transition-colors border border-white/10 shadow-sm"
                      title="Inquire about this on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Quote */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/85 via-slate-900/95 to-emerald-950/85 border border-indigo-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="w-10 h-10 rounded-full bg-blue-600/30 border-2 border-[#131b2e] flex items-center justify-center font-bold text-xs text-blue-300">
                DR
              </span>
              <span className="w-10 h-10 rounded-full bg-emerald-600/30 border-2 border-[#131b2e] flex items-center justify-center font-bold text-xs text-emerald-300">
                RK
              </span>
              <span className="w-10 h-10 rounded-full bg-purple-600/30 border-2 border-[#131b2e] flex items-center justify-center font-bold text-xs text-purple-300">
                VR
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                “Inquiries increased within 48 hours of launch.”
              </p>
              <p className="text-xs text-[#94a3b8]">
                Consistently rated 5/5 for turnaround speed and WhatsApp conversion optimization.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20see%20more%20portfolio%20examples%20for%20my%20niche.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-white text-xs font-bold border border-[#2d3449] transition-colors shrink-0"
          >
            <span>Request More Niche Demos</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#93c5fd]" />
          </a>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
    </section>
  );
};
