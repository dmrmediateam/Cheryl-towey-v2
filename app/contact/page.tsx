import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Contact Cheryl Towey | NJ Real Estate Agent | Schedule a Consultation',
  description: 'Contact licensed NJ real estate agent Cheryl Towey. Schedule a free consultation for buying or selling a home in Morris, Sussex, or Warren County. Call 908-334-0971.',
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/contact',
  },
  openGraph: {
    title: 'Contact Cheryl Towey | NJ Real Estate Agent',
    description: 'Schedule a free consultation with Cheryl Towey, your trusted NJ real estate agent.',
    url: 'https://www.realestatebycherylnj.com/contact',
    siteName: 'Real Estate by Cheryl NJ',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
    <div className="min-h-screen">
      {/* Page Header */}

      {/* Contact Form Section */}
      <ContactForm />
    </div>
    </>
  );
}
