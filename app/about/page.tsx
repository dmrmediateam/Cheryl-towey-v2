import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            {/* TODO: Add agent/company name */}
            About [Agent/Company Name]
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto leading-relaxed">
            {/* TODO: Add about description */}
            [Professional real estate services with commitment to excellence]
          </p>
        </div>
      </section>

      {/* Agent Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Agent Image */}
            <div>
              {/* TODO: Replace with actual agent photo */}
              <img 
                src="/images/no-image.svg" 
                alt="Agent photo placeholder" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>

            {/* Agent Info */}
            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                {/* TODO: Add agent name */}
                [Agent Name]
              </h2>
              <p className="text-lg text-gold mb-6">
                {/* TODO: Add agent credentials */}
                [Title, Credentials, Licenses]
              </p>
              <div className="space-y-4 text-gray-dark leading-relaxed">
                {/* TODO: Add agent biography */}
                <p>
                  [First paragraph about experience and background in real estate]
                </p>
                <p>
                  [Second paragraph about specializations and areas of expertise]
                </p>
                <p>
                  [Third paragraph about personal approach and commitment to clients]
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              {/* TODO: Add actual stat */}
              <div className="text-5xl font-light text-black mb-2">[250+]</div>
              <div className="text-sm uppercase tracking-wider text-gray-dark">
                HOMES SOLD
              </div>
            </div>
            <div className="text-center">
              {/* TODO: Add actual stat */}
              <div className="text-5xl font-light text-black mb-2">[10+]</div>
              <div className="text-sm uppercase tracking-wider text-gray-dark">
                YEARS EXPERIENCE
              </div>
            </div>
            <div className="text-center">
              {/* TODO: Add actual stat */}
              <div className="text-5xl font-light text-black mb-2">[100%]</div>
              <div className="text-sm uppercase tracking-wider text-gray-dark">
                CLIENT SATISFACTION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-black mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              {/* TODO: Add description */}
              [Professional credentials and recognition]
            </p>
          </div>

          {/* TODO: Add certifications grid */}
          <div className="bg-gray-light p-12 rounded-sm text-center max-w-4xl mx-auto">
            <img 
              src="/images/no-image.svg" 
              alt="Certifications placeholder" 
              className="w-48 mx-auto opacity-40 mb-6"
            />
            <p className="text-gray-dark text-lg">
              Certifications, awards, and professional affiliations will be displayed here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
