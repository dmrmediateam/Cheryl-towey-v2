const SearchProperties = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Search Properties
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto mt-8">
            {/* TODO: Add description text */}
            [Property search description]
          </p>
        </div>

        {/* TODO: Integrate iHomeFinder or MLS property search widget */}
        <div className="bg-gray-light p-12 rounded-sm text-center">
          <img 
            src="/images/no-image.svg" 
            alt="No listings yet" 
            className="w-48 opacity-60 mx-auto mb-4"
          />
          <p className="text-gray-dark text-lg">
            Advanced property search integration coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchProperties;

