// Structured Data / Schema.org utilities for SEO and LLM discovery

export const businessData = {
  name: 'Cheryl Towey - Real Estate Agent NJ | Weichert Realtors',
  agentName: 'Cheryl Towey',
  company: 'Weichert Realtors',
  description: 'Expert real estate services in Northwest New Jersey - Licensed Real Estate Agent in Morris Plains, NJ',
  url: 'https://www.realestatebycherylnj.com',
  phone: '+1-908-334-0971',
  email: 'cheryl@weichert.com', // Update with actual email if available
  address: {
    streetAddress: '1625 NJ-10 East',
    addressLocality: 'North Eastern NJ',
    addressRegion: 'New Jersey',
    postalCode: '07950',
    addressCountry: 'US',
  },

  areaServed: [
    'Hackettstown',
    'Andover',
    'Byram',
    'Blairstown',
    'Chester',
    'Washington',
    'Sussex County',
    'Warren County',
    'Morris County',
    'New Jersey',
  ],
  knowsAbout: [
    'Residential Real Estate',
    'Home Buying',
    'Home Selling',
    'Property Valuation',
    'Market Analysis',
    'Real Estate Investment',
  ],
  sameAs: [
    'https://facebook.com/cheryltoweyreallestate', // Update
    'https://linkedin.com/in/cheryltoweyreallestate', // Update
    'https://instagram.com/cheryltoweyreallestate', // Update
  ],
  businessHours: {
    monday: '09:00-17:00',
    tuesday: '09:00-17:00',
    wednesday: '09:00-17:00',
    thursday: '09:00-17:00',
    friday: '09:00-17:00',
    saturday: '10:00-15:00',
    sunday: 'closed',
  },
  priceRange: '$$$',
};

export const communities = [
  {
    name: 'Hackettstown',
    slug: 'hackettstown',
    county: 'Warren',
    population: 10143,
    medianPrice: 465000,
    distanceFromNYC: '50 miles',
  },
  {
    name: 'Andover',
    slug: 'andover',
    county: 'Sussex',
    population: 7000,
    medianPrice: 485000,
    distanceFromNYC: '40 miles',
  },
  {
    name: 'Byram',
    slug: 'byram',
    county: 'Sussex',
    population: 8082,
    medianPrice: 455000,
    distanceFromNYC: '50 miles',
  },
  {
    name: 'Blairstown',
    slug: 'blairstown',
    county: 'Warren',
    population: 6000,
    medianPrice: 435000,
    distanceFromNYC: '65 miles',
  },
  {
    name: 'Chester',
    slug: 'chester',
    county: 'Morris',
    population: 9400,
    medianPrice: 525000,
    distanceFromNYC: '55 miles',
  },
  {
    name: 'Washington',
    slug: 'washington',
    county: 'Warren',
    population: 14575,
    medianPrice: 415000,
    distanceFromNYC: '45 miles',
  },
];

// ==================== SCHEMA GENERATORS ====================

/**
 * Real Estate Agent Schema
 * Used on homepage and agent profile page
 */
export function getRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${businessData.url}/#agent`,
    name: businessData.agentName,
    image: businessData.image,
    description: businessData.description,
    url: businessData.url,
    telephone: businessData.phone,
    email: businessData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating.ratingValue,
      reviewCount: businessData.rating.reviewCount,
    },
    areaServed: businessData.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    knowsAbout: businessData.knowsAbout,
    sameAs: businessData.sameAs,
    priceRange: businessData.priceRange,
    worksFor: {
      '@type': 'RealEstateOffice',
      name: businessData.company,
    },
  };
}

/**
 * Organization/LocalBusiness Schema
 * Used on homepage for local business discovery
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${businessData.url}/#business`,
    name: businessData.name,
    image: businessData.image,
    description: businessData.description,
    url: businessData.url,
    telephone: businessData.phone,
    email: businessData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating.ratingValue,
      reviewCount: businessData.rating.reviewCount,
    },
    areaServed: businessData.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    sameAs: businessData.sameAs,
  };
}

/**
 * BreadcrumbList Schema
 * Used for navigation hierarchy
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage Schema
 * Used for FAQ sections
 */
export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * LocalArea / Place Schema
 * Used on community pages
 */
export function getCommunitySchema(community: {
  name: string;
  slug: string;
  county: string;
  population: number;
  medianPrice: number;
  distanceFromNYC: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    '@id': community.url,
    name: community.name,
    description: community.description,
    url: community.url,
    areaServed: community.county,
    location: {
      '@type': 'Place',
      name: `${community.name}, NJ`,
    },
    demographics: {
      '@type': 'Thing',
      population: community.population,
      medianPrice: community.medianPrice,
    },
  };
}

/**
 * RealEstateProperty Schema
 * Used on individual property pages
 */
export function getPropertySchema(property: {
  name: string;
  description: string;
  url: string;
  price: number;
  priceCurrency?: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  floorSize: number;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  image: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateProperty',
    '@id': property.url,
    name: property.name,
    description: property.description,
    url: property.url,
    image: property.image,
    price: property.price,
    priceCurrency: property.priceCurrency || 'USD',
    numberOfBedrooms: property.numberOfBedrooms,
    numberOfBathrooms: property.numberOfBathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      unitCode: 'FT2',
      value: property.floorSize,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.streetAddress,
      addressLocality: property.addressLocality,
      addressRegion: property.addressRegion,
      postalCode: property.postalCode,
      addressCountry: 'US',
    },
    ...(property.latitude &&
      property.longitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: property.latitude,
          longitude: property.longitude,
        },
      }),
    agent: {
      '@type': 'RealEstateAgent',
      name: businessData.agentName,
      url: businessData.url,
    },
  };
}

/**
 * AggregateOffer Schema
 * Used for property listings overview
 */
export function getAggregateOfferSchema(properties: {
  count: number;
  minPrice: number;
  maxPrice: number;
  currency?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    '@id': `${businessData.url}/properties`,
    name: 'Available Properties',
    priceCurrency: properties.currency || 'USD',
    lowPrice: properties.minPrice,
    highPrice: properties.maxPrice,
    offerCount: properties.count,
    url: `${businessData.url}/properties`,
  };
}

/**
 * Article/BlogPost Schema
 * Used for market reports and blog posts
 */
export function getArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': article.url,
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || businessData.agentName,
    },
    publisher: {
      '@type': 'Organization',
      name: businessData.company,
      logo: businessData.image,
    },
  };
}

/**
 * Organization Schema
 * For broader organizational context
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${businessData.url}/#organization`,
    name: businessData.company,
    url: businessData.url,
    logo: businessData.image,
    description: businessData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address.streetAddress,
      addressLocality: businessData.address.addressLocality,
      addressRegion: businessData.address.addressRegion,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: businessData.phone,
      email: businessData.email,
    },
    sameAs: businessData.sameAs,
  };
}

/**
 * WebSite Schema
 * For site-wide search capability
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessData.url}/#website`,
    url: businessData.url,
    name: businessData.name,
    description: businessData.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${businessData.url}/properties?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
