import React from 'react';
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

const Solutions = () => {
  return (
    <div className="w-full fixed top-16 left-0 z-50 bg-white h-[800px] overflow-y-auto border-b border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
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
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-orange-500" />
            By business goal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Invite reviews',
                desc: 'Collect authentic reviews automatically',
              },
              {
                icon: Heart,
                title: 'Engage with feedback',
                desc: 'Respond and build trust with customers',
              },
              {
                icon: Zap,
                title: 'Accelerate conversions',
                desc: 'Turn reviews into more sales',
              },
              {
                icon: BarChart3,
                title: 'Improve with insights',
                desc: 'Analyze sentiment and trends',
              },
              {
                icon: TrendingUp,
                title: 'Drive revenue growth',
                desc: 'Grow LTV with social proof',
              },
              {
                icon: Star,
                title: 'Boost Google rankings',
                desc: 'Improve SEO with rich snippets',
              },
              {
                icon: Users,
                title: 'Small and scaling businesses',
                desc: 'Perfect for startups and growing teams',
              },
              {
                icon: Building2,
                title: 'Enterprises',
                desc: 'Advanced features, API & dedicated support',
              },
              {
                icon: Sparkles,
                title: 'AI-powered review tools',
                desc: 'Smart replies, sentiment analysis & more',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
