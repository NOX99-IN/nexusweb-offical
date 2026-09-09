import React, { useState } from 'react';
import { PRICING_PACKAGES, BUSINESS_INFO } from '../data';
import { MessageCircle, CheckCircle2, Zap, HelpCircle, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ThreeDTilt } from './ThreeDTilt';

export const Pricing: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcPages, setCalcPages] = useState<'few' | 'multiple'>('few');
  const [needsCatalog, setNeedsCatalog] = useState(false);
  const [needsSpeedOptimization, setNeedsSpeedOptimization] = useState(true);

  // Recommended plan based on calculator
  const recommendedPlan =
    calcPages === 'multiple' || needsCatalog
      ? 'Business Website (₹12,000–₹20,000)'
      : 'Basic Website (₹7,000–₹10,000)';

  return (
    <section id="pricing-section" className="w-full bg-[#131b2e] py-16 lg:py-24 border-t border-[#222a3d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 3D Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3] bg-[#00a572]/10 px-3.5 py-1 rounded-full border border-[#00a572]/30 mb-3 inline-block shadow-sm">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple, Transparent Pricing with No Hidden Fees
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl mt-3 leading-relaxed">
            Pay once, own 100% of your website. Fast turnaround guaranteed with zero monthly agency lock-in contracts.
          </p>
        </motion.div>

        {/* 2-Tier Pricing Comparison Cards with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch" style={{ perspective: 1200 }}>
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="h-full"
              >
                <ThreeDTilt
                  maxTilt={8}
                  scale={1.02}
                  className="h-full rounded-3xl"
                >
                  <div
                    id={`pricing-card-${pkg.id}`}
                    className={`relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl h-full transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-br from-[#064e3b]/90 via-[#0f172a]/95 to-[#065f46]/80 border-2 border-[#00a572] shadow-[0_20px_50px_rgba(0,165,114,0.3)]'
                        : 'bg-gradient-to-br from-[#1e1b4b]/90 via-[#0f172a]/95 to-[#172554]/80 border border-blue-500/40 shadow-[0_16px_40px_rgba(37,99,235,0.2)]'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Popular Pill */}
                    {isPopular && (
                      <div
                        style={{ transform: 'translateZ(30px)' }}
                        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00a572] to-[#10b981] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap border border-white/20"
                      >
                        <span>🔥 Most Popular for Local Businesses</span>
                      </div>
                    )}

                    <div style={{ transform: 'translateZ(20px)' }}>
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-md text-xs font-semibold ${
                            isPopular
                              ? 'bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40'
                              : 'bg-[#2563eb]/25 text-[#93c5fd] border border-[#2563eb]/40'
                          }`}
                        >
                          {pkg.badge}
                        </span>
                        <span className="text-xs font-medium text-[#4edea3] flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          {pkg.turnaround}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-[#94a3b8] mt-2 leading-relaxed">
                        {pkg.description}
                      </p>

                      {/* Price Box */}
                      <div className={`my-6 p-4 rounded-xl border ${
                        isPopular
                          ? 'bg-gradient-to-r from-emerald-950/70 to-teal-950/70 border-emerald-500/30'
                          : 'bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border-blue-500/30'
                      }`}>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span
                            className={`text-3xl sm:text-4xl font-black ${
                              isPopular ? 'text-[#4edea3]' : 'text-[#93c5fd]'
                            }`}
                          >
                            {pkg.priceRange}
                          </span>
                          <span className="text-sm font-medium text-[#dae2fd]">
                            {pkg.period}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-[#4edea3] mt-1.5 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          {pkg.highlightText}
                        </p>
                      </div>

                      {/* Features List */}
                      <ul className="flex flex-col gap-3 my-6 text-sm text-[#dae2fd]">
                        {pkg.features.map((feature, idx2) => (
                          <li key={idx2} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPopular ? 'text-[#4edea3]' : 'text-[#93c5fd]'
                              }`}
                            />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card CTA Button */}
                    <div className="pt-4 border-t border-[#222a3d]" style={{ transform: 'translateZ(25px)' }}>
                      <a
                        id={`pricing-cta-${pkg.id}`}
                        href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${encodeURIComponent(
                          pkg.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                          isPopular
                            ? 'bg-[#00a572] hover:bg-[#10b981] text-white shadow-[0_8px_24px_rgba(0,165,114,0.4)]'
                            : 'bg-[#222a3d] hover:bg-[#2d3449] text-white border border-[#434655]'
                        }`}
                      >
                        <MessageCircle className="w-5 h-5 fill-white/20" />
                        <span>{pkg.ctaLabel}</span>
                      </a>

                      <p className="text-[11px] text-center text-[#94a3b8] mt-2">
                        Click to discuss on WhatsApp with Biswaranjan • No obligations
                      </p>
                    </div>
                  </div>
                </ThreeDTilt>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Interactive Package Helper / Calculator */}
        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#1e1b4b]/80 via-[#0f172a]/95 to-[#1e3a8a]/70 border border-blue-500/40 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-[#93c5fd] flex items-center justify-center border border-blue-500/40">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Not sure which package fits your business?
                </h4>
                <p className="text-xs text-[#94a3b8]">
                  Answer 2 quick questions to find your ideal plan.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#93c5fd] transition-colors border border-white/15 backdrop-blur-sm"
            >
              {showCalculator ? 'Hide Quiz' : 'Try Quick Selector'}
            </button>
          </div>

          {showCalculator && (
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    How many pages do you anticipate?
                  </label>
                  <select
                    value={calcPages}
                    onChange={(e) => setCalcPages(e.target.value as 'few' | 'multiple')}
                    className="w-full bg-[#0b1326] text-white text-xs p-2.5 rounded-lg border border-[#2d3449] focus:outline-none focus:border-[#3b82f6]"
                  >
                    <option value="few">1 to 3 Pages (Home, Services, Contact)</option>
                    <option value="multiple">4 to 7+ Pages (Full Service Menu/Catalog)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Do you need a full product menu or treatment catalog?
                  </label>
                  <select
                    value={needsCatalog ? 'yes' : 'no'}
                    onChange={(e) => setNeedsCatalog(e.target.value === 'yes')}
                    className="w-full bg-[#0b1326] text-white text-xs p-2.5 rounded-lg border border-[#2d3449] focus:outline-none focus:border-[#3b82f6]"
                  >
                    <option value="no">No, just a bullet list of services</option>
                    <option value="yes">Yes, dynamic price list / menu grid</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-teal-900/80 to-blue-950/90 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 shadow-lg">
                <div>
                  <span className="text-xs text-[#94a3b8] block">Our Recommendation:</span>
                  <span className="text-base font-bold text-[#4edea3]">{recommendedPlan}</span>
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20used%20your%20website%20calculator%20and%20was%20recommended%20the%20${encodeURIComponent(
                    recommendedPlan
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00a572] hover:bg-[#10b981] text-white text-xs font-bold transition-all shrink-0 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Discuss Recommendation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* FAQ & Trust Note below Pricing */}
        <div className="mt-8 text-center text-xs text-[#94a3b8] flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3]" />
            Pay 50% advance, 50% only after you approve the completed website
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3]" />
            No hidden hosting or domain markups
          </span>
        </div>
      </div>
    </section>
  );
};
