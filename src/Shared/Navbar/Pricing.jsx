import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Star, Heart, FileText } from 'lucide-react';

const Pricing = ({ setShowPricing }) => {
  const plans = [
    {
      icon: Megaphone,
      title: 'Free Plan',
      description: 'Basic marketing automation features for startups',
      badge: 'Free forever',
      link: '/pricing/free',
    },
    {
      icon: Star,
      title: 'Basic Plan',
      description: 'Sales and customer management tools for small teams',
      badge: '$15/month',
      link: '/pricing/basic',
    },
    {
      icon: Heart,
      title: 'Premium Plan',
      description: 'Advanced CRM and support tools for growing businesses',
      badge: '$45/month',
      link: '/pricing/premium',
    },
    {
      icon: FileText,
      title: 'Pro Plan',
      description: 'Full suite of marketing, sales, and service tools',
      badge: '$90/month',
      link: '/pricing/pro',
    },
  ];

  return (
    <div className="w-full fixed top-16 left-0 z-20 bg-white  border-gray-700 py-10 px-8 shadow-xl animate-fadeIn  flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Select a plan that suits your business needs. Upgrade anytime as your
        business grows.
      </p>

      {/* Plan Grid */}
      <div className="grid grid-cols-2 px-2 md:px-0 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <Link
              onClick={() => setShowPricing(false)}
              key={index}
              to={plan.link}
              className="bg-white rounded-md shadow-md p-6 hover:shadow-md  hover:border-gray-200 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              {plan.badge && (
                <span className="text-orange-500 font-bold">{plan.badge}</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
