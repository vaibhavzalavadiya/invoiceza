import Link from 'next/link';
import { FiGlobe, FiCheck, FiFileText, FiDownload, FiShield, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Online Invoice Generator – Make Invoices Instantly | Invoiceza',
  description: 'Create invoices online for free with our web-based invoice generator. Instant PDF download, no login required. Secure online invoice maker for businesses.',
  keywords: 'online invoice generator, create invoice online free, web-based invoice maker, instant invoice generator',
};

export default function OnlineInvoiceGenerator() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online Invoice Generator – Make Invoices Instantly",
    "description": "Create invoices online for free with our web-based invoice generator. Instant PDF download, no login required. Secure online invoice maker for businesses.",
    "url": "https://Invoiceza.com/online-invoice-generator",
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
              Online Invoice Generator – Make Invoices Instantly
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Create invoices online for free with our web-based invoice generator. Instant PDF download, no login required. Secure online invoice maker for businesses.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg">
              <FiGlobe className="w-5 h-5" />
              Create Invoice Online Now
            </Link>
          </div>
        </div>
      </section>

      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiGlobe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Create Invoice Online for Free
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create invoice online for free with our powerful web-based tool. No software to download, no installation required - just open your browser and start creating professional invoices. Our online invoice generator works on any device with internet access, making it perfect for professionals who work from multiple locations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The ability to create invoice online for free means you can invoice clients from anywhere - your office, home, coffee shop, or while traveling. All you need is a web browser and an internet connection. Your invoices are generated in real-time with professional formatting and instant PDF download.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Online Invoice Generator with PDF Download
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our online invoice generator with PDF download creates professional invoices that you can download instantly. The PDF format ensures your invoices look perfect on any device and can be easily emailed to clients or printed for physical delivery.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Download Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Instant PDF generation in under 2 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">High-quality professional formatting</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Optimized file size for email delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Print-ready with proper margins</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Web-Based Invoice Maker
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our web-based invoice maker eliminates the need for desktop software. Everything runs in your browser, which means no downloads, no installations, and no updates to manage. The web-based approach ensures you always have access to the latest features without any manual updates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The web-based invoice maker is accessible from any device - Windows PC, Mac, Linux, iPad, Android tablet, or smartphone. Create invoices on the device that's most convenient for you at any given moment.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Instant Invoice Generator (No Login)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our instant invoice generator with no login requirement means you can start creating invoices the moment you open the page. No registration forms, no email verification, no password creation - just instant access to professional invoicing tools.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The no login approach saves you time and protects your privacy. Your invoice data stays in your browser and is never uploaded to our servers, giving you complete control over your business information.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiShield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Secure Online Invoice Generator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Security is paramount when handling business documents. Our secure online invoice generator uses industry-standard encryption to protect your data. All invoice generation happens in your browser, ensuring your sensitive business information never leaves your device.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Client-side processing - data stays in your browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">No data storage on external servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">HTTPS encryption for all connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">No tracking or data collection</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Creating Invoices Online</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Create professional invoices online instantly. Free, secure, and no signup required. Join thousands using our online invoice generator.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm">
              <FiGlobe className="w-5 h-5" />
              Create Invoice Online Now
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
              <Link href="/invoice-maker" className="text-teal-600 hover:text-teal-700 font-medium">→ Invoice Maker</Link>
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
