import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import HomeValuation from '@/components/HomeValuation';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "Home Seller's Guide | Northern NJ Real Estate | Cheryl Towey",
  description: 'Expert guidance for selling your home in Northern New Jersey. Free home valuations, professional marketing, and proven results for Sussex County, Warren County & Morris County sellers.',
  keywords: [
    'sell home Northern NJ',
    'home sellers guide New Jersey',
    'Sussex County home values',
    'Warren County real estate agent',
    'Morris County home selling',
    'free home valuation NJ',
    'Northern NJ listing agent',
    'sell house fast New Jersey',
  ],
  openGraph: {
    title: "Home Seller's Guide | Northern NJ Real Estate",
    description: 'Maximize your home value with expert guidance for selling in Sussex, Warren & Morris Counties. Free valuation & professional marketing.',
    url: 'https://www.realestatebycherylnj.com/sellers',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/sellers',
  },
};

export default function SellersPage() {
  const sellingProcess = [
    {
      step: '01',
      title: 'Consultation & Valuation',
      description: 'Receive a comprehensive market analysis based on recent Northern NJ sales, current inventory, and your property unique features to determine optimal pricing.',
    },
    {
      step: '02',
      title: 'Prepare Your Home',
      description: 'Expert guidance on staging, repairs, and strategic improvements that yield the highest return on investment for Northern NJ buyers.',
    },
    {
      step: '03',
      title: 'Professional Marketing',
      description: 'High-quality photography, virtual tours, MLS exposure, and targeted digital campaigns reaching qualified buyers across the tri-state area.',
    },
    {
      step: '04',
      title: 'Show Your Home',
      description: 'Coordinate private showings and open houses with professional presentation to showcase your property to serious, pre-qualified buyers.',
    },
    {
      step: '05',
      title: 'Negotiate Offers',
      description: 'Strategic analysis of all offers with expert negotiation on price, terms, contingencies, and closing timeline to secure optimal results.',
    },
    {
      step: '06',
      title: 'Close Successfully',
      description: 'Navigate inspections, appraisals, and the closing process smoothly with guidance through every step to a successful transaction.',
    },
  ];

  const northernNJMarkets = [
    {
      county: 'Sussex County',
      markets: [
        { name: 'Andover', link: '/communities/andover/market-report' },
        { name: 'Byram Township', link: '/communities/byram/market-report' },
      ],
      description: 'Strong demand for lake properties and rural retreats from NYC buyers seeking space and value.',
    },
    {
      county: 'Warren County',
      markets: [
        { name: 'Hackettstown', link: '/communities/hackettstown/market-report' },
        { name: 'Blairstown', link: '/communities/blairstown/market-report' },
        { name: 'Washington', link: '/communities/washington/market-report' },
      ],
      description: 'Growing interest in historic properties and affordable options with excellent commuter access.',
    },
    {
      county: 'Morris County',
      markets: [
        { name: 'Chester', link: '/communities/chester/market-report' },
      ],
      description: 'Premium pricing for top-rated school districts and upscale communities with steady appreciation.',
    },
  ];

  const marketingStrategies = [
    {
      title: 'Professional Photography & Video',
      description: 'Stunning visuals that showcase your property best features to capture buyer attention from the first click.',
    },
    {
      title: 'MLS & Syndication',
      description: 'Maximum visibility across Zillow, Realtor.com, Redfin, and hundreds of partner sites reaching millions of buyers.',
    },
    {
      title: 'Targeted Digital Marketing',
      description: 'Strategic advertising on Facebook, Instagram, and Google targeting qualified buyers actively searching Northern NJ.',
    },
    {
      title: 'Virtual Tours & 3D Walkthroughs',
      description: 'Immersive experiences allowing out-of-area buyers to explore your home remotely before scheduling showings.',
    },
    {
      title: 'Professional Staging Consultation',
      description: 'Expert recommendations to present your home in the best light and appeal to Northern NJ buyer preferences.',
    },
    {
      title: 'Open Houses & Broker Tours',
      description: 'Strategic events to generate buzz, attract multiple buyers, and create competitive offer situations.',
    },
  ];

  const benefits = [
    {
      title: 'Northern NJ Market Expertise',
      description: 'Deep understanding of local pricing trends, buyer preferences, and community dynamics across Sussex, Warren, and Morris Counties.',
    },
    {
      title: 'Data-Driven Pricing',
      description: 'Strategic pricing based on comprehensive market analysis to attract qualified buyers while maximizing your return.',
    },
    {
      title: 'Professional Negotiation',
      description: 'Experienced advocacy through offer review, counteroffers, and contract negotiations to secure optimal terms.',
    },
    {
      title: 'Full-Service Support',
      description: 'Comprehensive management of all details from listing to closing, keeping you informed and stress-free throughout.',
    },
  ];

  const sellerResources = [
    {
      title: 'Local Market Reports',
      description: 'Access current market data and trends for communities across Northern New Jersey.',
      link: '/communities',
      linkText: 'View Market Data',
    },
    {
      title: 'Free Home Valuation',
      description: 'Discover your property current market value with a comprehensive analysis.',
      link: '#valuation',
      linkText: 'Get Your Valuation',
    },
    {
      title: 'Schedule Consultation',
      description: 'Meet with Cheryl to discuss your selling goals and create a customized plan.',
      link: '/contact',
      linkText: 'Book Appointment',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: "Seller's Guide", url: '/sellers' },
        ]}
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-light to-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 heading-underline pb-4">
              Northern NJ Home Seller&apos;s Guide
            </h1>
            <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
              Maximize your property value with expert guidance, professional marketing, and strategic pricing tailored to the Northern New Jersey market. Whether you&apos;re selling a lakefront property in Sussex County, a historic home in Warren County, or a family residence in Morris County, Cheryl Towey delivers results.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#valuation" className="btn-primary text-xs">
                Get Free Home Valuation
              </Link>
              <Link href="/contact" className="btn-secondary text-xs">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Northern NJ Market Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Northern NJ Market Insights
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Understanding local market conditions is essential for pricing and timing your sale effectively.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {northernNJMarkets.map((county, index) => (
              <div
                key={index}
                className="scroll-animate bg-gradient-to-br from-white to-gray-light p-8 rounded-sm border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-light text-gold mb-3">
                  {county.county}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-4">
                  {county.description}
                </p>
                <div className="space-y-2">
                  {county.markets.map((market, idx) => (
                    <Link
                      key={idx}
                      href={market.link}
                      className="block text-sm text-black hover:text-gold transition-colors duration-200"
                    >
                      <span className="mr-2">→</span>
                      {market.name} Market Report
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/communities" className="text-gold hover:underline text-sm inline-flex items-center">
              View All Community Reports
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Selling Process */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              The Home Selling Process
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              A proven step-by-step approach to selling your Northern NJ home for top dollar
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingProcess.map((item, index) => (
              <div
                key={index}
                className="scroll-animate bg-white p-8 rounded-sm border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="text-gold font-serif text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-light text-black mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell With Cheryl */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="scroll-animate order-2 lg:order-1">
                <div className="bg-gray-light p-8 rounded-sm shadow-xl">
                  <div className="aspect-square relative rounded-sm mb-6 overflow-hidden">
                    <Image
                      src="/images/1752608667829.jpeg"
                      alt="Cheryl Towey - Northern NJ Listing Specialist"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-sm">
                      <div className="text-2xl font-serif text-gold mb-1">98%</div>
                      <div className="text-xs text-gray-dark">Average List-to-Sale Price</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-sm">
                      <div className="text-2xl font-serif text-gold mb-1">30</div>
                      <div className="text-xs text-gray-dark">Average Days on Market</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
                  Your Northern NJ Listing Agent
                </h2>
                <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
                  Selling a home in Northern New Jersey requires an agent who understands the distinct appeal of each community. From marketing lakefront properties in Sussex County to positioning historic homes in Warren County to reaching premium buyers for Morris County estates, Cheryl brings targeted expertise and proven marketing strategies.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="scroll-animate flex gap-4 p-6 bg-gray-light rounded-sm border-l-4 border-gold hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-serif font-light text-black mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-dark leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="scroll-animate mt-8">
                  <Link href="/about" className="text-gold hover:underline transition-colors duration-200 inline-flex items-center text-sm">
                    Learn More About Cheryl
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Comprehensive Marketing
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Your property deserves a multi-channel approach that reaches qualified buyers throughout Northern NJ and beyond
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingStrategies.map((strategy, index) => (
              <div
                key={index}
                className="scroll-animate bg-white p-6 rounded-sm border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base font-serif font-light text-black mb-2">
                  {strategy.title}
                </h3>
                <p className="text-xs text-gray-dark leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Resources */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Seller Resources
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Tools and information to support your home selling journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellerResources.map((resource, index) => (
              <div
                key={index}
                className="scroll-animate bg-gray-light p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-serif font-light text-black mb-3">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-4">
                  {resource.description}
                </p>
                <Link
                  href={resource.link}
                  className="text-gold hover:underline text-sm font-medium"
                >
                  {resource.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Preparation Tips */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 text-center">
              Preparing Your Home to Sell
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto text-center mb-8">
              Strategic preparation that appeals to Northern NJ buyers
            </p>
            
            <div className="scroll-animate bg-gradient-to-br from-gold/5 to-transparent p-8 md:p-12 rounded-sm border border-gold/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-serif font-light text-black mb-4">Interior Preparation</h3>
                  <ul className="space-y-3 text-sm text-gray-dark">
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Declutter and depersonalize to help buyers envision themselves</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Deep clean every room including carpets and windows</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Complete minor repairs and touch-up paint in neutral tones</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Update dated fixtures and hardware for modern appeal</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Maximize natural light with clean windows and light window treatments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-light text-black mb-4">Exterior Preparation</h3>
                  <ul className="space-y-3 text-sm text-gray-dark">
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Enhance curb appeal with fresh landscaping and mulch</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Power wash siding, walkways, and driveway</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Paint or refinish front door for strong first impression</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Maintain lawn and gardens throughout listing period</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold flex-shrink-0">✓</span>
                      <span>Add welcoming touches: new doormat, potted plants, updated house numbers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gold/20">
                <p className="text-sm text-gray-dark text-center">
                  <strong className="text-black">Need Contractor Recommendations?</strong> Cheryl can connect you with trusted local professionals for repairs, staging, and pre-sale improvements. 
                  <Link href="/contact" className="text-gold hover:underline ml-1">Request referrals</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation Section */}
      <section id="valuation" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Get Your Free Home Valuation
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Discover your Northern NJ property current market value with a comprehensive analysis from Cheryl Towey
            </p>
          </div>
          
          <HomeValuation />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gold text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
              Ready to Sell Your Northern NJ Home?
            </h2>
            <p className="scroll-animate text-base mb-8 leading-relaxed opacity-90">
              Whether you&apos;re relocating, downsizing, or moving up, Cheryl provides the expertise and marketing power to sell your Sussex, Warren, or Morris County property for top dollar.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-gold px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </Link>
              <a href="tel:9086197444" className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-gold transition-colors">
                Call 908.619.7444
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
