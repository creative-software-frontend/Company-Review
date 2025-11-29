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

const Resource = ({ setShowResource, setShowSolutions }) => {
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
    <div className="w-full fixed top-16 left-0 z-20 bg-white h-[800px] border-gray-700 py-10 shadow-xl animate-fadeIn flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
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

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {resources.map(resource => {
            const Icon = resource.icon;
            return (
              <Link
                onClick={() => {
                  setShowResource(false);
                  setShowSolutions(false);
                }}
                key={resource.title}
                to={resource.to}
                className="group relative bg-white rounded-md shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div
                    className={`${resource.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resource;
