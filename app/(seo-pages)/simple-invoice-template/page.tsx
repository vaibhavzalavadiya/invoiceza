import Link from 'next/link';
import { FiZap, FiCheck, FiFileText, FiDownload, FiSmile, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Simple Invoice Template (Clean & Minimal) | Invoiceza',
  description: 'Free simple invoice template for freelancers and small businesses. Clean, minimal, and easy to use. Download basic invoice templates or create simple invoices online.',
  keywords: 'simple invoice template, simple invoice, basic invoice template, minimal invoice template',
};

export default function SimpleInvoiceTemplate() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Simple Invoice Template (Clean & Minimal)",
    "description": "Free simple invoice template for freelancers and small businesses. Clean, minimal, and easy to use. Download basic invoice templates or create simple invoices online.",
    "url": "https://Invoiceza.com/simple-invoice-template",
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
              Simple Invoice Template (Clean & Minimal)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Free simple invoice template for freelancers and small businesses. Clean, minimal, and easy to use. Download basic invoice templates or create simple invoices online.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiFileText className="w-5 h-5" />
              Use Simple Invoice Template
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
              Simple Invoice - Straightforward & Professional
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A simple invoice is all most businesses need. Our simple invoice template strips away unnecessary complexity while maintaining a professional appearance. Perfect for freelancers, consultants, and small businesses who want to get paid without dealing with complicated invoicing software.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The basic invoice template includes only essential fields: your business information, client details, line items, and totals. This minimalist approach makes invoice creation faster and reduces the chance of errors. You spend less time figuring out what to fill in and more time running your business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our simple invoice format special is how it balances simplicity with professionalism. While the template is easy to use, the resulting invoices look polished and credible. Clean typography, proper spacing, and logical layout ensure your invoices make a good impression on clients.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiSmile className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Basic Invoice Template - Perfect for Freelancers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Freelancers love our basic invoice template because it's designed for how they actually work. No complicated features you'll never use, no confusing options, no steep learning curve. Just a clean template that lets you create professional invoices in minutes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The minimal invoice template is ideal for creative professionals, consultants, and service providers who bill by the hour or project. Add your services, set your rates, and let the template handle the calculations. The simple format makes it easy for clients to understand what they're paying for.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Freelancers Choose Simple Templates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Create invoices in under 2 minutes between projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No monthly fees eating into your profits</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Clean design that looks professional to clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Easy to customize with your branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works on any device - desktop or mobile</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Clean Invoice Template - Minimalist Design
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our clean invoice template embraces minimalist design principles. Every element serves a purpose, and nothing is included just for decoration. This approach creates invoices that are easy to read, quick to understand, and pleasant to look at.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The easy invoice template uses plenty of white space, clear headings, and logical organization. Clients can quickly find the information they need: what they're being charged for, how much they owe, and when payment is due. This clarity helps you get paid faster.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elements of a Clean Invoice</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clear Typography</h4>
                  <p className="text-gray-700 text-sm">Professional fonts that are easy to read on screen and in print</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Logical Layout</h4>
                  <p className="text-gray-700 text-sm">Information organized in the order clients expect to see it</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Generous Spacing</h4>
                  <p className="text-gray-700 text-sm">White space that makes the invoice easy to scan and read</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Subtle Colors</h4>
                  <p className="text-gray-700 text-sm">Professional color scheme that doesn't distract from content</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Simple Invoice PDF - Download & Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every simple invoice pdf generated by our template is ready to send immediately. The PDF format ensures your invoice looks professional on any device, and the simple design makes it easy for clients to understand what they're paying for.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The simple invoice example we provide shows you exactly what information to include and how to format it. Use it as a guide for your first invoice, then customize it to match your business needs. The example demonstrates best practices for professional invoicing.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included in the Template</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Business name and contact information section</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Client billing information area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Invoice number and date fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Line items table with description, quantity, and rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Automatic calculation of totals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Payment terms and due date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Notes section for additional information</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Simple Invoice Format - Industry Standard
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our simple invoice format follows industry standards that clients expect. The layout is familiar to anyone who has received invoices before, making it easy for clients to process and pay your invoices quickly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The standard format includes all legally required information while keeping the design clean and uncluttered. This balance ensures your invoices are both compliant and professional, reducing the risk of payment delays due to missing information.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Invoice Components</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Header Section</h4>
                  <p className="text-gray-700 text-sm">Your business name, logo, and contact details prominently displayed at the top</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Invoice Details</h4>
                  <p className="text-gray-700 text-sm">Invoice number, date, and due date clearly labeled</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Client Information</h4>
                  <p className="text-gray-700 text-sm">Bill to section with client name and address</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Line Items</h4>
                  <p className="text-gray-700 text-sm">Clear table showing what you're charging for</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Payment Information</h4>
                  <p className="text-gray-700 text-sm">Total amount due and payment instructions</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Best for Freelancers & Small Business</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our simple invoice template is specifically designed for the needs of freelancers and small businesses. Here's why it's the perfect choice:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Freelancers</h3>
                <p className="text-gray-700 mb-4">
                  Freelancers need to invoice quickly and professionally without spending hours on administrative tasks. Our template lets you create invoices in minutes, leaving more time for billable work.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Quick invoice creation between projects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Professional appearance builds credibility</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">No monthly fees or subscriptions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Works on mobile for on-the-go invoicing</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Small Businesses</h3>
                <p className="text-gray-700 mb-4">
                  Small businesses need professional invoicing without the complexity and cost of enterprise software. Our template provides everything you need in a simple, accessible format.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Easy for any team member to use</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Consistent professional appearance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">No training or setup required</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Scales with your business growth</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Create a Simple Invoice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating a simple invoice is straightforward with our template. Follow these steps:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Business Information</h3>
                  <p className="text-gray-700">Include your business name, address, phone number, and email. Upload your logo if you have one. This information appears at the top of every invoice.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Client Details</h3>
                  <p className="text-gray-700">Add your client's name and billing address. Keep this information saved for future invoices to the same client.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">List Your Services</h3>
                  <p className="text-gray-700">Add line items for each service or product. Include a clear description, quantity, and rate. The template calculates totals automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Payment Terms</h3>
                  <p className="text-gray-700">Specify when payment is due and what payment methods you accept. Clear terms help you get paid on time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download and Send</h3>
                  <p className="text-gray-700">Preview your invoice, download the PDF, and send it to your client. The entire process takes less than 5 minutes.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Using Simple Invoice Templates</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create professional invoices in minutes with our simple, clean templates. Perfect for freelancers and small businesses. No signup required, completely free.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiFileText className="w-5 h-5" />
              Create Simple Invoice Now
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
              <Link href="/invoice-pdf-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice PDF Generator
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
