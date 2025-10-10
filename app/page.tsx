import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import Testimonials from '@/components/Testimonials';
import { mockProperties, mockTestimonials, getFallbackProperty, getFallbackTestimonial, hasRealData } from '@/data/mockData';
import Link from 'next/link';

export default function Home() {
  // Get featured properties (first 3) or show fallback
  const featuredProperties = hasRealData(mockProperties) 
    ? mockProperties.slice(0, 3) 
    : [getFallbackProperty()];
  
  // Use fallback testimonials if no real data
  const displayTestimonials = hasRealData(mockTestimonials) 
    ? mockTestimonials 
    : [getFallbackTestimonial()];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Property Search Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search through thousands of properties in New Jersey with our advanced search tools
            </p>
          </div>

          {/* TODO: Replace this static search section with iHomeFinder property search integration */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, State, or ZIP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent">
                  <option>Any Type</option>
                  <option>Single Family</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent">
                  <option>Any Price</option>
                  <option>Under $300K</option>
                  <option>$300K - $500K</option>
                  <option>$500K - $750K</option>
                  <option>Over $750K</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full btn-primary">
                  Search Properties
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Advanced search filters and MLS integration coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {hasRealData(mockProperties) ? 'Featured Properties' : 'Property Listings'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {hasRealData(mockProperties) 
                ? 'Discover some of our most popular listings in the New Jersey area'
                : 'Property listings will be available once MLS integration is complete'
              }
            </p>
          </div>

          {/* TODO: Replace with dynamic MLS data feed from iHomeFinder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/listings" className="btn-primary">
              {hasRealData(mockProperties) ? 'View All Properties' : 'Browse Properties'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Cheryl Towey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in New Jersey real estate, Cheryl has helped 
                hundreds of families find their perfect home. Her deep knowledge of local markets 
                and commitment to exceptional service makes her the ideal partner for your real 
                estate journey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Licensed Real Estate Professional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Local Market Expert</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">500+ Successful Transactions</span>
                </div>
              </div>
              <Link href="/about" className="btn-outline">
                Learn More About Cheryl
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop"
                alt="Cheryl Towey"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={displayTestimonials} />

      {/* Contact CTA Section */}
      <section className="section-padding bg-navy-600">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's work together to make your real estate goals a reality. 
            Contact Cheryl today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
            <Link href="/listings" className="btn-outline border-white text-white hover:bg-white hover:text-navy-600">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
