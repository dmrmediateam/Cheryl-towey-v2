import Link from 'next/link';

const MarketInsights = () => {
  const insights = [
    {
      title: 'Morris County NJ Homes: Complete Guide to Towns & Schools',
      category: 'Market Report',
      description: 'Morris County NJ homes average $696K with top schools, 35-min NYC commutes. Guide covers Morristown, Madison, Chatham, property taxes, and buying strategies.',
      link: '/blog/morris-county-nj-homes-complete-buyers-guide',
      image: '/images/326804e30db4dd3a9bf3ba35ee1c0298b4a99898-1024x1024.webp',
    },
    {
      title: 'Townhouses vs Condos vs Single-Family Homes NJ: Analysis',
      category: 'Investment Guide',
      description: 'Compare NJ townhouses ($365K), condos ($362K), and single-family homes ($434K). HOA fees, appreciation rates, maintenance costs, and lifestyle factors analyzed.',
      link: '/blog/townhouses-vs-condos-vs-single-family-homes-nj-investment-lifestyle',
      image: '/images/3cfeb6bd5fbb3b6f71ee93217ed93290f9277ecd-1024x1024.webp',
    },
    {
      title: 'New Construction Homes Under $400K in New Jersey',
      category: 'Market Report',
      description: 'Find new homes under $400K in NJ: D.R. Horton, Ryan Homes, Lennar developments in Camden, Atlantic, Burlington counties. Builder incentives save $10-30K.',
      link: '/blog/new-construction-homes-under-400k-new-jersey-2025',
      image: '/images/77926513c9fa8b1efd39b7cd5bb238016518da33-1024x1024.webp',
    },
    {
      title: 'The Complete New Jersey Real Estate Market Guide 2025',
      category: 'Market Report',
      description: 'The Complete New Jersey Real Estate Market Guide 2025: Counties, Trends, and Buyer Strategies',
      link: '/blog/new-jersey-real-estate-market-2025-county-trends-buyer-guide',
      image: '/images/f8bfc16550357fbca976cfbf0a7bb421b977c51f-1024x1024.webp',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Market Insights & Resources
          </h2>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto mt-8">
            Informed perspectives and essential resources for navigating New Jersey's luxury real estate landscape in Cheryl's service areas.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {insights.map((insight, index) => (
            <Link 
              key={index}
              href={insight.link}
              className="group bg-white border border-gray rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-light overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs uppercase tracking-wider">
                  {insight.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-black mb-3 group-hover:text-gold transition-colors duration-200">
                  {insight.title}
                </h3>
                <p className="text-gray-dark text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                <div className="flex items-center text-black group-hover:text-gold transition-colors duration-200">
                  <span className="text-sm mr-2">Read More</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/blog" 
            className="btn-outline"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;

