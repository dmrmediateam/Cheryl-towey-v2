import Link from 'next/link';

export const metadata = {
  title: 'Homes for Sale in Andover, NJ | Cheryl Towey',
  description: 'Browse luxury homes and real estate listings in Andover, New Jersey with Cheryl Towey, your trusted local real estate expert.',
};

export default function AndoverPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$485,000' },
    { label: 'Average Days on Market', value: '45 days' },
    { label: 'Properties Available', value: '35+' },
    { label: 'Average Price/SqFt', value: '$225' },
  ];

  const communityFeatures = [
    {
      title: 'Historic Main Street',
      description: 'Charming streetscape with black iron lamps, featuring local treasures like Andover Diner and Café Pierrot for cozy meals.',
      icon: '🏛️'
    },
    {
      title: 'Quality Education',
      description: 'Small class sizes in the Andover Regional School District with Florence M. Burd School earning a B grade from Niche.',
      icon: '🎓'
    },
    {
      title: 'Outdoor Recreation',
      description: 'Sussex Branch Trail for scenic biking and Lake Aeroflex for kayaking adventures in beautiful natural settings.',
      icon: '🌲'
    },
    {
      title: 'Community Spirit',
      description: 'Annual Memorial Day Wreath Ceremony, community garage sales, and Santa breakfast foster tight-knit connections.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Andover, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Tranquil Rural Retreat Homes for Sale</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Andover is a serene Sussex County gem encompassing a borough and township with roughly 7,000 residents. Andover offers peaceful countryside living just 40 miles from New York City. Known for its low crime rate and beautiful landscapes, this is a haven for families and nature lovers. As your local expert, I would be happy to guide you through finding or selling homes in this charming community. Andover's rural appeal and strong real estate market make it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Andover's Main Street, lined with black iron lamps, features local treasures like the Andover Diner and Café Pierrot, perfect for cozy meals and community vibes. Events like community garage sales and the Santa breakfast foster a tight-knit atmosphere. Homes near Main Street provide easy access to these local haunts, ideal for those craving a quaint, connected lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
            <Link href="/communities/andover/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Andover */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Andover, NJ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Excellence in Education
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Andover's schools, part of the Andover Regional School District, deliver quality education with small class sizes. Florence M. Burd School (Niche Grade: B) and Long Pond School cater to young learners, while Newton High School supports older students with programs like robotics. As your local guide, I can help you find homes in top school zones.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Rural Tranquility Meets Adventure
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From the Sussex Branch Trail's scenic biking paths to Lake Aeroflex's kayaking opportunities, Andover blends rural tranquility with outdoor adventure. The annual Memorial Day Wreath Ceremony and nearby NJ State Fair add community spirit. Homes near these natural and cultural attractions suit buyers seeking a peaceful yet active lifestyle in Northwest NJ.
              </p>
            </div>
          </div>

          {/* Community Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-serif font-light text-black mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Current Market Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm shadow-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/communities/andover/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Available Properties in Andover
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-2xl mx-auto">
              Discover your perfect rural retreat in this tranquil community, from historic Main Street properties to modern countryside estates.
            </p>
          </div>
          
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="scroll-animate bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border">
                <div className="h-64 bg-gray-300 flex items-center justify-center relative">
                  <span className="text-gray-dark text-sm">Property Image</span>
                  <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-1 text-xs rounded">
                    Rural Retreat
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-serif font-light text-black mb-2">
                    $XXX,XXX
                  </div>
                  <div className="text-sm text-gray-dark mb-2">
                    X bd | X ba | X,XXX sqft
                  </div>
                  <div className="text-sm text-gray-dark mb-4">
                    123 Main Street, Andover, NJ
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary flex-1 text-xs py-2">
                      View Details
                    </button>
                    <button className="btn-outline flex-1 text-xs py-2">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/properties" className="btn-primary mr-4">
              View All Properties
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Cheryl for Exclusive Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Embrace Rural Tranquility?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Andover's peaceful countryside community. From charming Main Street homes to spacious rural estates, I'll guide you to your ideal Northwest New Jersey retreat.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Home Search
            </Link>
            <Link 
              href="/communities" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Explore Other Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

