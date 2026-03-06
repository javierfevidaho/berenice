import type { Translation } from "./types";

export const en: Translation = {
  navbar: {
    links: [
      { label: "Services", href: "/#services" },
      { label: "Why Us", href: "/#why-us" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Service Areas", href: "/#areas" },
      { label: "Contact", href: "/#contact" },
    ],
    freeQuote: "Free Quote",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },

  hero: {
    badge: "20 Years of Professional Experience · Boise, Idaho",
    h1_plain: "Professional",
    h1_highlight: "Cleaning Services",
    h1_location: "in Boise, Idaho",
    description:
      "Trusted house cleaning, office cleaning, and commercial cleaning across Boise, Nampa, Caldwell, Meridian and the entire Treasure Valley. Bilingual · Insured · Affordable.",
    cta_quote: "Get Free Quote",
    cta_call: "📞 Call Now —",
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "500+", label: "Happy Clients" },
      { value: "5★", label: "Average Rating" },
      { value: "English / Spanish", label: "Bilingual Service" },
    ],
    badges: [
      "✅ Insured & Bonded",
      "📍 Locally Owned",
      "🌎 English / Español",
      "💰 Affordable Rates",
    ],
  },

  services: {
    badge: "What We Do",
    h2: "House Cleaning Boise ID & Beyond",
    description:
      "From regular home cleaning to large-scale commercial jobs, Berenice's Sparkle Clean has the experience and dedication to get it done right.",
    learnMore: "Learn more",
    cta: "Get a Free Quote on Any Service",
    items: [
      {
        title: "House Cleaning",
        headline: "House Cleaning Boise ID",
        description:
          "Thorough top-to-bottom cleaning for homes of all sizes in Boise and surrounding areas.",
        shortDesc: "Reliable weekly, bi-weekly, or monthly home cleaning.",
      },
      {
        title: "Apartment Cleaning",
        headline: "Apartment Cleaning Boise Idaho",
        description:
          "Efficient and affordable apartment cleaning tailored for studios, 1BR, and 2BR+ units.",
        shortDesc: "Studio to multi-bedroom apartment cleaning services.",
      },
      {
        title: "Office Cleaning",
        headline: "Office Cleaning Nampa Idaho",
        description:
          "Keep your workspace spotless and professional. Daily, weekly, or monthly office cleaning in Boise and Nampa.",
        shortDesc: "Professional office cleaning on your schedule.",
      },
      {
        title: "Commercial Cleaning",
        headline: "Commercial Cleaning Caldwell & Meridian",
        description:
          "Large-scale commercial cleaning for businesses, retail stores, and facilities across Caldwell, Nampa, and Meridian.",
        shortDesc: "Scalable commercial cleaning for any business size.",
      },
      {
        title: "Move-In / Move-Out Cleaning",
        headline: "Move-In Move-Out Cleaning Boise ID",
        description:
          "Get your deposit back or start fresh. Complete move-in and move-out cleaning throughout Treasure Valley.",
        shortDesc: "Full cleaning so you get your deposit back.",
      },
      {
        title: "Deep Cleaning",
        headline: "Deep Cleaning Meridian Idaho",
        description:
          "Full deep-clean service for homes and offices that need extra attention — baseboards, appliances, and more.",
        shortDesc: "Top-to-bottom deep cleaning for stubborn grime.",
      },
    ],
  },

  whyUs: {
    badge: "Why Choose Us",
    h2: "Boise's Most Trusted Cleaning Service",
    description:
      "With 20+ years of experience, Berenice's Sparkle Clean is the name Treasure Valley families and businesses trust.",
    reasons: [
      {
        icon: "🛡️",
        title: "Fully Insured & Bonded",
        description:
          "Your home and belongings are protected. We carry full liability insurance and are bonded for your peace of mind.",
      },
      {
        icon: "✅",
        title: "Trusted & Background-Checked",
        description:
          "Every cleaner on our team is personally vetted by Berenice. 20 years of building trust with Idaho families.",
      },
      {
        icon: "💵",
        title: "Affordable & Transparent Pricing",
        description:
          "No hidden fees. We offer competitive cleaning prices for Boise, Nampa, Caldwell, and Meridian residents.",
      },
      {
        icon: "⚡",
        title: "Same-Day Service Available",
        description:
          "Need a last-minute clean? We offer same-day availability for residential and office cleaning across Treasure Valley.",
      },
      {
        icon: "🌎",
        title: "Bilingual — English & Spanish",
        description:
          "Berenice and her team are fully bilingual. We serve both English and Spanish-speaking clients throughout Idaho.",
      },
      {
        icon: "⭐",
        title: "100% Satisfaction Guarantee",
        description:
          "Not happy? We come back at no extra cost. We stand behind every cleaning service we provide.",
      },
    ],
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "500+", label: "Homes Cleaned" },
      { value: "100%", label: "Satisfaction Guarantee" },
      { value: "English / Español", label: "Bilingual Team" },
    ],
  },

  howItWorks: {
    badge: "Simple Process",
    h2: "How It Works",
    description: "Booking your cleaning service in Boise, Idaho has never been easier.",
    steps: [
      {
        number: "01",
        icon: "📅",
        title: "Book Online or Call",
        description:
          "Fill out our quick contact form or give us a call. Tell us your location (Boise, Nampa, Caldwell, Meridian…), service type, and preferred date. It takes less than 2 minutes.",
      },
      {
        number: "02",
        icon: "🧹",
        title: "We Clean Your Space",
        description:
          "Berenice's professional team arrives on time with all supplies. We clean thoroughly from top to bottom — every corner, every surface.",
      },
      {
        number: "03",
        icon: "😊",
        title: "You Enjoy a Sparkle-Clean Space",
        description:
          "Come home or walk into your office to a fresh, spotless environment. 100% satisfaction guaranteed — if anything is missed, we fix it free.",
      },
    ],
    cta: "Book Your Cleaning Now",
  },

  pricing: {
    badge: "Transparent Pricing",
    h2: "Affordable Cleaning Prices — Boise & Treasure Valley",
    description:
      "No hidden fees. No surprises. Just honest, affordable cleaning across Boise, Nampa, Caldwell, and Meridian Idaho.",
    mostPopular: "Most Popular",
    tiers: [
      {
        name: "Small Home / Studio",
        price: "From $80",
        subtitle: "Up to 700 sq ft",
        features: [
          "Kitchen & Bathrooms",
          "Vacuuming & Mopping",
          "Dusting all surfaces",
          "Trash removal",
          "1–2 Bedrooms",
        ],
        highlight: false,
        cta: "Book This Plan",
      },
      {
        name: "Medium Home",
        price: "From $130",
        subtitle: "700–1,500 sq ft",
        features: [
          "Everything in Small",
          "3 Bedrooms",
          "2 Bathrooms",
          "Living & Dining rooms",
          "Inside appliances on request",
        ],
        highlight: true,
        cta: "Book This Plan",
      },
      {
        name: "Large Home",
        price: "From $200",
        subtitle: "1,500–3,000+ sq ft",
        features: [
          "Everything in Medium",
          "4+ Bedrooms",
          "3+ Bathrooms",
          "Bonus rooms & basement",
          "Priority scheduling",
        ],
        highlight: false,
        cta: "Book This Plan",
      },
      {
        name: "Office / Commercial",
        price: "Custom Quote",
        subtitle: "Any size",
        features: [
          "Offices & break rooms",
          "Restrooms & lobbies",
          "Flexible schedule",
          "Daily / weekly / monthly",
          "Free on-site estimate",
        ],
        highlight: false,
        cta: "Get Custom Quote",
      },
    ],
    disclaimer:
      "* Prices vary based on home condition and location. Deep cleaning and move-in/out services may incur additional fees.",
    disclaimerLink: "Contact us for an exact quote.",
  },

  areas: {
    badge: "Where We Serve",
    h2: "Office Cleaning Nampa Idaho & All of Treasure Valley",
    description:
      "Berenice's Sparkle Clean proudly serves homeowners, renters, and businesses across the entire Treasure Valley area.",
    cities: [
      {
        name: "Boise",
        slug: "boise-cleaning-services",
        description:
          "Serving all Boise neighborhoods — North End, East End, Bench, Southwest Boise, and more.",
        icon: "🏙️",
        viewServices: "View services",
      },
      {
        name: "Nampa",
        slug: "nampa-cleaning-services",
        description:
          "Reliable house cleaning and office cleaning services throughout Nampa, Idaho.",
        icon: "🏘️",
        viewServices: "View services",
      },
      {
        name: "Caldwell",
        slug: "caldwell-cleaning-services",
        description:
          "Commercial cleaning Caldwell Idaho — offices, businesses, and residential homes.",
        icon: "🏡",
        viewServices: "View services",
      },
      {
        name: "Meridian",
        slug: "meridian-cleaning-services",
        description:
          "Affordable cleaning in Meridian Idaho — one of the fastest growing cities in the state.",
        icon: "✨",
        viewServices: "View services",
      },
    ],
    alsoServing: "Also Serving These Idaho Communities",
    otherAreas: [
      "Eagle, ID", "Star, ID", "Kuna, ID", "Garden City, ID",
      "Middleton, ID", "Parma, ID", "Notus, ID", "Wilder, ID",
      "All of Treasure Valley, ID",
    ],
    notSure: "Not sure if we cover your area?",
    contactUs: "Contact us",
    notSureEnd: "— we'll let you know right away.",
  },

  testimonials: {
    badge: "Reviews",
    h2: "What Treasure Valley Clients Say",
    description: "Real reviews from real clients in Boise, Nampa, and Meridian Idaho.",
    items: [
      {
        name: "Jennifer M.",
        location: "Boise, Idaho",
        avatar: "JM",
        rating: 5,
        service: "Weekly House Cleaning",
        text: "Berenice and her team are absolutely amazing! I've been using their cleaning services in Boise for over a year now and my house has never been cleaner. They are punctual, professional, and incredibly thorough. I especially love that they're bilingual — it makes communication so easy. Highly recommend for anyone in the Treasure Valley looking for reliable maid service!",
      },
      {
        name: "Carlos R.",
        location: "Nampa, Idaho",
        avatar: "CR",
        rating: 5,
        service: "Office Cleaning — Nampa",
        text: "We hired Berenice's Sparkle Clean for our small office in Nampa and the results have been outstanding. They come every week and our workspace is always spotless. The team is respectful and efficient. Affordable pricing for the quality you get. Best office cleaning Nampa Idaho has to offer!",
      },
      {
        name: "Lisa T.",
        location: "Meridian, Idaho",
        avatar: "LT",
        rating: 5,
        service: "Move-Out Deep Cleaning",
        text: "I needed a move-out deep cleaning in Meridian on very short notice and Berenice made it happen same day. The apartment looked brand new — I got my full deposit back! These ladies work incredibly hard and leave no corner untouched. The most affordable and reliable cleaning service in Meridian Idaho. 10/10 would hire again!",
      },
    ],
  },

  contact: {
    badge: "Free Quote",
    h2: "Get Your Free Cleaning Quote",
    description:
      "Serving Boise, Nampa, Caldwell, Meridian & all of Treasure Valley Idaho. We respond within 2 hours.",
    fields: {
      name: "Full Name *",
      phone: "Phone Number *",
      email: "Email Address *",
      serviceType: "Service Type *",
      city: "Your City *",
      date: "Preferred Date *",
      message: "Additional Details",
    },
    placeholders: {
      name: "Your name",
      phone: "(208) 555-0000",
      email: "you@email.com",
      serviceType: "Select a service…",
      city: "Select your city…",
      message:
        "Tell us about your home or office, any special requirements, approximate square footage…",
    },
    serviceOptions: [
      "House Cleaning",
      "Apartment Cleaning",
      "Office Cleaning",
      "Commercial Cleaning",
      "Move-In / Move-Out Cleaning",
      "Deep Cleaning",
    ],
    cityOptions: ["Boise", "Nampa", "Caldwell", "Meridian", "Eagle", "Star", "Kuna", "Other"],
    submit: "Get My Free Quote →",
    sending: "Sending…",
    success: "✅ Message sent! We'll contact you within 2 hours to confirm your cleaning.",
    error: "Something went wrong. Please call us directly at",
    privacy: "Your information is private and will never be shared. · Hablamos Español 🇲🇽",
  },

  footer: {
    description:
      "Professional house cleaning, office cleaning, and commercial cleaning in Boise, Nampa, Caldwell, Meridian, and the Treasure Valley, Idaho.",
    hours: "Mon–Fri 7am–7pm · Sat 8am–5pm",
    servicesTitle: "Services",
    areasTitle: "Service Areas",
    copyright: "All rights reserved. · Boise, Idaho",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
  },
};
