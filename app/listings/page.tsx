'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties, getFallbackProperty, hasRealData } from '@/data/mockData';

export default function Listings() {
  // Show fallback property if no real data is available
  const initialProperties = hasRealData(mockProperties) ? mockProperties : [getFallbackProperty()];
  const [filteredProperties, setFilteredProperties] = useState(initialProperties);
  const [filters, setFilters] = useState({
    search: '',
    propertyType: '',
    priceRange: '',
    beds: '',
    baths: '',
    status: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    
    // TODO: Replace with actual filtering logic when iHomeFinder integration is implemented
    // This is a basic client-side filter for demonstration
    let filtered = hasRealData(mockProperties) ? mockProperties : [getFallbackProperty()];
    
    if (value) {
      switch (name) {
        case 'search':
          filtered = filtered.filter(prop => 
            prop.address.toLowerCase().includes(value.toLowerCase()) ||
            prop.city.toLowerCase().includes(value.toLowerCase())
          );
          break;
        case 'propertyType':
          // This would need to be added to the property data structure
          break;
        case 'priceRange':
          const [min, max] = value.split('-').map(Number);
          filtered = filtered.filter(prop => {
            if (max) return prop.price >= min && prop.price <= max;
            return prop.price >= min;
          });
          break;
        case 'beds':
          filtered = filtered.filter(prop => prop.beds >= parseInt(value));
          break;
        case 'baths':
          filtered = filtered.filter(prop => prop.baths >= parseInt(value));
          break;
        case 'status':
          filtered = filtered.filter(prop => prop.status === value);
          break;
      }
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Property Listings</h1>
          <p className="text-xl text-gray-200">Find your perfect home in New Jersey</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Properties</h2>
            
            {/* TODO: Replace this static search section with iHomeFinder property search integration */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    name="search"
                    placeholder="Address, City, ZIP"
                    value={filters.search}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Any Type</option>
                    <option value="single-family">Single Family</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Any Price</option>
                    <option value="0-300000">Under $300K</option>
                    <option value="300000-500000">$300K - $500K</option>
                    <option value="500000-750000">$500K - $750K</option>
                    <option value="750000-1000000">$750K - $1M</option>
                    <option value="1000000-999999999">Over $1M</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <select
                    name="beds"
                    value={filters.beds}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <select
                    name="baths"
                    value={filters.baths}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  >
                    <option value="">Any Status</option>
                    <option value="for-sale">For Sale</option>
                    <option value="pending">Pending</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>Showing {filteredProperties.length} of {hasRealData(mockProperties) ? mockProperties.length : 0} properties</p>
                <p className="mt-1">Advanced MLS search integration coming soon</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Available Properties
              </h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Square Footage</option>
                </select>
              </div>
            </div>

            {/* TODO: Replace with dynamic MLS data feed from iHomeFinder */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button
                  onClick={() => {
                    setFilters({
                      search: '',
                      propertyType: '',
                      priceRange: '',
                      beds: '',
                      baths: '',
                      status: ''
                    });
                    setFilteredProperties(hasRealData(mockProperties) ? mockProperties : [getFallbackProperty()]);
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProperties.length > 0 && (
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <span className="px-4 py-2 bg-navy-600 text-white rounded-lg">1</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-navy-600">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let Cheryl help you find your perfect home. Contact us to set up a personalized search.
          </p>
          <a href="/contact" className="btn-secondary">
            Contact Cheryl
          </a>
        </div>
      </section>
    </div>
  );
}
