export interface PricingPackage {
  id: string;
  name: string;
  badge: string;
  turnaround: string;
  priceRange: string;
  numericMin: number;
  numericMax: number;
  period: string;
  description: string;
  popular?: boolean;
  highlightText: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tag: string;
  clientName: string;
  city: string;
  imageUrl: string;
  altText: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  challenge: string;
  solution: string;
  featuresIncluded: string[];
  resultsSummary: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface WhyChooseUsPillar {
  id: string;
  title: string;
  description: string;
  subBadge: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryFormData {
  name: string;
  businessNiche: string;
  phone: string;
  selectedPackage: string;
  city: string;
  primaryGoal: string;
}

export type PageId = 'home' | 'services' | 'about' | 'contact';
