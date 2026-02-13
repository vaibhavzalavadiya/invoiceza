import Link from 'next/link';
import { FiDownload, FiFileText, FiCheck, FiCopy, FiEdit, FiPrinter } from 'react-icons/fi';

export const metadata = {
  title: 'Simple Invoice Template (Free Download) | Invoiceza',
  description: 'Download free simple invoice template PDF files or create custom invoices online. Professional invoice templates for small business, freelancers, and contractors - no signup required.',
  keywords: 'simple invoice template, free invoice template, invoice template pdf, basic invoice template',
};

export default function InvoiceTemplateSimple() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Simple Invoice Template (Free Download)",
    "description": "Download free simple invoice template PDF files or create custom invoices online. Professional invoice templates for small business, freelancers, and contractors - no signup required.",
    "url": "https://Invoiceza.com/invoice-template-simple",
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
              Simple Invoice Template (Free Download)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Download free simple invoice template PDF files or create custom invoices online. Professional invoice templates for small business, freelancers, and contractors - no signup required.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiFileText className="w-5 h-5" />
              Create Invoice from Template
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
              Simple Invoice Template PDF - Professional & Clean
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our simple invoice template pdf provides the perfect foundation for professional invoicing. Unlike complicated templates with unnecessary fields and confusing layouts, this basic invoice template free design focuses on clarity and essential information. Every element is positioned logically, making it easy for both you and your clients to understand the invoice at a glance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The simple invoice template pdf format ensures your invoices look identical on every device and platform. Whether your client opens the invoice on a Windows PC, Mac, tablet, or smartphone, they'll see the same professional layout. This consistency is crucial for maintaining your professional image and ensuring your invoices are processed quickly by client accounting departments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes this simple invoice template pdf special is its balance of simplicity and completeness. While the design is clean and uncluttered, it includes all the information required for professional invoicing: business details, client information, line items, calculations, payment terms, and notes. Nothing essential is missing, and nothing unnecessary is included.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Basic Invoice Template Free - No Cost, Full Features
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our basic invoice template free offering includes everything you need for professional invoicing without any cost. Many template providers charge $10-50 for invoice templates or require subscriptions to access their template libraries. We believe professional invoicing should be accessible to everyone, so our blank invoice template pdf is completely free to use, customize, and download.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The basic invoice template free includes all professional features: automatic calculations, tax handling, discount options, multiple currencies, and custom branding. You can add your logo, customize colors, and adjust the layout to match your brand identity. These customization options are typically locked behind paywalls in other template services, but we provide them free to all users.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included in Our Free Template</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional layout optimized for clarity and readability</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automatic calculations for totals, taxes, and discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Custom branding with logo upload and color customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multiple currency support with proper formatting</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Unlimited downloads and usage - no restrictions</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiCopy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Blank Invoice Template PDF - Ready to Customize
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our blank invoice template pdf provides a clean slate for creating invoices that match your exact needs. Unlike pre-filled templates that require extensive editing, this blank invoice template pdf starts empty and ready for your information. Simply fill in your business details, add client information, list your products or services, and download your completed invoice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The blank invoice template pdf is designed for maximum flexibility. Whether you're invoicing for products, services, hourly work, or project-based fees, the template adapts to your needs. Add as many line items as required, include or exclude taxes and discounts, and customize payment terms to match your business practices. The template grows and shrinks to accommodate your specific invoicing requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets our blank invoice template pdf apart is how easy it is to use. Despite being blank, the template includes helpful placeholders and labels that guide you through the invoicing process. You'll never wonder what information goes where or how to format specific fields. The intuitive design makes invoice creation fast and error-free, even if you've never created an invoice before.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiEdit className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Professional Invoice Template - Business-Ready Design
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our professional invoice template is designed to meet the standards expected by businesses worldwide. Every element is positioned according to invoicing best practices, ensuring your invoices are immediately recognizable and easy to process. The professional invoice template includes all required fields for business invoicing: invoice numbers, dates, payment terms, line item details, and total calculations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The professional invoice template design has been refined based on feedback from thousands of users across various industries. The layout works equally well for product sales, service billing, consulting fees, and project-based work. This versatility makes it the perfect choice for businesses that handle different types of transactions or work with diverse client types.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clear Information Hierarchy</h4>
                  <p className="text-gray-700 text-sm">Important information is emphasized through size, weight, and positioning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Logical Flow</h4>
                  <p className="text-gray-700 text-sm">Information is organized in the order clients expect to see it</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Typography</h4>
                  <p className="text-gray-700 text-sm">Clean, readable fonts that work on screen and in print</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proper Spacing</h4>
                  <p className="text-gray-700 text-sm">Adequate white space prevents crowding and improves readability</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Small Business Invoice Template - Perfect for Entrepreneurs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our small business invoice template is specifically designed for entrepreneurs, startups, and growing businesses. Small business owners need invoicing solutions that are professional yet affordable, flexible yet simple to use. This small business invoice template delivers on all these requirements, providing enterprise-quality invoicing without the enterprise price tag or complexity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The small business invoice template includes features that matter most to growing businesses: the ability to add your logo for brand recognition, customizable payment terms that match your cash flow needs, and professional formatting that builds client confidence. These elements help small businesses compete with larger companies by presenting a polished, professional image.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Small Businesses Choose Our Template</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Zero Cost:</strong> No subscription fees or per-invoice charges eating into profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Professional Appearance:</strong> Compete with larger companies on presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Quick Setup:</strong> Start invoicing in minutes, not hours or days</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Scalable:</strong> Works for 1 invoice per month or 100+ invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>No Learning Curve:</strong> Intuitive design anyone can use immediately</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Use Invoice Templates Effectively</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Getting the most from your invoice template requires understanding best practices for professional invoicing. Here's how to use our templates effectively:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize Once, Reuse Forever</h3>
                <p className="text-gray-700 mb-3">
                  Take time to set up your business information, logo, and preferred colors when you first use the template. Save this as your business profile, and you'll never need to enter this information again. Every future invoice will automatically include your branding and details.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Pro tip: Create different profiles if you operate multiple businesses or brands.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Consistent Invoice Numbering</h3>
                <p className="text-gray-700 mb-3">
                  Implement a consistent invoice numbering system from day one. Sequential numbers (001, 002, 003) are simplest and most professional. Our template can auto-increment invoice numbers, ensuring you never accidentally reuse a number or skip numbers in your sequence.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Pro tip: Include the year in your invoice numbers (2024-001) to make organization easier.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Client Information</h3>
                <p className="text-gray-700 mb-3">
                  For repeat clients, save their billing information in the template system. This allows you to create new invoices for existing clients in seconds by simply selecting them from your saved clients list. No retyping addresses or contact information.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Pro tip: Keep client information updated to avoid invoices being sent to old addresses.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Be Detailed in Descriptions</h3>
                <p className="text-gray-700 mb-3">
                  Use the line item description field to clearly explain what you're billing for. Vague descriptions like "Services rendered" can delay payment while clients seek clarification. Instead, be specific: "Website design - Homepage mockup and 3 revisions" or "Consulting - Q4 2024 strategy session (3 hours)."
                </p>
                <p className="text-gray-700 text-sm italic">
                  Pro tip: Include dates or project references to help clients match invoices to their records.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Clear Payment Terms</h3>
                <p className="text-gray-700 mb-3">
                  Always specify when payment is due. Common terms include "Due upon receipt," "Net 15" (due in 15 days), or "Net 30" (due in 30 days). Also include accepted payment methods and any late payment policies. Clear terms prevent misunderstandings and help you get paid on time.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Pro tip: Consider offering a small discount for early payment to improve cash flow.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiPrinter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Print-Ready Invoice Templates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While digital invoices are convenient, many businesses still need printable invoice templates for physical records, client preferences, or regulatory requirements. Our templates are optimized for both digital distribution and physical printing, ensuring your invoices look professional in any format.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The print-ready design includes proper margins for binding or filing, standard page sizes (Letter or A4), and colors that reproduce well on both color and black-and-white printers. Text sizes are chosen to remain readable even on lower-quality printers, and the layout prevents important information from being cut off at page edges.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Print Optimization Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standard page sizes compatible with all printers</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Proper margins (0.5" to 1") for professional appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Print-safe colors that work on any printer type</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Readable text sizes (minimum 10pt for body text)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-page support with automatic page numbering</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Template vs. Generator: Which is Right for You?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we offer downloadable templates, our online Invoicezavides additional benefits that make invoicing even easier. Here's how they compare:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Static Templates</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Download once, use offline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">No internet required after download</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Works with your preferred software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span className="text-gray-700">Manual calculations required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span className="text-gray-700">No automatic saving or client management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-teal-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Generator (Recommended)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Automatic calculations - no math errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Save client information for reuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Auto-save drafts every 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Instant PDF generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600">✓</span>
                    <span className="text-gray-700">Works on any device with a browser</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are these invoice templates really free?</h3>
                <p className="text-gray-700">
                  Yes, completely free. There are no hidden costs, no usage limits, and no premium features locked behind paywalls. Create and download as many invoices as you need, forever, at no cost.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I customize the invoice template?</h3>
                <p className="text-gray-700">
                  Absolutely. Add your logo, customize colors, adjust payment terms, and modify any text to match your business needs. The template is fully customizable while maintaining its professional structure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to create an account?</h3>
                <p className="text-gray-700">
                  No account required. Start creating invoices immediately without any registration, signup, or login process. Your privacy is protected, and there's no spam or marketing emails.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will there be watermarks on my invoices?</h3>
                <p className="text-gray-700">
                  No watermarks, ever. Your invoices are 100% clean and professional with no branding, advertisements, or "created with" messages. They represent your business, not ours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use these templates for commercial purposes?</h3>
                <p className="text-gray-700">
                  Yes, these templates are designed for commercial use. Use them for your business, client work, or any professional invoicing needs without restrictions or licensing fees.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Using Professional Invoice Templates Today</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Stop wasting time with complicated invoicing software. Use our simple invoice template to create professional invoices in minutes. Free, easy, and ready to use right now.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiFileText className="w-5 h-5" />
              Create Invoice from Template Now
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
              <Link href="/invoice-generator-no-login" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Generator No Login
              </Link>
              <Link href="/simple-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Simple Invoice Generator
              </Link>
              <Link href="/invoice-generator-pdf" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Generator PDF
              </Link>
              <Link href="/freelance-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Freelance Invoice Generator
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
