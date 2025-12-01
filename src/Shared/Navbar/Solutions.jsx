import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MessageCircle,
  Heart,
  Zap,
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Star,
} from 'lucide-react';

const Solutions = ({ setShowSolutions }) => {
  return (
    <div className="mx-auto fixed top-16 left-0 right-0 z-20    animate-fadeIn flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6  pt-5 bg-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Explore Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Find the right tools to grow your business better
          </p>
        </div>

        {/* By Business Goal Section */}
        <div className="mb-16  bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-orange-500" />
            By business goal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Invite reviews',
                desc: 'Collect authentic reviews automatically',
                to: '/invite-reviews',
              },
              {
                icon: Heart,
                title: 'Engage with feedback',
                desc: 'Respond and build trust with customers',
                to: '/engage-feedback',
              },
              {
                icon: Zap,
                title: 'Accelerate conversions',
                desc: 'Turn reviews into more sales',
                to: '/accelerate-conversions',
              },
              {
                icon: BarChart3,
                title: 'Improve with insights',
                desc: 'Analyze sentiment and trends',
                to: '/insights',
              },
              // {
              //   icon: TrendingUp,
              //   title: 'Drive revenue growth',
              //   desc: 'Grow LTV with social proof',
              //   to: '/revenue-growth',
              // },
              // {
              //   icon: Star,
              //   title: 'Boost Google rankings',
              //   desc: 'Improve SEO with rich snippets',
              //   to: '/google-rankings',
              // },
              // {
              //   icon: Users,
              //   title: 'Small and scaling businesses',
              //   desc: 'Perfect for startups and growing teams',
              //   to: '/small-business',
              // },
              // {
              //   icon: Building2,
              //   title: 'Enterprises',
              //   desc: 'Advanced features, API & dedicated support',
              //   to: '/enterprise',
              // },
              // {
              //   icon: Sparkles,
              //   title: 'AI-powered review tools',
              //   desc: 'Smart replies, sentiment analysis & more',
              //   to: '/ai-tools',
              // },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setShowSolutions(false)}
              >
                <div className="group p-6 rounded-md border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
