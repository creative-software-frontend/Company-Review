import React, { useState } from 'react';
import Logo from '../../assets/logo-white.svg';
import { VscStarFull } from 'react-icons/vsc';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1B1A1B] shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Brand */}
          <div className="flex items-center gap-1">
            <span>
              <VscStarFull size={40} color="#f7b709ff" />
            </span>

            <span className="text-2xl font-bold text-white">Trust Builder</span>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 font-medium">
              Write a review
            </a>
            <a href="#" className="text-white hover:text-gray-300 font-medium">
              Categories
            </a>
            <a href="#" className="text-white hover:text-gray-300 font-medium">
              Blog
            </a>
          </div>

          {/* Right side - Login (Desktop) */}
          <div className="hidden md:flex items-center">
            <button className="text-white hover:text-gray-300 font-medium">
              login
            </button>
            <button className=" px-4 py-2 bg-[#9CC6FF] font-medium ml-4 rounded-3xl">
              For Business
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-gray-300 font-medium"
              >
                Write a review
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-gray-300 font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-gray-300 font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-gray-300 font-medium border-t border-gray-700 mt-2 pt-2"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
