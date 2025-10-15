import React from 'react';
import Link from 'next/link';

const communities = [
  {
    name: "Westchase",
    image: "/images/communities/westchase.jpg",
    description: "A master-planned community featuring golf courses, parks, and family-friendly amenities.",
    averagePrice: "$450K - $800K",
    slug: "westchase"
  },
  {
    name: "Summerlin",
    image: "/images/communities/summerlin.jpg", 
    description: "Luxury living with resort-style amenities and stunning mountain views.",
    averagePrice: "$600K - $1.2M",
    slug: "summerlin"
  },
  {
    name: "Henderson",
    image: "/images/communities/henderson.jpg",
    description: "Family-oriented community with excellent schools and recreational facilities.",
    averagePrice: "$400K - $750K", 
    slug: "henderson"
  },
  {
    name: "Green Valley",
    image: "/images/communities/green-valley.jpg",
    description: "Established neighborhood known for its mature landscaping and proximity to amenities.",
    averagePrice: "$350K - $650K",
    slug: "green-valley"
  },
  {
    name: "Red Rock",
    image: "/images/communities/red-rock.jpg",
    description: "Upscale community with custom homes and breathtaking Red Rock Canyon views.",
    averagePrice: "$800K - $2M+",
    slug: "red-rock"
  },
  {
    name: "Mountains Edge",
    image: "/images/communities/mountains-edge.jpg",
    description: "Modern community offering hiking trails, parks, and contemporary home designs.",
    averagePrice: "$500K - $900K",
    slug: "mountains-edge"
  }
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Perfect
            <span className="block text-yellow-400">Community</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore Las Vegas's premier neighborhoods and find the community that matches your lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get Community Guide
            </Link>
            <Link 
              href="/search" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Search Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each community offers unique amenities, lifestyle, and investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={community.image} 
                    alt={community.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {community.averagePrice}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {community.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link 
                      href={`/communities/${community.slug}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Explore Community
                    </Link>
                    <Link 
                      href={`/search?community=${community.slug}`}
                      className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      View Homes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-xl">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-xl">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-xl">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Community?
          </h2>
          <p className="text-xl mb-8">
            Let me help you discover the perfect neighborhood that matches your lifestyle and budget
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}