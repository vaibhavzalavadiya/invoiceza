import Link from 'next/link';
import { FiEdit, FiDownload, FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'How It Works | Invoiceza – Free Invoice Generator',
  description: 'Create professional invoices in 3 simple steps. Fill in your details, customize and review, then download and send. No signup required.',
  keywords: 'how to create invoice, invoice generator steps, make invoice online, easy invoicing',
};

export default function HowItWorks() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "How It Works – Create Invoices in 3 Simple Steps",
    "description": "Create professional invoices in 3 simple steps. Fill in your details, customize and review, then download and send. No signup required.",
    "url": "https://invoiceza.com/how-it-works",
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
                How It Works
              </h1>
              <p className="text-sm text-gray-700 max-w-3xl mx-auto">
                Create professional invoices in 3 simple steps. No signup required.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <div className="space-y-6 lg:space-y-8 mb-6 lg:mb-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <FiEdit className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Step 1: Fill in Your Details</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    Enter your business information, client details, and add line items for your products or services.
                    Our intuitive interface makes it easy to input all necessary information.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Add your business name, address, and contact info</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Enter client billing and shipping addresses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Add line items with descriptions, quantities, and rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Set payment terms and due dates</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiCheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Step 2: Customize & Review</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    Customize your invoice with themes, add your logo, and review all details.
                    Our real-time preview shows exactly how your invoice will look.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Choose from multiple professional themes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Upload your company logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Add taxes, discounts, and shipping costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Include notes and terms & conditions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FiDownload className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Step 3: Download & Send</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                    Download your professional invoice as a PDF and send it to your client.
                    Save a draft for future reference or modifications.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Click "Download PDF" to generate your invoice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Save as draft for later editing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Export as JSON for backup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Send to client via email or file sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Pro Tips for Faster Invoicing</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keyboard Shortcuts:</h3>
                  <ul className="space-y-1">
                    <li>• Ctrl+S - Save draft</li>
                    <li>• Ctrl+D - Download PDF</li>
                    <li>• Ctrl+N - New invoice</li>
                    <li>• Ctrl+L - Add line item</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Time Savers:</h3>
                  <ul className="space-y-1">
                    <li>• Use "Quick Add" for common services</li>
                    <li>• Save business profile for reuse</li>
                    <li>• Copy invoices for recurring clients</li>
                    <li>• Load recent clients with one click</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Get Started?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Create your first professional invoice in less than 2 minutes. It's completely free!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
              >
                Start Creating Invoices
              </Link>
              <p className="text-xs sm:text-sm text-teal-100 mt-3 sm:mt-4">
                Have questions? Check our <Link href="/faq" className="text-white hover:underline font-medium">FAQ page</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
