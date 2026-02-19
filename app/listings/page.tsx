import type { Metadata } from 'next'
import Listings from '@/app/components/Listings';
import { BreadcrumbSchema } from '@/app/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NJ Homes for Sale | Property Listings | Cheryl Towey',
  description: 'Browse homes for sale in Sussex County, Warren County, and Morris County NJ. View property listings, photos, and details. Licensed realtor Cheryl Towey. Call 908-334-0971.',
  keywords: 'NJ homes for sale, Sussex County listings, Warren County properties, Morris County real estate, New Jersey property listings',
  openGraph: {
    title: 'Property Listings | Northwest NJ Homes for Sale',
    description: 'Search available homes in Northwest New Jersey with Cheryl Towey, your local real estate expert.',
    url: 'https://www.realestatebycherylnj.com/listings',
  },
  alternates: {
    canonical: 'https://www.realestatebycherylnj.com/listings',
  },
};

export default function ListingsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Listings', url: '/listings' },
        ]}
      />
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="section-padding bg-gray-light">
          <div className="container-max text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-black mb-6">
              Property Listings
            </h1>
          </div>
        </section>

        {/* iHomeFinder Listings Component */}
        <Listings />
      </div>
    </>
  );
}
