import React from 'react';
import {
  FaShoppingCart,
  FaLaptop,
  FaUtensils,
  FaHeart,
  FaCar,
  FaHome,
  FaPlane,
  FaGraduationCap,
  FaTools,
  FaPalette,
  FaDumbbell,
  FaStethoscope,
  FaSearch,
  FaStar,
} from 'react-icons/fa';

export default function Categories() {
  const categories = [
    {
      name: 'E-commerce & Shops',
      icon: <FaShoppingCart className="w-10 h-10" />,
      color: 'from-pink-500 to-rose-500',
      count: '12,847 companies',
    },
    {
      name: 'Electronics & Technology',
      icon: <FaLaptop className="w-10 h-10" />,
      color: 'from-blue-500 to-cyan-500',
      count: '8,392 companies',
    },
    {
      name: 'Food & Restaurants',
      icon: <FaUtensils className="w-10 h-10" />,
      color: 'from-orange-500 to-red-500',
      count: '15,203 companies',
    },
    {
      name: 'Health & Beauty',
      icon: <FaHeart className="w-10 h-10" />,
      color: 'from-purple-500 to-pink-500',
      count: '9,681 companies',
    },
    {
      name: 'Automotive',
      icon: <FaCar className="w-10 h-10" />,
      color: 'from-gray-600 to-slate-800',
      count: '4,127 companies',
    },
    {
      name: 'Home & Garden',
      icon: <FaHome className="w-10 h-10" />,
      color: 'from-green-500 to-emerald-500',
      count: '7,894 companies',
    },
    {
      name: 'Travel & Vacation',
      icon: <FaPlane className="w-10 h-10" />,
      color: 'from-sky-500 to-blue-600',
      count: '6,512 companies',
    },
    {
      name: 'Education & Courses',
      icon: <FaGraduationCap className="w-10 h-10" />,
      color: 'from-indigo-500 to-purple-600',
      count: '3,945 companies',
    },
    {
      name: 'Services & Repairs',
      icon: <FaTools className="w-10 h-10" />,
      color: 'from-yellow-500 to-orange-500',
      count: '5,678 companies',
    },
    {
      name: 'Fashion & Clothing',
      icon: <FaPalette className="w-10 h-10" />,
      color: 'from-fuchsia-500 to-pink-600',
      count: '11,203 companies',
    },
    {
      name: 'Fitness & Sports',
      icon: <FaDumbbell className="w-10 h-10" />,
      color: 'from-teal-500 to-green-500',
      count: '4,821 companies',
    },
    {
      name: 'Healthcare',
      icon: <FaStethoscope className="w-10 h-10" />,
      color: 'from-red-600 to-pink-600',
      count: '6,104 companies',
    },
  ];

  return (
    <>
      {/* Professional & Trustworthy Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20 px-6 lg:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
            Browse by Category
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-10">
            Discover trusted companies across 100+ industries with real customer
            reviews
          </p>

          {/* Responsive Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-4 flex items-center gap-4 shadow-2xl">
              <FaSearch className="text-2xl text-white/80" />
              <input
                type="text"
                placeholder="Search categories or companies..."
                className="bg-transparent outline-none text-white placeholder-white/70 w-full text-base lg:text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid - Ultra Responsive */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            Choose a category to explore verified companies and read authentic
            customer experiences
          </p>
        </div>

        {/* Responsive Grid: 1 → 2 → 3 → 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <a
              key={index}
              href="#"
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent transform hover:-translate-y-3"
            >
              {/* Gradient Accent Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />

              <div className="p-6 lg:p-8 text-center">
                <div
                  className={`inline-flex p-5 lg:p-6 rounded-full bg-gradient-to-br ${cat.color} text-white shadow-xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {cat.icon}
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500">{cat.count}</p>
              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-600/0 group-hover:from-indigo-500/5 group-hover:to-purple-600/10 transition" />
            </a>
          ))}
        </div>

        {/* Responsive Bottom CTA */}
        <div className="mt-20 lg:mt-28 text-center">
          <div className="inline-block bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 lg:p-14 shadow-2xl max-w-2xl">
            <FaStar className="w-20 h-20 lg:w-24 lg:h-24 text-white mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Can't find your category?
            </h3>
            <p className="text-white/90 text-base lg:text-lg mb-8 px-4">
              We’re constantly expanding. Tell us what industry you’d like to
              see next!
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-base lg:text-lg hover:bg-gray-100 transition shadow-lg">
              Request a Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
