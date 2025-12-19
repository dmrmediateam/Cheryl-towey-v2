import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import MortgageCalculator from '@/components/MortgageCalculator';

export const metadata: Metadata = {
  title: "Home Buyer's Guide | Northern NJ Real Estate | Cheryl Towey",
  description: 'Your complete guide to buying a home in Northern New Jersey. Expert guidance for Sussex County, Warren County & Morris County home buyers. Pre-approval tips, market insights & mortgage calculator.',
  keywords: [
    'buy home Northern NJ',
    'home buyers guide New Jersey',
    'Sussex County homes for sale',
    'Warren County real estate',
    'Morris County home buying',
    'first time home buyer NJ',
    'NJ mortgage pre-approval',
    'Northern NJ real estate agent',
  ],
  openGraph: {
    title: "Home Buyer's Guide | Northern NJ Real Estate",
    description: 'Expert guidance for buying a home in Sussex, Warren & Morris Counties. Free resources, market reports & personalized support.',
    url: 'https://www.realestatebycherylnj.com/buyers',
    siteName: 'Real Estate by Cheryl NJ',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BuyersPage() {
  const buyingProcess = [
    {
      step: '01',
      title: 'Get Pre-Approved',
      description: "Start with a mortgage pre-approval to understand your budget and demonstrate to sellers that you're a qualified, serious buyer ready to make competitive offers.",
    },
    {
      step: '02',
      title: 'Define Your Criteria',
      description: 'Work with Cheryl to identify your must-haves, preferred Northern NJ communities, commute requirements, school districts, and lifestyle priorities.',
    },
    {
      step: '03',
      title: 'Search Properties',
      description: 'Tour homes across Sussex, Warren, and Morris Counties with expert guidance on neighborhood trends, property values, and investment potential.',
    },
    {
      step: '04',
      title: 'Make an Offer',
      description: 'Craft a competitive offer backed by market data and professional negotiation strategies to secure the best terms and price.',
    },
    {
      step: '05',
      title: 'Due Diligence',
      description: 'Protect your investment with thorough inspections, title searches, and expert guidance on any issues discovered during the process.',
    },
    {
      step: '06',
      title: 'Close & Move In',
      description: 'Navigate the closing process smoothly with guidance through paperwork, final walkthrough, and coordination with all parties involved.',
    },
  ];

  const northernNJCommunities = [
    {
      county: 'Sussex County',
      communities: [
        { name: 'Andover', link: '/communities/andover/market-report' },
        { name: 'Byram Township', link: '/communities/byram/market-report' },
      ],
      description: 'Lake communities, rural character, and outdoor recreation with more affordable home prices.',
    },
    {
      county: 'Warren County',
      communities: [
        { name: 'Hackettstown', link: '/communities/hackettstown/market-report' },
        { name: 'Blairstown', link: '/communities/blairstown/market-report' },
        { name: 'Washington', link: '/communities/washington/market-report' },
      ],
      description: 'Small-town charm, historic properties, and excellent value for commuters.',
    },
    {
      county: 'Morris County',
      communities: [
        { name: 'Chester', link: '/communities/chester/market-report' },
      ],
      description: 'Top-rated schools, upscale communities, and convenient NYC commuter access.',
    },
  ];

  const benefits = [
    {
      title: 'Northern NJ Market Expertise',
      description: 'Deep knowledge of Sussex, Warren, and Morris County communities, schools, and market trends.',
    },
    {
      title: 'Early Access to Listings',
      description: 'Get notified about new listings and off-market opportunities before they hit public sites.',
    },
    {
      title: 'Strategic Negotiation',
      description: 'Professional representation backed by current market data to secure optimal terms.',
    },
    {
      title: 'Trusted Professional Network',
      description: 'Connections to vetted lenders, inspectors, attorneys, and contractors throughout Northern NJ.',
    },
  ];

  const buyerResources = [
    {
      title: 'Current Market Reports',
      description: 'Access detailed market analysis for communities across Northern New Jersey.',
      link: '/communities',
      linkText: 'View Market Reports',
    },
    {
      title: 'Available Properties',
      description: 'Browse current listings in Sussex, Warren, and Morris Counties.',
      link: '/listings',
      linkText: 'Search Listings',
    },
    {
      title: 'Mortgage Calculator',
      description: 'Estimate monthly payments based on price, down payment, and interest rates.',
      link: '#calculator',
      linkText: 'Calculate Payments',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-light to-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 heading-underline pb-4">
              Northern NJ Home Buyer&apos;s Guide
            </h1>
            <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
              Your comprehensive resource for buying a home in Sussex, Warren, and Morris Counties. From lake communities to historic villages to top-rated school districts, Northern New Jersey offers diverse options for every lifestyle. Let Cheryl Towey guide you to your perfect home.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-xs">
                Start Your Home Search
              </Link>
              <Link href="/listings" className="btn-secondary text-xs">
                Browse Available Homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Northern NJ Communities Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Explore Northern NJ Communities
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Each county offers distinct advantages. Review market reports to find the community that matches your priorities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {northernNJCommunities.map((county, index) => (
              <div
                key={index}
                className="scroll-animate bg-gradient-to-br from-white to-gray-light p-8 rounded-sm border border-gray-200 hover:border-secondary hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-light text-secondary mb-3">
                  {county.county}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-4">
                  {county.description}
                </p>
                <div className="space-y-2">
                  {county.communities.map((community, idx) => (
                    <Link
                      key={idx}
                      href={community.link}
                      className="block text-sm text-black hover:text-secondary transition-colors duration-200"
                    >
                      <span className="mr-2">→</span>
                      {community.name} Market Report
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/communities" className="text-secondary hover:underline text-sm inline-flex items-center">
              View All Communities
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Home Buying Process */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              The Home Buying Process
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              A clear roadmap from initial consultation to closing day
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingProcess.map((item, index) => (
              <div
                key={index}
                className="scroll-animate bg-white p-8 rounded-sm border border-gray-200 hover:border-secondary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="text-secondary font-serif text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-light text-black mb-3 group-hover:text-secondary transition-colors duration-300">
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

      {/* Why Choose Cheryl */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
                  Your Northern NJ Buyer&apos;s Agent
                </h2>
                <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
                  Buying a home in Northern New Jersey requires an agent who understands the nuances of each community—from Sussex County&apos;s lake properties to Warren County&apos;s historic villages to Morris County&apos;s prestigious school districts. Cheryl Towey brings years of local expertise and a commitment to finding not just any house, but your ideal home.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="scroll-animate flex gap-4 p-6 bg-gray-light rounded-sm border-l-4 border-secondary hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
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
                  <Link href="/about" className="text-secondary hover:underline transition-colors duration-200 inline-flex items-center text-sm">
                    Learn More About Cheryl
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="scroll-animate">
                <div className="bg-gray-light p-8 rounded-sm shadow-xl">
                  <div className="aspect-square relative rounded-sm mb-6 overflow-hidden">
                    <Image
                      src="/images/1752608667829.jpeg"
                      alt="Cheryl Towey - Northern NJ Real Estate Expert"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <blockquote className="text-sm italic text-gray-dark leading-relaxed border-l-4 border-secondary pl-4">
                    &quot;Cheryl&apos;s knowledge of Northern NJ communities was invaluable. She helped us find the perfect home in a great school district, and her negotiation skills saved us thousands.&quot;
                    <div className="text-xs text-black font-semibold mt-3 not-italic">— Recent Warren County Buyers</div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Resources */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Buyer Resources
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Tools and information to support your home search
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {buyerResources.map((resource, index) => (
              <div
                key={index}
                className="scroll-animate bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-serif font-light text-black mb-3">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed mb-4">
                  {resource.description}
                </p>
                <Link
                  href={resource.link}
                  className="text-secondary hover:underline text-sm font-medium"
                >
                  {resource.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-Time Homebuyer Tips */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 text-center">
              First-Time Homebuyer Checklist
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto text-center mb-8">
              Essential steps for buyers new to the Northern NJ market
            </p>
            
            <div className="scroll-animate bg-gradient-to-br from-secondary/5 to-transparent p-8 md:p-12 rounded-sm border border-secondary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-serif font-light text-black mb-4">Financial Preparation</h3>
                  <ul className="space-y-3 text-sm text-gray-dark">
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Review credit report 6+ months before searching</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Save for down payment (3.5%-20% depending on loan type)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Budget 2-5% for closing costs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Get mortgage pre-approval before touring homes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-light text-black mb-4">Research & Planning</h3>
                  <ul className="space-y-3 text-sm text-gray-dark">
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Research school districts and commute times</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Visit neighborhoods at different times of day</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Understand property taxes in target communities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary flex-shrink-0">✓</span>
                      <span>Never skip the home inspection</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-secondary/20">
                <p className="text-sm text-gray-dark text-center">
                  <strong className="text-black">NJ First-Time Buyer Programs:</strong> New Jersey offers down payment assistance and favorable loan programs for qualified first-time buyers. 
                  <Link href="/contact" className="text-secondary hover:underline ml-1">Contact Cheryl</Link> to learn about programs you may qualify for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator Section */}
      <section id="calculator" className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Mortgage Calculator
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Estimate monthly payments based on Northern NJ home prices and current interest rates
            </p>
          </div>
          
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
              Ready to Find Your Northern NJ Home?
            </h2>
            <p className="scroll-animate text-base mb-8 leading-relaxed opacity-90">
              Whether you&apos;re seeking a lakefront retreat in Sussex County, a historic home in Warren County, or a family-friendly community in Morris County, Cheryl provides expert guidance every step of the way.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </Link>
              <a href="tel:9086197444" className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors">
                Call 908.619.7444
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
