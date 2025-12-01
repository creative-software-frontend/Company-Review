import React from 'react';

export const AccelerateConversions = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-pink-500 to-pink-400 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Accelerate conversions with<br />
            <span className="text-white">social proof</span>
          </h2>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl">
            Let your customers do the selling. Social proof accelerates conversions at every stage of the purchasing journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition text-center"
            >
              Explore all Trustpilot plans
            </a>
            <a
              href="#"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition text-center"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Image - replace with your actual phone asset or use this free one */}
            <img
              src="https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F5G2U58smbDf2vCEM4xH4QS%2F3f2a392f833642947e52261b9a4f21ef%2FENG_-_Trustpilot_widgets_4_-_Pink__1_.png&w=1920&q=75"
              alt="Phone showing Trustpilot reviews"
              className="relative z-10 w-72 md:w-96 drop-shadow-2xl"
            />

         

            <div className="absolute top-32 -left-12 bg-white rounded-lg shadow-xl p-4">
              <div className="text-center">
                <span className="text-2xl font-bold text-pink-600">4.3 ★</span>
                <p className="text-xs text-gray-600">Micro Review count</p>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 animate-pulse">
              <p className="text-sm font-medium">Trustpilot widgets</p>
            </div>
          </div>

          {/* Decorative background shape */}
          <div className="absolute inset-0 -left-32 -top-20 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

     
    </section>

 <section className="py-20 bg-white">
  {/* Stats Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-10 text-center">
    {/* Card 1 */}
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-md shadow-lg ">
      <div className="text-6xl mb-4">📈</div>
      <p className="text-lg font-semibold">
        Businesses using TrustScores or reviews on their websites and in marketing campaigns see a <strong>median increase of 23% in conversion</strong>.
      </p>
      <p className="text-sm opacity-80 mt-3">(Trustpilot data, 2018-21)</p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-md shadow-lg ">
      <div className="text-6xl mb-4">📱</div>
      <p className="text-lg font-semibold">
        US consumers are <strong>65% more likely to click</strong> a Trustpilot co-branded ad with a verbatim customer review.
      </p>
      <p className="text-sm opacity-80 mt-3">(The Value of Ratings and Reviews, London Research, July 2022)</p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-md shadow-lg ">
      <div className="text-6xl mb-4">⭐</div>
      <p className="text-lg font-semibold">
        Business customers collecting reviews on Trustpilot and using their rating and review content in marketing can see a <strong>median increase of 89% in revenue or sales volume</strong>.
      </p>
      <p className="text-sm opacity-80 mt-3">(Global, Trustpilot data, 2018-21)</p>
    </div>
  </div>
      </section>

      {/*  */}
 
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
          Start showcasing your social proof
        </h2>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "Cube", title: "TrustBox website widgets", desc: "Display Trustpilot reviews and ratings on your website for instant credibility" },
            { icon: "Puzzle", title: "Flex widget", desc: "Customize widgets to fit your website and brand" },
            { icon: "Wrench", title: "Asset builder", desc: "Create social proof ads in minutes to test what resonates with your customers" },
            { icon: "Share", title: "Social media sharing tools", desc: "Easily generate and share engaging social assets" },
            { icon: "Mail", title: "Email-optimized TrustBox", desc: "Show off your strengths in every outgoing email or newsletter" },
            { icon: "Search", title: "Improved SEO", desc: "Improve your search ranking and increase paid and organic traffic" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Case Study - TurboDebt */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=500&fit=crop"
              alt="Happy business owner on phone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-10 lg:p-14">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              TurboDebt, a financial-relief company in the U.S., increased conversion rates on their Apply Now page by 14% after adding Trustpilot widgets to their landing page.
            </h3>
            <p className="text-gray-700 mb-6">
              In an industry rife with scammers and false promises, TurboDebt focused on trust and credibility. By shifting online marketing efforts to Trustpilot, TurboDebt saw a huge boost in their SEO and higher-quality search traffic.
            </p>
            <a href="#" className="text-pink-600 font-semibold hover:underline">
              Read the case study →
            </a>
          </div>
        </div>

     
       
      </div>
    </section>


    </>
  );
};