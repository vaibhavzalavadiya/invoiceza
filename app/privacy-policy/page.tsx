import Link from 'next/link';
import { FiShield, FiLock, FiEye, FiDatabase, FiMail } from 'react-icons/fi';

export const metadata = {
  title: 'Privacy Policy | Invoiceza',
  description: 'Learn how Invoiceza protects your data. We prioritize your privacy with secure, browser-based invoice creation. No data stored on servers.',
  keywords: 'privacy policy, data protection, invoice generator privacy, secure invoicing',
};

export default function PrivacyPolicy() {
  // WebPage Schema for SEO
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Invoiceza",
    "description": "Learn how Invoiceza protects your data. We prioritize your privacy with secure, browser-based invoice creation.",
    "url": "https://invoiceza.com/privacy-policy",
    "isPartOf": {
      "@type": "WebApplication",
      "name": "Invoiceza",
      "url": "https://invoiceza.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FiShield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-600 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Privacy Policy</h1>
              </div>
              <p className="text-sm text-gray-600">Last Updated: February 10, 2026</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <section className="bg-gradient-to-br from-white to-teal-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FiLock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Your Privacy Matters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Invoiceza, we take your privacy seriously. This free invoice generator operates entirely in your browser,
                meaning your sensitive business and client information never leaves your device unless you explicitly choose to save or export it.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <FiDatabase className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-semibold text-gray-900 mb-2">Local Storage Only</h3>
                  <p className="leading-relaxed">
                    All invoice data (business information, client details, line items) is stored locally in your browser's storage.
                    This data remains on your device and is never transmitted to our servers.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Data</h3>
                  <p className="leading-relaxed">
                    We may collect anonymous usage statistics (page views, feature usage) to improve our service.
                    This data is aggregated and cannot be used to identify individual users.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <FiEye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">How We Use Your Information</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>To provide and maintain the invoice generation service</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>To improve user experience and add new features</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>To analyze usage patterns and optimize performance</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>To respond to user inquiries and provide support</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since all invoice data is processed and stored locally in your browser, you maintain complete control over your information.
                We recommend:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Regularly backing up important invoices by downloading them</span>
                </li>
                <li className="flex gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Using secure passwords if you save business profiles</span>
                </li>
                <li className="flex gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Clearing browser data if using a shared computer</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use third-party services for analytics and performance monitoring. These services have their own privacy policies
                and we encourage you to review them.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Access your locally stored data at any time</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Delete all stored data by clearing your browser storage</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Export your data in JSON or PDF format</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded hover:bg-purple-50 transition-colors">
                  <span className="text-purple-600 font-bold">→</span>
                  <span>Opt-out of analytics tracking</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <FiMail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us through our{' '}
                <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">
                  Contact Page
                </Link>.
              </p>
            </section>

            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 border border-teal-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2 p-2 rounded bg-white/50 hover:bg-white transition-colors">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span>All invoice data stays in your browser - never sent to servers</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded bg-white/50 hover:bg-white transition-colors">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span>You have complete control over your data</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded bg-white/50 hover:bg-white transition-colors">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span>No personal information required to use the service</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded bg-white/50 hover:bg-white transition-colors">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span>Free to use with no hidden data collection</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-lg lg:p-8 p-4 shadow-lg text-center lg:mt-16 mt-10">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Create Invoices?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Start creating professional invoices in minutes with our free invoice generator.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl font-semibold lg:text-lg text-sm"
              >
                Start Creating Invoices
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
