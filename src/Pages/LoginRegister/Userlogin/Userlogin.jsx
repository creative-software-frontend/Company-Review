import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { Mail, Star, Menu, X, ChevronLeft } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export const Userlogin = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar - Same as Register Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Star className="w-10 h-10 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Trust Builder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
          <NavLink  className="text-gray-600 hover:text-green-600 font-medium transition" to={'/blog'}>
                     Blog
                </NavLink>
            <Link to="/user-auth/register">
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition font-medium shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a href="#" className="block text-gray-900 font-bold">For Consumers</a>
              <a href="#" className="block text-gray-600">For Business</a>
              <a href="#" className="block text-gray-600">Pricing</a>
              <a href="#" className="block text-gray-600">Blog</a>
              <Link to="/user-auth/register" className="block">
                <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium">
                   Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with Background */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden flex items-center justify-center px-4">
        
   

        {/* Login Card - Glassmorphic */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back!</h1>
              <p className="text-lg text-gray-600">Log in or create your account</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-4 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition transform hover:scale-105 shadow-md">
                <FcGoogle className="text-2xl" />
                <span className="font-medium text-gray-800">Continue with Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-4 bg-[#1877F2] text-white rounded-xl py-4 hover:bg-[#166fe5] transition transform hover:scale-105 shadow-md">
                <FaFacebookF className="text-xl" />
                <span className="font-medium">Continue with Facebook</span>
              </button>

              <button className="w-full flex items-center justify-center gap-4 bg-black text-white rounded-xl py-4 hover:bg-gray-900 transition transform hover:scale-105 shadow-md">
                <FaApple className="text-2xl" />
                <span className="font-medium">Sign in with Apple</span>
              </button>

              <button className="w-full flex items-center justify-center gap-4 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition transform hover:scale-105 shadow-md text-blue-600 font-medium">
                <Mail className="text-2xl" />
                Continue with Email
              </button>
            </div>

            {/* Business Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Are you a business?</h2>
              <p className="text-gray-600 mb-8">
                Manage reviews, respond to customers, and grow your reputation
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition font-medium shadow-lg transform hover:scale-105">
                   Login
                </button>
                <Link to="/user-auth/register">
                  <button className="px-8 py-3.5 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition font-semibold shadow-lg transform hover:scale-105">
                    Sign Up Free
                  </button>
                </Link>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </>
  );
};

export default Userlogin;