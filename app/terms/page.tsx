import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';

export const metadata = {
  title: 'Terms of Service | Invoiceza.com',
  description: 'Read the terms of service for using our free invoice generator. Understand your rights and responsibilities when creating professional invoices online.',
  keywords: 'terms of service, invoice generator terms, user agreement, terms and conditions',
};

export default function Terms() {
  // WebPage Schema for SEO
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service | Invoiceza",
    "description": "Read the terms of service for using our free invoice generator.",
    "url": "https://invoiceza.com/terms",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FiFileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-600 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Terms of Service</h1>
              </div>
              <p className="text-sm text-gray-600">Last Updated: February 10, 2026</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <section className="bg-gradient-to-br from-white to-blue-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Invoiceza.com ("the Service"), you accept and agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Invoiceza.com is a free, browser-based tool that allows users to create, customize, and download professional invoices.
                The Service includes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Invoice creation and customization tools</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>PDF generation and download capabilities</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Local data storage in your browser</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Multiple currency and theme options</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-teal-50 transition-colors">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Auto-save and draft management features</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Use the Service only for lawful purposes</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Ensure accuracy of information in your invoices</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Comply with all applicable tax and business regulations</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Not use the Service to create fraudulent or misleading invoices</span>
                </li>
                <li className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 font-bold mt-1">→</span>
                  <span>Not attempt to reverse engineer or compromise the Service</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service, including its design, code, and features, is owned by Invoiceza.com.
                You retain ownership of all content you create using the Service. We claim no rights to your invoice data,
                business information, or client details.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">5. Data and Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                All invoice data is stored locally in your browser. We do not collect, store, or transmit your invoice information to our servers.
                For more details, please review our <Link href="/privacy-policy" className="text-teal-600 hover:text-teal-700 font-medium">Privacy Policy</Link>.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will be error-free,
                uninterrupted, or meet your specific requirements. You use the Service at your own risk.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Invoiceza shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
                This includes, but is not limited to, loss of data, business interruption, or financial losses.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">8. Modifications to Service</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                We may also update these Terms of Service periodically. Continued use of the Service constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service may contain links to third-party websites. We are not responsible for the content, privacy policies,
                or practices of these external sites.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws.
                Any disputes shall be resolved in the appropriate courts.
              </p>
            </section>

            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Service, please visit our{' '}
                <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">Contact Page</Link>.
              </p>
            </section>

            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 border border-blue-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Summary</h3>
              <p className="text-sm text-gray-700 bg-white/70 p-4 rounded-lg">
                Use our free invoice generator responsibly and legally. We provide the tool, you own your data.
                The Service is free and provided as-is. We're not liable for how you use it or any resulting issues.
              </p>
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
