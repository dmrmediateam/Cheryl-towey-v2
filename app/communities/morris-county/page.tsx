import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';
import { CommunityStructuredData } from '@/app/components/CommunityStructuredData';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Morris County NJ Realtors | Trusted Real Estate Agent Cheryl Towey',
  description: 'Looking for Morris County NJ realtors? Cheryl Towey is your trusted local real estate agent serving Morris Plains, Chester, Parsippany & all Morris County. Expert home buying & selling. Call 908-334-0971.',
  keywords: 'Morris County NJ realtors, Morris County real estate agent, Morris Plains realtor, Chester NJ homes for sale, Parsippany real estate, Morris County homes, NJ realtor Morris County, real estate agent Morris County NJ, buy home Morris County, sell home Morris County NJ',
  openGraph: {
    title: 'Morris County NJ Realtors - Expert Real Estate Services | Cheryl Towey',
    description: 'Find your dream home in Morris County NJ with experienced realtor Cheryl Towey. Local expertise, proven results, and personalized service.',
    url: 'https://www.realestatebycherylnj.com/communities/morris-county',
    type: 'website',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/morris-county-nj.jpg',
        width: 1200,
        height: 630,
        alt: 'Morris County NJ Real Estate - Homes for Sale with Cheryl Towey Realtor',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morris County NJ Realtors | Cheryl Towey Real Estate',
    description: 'Expert Morris County NJ realtor helping buyers and sellers achieve their real estate goals. Weichert Realtors Morris Plains.',
    images: ['https://www.realestatebycherylnj.com/images/morris-county-nj.jpg'],
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/communities/morris-county',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Morris County, New Jersey',
    'geo.position': '40.8620;-74.5441',
    'ICBM': '40.8620, -74.5441',
  },
};

export default function MorrisCountyPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$575,000' },
    { label: 'Average Days on Market', value: '32 days' },
    { label: 'Properties Available', value: '150+' },
    { label: 'Average Price/SqFt', value: '$285' },
  ];

  const morrisCountyTowns = [
    { name: 'Morris Plains', description: 'Home to Weichert Realtors headquarters with excellent transit access' },
    { name: 'Chester', description: 'Charming downtown, luxury estates, and top-rated schools' },
    { name: 'Parsippany-Troy Hills', description: 'Major business hub with diverse housing options' },
    { name: 'Morristown', description: 'Historic county seat with vibrant downtown and culture' },
    { name: 'Randolph', description: 'Family-friendly township with excellent school district' },
    { name: 'Madison', description: 'College town charm with walkable downtown' },
    { name: 'Chatham', description: 'Prestigious community with top schools and commuter access' },
    { name: 'Denville', description: 'Lakeside living and outdoor recreation' },
  ];

  const communityFeatures = [
    {
      title: 'Top-Rated Schools',
      description: 'Morris County boasts some of New Jersey\'s highest-rated school districts, making it ideal for families.',
      icon: '🎓'
    },
    {
      title: 'Easy NYC Commute',
      description: 'NJ Transit rail lines and major highways provide quick access to Manhattan and Newark.',
      icon: '🚆'
    },
    {
      title: 'Outdoor Recreation',
      description: 'From the Great Swamp to Lake Hopatcong, enjoy hiking, fishing, and nature preserves.',
      icon: '🌲'
    },
    {
      title: 'Strong Economy',
      description: 'Corporate headquarters and business parks provide excellent employment opportunities.',
      icon: '💼'
    }
  ];

  const whyChooseCheryl = [
    {
      title: 'Local Morris County Expertise',
      description: 'As a Morris County NJ realtor based in Morris Plains, I have deep knowledge of every neighborhood, school district, and market trend in the area.'
    },
    {
      title: 'Weichert Realtors Network',
      description: 'Backed by one of the nation\'s top real estate brokerages with headquarters right here in Morris Plains, I offer unmatched resources and marketing power.'
    },
    {
      title: 'Proven Track Record',
      description: 'Over 13 years of experience helping Morris County families buy and sell homes with outstanding results and client satisfaction.'
    },
    {
      title: 'Personalized Service',
      description: 'Whether you\'re a first-time buyer or selling your family home, I provide dedicated, hands-on guidance through every step.'
    }
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Communities', url: '/communities' },
          { name: 'Morris County', url: '/communities/morris-county' },
        ]}
      />
      <CommunityStructuredData
        name="Morris County"
        slug="morris-county"
        county="Morris"
        population={509285}
        medianPrice={575000}
        distanceFromNYC="30 miles"
        description="Morris County, New Jersey is a premier residential destination featuring top-rated schools, easy NYC commute access, and diverse communities from historic Morristown to charming Chester. Find your Morris County home with trusted local realtor Cheryl Towey."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gray-light">
          <div className="container-max">
            <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
              Morris County NJ Realtors
              <span className="block text-2xl sm:text-3xl text-secondary mt-2">Your Trusted Real Estate Expert</span>
            </h1>
            <div className="scroll-animate prose max-w-none">
              <p className="text-base text-gray-dark leading-relaxed mb-6">
                <strong>Looking for experienced Morris County NJ realtors?</strong> I'm Cheryl Towey, a licensed real estate agent with Weichert Realtors in Morris Plains. With over 13 years of local expertise, I help buyers and sellers navigate the Morris County real estate market with confidence. Whether you're searching for a family home in Chester, a condo in Parsippany, or selling your property in Morristown, I provide personalized service and proven results.
              </p>
              <p className="text-base text-gray-dark leading-relaxed">
                Morris County offers an exceptional quality of life with top-rated schools, easy access to New York City, and beautiful communities ranging from historic downtown areas to scenic suburban neighborhoods. As your Morris County realtor, I'll help you find the perfect home or get top dollar for your property.
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap mt-8">
              <Link href="/contact" className="btn-primary">
                Contact Your Morris County Realtor
              </Link>
              <Link href="/listings" className="btn-outline">
                View Morris County Homes
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Cheryl as Your Morris County Realtor */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
              Why Choose Me as Your Morris County NJ Realtor
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {whyChooseCheryl.map((item, index) => (
                <div key={index} className="scroll-animate bg-gray-light p-8 rounded-sm">
                  <h3 className="text-xl font-serif font-light text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Morris County Communities */}
        <section className="section-padding bg-gray-light">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 text-center">
              Morris County Towns & Communities
            </h2>
            <p className="text-center text-gray-dark mb-12 max-w-3xl mx-auto">
              As your Morris County NJ realtor, I serve all towns and townships in the county. Here are some of the most popular communities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {morrisCountyTowns.map((town, index) => (
                <div key={index} className="scroll-animate bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-serif font-light text-black mb-2">{town.name}</h3>
                  <p className="text-sm text-gray-dark">{town.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Morris County Special */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
              Why Buy a Home in Morris County, NJ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-serif font-light text-black mb-3">{feature.title}</h4>
                  <p className="text-sm text-gray-dark leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="scroll-animate max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-light text-black mb-6">
                Morris County Real Estate Market Overview
              </h3>
              <p className="text-base text-gray-dark leading-relaxed mb-4">
                The Morris County real estate market remains one of New Jersey's most desirable areas for homebuyers. With a median home price around $575,000, the county offers diverse options from starter homes to luxury estates. Properties typically sell within 32 days, reflecting strong demand from both local buyers and those relocating from New York City.
              </p>
              <p className="text-base text-gray-dark leading-relaxed mb-4">
                As an experienced Morris County NJ realtor, I monitor market trends daily and can help you make informed decisions whether you're buying or selling. The combination of excellent schools, corporate employment centers, and quality of life continues to drive appreciation in Morris County home values.
              </p>
            </div>
          </div>
        </section>

        {/* Market Statistics */}
        <section className="section-padding bg-gray-light">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
              Morris County Real Estate Market Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {marketStats.map((stat, index) => (
                <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-3xl font-serif font-light text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-dark">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
              Morris County Real Estate Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="scroll-animate">
                <h3 className="text-2xl font-serif font-light text-black mb-4">
                  Buying a Home in Morris County
                </h3>
                <p className="text-base text-gray-dark leading-relaxed mb-4">
                  As your Morris County NJ realtor, I'll guide you through every step of the home buying process. From identifying the right neighborhoods for your lifestyle to negotiating the best price, I'm committed to finding you the perfect home.
                </p>
                <ul className="text-gray-dark space-y-2">
                  <li>✓ Personalized home search based on your criteria</li>
                  <li>✓ School district and neighborhood insights</li>
                  <li>✓ Expert negotiation to get the best deal</li>
                  <li>✓ Guidance through inspections and closing</li>
                </ul>
              </div>
              
              <div className="scroll-animate">
                <h3 className="text-2xl font-serif font-light text-black mb-4">
                  Selling Your Morris County Home
                </h3>
                <p className="text-base text-gray-dark leading-relaxed mb-4">
                  When it's time to sell, you need a Morris County realtor who understands how to position your property for maximum value. I provide comprehensive marketing, professional photography, and strategic pricing.
                </p>
                <ul className="text-gray-dark space-y-2">
                  <li>✓ Accurate comparative market analysis</li>
                  <li>✓ Professional staging and photography</li>
                  <li>✓ Extensive online and local marketing</li>
                  <li>✓ Skilled negotiation for top dollar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Properties */}
        <section className="section-padding bg-gray-light">
          <div className="container-max">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8 text-center">
              Morris County Homes for Sale
            </h2>
            <p className="text-center text-gray-dark mb-12 max-w-2xl mx-auto">
              Browse current listings in Morris County. Contact me for private showings or to discuss your home search.
            </p>
            <CommunityProperties cityId={27} cityName="Morris County" />
          </div>
        </section>

        {/* FAQ Section for AI Search */}
        <section className="section-padding bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
              Frequently Asked Questions About Morris County Real Estate
            </h2>
            
            <div className="space-y-8">
              <div className="scroll-animate">
                <h3 className="text-xl font-serif font-light text-black mb-3">
                  What is the average home price in Morris County, NJ?
                </h3>
                <p className="text-base text-gray-dark leading-relaxed">
                  The median home price in Morris County is approximately $575,000. However, prices vary significantly by town—from more affordable options in some areas to luxury homes exceeding $2 million in communities like Harding and Mendham.
                </p>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-serif font-light text-black mb-3">
                  What are the best towns to live in Morris County?
                </h3>
                <p className="text-base text-gray-dark leading-relaxed">
                  Morris County has many excellent towns depending on your priorities. Chester offers charming downtown living, Morristown provides urban amenities, Chatham and Madison are known for top schools and NYC commutes, while Denville offers lakeside recreation. As your Morris County realtor, I can help match you with the right community.
                </p>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-serif font-light text-black mb-3">
                  How do I find a good realtor in Morris County, NJ?
                </h3>
                <p className="text-base text-gray-dark leading-relaxed">
                  Look for a Morris County NJ realtor with local expertise, a strong track record, and excellent client reviews. I'm Cheryl Towey with Weichert Realtors in Morris Plains—I've helped over 100 families buy and sell homes in Morris County and surrounding areas. Contact me at 908-334-0971 for a consultation.
                </p>
              </div>

              <div className="scroll-animate">
                <h3 className="text-xl font-serif font-light text-black mb-3">
                  Is Morris County good for commuting to NYC?
                </h3>
                <p className="text-base text-gray-dark leading-relaxed">
                  Yes! Morris County offers excellent NYC commuting options. NJ Transit's Morris & Essex Lines serve many towns with direct trains to Penn Station. The Midtown Direct service from towns like Morristown, Madison, and Chatham provides express access to Manhattan in about an hour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-max text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
              Ready to Find Your Morris County Home?
            </h2>
            <p className="scroll-animate text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact Cheryl Towey today for expert Morris County real estate services. Whether buying or selling, I'm here to help you achieve your goals.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/contact" className="bg-white text-secondary px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </Link>
              <a href="tel:+19083340971" className="border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-secondary transition-colors">
                Call 908-334-0971
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
