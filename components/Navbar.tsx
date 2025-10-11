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

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray">
      <div className="container-max">
        <div className="flex justify-between items-center py-2 md:py-6 md:justify-center md:relative">
          {/* Logo - TODO: Replace with actual logo */}
          <Link href="/" className="flex items-center md:absolute md:left-4 lg:left-8 py-2 md:py-0">
            <div className="text-2xl text-black tracking-tight">
              {/* TODO: Add logo image here */}
              <span className="block font-serif font-extralight">REAL ESTATE</span>
              <span className="text-sm font-extralight text-gray-dark">Professional Services</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-secondary font-serif text-xl transition-colors duration-200 relative group tracking-wide"
                style={{ fontWeight: 300 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-black hover:text-gold hover:bg-gray-light"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-secondary font-serif text-xl transition-colors duration-200 px-4 py-2 tracking-wide"
                  style={{ fontWeight: 300 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
