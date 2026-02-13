import Link from 'next/link';
import { FiMail, FiMessageSquare, FiHelpCircle, FiSend } from 'react-icons/fi';

export const metadata = {
  title: 'Contact Us | Invoiceza – Get Help & Support',
  description: 'Need help with our free invoice generator? Contact our support team for assistance with creating invoices, troubleshooting, or feature requests.',
  keywords: 'contact invoice generator, invoice maker support, help with invoices, customer service',
};

export default function Contact() {
  // ContactPage Schema for SEO
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Invoiceza - Get Help & Support",
    "description": "Need help with our free invoice generator? Contact our support team for assistance with creating invoices, troubleshooting, or feature requests.",
    "url": "https://Invoiceza.com/contact",
    "about": {
      "@type": "Organization",
      "name": "Invoiceza",
      "url": "https://Invoiceza.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FiMail className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-600 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Contact Us</h1>
              </div>
              <p className="text-sm text-gray-700 max-w-3xl mx-auto">
                Have questions about our free invoice generator? Need help creating professional invoices?
                We're here to assist you with any inquiries or technical support.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiHelpCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Quick Help</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                    Check our FAQ page for instant answers to common questions about invoice creation, PDF downloads, and features.
                  </p>
                  <Link
                    href="/faq"
                    className="text-teal-600 hover:text-teal-700 font-medium text-xs sm:text-sm"
                  >
                    Visit FAQ →
                  </Link>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Feature Requests</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                    Have an idea to improve our invoice generator? We'd love to hear your suggestions for new features.
                  </p>
                  <a
                    href="mailto:support@Invoiceza.com?subject=Feature Request"
                    className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                  >
                    Send Suggestion →
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 lg:p-8 border border-gray-200">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-6">Get in Touch</h2>

                <div className="space-y-4 lg:space-y-5">
                  <div className="flex items-start gap-3">
                    <FiMail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Email Support</h3>
                      <a
                        href="mailto:support@Invoiceza.com"
                        className="text-teal-600 hover:text-teal-700 text-sm sm:text-base"
                      >
                        support@Invoiceza.com
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">We respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">General Inquiries</h3>
                      <a
                        href="mailto:info@Invoiceza.com"
                        className="text-blue-600 hover:text-blue-700 text-sm sm:text-base"
                      >
                        info@Invoiceza.com
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">For business partnerships and media</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiHelpCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Bug Reports</h3>
                      <a
                        href="mailto:bugs@Invoiceza.com?subject=Bug Report"
                        className="text-purple-600 hover:text-purple-700 text-sm sm:text-base"
                      >
                        bugs@Invoiceza.com
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Help us improve by reporting issues</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Response Time</h3>
                <p className="text-sm text-gray-700">
                  We typically respond to all inquiries within 24-48 hours during business days.
                  For urgent technical issues, please include "URGENT" in your subject line.
                </p>
              </div>
            </section>

            <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Create Invoices?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Start creating professional invoices in minutes with our free invoice generator.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
              >
                <FiSend className="w-5 h-5" />
                Create Free Invoice
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
