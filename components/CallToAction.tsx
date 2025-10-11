import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* TODO: Replace with actual background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/no-image.svg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 container-max text-center text-white">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-8">
          {/* TODO: Add CTA heading */}
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          {/* TODO: Add CTA description */}
          [Description about working together and personalized service]
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-5xl font-serif font-light mb-2 text-secondary">250+</div>
            <div className="text-sm uppercase tracking-widest text-white">Homes Sold</div>
          </div>
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-5xl font-serif font-light mb-2 text-secondary">10+</div>
            <div className="text-sm uppercase tracking-widest text-white">Years Experience</div>
          </div>
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-5xl font-serif font-light mb-2 text-secondary">5.0</div>
            <div className="text-sm uppercase tracking-widest text-white">Client Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/listings" className="btn-primary">
            View Listings
          </Link>
          <Link 
            href="/contact" 
            className="btn-outline border-white text-white hover:bg-white hover:text-black"
          >
            {/* TODO: Update button text */}
            Contact [Agent Name]
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

