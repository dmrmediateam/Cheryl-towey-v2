import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Cheryl Towey
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-gray-200">
          Your Trusted Real Estate Professional
        </p>
        <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Finding your dream home in New Jersey with personalized service and expert market knowledge
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/listings" className="btn-secondary w-full sm:w-auto">
            View Properties
          </Link>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto">
            Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400">500+</div>
            <div className="text-gray-300">Homes Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-400">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
