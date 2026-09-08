import React from 'react';
import { BUSINESS_INFO, HERO_SHOWCASE } from '../data';
import { MessageCircle, ArrowDown, Star, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onSelectCaseStudy?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0b1326] pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00a572]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Urgency / Feature Badge */}
        <div
          id="hero-urgency-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/80 via-teal-900/60 to-blue-950/80 border border-emerald-500/40 text-[#4edea3] text-xs sm:text-sm font-semibold mb-6 shadow-sm hover:border-[#4edea3]/60 transition-all"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
          <span>⚡ Websites Delivered in 3-5 Days • 100% Mobile Ready</span>
        </div>

        {/* Main Display Headline */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.15] font-extrabold text-[#dae2fd] max-w-4xl tracking-tight mb-5"
        >
          Get More Local Customers With A{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]">
            Fast, High-Converting
          </span>{' '}
          Website
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94a3b8] max-w-2xl mb-8 leading-relaxed">
          We design custom, mobile-friendly websites that rank on Google Maps and turn local visitors into paying customers. Simple pricing, zero technical headaches.
        </p>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10">
          <a
            id="hero-primary-whatsapp-btn"
            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20get%20more%20customers%20with%20a%20website%20for%20my%20local%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-base sm:text-lg transition-all shadow-[0_12px_32px_-6px_rgba(0,165,114,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            <span>Chat on WhatsApp (+91 9124236518)</span>
          </a>

          <a
            id="hero-secondary-pricing-btn"
            href="#pricing-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] border border-[#2d3449] font-semibold text-base transition-all hover:-translate-y-0.5"
          >
            <span>View Packages &amp; Pricing</span>
            <ArrowDown className="w-4 h-4 text-[#93c5fd]" />
          </a>
        </div>

        {/* Social Proof Bar */}
        <div
          id="hero-social-proof-bar"
          className="flex flex-col sm:flex-row items-center gap-3 py-2.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 border border-indigo-500/30 shadow-md mb-12"
        >
          <div className="flex items-center gap-1 text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
            ))}
            <span className="font-bold text-white text-sm ml-1.5">4.9/5</span>
          </div>
          <span className="hidden sm:inline text-[#434655]">•</span>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            Trusted by <strong className="text-white font-semibold">45+ clinics, retail shops, restaurants &amp; contractors</strong> across India
          </p>
        </div>

        {/* Hero Visual Mockup Grid */}
        <div className="w-full relative mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {HERO_SHOWCASE.map((item, index) => {
              const cardGradients = [
                'bg-gradient-to-br from-[#1e1b4b]/80 via-[#0f172a]/95 to-[#172554]/70 border-blue-500/30 hover:border-blue-400/60',
                'bg-gradient-to-br from-[#064e3b]/80 via-[#0f172a]/95 to-[#065f46]/70 border-emerald-500/30 hover:border-emerald-400/60',
                'bg-gradient-to-br from-[#581c87]/80 via-[#0f172a]/95 to-[#3b0764]/70 border-purple-500/30 hover:border-purple-400/60',
                'bg-gradient-to-br from-[#0c4a6e]/80 via-[#0f172a]/95 to-[#1e3a8a]/70 border-cyan-500/30 hover:border-cyan-400/60',
              ];
              const gradientClass = cardGradients[index % cardGradients.length];

              return (
                <div
                  key={index}
                  className={`rounded-xl ${gradientClass} border overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between`}
                >
                  <div className="relative h-44 overflow-hidden bg-[#131b2e]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-70" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-[#93c5fd] font-semibold text-xs backdrop-blur border border-blue-500/30 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-base truncate group-hover:text-[#93c5fd] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#94a3b8] mt-1.5 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#4edea3] text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.metric}</span>
                      </div>
                      <span className="text-[11px] text-[#93c5fd] font-medium group-hover:underline">
                        Live Preview →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee pill below grid */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94a3b8]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4edea3]" /> 100% Satisfaction Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#93c5fd]" /> Zero Recurring Agency Retainers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4edea3]" /> Full Code &amp; Domain Ownership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
