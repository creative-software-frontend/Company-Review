import React from 'react';
import {
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaSearch,
  FaArrowRight,
  FaClock,
} from 'react-icons/fa';

export default function Blog() {
  // Sample blog posts
  const posts = [
    {
      id: 1,
      title: 'How to Get More Customer Reviews in 2025 (Without Begging)',
      excerpt:
        'Discover 7 proven strategies that top brands use to collect authentic reviews effortlessly.',
      author: 'Sarah Johnson',
      date: 'November 20, 2025',
      readTime: '6 min read',
      category: 'Review Strategy',
      featured: true,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      id: 2,
      title: 'Why Google Reviews Matter More Than Ever',
      excerpt:
        'Learn how Google uses reviews to rank local businesses and how you can dominate search results.',
      author: 'Mike Chen',
      date: 'November 15, 2025',
      readTime: '8 min read',
      category: 'SEO & Visibility',
    },
    {
      id: 3,
      title: 'How Trustpilot Helped Us Increase Sales by 42%',
      excerpt:
        'A real case study from a mid-sized e-commerce brand that turned reviews into revenue.',
      author: 'Emma Williams',
      date: 'November 10, 2025',
      readTime: '5 min read',
      category: 'Case Study',
    },
    {
      id: 4,
      title: 'The Psychology Behind 5-Star Reviews',
      excerpt:
        'Understand what makes customers leave glowing feedback and how to encourage it naturally.',
      author: 'Dr. Alex Rivera',
      date: 'November 5, 2025',
      readTime: '10 min read',
      category: 'Customer Psychology',
    },
  ];

  const categories = [
    'All Posts',
    'Review Strategy',
    'SEO & Visibility',
    'Case Study',
    'Customer Psychology',
    'Product Updates',
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            The Review Blog
          </h1>
          <p className="text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto">
            Expert tips, case studies, and strategies to build trust, collect
            more reviews, and grow your business.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-4 max-w-md w-full">
              <FaSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-transparent outline-none text-white placeholder-white/70 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Left Sidebar - Categories */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <FaStar className="text-yellow-500" /> Categories
              </h3>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="block py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition font-medium text-gray-700 hover:text-purple-700"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center">
              <FaStar className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">Want More Reviews?</h4>
              <p className="text-sm opacity-90 mb-6">
                Start collecting authentic customer feedback today.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
                Start Free Trial <FaArrowRight />
              </button>
            </div>
          </aside>

          {/* Main Blog Posts */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            {posts
              .filter(p => p.featured)
              .map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                >
                  <div className="grid lg:grid-cols-2">
                    <div
                      className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 lg:h-full"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div className="p-10 lg:p-12 flex flex-col justify-center">
                      <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4 text-gray-900">
                        {post.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FaUser /> <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt /> <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock /> <span>{post.readTime}</span>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="mt-8 inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-800"
                      >
                        Read Article <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </article>
              ))}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {posts
                .filter(p => !p.featured)
                .map(post => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                  >
                    <div
                      className="h-48 bg-gray-200 border-2 border-dashed rounded-t-2xl"
                      style={{
                        backgroundImage: `ur[](https://images.unsplash.com/photo-1496128858413-b36217c2ce36?w=800&h=400&fit=crop)`,
                        backgroundSize: 'cover',
                      }}
                    ></div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-pink-600 uppercase">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-purple-700 transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <a
                          href="#"
                          className="text-purple-600 font-medium hover:text-purple-800"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
