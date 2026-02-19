import Link from 'next/link';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Byram Township NJ Real Estate Market Report 2025 | Home Values & Trends',
  description: 'Byram Township NJ housing market report for 2025. Current home values, market trends, days on market, school ratings & neighborhood insights. Expert analysis by Cheryl Towey, Weichert Realtors.',
  keywords: [
    'Byram Township NJ real estate market',
    'Byram home values 2025',
    'Byram housing market trends',
    'Sussex County NJ real estate',
    'Byram homes for sale',
    'Byram market analysis',
    'Northwest NJ housing market',
    'Byram Township schools',
    'Lake Lackawanna real estate',
    'Cranberry Lake NJ homes',
  ],
  openGraph: {
    title: 'Byram Township NJ Real Estate Market Report 2025 | Cheryl Towey',
    description: 'Expert analysis of Byram Township housing market: home values, trends, schools & lifestyle. Your guide to buying or selling in Sussex County NJ.',
    url: 'https://www.realestatebycherylnj.com/communities/byram/market-report',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Byram Township NJ Market Report 2025',
    description: 'Current home values, market trends & expert insights for Byram Township real estate.',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/communities/byram/market-report',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Byram Township, Sussex County, New Jersey',
    'geo.position': '40.9576;-74.7321',
    'ICBM': '40.9576, -74.7321',
  },
};

// Structured Data for Market Report Article
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Byram Township NJ Real Estate Market Report 2025',
  description: 'Comprehensive analysis of Byram Township housing market including home values, trends, schools, and neighborhood insights.',
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
    '@id': 'https://www.realestatebycherylnj.com/communities/byram/market-report',
  },
  about: {
    '@type': 'Place',
    name: 'Byram Township, New Jersey',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Byram Township',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
  },
};

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Cheryl Towey - Byram Township Real Estate Expert',
  description: 'Expert real estate services in Byram Township and Sussex County NJ. Specializing in lakefront properties, residential homes, and personalized buyer/seller guidance.',
  areaServed: {
    '@type': 'City',
    name: 'Byram Township',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Sussex County, New Jersey',
    },
  },
  url: 'https://www.realestatebycherylnj.com/communities/byram',
  telephone: '+1-908-619-7444',
  priceRange: '$$-$$$$',
};

export default function ByramMarketReport() {
  const marketStats = [
    { label: 'Median Home Price', value: '$475,000' },
    { label: 'Average Days on Market', value: '25-32 Days' },
    { label: 'Active Listings', value: '35-45' },
    { label: 'Year-over-Year Change', value: '+5.1%' },
  ];

  const schoolData = [
    { name: 'Byram Lakes Elementary', grades: 'K-5', rating: '7/10', focus: 'STEM & Environmental' },
    { name: 'Byram Intermediate School', grades: '6-8', rating: '6/10', focus: 'Project-Based Learning' },
    { name: 'Lenape Valley Regional', grades: '9-12', rating: '7/10', focus: 'College Prep & Arts' },
  ];

  const lakeCommunitiesData = [
    { name: 'Cranberry Lake', description: 'Largest lake community with active social calendar and beach club', homes: '400+' },
    { name: 'Lake Lackawanna', description: 'Family-friendly atmosphere with private beach and fishing', homes: '350+' },
    { name: 'Forest Lake', description: 'Quieter community with nature trails and year-round residents', homes: '200+' },
  ];

  const relatedReports = [
    { name: 'Andover', path: '/communities/andover/market-report', description: 'Neighboring Sussex County community' },
    { name: 'Hackettstown', path: '/communities/hackettstown/market-report', description: 'Warren County market trends' },
    { name: 'Chester', path: '/communities/chester/market-report', description: 'Morris County comparison' },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: 'Byram', url: '/communities/byram' },
          { name: 'Market Report', url: '/communities/byram/market-report' },
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
            Byram Township Market Report
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">2025 Market Analysis</span>
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl mb-6">
            Welcome to your comprehensive guide to Byram Township's real estate market for 2025. Known as the "Township of Lakes," Byram offers a unique blend of lakefront living, natural beauty, and suburban convenience that attracts buyers from across the region. This report from Cheryl Towey, your Weichert Realtors professional, covers current market conditions, lake community insights, school information, and what makes Byram an exceptional place to call home.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/listings?search=Byram" 
              className="btn-primary"
            >
              View Byram Properties
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
              Byram Township's real estate market continues its strong performance in 2025, with median home prices reaching approximately $475,000—a notable increase from previous years that reflects both statewide trends and Byram's growing desirability. Unlike the intense competition seen in nearby <Link href="/communities/chester/market-report" className="text-secondary hover:underline">Chester</Link> or more urban areas, Byram maintains a healthy pace where quality homes move within 25-32 days while giving buyers adequate time for due diligence.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The township's unique appeal lies in its numerous lake communities, which comprise a significant portion of the housing stock. Properties within these communities often command premium prices due to amenities like private beaches, boat launches, and social clubs. Non-lake properties offer excellent value, particularly for buyers seeking more land or those who prefer traditional neighborhoods.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Year-over-year appreciation of 5.1% outpaces neighboring <Link href="/communities/andover/market-report" className="text-secondary hover:underline">Andover</Link> slightly, driven largely by continued demand for lakefront properties and the township's convenient location along Route 206. Current inventory levels of 35-45 active listings provide options across various price points and property types.
            </p>
          </div>
        </div>
      </section>

      {/* Lake Communities Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Lake Communities: The Heart of Byram
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {lakeCommunitiesData.map((lake, index) => (
              <div key={index} className="scroll-animate bg-white p-6 rounded-sm shadow-sm">
                <h3 className="text-xl font-serif font-light text-secondary mb-3">{lake.name}</h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-3">{lake.description}</p>
                <p className="text-xs uppercase tracking-widest text-black">{lake.homes} homes</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Byram's identity is inseparable from its lakes. Cranberry Lake, the largest community, offers an especially vibrant social scene with summer events, holiday celebrations, and an active community organization. Lake Lackawanna attracts families with its well-maintained beach area and emphasis on water safety programs for children.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Each lake community operates independently with its own homeowners association, annual dues, and rules regarding boat usage, guests, and property maintenance. Typical HOA fees range from $400-$800 annually, covering beach maintenance, lifeguards, community events, and shared amenities. Understanding these costs and regulations is essential before purchasing—I can provide detailed information on any community you're considering.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Many lake homes began as summer cottages and have been converted to year-round residences, meaning you'll find a mix of cozy bungalows and substantially renovated homes within the same community. This variety creates opportunities at multiple price points, from starter homes under $300,000 to fully updated lakefront properties exceeding $600,000.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Byram Township Schools
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
              Byram Township maintains its own elementary and intermediate schools, providing a community-centered educational experience for younger students. The district emphasizes environmental education, taking advantage of the township's natural resources for outdoor learning opportunities. Class sizes remain manageable, allowing teachers to provide individualized attention.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              High school students attend Lenape Valley Regional, shared with <Link href="/communities/andover/market-report" className="text-secondary hover:underline">Andover</Link> and other nearby communities. This arrangement provides access to a broader range of academic programs, sports teams, and extracurricular activities than a smaller single-community school could offer. The school maintains strong college placement rates and offers both AP courses and vocational training pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Living in Byram */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            What It's Like to Live in Byram Township
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Life in Byram Township centers around community and nature. Lake residents enjoy summer days at the beach, evening kayak paddles, and neighborhood barbecues that foster lasting friendships. Even non-lake residents benefit from the township's outdoor resources, including Allamuchy Mountain State Park and numerous hiking trails within minutes of home.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The township's location along Route 206 provides convenient access to shopping in <Link href="/communities/hackettstown/market-report" className="text-secondary hover:underline">Hackettstown</Link> and easy commutes to I-80 for those working further east. Many residents appreciate that Byram offers a genuine retreat from suburban sprawl while remaining practical for daily needs. Local businesses along Route 206 include restaurants, professional services, and convenience stores.
            </p>
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Community events punctuate the calendar year-round: summer concerts at the lakes, fall festivals, holiday parades, and winter gatherings at community centers. The tight-knit nature of lake communities means neighbors look out for each other, creating a sense of security that many families find invaluable.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              For those seeking more upscale amenities or boutique shopping, <Link href="/communities/chester/market-report" className="text-secondary hover:underline">Chester</Link> is a short drive south, offering excellent dining and weekend browsing. This balance—peaceful lakeside living with accessible amenities—defines the Byram lifestyle.
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
                  <span>Research lake community HOA rules and fees before making offers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Many lake homes have been renovated—inspect for quality of updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Consider flood insurance requirements for lakefront properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Winter showings reveal how properties handle off-season conditions</span>
                </li>
              </ul>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-secondary mb-4">For Sellers</h3>
              <ul className="space-y-3 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>List in spring to showcase lake lifestyle at its best</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Professional photos featuring water views command attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Highlight community amenities and social aspects in listings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Prepare HOA documentation for buyer questions</span>
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
            Find Your Perfect Byram Home
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you're dreaming of lakefront living or seeking a peaceful wooded retreat, I'm here to guide you through Byram's unique real estate market. Contact me for personalized recommendations and detailed information on specific lake communities.
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
