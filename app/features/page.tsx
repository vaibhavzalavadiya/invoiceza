import Link from 'next/link';
import { FiCheck, FiDownload, FiSave, FiZap, FiShield, FiSmartphone, FiDollarSign, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Features | Invoiceza – Free Invoice Generator',
  description: 'Everything you need to create professional invoices quickly and easily.',
  keywords: 'invoice generator features, free invoice maker features, online invoicing tools',
};

export default function Features() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Features - Free Invoice Generator",
    "description": "Everything you need to create professional invoices quickly and easily.",
    "url": "https://Invoiceza.com/features",
    "isPartOf": {
      "@type": "WebApplication",
      "name": "Invoiceza",
      "url": "https://Invoiceza.com"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Invoiceza",
      "applicationCategory": "BusinessApplication"
    }
  };

  const features = [
    {
      icon: <FiDownload className="w-6 h-6" />,
      title: 'Instant PDF Generation',
      description: 'Download professional PDF invoices instantly with one click.',
    },
    {
      icon: <FiSave className="w-6 h-6" />,
      title: 'Auto-Save Drafts',
      description: 'Never lose your work with automatic draft saving every 30 seconds.',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Create invoices in under 2 minutes with our streamlined interface.',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'All data stays in your browser. No server uploads, complete privacy.',
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Mobile Responsive',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Multiple Currencies',
      description: 'Support for 30+ currencies with proper formatting.',
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Quick Add Items',
      description: 'Add line items quickly with keyboard shortcuts.',
    },
    {
      icon: <FiCheck className="w-6 h-6" />,
      title: 'Progress Tracking',
      description: 'Visual indicators show your invoice completion status.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Features</h1>
              <p className="text-sm text-gray-700 max-w-3xl mx-auto">
                Everything you need to create professional invoices quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="pb-10 lg:pb-16">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Complete Feature List</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'Unlimited invoice creation',
                  'Professional PDF generation',
                  'No watermarks on invoices',
                  'Custom business logo upload',
                  'Multiple invoice themes',
                  'Tax rate calculations',
                  'Discount management (% or fixed)',
                  'Shipping cost addition',
                  'Payment tracking',
                  'Client management',
                  'Recent client selector',
                  'Invoice history',
                  'Draft saving & loading',
                  'Business profile saving',
                  'JSON export/import',
                  'Copy/duplicate invoices',
                  'Auto-increment invoice numbers',
                  'Custom payment terms',
                  'Notes and terms sections',
                  'Real-time calculations',
                  'Keyboard shortcuts',
                  'Empty state guidance',
                  'Inline validation',
                  'Progress indicators',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Create Your Invoice?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Start using our free invoice generator now. No signup required, no credit card needed.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
              >
                Create Free Invoice Now
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
