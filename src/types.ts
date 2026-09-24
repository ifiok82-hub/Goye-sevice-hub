export type PageView = 
  | 'home'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'order'
  | 'about'
  | 'contact'
  | 'admin'
  | 'privacy'
  | 'terms';

export type ServiceType = 'cac' | 'website' | 'bot' | 'bundle';

export interface ServiceItem {
  id: ServiceType;
  title: string;
  category: string;
  tagline: string;
  priceNgn: number;
  priceUsd: number;
  pricePi: number;
  deliveryTime: string;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface OrderData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  serviceNeeded: ServiceType;
  businessName: string;
  message: string;
  status: 'Submitted' | 'Name Approved' | 'Awaiting Docs' | 'Completed';
  createdAt: string;
  paymentMethod?: string;
  txHash?: string;
  isUnlocked?: boolean;
}

export interface CacCertificateSample {
  id: string;
  businessName: string;
  rcNumber: string;
  regDate: string;
  type: 'Business Name' | 'Limited Liability (LTD)' | 'Incorporated Trustees (NGO)';
  imageUrl: string;
}

export interface WebsiteSample {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  color: string;
  features: string[];
}

export interface BotDemoSample {
  id: string;
  name: string;
  platform: 'WhatsApp AI' | 'Instagram Sales' | 'AI Content Auto-Poster';
  samplePrompt: string;
  initialMessage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
}
