import Link from 'next/link';

const MeetAgent = () => {
  return (
    <section className="section-padding bg-white" id="team">
      <div className="container-max">
        {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
                Meet Cheryl Towey Services
              </h2>
              <p className="scroll-animate text-base text-gray-dark mt-8">
                Your trusted real estate professional in New Jersey
              </p>
            </div>

        {/* Agent Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Agent Image */}
          <div className="scroll-animate order-2 lg:order-1 relative overflow-hidden shadow-lg">
            <img 
              src="/images/cheryl.webp" 
              alt="Cheryl Towey - Real Estate Agent" 
              className="w-full h-auto aspect-square object-cover object-center scale-[1.05] transition-transform duration-700 hover:scale-[1.1]"
            />
          </div>

          {/* Agent Info */}
          <div className="order-1 lg:order-2">
            <h3 className="scroll-animate text-2xl font-serif font-light text-black mb-4">
              Cheryl Towey Services
            </h3>
            <p className="scroll-animate text-base text-secondary mb-6">
              Cheryl Towey Services Agent
            </p>
            <div className="scroll-animate text-gray-dark leading-relaxed space-y-4 mb-8 text-sm">
              <p>
                Cheryl Towey Services is a dedicated real estate professional serving New Jersey's most desirable communities. With over 15 years of experience in the real estate industry, Cheryl specializes in residential properties throughout Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.
              </p>
              <p>
                Her deep knowledge of local markets, commitment to exceptional client service, and personalized approach make her the trusted choice for buyers and sellers throughout New Jersey. Cheryl understands that buying or selling a home is one of life's most important decisions, and she is committed to guiding her clients through every step of the process with professionalism, integrity, and care.
              </p>
            </div>
            <Link 
              href="/about" 
              className="scroll-animate text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-base inline-block"
            >
              Learn More About Cheryl
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAgent;

