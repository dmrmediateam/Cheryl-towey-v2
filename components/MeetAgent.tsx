import Link from 'next/link';

const MeetAgent = () => {
  return (
    <section className="section-padding bg-white" id="team">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            {/* TODO: Add agent/team name */}
            Meet [Agent Name]
          </h2>
          <p className="text-lg text-gray-dark mt-8">
            {/* TODO: Add tagline */}
            [Tagline about real estate professional]
          </p>
        </div>

        {/* Agent Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Agent Image */}
          <div className="order-2 lg:order-1">
            {/* TODO: Replace with actual agent photo */}
            <img 
              src="/images/no-image.svg" 
              alt="Agent photo placeholder" 
              className="w-full rounded-sm shadow-lg"
            />
          </div>

          {/* Agent Info */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-serif font-light text-black mb-4">
              {/* TODO: Add agent name */}
              [Agent Name]
            </h3>
            <p className="text-lg text-secondary mb-6">
              {/* TODO: Add agent title */}
              [Agent Title/Role]
            </p>
            <div className="text-gray-dark leading-relaxed space-y-4 mb-8 text-base">
              {/* TODO: Add agent bio */}
              <p>
                [Agent biography and experience description. Include years of experience, 
                specializations, areas served, and personal approach to real estate.]
              </p>
              <p>
                [Additional paragraph about expertise, credentials, and commitment to clients.]
              </p>
            </div>
            <Link 
              href="/about" 
              className="text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-lg inline-block"
            >
              {/* TODO: Update link text */}
              Learn More About [Agent Name]
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAgent;

