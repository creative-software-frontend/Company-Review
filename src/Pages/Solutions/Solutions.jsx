import React from 'react';
import {
  FaStar,
  FaCheck,
  FaArrowRight,
  FaStore,
  FaUtensils,
  FaLaptopCode,
  FaUsersCog,
  FaMobileAlt,
} from 'react-icons/fa';

export default function Solutions() {
  const solutions = [
    {
      title: 'E-commerce & Online Stores',
      icon: <FaStore className="w-12 h-12" />,
      color: 'from-blue-600 to-indigo-700',
      benefits: [
        'Boost conversion with TrustBox widgets',
        'Turn reviews into SEO power',
        'Display star ratings in Google Ads',
      ],
      for: 'Shopify, WooCommerce, Magento stores',
    },
    {
      title: 'Restaurants & Local Businesses',
      icon: <FaUtensils className="w-12 h-12" />,
      color: 'from-cyan-600 to-blue-700',
      benefits: [
        'Get more Google reviews automatically',
        'Show reviews on your website & menu',
        'Stand out in local search',
      ],
      for: 'Cafes, salons, gyms, clinics',
    },
    {
      title: 'SaaS & Tech Companies',
      icon: <FaLaptopCode className="w-12 h-12" />,
      color: 'from-indigo-600 to-purple-700',
      benefits: [
        'Build social proof on your pricing page',
        'Collect NPS + product feedback',
        'Feature testimonials in onboarding',
      ],
      for: 'Software, apps, B2B tools',
    },
    {
      title: 'Agencies & Service Providers',
      icon: <FaUsersCog className="w-12 h-12" />,
      color: 'from-slate-700 to-blue-800',
      benefits: [
        'White-label review collection',
        'Manage multiple clients easily',
        'Win more pitches with real reviews',
      ],
      for: 'Marketing, SEO, web design agencies',
    },
  ];

  return (
    <>
      {/* Clean, Professional Blue Banner – No red/pink/green */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-sky-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Solutions for Every Business
          </h1>
          <p className="text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto mb-10">
            Collect, manage, and showcase customer reviews that build
            unbreakable trust — no matter your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-800 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-xl flex items-center gap-3">
              See Plans & Pricing <FaArrowRight />
            </button>
            <button className="border-2 border-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition backdrop-blur-sm">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by businesses like yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500,000+ companies growing with authentic reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-12">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent transform hover:-translate-y-4"
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-br ${sol.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-white">{sol.icon}</div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {sol.title}
                </h3>
                <p className="text-gray-600 mb-6 italic">{sol.for}</p>

                <ul className="space-y-4 mb-8">
                  {sol.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <FaCheck className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-blue-700 font-bold hover:text-blue-900 transition"
                >
                  Learn more{' '}
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-800 to-sky-700 rounded-3xl p-12 lg:p-20 text-center text-white">
          <FaStar className="w-20 h-20 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to earn trust at scale?
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 mb-10">
            Start free for 14 days — no credit card required
          </p>
          <button className="bg-white text-blue-800 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl">
            Start Free Trial Now
          </button>
        </div>
      </div>
    </>
  );
}
