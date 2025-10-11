'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alyssa Michelle',
    location: 'New Jersey',
    text: 'Cheryl is the most caring, professional, and hard working realtor there is! She will always go above and beyond for her clients and makes you feel like family. I had the pleasure of working with her through the buying process and selling process and could not imagine doing it without her. Highly recommend her!!',
    image: '/images/client-placeholder.svg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-dark max-w-3xl mx-auto mt-8">
                Trusted voices from our distinguished clientele who experienced our exceptional service firsthand.
              </p>
            </div>

        {/* Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Client Image */}
            <div className="flex flex-col items-center">
              {/* TODO: Replace with actual client photos */}
              <img 
                src={current.image}
                alt={current.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-gold opacity-40"
              />
              <div className="text-center">
                <div className="font-bold text-black mb-1 text-lg">{current.name}</div>
                <div className="text-base text-gray-dark font-medium">{current.location}</div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2 bg-white p-12 rounded-sm border-l-4 border-gold shadow-lg">
              <div className="flex items-start mb-6">
                <div className="text-gold text-4xl mr-4 leading-none">"</div>
                <div>
                  <div className="flex items-center mb-4 text-xs text-gray-dark">
                    <span className="font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span className="mx-2">/</span>
                    <span>{String(testimonials.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-dark text-lg leading-relaxed mb-8 italic">
                {current.text}
              </blockquote>

              <div className="flex items-center justify-between">
                    <div className="text-sm text-gold uppercase tracking-wider">
                      Cheryl Towey's Client Experience
                    </div>
                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="text-black hover:text-gold transition-colors duration-200"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="text-black hover:text-gold transition-colors duration-200"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
