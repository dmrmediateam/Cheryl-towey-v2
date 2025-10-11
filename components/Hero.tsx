import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* TODO: Replace with video background or high-quality hero image */}
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/no-image.svg)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* TODO: Replace with actual agent name and tagline */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light mb-6 tracking-wide">
          [Agent Name]
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-wide font-serif font-light">
          [Brokerage Name]
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-white tracking-wide">
          {/* TODO: Add service areas */}
          [Service Areas - City • Town • County]
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