import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Users,
  FileText,
  Video,
  HelpCircle,
  Handshake,
  Puzzle,
} from 'lucide-react';

const Resource = () => {
  const resources = [
    { to: '/blog', title: 'Blog', icon: BookOpen, color: 'bg-blue-500' },
    {
      to: '/customer-stories',
      title: 'Customer Stories',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      to: '/guides-reports',
      title: 'Guides & Reports',
      icon: FileText,
      color: 'bg-purple-500',
    },
    {
      to: '/webinars',
      title: 'Webinars & Videos',
      icon: Video,
      color: 'bg-orange-500',
    },
    {
      to: '/help-center',
      title: 'Help Center',
      icon: HelpCircle,
      color: 'bg-indigo-500',
    },
    {
      to: '/partners',
      title: 'Partners & Referral',
      icon: Handshake,
      color: 'bg-pink-500',
    },
    {
      to: '/integrations',
      title: 'Integrations',
      icon: Puzzle,
      color: 'bg-teal-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back to Home */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of guides, stories, videos, and tools to help
            you succeed.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {resources.map(resource => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.title}
                to={resource.to}
                className="group relative bg-white rounded-md  shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div
                    className={`${resource.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5   `}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>

        {/* Optional Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Can't find what you're looking for?{' '}
            <Link
              to="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resource;
