import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Andover NJ Real Estate Market Report 2025 | Home Values & Trends',
  description: 'Andover NJ housing market report for 2025. Current home values, market trends, days on market, school ratings & neighborhood insights. Expert analysis by Cheryl Towey, Weichert Realtors.',
  keywords: [
    'Andover NJ real estate market',
    'Andover home values 2025',
    'Andover housing market trends',
    'Sussex County NJ real estate',
    'Andover homes for sale',
    'Andover market analysis',
    'Northwest NJ housing market',
    'Andover Township schools',
    'Andover property values',
  ],
  openGraph: {
    title: 'Andover NJ Real Estate Market Report 2025 | Cheryl Towey',
    description: 'Expert analysis of Andover housing market: home values, trends, schools & lifestyle. Your guide to buying or selling in Sussex County NJ.',
    url: 'https://www.realestatebycherylnj.com/communities/andover/market-report',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andover NJ Market Report 2025',
    description: 'Current home values, market trends & expert insights for Andover real estate.',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/communities/andover/market-report',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Andover, Sussex County, New Jersey',
    'geo.position': '40.9887;-74.7432',
    'ICBM': '40.9887, -74.7432',
  },
};

// Structured Data for Market Report Article
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Andover NJ Real Estate Market Report 2025',
  description: 'Comprehensive analysis of Andover housing market including home values, trends, schools, and neighborhood insights.',
  author: {
    '@type': 'RealEstateAgent',
    name: 'Cheryl Towey',
    jobTitle: 'Licensed Real Estate Agent',
    worksFor: {
      '@type': 'RealEstateOrganization',
      name: 'Weichert Realtors',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Real Estate by Cheryl NJ',
    url: 'https://www.realestatebycherylnj.com',
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatebycherylnj.com/communities/andover/market-report',
  },
  about: {
    '@type': 'Place',
    name: 'Andover, New Jersey',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Andover',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  },
};

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Cheryl Towey - Andover Real Estate Expert',
  description: 'Expert real estate services in Andover and Sussex County NJ. Specializing in residential properties, market analysis, and personalized buyer/seller guidance.',
  areaServed: {
    '@type': 'City',
    name: 'Andover',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Sussex County, New Jersey',
    },
  },
  url: 'https://www.realestatebycherylnj.com/communities/andover',
  telephone: '+1-908-619-7444',
  priceRange: '$$-$$$$',
};

export default function AndoverMarketReport() {
  const marketStats = [
    { label: 'Median Home Price', value: '$425,000' },
    { label: 'Average Days on Market', value: '28-35 Days' },
    { label: 'Active Listings', value: '45-55' },
    { label: 'Year-over-Year Change', value: '+4.2%' },
  ];

  const schoolData = [
    { name: 'Byram Lakes Elementary', grades: 'K-5', rating: '7/10', focus: 'STEM Programs' },
    { name: 'Hillside Elementary', grades: 'K-5', rating: '6/10', focus: 'Arts Integration' },
    { name: 'Lenape Valley Regional', grades: '9-12', rating: '7/10', focus: 'College Prep & Vocational' },
  ];

  const neighborhoodHighlights = [
    { area: 'Lake Iliff', description: 'Lakefront living with private beach access and recreational amenities' },
    { area: 'Andover Borough', description: 'Historic downtown charm with walkable shops and restaurants' },
    { area: 'Andover Township', description: 'Spacious lots with mountain views and rural character' },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: 'Andover', url: '/communities/andover' },
          { name: 'Market Report', url: '/communities/andover/market-report' },
        ]}
      />
      <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Andover Real Estate Market Report
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">2025 Market Analysis</span>
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl mb-6">
            Discover what's happening in Andover's real estate market with this comprehensive 2025 analysis from Cheryl Towey, your trusted Weichert Realtors professional. Nestled in the scenic highlands of Sussex County, Andover combines lakeside tranquility with convenient access to major highways. Whether you're considering purchasing your first home or selling your current property, this report provides the insights you need to make informed decisions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/listings?search=Andover" 
              className="btn-primary"
            >
              View Andover Properties
            </Link>
            <Link 
              href="/contact" 
              className="btn-outline"
            >
              Get Personalized Report
            </Link>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Current Market Overview
          </h2>
          
          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The Andover real estate market in 2025 reflects a healthy balance between buyer opportunity and seller advantage. With median home prices hovering around $425,000, the area remains more affordable than neighboring <Link href="/communities/byram/market-report" className="text-secondary hover:underline">Byram Township</Link> while offering exceptional value for the lifestyle it provides. Properties typically spend 28-35 days on market, indicating steady demand without the frenzied pace seen in some North Jersey markets.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Year-over-year appreciation of approximately 4.2% demonstrates consistent growth that rewards homeowners while keeping the market accessible for new buyers. The current inventory of 45-55 active listings provides reasonable selection across price points, from starter homes in the mid-$200,000s to luxury lakefront properties exceeding $800,000.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Andover's appeal stems from its dual nature: Andover Township offers expansive lots and rural character perfect for those seeking space, while Andover Borough provides a charming downtown experience with local shops and restaurants within walking distance. This diversity attracts everyone from young families to retirees seeking a peaceful yet connected lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Neighborhood Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {neighborhoodHighlights.map((area, index) => (
              <div key={index} className="scroll-animate bg-white p-6 rounded-sm shadow-sm">
                <h3 className="text-xl font-serif font-light text-secondary mb-3">{area.area}</h3>
                <p className="text-sm text-gray-dark leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Lake Iliff stands out as one of Andover's premier neighborhoods, offering waterfront living with private beach access, boating, and fishing opportunities. Homes here command premium prices but deliver an unmatched lifestyle for outdoor enthusiasts and families seeking summer recreation steps from their door.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Throughout Andover Township, you'll find properties ranging from cozy ranches on wooded lots to sprawling custom homes with mountain views and acreage. Many homes feature well water and septic systems, appealing to buyers who value self-sufficiency and lower utility costs. The area's natural beauty, including proximity to Kittatinny Valley State Park, adds lasting appeal for nature lovers and outdoor recreation enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Andover Schools: Education in a Community Setting
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {schoolData.map((school, index) => (
              <div key={index} className="scroll-animate bg-gray-light p-6 rounded-sm">
                <h3 className="text-xl font-serif font-light text-black mb-2">{school.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-dark">Grades: {school.grades}</span>
                  <span className="text-sm font-medium text-secondary">{school.rating}</span>
                </div>
                <p className="text-sm text-gray-dark">{school.focus}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Andover students benefit from the smaller class sizes and community-focused approach typical of Sussex County schools. Elementary students attend either Byram Lakes or Hillside Elementary, both offering strong foundational programs with student-teacher ratios that allow for individualized attention.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Lenape Valley Regional High School serves students from Andover and surrounding communities, providing both college preparatory and vocational tracks. The school's location offers students a tight-knit experience while still providing diverse extracurricular activities, sports programs, and academic opportunities.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              For families considering private education, several options exist within a reasonable commute, including Blair Academy in Blairstown and various parochial schools in the region. The balance of quality public education with accessible private alternatives gives Andover families flexibility in their children's educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Living in Andover */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            What It's Like to Live in Andover
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Living in Andover means embracing a lifestyle where nature and community take center stage. Residents enjoy a slower pace compared to urban areas, yet remain connected via Routes 206 and 80 to employment centers throughout New Jersey and New York. The average commute to Newark is approximately 50 minutes, while many residents find employment closer to home in the growing Sussex County job market.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The community hosts several annual events that bring neighbors together, including summer concerts, holiday celebrations, and the popular farmers market season. Andover Borough's downtown offers local dining, antique shops, and community gathering spots that foster the small-town connections many families seek.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Outdoor recreation defines much of Andover life. Kittatinny Valley State Park provides miles of hiking and biking trails, while numerous lakes offer swimming, fishing, and boating throughout the warmer months. Winter brings opportunities for cross-country skiing and ice fishing, ensuring year-round appeal for active families.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Property taxes in Andover, while a consideration like anywhere in New Jersey, reflect the value of maintaining quality schools and community services. Many homeowners find the trade-off worthwhile given the quality of life, safety, and natural beauty the area provides.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer and Seller Insights */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Insights for Buyers and Sellers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-secondary mb-4">For Buyers</h3>
              <ul className="space-y-3 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Consider properties during late fall and winter when competition typically decreases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Well and septic inspections are essential—budget accordingly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Lake community homes often include HOA fees covering beach and recreation access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Act promptly on well-priced homes—Andover's market moves steadily</span>
                </li>
              </ul>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-secondary mb-4">For Sellers</h3>
              <ul className="space-y-3 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Spring listings benefit from showcasing outdoor spaces and lake access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Pre-inspections of well and septic can prevent deal delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Highlight proximity to parks and recreational opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Competitive pricing remains key—overpriced homes linger in this market</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Market Reports */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Explore Nearby Market Reports
          </h2>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
            Considering other communities in Northwest New Jersey? Compare market trends across the region to find your perfect fit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/communities/byram/market-report"
              className="scroll-animate block bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif font-light text-secondary mb-2">Byram Market Report</h3>
              <p className="text-sm text-gray-dark">Lake communities in Sussex County</p>
            </Link>
            <Link 
              href="/communities/hackettstown/market-report"
              className="scroll-animate block bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif font-light text-secondary mb-2">Hackettstown Market Report</h3>
              <p className="text-sm text-gray-dark">Warren County's vibrant hub</p>
            </Link>
            <Link 
              href="/communities/blairstown/market-report"
              className="scroll-animate block bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif font-light text-secondary mb-2">Blairstown Market Report</h3>
              <p className="text-sm text-gray-dark">Rural Warren County charm</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Partner with Cheryl Towey for Andover Real Estate
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you're buying your first home, upgrading to lake living, or selling your Andover property, I provide the local expertise and personalized guidance you deserve. Contact me for a detailed market analysis specific to your neighborhood or property type.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Get Your Market Analysis
            </Link>
            <Link 
              href="/communities" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Explore Other Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
