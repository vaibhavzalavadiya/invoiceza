import Link from 'next/link';
import { FiGift, FiCheck, FiFileText, FiDownload, FiUsers, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Free Invoice Maker – Create Invoices at No Cost | Invoiceza',
  description: '100% free invoice maker online without signup. Create professional invoices with templates, download PDFs instantly. Perfect for freelancers.',
  keywords: 'free invoice maker, 100% free invoice maker online, free invoice maker without signup, free invoice maker pdf',
};

export default function FreeInvoiceMaker() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Invoice Maker – Create Invoices at No Cost",
    "description": "100% free invoice maker online without signup. Create professional invoices with templates, download PDFs instantly. Perfect for freelancers.",
    "url": "https://Invoiceza.com/free-invoice-maker",
    "isPartOf": {
      "@type": "WebApplication",
      "name": "Invoiceza",
      "url": "https://Invoiceza.com"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <div className="bg-gray-50">
      <section className="py-10 lg:py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Free Invoice Maker – Create Invoices at No Cost
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              100% free invoice maker online without signup. Create professional invoices with templates, download PDFs instantly. Perfect for freelancers.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg">
              <FiGift className="w-5 h-5" />
              Start Free Invoice Maker
            </Link>
          </div>
        </div>
      </section>

      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiGift className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              100% Free Invoice Maker Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our 100% free invoice maker online is genuinely free with no hidden costs, no usage limits, and no premium tiers. Many "free" invoice makers are actually limited trials that require payment after a few invoices. Our tool is different - it's completely free forever with unlimited invoice creation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 100% free invoice maker online includes all professional features at no cost: custom branding, automatic calculations, tax management, multiple currencies, and PDF downloads. There are no watermarks, no "upgrade now" prompts, and no features locked behind paywalls.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included for Free</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Unlimited invoice creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Professional PDF downloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Custom logo and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Automatic tax calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-gray-700">Multiple currency support</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Maker without Signup
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Start creating invoices immediately with our free invoice maker without signup. No registration forms, no email verification, no password creation - just instant access to professional invoicing tools. This approach saves you time and protects your privacy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The free invoice maker without signup means you can create invoices from any device without worrying about account credentials. Use it from your office computer, home laptop, or even a public computer without security concerns.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Maker PDF Download
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every invoice created with our free invoice maker PDF download feature is available as a high-quality PDF. Download professional invoices instantly and send them to clients via email or print them for physical delivery. The PDF format ensures perfect formatting across all devices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The free invoice maker PDF download produces files optimized for both digital and print use. Small file sizes make email transmission easy, while high-quality formatting ensures printed invoices look professional.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Maker for Freelancers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Freelancers need professional invoicing without the overhead of expensive software. Our free invoice maker for freelancers provides all the tools independent professionals need: quick invoice creation, professional appearance, and flexible billing options.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect for Freelancers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No monthly fees eating into your profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Create invoices in under 2 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional appearance builds credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works on any device - desktop or mobile</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Maker with Templates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free invoice maker with templates provides professional designs that you can customize to match your brand. Choose from multiple template styles, each designed for different business types and industries. All templates are completely free to use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The free invoice maker with templates includes options for service businesses, product sales, freelance work, and more. Each template is professionally designed with proper formatting, clear layout, and space for all essential invoice information.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Choose a Free Invoice Maker?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Free doesn't mean limited. Our invoice maker provides professional features without cost:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Save Money</h3>
                <p className="text-gray-700 text-sm">
                  Paid invoicing software costs $10-30/month ($120-360/year). Our free tool eliminates this expense entirely, letting you invest that money back into your business.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">No Commitment</h3>
                <p className="text-gray-700 text-sm">
                  No contracts, no subscriptions, no cancellation fees. Use our tool as much or as little as you need without any obligations.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Instant Access</h3>
                <p className="text-gray-700 text-sm">
                  Start creating invoices immediately without registration or setup. No waiting for account approval or email verification.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Full Features</h3>
                <p className="text-gray-700 text-sm">
                  Get all professional features at no cost. No watermarks, no feature restrictions, no "upgrade now" prompts.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Using Free Invoice Maker</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create unlimited professional invoices at no cost. No signup, no hidden fees, no watermarks. Join thousands using our free invoice maker.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm">
              <FiGift className="w-5 h-5" />
              Create Free Invoice Now
            </Link>
          </section>
        </div>
      </article>

      <section className='lg:mb-16 mb-10'>
        <div className="container">
          <div className="bg-gray-100 rounded-lg lg:p-6 p-4">
            <h3 className="lg:text-xl text-base font-semibold text-gray-900 lg:mb-4 mb-2">More Invoice Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">→ Invoice Generator</Link>
              <Link href="/online-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">→ Online Invoice Generator</Link>
              <Link href="/invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">→ Invoice Maker</Link>
              <Link href="/invoice-creator" className="text-teal-600 hover:text-teal-700 font-medium">→ Invoice Creator</Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
