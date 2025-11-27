import React from 'react';
import { Star } from 'lucide-react';

const stories = [
  {
    id: 1,
    industry: 'Health & Sport',
    title: 'How Selph Built Credibility in a New Market with Trustpilot',
    date: 'November 26, 2025',
    rating: 'Excellent',
    featured: true,
    bgColor: 'from-emerald-400 to-teal-500',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F74QEXPoIPqy81I69TPBNK6%2F0a82c6b347e0337ab34c537fce37701a%2F2671776_SD-1253_NS_I-CaseStudyAssets_ThumbnailOpt2_102025.png&w=1920&q=75',
  },
  {
    id: 2,
    industry: 'Finance & Insurance',
    title:
      'How NS&I grew its Trustpilot TrustScore from a 1.3 to 4.2 in one year',
    date: 'November 14, 2025',
    rating: 'Great',
    bgColor: 'from-yellow-400 to-orange-500',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F6jS8ppSnZOdKiwKcH5Cd2r%2Fac965e4559c9086e3630e3d7ca0de4b1%2F2671155_SD-1044_NationalClaims_Thumbnail_101725.png&w=1920&q=75',
  },
  {
    id: 3,
    industry: 'Finance & Insurance',
    title: 'Winning 57% conversion - National Claims are representing trust',
    date: 'October 29, 2025',
    rating: 'Excellent',
    bgColor: 'from-blue-500 to-cyan-600',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F3K1O0ydhT2Sb3TK5t30DMH%2F9482b22ab936aabe6729ba1dad2ef92b%2FLawfullycasestudywebassets_Thumbnail1.png&w=1920&q=75',
  },
  {
    id: 4,
    industry: 'Tech & Software',
    title: 'How Lawfully built transparency into the immigration process',
    date: 'October 18, 2025',
    rating: 'Excellent',
    bgColor: 'from-purple-500 to-pink-600',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F5q9kFeqanE2JkNt8LHp06w%2F3ee6ace23ae3527b67b944b899937846%2FIndexThumbnail_RareCarat.jpg&w=1920&q=75',
  },
  {
    id: 5,
    industry: 'E-commerce',
    title: 'A cut above: how Rare Carat wins with trust',
    date: 'October 16, 2025',
    rating: 'Excellent',
    bgColor: 'from-rose-400 to-red-600',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2FSraTu5WkpjzUO2IShbcJW%2Ff195a3cbc17aca579a8f30e83cf98acb%2F2659109_SD-1181_FayeCaseStudy_WebsiteThumbnail1_091725.png&w=1920&q=75',
  },
  {
    id: 6,
    industry: 'Finance & Insurance',
    title: 'From $0 to $100m - The Faye way to build a truly trusted brand',
    date: 'September 22, 2025',
    rating: 'Excellent',
    bgColor: 'from-amber-400 to-orange-600',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F78KvFsIjOg5ygj8xENo8YW%2F976ef046861a71da03b997115335dabb%2F2636109_SD1191-AssetsforCaseStudyTeamViewerLP_Thumbnail_081525.png&w=1920&q=75',
  },
  {
    id: 7,
    industry: 'Tech & Software',
    title:
      'How TeamViewer drove 100k Trustpilot reviews and uses their customer feedback to make stronger business decisions',
    date: 'August 27, 2025',
    rating: 'Excellent',
    bgColor: 'from-indigo-500 to-blue-700',
    img: 'https://business.trustpilot.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwonkqgvit51x%2F2OMWZxkGcmMfTQc58J69lQ%2Ff4fb4f7f179a8a261d1391e7a9888032%2F2625953_SD1148_BuyItDirectCaseStudy_Thumbnail2_063025.png&w=1920&q=75',
  },
];

function CustomerStories() {
  const featured = stories.find(s => s.featured);
  const regular = stories.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Industry Dropdown */}
        <div className="mb-10">
          <select className="border border-gray-300 rounded-lg px-6 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>Choose industry</option>
          </select>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-16">
            <p className="text-sm font-semibold text-gray-600 mb-4">
              Featured article
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl overflow-hidden shadow-xl">
              {/* Featured Image Placeholder */}
              <div
                className={`bg-gradient-to-br ${featured.bgColor}  flex items-center justify-center`}
              >
                <div className="text-white text-center">
                  <img src={featured.img} alt="" />
                </div>
              </div>

              {/* Featured Text */}
              <div className="p-10">
                <span className="text-emerald-700 font-medium text-sm">
                  {featured.industry}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6">{featured.date}</p>

                <div className="flex items-center gap-4">
                  <span className="text-green-700 font-bold">
                    {featured.rating}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-green-600 text-green-600"
                      />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Regular Stories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regular.map(story => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Card Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${story.bgColor} flex items-center justify-center`}
              >
                <img src={story.img} alt="" />{' '}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {story.industry}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-3">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5">{story.date}</p>

                <div className="flex items-center gap-3">
                  <span
                    className={
                      story.rating === 'Excellent'
                        ? 'text-green-700 font-bold'
                        : 'text-yellow-600 font-bold'
                    }
                  >
                    {story.rating}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          story.rating === 'Excellent'
                            ? 'fill-green-600 text-green-600'
                            : 'fill-yellow-500 text-yellow-500'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Trustpilot
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
