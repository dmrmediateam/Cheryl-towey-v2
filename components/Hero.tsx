import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mr1.webp)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light mb-6 tracking-wide">
          Cheryl Towey
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-wide font-serif font-light">
          Weichert Realtors
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-white tracking-wide">
          New Jersey • Hackettstown • Andover • Byram • Blairstown • Chester • Washington
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/listings" className="btn-primary w-full sm:w-auto text-base">
            View Listings
          </Link>
          <Link href="/contact" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-base font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;