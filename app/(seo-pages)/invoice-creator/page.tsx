import Link from 'next/link';
import { FiEdit, FiCheck, FiFileText, FiDownload, FiUsers, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Invoice Creator – Build Invoices in Minutes | Invoiceza',
  description: 'Professional invoice creator online for business. Create custom invoices with PDF tool, easy and free. Build professional invoices quickly.',
  keywords: 'invoice creator, invoice creator online, invoice creator for business, professional invoice creator',
};

export default function InvoiceCreator() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Invoice Creator – Build Invoices in Minutes",
    "description": "Professional invoice creator online for business. Create custom invoices with PDF tool, easy and free. Build professional invoices quickly.",
    "url": "https://Invoiceza.com/invoice-creator",
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
              Invoice Creator – Build Invoices in Minutes
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Professional invoice creator online for business. Create custom invoices with PDF tool, easy and free. Build professional invoices quickly.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg">
              <FiEdit className="w-5 h-5" />
              Start Creating Invoices
            </Link>
          </div>
        </div>
      </section>

      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiEdit className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Creator Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our invoice creator online provides a powerful yet intuitive platform for building professional invoices. Unlike traditional desktop software, our online creator works entirely in your browser, making it accessible from any device with an internet connection. Create invoices from your office, home, or while traveling.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice creator online includes all the tools you need to build complete, professional invoices. Add your business information, enter client details, list line items, apply taxes and discounts, and generate PDF invoices - all through an easy-to-use web interface.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Creator for Business
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Businesses of all sizes trust our invoice creator for business needs. Whether you're a solo entrepreneur, small business, or growing company, our creator adapts to your requirements. Create invoices that reflect your business professionalism and help you get paid faster.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Custom branding with logo and colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multiple tax rates for different jurisdictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Discount management (percentage or fixed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Payment terms and due date settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multi-currency support for international business</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Professional Invoice Creator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create invoices that look professional and credible with our professional invoice creator. Every invoice includes proper formatting, clear layout, and professional typography. Your clients will see you as an established, trustworthy business partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The professional invoice creator ensures consistency across all your invoices. Once you set up your business information and branding, every invoice you create maintains the same professional appearance. This consistency builds brand recognition and trust with clients.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Creator PDF Tool
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice creator PDF tool generates high-quality PDF invoices instantly. PDFs are the universal standard for business documents, ensuring your invoices look perfect on any device and can be easily shared with clients. The PDF format also protects your invoice details from unauthorized editing.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Tool Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Instant Generation</h4>
                  <p className="text-gray-700 text-sm">Create PDFs in under 2 seconds with one click</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Quality</h4>
                  <p className="text-gray-700 text-sm">High-resolution output suitable for any client</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Compatibility</h4>
                  <p className="text-gray-700 text-sm">Opens on any device with a PDF reader</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimized Size</h4>
                  <p className="text-gray-700 text-sm">Small files perfect for email attachments</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Easy Invoice Creator Free
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our easy invoice creator free tool combines simplicity with power. The interface is intuitive enough for first-time users, yet includes all the features professionals need. Create invoices quickly without sacrificing quality or professionalism.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The easy invoice creator free approach means no learning curve, no complicated setup, and no monthly fees. Just open the tool and start creating professional invoices immediately. Everything is designed to be obvious and straightforward.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Create an Invoice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building professional invoices is simple with our creator:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Up Your Business Profile</h3>
                  <p className="text-gray-700">Enter your business name, address, contact details, and upload your logo. This information will be saved for future invoices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Client Information</h3>
                  <p className="text-gray-700">Enter your client's billing details. Save client information to reuse on future invoices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Invoice</h3>
                  <p className="text-gray-700">Add line items with descriptions, quantities, and rates. Apply taxes and discounts as needed. The creator calculates totals automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Payment Terms</h3>
                  <p className="text-gray-700">Specify when payment is due and what payment methods you accept.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate PDF</h3>
                  <p className="text-gray-700">Preview your invoice and download the PDF. Your professional invoice is ready to send.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Use an Invoice Creator?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Invoice creators offer significant advantages over manual invoice creation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Save Time</h4>
                  <p className="text-gray-700 text-sm">Create invoices in minutes instead of hours. Automatic calculations eliminate manual math.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reduce Errors</h4>
                  <p className="text-gray-700 text-sm">Automatic calculations prevent math mistakes. Templates ensure no missing information.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Look Professional</h4>
                  <p className="text-gray-700 text-sm">Professional formatting and layout build credibility with clients.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Stay Organized</h4>
                  <p className="text-gray-700 text-sm">Consistent formatting and numbering make record-keeping easier.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Creating Professional Invoices</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Build professional invoices in minutes with our easy-to-use creator. Free, fast, and no signup required. Perfect for businesses of all sizes.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm">
              <FiEdit className="w-5 h-5" />
              Create Invoice Now
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
              <Link href="/free-invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">→ Free Invoice Maker</Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
