export default function ListingsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Property Listings
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto leading-relaxed">
            {/* TODO: Add listings page description */}
            [Browse available properties in our service areas]
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* TODO: Integrate iHomeFinder or MLS property search and listings display */}
          <div className="bg-gray-light p-16 rounded-sm text-center">
            <img 
              src="/images/no-image.svg" 
              alt="Property listings placeholder" 
              className="w-64 mx-auto opacity-40 mb-8"
            />
            <h2 className="text-2xl font-light text-black mb-4">
              Property Listings Coming Soon
            </h2>
            <p className="text-gray-dark text-lg max-w-2xl mx-auto mb-8">
              Our property search and listings integration is currently in development. 
              This will include advanced search filters, property details, and direct MLS connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us About Available Properties
              </a>
              <a href="/" className="btn-outline">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
