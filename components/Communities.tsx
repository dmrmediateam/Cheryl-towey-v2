import Link from 'next/link';

const Communities = () => {
  const serviceAreas = [
    { 
      name: 'Hackettstown', 
      slug: 'hackettstown',
      description: 'Cheryl\'s primary service area - charming Warren County town with historic homes, excellent schools, and modern conveniences' 
    },
    { 
      name: 'Andover', 
      slug: 'andover',
      description: 'Cheryl serves this picturesque Sussex County community with beautiful homes and scenic landscapes' 
    },
    { 
      name: 'Byram', 
      slug: 'byram',
      description: 'Cheryl specializes in this desirable Sussex County township with excellent schools and family-friendly neighborhoods' 
    },
    { 
      name: 'Blairstown', 
      slug: 'blairstown',
      description: 'Cheryl serves this historic Warren County town with stunning homes and rural charm' 
    },
    { 
      name: 'Chester', 
      slug: 'chester',
      description: 'Cheryl\'s expertise extends to this Morris County gem with luxury homes and excellent shopping and dining' 
    },
    { 
      name: 'Washington', 
      slug: 'washington',
      description: 'Cheryl serves this Warren County community with beautiful properties and convenient access to major highways' 
    },
  ];

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Our Locations
          </h2>
          <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto mt-8">
            Discover exceptional properties in New Jersey's most prestigious communities
          </p>
        </div>

        {/* Service Areas Content */}
        <div className="max-w-5xl mx-auto">
            

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={`/communities/${area.slug}`}
                className="scroll-animate bg-white p-6 rounded-sm border-l-4 border-gold hover:shadow-lg hover:border-gold-dark transition-all duration-200 group"
              >
                <h4 className="text-lg font-serif font-light text-black mb-3 group-hover:text-gold transition-colors duration-200">
                  {area.name}
                </h4>
                <p className="text-gray-dark text-xs leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-4 text-gold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-200">
                  View Properties
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="scroll-animate text-center">
            <Link 
              href="/listings" 
              className="inline-flex items-center text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-base"
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

