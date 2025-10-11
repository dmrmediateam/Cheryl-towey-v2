import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-gold">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {/* TODO: Add logo image */}
              <div className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                [LOGO]
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {/* TODO: Add company description */}
              [Brief description of the real estate business and services]
            </p>
            <div className="text-sm text-gray-400">
              {/* TODO: Add office address */}
              <div>[Office Address]</div>
              <div>[City, State ZIP]</div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/market-reports" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Buyer's Guide
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Seller's Guide
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Communities</h4>
            <ul className="space-y-3">
              {/* TODO: Add actual service area links */}
              <li>
                <Link href="/communities/area1" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  [Area 1]
                </Link>
              </li>
              <li>
                <Link href="/communities/area2" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  [Area 2]
                </Link>
              </li>
              <li>
                <Link href="/communities/area3" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  [Area 3]
                </Link>
              </li>
              <li>
                <Link href="/communities/area4" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  [Area 4]
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <span className="font-semibold text-white">T:</span>
                {/* TODO: Add phone number */}
                <span className="ml-2">[Phone]</span>
              </div>
              <div>
                <span className="font-semibold text-white">E:</span>
                {/* TODO: Add email */}
                <span className="ml-2">[Email]</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xs font-semibold text-gold uppercase tracking-wider mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {/* TODO: Add actual social media links */}
                <a href="#" className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm">
                  L
                </a>
                <a href="#" className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm">
                  Z
                </a>
                <a href="#" className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm">
                  R
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="border-t border-gray-800 py-8">
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Legal & Compliance Information</h4>
          <div className="space-y-4">
            {/* TODO: Add actual disclaimer content */}
            <div className="border border-gray-800 bg-gray-900 p-4 rounded-sm text-xs text-gray-400">
              [MLS® Disclaimer & IDX Information]
            </div>
            <div className="border border-gray-800 bg-gray-900 p-4 rounded-sm text-xs text-gray-400">
              [Fair Housing & Equal Opportunity Statement]
            </div>
            <div className="border border-gray-800 bg-gray-900 p-4 rounded-sm text-xs text-gray-400">
              [Professional Licensing & REALTOR® Information]
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs">
              {/* TODO: Update copyright text */}
              © {currentYear} [Agent/Company Name]. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-gold transition-colors">
                Accessibility
              </Link>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                {/* TODO: Add designer credit */}
                Designed & Developed by [Company Name]
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
