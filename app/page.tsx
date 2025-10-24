import type { Metadata } from 'next'
import Hero from '@/components/Hero';
import SearchProperties from '@/components/SearchProperties';
import AboutStats from '@/components/AboutStats';
import MeetAgent from '@/components/MeetAgent';
import Communities from '@/components/Communities';
import MarketInsights from '@/components/MarketInsights';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import { HomepageStructuredData } from '@/app/components/HomepageStructuredData';

export const metadata: Metadata = {
  title: 'Real Estate by Cheryl Towey - Northern New Jersey Realtor',
  description: 'Expert real estate services in Northwest New Jersey. Find your dream home with Cheryl Towey, your trusted Weichert Realtors professional.',
}

export default function Home() {
  return (
    <>
      <HomepageStructuredData />
      <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Search Properties Section */}
      <SearchProperties />

      {/* About with Stats Section */}
      <AboutStats />

      {/* Meet Agent Section */}
      <MeetAgent />

      {/* Communities/Locations Section */}
      <Communities />

      {/* Market Insights Section */}
      <MarketInsights />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />

      {/* Call to Action Section */}
      <CallToAction />
      </div>
    </>
  );
}
