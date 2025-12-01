import React, { useState, useEffect, useRef } from 'react';
import { VscStarFull } from 'react-icons/vsc';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Pricing from './Pricing';
import Resource from './Resource';
import Solutions from './Solutions';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [scrolled, setScrolled] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showResource, setShowResource] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // Scroll effect
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 10);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim()) console.log('Searching for:', searchQuery);
  };

  const navLinks = [
    { label: 'Pricing', to: '/pricing' },
    { label: 'Resource', to: '/resource' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Categories', to: '/categories' },
    { label: 'Blog', to: '/blog' },
  ];

  return (
    <>
      <nav
        className={`top-0 sticky z-50 transition-all duration-300 md:py-2 bg-[#1B1A1B]/100 backdrop-blur-sm border-b border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={'/'}>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <VscStarFull
                    size={32}
                    className="text-[#f7b709] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 bg-[#f7b709] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Trust Builder
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div
              className={`hidden lg:flex items-center space-x-8 transition-all duration-300 ${
                searchOpen ? 'mr-44' : 'mr-0'
              }`}
            >
              {/* Dropdown Container */}
              <div className="flex items-center gap-6">
              {/* Pricing Dropdown */}
<div className="relative group">
  <button
    onClick={() => {
      setShowResource(false);
      setShowSolutions(false);
      setShowPricing(!showPricing);
    }}
    className="font-medium text-white hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
  >
    Pricing
    <svg
      className={`w-4 h-4 text-yellow-400 transition-transform duration-300 ${
        showPricing ? 'rotate-180' : ''
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>

                {/* Resource Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => {
                      setShowPricing(false);
                      setShowSolutions(false);
                      setShowResource(!showResource);
                    }}
                    className="font-medium text-white hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    Resource
                    <span
                      className={`transform transition-transform duration-300 ${
                        showResource ? 'rotate-180' : ''
                      }`}
                    >
                      ^
                    </span>
                  </button>
                </div>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => {
                      setShowPricing(false);
                      setShowResource(false);
                      setShowSolutions(!showSolutions);
                    }}
                    className="font-medium text-white hover:text-yellow-400 transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    Solutions
                    <span
                      className={`transform transition-transform duration-300 ${
                        showSolutions ? 'rotate-180' : ''
                      }`}
                    >
                      ^
                    </span>
                  </button>
                </div>
              </div>

              {/* Other navLinks */}
              {navLinks
                .filter(
                  link =>
                    link.label !== 'Pricing' &&
                    link.label !== 'Resource' &&
                    link.label !== 'Solutions'
                )
                .map(link => (
                  <NavLink
                    onClick={() => {
                      setShowResource(false);
                      setShowPricing(false);
                      setShowSolutions(false);
                    }}
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-[#f7b709]'
                          : 'text-white hover:text-[#f7b709]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Search */}
              <div ref={searchRef} className="relative">
                {/* Search Button */}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    searchOpen
                      ? 'bg-white text-[#f7b709] scale-110'
                      : 'text-white hover:text-black hover:bg-white'
                  }`}
                >
                  <FaSearch size={16} />
                </button>

                {/* Search Input with Animation */}
                <div
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    searchOpen
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
                  }`}
                >
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center bg-white rounded-full pl-4 pr-2 py-1 shadow-lg border border-gray-700 min-w-64"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search reviews..."
                      className="bg-transparent text-white placeholder-black focus:outline-none w-full pr-2 transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="p-1  transition-colors duration-200"
                    >
                      <FaTimes size={14} />
                    </button>
                    <button
                      type="submit"
                      className="p-2 ml-1 rounded-full bg-[#f7b709] hover:bg-[#e6a908] transition-colors duration-200"
                    >
                      <FaSearch size={12} className="text-gray-800" />
                    </button>
                  </form>
                </div>
              </div>

              <button className="text-white hover:text-[#f7b709] font-medium transition-colors duration-200">
                Login
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#9CC6FF] to-[#7AB2FF] hover:from-[#8BBBFF] hover:to-[#69A5FF] font-medium rounded-full transition-all duration-200 transform hover:scale-105">
                For Business
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  searchOpen
                    ? 'bg-gray-800 text-[#f7b709]'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                <FaSearch size={18} />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isOpen
                    ? 'bg-gray-800 text-[#f7b709]'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? 'rotate-45 top-3' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? '-rotate-45 top-3' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SEARCH BELOW NAVBAR WITH ANIMATION */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 transform ${
          searchOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 shadow-lg">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center w-full bg-gray-900 rounded-full pl-4 pr-2 py-2 shadow-md border border-gray-600"
          >
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search reviews..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full pr-2"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaTimes size={14} />
            </button>
            <button
              type="submit"
              className="p-2 ml-1 rounded-full bg-[#f7b709] hover:bg-[#e6a908] transition-colors duration-200"
            >
              <FaSearch size={12} className="text-gray-800" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-30 transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-3 border-t border-gray-700 bg-gray-800/95 backdrop-blur-sm mx-4 mt-2 rounded-lg shadow-lg">
          <a
            href="#"
            className="block px-4 py-3 text-white hover:text-[#f7b709] font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Write a review
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-white hover:text-[#f7b709] font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Categories
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-white hover:text-[#f7b709] font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <div className="border-t border-gray-700 pt-3 mt-2">
            <a
              href="#"
              className="block px-4 py-3 text-white hover:text-[#f7b709] font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200 mb-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <button
              className="w-full px-4 py-3 bg-gradient-to-r from-[#9CC6FF] to-[#7AB2FF] hover:from-[#8BBBFF] hover:to-[#69A5FF] font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] text-left"
              onClick={() => setIsOpen(false)}
            >
              For Business
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* ▼ Pricing Dropdown Section Below Navbar (Outside <nav>) */}
      {showPricing && <Pricing setShowPricing={setShowPricing}></Pricing>}
      {/* ▼ Resource Dropdown Section Below Navbar (Outside <nav>) */}
      {showResource && <Resource setShowResource={setShowResource}></Resource>}
      {/* ▼ Solutions Dropdown Section Below Navbar (Outside <nav>) */}
      {showSolutions && (
        <Solutions setShowSolutions={setShowSolutions}></Solutions>
      )}
    </>
  );
};

export default Navbar;
