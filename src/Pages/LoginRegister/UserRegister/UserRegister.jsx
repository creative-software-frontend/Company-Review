import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ChevronLeft, Star, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { VscStarFull } from 'react-icons/vsc';

export const UserRegister = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className=" px-6 py-4 flex items-center justify-between">
          <Link to={'/'}>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <VscStarFull
                  size={32}
                  className="text-[#f7b709] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#f7b709] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                Trust Builder
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              className="text-gray-600 hover:text-green-600 font-medium transition"
              to={'/blog'}
            >
              Blog
            </NavLink>

            <Link to={'/user-auth'}>
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition font-medium shadow-lg hover:shadow-green-600/25">
                Log in
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600 font-medium"
              >
                For Consumers
              </a>
              <a href="#" className="block text-gray-900 font-bold">
                For Business
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600 font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600 font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="block bg-green-600 text-white px-6 py-3 rounded-full text-center font-medium"
              >
                Log In
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - with padding-top to avoid overlap */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 text-yellow-400 text-9xl">
            5 Stars
          </div>
          <div className="absolute bottom-32 right-20 text-yellow-400 text-8xl rotate-12">
            4.5 Stars
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-9xl opacity-5">
            5 Stars
          </div>
        </div>

        <div className="relative z-10 flex min-h-screen">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-96 bg-white shadow-2xl p-10 flex flex-col">
            <div onClick={() => navigate(-1)} className="">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </a>
            </div>

            <div className="mb-12">
              <h1 className="text-4xl font-bold text-green-600 flex items-center gap-3">
                <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                Trust Builder
              </h1>
              <p className="text-lg text-gray-600 mt-2">For Businesses</p>
            </div>

            <div className="space-y-10 flex-1">
              {[
                {
                  title: 'Build Trust Instantly',
                  desc: 'Collect authentic reviews from real customers on a transparent platform.',
                },
                {
                  title: 'Boost Your Reputation',
                  desc: '94% of businesses see higher conversion with verified reviews.',
                },
                {
                  title: 'Grow Faster',
                  desc: 'Display star ratings that convert 3x better than competitors.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <CheckCircle className="w-8 h-8 text-green-600 group-hover:scale-110 transition" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                <span className="text-2xl font-bold text-green-600">
                  50,000+
                </span>{' '}
                businesses trust us
              </p>
              <div className="flex justify-center items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  4.9/5 from 12,483 reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-6xl">
              <div className="bg-white/95 backdrop-blur-xl rounded-md shadow-2xl border border-white/50 p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                  Create Your Free Business Account
                </h2>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-4 flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg">
                  <FcGoogle className="text-2xl" />
                  Sign up with Google
                </button>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-300"></div>
                  </div>
                  <span className="relative bg-white px-6 text-gray-500 font-medium text-sm">
                    OR
                  </span>
                </div>

                <p className="text-lg font-semibold text-gray-800 mb-6">
                  Continue with email
                </p>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Website (e.g. yourcompany.com)"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    required
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    required
                  />

                  <div className="flex gap-4">
                    <select
                      className="w-40 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                      required
                    >
                      <option value="">Country</option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="india">India</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="nepal">Nepal</option>
                      <option value="sri-lanka">Sri Lanka</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                    </select>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="flex-1 px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    />
                  </div>

                  <select
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    required
                  >
                    <option value="">Number of Employees</option>
                    <option>1 – 10</option>
                    <option>10 – 50</option>
                    <option>50 – 100</option>
                    <option>100 – 500</option>
                    <option>500 – 1000</option>
                    <option>1000+</option>
                  </select>

                  <select
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 focus:border-green-500 transition"
                    required
                  >
                    <option value="">Annual Revenue</option>
                    <option>$100 – $500</option>
                    <option>$500 – $1000</option>
                    <option>$1000 – $10,000</option>
                    <option>$10,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000+</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg rounded-xl py-5 transition-all transform hover:scale-105 shadow-xl mt-8"
                  >
                    Create Free Account → It's 100% Free
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-8 text-center leading-relaxed">
                  Protected by reCAPTCHA ·{' '}
                  <a href="#" className="underline hover:text-green-600">
                    Privacy Policy
                  </a>{' '}
                  ·{' '}
                  <a href="#" className="underline hover:text-green-600">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
