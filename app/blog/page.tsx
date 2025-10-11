export default function BlogPage() {
  return (
    <div className="min-h-screen section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Market Insights & Blog
          </h1>
          <p className="text-lg text-gray-dark leading-relaxed">
            {/* TODO: Add blog description */}
            [Resources and insights about the real estate market]
          </p>
        </div>

        {/* TODO: Add blog posts grid */}
        <div className="bg-gray-light p-12 rounded-sm text-center">
          <img 
            src="/images/no-image.svg" 
            alt="Blog posts placeholder" 
            className="w-48 mx-auto opacity-40 mb-6"
          />
          <p className="text-gray-dark text-lg">
            Blog posts and market insights coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

