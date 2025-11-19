import React from 'react';
import { VscStarFull } from 'react-icons/vsc';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B1A1B] text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <VscStarFull size={32} className="text-[#f7b709]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Trust Builder
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's most powerful review platform. Helping consumers make
              better buying decisions and businesses earn trust.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f7b709] transition-colors"
                />
                <button className="px-4 py-2 bg-[#f7b709] hover:bg-[#e6a908] text-gray-900 font-medium rounded-lg transition-colors duration-200">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
                { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-[#f7b709] rounded-lg transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={16}
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* For Consumers */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              For Consumers
            </h3>
            <ul className="space-y-3">
              {[
                'Write a Review',
                'Search Categories',
                'Recent Reviews',
                'Top Rated Companies',
                'Review Guidelines',
                'Community Guidelines',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              For Business
            </h3>
            <ul className="space-y-3">
              {[
                'Business Solutions',
                'Claim Your Profile',
                'Review Management',
                'TrustBuilder for Business',
                'Success Stories',
                'Pricing Plans',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Company & Support
            </h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Blog & News',
                'Careers',
                'Contact Support',
                'Help Center',
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-2">
                Trust & Security
              </h4>
              <p className="text-gray-400 text-sm">
                Verified reviews • Secure platform • Fraud detection
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                'SSL Secure',
                'GDPR Compliant',
                '24/7 Monitoring',
                'Verified Reviews',
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <div className="w-2 h-2 bg-[#f7b709] rounded-full"></div>
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trust Builder. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-400 flex items-center gap-2">
                <VscStarFull size={16} className="text-[#f7b709]" />
                Trusted by millions of users worldwide
              </span>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 text-sm"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 text-sm"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#f7b709] transition-colors duration-200 text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
