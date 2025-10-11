import Link from 'next/link';

const Communities = () => {
  // TODO: Replace with actual service areas data
  const serviceAreas = [
    { name: '[Area 1]', description: '[Description of area 1 and services provided]' },
    { name: '[Area 2]', description: '[Description of area 2 and services provided]' },
    { name: '[Area 3]', description: '[Description of area 3 and services provided]' },
    { name: '[Area 4]', description: '[Description of area 4 and services provided]' },
    { name: '[Area 5]', description: '[Description of area 5 and services provided]' },
    { name: '[Area 6]', description: '[Description of area 6 and services provided]' },
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
            {/* TODO: Add description of service areas */}
            [Description of communities and areas served]
          </p>
        </div>

        {/* Service Areas Content */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-serif font-light text-black mb-8">
            {/* TODO: Update heading */}
            [Agent Name]'s Primary Service Areas
          </h3>
          <p className="text-gray-dark leading-relaxed mb-12 text-base">
            {/* TODO: Add service areas overview text */}
            [Overview of primary service areas with key highlights and specializations]
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

