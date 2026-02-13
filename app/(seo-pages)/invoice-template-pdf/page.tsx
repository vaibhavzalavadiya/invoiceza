import Link from 'next/link';
import { FiDownload, FiFileText, FiCheck, FiPrinter, FiEye, FiZap } from 'react-icons/fi';

export const metadata = {
  title: 'Invoice Template PDF (Free Download & Generator) | Invoiceza',
  description: 'Free invoice template PDF with live preview and instant download. Create professional PDF invoices online with our customizable invoice template pdf generator - no signup required.',
  keywords: 'invoice template pdf, free invoice template pdf, invoice template pdf free, printable invoice template pdf',
};

export default function InvoiceTemplatePDF() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Invoice Template PDF (Free Download & Generator)",
    "description": "Free invoice template PDF with live preview and instant download. Create professional PDF invoices online with our customizable invoice template pdf generator - no signup required.",
    "url": "https://Invoiceza.com/invoice-template-pdf",
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
              Invoice Template PDF (Free Download & Generator)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Free invoice template PDF with live preview and instant download. Create professional PDF invoices online with our customizable invoice template pdf generator - no signup required.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiDownload className="w-5 h-5" />
              Download Invoice Template PDF
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
              Free Invoice Template PDF - Professional & Customizable
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our free invoice template PDF is designed for professionals who need high-quality, customizable invoices without the hassle of complex software. Unlike static PDF templates that require expensive software to edit, our invoice template pdf free generator lets you customize every detail directly in your browser before downloading your perfectly formatted PDF invoice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice template pdf free approach means you get all the benefits of a professional template without any costs. Add your business logo, customize colors to match your brand, adjust line items to fit your services, and include payment terms that work for your business. Every element is editable, ensuring your invoices look exactly how you want them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our free invoice template pdf stand out is the combination of flexibility and ease of use. You're not locked into a rigid format, but you also don't need design skills to create professional invoices. The template handles all the formatting, calculations, and layout automatically while giving you complete control over the content.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice PDF Template Download - Instant & Easy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice pdf template download process is incredibly simple. Fill in your business details, add your client information, list your services or products, and click download. Within seconds, you'll have a professional PDF invoice ready to send. No registration, no email verification, no waiting - just instant access to your customized invoice template.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our printable invoice template pdf is optimized for both digital and print use. The PDF format ensures your invoice looks perfect whether your client views it on screen or prints it for their records. Professional fonts, proper margins, and clean layout make every invoice look polished and credible.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of PDF Invoice Templates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Universal compatibility - opens on any device or platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional appearance that builds client trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cannot be easily edited, protecting your invoice details</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Small file size perfect for email attachments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Print-ready with proper formatting and margins</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiPrinter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Printable Invoice Template PDF - Perfect for Any Business
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our printable invoice template pdf is designed with printing in mind. Whether you need physical copies for your records or your clients prefer paper invoices, our template produces crisp, clear prints every time. The layout is optimized for standard letter and A4 paper sizes, ensuring perfect results regardless of your location or printer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice format pdf follows industry best practices for professional invoicing. All essential information is clearly organized: business details at the top, client information prominently displayed, line items in an easy-to-read table, and totals clearly highlighted. This standard format ensures your invoices are immediately understood by clients and their accounting departments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes our invoice sample pdf particularly useful is that it serves as both a template and a learning tool. If you're new to invoicing, you can see exactly what information should be included and how it should be formatted. The sample demonstrates professional invoicing standards while being fully customizable to your specific needs.
            </p>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiEye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Live Preview Before Download
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most powerful features of our simple invoice template pdf generator is the live preview. As you enter your information, you can see exactly how your final PDF will look. This real-time preview eliminates surprises and ensures your invoice is perfect before you download it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The live preview shows you the professional invoice pdf exactly as your client will see it. Check that your logo looks good, verify that all calculations are correct, and ensure the layout is clean and professional. Make any adjustments you need and see the changes instantly. This preview feature saves time and prevents the frustration of downloading multiple versions to get everything right.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preview Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Real-time updates as you type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Exact representation of final PDF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Mobile and desktop preview modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Print preview to check paper output</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiZap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Blank Invoice Template PDF - Start Fresh Every Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our blank invoice template pdf gives you a clean slate for each new invoice. Unlike pre-filled templates that require you to delete sample data, our template starts empty and ready for your information. This approach is faster and reduces the risk of accidentally leaving sample data in your final invoice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The blank invoice template pdf includes all the structure and formatting you need without any placeholder content. Fields are clearly labeled so you know exactly what information goes where, but you're not wasting time clearing out dummy data. This clean approach makes invoice creation faster and more intuitive.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included in the Template</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Information Section</h4>
                  <p className="text-gray-700 text-sm">Company name, address, contact details, and logo placement</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Information Section</h4>
                  <p className="text-gray-700 text-sm">Bill to and ship to addresses with clear labels</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Invoice Details</h4>
                  <p className="text-gray-700 text-sm">Invoice number, date, due date, and payment terms</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Line Items Table</h4>
                  <p className="text-gray-700 text-sm">Description, quantity, rate, and amount columns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Calculations Section</h4>
                  <p className="text-gray-700 text-sm">Subtotal, tax, discounts, and total with automatic math</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Notes & Terms</h4>
                  <p className="text-gray-700 text-sm">Space for payment instructions and additional notes</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Use the Invoice Template PDF Generator</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating professional invoices with our template is straightforward. Follow these simple steps:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize Your Template</h3>
                  <p className="text-gray-700">Add your business information, upload your logo, and set your preferred colors. These settings can be saved for future invoices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fill in Invoice Details</h3>
                  <p className="text-gray-700">Enter client information, invoice number, dates, and add your line items with descriptions and pricing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Preview and Download</h3>
                  <p className="text-gray-700">Review your invoice in the live preview, make any final adjustments, then download your professional PDF.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Get Your Free Invoice Template PDF</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Start creating professional PDF invoices today with our free template generator. No signup, no watermarks, just professional invoices ready to download.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiDownload className="w-5 h-5" />
              Create Invoice PDF Now
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
              <Link href="/free-invoice-template" className="text-teal-600 hover:text-teal-700 font-medium">
                → Free Invoice Template
              </Link>
              <Link href="/invoice-pdf-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                → Invoice PDF Generator
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
