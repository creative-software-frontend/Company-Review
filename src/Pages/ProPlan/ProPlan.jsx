import React from 'react';
import {
  FaStar,
  FaCheck,
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
} from 'react-icons/fa';

export default function ProPlan() {
  return (
    <>
      {/* Compact Multicolor Gradient Hero Banner */}
      <div className="bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white py-10 px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Star Icon */}
          <div className="flex justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-full p-5 shadow-2xl">
              <FaStar className="w-16 h-16 drop-shadow-lg" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Pro Plan – Level Up Your Reputation
          </h1>

          <p className="text-lg lg:text-xl max-w-3xl mx-auto opacity-95 hidden sm:block">
            Advanced automation, video reviews, team tools, analytics &
            integrations – everything ambitious brands use to dominate trust.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="text-5xl lg:text-6xl font-extrabold">€249</span>
            <span className="text-xl opacity-80">/ month</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="bg-white text-purple-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-2xl flex items-center gap-3">
              Start 14-day free trial <FaArrowRight />
            </button>
            <p className="text-sm opacity-90">
              No credit card • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Built for Growing Brands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-gradient-to-r from-red-500 to-pink-500">
              <FaChartLine className="w-12 h-12 text-purple-600 mb-5" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Deep Analytics
              </h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Competitor benchmarking',
                  'Sentiment analysis',
                  'Custom dashboards',
                  'Export & schedule reports',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 text-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 - Most Popular */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition transform lg:scale-105 relative overflow-hidden border-t-4 border-gradient-to-r from-pink-500 to-purple-600">
              <div className="absolute  left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <FaUsers className="w-12 h-12 text-purple-600 mb-5" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Team & Automation
              </h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Multi-user access',
                  'Automated review invites',
                  'API & Webhooks',
                  'Zapier + 100+ apps',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 text-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-gradient-to-r from-purple-500 to-red-500">
              <FaShieldAlt className="w-12 h-12 text-purple-600 mb-5" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Display
              </h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Video & photo reviews',
                  'Premium TrustBoxes',
                  'Google Rich Snippets',
                  'Review highlights',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 text-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-24">
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-full p-16 shadow-3xl">
                <FaStar className="w-40 h-40 text-white" />
              </div>
              {[
                'https://randomuser.me/api/portraits/women/27.jpg',
                'https://randomuser.me/api/portraits/men/81.jpg',
                'https://randomuser.me/api/portraits/women/44.jpg',
                'https://randomuser.me/api/portraits/men/19.jpg',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="happy customer"
                  className={`absolute w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover ${
                    i === 0
                      ? 'top-4 left-8'
                      : i === 1
                      ? '-top-6 right-6'
                      : i === 2
                      ? 'bottom-8 left-2'
                      : 'bottom-0 right-10'
                  }`}
                />
              ))}
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mt-16 text-gray-900">
              Join the top 1% of trusted brands
            </h3>
            <button className="mt-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-14 py-6 rounded-full text-xl font-bold hover:from-pink-700 hover:to-purple-700 transition shadow-2xl flex items-center gap-3 mx-auto">
              Start Free Trial Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
