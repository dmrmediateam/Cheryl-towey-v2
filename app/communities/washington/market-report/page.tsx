import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Washington NJ Real Estate Market Report 2025 | Home Values & Trends',
  description: 'Washington NJ housing market report for 2025. Current home values, market trends, days on market, school ratings & neighborhood insights. Expert analysis by Cheryl Towey, Weichert Realtors.',
  keywords: [
    'Washington NJ real estate market',
    'Washington Borough home values 2025',
    'Washington housing market trends',
    'Warren County NJ real estate',
    'Washington homes for sale',
    'Washington market analysis',
    'Northwest NJ housing market',
    'Washington Township NJ',
    'Washington Borough property values',
  ],
  openGraph: {
    title: 'Washington NJ Real Estate Market Report 2025 | Cheryl Towey',
    description: 'Expert analysis of Washington housing market: home values, trends, schools & lifestyle. Your guide to buying or selling in Warren County NJ.',
    url: 'https://www.realestatebycherylnj.com/communities/washington/market-report',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington NJ Market Report 2025',
    description: 'Current home values, market trends & expert insights for Washington real estate.',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/communities/washington/market-report',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Washington, Warren County, New Jersey',
    'geo.position': '40.7587;-74.9793',
    'ICBM': '40.7587, -74.9793',
  },
};

// Structured Data for Market Report Article
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Washington NJ Real Estate Market Report 2025',
  description: 'Comprehensive analysis of Washington housing market including home values, trends, schools, and neighborhood insights.',
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
    '@id': 'https://www.realestatebycherylnj.com/communities/washington/market-report',
  },
  about: {
    '@type': 'Place',
    name: 'Washington, New Jersey',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Washington',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  },
};

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Cheryl Towey - Washington Real Estate Expert',
  description: 'Expert real estate services in Washington Borough and Warren County NJ. Specializing in historic homes, starter properties, and personalized buyer/seller guidance.',
  areaServed: {
    '@type': 'City',
    name: 'Washington',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Warren County, New Jersey',
    },
  },
  url: 'https://www.realestatebycherylnj.com/communities/washington',
  telephone: '+1-908-619-7444',
  priceRange: '$-$$$',
};

export default function WashingtonMarketReport() {
  const marketStats = [
    { label: 'Median Home Price', value: '$325,000' },
    { label: 'Average Days on Market', value: '30-38 Days' },
    { label: 'Active Listings', value: '30-40' },
    { label: 'Year-over-Year Change', value: '+3.5%' },
  ];

  const schoolData = [
    { name: 'Washington Borough School', grades: 'PreK-8', rating: '5/10', focus: 'Community Focus' },
    { name: 'Warren Hills Regional', grades: '9-12', rating: '6/10', focus: 'Comprehensive Programs' },
  ];

  const neighborhoodHighlights = [
    { area: 'Downtown Washington', description: 'Historic Main Street with Victorian homes and walkable amenities', priceRange: '$250K-$400K' },
    { area: 'Broadway Area', description: 'Established residential streets with larger lots and mature trees', priceRange: '$300K-$450K' },
    { area: 'Outskirts', description: 'Newer developments and properties bordering Washington Township', priceRange: '$350K-$500K' },
  ];

  const relatedReports = [
    { name: 'Hackettstown', path: '/communities/hackettstown/market-report', description: 'Neighboring Warren County community' },
    { name: 'Blairstown', path: '/communities/blairstown/market-report', description: 'Rural Warren County alternative' },
    { name: 'Chester', path: '/communities/chester/market-report', description: 'Morris County comparison' },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: 'Washington', url: '/communities/washington' },
          { name: 'Market Report', url: '/communities/washington/market-report' },
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
            Washington Borough Market Report
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">2025 Market Analysis</span>
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl mb-6">
            Washington Borough represents one of Warren County's best values for homebuyers seeking small-town character, historic charm, and affordability. This 2025 market report from Cheryl Towey examines current conditions in this compact yet vibrant community where tree-lined streets, Victorian architecture, and genuine neighborly connections create an appealing alternative to more expensive markets. Whether you're a first-time buyer or downsizing from a larger property, Washington offers compelling opportunities.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/listings?search=Washington" 
              className="btn-primary"
            >
              View Washington Properties
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
              Washington Borough's real estate market in 2025 offers exceptional value within Warren County, with median home prices around $325,000—significantly lower than neighboring <Link href="/communities/hackettstown/market-report" className="text-secondary hover:underline">Hackettstown</Link> or the more upscale <Link href="/communities/chester/market-report" className="text-secondary hover:underline">Chester</Link> market. This affordability makes Washington particularly attractive to first-time buyers, young families, and anyone seeking to maximize living space per dollar spent.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Properties typically spend 30-38 days on market, allowing buyers reasonable time for consideration without the pressure of instant decisions required in hotter markets. Year-over-year appreciation of 3.5% reflects steady, sustainable growth—homeowners build equity while the market remains accessible to new buyers entering at various price points.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              The borough's compact size—roughly one square mile—creates a tight-knit community where neighbors know each other and local businesses recognize regular customers. Active listings typically range from 30-40 homes, providing selection across housing types from cozy bungalows to stately Victorians without the overwhelming inventory that can paralyze decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Washington Neighborhoods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {neighborhoodHighlights.map((area, index) => (
              <div key={index} className="scroll-animate bg-white p-6 rounded-sm shadow-sm">
                <h3 className="text-xl font-serif font-light text-secondary mb-3">{area.area}</h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-3">{area.description}</p>
                <p className="text-xs uppercase tracking-widest text-black">{area.priceRange}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Downtown Washington along Main Street showcases the borough's historic character, with Victorian homes featuring original details like wraparound porches, decorative trim, and established gardens. These properties appeal to buyers who appreciate architectural history and enjoy walkable access to local shops, restaurants, and the seasonal farmers market.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Residential streets throughout the borough offer a mix of housing styles and eras. Cape Cods, colonials, and split-levels from mid-century construction provide move-in ready options, while periodic renovations bring updated systems and modern amenities to older housing stock. The Broadway area in particular features larger lots and mature landscaping that creates established neighborhood character.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Properties along the borough's edges sometimes offer larger lots and newer construction, appealing to buyers seeking more space while remaining within Washington's community. These homes bridge the gap between borough walkability and the more rural character found in surrounding <Link href="/communities/blairstown/market-report" className="text-secondary hover:underline">Blairstown</Link> or Washington Township.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Washington Schools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
              Washington Borough School serves students through eighth grade in a community-centered environment where teachers know students and families personally. The small scale allows for individualized attention and strong parent involvement. While standardized metrics may not match top-rated districts, many families value the personal connections and community investment the school provides.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              High school students attend Warren Hills Regional, a comprehensive high school serving several Warren County communities. The school offers diverse academic tracks, athletics, and extracurricular activities, preparing students for both college and career pathways. The regional arrangement provides resources a small borough couldn't independently support.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Families prioritizing school ratings often consider Washington for its value, then evaluate whether the educational fit matches their needs. Some families find the community-oriented atmosphere perfect for their children; others ultimately choose areas like <Link href="/communities/hackettstown/market-report" className="text-secondary hover:underline">Hackettstown</Link> with different educational options. I can provide detailed information to help you make this important decision.
            </p>
          </div>
        </div>
      </section>

      {/* Living in Washington */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Living in Washington Borough
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Washington Borough delivers authentic small-town living rarely found in modern New Jersey. Main Street remains a genuine downtown with locally-owned businesses, not a nostalgic recreation. Residents pop into the hardware store, grab coffee at neighborhood spots, and attend community events at the Warren County Farmers Fair—one of New Jersey's oldest agricultural fairs, held annually since 1859.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The borough's walkability sets it apart from more car-dependent communities. Children can safely walk or bike to school, friends, and activities. Adults stroll to restaurants, shops, and parks without constant driving. This pedestrian-friendly character appeals to buyers tired of suburban isolation, offering social connections that develop naturally in compact communities.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Outdoor recreation surrounds Washington. The Musconetcong River provides fishing and kayaking, while numerous parks and trails offer hiking within short drives. The Delaware Water Gap lies 20 minutes west for more adventurous outings. Like nearby <Link href="/communities/byram/market-report" className="text-secondary hover:underline">Byram</Link> with its lakes, Washington residents embrace outdoor lifestyles—just without the water-focused communities.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Commuters access Route 31 and Route 57 for connections to I-78 and employment centers throughout the region. While commute times vary based on destination, many Washington residents accept slightly longer drives in exchange for significantly lower housing costs and genuine community character. Remote work has further enhanced Washington's appeal for professionals no longer tied to daily office presence.
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
                  <span>Historic homes may need updates—budget for inspections and improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Walkability varies by location—visit during different times of day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Compare total costs with neighboring communities for true value assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>First-time buyer programs may apply—ask about available assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-secondary mb-4">For Sellers</h3>
              <ul className="space-y-3 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Highlight walkability and community character in marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Historic details appeal to buyers—showcase original features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Competitive pricing attracts serious buyers quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Address deferred maintenance before listing for best results</span>
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
            Comparing communities across Northwest New Jersey? These reports provide market insights for neighboring areas to help you find your ideal fit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReports.map((report, index) => (
              <Link 
                key={index}
                href={report.path}
                className="scroll-animate block bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-serif font-light text-secondary mb-2">{report.name} Market Report</h3>
                <p className="text-sm text-gray-dark">{report.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Discover Washington Borough
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Washington's combination of affordability, historic character, and genuine community creates opportunities often overlooked by buyers focused solely on metrics. Let me show you what makes this borough special and help you find your place in this welcoming community.
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
              Explore All Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
