import Link from 'next/link';
import { FiGift, FiFileText, FiCheck, FiDownload, FiGrid, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Free Invoice Template (PDF, Word & Online) | Invoiceza',
  description: 'Download free invoice templates in PDF and Word formats, or use our online invoice template generator. Free printable invoice templates for all business types - no signup required.',
  keywords: 'free invoice template, invoice template free, free printable invoice template, free invoice template download',
};

export default function FreeInvoiceTemplate() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Invoice Template (PDF, Word & Online)",
    "description": "Download free invoice templates in PDF and Word formats, or use our online invoice template generator. Free printable invoice templates for all business types - no signup required.",
    "url": "https://Invoiceza.com/free-invoice-template",
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
              Free Invoice Template (PDF, Word & Online)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Download free invoice templates in PDF and Word formats, or use our online invoice template generator. Free printable invoice templates for all business types - no signup required.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiGift className="w-5 h-5" />
              Get Free Invoice Template
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiGift className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice Template Free - Professional Quality at No Cost
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our invoice template free collection provides professional-quality templates without any cost. Whether you need a PDF template for immediate use, a Word template for extensive customization, or an online generator for quick invoice creation, we've got you covered. Every template is designed by professionals and tested by thousands of users to ensure it meets the highest standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The free printable invoice template options are perfect for businesses of all sizes. Small businesses and freelancers appreciate the cost savings, while larger organizations value the flexibility and professional appearance. Unlike many "free" templates that are actually limited trials, our templates are genuinely free with no hidden costs, no watermarks, and no feature restrictions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our free invoice template download special is the variety and quality. We offer multiple template styles to match different business types and industries. Whether you need a minimalist design for creative work, a detailed template for construction projects, or a simple format for service businesses, you'll find the perfect template in our collection.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiGrid className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Template Download - Multiple Formats Available
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free invoice template download library includes templates in the most popular formats. Choose the format that works best for your workflow and business needs. Each format has its own advantages, and you can download as many as you need without any restrictions.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Template Formats</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Invoice Template Free PDF</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Perfect for immediate use and professional presentation. PDF templates maintain formatting across all devices and are ideal for sending to clients. Our invoice template free pdf options include fillable fields for easy customization.
                  </p>
                  <Link href="/invoice-template-pdf" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    → View PDF Templates
                  </Link>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Invoice Template Free Word</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Ideal for extensive customization and repeated use. Word templates let you modify every aspect of the design, add your branding, and save customized versions for different clients or project types.
                  </p>
                  <p className="text-gray-600 text-sm italic">Coming soon - Word format templates</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Free Invoice Template Online</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Best for quick invoice creation without downloads. Our online generator lets you create, customize, and download professional invoices directly in your browser. No software installation required.
                  </p>
                  <Link href="/" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    → Use Online Generator
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Printable Invoice Template - Ready for Any Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free printable invoice template collection is optimized for both digital and physical use. Whether you're emailing invoices to clients or printing them for in-person delivery, these templates look professional in any format. The layouts are designed with standard paper sizes in mind, ensuring perfect prints every time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The basic invoice template free options are perfect for businesses that need straightforward, no-frills invoicing. These templates include all essential elements - business information, client details, line items, and totals - without unnecessary complexity. They're easy to understand, quick to fill out, and universally accepted by clients.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Template Categories</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Simple Invoice Template Free</h4>
                  <p className="text-gray-700 text-sm">Clean, minimalist design perfect for freelancers and small businesses. Includes essential fields only.</p>
                  <Link href="/simple-invoice-template" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    → View Simple Templates
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Invoice Templates</h4>
                  <p className="text-gray-700 text-sm">Detailed templates with advanced features like tax calculations, discounts, and payment tracking.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Invoice Templates</h4>
                  <p className="text-gray-700 text-sm">Designed for service-based businesses with hourly rates, project descriptions, and time tracking.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Product Invoice Templates</h4>
                  <p className="text-gray-700 text-sm">Optimized for product sales with quantity, unit price, and inventory tracking features.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Free Invoice Template Online - Instant Access
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The free invoice template online generator is the fastest way to create professional invoices. No downloads, no installations, no setup - just open your browser and start creating. This approach is perfect for professionals who work from multiple locations or devices, as your templates are always accessible.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our online templates include smart features that traditional downloadable templates can't offer. Automatic calculations ensure your totals are always correct, real-time preview shows exactly how your invoice will look, and cloud saving lets you access your drafts from anywhere. These features make online templates more powerful than static files.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Template Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No software to download or install</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works on any device with a web browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automatic updates with new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real-time calculations and validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Instant PDF generation and download</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Choosing the Right Free Invoice Template</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              With so many options available, how do you choose the right template? Consider these factors:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Your Business Type</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Service businesses need templates with hourly rates and time tracking. Product businesses need quantity and inventory fields. Freelancers often prefer simple, minimalist designs.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Recommendation:</strong> Start with a simple template and upgrade to more detailed versions as your needs grow.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Your Workflow</h3>
                <p className="text-gray-700 text-sm mb-3">
                  If you create many invoices quickly, use the online generator. If you need extensive customization, download a Word template. For immediate professional results, use PDF templates.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Recommendation:</strong> Try the online generator first for speed, then download templates for offline use if needed.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Your Client Expectations</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Corporate clients often expect detailed invoices with purchase order numbers and tax breakdowns. Individual clients prefer simple, easy-to-understand formats.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Recommendation:</strong> Keep multiple template styles available and choose based on each client's preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              How to Use Free Invoice Templates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Getting started with our free invoice templates is simple. Follow this guide for best results:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Format</h3>
                  <p className="text-gray-700">Select PDF for immediate use, Word for customization, or use the online generator for the fastest results. Each format has its advantages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize Your Template</h3>
                  <p className="text-gray-700">Add your business logo, adjust colors to match your brand, and fill in your business information. Save this customized version for future use.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Invoice</h3>
                  <p className="text-gray-700">Fill in client details, add line items, and let the template calculate totals automatically. Review and download your professional invoice.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">All Free Invoice Template Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Browse our complete collection of free invoice templates. Each template is professionally designed and completely free to use:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/invoice-template-pdf" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FiFileText className="w-5 h-5 text-teal-600" />
                  Invoice Template PDF
                </h3>
                <p className="text-gray-700 text-sm">Professional PDF templates with live preview and instant download</p>
              </Link>
              <Link href="/invoice-pdf-generator" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FiZap className="w-5 h-5 text-teal-600" />
                  Invoice PDF Generator
                </h3>
                <p className="text-gray-700 text-sm">Create and download PDF invoices online in seconds</p>
              </Link>
              <Link href="/simple-invoice-template" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FiFileText className="w-5 h-5 text-teal-600" />
                  Simple Invoice Template
                </h3>
                <p className="text-gray-700 text-sm">Clean, minimalist templates perfect for freelancers</p>
              </Link>
              <Link href="/freelance-invoice-template" className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FiFileText className="w-5 h-5 text-teal-600" />
                  Freelance Invoice Template
                </h3>
                <p className="text-gray-700 text-sm">Specialized templates for freelance professionals</p>
              </Link>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Using Free Invoice Templates Today</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Join thousands of businesses using our free invoice templates. No signup, no hidden costs, just professional invoicing made simple.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiGift className="w-5 h-5" />
              Get Your Free Template Now
            </Link>
          </section>
        </div>
      </article>
      </div>
    </>
  );
}
