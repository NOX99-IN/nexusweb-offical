import React, { useState } from 'react';
import { PageId, InquiryFormData } from '../types';
import { BUSINESS_INFO, PRICING_PACKAGES } from '../data';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: PageId, anchorId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
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

    try {
      const existing = JSON.parse(localStorage.getItem('nexusweb_inquiries') || '[]');
      existing.unshift({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('nexusweb_inquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${message}`, '_blank');
    }, 400);
  };

  return (
    <div id="contact" className="w-full bg-[#0b1326] text-[#dae2fd] pt-8 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#222a3d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171f33] border border-[#2d3449] text-[#4edea3] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Direct Founder Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            Let's Build A Website That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]">
              Wins You Customers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mt-5 leading-relaxed">
            Reach out directly to <strong className="text-white font-semibold">{BUSINESS_INFO.ownerName}</strong>. No junior account managers, no automated support bots. Average response time under 15 minutes.
          </p>
        </div>
      </section>

      {/* Main Contact Grid & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-[#171f33] px-3.5 py-1 rounded-full border border-[#2d3449] mb-3 inline-block">
                Immediate Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How Would You Like To Connect?
              </h2>
              <p className="text-sm text-[#94a3b8] mt-2 leading-relaxed">
                Choose the channel that is easiest for you. Most clients send us a quick WhatsApp voice note or message to start.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="flex flex-col gap-3.5">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20consult%20with%20you%20about%20a%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#171f33] hover:bg-[#1e273f] border border-[#222a3d] hover:border-[#00a572]/50 transition-all flex items-center gap-4 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#00a572]/30">
                  <MessageCircle className="w-6 h-6 fill-[#4edea3]/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="block text-xs font-medium text-[#94a3b8]">
                      WhatsApp Direct (Fastest)
                    </span>
                    <span className="text-[10px] font-bold text-[#4edea3] bg-[#00a572]/15 px-2 py-0.5 rounded-full border border-[#00a572]/30">
                      Online Now
                    </span>
                  </div>
                  <span className="font-bold text-white text-base truncate block mt-0.5">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="block text-xs text-[#4edea3]">
                    Replies within 15 mins during work hours
                  </span>
                </div>
              </a>

              {/* Phone Consultation */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-5 rounded-2xl bg-[#171f33] hover:bg-[#1e273f] border border-[#222a3d] hover:border-[#3b82f6]/50 transition-all flex items-center gap-4 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/20 text-[#93c5fd] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#2563eb]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-[#94a3b8]">
                    Phone Call Consultation
                  </span>
                  <span className="font-bold text-white text-base truncate block mt-0.5">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="block text-xs text-[#94a3b8]">
                    Direct conversation with Biswaranjan
                  </span>
                </div>
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-5 rounded-2xl bg-[#171f33] hover:bg-[#1e273f] border border-[#222a3d] hover:border-[#c0c1ff]/50 transition-all flex items-center gap-4 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#585be6]/20 text-[#c0c1ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#585be6]/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-[#94a3b8]">
                    Official Project Email
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base truncate block mt-0.5 break-all">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="block text-xs text-[#94a3b8]">
                    Detailed proposals &amp; invoices
                  </span>
                </div>
              </a>
            </div>

            {/* Operating Hours & Nationwide Coverage */}
            <div className="p-6 rounded-2xl bg-[#131b2e] border border-[#222a3d] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Clock className="w-4 h-4 text-[#93c5fd]" />
                <span>Operating Hours</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                {BUSINESS_INFO.workingHours} (IST)
              </p>

              <div className="pt-2 border-t border-[#222a3d] flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-[#4edea3]" />
                <span>Service Coverage Across India</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Mumbai, Delhi NCR, Bengaluru, Bhubaneswar, Hyderabad, Kolkata, Pune, Ahmedabad, and all Indian tier-1 &amp; tier-2 cities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-[#171f33] border border-[#2d3449] shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Free Website Discovery Call
              </h3>
              <p className="text-sm text-[#94a3b8] mt-1.5">
                Share a few details below and we will prepare a custom mockup preview and recommendation for your business.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#131b2e] border border-[#00a572]/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-xs font-semibold text-[#c3c6d7] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Your Name / Owner *
                    </label>
                    <input
                      id="contact-name"
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
                      htmlFor="contact-niche"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Business Niche *
                    </label>
                    <input
                      id="contact-niche"
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
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="contact-phone"
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
                      htmlFor="contact-pkg"
                      className="block text-xs font-semibold text-white mb-1.5"
                    >
                      Interested Package
                    </label>
                    <select
                      id="contact-pkg"
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
                    htmlFor="contact-city"
                    className="block text-xs font-semibold text-white mb-1.5"
                  >
                    City &amp; Current Website (if any)
                  </label>
                  <input
                    id="contact-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bhubaneswar / no website yet"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-goal"
                    className="block text-xs font-semibold text-white mb-1.5"
                  >
                    What is your primary goal?
                  </label>
                  <textarea
                    id="contact-goal"
                    rows={3}
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    placeholder="Tell us what you want to achieve: More customer calls, showcase menu, rank higher on Google Maps..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1326] text-white text-sm placeholder:text-[#434655] border border-[#2d3449] focus:outline-none focus:border-[#3b82f6] transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-base transition-all shadow-[0_12px_28px_-6px_rgba(0,165,114,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Formatting...' : 'Send Inquiry & Open WhatsApp Chat'}</span>
                </button>

                <p className="text-[11px] text-center text-[#94a3b8] mt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span>100% Privacy. Your phone number is never shared or spammed.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
