import React from 'react';
import {
  Star,
  MessageSquare,
  Mail,
  Smartphone,
  ArrowRight,
  Check,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';

const InviteReviews = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-500 to-teal-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Invite all your customers to review your business
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">
            Build a more accurate representation of your business by proactively
            encouraging all your customers to give you feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition flex items-center gap-2">
              Signup & Invite Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-gray-600 mb-2">
              People will choose a product with more reviews over a similar
              product with higher rating but fewer reviews.
            </p>
            <p className="text-sm text-gray-500">
              Insight from BrightLocal, 2023
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              Businesses collecting reviews on Trustpilot saw an average uplift
              of <strong>25% more visits</strong> to their website.
            </p>
            <p className="text-sm text-gray-500">Trustpilot data, 2018–2020</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              88% of all companies that introduced automation in 2023 increased
              their TrustScore.
            </p>
            <p className="text-sm text-gray-500">
              Trustpilot Company Report 2024
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Start collecting verified reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Automated Invitations
              </h3>
              <p className="text-gray-600">
                Automatically send review invitations after purchase or service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customizable Invites
              </h3>
              <p className="text-gray-600">
                Personalize emails and SMS with your branding and timing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">
                Only real customers can review — building trust and
                authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow CTA Section */}
      <section className="bg-yellow-400 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Smartphone className="w-24 h-24 mx-auto mb-8 text-yellow-900" />
          <h2 className="text-4xl font-bold mb-6">
            Make reviewing as easy as tapping a star
          </h2>
          <p className="text-xl mb-10">
            Simple, fast, mobile-friendly review collection that actually gets
            results.
          </p>
          <button className="bg-teal-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-teal-700 transition shadow-lg">
            Start Collecting Reviews Today
          </button>
        </div>
      </section>

      {/* Bottom Trust Builders */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-teal-600" />
            <h3 className="text-2xl font-bold mb-3">
              Boost your SEO & visibility
            </h3>
            <p className="text-gray-600">
              More reviews = higher rankings and more traffic.
            </p>
          </div>
          <div>
            <Check className="w-16 h-16 mx-auto mb-4 text-pink-600" />
            <h3 className="text-2xl font-bold mb-3">
              Let your customers do the selling
            </h3>
            <p className="text-gray-600">
              Authentic reviews convert better than any ad.
            </p>
          </div>
          <div>
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-orange-600" />
            <h3 className="text-2xl font-bold mb-3">
              Don’t let customer feedback go unnoticed
            </h3>
            <p className="text-gray-600">
              Turn every experience into an opportunity to improve and grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InviteReviews;
