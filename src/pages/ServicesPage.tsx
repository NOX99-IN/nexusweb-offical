import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, PRICING_PACKAGES } from '../data';
import {
  Rocket,
  MapPin,
  Smartphone,
  MessageCircle,
  LayoutGrid,
  ShieldCheck,
  RefreshCw,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Check,
  X,
  HelpCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedNiche, setSelectedNiche] = useState<string>('dental');

  const detailedServices = [
    {
      id: 'landing-pages',
      icon: <Rocket className="w-7 h-7 text-[#93c5fd]" />,
      title: 'High-Converting Landing Pages',
      subtitle: 'Engineered for immediate action and lead capture',
      description:
        'We do not build generic brochure pages. We structure every section with mathematical UX hierarchy: clear value propositions, trust-building social proof, transparent price ranges, and friction-free contact triggers.',
      deliverables: [
        'Mobile-first responsive architecture designed for modern screens',
        'Persuasive, conversion-tested copywriting tailored to your city and niche',
        'Direct 1-tap WhatsApp consultation buttons and click-to-call triggers',
        'Instant enquiry forms that send pre-filled client leads directly to WhatsApp'
      ],
      includedIn: 'Both Basic & Business Packages'
    },
    {
      id: 'local-seo',
      icon: <MapPin className="w-7 h-7 text-[#4edea3]" />,
      title: 'Local SEO & Google Maps Ranking',
      subtitle: 'Be the #1 choice when nearby customers search',
      description:
        'Over 70% of local customers choose a business within their 5km radius. We implement complete Schema.org LocalBusiness markup, optimize on-page meta tags for your city, and link your Google Business Profile.',
      deliverables: [
        'Geo-targeted keyword optimization (e.g. "Best Dental Clinic in Bhubaneswar")',
        'JSON-LD LocalBusiness schema with address, operating hours, and geo-coordinates',
        'Embedded interactive Google Maps with 1-tap GPS directions',
        'Google Business Profile integration and verified review showcase'
      ],
      includedIn: 'Both Basic (On-page) & Business (Advanced Schema + Maps)'
    },
    {
      id: 'mobile-speed',
      icon: <Smartphone className="w-7 h-7 text-[#c0c1ff]" />,
      title: 'Lightning-Fast Mobile Performance',
      subtitle: 'Sub-2-second loads on 4G/5G networks',
      description:
        'In India, over 85% of local searches happen on mobile phones. If your website takes more than 3 seconds to load, half your potential customers leave. We optimize images, minimize bundles, and guarantee a 90+ PageSpeed score on Business tier.',
      deliverables: [
        'Core Web Vitals compliance (LCP < 2.0s, CLS < 0.1)',
        'Next-gen WebP/AVIF automated image compression',
        'Zero bloat: no sluggish page-builder plugins or malware-vulnerable CMS',
        'Instant smooth transitions and responsive fluid layouts'
      ],
      includedIn: 'Guaranteed 90+ PageSpeed on Business Package'
    },
    {
      id: 'whatsapp-funnels',
      icon: <MessageCircle className="w-7 h-7 text-[#4edea3]" />,
      title: 'Direct WhatsApp Lead Funnels',
      subtitle: 'Turn casual visitors into active chat conversations',
      description:
        'Local customers prefer chatting on WhatsApp over filling out long, sterile forms. We integrate sticky WhatsApp floating triggers, customized pre-filled inquiry prompts, and direct click-to-call actions throughout the user journey.',
      deliverables: [
        'Floating bottom-right WhatsApp chat trigger with online pulse indicator',
        'Contextual pre-filled WhatsApp messages for each service and package',
        'Click-to-call telephone links for instant direct phone dialing',
        'Zero loss of contact information — messages land directly in your WhatsApp'
      ],
      includedIn: 'Included in All Packages'
    },
    {
      id: 'catalog-menu',
      icon: <LayoutGrid className="w-7 h-7 text-[#93c5fd]" />,
      title: 'Digital Menus, Catalogs & Price Grids',
      subtitle: 'Showcase your items with elegance and clarity',
      description:
        'Whether you run a restaurant needing a responsive food menu, a clinic displaying medical treatments, an interior designer showcasing completed renovations, or a salon with price tiers, we craft beautiful interactive grids.',
      deliverables: [
        'Categorized tabs with filterable tags (e.g., Starters, Main Course, Desserts)',
        'High-resolution imagery with lazy loading and zoom-in previews',
        'Clear price estimates and "Inquire About This Service" button per item',
        'Easily updatable through simple, human-readable structure'
      ],
      includedIn: 'Business Website Package'
    },
    {
      id: 'hosting-ssl',
      icon: <ShieldCheck className="w-7 h-7 text-[#4edea3]" />,
      title: 'Domain, SSL & Edge Hosting Setup',
      subtitle: '100% turnkey setup with zero technical headaches',
      description:
        'You never need to worry about DNS records, CNAME entries, nameservers, or server configurations. We configure your custom domain, install bank-grade SSL encryption certificates, and host on ultra-reliable global edge networks.',
      deliverables: [
        'Custom domain connection (.com, .in, .co.in, etc.)',
        'Free HTTPS/SSL Certificate installed for security and Google trust badge',
        'Global edge CDN hosting with 99.9% uptime reliability',
        '100% code and domain ownership handed over directly to you'
      ],
      includedIn: 'Setup Included in All Packages'
    },
    {
      id: 'website-redesign',
      icon: <RefreshCw className="w-7 h-7 text-[#93c5fd]" />,
      title: 'Website Redesign & Modernization',
      subtitle: 'Upgrade your outdated, slow site to a high-converting machine',
      description:
        'Already have an old WordPress or Wix website that looks outdated, takes 6 seconds to load, and generates zero calls? We rebuild it from the ground up into a modern, fast web application with modern typography and clear CTAs.',
      deliverables: [
        'Preservation of existing Google search rankings and URL redirects',
        'Modern dark/light aesthetic overhaul with high-contrast typography',
        'Speed boost from 20-30 PageSpeed score up to 90+',
        'Removal of costly annual agency retainer fees'
      ],
      includedIn: 'Available across Basic & Business tiers'
    },
    {
      id: 'maintenance-support',
      icon: <Zap className="w-7 h-7 text-[#c0c1ff]" />,
      title: 'Dedicated Post-Launch Support',
      subtitle: 'Direct support from the founder via WhatsApp',
      description:
        'We don\'t disappear after launch day. Every website comes with free post-launch support (30 days for Basic, 90 days for Business) for text tweaks, price adjustments, new photo uploads, and phone number changes.',
      deliverables: [
        'Fast turnaround on minor text, price, and image changes via WhatsApp',
        'Regular security audits and uptime health checks',
        'Google Business Profile synchronization assistance',
        'Direct access to founder Biswaranjan Pradhan with < 15 min response time'
      ],
      includedIn: '30 Days (Basic) / 90 Days (Business)'
    }
  ];

  const niches = [
    {
      id: 'dental',
      label: 'Clinics & Doctors',
      highlight: 'Patients schedule consultations via 1-tap WhatsApp'
    },
    {
      id: 'restaurant',
      label: 'Restaurants & Cafes',
      highlight: 'Interactive digital menu & table reservation with 0% aggregator cut'
    },
    {
      id: 'fitness',
      label: 'Gyms & Studios',
      highlight: '1-Day Free Trial pass lead capture & class timetable'
    },
    {
      id: 'salon',
      label: 'Salons & Spas',
      highlight: 'Service rate cards, before/after hair & skin visual gallery'
    },
    {
      id: 'interiors',
      label: 'Interior & Contractors',
      highlight: 'High-res portfolio showcase & turnkey project estimate form'
    }
  ];

  return (
    <div id="services" className="w-full bg-[#0b1326] text-[#dae2fd] pt-8 pb-20">
      {/* Services Header */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#222a3d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171f33] border border-[#2d3449] text-[#4edea3] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Engineered for Local Conversion</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            Web Design &amp; Digital Growth Services for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]">
              Local Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mt-5 leading-relaxed">
            We don’t build generic digital brochures. We build fast, mobile-friendly customer acquisition engines that rank on Google Maps and drive qualified WhatsApp messages to your phone.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20consult%20about%20your%20services%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm sm:text-base shadow-[0_8px_24px_rgba(0,165,114,0.4)] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Get a Service Consultation on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onNavigate('home', 'pricing-section');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] border border-[#2d3449] font-semibold text-sm transition-all"
            >
              <span>View Packages (₹7k – ₹20k)</span>
              <ArrowRight className="w-4 h-4 text-[#93c5fd]" />
            </button>
          </div>
        </div>
      </section>

      {/* In-depth 8 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] bg-[#171f33] px-3.5 py-1 rounded-full border border-[#2d3449] mb-3">
            Core Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything Required To Attract Local Customers
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mt-2">
            Every feature is intentionally chosen to eliminate customer friction and increase phone inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#171f33] border border-[#222a3d] hover:border-[#3b82f6]/40 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#222a3d] flex items-center justify-center border border-[#2d3449]">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0b1326] text-[#4edea3] border border-[#222a3d]">
                    {service.includedIn}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-[#93c5fd] mb-3">{service.subtitle}</p>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#222a3d]">
                  <span className="text-xs font-bold text-white block uppercase tracking-wider">
                    What's included:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae2fd]">
                      <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222a3d] flex items-center justify-between">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20ask%20about%20${encodeURIComponent(
                    service.title
                  )}%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4edea3] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire about this on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-[#93c5fd] hover:underline"
                >
                  Book Discovery Call →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Comparison Table: Basic vs Business */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#131b2e] border border-[#222a3d] shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3] bg-[#00a572]/10 px-3 py-1 rounded-full border border-[#00a572]/30 mb-2 inline-block">
              Clear Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Basic Website vs. Business Website Deliverables
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-2">
              Transparent, upfront comparison to help you choose with 100% confidence.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#222a3d] text-white font-bold">
                  <th className="py-4 px-3">Feature &amp; Capability</th>
                  <th className="py-4 px-3 text-[#dae2fd]">
                    Basic Plan
                    <span className="block text-xs font-normal text-[#94a3b8]">₹7k–₹10k</span>
                  </th>
                  <th className="py-4 px-3 text-[#4edea3]">
                    Business Plan 🔥
                    <span className="block text-xs font-normal text-[#94a3b8]">₹12k–₹20k</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222a3d]/80 text-[#c3c6d7]">
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Custom Responsive Pages</td>
                  <td className="py-3.5 px-3">1 to 3 Pages</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">Up to 7 Pages</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Delivery Turnaround</td>
                  <td className="py-3.5 px-3">3 to 4 Business Days</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">5 to 7 Business Days</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Direct WhatsApp Lead Triggers</td>
                  <td className="py-3.5 px-3"><Check className="w-4 h-4 text-[#4edea3]" /></td>
                  <td className="py-3.5 px-3"><Check className="w-4 h-4 text-[#4edea3]" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Google Maps &amp; Profile Link</td>
                  <td className="py-3.5 px-3"><Check className="w-4 h-4 text-[#4edea3]" /></td>
                  <td className="py-3.5 px-3"><Check className="w-4 h-4 text-[#4edea3]" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Dynamic Food Menu / Catalog Grid</td>
                  <td className="py-3.5 px-3 text-[#94a3b8]">Basic Bullet List</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">Full Interactive Grid</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Google PageSpeed Score</td>
                  <td className="py-3.5 px-3">Fast (&lt; 2.5s)</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">Guaranteed 90+ Score</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Schema.org Local SEO Markup</td>
                  <td className="py-3.5 px-3 text-[#94a3b8]">Standard On-page</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">Advanced Schema &amp; FAQs</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-medium text-white">Free Post-Launch Support</td>
                  <td className="py-3.5 px-3">30 Days</td>
                  <td className="py-3.5 px-3 text-[#4edea3] font-semibold">90 Days Priority Support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-[#222a3d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#94a3b8]">
              Both plans include 100% full ownership of source code and no monthly agency retainers.
            </p>
            <button
              onClick={() => onNavigate('home', 'pricing-section')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0"
            >
              <span>View Pricing Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#171f33] via-[#1e273f] to-[#171f33] border border-[#2d3449]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Have a custom requirement or need advice?
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-lg mx-auto mb-6">
            Speak directly with Biswaranjan Pradhan. We will audit your current presence and recommend the exact setup to drive leads.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-sm sm:text-base shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Chat with Biswaranjan on WhatsApp (+91 9124236518)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
