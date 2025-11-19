import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import {
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaPlane,
  FaCar,
  FaCouch,
  FaGem,
  FaTshirt,
  FaMobile,
  FaDumbbell,
  FaUtensils,
  FaHome,
  FaHeart,
  FaGraduationCap,
} from 'react-icons/fa';

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const categories = [
    { name: 'Bank', icon: FaBuilding, color: 'text-blue-600' },
    {
      name: 'Travel Insurance Company',
      icon: FaPlane,
      color: 'text-green-600',
    },
    { name: 'Car Dealer', icon: FaCar, color: 'text-red-600' },
    { name: 'Furniture Store', icon: FaCouch, color: 'text-orange-600' },
    { name: 'Jewelry Store', icon: FaGem, color: 'text-purple-600' },
    { name: 'Clothing Store', icon: FaTshirt, color: 'text-pink-600' },
    {
      name: 'Electronics & Technology',
      icon: FaMobile,
      color: 'text-cyan-600',
    },
    { name: 'Fitness & Nutrition', icon: FaDumbbell, color: 'text-lime-600' },
    { name: 'Restaurants', icon: FaUtensils, color: 'text-rose-600' },
    { name: 'Real Estate', icon: FaHome, color: 'text-indigo-600' },
    { name: 'Healthcare', icon: FaHeart, color: 'text-red-500' },
    { name: 'Education', icon: FaGraduationCap, color: 'text-yellow-600' },
  ];

  // Scroll Left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  // Scroll Right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Write Review Button */}
      <div className="flex items-center justify-between">
        <div className="flex-1 h-px bg-gray-300" />

        <button className="flex items-center gap-3 px-6 py-2 bg-white border-2 border-gray-300 rounded-full shadow-sm group">
          <span className="text-sm md:text-lg font-semibold text-gray-700">
            Bought something recently? Write a review
          </span>
          <FaArrowRight className="text-gray-500" />
        </button>

        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Category Section */}
      <div className="py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What are you looking for?
          </h2>

          <div className="flex items-center gap-4">
            {/* Left / Right Arrows */}
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>

              <button
                onClick={scrollRight}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>

            {/* Show More → Navigate */}
            <button
              onClick={() => navigate('/categories')}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-full font-medium transition"
            >
              Show More
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar py-3"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="min-w-[150px] flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl mb-3 group-hover:bg-blue-50 transition">
                <category.icon
                  className={`text-2xl ${category.color} group-hover:scale-110 transition-transform`}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-14 bg-red-100 p-6 md:p-10 rounded-xl gap-4 text-center md:text-left">
          <div>
            <h2 className="font-semibold text-2xl">
              Looking to grow your business?
            </h2>
            <p className="text-lg md:text-xl">
              Strengthen your reputation with reviews on Trustpilot.
            </p>
          </div>

          <button className="bg-black px-6 py-3 text-white rounded-full text-lg hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
