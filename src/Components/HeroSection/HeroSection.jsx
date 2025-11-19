import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Main container with horizontal lines and centered button */}
        <div className="flex items-center justify-between ">
          {/* Left horizontal line */}
          <div className="flex-1 h-px bg-gray-300"></div>

          {/* Center button with arrow */}
          <button className="flex items-center gap-3 px-6 py-2 bg-white border-2 border-gray-300 rounded-full  group shadow-sm">
            <span
              className="text-sm
             md:text-lg font-semibold text-gray-700 "
            >
              Bought something recently? Write a review
            </span>
            <FaArrowRight className="text-gray-500 " />
          </button>

          {/* Right horizontal line */}
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
