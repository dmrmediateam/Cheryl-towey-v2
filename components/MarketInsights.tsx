import Link from 'next/link';

const MarketInsights = () => {
  // TODO: Replace with actual blog posts/insights data
  const insights = [
    {
      title: '[Blog Post Title 1]',
      category: 'Market Report',
      description: '[Brief description of the blog post content and key insights]',
      link: '#',
    },
    {
      title: '[Blog Post Title 2]',
      category: 'Investment Guide',
      description: '[Brief description of the blog post content and key insights]',
      link: '#',
    },
    {
      title: '[Blog Post Title 3]',
      category: 'Market Report',
      description: '[Brief description of the blog post content and key insights]',
      link: '#',
    },
    {
      title: '[Blog Post Title 4]',
      category: 'Buyer Guide',
      description: '[Brief description of the blog post content and key insights]',
      link: '#',
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
            {/* TODO: Add description */}
            [Informed perspectives and essential resources for navigating the real estate landscape]
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
              {/* TODO: Replace with actual blog post featured images */}
              <div className="relative h-48 bg-gray-light overflow-hidden">
                <img 
                  src="/images/no-image.svg" 
                  alt={insight.title}
                  className="w-full h-full object-cover opacity-40"
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

