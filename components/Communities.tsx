import Link from 'next/link';

const Communities = () => {
  const serviceAreas = [
    { name: 'Hackettstown', description: 'Cheryl\'s primary service area - charming Warren County town with historic homes, excellent schools, and modern conveniences' },
    { name: 'Andover', description: 'Cheryl serves this picturesque Sussex County community with beautiful homes and scenic landscapes' },
    { name: 'Byram', description: 'Cheryl specializes in this desirable Sussex County township with excellent schools and family-friendly neighborhoods' },
    { name: 'Blairstown', description: 'Cheryl serves this historic Warren County town with stunning homes and rural charm' },
    { name: 'Chester', description: 'Cheryl\'s expertise extends to this Morris County gem with luxury homes and excellent shopping and dining' },
    { name: 'Washington', description: 'Cheryl serves this Warren County community with beautiful properties and convenient access to major highways' },
  ];

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Our Locations
          </h2>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto mt-8">
            Discover exceptional properties in New Jersey's most prestigious waterfront communities
          </p>
        </div>

        {/* Service Areas Content */}
        <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-serif font-light text-black mb-8">
                Cheryl's Primary Service Areas
              </h3>
              <p className="text-gray-dark leading-relaxed mb-12 text-base">
                Cheryl specializes in these six beautiful New Jersey communities with personalized real estate expertise. From historic homes in Hackettstown to luxury properties in Chester, she provides exceptional service throughout Warren, Sussex, and Morris Counties.
              </p>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-200"
              >
                <h4 className="text-xl font-serif font-light text-black mb-3">
                  {area.name}
                </h4>
                <p className="text-gray-dark text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              href="/listings" 
              className="inline-flex items-center text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-lg"
            >
              View Properties
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;

