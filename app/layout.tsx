import type { Metadata } from 'next'
import { Bodoni_Moda, Varela } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'

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
  title: 'Cheryl Towey - Real Estate Professional',
  description: 'Professional real estate services in New Jersey. Find your dream home with Cheryl Towey.',
  keywords: 'real estate, New Jersey, homes for sale, property listings, Cheryl Towey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${varela.variable}`}>
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
                platform: "",
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
