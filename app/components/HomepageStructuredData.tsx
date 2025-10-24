/**
 * Homepage Structured Data
 * Adds SEO-optimized schema.org markup for better LLM and search engine discovery
 */

import { MultiStructuredData } from '@/app/components/StructuredData'
import {
  getRealEstateAgentSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getAggregateOfferSchema,
} from '@/lib/structuredData'

export function HomepageStructuredData() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.realestatebycherylnj.com' },
  ]

  const propertyStats = {
    count: 250,
    minPrice: 415000,
    maxPrice: 525000,
  }

  return (
    <MultiStructuredData
      schemas={[
        getRealEstateAgentSchema(),
        getLocalBusinessSchema(),
        getWebsiteSchema(),
        getOrganizationSchema(),
        getBreadcrumbSchema(breadcrumbs),
        getAggregateOfferSchema(propertyStats),
      ]}
    />
  )
}
