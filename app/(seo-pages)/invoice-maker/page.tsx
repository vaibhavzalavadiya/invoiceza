import Link from 'next/link';
import { FiTool, FiCheck, FiFileText, FiDownload, FiUsers, FiImage } from 'react-icons/fi';

export const metadata = {
  title: 'Invoice Maker – Simple & Fast Invoice Creation | Invoiceza',
  description: 'Free invoice maker online for small businesses. Create custom invoices with logo, generate printable PDFs instantly. Simple and fast invoice creation tool.',
  keywords: 'invoice maker, free invoice maker online, invoice maker for small businesses, custom invoice maker',
};

export default function InvoiceMaker() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Invoice Maker – Simple & Fast Invoice Creation",
    "description": "Free invoice maker online for small businesses. Create custom invoices with logo, generate printable PDFs instantly. Simple and fast invoice creation tool.",
    "url": "https://Invoiceza.com/invoice-maker",
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
              Invoice Maker – Simple & Fast Invoice Creation
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Free invoice maker online for small businesses. Create custom invoices with logo, generate printable PDFs instantly. Simple and fast invoice creation tool.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg">
              <FiTool className="w-5 h-5" />
              Start Making Invoices
            </Link>
          </div>
        </div>
      </section>

      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Maker Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free invoice maker online provides all the tools you need to create professional invoices without any cost. Unlike paid invoicing software that charges monthly fees, our invoice maker is completely free with unlimited usage. Create as many invoices as your business needs without worrying about subscription costs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The free invoice maker online includes professional features typically found only in paid software: custom branding, automatic calculations, tax management, and PDF generation. We believe professional invoicing tools should be accessible to all businesses, regardless of budget.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Maker for Small Businesses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small businesses need invoicing tools that are powerful yet simple to use. Our invoice maker for small businesses strikes the perfect balance - professional features without overwhelming complexity. Whether you're a solo entrepreneur or have a small team, our invoice maker adapts to your needs.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect for Small Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No monthly fees - keep your overhead low</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Easy for any team member to use</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional appearance builds credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Scales with your business growth</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiImage className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Custom Invoice Maker with Logo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brand your invoices with our custom invoice maker with logo feature. Upload your business logo and customize colors to match your brand identity. Professional branding on your invoices builds recognition and trust with clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The custom invoice maker with logo lets you create invoices that look uniquely yours. Your logo appears prominently at the top of every invoice, reinforcing your brand with every client interaction. Customize fonts, colors, and layout to match your business style.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Printable Invoice Maker
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our printable invoice maker creates invoices optimized for both digital and physical delivery. Whether your clients prefer email or printed invoices, our maker ensures perfect results. The layout is designed for standard paper sizes with proper margins and formatting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The printable invoice maker produces crisp, clear prints every time. Professional fonts, proper spacing, and clean layout ensure your printed invoices look as good as digital versions. Perfect for clients who need physical copies for their records.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Maker PDF Generator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice maker PDF generator creates professional PDF invoices instantly. PDFs are the universal standard for business documents, ensuring your invoices look perfect on any device and can be easily shared via email or stored for records.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Generator Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Format</h4>
                  <p className="text-gray-700 text-sm">Opens on any device without formatting issues</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Quality</h4>
                  <p className="text-gray-700 text-sm">High-quality output suitable for any client</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Sharing</h4>
                  <p className="text-gray-700 text-sm">Small file size perfect for email attachments</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Format</h4>
                  <p className="text-gray-700 text-sm">Difficult to edit, protecting your invoice details</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Make an Invoice</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Business Details</h3>
                  <p className="text-gray-700">Enter your business name, address, and contact information. Upload your logo for professional branding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Client Information</h3>
                  <p className="text-gray-700">Add your client's billing details and save them for future invoices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">List Services or Products</h3>
                  <p className="text-gray-700">Add line items with descriptions, quantities, and rates. Calculations happen automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download PDF</h3>
                  <p className="text-gray-700">Generate and download your professional PDF invoice instantly.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Making Professional Invoices</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create custom invoices with your logo. Free, fast, and professional. Perfect for small businesses and freelancers.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm">
              <FiTool className="w-5 h-5" />
              Make Invoice Now
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
              <Link href="/free-invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">→ Free Invoice Maker</Link>
              <Link href="/invoice-creator" className="text-teal-600 hover:text-teal-700 font-medium">→ Invoice Creator</Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
