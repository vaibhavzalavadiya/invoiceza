import Link from 'next/link';
import { FiUsers, FiFileText, FiCheck, FiDownload, FiDollarSign, FiAlertCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Freelance Invoice Template (Free for Freelancers) | Invoiceza',
  description: 'Free freelance invoice template designed for independent professionals. Create professional invoices for freelancers with our specialized templates and generator.',
  keywords: 'freelance invoice template, invoice for freelancers, freelancer invoice example, freelance invoice format',
};

export default function FreelanceInvoiceTemplate() {
  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Freelance Invoice Template (Free for Freelancers)",
    "description": "Free freelance invoice template designed for independent professionals. Create professional invoices for freelancers with our specialized templates and generator.",
    "url": "https://Invoiceza.com/freelance-invoice-template",
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
              Freelance Invoice Template (Free for Freelancers)
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Free freelance invoice template designed for independent professionals. Create professional invoices for freelancers with our specialized templates and generator.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
            >
              <FiUsers className="w-5 h-5" />
              Use Freelance Invoice Template
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-10 lg:pb-16">
        <div className="container">
          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Invoice for Freelancers - Built for Your Workflow
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our invoice for freelancers is specifically designed for the unique needs of independent professionals. Unlike generic invoice templates, this freelance invoice template understands how freelancers work: multiple clients, varied project types, flexible billing arrangements, and the need for speed between projects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The freelancer invoice example we provide shows you exactly how to present your services professionally. Whether you're billing by the hour, by the project, or using milestone payments, our template adapts to your needs. The format is familiar to clients who work with freelancers, making payment processing smooth and quick.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes this invoice template for freelancers special is how it balances professionalism with simplicity. You need to look established and credible, but you don't have time for complicated invoicing processes. Our template gives you both: professional appearance with minimal effort.
            </p>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Freelancer Invoice Example - Learn from the Best
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our freelancer invoice example demonstrates best practices for freelance invoicing. It shows you how to describe your services clearly, how to structure your rates, and how to present payment terms that protect your interests while remaining professional.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The freelance invoice format includes sections specifically relevant to independent work: project descriptions, hourly rates or flat fees, revision rounds, and milestone payments. These elements are common in freelance work but often missing from generic invoice templates.
            </p>
            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features for Freelancers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Flexible billing options - hourly, project-based, or retainer</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Space for detailed project descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Support for milestone and deposit payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional branding with logo upload</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Quick creation for fast turnaround</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDollarSign className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Freelance Invoice PDF - Professional Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every freelance invoice pdf generated by our template looks professional and polished. The PDF format ensures your invoice maintains its formatting across all devices and email clients, so your professional presentation is never compromised by technical issues.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The freelance invoice generator creates PDFs that are optimized for both viewing and printing. Whether your client processes invoices digitally or prints them for approval, your invoice will look perfect. This attention to detail helps you maintain a professional image with every client interaction.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Benefits for Freelancers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal Acceptance</h4>
                  <p className="text-gray-700 text-sm">All clients can open and process PDF invoices regardless of their systems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Image</h4>
                  <p className="text-gray-700 text-sm">PDF format signals professionalism and attention to detail</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Archiving</h4>
                  <p className="text-gray-700 text-sm">Keep organized records of all invoices for tax purposes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Delivery</h4>
                  <p className="text-gray-700 text-sm">Small file sizes make email delivery fast and reliable</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiDownload className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Freelance Billing Invoice - Get Paid Faster
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A well-designed freelance billing invoice helps you get paid faster. Our template includes all the information clients need to process payment quickly: clear descriptions, accurate totals, payment terms, and accepted payment methods. Nothing is left to guesswork.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The invoice template for freelancers includes smart features that reduce payment delays. Clear due dates, professional presentation, and detailed line items all contribute to faster payment. Many freelancers report getting paid 5-7 days faster with professional invoices.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tips for Faster Payment</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Send invoices immediately after project completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Include clear payment terms (Net 15, Net 30, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">List multiple payment methods for client convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Use professional formatting to build trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Follow up politely if payment is late</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Different Types of Freelance Work</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our freelance invoice template works for all types of independent work. Here's how different freelancers use it:
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Creative Freelancers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Designers, writers, photographers, and other creatives use our template to bill for projects, revisions, and usage rights. The template supports both hourly and project-based billing.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Common use: Project fees with revision rounds and final deliverables
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Freelancers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Developers, IT consultants, and technical professionals use detailed line items to break down complex projects into understandable billing components.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Common use: Hourly billing with detailed task descriptions
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Consulting Freelancers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Business consultants, coaches, and advisors bill for sessions, packages, and retainer agreements using our flexible template format.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Common use: Session-based billing and monthly retainers
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FiAlertCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
              Common Freelancer Mistakes to Avoid
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Learn from common invoicing mistakes that cost freelancers time and money:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Vague Service Descriptions</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mistake:</strong> "Design work - $500"
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Better:</strong> "Logo design including 3 concepts, 2 revision rounds, and final files in multiple formats - $500"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Missing Payment Terms</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mistake:</strong> Not specifying when payment is due
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Better:</strong> "Payment due within 15 days of invoice date (Net 15)"
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Delayed Invoicing</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mistake:</strong> Waiting weeks after project completion to send invoice
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Better:</strong> Send invoice within 24 hours of project delivery
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Unprofessional Formatting</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mistake:</strong> Using plain text emails or poorly formatted documents
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Better:</strong> Use professional PDF invoices with proper formatting
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Missing Contact Information</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Mistake:</strong> Not including phone number or email for questions
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Better:</strong> Include multiple ways for clients to reach you
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Use the Freelance Invoice Template</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating professional freelance invoices is simple with our template:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Up Your Profile</h3>
                  <p className="text-gray-700">Add your business name, contact information, and logo. This information will be saved for future invoices, saving you time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Client Details</h3>
                  <p className="text-gray-700">Enter your client's information. Save it for repeat clients to make future invoicing even faster.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Describe Your Work</h3>
                  <p className="text-gray-700">List your services with clear descriptions. Include hours worked, project milestones, or deliverables as appropriate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Payment Terms</h3>
                  <p className="text-gray-700">Specify when payment is due and how clients can pay. Clear terms prevent confusion and payment delays.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download and Send</h3>
                  <p className="text-gray-700">Generate your PDF invoice and send it to your client. The entire process takes less than 3 minutes.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
            <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Using Freelance Invoice Templates</h2>
            <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
              Join thousands of freelancers who trust our invoice templates. Create professional invoices in minutes, get paid faster, and focus on your work. No signup required, completely free.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
            >
              <FiUsers className="w-5 h-5" />
              Create Freelance Invoice Now
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
              <Link href="/simple-invoice-template" className="text-teal-600 hover:text-teal-700 font-medium">
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
