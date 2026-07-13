import Link from 'next/link';
import { FiZap, FiCheck, FiFileText, FiDownload, FiUsers, FiClock, FiShield, FiLayout } from 'react-icons/fi';
import { RelatedTools } from '../../components/RelatedTools';

export const metadata = {
  title: 'Free Invoice Generator – Create & Download Professional Invoices Online | Invoiceza',
  description: 'Free online invoice generator — no signup needed. Create simple, professional invoices in seconds and download as PDF. Perfect template for freelancers and small businesses.',
  keywords: 'invoice generator, free invoice maker, online invoice generator, invoice creator, invoice template, invoice pdf generator, simple invoice generator, freelance invoice',
  alternates: { canonical: 'https://invoiceza.com/invoice-generator' },
};

export default function InvoiceGenerator() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Invoice Generator – Create & Download Professional Invoices Online",
    "description": "Free online invoice generator — no signup needed. Create simple, professional invoices in seconds and download as PDF. Perfect template for freelancers and small businesses.",
    "url": "https://invoiceza.com/invoice-generator",
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

  // FAQPage Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this invoice generator really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Invoiceza is a 100% free invoice generator with no hidden costs, no premium tiers, and no usage limits. You can create unlimited invoices, download them as PDF, and use every feature without paying anything — ever. There are no watermarks, no trial periods, and no credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to sign up or create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No signup or registration is required. You can start creating invoices immediately without providing any personal information, email address, or creating a password. Your privacy is fully protected, and you won't receive any marketing emails."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download invoices as PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Every invoice you create can be instantly downloaded as a professional PDF file. The PDF is print-ready, compatible with all devices, and maintains perfect formatting. Files are optimized for small size, making them ideal for email attachments."
        }
      },
      {
        "@type": "Question",
        "name": "Is it suitable for freelancers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Invoiceza is perfect for freelancers, consultants, contractors, and self-employed professionals. It includes hourly rate calculations, project-based billing, multiple currency support, and professional templates. You can also save client information for repeat invoicing."
        }
      },
      {
        "@type": "Question",
        "name": "What invoice templates are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Invoiceza offers multiple professional invoice templates including Classic, Modern, and Minimal styles. All templates are customizable — you can add your logo, choose colors, and tailor the layout to match your brand identity. Every template produces clean, print-ready PDF output."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use it as a simple invoice maker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Invoiceza is designed to be the simplest and fastest way to create invoices online. The intuitive interface lets you generate a professional invoice in under 60 seconds — just fill in your details, add line items, and download. No learning curve, no complicated setup."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Free Invoice Generator — Create, Download &amp; Print Professional Invoices Online
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
                The simplest and fastest free online invoice maker — no signup needed. Create professional invoices in seconds, download as PDF, and get paid faster. Ideal for freelancers, contractors, and small businesses.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
              >
                <FiZap className="w-5 h-5" />
                Start Generating Invoices — It&apos;s Free
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="pb-10 lg:pb-16">
          <div className="container">

            {/* Section 1: Free Online Invoice Generator */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                Free Online Invoice Generator
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our free online invoice generator is the fastest way to create professional invoices for your business. Whether you&apos;re a freelancer, small business owner, or contractor, you can generate unlimited invoices without any cost or signup requirements. The tool works entirely in your browser, making it accessible from any device with an internet connection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use it as your go-to invoice maker, invoice creator, or invoice template — Invoiceza adapts to whatever you need. Choose from professional templates, customize with your branding, add line items with automatic calculations, and download a polished PDF in under 60 seconds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What sets this free invoice generator apart is the combination of simplicity and power. The interface is intuitive enough for first-time users yet includes advanced features that experienced professionals need — tax management, multi-currency support, discount options, and payment term presets. No learning curve, no complicated setup, just straightforward invoice creation.
              </p>
            </section>

            {/* Section 2: Simple and Fast */}
            <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                Simple and Fast Invoice Creation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Time is money, and our simple invoice generator is built for speed. From opening the tool to downloading your finished invoice takes less than 60 seconds. The streamlined interface eliminates unnecessary steps, letting you focus on entering your invoice details while the generator handles formatting, calculations, and PDF creation automatically.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart defaults pre-fill common fields, calculations happen in real-time as you type, and PDF generation is nearly instantaneous. You spend your time on what matters — your business — not on figuring out invoicing software. This is why thousands of professionals choose Invoiceza as their simple invoice maker.
              </p>
              <div className="bg-white rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Instant access — no registration or login required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Real-time calculations as you type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">One-click PDF download</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Auto-save drafts every 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Duplicate invoices for recurring clients</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: PDF Download */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                Invoice Generator with Instant PDF Download
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every invoice created with Invoiceza is available as a high-quality PDF, perfect for both digital delivery and printing. Our invoice PDF generator ensures your documents look professional regardless of how your clients prefer to receive them — via email, messaging apps, or printed copies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The PDF format maintains perfect formatting across all devices and platforms. Whether your client opens the invoice on a phone, tablet, or desktop computer, it will look exactly as you designed it. Files are optimized for small size without sacrificing quality, making them ideal for email attachments.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF &amp; Print Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional PDF Output</h4>
                    <p className="text-gray-700 text-sm">High-quality PDFs with proper fonts, spacing, and layout</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Print-Ready Format</h4>
                    <p className="text-gray-700 text-sm">Optimized for standard paper sizes with proper margins</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Small File Size</h4>
                    <p className="text-gray-700 text-sm">Compressed for easy email transmission and storage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Universal Compatibility</h4>
                    <p className="text-gray-700 text-sm">Opens on any device with a PDF reader</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: No Signup */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiShield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                No Signup Required — Start Instantly
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Start creating invoices immediately with our no-signup invoice generator. Unlike traditional invoicing software that forces you through lengthy registration processes, our tool is ready to use the moment you open it. No email verification, no password creation, no terms to read through — just instant access to professional invoicing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The no-login approach means complete privacy and control over your data. Your invoice information stays in your browser and is never uploaded to our servers. This makes our generator perfect for professionals who value privacy and want to maintain control over their business data.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of No Signup</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-gray-700">Instant access without waiting for verification emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-gray-700">No password to remember or reset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-gray-700">Complete privacy — no data collection or tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-gray-700">No spam emails or marketing communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-gray-700">Use from any device without account sync issues</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5: Freelancers & Businesses */}
            <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                Invoice Generator for Freelancers &amp; Small Businesses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our invoice generator adapts to your specific needs. Whether you&apos;re a solo freelancer billing by the hour or a small business managing multiple clients, Invoiceza provides the flexibility and professional templates you need to get paid on time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Freelancers love the speed and simplicity — create invoices between projects without complicated software or monthly subscriptions. Businesses value the consistent professional formatting that builds credibility with clients. The generator scales with your needs, from occasional freelance invoicing to high-volume billing.
              </p>
              <div className="bg-white rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect For</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Freelancers</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Quick invoice creation between projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Hourly and project-based billing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Professional appearance on any budget</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Small Businesses</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Consistent professional formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Multiple team members can use it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">No monthly fees or subscriptions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Professional Invoice Templates */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FiLayout className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                Free Professional Invoice Templates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every invoice you create starts from a professionally designed template — no design skills required. Our free invoice templates include Classic, Modern, and Minimal styles, each optimized for readability and a polished look. Customize colors, add your logo, and tailor the layout to match your brand identity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a simple invoice template for quick one-off billing or a detailed template with tax breakdowns and payment terms, Invoiceza has you covered. All templates produce clean, print-ready PDF output that maintains formatting across every device your client uses.
              </p>
            </section>

            {/* Section 7: Key Features */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Key Features of Our Invoice Generator</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our invoice generator includes everything you need for professional invoicing:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom Branding</h4>
                      <p className="text-gray-700 text-sm">Upload your logo and customize colors to match your brand identity</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Automatic Calculations</h4>
                      <p className="text-gray-700 text-sm">Line totals, subtotals, taxes, and final amounts calculated automatically</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tax Management</h4>
                      <p className="text-gray-700 text-sm">Add multiple tax rates with custom labels for different jurisdictions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Discount Options</h4>
                      <p className="text-gray-700 text-sm">Apply percentage or fixed amount discounts to line items or totals</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Multi-Currency Support</h4>
                      <p className="text-gray-700 text-sm">Generate invoices in 30+ currencies with proper formatting</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Payment Terms</h4>
                      <p className="text-gray-700 text-sm">Set clear due dates and payment terms to get paid on time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Notes &amp; Terms</h4>
                      <p className="text-gray-700 text-sm">Add custom notes, terms and conditions, or payment instructions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Mobile Responsive</h4>
                      <p className="text-gray-700 text-sm">Create invoices on any device — desktop, tablet, or smartphone</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: How to Use */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Use the Invoice Generator</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Creating professional invoices is simple and fast with our generator:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Business Information</h3>
                    <p className="text-gray-700">Enter your business name, address, and contact details. Upload your logo to add professional branding to your invoices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Client Details</h3>
                    <p className="text-gray-700">Add your client&apos;s name and billing address. This information can be saved for future invoices to the same client.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Line Items</h3>
                    <p className="text-gray-700">List your products or services with descriptions, quantities, and rates. The generator calculates totals automatically.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Payment Terms</h3>
                    <p className="text-gray-700">Specify when payment is due and what payment methods you accept. Clear terms help you get paid faster.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Your Invoice as PDF</h3>
                    <p className="text-gray-700">Preview your invoice, then download the PDF instantly. Your professional invoice is ready to send to your client — no watermarks, no limits.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: FAQ */}
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this invoice generator really free?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, Invoiceza is a 100% free invoice generator with no hidden costs, no premium tiers, and no usage limits. You can create unlimited invoices, download them as PDF, and use every feature without paying anything — ever. There are no watermarks, no trial periods, and no credit card required.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to sign up or create an account?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No signup or registration is required. You can start creating invoices immediately without providing any personal information, email address, or creating a password. Your privacy is fully protected, and you won&apos;t receive any marketing emails.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I download invoices as PDF?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Every invoice you create can be instantly downloaded as a professional PDF file. The PDF is print-ready, compatible with all devices, and maintains perfect formatting. Files are optimized for small size, making them ideal for email attachments.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it suitable for freelancers?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, Invoiceza is perfect for freelancers, consultants, contractors, and self-employed professionals. It includes hourly rate calculations, project-based billing, multiple currency support, and professional templates. You can also save client information for repeat invoicing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What invoice templates are available?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Invoiceza offers multiple professional invoice templates including Classic, Modern, and Minimal styles. All templates are customizable — you can add your logo, choose colors, and tailor the layout to match your brand identity. Every template produces clean, print-ready PDF output.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use it as a simple invoice maker?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Invoiceza is designed to be the simplest and fastest way to create invoices online. The intuitive interface lets you generate a professional invoice in under 60 seconds — just fill in your details, add line items, and download. No learning curve, no complicated setup.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Generating Professional Invoices — Free Forever</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Create unlimited professional invoices for free. No signup, no hidden costs — just a simple, fast online invoice maker. Join thousands of freelancers and businesses using Invoiceza.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
              >
                <FiZap className="w-5 h-5" />
                Generate Invoice Now
              </Link>
            </section>
          </div>
        </article>

        <RelatedTools currentPage="/invoice-generator" />
      </div>
    </>
  );
}
