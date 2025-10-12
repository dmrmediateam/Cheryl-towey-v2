import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.2]"
          src="https://redesign-media.s3.eu-north-1.amazonaws.com/michaud-rauer/581sagee.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      
      {/* Black Gradient Overlay from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-30% to-black/50"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 text-left text-white px-6 sm:px-12 lg:px-20 max-w-7xl">
        {/* Hero Name with Gold Accent Line */}
        <div className="inline-block mb-8 fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-[-0.03em] text-white relative pb-4">
            Cheryl Towey
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[2px] bg-gold"></span>
          </h1>
        </div>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 tracking-wide font-serif font-light text-white fade-in-left fade-in-left-delay-2">
          Weichert Realtors
        </h2>
        <p className="text-sm sm:text-base mb-10 text-white tracking-wide fade-in-left fade-in-left-delay-3">
          New Jersey • Hackettstown • Andover • Byram • Blairstown • Chester • Washington
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-start fade-in-left fade-in-left-delay-4">
          <Link href="/listings" className="btn-primary w-full sm:w-auto text-xs sm:text-sm text-white">
            View Listings
          </Link>
          <Link href="/contact" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-xs sm:text-sm font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;