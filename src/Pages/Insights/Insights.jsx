import React from 'react';

export const Insights = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-orange-400 to-orange-500 text-white py-20 px-6 overflow-hidden relative">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-700/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Text and CTAs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Use insights to improve<br />
            <span className="text-white">business feedback strategy</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-95 mb-8 max-w-3xl mx-auto">
            Inform your feedback with insights and data to navigate to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition text-center shadow-lg"
            >
              Explore all Trustpilot plans
            </a>
            <a
              href="#"
              className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition text-center"
            >
              Book a demo
            </a>
          </div>
        </div>

     
      
      </div>
      </section>

     <section className="bg-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 text-center">
          
          {/* First Stat */}
          <div className="space-y-6">
            <div className="text-6xl">Growth</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Organizations that use Trustpilot receive a <span className="text-orange-600">401%</span> return on investment.
            </h3>
          </div>

          {/* Second Stat */}
          <div className="space-y-6">
            <div className="text-6xl">Target</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Insights-driven businesses are growing at an average of <span className="text-orange-600">30%</span> each year.
            </h3>
          </div>

        </div>
      </div>
    </section>

   <section className="bg-gradient-to-b from-orange-50 to-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* First Card: Text Left + Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Unlock the insights your<br />
              <span className="text-orange-500">competitors miss</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Customer insights, review trends and conversion metrics offer you opportunities to explore new avenues for growth. Harness Trustpilot's full insights capabilities to gain a powerful competitive edge.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition"
            >
              Explore insights features →
            </a>
          </div>

          {/* Right: Image with floating card effect */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src="https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F5aINcdhrzBkXnefirlaFph%2Fd63839f904cb6b2f71a699cc43b81701%2FENG_-_Review_Insights_4_-_Orange.png&w=1920&q=75"
                alt="Trustpilot Company Details Dashboard"
                className="rounded-3xl shadow-2xl border-8 border-white transform group-hover:scale-105 transition duration-500"
              />
              {/* Decorative orange glow */}
              <div className="absolute -inset-4 bg-orange-400/20 rounded-3xl blur-3xl -z-10 group-hover:bg-orange-400/30 transition"></div>
            </div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -z-20"></div>
          </div>
        </div>

        {/* Second Card: Image Left + Text Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              <img
                src="https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F3gqON1ui35uX0bopwO9OF%2Ff429967665caff9d0d7fbf1f84d719bb%2FENG_-_Review_Insights_5_-_Orange.png&w=1920&q=75"
                alt="Trustpilot My Competitors Dashboard"
                className="rounded-3xl shadow-2xl border-8 border-white transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-3xl -z-10 group-hover:bg-orange-500/30 transition"></div>
            </div>
            <div className="absolute -bottom-16 -right-10 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl -z-20"></div>
          </div>

          {/* Right: Text */}
          <div className="space-y-8 max-w-lg order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Make confident,<br />
              <span className="text-orange-500">data-driven decisions</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Predict the outcomes of strategic decisions with greater accuracy by listening to what your customers are telling you. Turn feedback into your biggest competitive advantage.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition"
            >
              See how it works →
            </a>
          </div>
        </div>

      </div>
    </section>
    
    </>
  );
};