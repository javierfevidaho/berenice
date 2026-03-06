export type Lang = "en" | "es";

export interface NavbarT {
  links: { label: string; href: string }[];
  freeQuote: string;
  closeMenu: string;
  openMenu: string;
}

export interface HeroT {
  badge: string;
  h1_plain: string;
  h1_highlight: string;
  h1_location: string;
  description: string;
  cta_quote: string;
  cta_call: string;
  stats: { value: string; label: string }[];
  badges: string[];
}

export interface ServiceItem {
  title: string;
  headline: string;
  description: string;
  shortDesc: string;
}

export interface ServicesT {
  badge: string;
  h2: string;
  description: string;
  items: ServiceItem[];
  learnMore: string;
  cta: string;
}

export interface WhyUsT {
  badge: string;
  h2: string;
  description: string;
  reasons: { icon: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export interface HowItWorksT {
  badge: string;
  h2: string;
  description: string;
  steps: { number: string; icon: string; title: string; description: string }[];
  cta: string;
}

export interface PricingTier {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export interface PricingT {
  badge: string;
  h2: string;
  description: string;
  mostPopular: string;
  tiers: PricingTier[];
  disclaimer: string;
  disclaimerLink: string;
}

export interface CityCard {
  name: string;
  slug: string;
  description: string;
  icon: string;
  viewServices: string;
}

export interface AreasT {
  badge: string;
  h2: string;
  description: string;
  cities: CityCard[];
  alsoServing: string;
  otherAreas: string[];
  notSure: string;
  contactUs: string;
  notSureEnd: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  service: string;
  text: string;
}

export interface TestimonialsT {
  badge: string;
  h2: string;
  description: string;
  items: TestimonialItem[];
}

export interface ContactT {
  badge: string;
  h2: string;
  description: string;
  fields: {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    city: string;
    date: string;
    message: string;
  };
  placeholders: {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    city: string;
    message: string;
  };
  serviceOptions: string[];
  cityOptions: string[];
  submit: string;
  sending: string;
  generating: string;
  privacy: string;
  // Success modal
  successTitle: string;
  successSubtitle: string;
  refLabel: string;
  sendToBerenice: string;
  sendCopy: string;
  downloadPdf: string;
  newQuote: string;
  // PDF labels
  pdf: {
    title: string;
    subtitle: string;
    quoteRequest: string;
    ref: string;
    date: string;
    clientInfo: string;
    serviceDetails: string;
    labelName: string;
    labelPhone: string;
    labelEmail: string;
    labelService: string;
    labelCity: string;
    labelDate: string;
    labelNotes: string;
    noNotes: string;
    footer: string;
    guarantee: string;
    validDays: string;
  };
  // WhatsApp message labels
  wa: {
    bereniceHeader: string;
    clientSection: string;
    serviceSection: string;
    notesSection: string;
    clientHeader: string;
    clientGreeting: string;
    clientSummary: string;
    questions: string;
  };
}

export interface FooterT {
  description: string;
  hours: string;
  servicesTitle: string;
  areasTitle: string;
  copyright: string;
  privacyPolicy: string;
  terms: string;
  contact: string;
}

export interface Translation {
  navbar: NavbarT;
  hero: HeroT;
  services: ServicesT;
  whyUs: WhyUsT;
  howItWorks: HowItWorksT;
  pricing: PricingT;
  areas: AreasT;
  testimonials: TestimonialsT;
  contact: ContactT;
  footer: FooterT;
}
