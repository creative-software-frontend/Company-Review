import React from 'react';

const BestCompany = () => {
  const companies = [
    {
      id: 1,
      name: 'LandingClub',
      website: 'landingclub.com',
      rating: '4.7',
      reviews: '(8277)',
      logo: 'https://img.freepik.com/premium-vector/travel-app-logo-icon-brand-identity-sign-symbol_880781-733.jpg?semt=ais_incoming&w=740&q=80',
    },
    {
      id: 2,
      name: 'BankFive',
      website: 'www.bankfive.com',
      rating: '4.7',
      reviews: '(5142)',
      logo: 'https://mir-s3-cdn-cf.behance.net/projects/808/9be656199017475.Y3JvcCwxNjE2LDEyNjQsMCww.jpg',
    },
    {
      id: 3,
      name: 'DuGood Credit Union',
      website: 'www.dugood.org',
      rating: '4.7',
      reviews: '(4426)',
      logo: 'https://static.vecteezy.com/system/resources/thumbnails/005/183/355/small/travel-agency-logo-template-holiday-logo-template-beach-logo-concept-vector.jpg',
    },
    {
      id: 4,
      name: 'Credit Union of New Jersey',
      website: 'www.cunj.com',
      rating: '4.7',
      reviews: '(4275)',
      logo: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-agency-logo-design-template-e086aea8628217fed56ee872a26994e0_screen.jpg?ts=1666204773',
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <div className="flex items-center justify-between gap-4 flex-nowrap px-2 md:px-0">
          {/* TITLE — shrink allowed */}
          <h2 className="text-xl sm:text-2xl  font-semibold text-gray-900 truncate">
            Best in Travel Insurance Company
          </h2>

          {/* RIGHT BUTTONS — never shrink */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="px-5 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 whitespace-nowrap font-medium">
              Show More
            </button>
          </div>
        </div>
      </div>
      {/* company card */}
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-3 md:gap-6 py-10 px-2 md:px-0">
        {companies.map(bank => (
          <div
            key={bank.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className=" ">
              <img
                className="h-16 w-16  object-cover mb-4"
                src={bank.logo}
                alt={`${bank.name} logo`}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {bank.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{bank.website}</p>
              <div className="">
                <span className="text-lg font-semibold text-gray-800 mr-1">
                  {bank.rating}
                </span>
                <span className="text-gray-500 text-sm ">{bank.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestCompany;
