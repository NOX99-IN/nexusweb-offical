import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data';
import {
  UserCheck,
  ShieldCheck,
  Zap,
  PhoneCall,
  MessageCircle,
  Mail,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      title: 'Radical Transparency',
      desc: 'No hidden hosting markups, no locked CMS traps, and no surprise invoices. Flat pricing (₹7k–₹20k) with 100% client code ownership.',
      icon: <ShieldCheck className="w-6 h-6 text-[#4edea3]" />
    },
    {
      title: 'Obsession with Mobile Speed',
      desc: 'Over 85% of Indian local searches happen on phones. We write clean code that loads in under 2 seconds without bloated WordPress plugins.',
      icon: <Zap className="w-6 h-6 text-[#93c5fd]" />
    },
    {
      title: 'Conversion Over Vanity',
      desc: 'A pretty site that generates zero calls is useless. Every headline, button, and layout is engineered to get customers into your WhatsApp.',
      icon: <PhoneCall className="w-6 h-6 text-[#c0c1ff]" />
    },
    {
      title: 'Direct Founder Accountability',
      desc: 'No account managers or outsourced junior teams. You work directly with Biswaranjan Pradhan with < 15 minute WhatsApp response times.',
      icon: <UserCheck className="w-6 h-6 text-white" />
    }
  ];

  const milestones = [
    { number: '45+', label: 'Local Websites Delivered', sub: 'Across 12 Indian states' },
    { number: '3.4x', label: 'Average WhatsApp Lead Growth', sub: 'Within 30 days of launch' },
    { number: '3–5', label: 'Days Average Turnaround', sub: 'From brief to live domain' },
    { number: '< 15m', label: 'WhatsApp Response Time', sub: 'Direct with Biswaranjan' }
  ];

  return (
    <div id="about" className="w-full bg-[#0b1326] text-[#dae2fd] pt-8 pb-20">
      {/* About Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#222a3d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950/80 via-indigo-900/60 to-purple-950/80 border border-blue-500/40 text-[#4edea3] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Story Behind NexusWeb</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            We Help Local Businesses Look Like Market Leaders And{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]">
              Win More Customers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mt-5 leading-relaxed">
            Founded by <strong className="text-white">Biswaranjan Pradhan</strong>, NexusWeb was built on a simple premise: local business owners deserve high-converting websites without monthly agency retainers or technical headaches.
          </p>
        </div>
      </section>

      {/* Founder Spotlight Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#131b2e] via-[#1a233d] to-[#12192c] border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Avatar & Quick Info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#0c4a6e]/70 via-[#0f172a]/95 to-[#155e75]/60 border border-cyan-500/30 shadow-lg">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#00a572] p-1 shadow-xl mb-4">
                <div className="w-full h-full rounded-full bg-[#171f33] flex items-center justify-center text-white text-3xl font-extrabold tracking-wider">
                  BP
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{BUSINESS_INFO.ownerName}</h3>
              <p className="text-xs font-semibold text-[#4edea3] mt-0.5">
                Founder &amp; Lead Web Architect
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <MapPin className="w-3.5 h-3.5 text-[#93c5fd]" />
                <span>India • Serving Clients Nationwide</span>
              </div>

              <div className="mt-6 w-full pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20am%20reaching%20out%20after%20reading%20your%20About%20page.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Founder ({BUSINESS_INFO.phone})</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%2C%20I%20am%20reaching%20out%20to%20the%20NexusWeb%20team%20about%20a%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Team Member ({BUSINESS_INFO.teamPhone})</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#dae2fd] border border-white/15 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#93c5fd]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Founder's Message */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd]">
                Founder's Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                “Most local businesses don't need a ₹1 Lakh website. They need a fast site that gets their phone ringing.”
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Over the past several years, I saw so many talented local doctors, restaurateurs, salon owners, and contractors get burned by traditional agencies. They paid huge monthly retainers, waited 4 months for a generic WordPress template, and when customers visited on phones, the site took 7 seconds to load.
              </p>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                At NexusWeb, we operate differently. I work directly with you. Every website is custom-coded for sub-2-second speed, linked to Google Maps, and built around a 1-tap WhatsApp trigger. You pay once, own the entire codebase, and start receiving leads in days.
              </p>

              <div className="mt-4 pt-4 border-t border-[#222a3d] flex flex-wrap items-center gap-6 text-xs text-[#dae2fd]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3]" /> Zero Junior Handoffs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3]" /> 100% Code Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3]" /> 50% Advance / 50% on Approval
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers & Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((m, idx) => {
            const milestoneGradients = [
              'bg-gradient-to-br from-[#064e3b]/80 via-[#0f172a]/95 to-[#065f46]/70 border-emerald-500/35',
              'bg-gradient-to-br from-[#1e1b4b]/80 via-[#0f172a]/95 to-[#172554]/70 border-blue-500/35',
              'bg-gradient-to-br from-[#581c87]/80 via-[#0f172a]/95 to-[#3b0764]/70 border-purple-500/35',
              'bg-gradient-to-br from-[#0c4a6e]/80 via-[#0f172a]/95 to-[#155e75]/70 border-cyan-500/35',
            ];
            const grad = milestoneGradients[idx % milestoneGradients.length];

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl ${grad} border text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4edea3] block mb-1">
                  {m.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block">{m.label}</span>
                <span className="text-[11px] text-[#94a3b8] block mt-0.5">{m.sub}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4 Guiding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-gradient-to-r from-blue-950/80 to-indigo-950/80 px-3.5 py-1 rounded-full border border-blue-500/30 mb-3">
            How We Operate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our 4 Non-Negotiable Standards
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-lg mt-2">
            The standards that separate our websites from bloated, outdated agency templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, i) => {
            const pGradients = [
              'bg-gradient-to-br from-[#064e3b]/85 via-[#0f172a]/95 to-[#065f46]/75 border-emerald-500/35 hover:border-emerald-400/70',
              'bg-gradient-to-br from-[#1e1b4b]/85 via-[#0f172a]/95 to-[#172554]/75 border-blue-500/35 hover:border-blue-400/70',
              'bg-gradient-to-br from-[#581c87]/85 via-[#0f172a]/95 to-[#3b0764]/75 border-purple-500/35 hover:border-purple-400/70',
              'bg-gradient-to-br from-[#0c4a6e]/85 via-[#0f172a]/95 to-[#155e75]/75 border-cyan-500/35 hover:border-cyan-400/70',
            ];
            const pGrad = pGradients[i % pGradients.length];

            return (
              <div
                key={i}
                className={`p-6 rounded-2xl ${pGrad} border shadow-lg hover:shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/15">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-900/95 to-teal-950/90 border border-emerald-500/40 shadow-xl text-center flex flex-col items-center">
          <HeartHandshake className="w-12 h-12 text-[#4edea3] mb-3" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            The 100% Client Satisfaction Guarantee
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-xl mb-6 leading-relaxed">
            You pay only 50% to initiate the project sprint. The remaining 50% is paid only after your website is completely reviewed, tested on mobile, and approved to go live.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20partner%20with%20you%20for%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Talk to Biswaranjan (+91 9124236518)</span>
            </a>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-white font-semibold text-sm border border-[#2d3449] transition-all"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-[#93c5fd]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
