import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faqs" className="w-full bg-[#131b2e] py-16 lg:py-24 border-y border-[#222a3d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-[#171f33] px-3.5 py-1 rounded-full border border-[#2d3449] mb-3 inline-block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#94a3b8] max-w-lg mt-3 leading-relaxed">
            Clear, straightforward answers about how we build and launch your local business site.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === faq.id;
            const openGradients = [
              'bg-gradient-to-r from-[#1e1b4b]/90 via-[#0f172a]/95 to-[#172554]/80 border-blue-500/50',
              'bg-gradient-to-r from-[#064e3b]/90 via-[#0f172a]/95 to-[#065f46]/80 border-emerald-500/50',
              'bg-gradient-to-r from-[#581c87]/90 via-[#0f172a]/95 to-[#3b0764]/80 border-purple-500/50',
              'bg-gradient-to-r from-[#0c4a6e]/90 via-[#0f172a]/95 to-[#155e75]/80 border-cyan-500/50',
            ];
            const openGrad = openGradients[idx % openGradients.length];

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-md ${
                  isOpen
                    ? `${openGrad} shadow-lg`
                    : 'bg-gradient-to-r from-slate-900/80 via-[#171f33]/85 to-slate-900/80 border-[#222a3d] hover:border-blue-500/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#2563eb] text-white rotate-180 shadow-sm'
                        : 'bg-white/10 text-[#94a3b8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#c3c6d7] leading-relaxed border-t border-white/10 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/85 via-slate-900/95 to-teal-950/85 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question about your niche?</h4>
              <p className="text-xs text-[#94a3b8]">Ask Biswaranjan Pradhan directly on WhatsApp and get an answer within 15 minutes.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20have%20a%20question%20about%20getting%20a%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
