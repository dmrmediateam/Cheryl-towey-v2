export default function BuyersPage() {
  return (
    <div className="min-h-screen section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Buyer's Guide
          </h1>
          <p className="text-lg text-gray-dark leading-relaxed">
            {/* TODO: Add buyer's guide content */}
            [Content about services for home buyers, buying process, and resources]
          </p>
        </div>

        {/* TODO: Add buyer-specific sections */}
        <div className="mt-16 bg-gray-light p-12 rounded-sm text-center">
          <img 
            src="/images/no-image.svg" 
            alt="Buyers guide content placeholder" 
            className="w-48 mx-auto opacity-40 mb-6"
          />
          <p className="text-gray-dark text-lg">
            Buyer's guide content and resources coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

