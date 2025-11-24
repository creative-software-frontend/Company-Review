import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative h-[400px] md:h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/35 to-black/50"></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Find a company you can trust
        </h1>

        {/* Subheading */}
        <p className=" md:text-2xl text-white mb-8">
          Discover, read, and write reviews
        </p>

        {/* Search Bar with Icon */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search company or category"
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full 
                     focus:outline-none focus:ring-2 focus:ring-[#04DA8D] focus:border-[#04DA8D]
                     pr-14 bg-white shadow-lg hover:shadow-xl transition-all duration-300
                     placeholder-gray-500"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 
                     text-[#04DA8D] hover:text-[#0caa70] p-2 transition duration-200 border-l-2 "
            >
              <svg
                className="w-7 h-7"
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
