// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowLeft,
//   BookOpen,
//   Users,
//   FileText,
//   Video,
//   HelpCircle,
//   Handshake,
//   Puzzle,
// } from 'lucide-react';

// const Resource = ({ setShowResource, setShowSolutions }) => {
//   const resources = [
//     { to: '/blog', title: 'Blog', icon: BookOpen, color: 'bg-blue-500' },
//     {
//       to: '/customer-stories',
//       title: 'Customer Stories',
//       icon: Users,
//       color: 'bg-green-500',
//     },
//     {
//       to: '/guides-reports',
//       title: 'Guides & Reports',
//       icon: FileText,
//       color: 'bg-purple-500',
//     },
//     {
//       to: '/webinars',
//       title: 'Webinars & Videos',
//       icon: Video,
//       color: 'bg-orange-500',
//     },
//     {
//       to: '/help-center',
//       title: 'Help Center',
//       icon: HelpCircle,
//       color: 'bg-indigo-500',
//     },
//     {
//       to: '/partners',
//       title: 'Partners & Referral',
//       icon: Handshake,
//       color: 'bg-pink-500',
//     },
//     {
//       to: '/integrations',
//       title: 'Integrations',
//       icon: Puzzle,
//       color: 'bg-teal-500',
//     },
//   ];

//   return (
//     <div className="w-full fixed top-16 left-0 z-20 bg-white h-[800px] border-gray-700 py-10 shadow-xl animate-fadeIn flex flex-col items-center">
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Resources
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Explore our collection of guides, stories, videos, and tools to help
//             you succeed.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {resources.map(resource => {
//             const Icon = resource.icon;
//             return (
//               <Link
//                 onClick={() => {
//                   setShowResource(false);
//                   setShowSolutions(false);
//                 }}
//                 key={resource.title}
//                 to={resource.to}
//                 className="group relative bg-white rounded-md shadow-md overflow-hidden border border-gray-100"
//               >
//                 <div className="p-8 text-center">
//                   <div
//                     className={`${resource.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
//                     {resource.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     Learn more →
//                   </p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resource;

import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Users,
  FileText,
  Video,
  HelpCircle,
  Handshake,
  Puzzle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Resource = ({ setShowResource }) => {
  return (
    <div className="w-full fixed top-16 left-0 z-20 bg-white  border-gray-700 py-10 px-8 shadow-xl animate-fadeIn  flex flex-col items-center">
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
            By Resource
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                to: '/blog',
                title: 'Blog',
                icon: BookOpen,
                color: 'bg-blue-500',
                description:
                  'Articles, tutorials, and insights on various topics.',
              },
              {
                to: '/customer-stories',
                title: 'Customer Stories',
                icon: Users,
                color: 'bg-green-500',
                description:
                  'Real stories and experiences shared by our customers.',
              },
              {
                to: '/guides-reports',
                title: 'Guides & Reports',
                icon: FileText,
                color: 'bg-purple-500',
                description:
                  'Detailed guides, reports, and resources to help you grow.',
              },
              // {
              //   to: '/webinars',
              //   title: 'Webinars & Videos',
              //   icon: Video,
              //   color: 'bg-orange-500',
              //   description:
              //     'Watch our webinars, tutorials, and video content.',
              // },
              // {
              //   to: '/help-center',
              //   title: 'Help Center',
              //   icon: HelpCircle,
              //   color: 'bg-indigo-500',
              //   description:
              //     'Find answers, documentation, and support resources here.',
              // },
              // {
              //   to: '/partners',
              //   title: 'Partners & Referral',
              //   icon: Handshake,
              //   color: 'bg-pink-500',
              //   description:
              //     'Partner programs, referral opportunities, and collaborations.',
              // },
              // {
              //   to: '/integrations',
              //   title: 'Integrations',
              //   icon: Puzzle,
              //   color: 'bg-teal-500',
              //   description:
              //     'Explore tools and platforms you can integrate with.',
              // },

              // // ⭐ New item added
              // {
              //   to: '/dec',
              //   title: 'Dec',
              //   icon: FileText, // চাইলে অন্য icon দিবো
              //   color: 'bg-red-500',
              //   description:
              //     'Latest updates, announcements, and special highlights.',
              // },
            ].map((item, idx) => (
              <Link
                onClick={() => setShowResource(false)}
                to={item.to}
                key={idx}
              >
                <div className="group p-6 rounded-md border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
