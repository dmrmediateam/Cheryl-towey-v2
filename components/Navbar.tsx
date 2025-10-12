'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Buyers', href: '/buyers' },
    { name: 'Sellers', href: '/sellers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const communities = [
    { name: 'Sussex County', href: '/communities/sussex-county' },
    { name: 'Warren County', href: '/communities/warren-county' },
    { name: 'Hackettstown', href: '/communities/hackettstown' },
    { name: 'Andover', href: '/communities/andover' },
    { name: 'Byram', href: '/communities/byram' },
    { name: 'Blairstown', href: '/communities/blairstown' },
    { name: 'Chester', href: '/communities/chester' },
    { name: 'Washington', href: '/communities/washington' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-2 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 md:py-0 z-10">
            <img 
              src="https://www.realestatebycherylnj.com/logos/weichert-logo.svg" 
              alt="Weichert Realtors Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Hidden, using menu instead */}
          <div className="hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-secondary font-serif text-sm transition-colors duration-200 relative group tracking-wide"
                style={{ fontWeight: 300 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Menu button - Right aligned on all screens */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-black hover:text-gold hover:bg-gray-light z-50 relative transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Full Screen Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-2/3 bg-white z-40 shadow-2xl transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="container-max h-full py-16 px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
              
              {/* Left Side - Navigation */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">Navigation</h2>
                
                <Link
                  href="/"
                  className="text-2xl md:text-3xl font-serif font-light text-black hover:text-gold transition-all duration-700 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-700 group-hover:w-full"></span>
                </Link>

                {/* Communities Section */}
                <div className="space-y-3">
                  <div className="text-2xl md:text-3xl font-serif font-light text-black tracking-wide">
                    Communities
                  </div>
                  <div className="pl-4 space-y-2">
                    {communities.map((community) => (
                      <Link
                        key={community.name}
                        href={community.href}
                        className="block text-base md:text-lg font-serif font-light text-gray-dark hover:text-gold transition-all duration-700 relative group w-fit"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {community.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-700 group-hover:w-full"></span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/buyers"
                  className="text-2xl md:text-3xl font-serif font-light text-black hover:text-gold transition-all duration-700 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buyers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-700 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/sellers"
                  className="text-2xl md:text-3xl font-serif font-light text-black hover:text-gold transition-all duration-700 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sellers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-700 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/blog"
                  className="text-2xl md:text-3xl font-serif font-light text-black hover:text-gold transition-all duration-700 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-700 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/contact"
                  className="text-2xl md:text-3xl font-serif font-light text-black hover:text-gold transition-all duration-700 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-700 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col justify-center space-y-10 lg:border-l lg:border-gray-300 lg:pl-16">
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-gold mb-6 font-semibold">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-dark mb-2">Phone</div>
                      <a 
                        href="tel:9083340971" 
                        className="text-xl md:text-2xl font-serif font-light text-black hover:text-gold transition-colors duration-300"
                      >
                        908.334.0971
                      </a>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-dark mb-2">Email</div>
                      <a 
                        href="mailto:yournjrealtor1@gmail.com" 
                        className="text-base md:text-lg font-serif font-light text-black hover:text-gold transition-colors duration-300 break-all"
                      >
                        yournjrealtor1@gmail.com
                      </a>
                    </div>

                    {/* Office */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-dark mb-2">Office</div>
                      <address className="text-base md:text-lg font-serif font-light text-black not-italic">
                        1625 NJ-10 East<br />
                        Morris Plains, NJ 07950
                      </address>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3">
                      <Link
                        href="/contact"
                        className="inline-block btn-primary text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Schedule a Consultation
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-300">
                  <div className="text-xs uppercase tracking-widest text-gray-dark mb-3">Follow</div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/homewithcheryl/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gold transition-colors duration-300"
                      aria-label="Visit Cheryl Towey on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/at_home_with_cheryl/?hl=en" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gold transition-colors duration-300"
                      aria-label="Follow Cheryl Towey on Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/cheryl-towey-35384864/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gold transition-colors duration-300"
                      aria-label="Connect with Cheryl Towey on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
