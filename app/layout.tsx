import type { Metadata } from 'next'
import { Bodoni_Moda, Varela } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { StructuredData, MultiStructuredData } from '@/app/components/StructuredData'
import {
  getRealEstateAgentSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getOrganizationSchema,
} from '@/lib/structuredData'

// Bodoni Moda for headings - Elegant luxury serif
const bodoniModa = Bodoni_Moda({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni',
  display: 'swap',
})

// Varela for body text - Clean, modern sans-serif
const varela = Varela({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-varela',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cheryl Towey - Real Estate Professional | NJ Homes',
  description: 'Expert real estate services in Northwest New Jersey. Find homes in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington. Trust Cheryl Towey for professional guidance.',
  keywords: 'real estate, New Jersey, homes for sale, property listings, Cheryl Towey, Hackettstown, Andover, Byram, Blairstown, Chester, Washington',
  openGraph: {
    title: 'Cheryl Towey - Real Estate Professional',
    description: 'Find your dream home in Northwest New Jersey with expert real estate services.',
    url: 'https://www.realestatebycherylnj.com',
    siteName: 'Cheryl Towey Real Estate',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheryl Towey Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${varela.variable}`}>
      <head>
        {/* Global Structured Data */}
        <MultiStructuredData
          schemas={[
            getOrganizationSchema(),
            getRealEstateAgentSchema(),
            getLocalBusinessSchema(),
            getWebsiteSchema(),
          ]}
        />
      </head>
      <body className={varela.className}>
        <Script
          src="https://kestrel.idxhome.com/ihf-kestrel.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ihf-kestrel-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ihfKestrel = window.ihfKestrel || {};
              ihfKestrel.config = {
                platform: "custom",
                activationToken: "5bde82f9-6b1d-4223-b1a3-7b664e7c5a6e",
              };
            `,
          }}
        />
        <ScrollProgressBar />
        <ScrollAnimations />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
