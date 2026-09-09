import { PricingPackage, CaseStudy, ServiceItem, WhyChooseUsPillar, ProcessStep, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'Kalinga Pixel',
  ownerName: 'Biswaranjan Pradhan',
  phone: '+91 9124236518',
  rawPhone: '919124236518',
  teamPhone: '+91 6370809336',
  rawTeamPhone: '916370809336',
  teamMemberRole: 'Kalinga Pixel Team Member & Support',
  email: 'biswaranjanpradhanbiswa86@gmail.com',
  workingHours: 'Mon – Sat, 9:00 AM – 8:00 PM IST',
  responseTime: 'Average < 15 mins during business hours',
  tagline: 'High-Converting Websites For Local Businesses Across India',
  cities: 'Mumbai, Delhi NCR, Bengaluru, Bhubaneswar, Hyderabad, Kolkata, Pune & all tier-1/tier-2 Indian cities',
  logoUrl: '/kalinga-pixel-logo.svg',
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic-website',
    name: 'Basic Website',
    badge: 'Essential Starter',
    turnaround: '⚡ 3 to 4 Days Turnaround',
    priceRange: '₹7,000 – ₹10,000',
    numericMin: 7000,
    numericMax: 10000,
    period: '/ one-time',
    description: 'Ideal for small local shops, freelance professionals, and solo practitioners establishing their first credible online presence.',
    highlightText: 'Zero recurring agency fees • Complete code ownership',
    features: [
      '1 to 3 Custom Responsive Pages (Home, About/Services, Contact)',
      'Mobile-First Fast Loading Design (< 2s loading speed)',
      'Click-to-Call & Direct WhatsApp Chat button integration',
      'Google Maps & Business Profile Integration',
      'Basic On-Page SEO Setup for city-based keywords',
      '1 Year Domain Connection & SSL Certificate guidance',
      '30 Days Free Post-Launch Support for text/photo tweaks'
    ],
    ctaLabel: 'Choose Basic Plan',
    whatsappMessage: 'Hi Biswaranjan, I am interested in the Basic Website Package (₹7,000–₹10,000) for my local business. Can you share next steps?'
  },
  {
    id: 'business-website',
    name: 'Business Website',
    badge: 'High-Growth Tier',
    popular: true,
    turnaround: '⚡ 5 to 7 Days Turnaround',
    priceRange: '₹12,000 – ₹20,000',
    numericMin: 12000,
    numericMax: 20000,
    period: '/ one-time',
    description: 'Designed for clinics, restaurants, gyms, contractors, and retail shops looking to dominate local competitors and scale automated inquiries.',
    highlightText: 'Guaranteed 90+ Google Speed Score • All-inclusive lead funnel',
    features: [
      'Up to 7 Custom Designed Responsive Pages',
      'Full Product/Service Catalog or Dynamic Food Menu',
      'Direct WhatsApp Lead Funnel + Automated inquiry forms',
      'Advanced Local SEO & Schema Markup for top Google ranking',
      'Google Analytics 4 & Visitor Call Tracking setup',
      'Speed Optimization: 90+ on Google PageSpeed',
      'Custom Visuals, Icons & Professional Copywriting assistance',
      'Google Review Showcase Carousel & Instagram Feed',
      '90 Days Priority Support, Content Updates & Backup'
    ],
    ctaLabel: 'Get Business Website on WhatsApp',
    whatsappMessage: 'Hi Biswaranjan, I want to get started with the Business Website Package (₹12,000–₹20,000) for my business.'
  }
];

export const HERO_SHOWCASE = [
  {
    title: 'Aura Smile Clinic',
    category: 'Dental & Health',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNvCCEQwytZMfDSGcdCPolWWb3gTLR_FJ5Balz8KJBSS1gUR8GNdMBDNq5Xj06f81bCspIPbi3DbPhHJknxNFJB_AAN2JrTLGjrRumE04Nb3hfDOEnc6zHSHIQxfGCb8He6g4-RWPMIjH6zBSmWFSFG9oaOtbEqsD9XYQJMh_6hWm2xbIFfxoukrE5OCgHBuWRNuQ0z2FFQuLYO5-m3gfR3w1Awrh4C22-YMVWWA3tzXXIAhVuIqwkug',
    summary: 'Instant online appointment funnel with 1-tap WhatsApp booking trigger.',
    metric: '+185% Patient Enquiries'
  },
  {
    title: 'Glow Luxe Lounge',
    category: 'Salon & Spa',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdX_yVkkhoHn8cw2dPniAXctRwmIN1FTjfXdge5uPdDnZjSqSH2PqcZ-lBXedEl_khnBd1P0vFEqhQBKBV6PMhMJffun_IJAiX-gKHqP2bHHWhivne5K9AFSKWO4vR4lsrJZ4d2Hj0Z2KMDkrkROdtWY_gsAIRhqBGpidB9cMSE99wTlSno7LStPMwhgiaXxz3f8WUAn6a2dIaUDDyTAHJJoKVYBDc9itDzD6TMQyIZajxKeSB-mzP_g',
    summary: 'Visual rate cards, customer reviews reel, and Google review direct integration.',
    metric: 'Rank #1 Local Search'
  },
  {
    title: 'Urban Nest Studios',
    category: 'Architecture',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5lCfY_5PhKXYCdsAqcQlkPNlHL9quutkZVVFk809JIJwM7TdCPO95uIUTXa-yZ4BlpyDHIOcXRcYPQs2DHgjk4_WjxEYLlRArxmSguOwKq8GbvMAYqByCVtCgCvjQntrGdmjV2A1cpEt3awJgmKWnlgyGJOKvNlPq2Wrwym_iqd_7hypihLwft-rO0Ee4DuIrGtgIeGdXsk0BhM4ulzqdUgXsTHxw_88fNDlTdlAyoeUvhWU1qmHZdw',
    summary: 'High-resolution project gallery paired with instant cost estimator forms.',
    metric: '₹1.4 Cr Inbound Leads'
  },
  {
    title: 'Apex Auto Care',
    category: 'Automotive',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIMuF_HXvPgb-cZJHDvQFwCp0wBoQa557Ea4Q5X4hSwX1TaodfCV93MD7ehvHEbA-WI155-qflAxfe3mgeGq9ie832eCmFiIaQEzz9J3Gk79XMHwAKjKZU2vR-ULW7ygLZzA9sMAfzrVrkCR1ackjuZq7Ybj5DoNKHlNdbrC1X5Ba_ax1ztfCtFOmuge16t7FKoJnsGTTR3ViXNZRhnF0LdBjOGazF-Kw54ySv6Mfc5gAsUN7dCAFS5g',
    summary: 'Emergency roadside tap-to-call button with live Google Maps navigation.',
    metric: '3.2x Direct Phone Calls'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsPillar[] = [
  {
    id: 'pillar-1',
    title: 'Ready in 3 to 7 Days',
    description: 'No months-long delays. We build with rapid, tested sprint frameworks so your business starts receiving live inquiries this week.',
    subBadge: 'Guaranteed On-Time Delivery',
    iconName: 'Zap'
  },
  {
    id: 'pillar-2',
    title: 'Zero Tech Headaches',
    description: 'We handle DNS configurations, fast cloud hosting, SSL certs, graphic polishing, and copywriting. You just approve the design.',
    subBadge: '100% Full Ownership',
    iconName: 'CheckCircle2'
  },
  {
    id: 'pillar-3',
    title: 'Built For Real Leads',
    description: 'Websites built strictly around converting mobile traffic into WhatsApp messages, direct phone calls, and physical store visits.',
    subBadge: 'High-Conversion UX',
    iconName: 'PhoneCall'
  },
  {
    id: 'pillar-4',
    title: 'Direct Founder Access',
    description: 'Talk directly with Biswaranjan Pradhan for consultation, strategy, and changes. No clueless junior account managers.',
    subBadge: '< 15 Min Response WhatsApp',
    iconName: 'UserCheck'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Share Business Details',
    duration: 'Day 1',
    description: 'Tell us your business name, services, rough price list, and city via a quick 10-minute WhatsApp exchange.'
  },
  {
    stepNumber: '02',
    title: 'Custom Strategy & Mockup',
    duration: 'Day 2',
    description: 'We prepare a custom design mockup tailored to attract high-intent local clients looking for your exact service.'
  },
  {
    stepNumber: '03',
    title: 'Development & Local SEO',
    duration: 'Day 3–5',
    description: 'We code the lightning-fast site, configure Google Maps schemas, connect click-to-WhatsApp triggers, and install SSL.'
  },
  {
    stepNumber: '04',
    title: 'Live Launch & Daily Leads',
    duration: 'Launch Day',
    description: 'Your website goes live on your custom domain. Customers search locally and tap directly to call or chat.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'High-Converting Landing Pages',
    description: 'Engineered layout hierarchy with crisp value propositions, social proof testimonials, and clear commercial triggers that drive immediate customer phone inquiries.',
    iconName: 'Rocket'
  },
  {
    id: 'srv-2',
    title: 'Local SEO & Google Maps',
    description: 'Full Google Business Profile schema, NAP consistency, and local keywords setup so customers within a 10km radius find you when searching for nearby services.',
    iconName: 'MapPin'
  },
  {
    id: 'srv-3',
    title: 'Lightning Fast Mobile Responsive',
    description: 'Over 85% of local searches happen on phones. We test on real iOS and Android screens ensuring 1-second load times and silky smooth scrolling.',
    iconName: 'Smartphone'
  },
  {
    id: 'srv-4',
    title: 'Instant WhatsApp & Call Triggers',
    description: 'Eliminate contact friction. Floating sticky WhatsApp badges and one-tap click-to-call buttons route qualified local customers right into your pocket.',
    iconName: 'MessageSquare'
  },
  {
    id: 'srv-5',
    title: 'Menu, Catalog & Service Grid',
    description: 'Showcase your seasonal cafe menu, medical treatments, renovation packages, or retail inventory with transparent price estimates and high-res imagery.',
    iconName: 'Grid'
  },
  {
    id: 'srv-6',
    title: 'Free Hosting, SSL & Domain Setup',
    description: 'No technical mystery. We handle domain registrar linking, install bank-grade SSL security certificates, and host on ultra-reliable high-speed cloud edge servers.',
    iconName: 'ShieldCheck'
  }
];

export const PORTFOLIO_CASES: CaseStudy[] = [
  {
    id: 'dental-clinic',
    title: 'Aura Aesthetics Dental Clinic',
    category: 'Healthcare',
    tag: '3.8x Bookings',
    clientName: 'Dr. Sameer Mohanty',
    city: 'Bhubaneswar, Odisha',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6O6COYAsxyY46NlNbDt4MEpnxdY4SQhOkKdAExsC9NbNdUrQuIkpYcKSe2x8DLn91Ex1ZX625JCKh4ic2f4QYqIiOW_MUTc0GodxDtGVgY5cgl1lI98lwcRfuV4ez_vXTqjEJZ2bEqCMp2vK3Rlbt7s9L8qx-S6rAnVTALDiYmOp9bYCUe1roSUvwwpXiN1ivOI3coGpAzhueBCxRsX3CbdYXXQfeOPyZOvf6ud2gWORR3lBQ8xDS4w',
    altText: 'Modern dental clinic web application mockups on MacBook and iPhone screen with appointment booking system',
    description: 'Built a high-conversion landing page with transparent dental treatment price tables and 1-tap WhatsApp consultation scheduling.',
    metrics: [
      { label: 'WhatsApp Leads', value: '3.8x', sublabel: 'Increase in patient inquiries' },
      { label: 'PageSpeed', value: '0.9s', sublabel: 'Mobile first load time' },
      { label: 'Google Maps', value: '#1 Spot', sublabel: 'Local root keywords' }
    ],
    challenge: 'Patients were confused about pricing and booking took too many steps, causing high bounce rates on social media links.',
    solution: 'Designed an ultra-clean pricing breakdown for implants & aligners with a prominent sticky WhatsApp appointment scheduler.',
    featuresIncluded: [
      'One-tap doctor consultation appointment via WhatsApp',
      'Transparent procedure pricing breakdown table',
      'Google Maps directions & clinic working hours',
      'Google Reviews carousel with verified star ratings'
    ],
    resultsSummary: 'Aura Aesthetics captured 140+ new patient consultations in the first 45 days after launch.'
  },
  {
    id: 'fine-dining',
    title: 'Spice Symphony Fine Dining',
    category: 'Fine Dining',
    tag: 'Direct Tables',
    clientName: 'Chef Rahul Kapoor',
    city: 'Mumbai, Maharashtra',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkHFa9L9V6sAl85tTenotPJI4UTGgxIDjIUfmz0vtwH14ZeVUBaqZPVkpViYg-yXg_FlHSjovPQWC_P3IUA_7kii2QRfmhn-MrF8Jj3g-4D48CgTFGn2gl5JpDBG3ImNYEhN_p0y80Y4F4PLdaxU8Xx7zb5jqymHbowqkvDfZfHVwDnPzKlZtmme2mgiss3AduofWH37TZzgMIOs6kEI3im2q_X7P3ytqtEgElcDAcXVaYjkBaIES-2g',
    altText: 'Artisan restaurant digital food menu and table reservation web design with warm atmospheric dinner photography',
    description: 'Launched an interactive digital food menu with dietary filters, zero-commission table reservations, and seamless Google Map navigation.',
    metrics: [
      { label: 'Monthly Bookings', value: '620+', sublabel: 'Direct via WhatsApp & site' },
      { label: 'Third-Party Cut', value: '0%', sublabel: 'Zero aggregator commission' },
      { label: 'Review Rating', value: '4.9 ★', sublabel: 'Over 380 Google ratings' }
    ],
    challenge: 'Food delivery portals and dining aggregator platforms were consuming 20-30% of profit margins on every customer reservation.',
    solution: 'Engineered a digital interactive menu with direct WhatsApp table reserving and instant Uber/Google map directions.',
    featuresIncluded: [
      'Interactive food & beverage menu with vegetarian/vegan tags',
      'Instant WhatsApp table reservation button',
      'Private banquet & catering booking lead form',
      'Instagram visual feed & curated photo gallery'
    ],
    resultsSummary: 'Saved over ₹1.2 Lakhs in aggregator commission within the first 60 days of launching their own portal.'
  },
  {
    id: 'apex-fitness',
    title: 'Apex Fitness & CrossFit Studio',
    category: 'Fitness & Gym',
    tag: '2x Signups',
    clientName: 'Vikram Rajput',
    city: 'Bengaluru, Karnataka',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD01b1-0ijB5QOMdDFbH5SK1Nt0RwCYLmmDj_dCxtFQAxehD024E75E-a-ReUMcNXVB42R3MbUrNzM8xxsWOnZ33u-Xl7cbesleWWEsMqm9VjDyo-L1GB45A-XAlj59KB8Teoa6EGwl-VdFnY3A1-nCfSda3vydQ5JklqHXpHmOiR7oyoMhUxnRrI_R0MPE2Dk4A5hMTU8d5zGF4delU8GBEdA9cqrV_WZpYdivv7ox-W3hax5ungVxoQ',
    altText: 'Athletic fitness gym website mockup showcasing trainer profiles class schedule and member pass pricing',
    description: 'Engineered a high-energy site featuring 1-day trial passes, trainer schedules, and member transformation photo before/after carousels.',
    metrics: [
      { label: 'Trial Passes', value: '200%', sublabel: 'Growth in free day passes' },
      { label: 'Speed Index', value: '98', sublabel: 'Google PageSpeed score' },
      { label: 'Time to Launch', value: '4 Days', sublabel: 'Fast turnaround delivery' }
    ],
    challenge: 'Walk-in inquiries were inconsistent and prospects could not easily see trainer credentials or gym equipment before visiting.',
    solution: 'Designed a high-impact gym portal featuring instant 1-Day Trial Passes claimable directly through WhatsApp.',
    featuresIncluded: [
      'Claim Free 1-Day Trial Pass with 1 tap',
      'Interactive batch timetable (Morning & Evening slots)',
      'Client transformation photo slider and video testimonials',
      'Personal trainer profile bios and specialized coaching rates'
    ],
    resultsSummary: 'Generated 95+ trial pass requests in week 1, converting into 42 annual gym memberships.'
  },
  {
    id: 'urban-crafts',
    title: 'Urban Crafts Interior Design',
    category: 'Interior Studio',
    tag: 'High Value',
    clientName: 'Priyanka Sen & Ananya Roy',
    city: 'Delhi NCR',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClLTcdfEAeLMCzYNg6NXYp4VSxCBlQ9jUq4D3fJ-tOoH0B-ex6pt5weviAWYa6LBYuFkh8JKH_pWS5rCmn4XmkUKtrbJRAkmRyncDOIOK9GbqDIJXvWVIOKeboWB2Z8cnrAp4xX2D9AU4OCVR3ZVeZm4zWEnXupHXPtyGCOiuo0d9_fYMBuAB84nRo9c9EZlhGaYixBK_oXhW8HbZA-Qw2vnbqn_dyrPBpfFZ0PHkzCAbq2MMj4xaoPQ',
    altText: 'High end luxury interior architecture website interface showing luxury living room transformations and instant pricing consultation form',
    description: 'Ultra-crisp visual gallery with quotation budget calculator that qualified 24 high-ticket residential renovation clients in under 60 days.',
    metrics: [
      { label: 'Signed Contracts', value: '₹42L+', sublabel: 'Residential project value' },
      { label: 'Mobile Traffic', value: '85%', sublabel: 'Responsive client visits' },
      { label: 'New Reviews', value: '32', sublabel: 'Verified homeowner ratings' }
    ],
    challenge: 'Low-ticket inquiries were wasting the architects’ consultation hours, while luxury homeowners wanted to see portfolio credibility upfront.',
    solution: 'Crafted an editorial-style luxury portfolio with an interactive estimated budget calculator to pre-qualify inquiries.',
    featuresIncluded: [
      'High-res photo portfolio filtering by 2BHK, 3BHK, and Villa spaces',
      'Instant Renovation Estimate questionnaire syncing to WhatsApp',
      'Client video walk-throughs & architectural floor plan showcase',
      'Full SEO optimization for NCR luxury interior design searches'
    ],
    resultsSummary: 'Secured 3 complete luxury villa turnkey interior contracts within 8 weeks of launch.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long will it take to launch my website?',
    answer: 'The Basic Website is delivered in just 3 to 4 business days. The comprehensive Business Website takes 5 to 7 business days. Once you supply your business name and services via WhatsApp, we begin designing immediately without delays.'
  },
  {
    id: 'faq-2',
    question: 'Will my website work well on mobile phones?',
    answer: 'Absolutely. In India, more than 85% of local service queries occur on smartphones. We design mobile-first so your website loads in under 2 seconds, looks pristine on all screen sizes, and allows visitors to call or message you with a single tap.'
  },
  {
    id: 'faq-3',
    question: 'How do customers contact me from the website?',
    answer: 'We integrate sticky one-tap WhatsApp chat buttons, direct click-to-call links, and optional quotation lead forms. Inquiries arrive directly to your personal or business WhatsApp number and email inbox immediately.'
  },
  {
    id: 'faq-4',
    question: 'Are there any recurring monthly agency fees?',
    answer: 'No monthly retainers whatsoever. You pay our one-time project fee and own 100% of the website code and assets. Standard annual domain and hosting renewals (typically ₹1,500 – ₹2,500/year after year 1) are registered directly in your name.'
  },
  {
    id: 'faq-5',
    question: 'What do you need from me to get started?',
    answer: 'Very little! Just your business name, a bullet list of services/prices, contact details, and any existing photos or logo. If you don\'t have professional photos or copy, our team provides royalty-free visuals and crafts the headlines for you.'
  },
  {
    id: 'faq-6',
    question: 'Can you help update photos or prices after the website is live?',
    answer: 'Yes! Both packages include post-launch support (30 days for Basic, 90 days for Business) during which we will handle text changes, phone number updates, new images, or price revisions with a quick WhatsApp message.'
  }
];
