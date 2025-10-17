import Listings from '@/app/components/Listings';

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
            Browse available properties in our service areas with live MLS data from iHomeFinder.
          </p>
        </div>
      </section>

      {/* iHomeFinder Listings Component */}
      <Listings />
    </div>
  );
}
