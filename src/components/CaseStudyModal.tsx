import React from 'react';
import { CaseStudy } from '../types';
import { BUSINESS_INFO } from '../data';
import { X, CheckCircle2, MessageCircle, ArrowRight, ExternalLink, MapPin, User, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#171f33] border border-[#2d3449] rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0b1326]/80 text-[#94a3b8] hover:text-white hover:bg-[#0b1326] transition-colors border border-[#2d3449]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0b1326]">
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-md bg-[#00a572] text-white font-bold text-xs uppercase tracking-wider">
                {caseStudy.category} • {caseStudy.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {caseStudy.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#dae2fd] mt-1">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#93c5fd]" /> {caseStudy.clientName}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4edea3]" /> {caseStudy.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Highlight */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#131b2e] border border-[#222a3d]">
            {caseStudy.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4edea3] block">
                  {m.value}
                </span>
                <span className="text-xs font-bold text-white block mt-0.5">{m.label}</span>
                <span className="text-[10px] text-[#94a3b8] hidden sm:block">{m.sublabel}</span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-[#0b1326]/60 border border-[#222a3d]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb4ab] mb-2">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0b1326]/60 border border-[#222a3d]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4edea3] mb-2">
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Features Implemented */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#93c5fd]" /> Key Features Implemented:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.featuresIncluded.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#dae2fd]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Result Quote */}
          <div className="p-4 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/30 text-xs sm:text-sm text-[#93c5fd]">
            <strong>Business Impact:</strong> {caseStudy.resultsSummary}
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-[#222a3d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#94a3b8]">Want similar results for your business?</p>
              <p className="text-sm font-bold text-white">We can adapt this framework in 3-5 days.</p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20saw%20the%20${encodeURIComponent(
                caseStudy.title
              )}%20case%20study%20and%20want%20a%20similar%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Website Like This</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
