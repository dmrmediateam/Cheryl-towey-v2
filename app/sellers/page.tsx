export default function SellersPage() {
  return (
    <div className="min-h-screen section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Seller's Guide
          </h1>
          <p className="text-lg text-gray-dark leading-relaxed">
            {/* TODO: Add seller's guide content */}
            [Content about services for home sellers, selling process, and market preparation]
          </p>
        </div>

        {/* TODO: Add seller-specific sections */}
        <div className="mt-16 bg-gray-light p-12 rounded-sm text-center">
          <img 
            src="/images/no-image.svg" 
            alt="Sellers guide content placeholder" 
            className="w-48 mx-auto opacity-40 mb-6"
          />
          <p className="text-gray-dark text-lg">
            Seller's guide content and resources coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

