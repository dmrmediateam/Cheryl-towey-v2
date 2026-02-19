import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Chester NJ Real Estate Market Report 2025 | Home Values & Trends',
  description: 'Chester NJ housing market report for 2025. Current home values, market trends, days on market, school ratings & neighborhood insights. Expert analysis by Cheryl Towey, Weichert Realtors.',
  keywords: [
    'Chester NJ real estate market',
    'Chester home values 2025',
    'Chester housing market trends',
    'Morris County NJ real estate',
    'Chester homes for sale',
    'Chester market analysis',
    'Chester Borough real estate',
    'Chester Township homes',
    'Chester NJ property values',
  ],
  openGraph: {
    title: 'Chester NJ Real Estate Market Report 2025 | Cheryl Towey',
    description: 'Expert analysis of Chester housing market: home values, trends, schools & lifestyle. Your guide to buying or selling in Morris County NJ.',
    url: 'https://www.realestatebycherylnj.com/communities/chester/market-report',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chester NJ Market Report 2025',
    description: 'Current home values, market trends & expert insights for Chester real estate.',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/communities/chester/market-report',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Chester, Morris County, New Jersey',
    'geo.position': '40.7843;-74.6965',
    'ICBM': '40.7843, -74.6965',
  },
};

// Structured Data for Market Report Article
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chester NJ Real Estate Market Report 2025',
  description: 'Comprehensive analysis of Chester housing market including home values, trends, schools, and neighborhood insights.',
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
    '@id': 'https://www.realestatebycherylnj.com/communities/chester/market-report',
  },
  about: {
    '@type': 'Place',
    name: 'Chester, New Jersey',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chester',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  },
};

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Cheryl Towey - Chester Real Estate Expert',
  description: 'Expert real estate services in Chester and Morris County NJ. Specializing in luxury properties, estate homes, and personalized buyer/seller guidance.',
  areaServed: {
    '@type': 'City',
    name: 'Chester',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Morris County, New Jersey',
    },
  },
  url: 'https://www.realestatebycherylnj.com/communities/chester',
  telephone: '+1-908-619-7444',
  priceRange: '$$$-$$$$',
};

export default function ChesterMarketReport() {
  const marketStats = [
    { label: 'Median Home Price', value: '$725,000' },
    { label: 'Average Days on Market', value: '20-28 Days' },
    { label: 'Active Listings', value: '40-55' },
    { label: 'Year-over-Year Change', value: '+4.5%' },
  ];

  const schoolData = [
    { name: 'Bragg Elementary', grades: 'K-4', rating: '9/10', focus: 'STEM Excellence' },
    { name: 'Black River Middle School', grades: '5-8', rating: '8/10', focus: 'Advanced Programs' },
    { name: 'West Morris Mendham High', grades: '9-12', rating: '9/10', focus: 'College Prep' },
  ];

  const neighborhoodHighlights = [
    { area: 'Chester Borough', description: 'Walkable downtown with boutiques, restaurants, and historic charm', priceRange: '$500K-$900K' },
    { area: 'Chester Township', description: 'Estate properties on multi-acre lots with privacy and views', priceRange: '$700K-$2M+' },
    { area: 'Horseshoe Lake', description: 'Lakefront living with recreation and community amenities', priceRange: '$600K-$1.2M' },
  ];

  const relatedReports = [
    { name: 'Hackettstown', path: '/communities/hackettstown/market-report', description: 'Warren County market trends' },
    { name: 'Byram', path: '/communities/byram/market-report', description: 'Sussex County lake communities' },
    { name: 'Washington', path: '/communities/washington/market-report', description: 'Warren County comparison' },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: 'Chester', url: '/communities/chester' },
          { name: 'Market Report', url: '/communities/chester/market-report' },
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
            Chester Real Estate Market Report
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">2025 Market Analysis</span>
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl mb-6">
            Chester stands as one of Morris County's premier communities, blending a charming downtown with estate-caliber properties and top-rated schools. This comprehensive 2025 market report from Cheryl Towey provides the insights discerning buyers and sellers need in this competitive, high-value market. Whether you're seeking a walkable village lifestyle or a private estate on acreage, Chester delivers exceptional quality of life that consistently attracts families and professionals from across the region.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/listings?search=Chester" 
              className="btn-primary"
            >
              View Chester Properties
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
              Chester's real estate market in 2025 reflects its status as one of Northwest New Jersey's most desirable addresses. With a median home price of approximately $725,000, Chester commands premium values justified by exceptional schools, preserved open space, and a thriving downtown that draws visitors from across the state. Properties typically spend 20-28 days on market—significantly faster than neighboring <Link href="/communities/blairstown/market-report" className="text-secondary hover:underline">Blairstown</Link> or <Link href="/communities/andover/market-report" className="text-secondary hover:underline">Andover</Link>—reflecting consistent demand from well-qualified buyers.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Year-over-year appreciation of 4.5% demonstrates strong but sustainable growth, protecting homeowner equity while keeping the market accessible to those who prioritize Chester's quality of life. Current inventory of 40-55 active listings provides healthy selection across property types, from borough townhomes to township estates, though the most desirable properties often receive multiple offers within days of listing.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              The market divides naturally between Chester Borough—offering walkability and charm—and Chester Township, where properties on multiple acres deliver privacy and estate-scale living. Understanding this distinction is essential for buyers narrowing their search, and I can help identify which environment best suits your lifestyle and investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Chester Neighborhoods
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
              Chester Borough's downtown epitomizes New Jersey small-town charm at its finest. Main Street features locally-owned boutiques, award-winning restaurants, and seasonal events that transform the borough into a destination. Homes here range from historic Victorians to updated contemporaries, all within walking distance of shops, dining, and the popular Chester Craft Beer Trail.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Chester Township surrounds the borough with protected farmland, forests, and estate properties that provide remarkable privacy despite proximity to civilization. Here you'll find horse farms, custom-built executives homes, and preserved estates on lots ranging from 2 to 20+ acres. Township residents enjoy the best of both worlds: rural tranquility with quick access to downtown Chester's amenities.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Unlike the lake communities in <Link href="/communities/byram/market-report" className="text-secondary hover:underline">Byram</Link>, Chester's water-oriented properties cluster around Horseshoe Lake and smaller private ponds, offering lakefront living within a more upscale context. These properties combine recreational amenities with Chester's prestigious address and school district.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Chester Schools: A Primary Draw
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
              Chester's schools rank among the state's finest, driving much of the community's real estate demand. The Chester School District serves elementary and middle school students with consistently high test scores, excellent facilities, and enrichment programs that challenge students at every level. Both Bragg Elementary and Black River Middle School benefit from strong parent involvement and a culture that values academic achievement.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              High school students attend West Morris Mendham High School, one of New Jersey's top-rated public high schools. The school offers extensive AP coursework, competitive athletic programs, and arts opportunities that prepare students for selective colleges. Families relocating specifically for school quality frequently cite Chester's district as the determining factor in their home search.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              This educational excellence significantly impacts property values—Chester homes command premiums compared to similar properties in districts with lower-rated schools. However, buyers recognize this investment in their children's futures and the strong resale values associated with premier school districts.
            </p>
          </div>
        </div>
      </section>

      {/* Living in Chester */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            The Chester Lifestyle
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Chester offers a lifestyle that attracts families, professionals, and anyone who appreciates quality. Weekend mornings might start with coffee at a Main Street café, followed by hiking at Hacklebarney State Park—where dramatic waterfalls and forest trails provide year-round recreation. The afternoon could include browsing antique shops, sampling at local wineries, or cheering at youth sports events that bring the community together.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The dining scene sets Chester apart from other suburban communities. Farm-to-table restaurants, upscale gastropubs, and international cuisines provide options typically found only in larger cities. The annual Chester Craft Beer Fest and seasonal farmers markets celebrate local producers while creating social events that strengthen community bonds.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Commuting from Chester requires accepting trade-offs common to Northwest NJ communities. Routes 206 and 24 provide access to I-78 and I-287, making Morristown, Newark, and corporate centers throughout Morris and Somerset counties accessible within reasonable drive times. Many Chester residents work remotely part-time, reducing commute frequency while maintaining career advancement in major employment centers.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              For those seeking more affordable entry points or different lifestyle options, nearby <Link href="/communities/hackettstown/market-report" className="text-secondary hover:underline">Hackettstown</Link> and <Link href="/communities/washington/market-report" className="text-secondary hover:underline">Washington</Link> offer lower price points while remaining within easy reach of Chester's amenities—a consideration for buyers balancing budget with desired community features.
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
                  <span>Pre-approval is essential—sellers expect qualified buyers in this market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Township properties may have well/septic—understand maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Consider total costs including property taxes, which reflect school quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Be prepared to compete—desirable homes often receive multiple offers</span>
                </li>
              </ul>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-secondary mb-4">For Sellers</h3>
              <ul className="space-y-3 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Chester's reputation attracts serious buyers—price accurately to capitalize</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Professional staging maximizes appeal in this quality-conscious market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Highlight school district, walkability (borough), or privacy (township)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Spring and fall listings capture peak buyer activity</span>
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
            Considering other communities in Northwest New Jersey? Compare market trends and find the right fit for your lifestyle and budget.
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
            Your Chester Home Awaits
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Chester's combination of excellent schools, charming downtown, and estate-quality properties creates opportunities for discerning buyers seeking the best Northwest NJ offers. Let me provide personalized guidance through this competitive market.
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
