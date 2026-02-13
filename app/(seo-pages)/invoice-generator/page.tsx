import Link from 'next/link';
import { FiZap, FiCheck, FiFileText, FiDownload, FiUsers, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Invoice Generator – Create Professional Invoices Online | Invoiceza',
  description: 'Free online invoice generator to create and download professional invoices in seconds. No signup required. Perfect for freelancers and businesses.',
  keywords: 'invoice generator, free online invoice generator, create invoice online, invoice generator pdf',
};

export default function InvoiceGenerator() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Invoice Generator – Create Professional Invoices Online",
    "description": "Free online invoice generator to create and download professional invoices in seconds. No signup required. Perfect for freelancers and businesses.",
    "url": "https://Invoiceza.com/invoice-generator",
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
              Invoice Generator – Create Professional Invoices Online
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Free online invoice generator to create and download professional invoices in seconds. No signup required. Perfect for freelancers and businesses.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiZap className="w-5 h-5" />
              Start Generating Invoices
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Online Invoice Generator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free online invoice generator is the fastest way to create professional invoices for your business. Whether you're a freelancer, small business owner, or contractor, you can generate unlimited invoices without any cost or signup requirements. The tool works entirely in your browser, making it accessible from any device with an internet connection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice generator includes everything you need for professional invoicing: customizable templates, automatic calculations, tax management, and instant PDF downloads. Create invoices that look polished and credible, helping you get paid faster and maintain a professional image with every client interaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our free online invoice generator stand out is the combination of simplicity and power. The interface is intuitive enough for first-time users, yet includes advanced features that experienced professionals need. No learning curve, no complicated setup, just straightforward invoice creation.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Create & Download Invoices in Seconds
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Time is money, and our invoice generator is built for speed. From opening the tool to downloading your finished invoice takes less than 60 seconds. The streamlined interface eliminates unnecessary steps, letting you focus on entering your invoice details while the generator handles formatting, calculations, and PDF creation automatically.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create and download invoices in seconds with features designed for efficiency. Smart defaults pre-fill common fields, calculations happen in real-time as you type, and PDF generation is nearly instantaneous. You spend your time on what matters - your business - not on figuring out invoicing software.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Instant access - no registration or login required</span>
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

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Generator with PDF & Print
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every invoice generated by our tool is available as a high-quality PDF, perfect for both digital delivery and printing. The invoice generator with PDF and print capabilities ensures your invoices look professional regardless of how your clients prefer to receive them.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PDF format maintains perfect formatting across all devices and platforms. Whether your client opens the invoice on a phone, tablet, or desktop computer, it will look exactly as you designed it. The files are optimized for small size without sacrificing quality, making them ideal for email attachments.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF & Print Features</h3>
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

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              No Signup Required Invoice Generator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Start creating invoices immediately with our no signup required invoice generator. Unlike traditional invoicing software that forces you through lengthy registration processes, our tool is ready to use the moment you open it. No email verification, no password creation, no terms and conditions to read through.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The no signup approach means complete privacy and control over your data. Your invoice information stays in your browser and is never uploaded to our servers. This makes our generator perfect for professionals who value privacy and want to maintain control over their business data.
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
                  <span className="text-gray-700">Complete privacy - no data collection</span>
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

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Generator for Freelancers & Businesses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our invoice generator for freelancers and businesses adapts to your specific needs. Whether you're a solo freelancer billing by the hour or a small business managing multiple clients, the generator provides the flexibility and features you need.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Freelancers appreciate the speed and simplicity - create invoices between projects without complicated software. Businesses value the professional appearance and consistent formatting that builds credibility with clients. The generator scales with your needs, from occasional invoicing to high-volume billing.
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
                    <h4 className="font-semibold text-gray-900 mb-1">Notes & Terms</h4>
                    <p className="text-gray-700 text-sm">Add custom notes, terms and conditions, or payment instructions</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mobile Responsive</h4>
                    <p className="text-gray-700 text-sm">Create invoices on any device - desktop, tablet, or smartphone</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Use the Invoice Generator</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating professional invoices is simple with our generator:
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
                  <p className="text-gray-700">Add your client's name and billing address. This information can be saved for future invoices to the same client.</p>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Your Invoice</h3>
                  <p className="text-gray-700">Preview your invoice, then download the PDF. Your professional invoice is ready to send to your client.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Generating Professional Invoices</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create unlimited professional invoices for free. No signup, no hidden costs, just fast and easy invoice generation. Join thousands of businesses using our invoice generator.
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

      {/* Related Links */}
      <section className='lg:mb-16 mb-10'>
        <div className="container">
          <div className="bg-gray-100 rounded-lg lg:p-6 p-4">
            <h3 className="lg:text-xl text-base font-semibold text-gray-900 lg:mb-4 mb-2">More Invoice Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/online-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Online Invoice Generator
              </Link>
              <Link href="/invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Maker
              </Link>
              <Link href="/free-invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">
                → Free Invoice Maker
              </Link>
              <Link href="/invoice-creator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Creator
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
