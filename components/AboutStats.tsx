const AboutStats = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        {/* About Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            {/* TODO: Add agency/agent name */}
            About [Agent/Agency Name] Services
          </h2>
          <p className="text-lg text-gray-dark leading-relaxed mt-8">
            {/* TODO: Add about description */}
            [Description of services and expertise]
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-6xl font-serif font-light text-secondary mb-3">
              {/* TODO: Add actual stat */}
              10+
            </div>
            <div className="text-sm uppercase tracking-widest text-black font-light">
              YEARS OF EXPERIENCE
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-serif font-light text-secondary mb-3">
              {/* TODO: Add actual stat */}
              250+
            </div>
            <div className="text-sm uppercase tracking-widest text-black font-light">
              HAPPY FAMILIES SERVED
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-serif font-light text-secondary mb-3">
              {/* TODO: Add actual stat */}
              100%
            </div>
            <div className="text-sm uppercase tracking-widest text-black font-light">
              CLIENT SATISFACTION
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#team" 
            className="text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-lg"
          >
            {/* TODO: Update link text */}
            Learn More About [Agent Name]
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

