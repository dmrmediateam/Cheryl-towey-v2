'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with email service or backend API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-sm border border-gold text-center">
        <div className="w-16 h-16 bg-gray-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-light text-black mb-2">Thank You!</h3>
        <p className="text-gray-dark">
          {/* TODO: Update success message */}
          Your message has been received. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto mt-8">
            {/* TODO: Add contact description */}
            [We would be delighted to assist you with your real estate needs]
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-serif font-light text-black mb-2">
                {/* TODO: Add contact heading */}
                Contact [Agent Name]
              </h3>
              <div className="w-16 h-0.5 bg-secondary mb-8"></div>
              
              <div className="space-y-8 mb-12">
                <div>
                  <div className="text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">Phone</div>
                  {/* TODO: Add actual phone number */}
                  <div className="text-xl font-serif font-light text-black">[Phone Number]</div>
                </div>
                <div>
                  <div className="text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">Email</div>
                  {/* TODO: Add actual email */}
                  <div className="text-xl font-serif font-light text-black">[Email Address]</div>
                </div>
                <div>
                  <div className="text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">Office</div>
                  {/* TODO: Add actual office address */}
                  <div className="text-xl font-serif font-light text-black">[Office Address]</div>
                </div>
              </div>

              <p className="text-gray-dark leading-relaxed text-base">
                {/* TODO: Add personalized message */}
                [Personalized message about services and commitment to clients]
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-serif font-light text-black mb-2">Send a Message</h3>
              <div className="w-16 h-0.5 bg-secondary mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray bg-white focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray bg-white focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray bg-white focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-black mb-3 font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray bg-white focus:outline-none focus:border-secondary resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
