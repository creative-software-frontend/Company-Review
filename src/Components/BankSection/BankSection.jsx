import React from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

const BankSection = () => {
  const socialProviders = [
    { name: 'Google', icon: <FaGoogle /> },
    { name: 'FB', icon: <FaFacebookF /> },
    { name: 'Apple', icon: <FaApple /> },
  ];
  const banks = [
    {
      id: 1,
      name: 'LandingClub',
      website: 'landingclub.com',
      rating: '4.7',
      reviews: '(8277)',
      logo: 'https://img.freepik.com/premium-vector/digital-banking_23-2147517376.jpg',
    },
    {
      id: 2,
      name: 'BankFive',
      website: 'www.bankfive.com',
      rating: '4.7',
      reviews: '(5142)',
      logo: 'https://img.freepik.com/premium-vector/free-vector-blue-gradient-professional-financial-logo_883906-2233.jpg?semt=ais_incoming&w=740&q=80',
    },
    {
      id: 3,
      name: 'DuGood Credit Union',
      website: 'www.dugood.org',
      rating: '4.7',
      reviews: '(4426)',
      logo: 'https://blog.logowiz.app/wp-content/uploads/2025/01/modern-gradient-background-bank-logo.jpg',
    },
    {
      id: 4,
      name: 'Credit Union of New Jersey',
      website: 'www.cunj.com',
      rating: '4.7',
      reviews: '(4275)',
      logo: 'https://img.freepik.com/free-vector/creative-data-logo-template_23-2149213542.jpg?semt=ais_hybrid&w=740&q=80',
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4 flex-nowrap px-2 md:px-0">
        {/* TITLE — shrink allowed */}
        <h2 className="text-xl sm:text-2xl  font-semibold text-gray-900 truncate">
          Best in Bank
        </h2>

        {/* RIGHT BUTTONS — never shrink */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="px-5 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 whitespace-nowrap font-medium">
            Show More
          </button>
        </div>
      </div>
      {/* bank card */}
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-3 md:gap-6 py-10 px-2 md:px-0">
        {banks.map(bank => (
          <div
            key={bank.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center ">
              <img
                className="h-16 w-16 rounded-full object-cover mb-4"
                src={bank.logo}
                alt={`${bank.name} logo`}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {bank.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{bank.website}</p>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-800 mr-1">
                  {bank.rating}
                </span>
                <span className="text-gray-500 text-sm">{bank.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* bottom */}
      <div className="w-full flex justify-center bg-white">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 gap-10 px-4">
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Help millions make the right choice
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Share your experience on Trustpilot, where reviews make a
              difference.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-black px-6 py-3 text-white rounded-full text-lg hover:bg-gray-800 transition">
                Login or sign up
              </button>

              <div className="flex gap-3">
                {socialProviders.map(provider => (
                  <div
                    key={provider.name}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition duration-200"
                  >
                    {provider.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-2xl">
            <div className="space-y-4">
              <img
                src="https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_3-2.jpg"
                alt="Reviewer"
                className="w-full h-60 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_1-1.jpg"
                alt="Reviewer"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_3-1.jpg"
                alt="Reviewer"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://consumersite-assets.trustpilot.net/consumersite-home/public/authenticationBanner/auth_banner_2-1.jpg"
                alt="Reviewer"
                className="w-full h-60 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankSection;
