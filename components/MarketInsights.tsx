import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blogPosts';

const MarketInsights = async () => {
  // Fetch latest 4 blog posts from Sanity
  const allPosts = await getAllBlogPosts();
  const insights = allPosts.slice(0, 4);

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
        {insights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {insights.map((post) => (
              <Link 
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white border border-gray rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-light overflow-hidden">
                  <img 
                    src={post.mainImage.asset.url} 
                    alt={post.mainImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center text-black group-hover:text-gold transition-colors duration-200">
                    <span className="text-sm mr-2">Read More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-dark text-lg">
              Blog posts coming soon. Check back for market insights and real estate resources.
            </p>
          </div>
        )}

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

