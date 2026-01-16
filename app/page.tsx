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
import { LocalBusinessSchema } from '@/app/components/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Morris County NJ Realtors | Real Estate Agent Cheryl Towey | Sussex & Warren County',
  description: 'Morris County NJ realtors - Cheryl Towey is your trusted real estate agent serving Morris County, Sussex County & Warren County NJ. Expert in Hackettstown, Chester, Morris Plains & Northwest NJ. Call 908-334-0971.',
  keywords: 'Morris County NJ realtors, Morris County real estate agent, real estate agent Hackettstown NJ, homes for sale Sussex County, Warren County realtor, Morris Plains realtor, Chester NJ properties, Parsippany real estate, Weichert Realtors Morris Plains, Northwest New Jersey homes',
  openGraph: {
    title: 'Morris County NJ Realtors | Cheryl Towey - Northwest New Jersey Real Estate Expert',
    description: 'Find your dream home in Morris County, Sussex County & Warren County NJ with experienced realtor Cheryl Towey. Trusted Morris County real estate agent since 2010.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.realestatebycherylnj.com',
    siteName: 'Real Estate by Cheryl NJ',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/cheryl-towey.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheryl Towey - Licensed Real Estate Agent in Northwest New Jersey',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morris County NJ Realtors | Cheryl Towey Real Estate',
    description: 'Expert Morris County NJ realtor serving Sussex, Warren & Morris Counties. Licensed real estate agent with Weichert Realtors Morris Plains.',
    images: ['https://www.realestatebycherylnj.com/images/cheryl-towey.jpg'],
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com',
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Hackettstown, New Jersey',
    'geo.position': '40.8359;-74.4815',
    'ICBM': '40.8359, -74.4815',
  },
}

export default function Home() {
  return (
    <>
      <HomepageStructuredData />
      <LocalBusinessSchema />
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
