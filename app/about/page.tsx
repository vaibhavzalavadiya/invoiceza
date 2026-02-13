import Link from 'next/link';
import { FiHeart, FiUsers, FiZap, FiShield } from 'react-icons/fi';

export const metadata = {
  title: 'About Us | Invoiceza.com - Our Story & Mission',
  description: 'Learn about Invoiceza.com - a free, secure, and easy-to-use online invoice maker for freelancers and small businesses. Create professional invoices in minutes.',
  keywords: 'about invoice generator, free invoice maker, online invoicing tool, professional invoice creator',
};

export default function About() {
  // AboutPage Schema for SEO
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Invoiceza - Free Invoice Generator",
    "description": "Learn about Invoiceza.com - a free, secure, and easy-to-use online invoice maker for freelancers and small businesses. Create professional invoices in minutes.",
    "url": "https://Invoiceza.com/about",
    "about": {
      "@type": "Organization",
      "name": "Invoiceza",
      "url": "https://Invoiceza.com"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Invoiceza",
      "url": "https://Invoiceza.com",
      "description": "Free online invoice generator for freelancers and small businesses"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Invoiceza
              </h1>
              <p className="text-sm text-gray-700 max-w-3xl mx-auto">
                Learn about our mission to provide freelancers and small businesses with a free, secure, and easy-to-use online invoice maker.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Invoiceza was created with a simple mission: to provide freelancers, small business owners, and entrepreneurs
                with a completely free, professional, and easy-to-use invoice creation tool. We believe that creating invoices shouldn't
                require expensive software or complicated subscriptions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our free invoice generator empowers you to create professional invoices in minutes, helping you get paid faster and
                focus on what matters most - growing your business.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 lg:p-6">
                  <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast & Easy</h3>
                  <p className="text-sm text-gray-700">
                    Create professional invoices in under 2 minutes. No learning curve, no complicated features - just simple, effective invoicing.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 lg:p-6">
                  <FiShield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">100% Secure</h3>
                  <p className="text-sm text-gray-700">
                    All data stays in your browser. We never see or store your sensitive business information on our servers.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 lg:p-6">
                  <FiHeart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Always Free</h3>
                  <p className="text-sm text-gray-700">
                    No hidden costs, no premium tiers, no watermarks. Create unlimited invoices completely free, forever.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 lg:p-6">
                  <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Built for You</h3>
                  <p className="text-sm text-gray-700">
                    Designed specifically for freelancers, consultants, and small businesses who need professional invoicing without the complexity.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Why We Built This</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As freelancers ourselves, we experienced the frustration of expensive invoicing software with features we didn't need.
                We wanted something simple: a tool to create professional invoices quickly, download them as PDFs, and get back to work.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That's why we built Invoiceza - a free invoice maker that focuses on what matters: creating beautiful,
                professional invoices without the bloat. No accounts, no subscriptions, no hassle.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Privacy First:</strong> Your data belongs to you. We never collect or store your invoice information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Truly Free:</strong> No bait-and-switch tactics. Our invoice generator is free today and will be free tomorrow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>User-Focused:</strong> We listen to feedback and continuously improve based on what users actually need.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Professional Quality:</strong> Free doesn't mean low-quality. Our invoices look as good as those from paid software.</span>
                </li>
              </ul>
            </section>

            <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Join Thousands of Users</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Freelancers, consultants, and small businesses worldwide trust Invoiceza for their invoicing needs.
                Join them and start creating professional invoices today - no signup required!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
              >
                Create Your First Invoice
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
