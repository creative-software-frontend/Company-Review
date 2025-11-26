import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Star, Heart, FileText } from 'lucide-react';

const Pricing = () => {
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
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Select a plan that suits your business needs. Upgrade anytime as your
        business grows.
      </p>

      {/* Plan Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <Link
              key={index}
              to={plan.link}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-transparent hover:border-gray-200 cursor-pointer"
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
