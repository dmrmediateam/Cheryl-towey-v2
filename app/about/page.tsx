import Image from 'next/image';

export default function About() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Cheryl Towey</h1>
          <p className="text-xl text-gray-200">Your Trusted Real Estate Professional</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                A Passion for Real Estate
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cheryl Towey has been a dedicated real estate professional in New Jersey for over 15 years. 
                Her passion for helping families find their perfect home drives everything she does. 
                With a deep understanding of local markets and a commitment to exceptional service, 
                Cheryl has built a reputation as one of the most trusted real estate professionals in the area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Cheryl's approach is built on integrity, transparency, and personalized attention. 
                She takes the time to understand each client's unique needs and goals, ensuring that 
                every transaction is smooth and successful. Whether you're buying your first home, 
                selling a family property, or investing in real estate, Cheryl is your dedicated partner.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop"
                alt="Cheryl Towey"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-navy-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Homes Sold</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-navy-600 mb-2">15+</div>
              <div className="text-lg text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-navy-600 mb-2">98%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Services I Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Buying</h3>
                <p className="text-gray-600">
                  Expert guidance through the entire home buying process, from initial search to closing.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Selling</h3>
                <p className="text-gray-600">
                  Strategic marketing and pricing to maximize your home's value and ensure a quick sale.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive market analysis to help you make informed real estate decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              My Philosophy
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 text-center mb-6">
                "Real estate is more than just buying and selling properties – it's about helping 
                people achieve their dreams and build their futures. Every client deserves personalized 
                attention, honest advice, and exceptional service."
              </p>
              <p className="text-lg text-gray-600 text-center">
                - Cheryl Towey
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your real estate goals and how I can help you achieve them.
            </p>
            <a href="/contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
