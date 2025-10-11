import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto leading-relaxed">
            {/* TODO: Add contact page description */}
            [We look forward to hearing from you and helping with your real estate needs]
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
