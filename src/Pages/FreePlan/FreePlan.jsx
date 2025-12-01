import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';

export default function FreePlan() {

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center px-8 py-16 gap-16 max-w-7xl mx-auto">
      {/* Left Side */}
      <div className="flex-1 text-center lg:text-left space-y-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Start building trust
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
          Establish the foundations of a credible reputation at no cost with
          Trustpilot's Free plan
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-3 mx-auto lg:mx-0">
          Start for free
          <FaArrowRight className="text-sm" />
        </button>

        {/* Phone Mockup */}
        <div className="mt-16 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10">
              <FaStar className="w-14 h-14 text-green-500 drop-shadow-lg" />
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-2xl">
              <div className=" rounded-2xl ">
                <img
                  src="https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F18IgBTCU02Tpu9rBZ3QIQF%2F5a9d0433a67b26431d007e9bbedf3ca1%2Fwhy_chose_Trustpilot_-_Beige_-_450x450.png&w=1080&q=75"
                  alt="Trustpilot on mobile"
                  className="w-64 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center lg:items-start">
        {/* Big Trustpilot Star + Floating Reviews */}
        <div className="relative">
          <div className="bg-green-500 rounded-full p-12 shadow-2xl">
            <FaStar className="w-32 h-32 text-white" />
          </div>

          {/* Floating review avatars with small stars */}
          <div className="absolute -top-4 -left-10">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <FaStar className="absolute -top-1 -right-1 w-7 h-7 bg-yellow-400 text-white rounded-full p-1" />
          </div>
          <div className="absolute top-6 right-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <FaStar className="absolute bottom-0 -left-2 w-6 h-6 bg-pink-500 text-white rounded-full p-1" />
          </div>
          <div className="absolute bottom-4 left-12">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <FaStar className="absolute -top-2 right-1 w-6 h-6 bg-orange-500 text-white rounded-full p-1" />
          </div>
          <div className="absolute -bottom-8 right-10">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt=""
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <FaStar className="absolute top-0 -left-2 w-6 h-6 bg-green-600 text-white rounded-full p-1" />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center lg:text-left max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Why choose Trustpilot Free?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            For small businesses interested in developing a review strategy and
            keen to oversee your online reputation as it grows.
          </p>
        </div>
      </div>
    </div>
  );
}
