import React, { useState } from 'react';
import { BUSINESS_INFO, PRICING_PACKAGES } from '../data';
import { InquiryFormData } from '../types';
import { Skeleton } from './SkeletonLoader';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessNiche: '',
    phone: '',
    selectedPackage: 'Business Website (₹12,000 – ₹20,000)',
    city: '',
    primaryGoal: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hi Biswaranjan, I am requesting a website discovery consultation:%0A%0A` +
      `• *Name*: ${encodeURIComponent(formData.name)}%0A` +
      `• *Business Niche*: ${encodeURIComponent(formData.businessNiche)}%0A` +
      `• *WhatsApp / Phone*: ${encodeURIComponent(formData.phone)}%0A` +
      `• *Interested Package*: ${encodeURIComponent(formData.selectedPackage)}%0A` +
      `• *City / Current Site*: ${encodeURIComponent(formData.city || 'Not specified')}%0A` +
      `• *Primary Goal*: ${encodeURIComponent(formData.primaryGoal || 'Get more customers & calls')}`;

    // Store in localStorage for lead reference
    try {
      const existing = JSON.parse(localStorage.getItem('kalinga_pixel_inquiries') || '[]');
      existing.unshift({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('kalinga_pixel_inquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${message}`, '_blank');
      } catch {
        // Handled gracefully by the visible interactive confirmation screen
      }
    }, 400);
  };

  return (
    <section id="contact" className="w-full bg-[#0b1326] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Founder Access Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-[#171f33] px-3.5 py-1 rounded-full border border-[#2d3449] mb-3 inline-block">
                Direct Founder Access
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Ready to Win More Local Customers?
              </h2>
              <p className="text-base text-[#94a3b8] mt-3 leading-relaxed">
                Reach out directly. No gatekeepers or corporate ticket queues. Speak with{' '}
                <strong className="text-white font-semibold">{BUSINESS_INFO.ownerName}</strong> and receive a website strategy tailored to your exact city and niche.
              </p>
            </div>

            {/* Contact Method Cards */}
            <div className="flex flex-col gap-3.5">
              {/* WhatsApp Card - Founder */}
              <a
                id="contact-whatsapp-direct"
                href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-[#064e3b]/85 via-[#0f172a]/95 to-[#065f46]/75 hover:from-[#064e3b] hover:to-[#047857] border border-emerald-500/40 hover:border-emerald-400/80 transition-all flex items-center gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-emerald-500/40">
                  <MessageCircle className="w-6 h-6 fill-[#4edea3]/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="block text-xs font-medium text-emerald-200">
                      WhatsApp (Founder - Biswaranjan)
                    </span>
                    <span className="text-[10px] font-bold text-[#4edea3] bg-[#00a572]/20 px-2 py-0.5 rounded-full border border-[#00a572]/40">
                      Online Now
                    </span>
                  </div>
                  <span className="font-bold text-white text-base truncate block mt-0.5">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="block text-xs font-semibold text-[#4edea3]">
                    Direct consultation &amp; custom quotes
                  </span>
                </div>
              </a>

              {/* WhatsApp Card - Team Member */}
              <a
                id="contact-team-whatsapp-direct"
                href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%2C%20I%20want%20to%20connect%20with%20the%20Kalinga%20Pixel%20team%20about%20a%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-[#0c4a6e]/85 via-[#0f172a]/95 to-[#155e75]/75 hover:from-[#0c4a6e] hover:to-[#0891b2] border border-cyan-500/40 hover:border-cyan-400/80 transition-all flex items-center gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-[#67e8f9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-cyan-500/40">
                  <MessageCircle className="w-6 h-6 fill-[#67e8f9]/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="block text-xs font-medium text-cyan-200">
                      WhatsApp (Team Member Support)
                    </span>
                    <span className="text-[10px] font-bold text-[#67e8f9] bg-[#0891b2]/20 px-2 py-0.5 rounded-full border border-cyan-500/40">
                      Team Support
                    </span>
                  </div>
                  <span className="font-bold text-white text-base truncate block mt-0.5">
                    {BUSINESS_INFO.teamPhone}
                  </span>
                  <span className="block text-xs font-semibold text-[#67e8f9]">
                    Project assistance &amp; quick queries
                  </span>
                </div>
              </a>

              {/* Phone Consultation Card */}
              <a
                id="contact-phone-direct"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#1e1b4b]/85 via-[#0f172a]/95 to-[#172554]/75 hover:from-[#1e1b4b] hover:to-[#1e3a8a] border border-blue-500/40 hover:border-blue-400/80 transition-all flex items-center gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-[#93c5fd] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-blue-500/40">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-blue-200">
                    Phone Consultation
                  </span>
                  <span className="font-bold text-white text-base truncate block mt-0.5">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="block text-xs text-[#94a3b8]">
                    {BUSINESS_INFO.workingHours}
                  </span>
                </div>
              </a>

              {/* Email Direct Card */}
              <a
                id="contact-email-direct"
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#581c87]/85 via-[#0f172a]/95 to-[#3b0764]/75 hover:from-[#581c87] hover:to-[#4c1d95] border border-purple-500/40 hover:border-purple-400/80 transition-all flex items-center gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-[#c0c1ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-purple-500/40">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-purple-200">
                    Official Project Email
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base truncate block mt-0.5 break-all">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="block text-xs text-[#94a3b8]">
                    Replies within 4 hours
                  </span>
                </div>
              </a>
            </div>

            {/* Scope / Location Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c4a6e]/85 via-[#0f172a]/95 to-[#155e75]/75 border border-cyan-500/40 shadow-lg">
              <span className="text-xs font-bold text-white flex items-center gap-1.5 mb-2">
                <MapPin className="w-4 h-4 text-[#4edea3]" /> Studio Service Scope
              </span>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Delivering high-converting websites for retail stores, clinics, restaurants, interior firms, and service professionals across Mumbai, Delhi NCR, Bengaluru, Bhubaneswar, Hyderabad, Kolkata, and all Indian cities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#131b2e] via-[#1a233d] to-[#12192c] border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Free Website Discovery Call
              </h3>
              <p className="text-sm text-[#94a3b8] mt-1.5">
                Fill in your business details below to get a live preview recommendation and custom quote within hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#064e3b]/90 via-[#0f172a]/95 to-[#065f46]/80 border border-emerald-500/50 text-center space-y-4 animate-in zoom-in-95 duration-200 shadow-xl">
                <div className="w-14 h-14 rounded-full bg-[#00a572]/20 text-[#4edea3] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received &amp; Sent!</h4>
                <p className="text-sm text-[#94a3b8] max-w-md mx-auto">
                  Your details have been pre-filled into WhatsApp for <strong className="text-white">Biswaranjan Pradhan</strong>. If your WhatsApp tab didn't open automatically, use the button below:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(
                      formData.businessNiche || 'my business'
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat with Biswaranjan</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%20Kalinga%20Pixel%20Team%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(
                      formData.businessNiche || 'my business'
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0891b2] hover:bg-[#06b6d4] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat with Team Member (6370809336)</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-xs font-semibold text-[#c3c6d7] transition-colors"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : isSubmitting ? (
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#4edea3] mx-auto flex items-center justify-center animate-spin">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Preparing Your Strategy Brief...</h4>
                  <p className="text-xs text-[#94a3b8]">Formatting business requirements for direct review with Biswaranjan</p>
                </div>
                <div className="space-y-3 max-w-md mx-auto pt-2">
                  <Skeleton className="w-full h-10 rounded-xl" />
                  <Skeleton className="w-4/5 h-10 rounded-xl mx-auto" />
                  <Skeleton className="w-2/3 h-10 rounded-xl mx-auto" />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Your Name / Business Owner *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business-type"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Business Niche *
                    </label>
                    <input
                      id="business-type"
                      type="text"
                      required
                      value={formData.businessNiche}
                      onChange={(e) => setFormData({ ...formData, businessNiche: e.target.value })}
                      placeholder="e.g. Dental Clinic, Cafe, Real Estate"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="package-select"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Interested Package
                    </label>
                    <select
                      id="package-select"
                      value={formData.selectedPackage}
                      onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] transition-all"
                    >
                      <option value="Business Website (₹12,000 – ₹20,000)">
                        Business Website (₹12,000 – ₹20,000) [Recommended]
                      </option>
                      <option value="Basic Website (₹7,000 – ₹10,000)">
                        Basic Website (₹7,000 – ₹10,000)
                      </option>
                      <option value="Custom Local Enterprise Inquiry">
                        Not Sure Yet • Need Advice
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-city"
                    className="block text-xs font-semibold text-white mb-1.5"
                  >
                    City &amp; Current Website (if any)
                  </label>
                  <input
                    id="client-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bengaluru / new startup with no site"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-notes"
                    className="block text-xs font-semibold text-white mb-1.5"
                  >
                    What is your primary goal?
                  </label>
                  <textarea
                    id="client-notes"
                    rows={3}
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    placeholder="Tell us what you want to achieve: More customer calls, showcase menu, rank higher on Google Maps..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] transition-all resize-none"
                  />
                </div>

                <button
                  id="submit-inquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-base transition-all shadow-[0_12px_28px_-6px_rgba(0,165,114,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Formatting...' : 'Send Inquiry & Open WhatsApp Chat'}</span>
                </button>

                <p className="text-[11px] text-center text-[#94a3b8] mt-1 flex items-center justify-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span>100% Privacy. Your phone number is never shared or spammed.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
