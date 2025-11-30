import React from 'react';
import {
  MessageSquare,
  Mail,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

const EngageFeedback = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Bright Yellow */}
      <section className="bg-yellow-400 py-16 px-6 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Engage with customer
              <br />
              feedback
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-lg">
              Reassure your customers that you’re listening by replying to
              reviews and informing future strategy with their feedback
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                Explore all Trustpilot plans
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="bg-gray-900 text-white rounded-3xl p-16 shadow-2xl max-w-xs">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold">1,022</p>
                <p className="text-sm opacity-80 flex items-center justify-center gap-1">
                  Reviews collected <ArrowUpRight className="w-4 h-4" />
                </p>
              </div>
              <div className="mt-6 space-y-3 text-left text-sm">
                <div className="flex justify-between">
                  <span className="opacity-70">Source of reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Automated Invitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Manual Invitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Generated link</span>
                </div>
              </div>
            </div>

            {/* Decorative yellow blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-300 rounded-full opacity-50 blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-center md:text-left">
          <div>
            <Mail className="w-12 h-12 mx-auto md:mx-0 text-gray-700 mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              88% of consumers would use a business that replies to <em>all</em>{' '}
              of its reviews, compared to just <strong>47%</strong> who would
              use a business that doesn’t respond to reviews at all.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              (Local Consumer Review Survey 2025, BrightLocal)
            </p>
          </div>

          <div>
            <MessageSquare className="w-12 h-12 mx-auto md:mx-0 text-gray-700 mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              64% of consumers in the UK, France, and US prefer to buy from a
              responsive company versus one that seems perfect.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              (Canvas8 Trust Report, 2020)
            </p>
          </div>
        </div>
      </section>

      {/* Turn Negative Experiences Around */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Turn negative experiences around
            </h2>
            <p className="text-xl text-gray-700 max-w-lg">
              Consumers respect companies who hear them and help them out. Start
              responding to negative reviews: your commitment to improving your
              customers’ experience won’t go unnoticed.
            </p>
          </div>

          {/* Chart Mockup */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Reviews over time
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              How MyBusiness got its reviews in the past 12 months
            </p>

            {/* Simple SVG Line Chart */}
            <div className="relative h-64">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid */}
                <path d="M0,180 L400,180" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M0,140 L400,140" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M0,100 L400,100" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M0,60 L400,60" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M0,20 L400,20" stroke="#e5e7eb" strokeWidth="1" />

                {/* Organic - Green */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  points="20,160 80,140 140,100 200,80 260,60 320,90 380,70"
                />
                <circle cx="380" cy="70" r="6" fill="#10b981" />

                {/* Automated - Blue */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  points="20,170 80,150 140,120 200,90 260,70 320,50 380,85"
                />
                <circle cx="380" cy="85" r="6" fill="#3b82f6" />

                {/* Manual - Orange */}
                <polyline
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  points="20,150 80,130 140,140 200,120 260,110 320,130 380,120"
                />
                <circle cx="380" cy="120" r="6" fill="#f59e0b" />
              </svg>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Automated invitations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span>Manual invitations</span>
                </div>
              </div>
            </div>

            {/* Yellow decorative blob */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full opacity-40 blur-3xl -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngageFeedback;
