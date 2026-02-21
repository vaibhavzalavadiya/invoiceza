import Link from 'next/link';
import { FiCheck, FiDownload, FiSave, FiZap, FiShield, FiSmartphone, FiDollarSign, FiClock, FiFileText, FiCreditCard, FiClipboard, FiBarChart2, FiUsers, FiLayers, FiDatabase, FiEye } from 'react-icons/fi';

export const metadata = {
  title: 'Features | Invoiceza – Free Invoice, Receipt, Quotation & Estimate Generator',
  description: 'Explore all features of Invoiceza: create professional invoices, receipts, quotations, and estimates in seconds. Free PDF download, 22+ currencies, sample data, auto-save, and more.',
  keywords: 'invoice generator features, free receipt maker features, quotation generator features, estimate maker features, online invoicing tools, PDF invoice, receipt PDF, quotation PDF, estimate PDF',
  alternates: { canonical: 'https://invoiceza.com/features' },
};

export default function Features() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Features - Free Invoice, Receipt, Quotation & Estimate Generator",
    "description": "Explore all features of Invoiceza: create professional invoices, receipts, quotations, and estimates with instant PDF download.",
    "url": "https://invoiceza.com/features",
    "isPartOf": {
      "@type": "WebApplication",
      "name": "Invoiceza",
      "url": "https://invoiceza.com"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Invoiceza",
      "applicationCategory": "BusinessApplication"
    }
  };

  const coreFeatures = [
    {
      icon: <FiDownload className="w-6 h-6" />,
      title: 'Instant PDF Generation',
      description: 'Download professional PDF invoices, receipts, quotations, and estimates instantly with one click.',
    },
    {
      icon: <FiSave className="w-6 h-6" />,
      title: 'Auto-Save Drafts',
      description: 'Never lose your work with automatic draft saving every 30 seconds across all document types.',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Create any business document in under 2 minutes with our streamlined interface.',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'All data stays in your browser. No server uploads, no accounts, complete privacy.',
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Mobile Responsive',
      description: 'Works perfectly on all devices — desktop, tablet, and mobile.',
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: '22+ Currencies',
      description: 'Support for 22+ world currencies including USD, EUR, GBP, INR, JPY, AUD, and more.',
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: 'Load Sample Data',
      description: 'Try before you type — instantly load realistic demo data for any document type.',
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: 'Live PDF Preview',
      description: 'Preview your document exactly as it will appear in the PDF before downloading.',
    },
  ];

  const documentTypes = [
    {
      title: 'Invoice Generator',
      href: '/',
      color: 'teal',
      icon: <FiFileText className="w-8 h-8" />,
      description: 'Create professional invoices with itemized billing, tax calculations, discounts, and payment tracking.',
      highlights: ['Multiple themes (Classic, Modern, Minimal, Professional)', 'Tax & discount calculations', 'Payment terms & due dates', 'Client management & history'],
      bgClass: 'bg-teal-50 border-teal-200',
      iconBg: 'bg-teal-100 text-teal-600',
      badgeClass: 'bg-teal-100 text-teal-700',
    },
    {
      title: 'Receipt Maker',
      href: '/receipt-maker',
      color: 'emerald',
      icon: <FiCreditCard className="w-8 h-8" />,
      description: 'Generate payment receipts with paid/unpaid status toggle, payment method tracking, and PAID watermark on PDFs.',
      highlights: ['Mark as Paid toggle with PAID watermark', 'Payment method selection (Cash, Card, etc.)', 'Received By / Received From fields', 'Auto-fill amount paid on status change'],
      bgClass: 'bg-emerald-50 border-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-600',
      badgeClass: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Quotation Maker',
      href: '/quotation-maker',
      color: 'blue',
      icon: <FiClipboard className="w-8 h-8" />,
      description: 'Create professional quotations with scope of work, validity period, project details, and dual signature fields.',
      highlights: ['Scope of work section', 'Valid Until date & status tracking', 'Project name field', 'Dual signature lines (Authorized + Client)'],
      bgClass: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
      badgeClass: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Estimate Maker',
      href: '/estimate-maker',
      color: 'violet',
      icon: <FiBarChart2 className="w-8 h-8" />,
      description: 'Build detailed cost estimates with cost breakdown tables, disclaimers, contingency notes, and project timelines.',
      highlights: ['Cost breakdown table', 'Disclaimer section for estimate terms', 'Contingency & tax fields', 'Convert to Quotation CTA'],
      bgClass: 'bg-violet-50 border-violet-200',
      iconBg: 'bg-violet-100 text-violet-600',
      badgeClass: 'bg-violet-100 text-violet-700',
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                All-in-One Business Document Suite
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                Create invoices, receipts, quotations, and estimates — all in one place. No signup, no watermarks, completely free.
              </p>
            </div>
          </div>
        </section>

        <article className="pb-10 lg:pb-16">
          <div className="container">

            {/* Document Types Section */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">4 Document Types, One Platform</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-12">
              {documentTypes.map((doc, index) => (
                <div key={index} className={`rounded-xl border p-5 md:p-6 ${doc.bgClass} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${doc.iconBg}`}>
                      {doc.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{doc.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${doc.badgeClass}`}>Free</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                  <ul className="space-y-2 mb-5">
                    {doc.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <FiCheck className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={doc.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${doc.iconBg} px-4 py-2 rounded-lg hover:opacity-80 transition-opacity`}
                  >
                    Try {doc.title} →
                  </Link>
                </div>
              ))}
            </div>

            {/* Core Features Grid */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-12">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Complete Feature List */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200 p-4 md:p-8 mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Complete Feature List</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  'Unlimited document creation',
                  'Professional PDF generation',
                  'No watermarks on documents',
                  'Custom business logo upload',
                  'Multiple invoice themes',
                  'Tax rate calculations',
                  'Discount management (% or fixed)',
                  'Shipping cost addition',
                  'Payment tracking',
                  'Client management',
                  'Recent client selector',
                  'Document history',
                  'Draft saving & loading',
                  'Business profile saving',
                  'JSON export/import',
                  'Auto-generated document numbers',
                  'Custom payment terms',
                  'Notes & terms sections',
                  'Real-time calculations',
                  '22+ currency support',
                  'Sample data loader',
                  'Live PDF preview',
                  'Receipt – Mark as Paid toggle',
                  'Receipt – PAID watermark on PDF',
                  'Receipt – Payment method selection',
                  'Quotation – Scope of work',
                  'Quotation – Valid Until date',
                  'Quotation – Status tracking',
                  'Quotation – Dual signature fields',
                  'Estimate – Cost breakdown table',
                  'Estimate – Disclaimer section',
                  'Estimate – Convert to Quotation',
                  'Notification toasts',
                  'Responsive mobile design',
                  'Keyboard shortcuts',
                  'No signup required',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl lg:p-8 p-5 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Get Started?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Create invoices, receipts, quotations, and estimates for free. No signup, no limits.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-6 lg:py-3 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm"
                >
                  <FiFileText className="w-4 h-4" /> Create Invoice
                </Link>
                <Link
                  href="/receipt-maker"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 lg:px-6 lg:py-3 py-2.5 px-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-sm"
                >
                  <FiCreditCard className="w-4 h-4" /> Create Receipt
                </Link>
                <Link
                  href="/quotation-maker"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 lg:px-6 lg:py-3 py-2.5 px-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-sm"
                >
                  <FiClipboard className="w-4 h-4" /> Create Quotation
                </Link>
                <Link
                  href="/estimate-maker"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 lg:px-6 lg:py-3 py-2.5 px-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-sm"
                >
                  <FiBarChart2 className="w-4 h-4" /> Create Estimate
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
