import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mr1.webp)'
        }}
      >
        {/* Black Gradient Overlay from Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-30% to-black/50"></div>
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 text-left text-white px-6 sm:px-12 lg:px-20 max-w-7xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-6 tracking-wide text-white fade-in-left">
          Cheryl Towey
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 tracking-wide font-serif font-light text-white fade-in-left fade-in-left-delay-2">
          Weichert Realtors
        </h2>
        <p className="text-base sm:text-lg mb-12 text-white tracking-wide fade-in-left fade-in-left-delay-3">
          New Jersey • Hackettstown • Andover • Byram • Blairstown • Chester • Washington
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-start fade-in-left fade-in-left-delay-4">
          <Link href="/listings" className="btn-primary w-full sm:w-auto text-sm text-white">
            View Listings
          </Link>
          <Link href="/contact" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-sm font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;