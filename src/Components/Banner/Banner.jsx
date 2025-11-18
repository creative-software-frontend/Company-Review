import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[#FCFBF3] h-[500px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find a company you can trust
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Discover, read, and write reviews
        </p>

        {/* Search Bar with Icon */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search company or category"
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#04DA8D]
                               hover:bg-[#0caa70] text-white p-2 rounded-full transition duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
