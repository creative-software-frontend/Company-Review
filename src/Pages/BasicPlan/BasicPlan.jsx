import React from 'react';
import { FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function BasicPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text & CTA */}
        <div className="text-center lg:text-left space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow with confidence
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Unlock powerful review collection tools and showcase your
              reputation with Trustpilot's <strong>Basic</strong> plan.
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="text-5xl font-bold text-gray-900">€29</span>
            <span className="text-xl text-gray-500">/ month</span>
          </div>

          {/* Features */}
          <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
            {[
              'Collect unlimited reviews',
              'Custom review invitations',
              'TrustBox widgets for your website',
              'Basic review management tools',
              'Google Seller Ratings eligible',
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-gray-700 text-lg"
              >
                <FaCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="bg-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-800 transition flex items-center gap-3 mx-auto lg:mx-0 shadow-lg">
            Start your free trial
            <FaArrowRight />
          </button>

          <p className="text-sm text-gray-500 pt-4">
            No credit card required • 14-day free trial
          </p>
        </div>

        {/* Right Side - Visual (Big Star + Floating Reviews) */}
        <div className="relative flex justify-center">
          {/* Main Green Star */}
          <div className="bg-green-500 rounded-full p-16 shadow-2xl z-10">
            <FaStar className="w-40 h-40 text-white" />
          </div>

          {/* Floating Review Bubbles */}
          <div className="absolute top-0 left-10">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="review"
              className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
            />
            <FaStar className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-white rounded-full p-1.5" />
          </div>
          <div className="absolute top-12 right-0">
            <img
              src="https://randomuser.me/api/portraits/women/62.jpg"
              alt="review"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl"
            />
            <FaStar className="absolute bottom-0 -left-3 w-7 h-7 bg-pink-500 text-white rounded-full p-1" />
          </div>
          <div className="absolute bottom-8 left-16">
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt="review"
              className="w-22 h-22 rounded-full border-4 border-white shadow-xl"
            />
            <FaStar className="absolute top-0 right-0 w-7 h-7 bg-orange-500 text-white rounded-full p-1" />
          </div>
          <div className="absolute -bottom-6 right-20">
            <img
              src="https://randomuser.me/api/portraits/men/78.jpg"
              alt="review"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
