import { ServiceItem, CacCertificateSample, WebsiteSample, BotDemoSample, Testimonial } from '../types';

export const COMPANY_INFO = {
  brandName: "GOYE SERVICES HUB",
  subtitle: "Client Getter Agency",
  entity: "Goyedagosmess Enterprise",
  rcNumber: "RC BN3583773",
  tagline: "We Register. We Build. We Automate. You Grow.",
  domain: "https://www.gasv.store",
  shortDomain: "gasv.store",
  email: "goyedagosmess@gmail.com",
  whatsappNumber: "2348123456789", // Replaceable with real contact
  whatsappDisplay: "+234 (812) 345-6789",
  location: "Lagos, Nigeria (Serving Worldwide)",
  officeHours: "8:00 AM - 6:00 PM WAT (Mon - Sat)",
  sisterSchool: "GOYE AI WEB3 School",
  sisterDomain: "https://sirwise.online",
  formSubmitEndpoint: "https://formsubmit.co/b5ff13793df65d1d619984df629007f3",
  adminSecretKey: "GoyeBN3583773"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cac',
    title: 'CAC & BUSINESS REGISTRATION',
    category: 'Legal Registration',
    tagline: 'Get your official CAC Certificate, TIN, and SCUML in 3 Days.',
    priceNgn: 30000,
    priceUsd: 18,
    pricePi: 47.3,
    deliveryTime: '3 Days Delivery',
    ctaText: 'Register My Business',
    badge: 'CAC Approved Agent',
    features: [
      'Business Name Registration (from ₦30,000)',
      'Limited Liability Company (LTD)',
      'NGO / Church / Association / Incorporated Trustees',
      'SCUML, Trademark & Tax ID (TIN)',
      'Annual Returns Filing & Status Report',
      'Original CAC Certificate Delivery to Vault & Email'
    ]
  },
  {
    id: 'website',
    title: 'WEBSITE & BRAND DESIGN',
    category: 'Digital Presence',
    tagline: 'Modern 5-page business website + Logo + Business Email in 48 Hours.',
    priceNgn: 80000,
    priceUsd: 50,
    pricePi: 131.5,
    deliveryTime: '48 Hours Delivery',
    ctaText: 'Build My Website',
    badge: '48-Hour Guarantee',
    features: [
      '5-Page Responsive Business Website',
      'Professional Logo + Brand Identity Kit',
      'Free Custom Domain & SSL Certificate',
      'Google My Business & Local SEO Setup',
      'Payment Gateway Integration (Paystack / Flutterwave / Pi)',
      'Business Email (info@yourbusiness.com)'
    ]
  },
  {
    id: 'bot',
    title: 'AI AUTOMATION FOR SMEs',
    category: 'High-Ticket Automation',
    tagline: 'WhatsApp & Social Media AI Sales Bot that closes clients 24/7.',
    priceNgn: 150000,
    priceUsd: 90,
    pricePi: 236.8,
    deliveryTime: '2 Days Setup',
    ctaText: 'Automate My Business',
    badge: 'High Conversion AI',
    features: [
      'WhatsApp AI Customer Care & Sales Bot',
      'AI Content & Auto Posting Bot for Social Media',
      'Instagram & Facebook DM AI Sales Assistant',
      'Lead Capture with Human Agent Handover',
      'Custom Training with Your Products & Pricing',
      'Zero Monthly Maintenance Setup Options'
    ]
  },
  {
    id: 'bundle',
    title: 'THE ALL-IN-ONE 3-IN-1 BUNDLE',
    category: 'Complete Business Launch',
    tagline: 'CAC Registration + 5-Page Website + WhatsApp AI Bot! Save ₦30,000.',
    priceNgn: 230000,
    priceUsd: 140,
    pricePi: 368,
    deliveryTime: '72 Hours Full Turnkey',
    ctaText: 'Order 3-in-1 Bundle (Save ₦30k)',
    badge: 'SAVE ₦30,000 / $28',
    features: [
      'Full CAC Business Name / LTD Registration',
      'Complete 5-Page Website + Domain + Email + SSL',
      'WhatsApp AI Customer Support & Sales Bot',
      'Google My Business & SCUML Advisory',
      'Lifetime Support & Document Vault Access',
      'Priority Delivery in 72 Hours'
    ]
  }
];

export const CERTIFICATE_SAMPLES: CacCertificateSample[] = [
  {
    id: 'cac-1',
    businessName: 'GOYE FASHION & APPAREL ENTERPRISE',
    rcNumber: 'BN 3892014',
    regDate: '12TH MARCH 2024',
    type: 'Business Name',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cac-2',
    businessName: 'GOYE GLOBAL LOGISTICS NIGERIA LTD',
    rcNumber: 'RC 7291048',
    regDate: '28TH JANUARY 2024',
    type: 'Limited Liability (LTD)',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cac-3',
    businessName: 'AFRICA AGRI-TECH EMPOWERMENT FOUNDATION',
    rcNumber: 'IT 192834',
    regDate: '05TH FEBRUARY 2024',
    type: 'Incorporated Trustees (NGO)',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cac-4',
    businessName: 'SIRWISE REAL ESTATE & HOMES LTD',
    rcNumber: 'RC 8392011',
    regDate: '18TH APRIL 2024',
    type: 'Limited Liability (LTD)',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cac-5',
    businessName: 'GASV GLOBAL DIGITAL HUB ENTERPRISE',
    rcNumber: 'BN 3583773',
    regDate: '15TH AUGUST 2023',
    type: 'Business Name',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cac-6',
    businessName: 'GOYEDAGOSMESS TRADING & AUTOMATION LTD',
    rcNumber: 'RC 9102834',
    regDate: '10TH MAY 2024',
    type: 'Limited Liability (LTD)',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  }
];

export const WEBSITE_SAMPLES: WebsiteSample[] = [
  {
    id: 'web-1',
    title: 'Luxuria Fashion Store',
    category: 'E-commerce & Fashion',
    url: 'https://www.gasv.store/demos/fashion',
    description: 'High-converting online store with Paystack, Flutterwave, and Pi Network payments.',
    color: '#1A0000',
    features: ['Product Catalog', 'Cart & Direct Checkout', 'WhatsApp Order Link']
  },
  {
    id: 'web-2',
    title: 'Lagos Prime Properties',
    category: 'Real Estate & Properties',
    url: 'https://www.gasv.store/demos/realestate',
    description: 'Luxury real estate showcase with interactive listing filter and appointment booking.',
    color: '#0A1931',
    features: ['Property Video Tours', 'Inspection Booking', 'Agent Contact Form']
  },
  {
    id: 'web-3',
    title: 'Gourmet Cafe & Bistro',
    category: 'Restaurant & Hospitality',
    url: 'https://www.gasv.store/demos/restaurant',
    description: 'Online food menu, table reservation, and instant WhatsApp food delivery ordering.',
    color: '#1c1917',
    features: ['Digital Menu', 'Online Reservations', 'Food Delivery Checkout']
  },
  {
    id: 'web-4',
    title: 'Apex Financial Advisors',
    category: 'Corporate & Consulting',
    url: 'https://www.gasv.store/demos/consulting',
    description: 'Trust-building corporate website with client booking calendar and lead magnets.',
    color: '#030712',
    features: ['Client Booking', 'Case Studies', 'Newsletter Capture']
  },
  {
    id: 'web-5',
    title: 'EcoClean Auto Services',
    category: 'Automotive & Repairs',
    url: 'https://www.gasv.store/demos/auto',
    description: 'Service pricing calculator, quote request form, and Google Maps location integration.',
    color: '#022c22',
    features: ['Service Cost Estimator', 'Map & Directions', 'Customer Reviews']
  },
  {
    id: 'web-6',
    title: 'Dr. Alabi Dental & Care',
    category: 'Healthcare & Clinic',
    url: 'https://www.gasv.store/demos/health',
    description: 'Patient appointment scheduling system, doctor profiles, and emergency hotline.',
    color: '#0f172a',
    features: ['Instant Appointment', 'Doctor Schedule', 'Patient Portal']
  }
];

export const BOT_DEMO_SAMPLES: BotDemoSample[] = [
  {
    id: 'bot-1',
    name: 'WhatsApp Customer Care & Sales Bot',
    platform: 'WhatsApp AI',
    samplePrompt: 'How much is business registration and what documents do I need?',
    initialMessage: 'Hello! I am GOYE AI Assistant. Business Name registration is ₦30,000 ($18 ~ 47.3 Pi). All I need from you is your proposed Business Name and ID card. Would you like to start now?',
    description: 'Automatically handles FAQs, collects client requirements, generates invoices, and sends WhatsApp booking links.'
  },
  {
    id: 'bot-2',
    name: 'Instagram & Facebook DM Sales Closing Bot',
    platform: 'Instagram Sales',
    samplePrompt: 'Do you have this dress in red size M?',
    initialMessage: 'Yes! We have Red Size M in stock for ₦25,000. You can pay with Card, Transfer, or Pi Coin. Should I reserve one for you now?',
    description: 'Responds instantly to product inquiries in DMs, sends product photos, and collects shipping addresses.'
  },
  {
    id: 'bot-3',
    name: 'AI Content & Auto-Posting Bot for SMEs',
    platform: 'AI Content Auto-Poster',
    samplePrompt: 'Generate 5 promotional posts for my CAC agency for this week.',
    initialMessage: 'Done! Generated 5 high-converting posts with graphic ideas, hashtags, and CTA pointing to your website. Scheduled for Mon-Fri 9:00 AM.',
    description: 'Generates promotional content tailored to your brand tone and automatically posts to your social accounts.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Chief Emeka Okafor',
    business: 'Okafor Global Logistics Ltd',
    location: 'Lagos, Nigeria',
    quote: 'GOYE registered my Limited Company in 5 days and delivered the original CAC certificate and Tax ID to my office. Professional and fast!',
    rating: 5,
    service: 'CAC LTD Registration'
  },
  {
    id: 't-2',
    clientName: 'Mrs. Funmi Adebayo',
    business: 'Funmi Luxe Couture',
    location: 'Abuja, Nigeria',
    quote: 'The 48-hour website and WhatsApp AI bot changed my business. The bot answers customers at midnight and takes orders. I saved ₦100k!',
    rating: 5,
    service: '3-in-1 Bundle'
  },
  {
    id: 't-3',
    clientName: 'Pioneer Crypto Trader @Pi_Pioneer_Naija',
    business: 'Goye Pioneer Merchant',
    location: 'Port Harcourt, Nigeria',
    quote: 'Paid 368 Pi for the complete bundle. Payment was verified on Pi Network within 2 minutes! Website and CAC done effortlessly.',
    rating: 5,
    service: 'Pi Network Payment'
  }
];

export const FAQS = [
  {
    question: "How fast is CAC Business Registration?",
    answer: "Business Name registration is completed in 3 working days after CAC name availability approval. Limited Company (LTD) takes 5 to 7 working days. You receive your original CAC Certificate, Status Report, and Tax ID (TIN)."
  },
  {
    question: "Can I pay with Pi Network Coins?",
    answer: "Yes! GOYE SERVICES HUB fully supports Pi Network payments directly inside Pi Browser or standard browsers. Dynamic prices: CAC (47.3 Pi), Website (131.5 Pi), AI Bot (236.8 Pi), 3-in-1 Bundle (368 Pi)."
  },
  {
    question: "How does the AI Bot work for my business?",
    answer: "We train a custom AI model on your specific products, prices, and services. The bot installs on your website or links directly to your WhatsApp. It answers questions 24/7, captures lead details (name, phone, order), and hands over to you when ready."
  },
  {
    question: "Is my CAC Certificate authentic and verifiable?",
    answer: "100% Yes. We are official accredited CAC registration agents under Goyedagosmess Enterprise RC BN3583773. You can verify your certificate directly on the official CAC portal search page using your RC/BN number."
  },
  {
    question: "What is included in the Website package?",
    answer: "You get a 5-page responsive website, free custom domain (.com or .com.ng), free SSL security certificate, business email address, logo design, and Paystack / Flutterwave / Pi Network payment integration."
  }
];
