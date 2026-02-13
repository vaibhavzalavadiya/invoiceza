import Link from 'next/link';
import { FiZap, FiCheck, FiFileText, FiDownload, FiClock, FiSmartphone } from 'react-icons/fi';

export const metadata = {
  title: 'Simple Invoice Generator (Clean & Easy) | Invoiceza',
  description: 'The easiest way to create professional invoices online. Our simple invoice generator online tool is designed for speed and simplicity - no complicated features, just clean and easy invoice creation.',
  keywords: 'simple invoice generator, easy invoice maker, basic invoice generator, simple invoicing tool',
};

export default function SimpleInvoiceGenerator() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Simple Invoice Generator (Clean & Easy)",
    "description": "The easiest way to create professional invoices online. Our simple invoice generator online tool is designed for speed and simplicity - no complicated features, just clean and easy invoice creation.",
    "url": "https://Invoiceza.com/simple-invoice-generator",
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
              Simple Invoice Generator (Clean & Easy)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              The easiest way to create professional invoices online. Our simple invoice generator online tool is designed for speed and simplicity - no complicated features, just clean and easy invoice creation.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiFileText className="w-5 h-5" />
              Start Creating Simple Invoices
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
              Simple Invoice Generator Online - Minimalist Design
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our simple invoice generator online is built on the principle that invoicing shouldn't be complicated. While many invoice tools overwhelm users with dozens of features and complex interfaces, we've taken a different approach. Our basic invoice generator focuses on what matters most: creating clean, professional invoices quickly and easily.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The simple invoice generator online interface is intuitive from the moment you start. There's no learning curve, no tutorial videos to watch, and no manual to read. Everything is exactly where you'd expect it to be. Add your business details, enter your client information, list your services or products, and download your invoice. That's it. This straightforward approach makes our tool the perfect choice for anyone who values simplicity and efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our simple invoice generator truly stand out is how it balances simplicity with functionality. While the interface is clean and minimal, you still get all the essential features you need: tax calculations, discount options, multiple currencies, and custom branding. We've simply removed the clutter and complexity that makes other invoice generators frustrating to use.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Basic Invoice Generator - Everything You Need, Nothing You Don't
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our basic invoice generator philosophy is simple: provide all the essential features without overwhelming users with unnecessary options. Many invoice tools try to be everything to everyone, resulting in bloated interfaces that slow you down. Our approach is different. We've carefully selected the features that 95% of users actually need and presented them in the clearest possible way.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The basic invoice generator includes everything required for professional invoicing: business and client information fields, line item management, automatic calculations, tax handling, and PDF generation. These core features are presented in a clean, logical layout that makes invoice creation feel effortless. There are no hidden menus, no confusing settings panels, and no features you'll never use cluttering up your workspace.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Features of Our Basic Invoice Generator</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Clean, distraction-free interface for focused work</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Essential fields only - no overwhelming options</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automatic calculations for totals, taxes, and discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">One-click PDF generation and download</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mobile-responsive design that works everywhere</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Easy Invoice Generator Free - No Cost, No Limits
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our easy invoice generator free tool proves that professional invoicing doesn't have to cost money. While many "free" invoice generators limit you to a handful of invoices before requiring payment, our tool is genuinely free with no hidden costs or usage limits. Create as many invoices as you need, whenever you need them, without ever reaching for your credit card.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The easy invoice generator free approach extends to all features. There's no "premium" tier that locks away essential functionality. Tax calculations, custom branding, multiple currencies, and PDF downloads are all included at no cost. We believe that small businesses, freelancers, and entrepreneurs shouldn't have to pay for basic invoicing tools, so we've made everything free and accessible to everyone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our easy invoice generator truly easy is the thoughtful design. Every element is positioned logically, every button does exactly what you'd expect, and every feature works the first time you try it. There's no trial and error, no frustration, and no wasted time. Just open the tool, fill in your information, and download your invoice. It really is that simple.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiSmartphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Minimal Invoice Generator - Perfect for Mobile
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our minimal invoice generator is optimized for use on any device, but it truly shines on mobile. The clean, uncluttered interface adapts perfectly to smaller screens, making it easy to create professional invoices from your phone or tablet. Whether you're at a client meeting, working from a coffee shop, or traveling, you can generate invoices on the go without compromising on quality or functionality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The minimal invoice generator design philosophy means every pixel serves a purpose. There's no wasted space, no decorative elements that don't add value, and no features that complicate the mobile experience. The result is an invoice generator that feels native on mobile devices, with large touch targets, clear labels, and smooth scrolling that makes data entry effortless even on a small screen.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Minimal Design Matters</h3>
              <p className="text-gray-700 mb-4">
                In today's fast-paced business environment, you need tools that work as hard as you do. A minimal invoice generator eliminates distractions and focuses your attention on the task at hand. This isn't just about aesthetics - it's about productivity. Studies show that simpler interfaces lead to faster task completion and fewer errors.
              </p>
              <p className="text-gray-700">
                Our minimal approach also means faster loading times, lower data usage on mobile connections, and better performance on older devices. You don't need the latest smartphone or fastest internet connection to create professional invoices with our tool.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiClock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Quick Invoice Generator - Speed Meets Simplicity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Time is money, and our quick invoice generator is designed to save you both. From the moment you open the tool to the moment you download your finished invoice, every step is optimized for speed. The average user can create a complete, professional invoice in under 90 seconds. That's faster than most people can find and open their traditional invoicing software.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The quick invoice generator achieves this speed through smart defaults and intelligent automation. Common fields are pre-filled with sensible values, calculations happen automatically as you type, and the PDF generation is nearly instantaneous. You spend your time on what matters - entering your specific invoice details - while the tool handles everything else in the background.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed Features That Save Time</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Auto-save:</strong> Your work is saved automatically every 30 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Keyboard shortcuts:</strong> Power users can navigate without touching the mouse</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Smart calculations:</strong> Totals update instantly as you type</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Quick add:</strong> Add line items with a single click</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>Instant PDF:</strong> Generate and download in under 2 seconds</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Create Invoices in 3 Simple Steps</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our simple invoice generator online makes invoice creation so easy, you'll wonder why you ever used complicated software. Here's the complete process:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Basic Information</h3>
                  <p className="text-gray-700 mb-3">
                    Start by adding your business name and contact details. If you have a logo, upload it for professional branding. Then add your client's information - just their name and address. That's all the setup you need.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Save your business profile to reuse it on future invoices and save even more time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Services or Products</h3>
                  <p className="text-gray-700 mb-3">
                    List what you're billing for. Each line item needs just three things: a description, quantity, and rate. The tool automatically calculates the amount for each line and the total for your invoice. Add as many line items as you need.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Use the duplicate button to quickly add similar items without retyping everything.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Your Invoice</h3>
                  <p className="text-gray-700 mb-3">
                    Review your invoice to make sure everything looks correct. If you need to add taxes or discounts, those options are clearly available. When you're ready, click the download button to generate your professional PDF invoice instantly.
                  </p>
                  <p className="text-gray-700 text-sm italic">
                    Pro tip: Use the preview button to see exactly how your invoice will look before downloading.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Choose a Simple Invoice Generator?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In a world of increasingly complex software, simplicity is a competitive advantage. Here's why thousands of professionals choose our simple invoice generator over more complicated alternatives:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Freelancers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Freelancers need to invoice quickly between projects. Our simple invoice generator lets you create and send invoices in minutes, not hours. No complicated setup, no monthly fees, no learning curve.
                </p>
                <p className="text-gray-700 text-sm">
                  Perfect for designers, writers, developers, consultants, and any professional who bills by the project or hour.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Small Businesses</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Small business owners wear many hats. The last thing you need is complicated invoicing software. Our basic invoice generator handles your billing needs without adding complexity to your day.
                </p>
                <p className="text-gray-700 text-sm">
                  Ideal for retail shops, service providers, contractors, and any business that needs professional invoicing without enterprise software.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Side Hustles</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Running a side business means maximizing efficiency. Our quick invoice generator lets you handle invoicing in spare moments without investing time in learning complex software.
                </p>
                <p className="text-gray-700 text-sm">
                  Great for part-time consultants, weekend contractors, online sellers, and anyone building a business alongside their day job.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">For Occasional Invoicing</h3>
                <p className="text-gray-700 text-sm mb-3">
                  If you only invoice occasionally, you don't want to maintain a subscription or remember complex software. Our minimal invoice generator is always available when you need it.
                </p>
                <p className="text-gray-700 text-sm">
                  Perfect for one-off projects, occasional consulting work, or infrequent sales that still require professional invoicing.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Simple Doesn't Mean Limited</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While our interface is simple, the invoices you create are fully professional and feature-complete. Every invoice includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional formatting and layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom business branding and logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatic tax calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Discount options (percentage or fixed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multiple currency support</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Payment terms and due dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Notes and terms sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Shipping and handling costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Payment tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">High-quality PDF output</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Experience the Simplicity</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Stop struggling with complicated invoicing software. Try our simple invoice generator online and discover how easy professional invoicing can be. No signup required, completely free, and ready to use right now.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiFileText className="w-5 h-5" />
              Create Your Simple Invoice Now
            </Link>
          </section>
        </div>
      </article>

      {/* Related Links */}
      <section className="lg:mb-16 mb-10">
        <div className="container">
          <div className="bg-gray-100 rounded-lg lg:p-6 p-4">
            <h3 className="lg:text-xl text-base font-semibold text-gray-900 lg:mb-4 mb-2">More Invoice Tools</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/invoice-generator-no-login" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Generator No Login
              </Link>
              <Link href="/invoice-generator-pdf" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice Generator PDF
              </Link>
              <Link href="/freelance-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Freelance Invoice Generator
              </Link>
              <Link href="/invoice-template-simple" className="text-teal-600 hover:text-teal-700 font-medium">
                → Simple Invoice Template
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
