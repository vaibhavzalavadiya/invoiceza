import Link from 'next/link';
import { FiZap, FiDownload, FiCheck, FiFileText, FiPrinter, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Invoice PDF Generator (Free & Instant) | Invoiceza',
  description: 'Generate professional invoice PDFs online instantly. Free invoice PDF generator with download, create, and print capabilities. Make invoice PDFs in seconds - no signup required.',
  keywords: 'invoice pdf generator, generate invoice pdf, invoice generator pdf, create invoice pdf online',
};

export default function InvoicePDFGenerator() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Invoice PDF Generator (Free & Instant)",
    "description": "Generate professional invoice PDFs online instantly. Free invoice PDF generator with download, create, and print capabilities. Make invoice PDFs in seconds - no signup required.",
    "url": "https://Invoiceza.com/invoice-pdf-generator",
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
              Invoice PDF Generator (Free & Instant)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Generate professional invoice PDFs online instantly. Free invoice PDF generator with download, create, and print capabilities. Make invoice PDFs in seconds - no signup required.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiZap className="w-5 h-5" />
              Generate Invoice PDF Now
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Generate Invoice PDF - Lightning Fast Creation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our generate invoice pdf tool is built for speed and efficiency. In today's fast-paced business environment, you need to create professional invoices quickly without sacrificing quality. Our invoice generator pdf creates perfectly formatted, professional-looking PDF invoices in under 60 seconds from start to finish.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice pdf generator uses advanced technology to ensure every PDF is pixel-perfect. Whether your client views the invoice on a phone, tablet, or desktop computer, it will look professional and be easy to read. The PDF format ensures your invoice maintains its formatting regardless of the device or software used to open it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our invoice generator pdf special is the combination of speed and quality. While the generation process is nearly instantaneous, the output is indistinguishable from invoices created with expensive desktop software. Professional fonts, proper spacing, accurate calculations, and clean layout are all handled automatically.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Download Invoice PDF - Instant & Reliable
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The download invoice pdf feature works flawlessly across all devices and browsers. Whether you're using Chrome, Firefox, Safari, or Edge on Windows, Mac, or mobile devices, your PDF downloads instantly and reliably. No broken downloads, no corrupted files, no compatibility issues - just clean, professional PDFs every time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our invoice pdf maker optimizes file sizes without compromising quality. The resulting PDFs are small enough for easy email transmission but maintain crisp text and clear graphics. This optimization is particularly important when sending invoices to clients with slower internet connections or limited email storage.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Download Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Instant download - no waiting or processing delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Optimized file size for easy email transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Compatible with all PDF readers and devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">High-quality output suitable for printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Secure generation with no data retention</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Create Invoice PDF Online - No Software Required
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create invoice pdf online without installing any software or plugins. Our web-based invoice pdf creator works entirely in your browser, making it accessible from any device with an internet connection. This approach eliminates the need for expensive desktop software, regular updates, or compatibility concerns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The create invoice pdf online tool includes all the features you need for professional invoicing. Add your business logo, customize colors, include detailed line items, calculate taxes automatically, and apply discounts - all through an intuitive web interface. The tool guides you through each step, ensuring you never miss important information.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Creation Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access Anywhere</h4>
                  <p className="text-gray-700 text-sm">Create invoices from your office, home, or while traveling. All you need is a web browser.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Always Updated</h4>
                  <p className="text-gray-700 text-sm">Get new features and improvements automatically without manual updates or downloads.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">No Installation</h4>
                  <p className="text-gray-700 text-sm">Start creating invoices immediately without downloading or installing software.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cross-Platform</h4>
                  <p className="text-gray-700 text-sm">Works on Windows, Mac, Linux, iOS, and Android without compatibility issues.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiPrinter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice PDF Generator - Professional Results
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free invoice pdf generator delivers professional results without any cost. While many PDF generators charge monthly fees or limit the number of invoices you can create, our tool is completely free with unlimited usage. Create as many invoices as your business needs without worrying about subscription costs or usage limits.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice pdf creator includes advanced features typically found only in paid software. Automatic tax calculations, multi-currency support, custom branding, and professional templates are all available at no cost. We believe professional invoicing tools should be accessible to all businesses, regardless of size or budget.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our printable invoice pdf generator truly valuable is the quality of output. Every PDF is professionally formatted with proper typography, accurate spacing, and clean layout. Your clients will never know you used a free tool - the invoices look identical to those created with expensive commercial software.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              How to Generate Invoice PDF in 3 Simple Steps
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating professional PDF invoices is quick and easy with our generator. Follow these simple steps:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Invoice Information</h3>
                  <p className="text-gray-700 mb-2">
                    Fill in your business details, client information, and invoice specifics. Add your logo and customize colors to match your brand. The interface guides you through each required field.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Save your business information to reuse on future invoices and save time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Line Items & Calculate</h3>
                  <p className="text-gray-700 mb-2">
                    List your products or services with descriptions, quantities, and rates. The generator automatically calculates line totals, applies taxes and discounts, and computes the final amount due.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Use the duplicate button to quickly add similar items without retyping.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate & Download PDF</h3>
                  <p className="text-gray-700 mb-2">
                    Preview your invoice to ensure everything looks perfect, then click the generate button. Your professional PDF invoice downloads instantly, ready to send to your client.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Use the preview feature to catch any errors before generating the final PDF.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Choose PDF Format for Invoices?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              PDF is the gold standard for business documents, and for good reason. Here's why PDF is the best format for invoices:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Universal Compatibility</h4>
                  <p className="text-gray-700 text-sm">PDF files open on any device, any operating system, and any PDF reader. Your clients can view invoices regardless of their technology setup.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Professional Appearance</h4>
                  <p className="text-gray-700 text-sm">PDFs maintain exact formatting, fonts, and layout. Your invoice looks identical on every device, ensuring a professional presentation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Security & Integrity</h4>
                  <p className="text-gray-700 text-sm">PDFs are difficult to edit without specialized software, protecting your invoice details from unauthorized changes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Print Ready</h4>
                  <p className="text-gray-700 text-sm">PDFs are optimized for printing with proper margins and page breaks. Clients can print invoices for their records without formatting issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Small File Size</h4>
                  <p className="text-gray-700 text-sm">PDF compression keeps file sizes small for easy email transmission and storage, without sacrificing quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Archival Quality</h4>
                  <p className="text-gray-700 text-sm">PDFs are perfect for long-term storage and record keeping. They won't become obsolete as software versions change.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Advanced PDF Generator Features</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our invoice PDF generator includes powerful features that make invoicing easier and more professional:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Automatic Calculations</h3>
                <p className="text-gray-700 text-sm">
                  Line totals, subtotals, taxes, discounts, and final amounts are calculated automatically as you type. No manual math means no calculation errors.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Custom Branding</h3>
                <p className="text-gray-700 text-sm">
                  Upload your logo, choose brand colors, and customize fonts to create invoices that match your business identity perfectly.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Multi-Currency Support</h3>
                <p className="text-gray-700 text-sm">
                  Generate invoices in 30+ currencies with proper formatting and symbols. Perfect for international business.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tax Management</h3>
                <p className="text-gray-700 text-sm">
                  Add multiple tax rates, customize tax labels, and calculate taxes automatically. Supports VAT, GST, sales tax, and more.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <p className="text-gray-700 text-sm">
                  Include payment terms, due dates, and accepted payment methods. Set clear expectations for when payment is due.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Notes & Terms</h3>
                <p className="text-gray-700 text-sm">
                  Add custom notes, terms and conditions, or payment instructions. Communicate important information clearly.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Generating Professional PDF Invoices</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create, download, and send professional PDF invoices in minutes. Free, fast, and no signup required. Join thousands of businesses using our invoice PDF generator.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiZap className="w-5 h-5" />
              Generate Your Invoice PDF Now
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
              <Link href="/invoice-template-pdf" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Template PDF
              </Link>
              <Link href="/free-invoice-template" className="text-teal-600 hover:text-teal-700 font-medium">
                → Free Invoice Template
              </Link>
              <Link href="/simple-invoice-template" className="text-teal-600 hover:text-teal-700 font-medium">
                → Simple Invoice Template
              </Link>
              <Link href="/freelance-invoice-template" className="text-teal-600 hover:text-teal-700 font-medium">
                → Freelance Invoice Template
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
