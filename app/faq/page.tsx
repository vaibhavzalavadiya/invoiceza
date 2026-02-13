import Link from 'next/link';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';

export const metadata = {
  title: 'FAQ – Frequently Asked Questions | Invoiceza',
  description: 'Find answers to common questions about our free invoice generator. Learn how to create invoices, download PDFs, save drafts, and more.',
  keywords: 'invoice generator FAQ, how to create invoice, invoice maker questions, free invoicing help',
};

const faqs = [
  {
    question: "Is the invoice generator really free?",
    answer: "Yes! Our invoice generator is 100% free to use. You can create unlimited invoices, download them as PDFs, and save drafts without any cost. No credit card required, no hidden fees, and no watermarks on your invoices."
  },
  {
    question: "Do I need to create an account?",
    answer: "No account needed! Our invoice generator works entirely in your browser. All your data is stored locally on your device, giving you complete privacy and control. You can start creating invoices immediately without signing up."
  },
  {
    question: "How do I save my invoice?",
    answer: "You have multiple options: 1) Download as PDF for sending to clients, 2) Save as draft in your browser for later editing, 3) Export as JSON for backup. Use Ctrl+S keyboard shortcut to quickly save a draft."
  },
  {
    question: "Can I add my company logo?",
    answer: "Absolutely! Click the 'Add Logo' button in the invoice header and upload your company logo (PNG, JPG, or SVG). The logo will appear on all your invoices and can be saved with your business profile for future use."
  },
  {
    question: "What currencies are supported?",
    answer: "We support 30+ currencies including USD, EUR, GBP, INR, JPY, CAD, AUD, and many more. The currency selector is searchable, making it easy to find your preferred currency."
  },
  {
    question: "How do I calculate taxes and discounts?",
    answer: "Simply enter your tax rate (as a percentage) and it will be automatically calculated on taxable items. For discounts, click the '+ Discount' button and choose between percentage or fixed amount. All calculations update in real-time."
  },
  {
    question: "Can I customize the invoice template?",
    answer: "Yes! You can choose from multiple themes (Classic, Modern, Minimal, Professional), customize colors, add your logo, and include custom notes and terms. Your preferences can be saved for future invoices."
  },
  {
    question: "Is my data secure?",
    answer: "Very secure! All invoice data is processed and stored locally in your browser - nothing is sent to our servers. You have complete control over your data. For shared computers, remember to clear your browser data after use."
  },
  {
    question: "Can I edit an invoice after downloading?",
    answer: "If you saved it as a draft, yes! Load the draft from 'Quick Actions' and make any changes. However, PDFs are final documents. We recommend saving a draft before downloading the PDF."
  },
  {
    question: "How do I add multiple line items quickly?",
    answer: "Use the 'Quick Add' buttons (Consulting, Design, Development) to instantly add common services, or press Ctrl+L to add a blank line item. You can also duplicate existing items using the copy icon."
  },
  {
    question: "What's the invoice numbering system?",
    answer: "Invoice numbers auto-increment based on your history. The system suggests the next number, but you can customize it to match your existing numbering scheme. Numbers are tracked locally in your browser."
  },
  {
    question: "Can I use this for my business?",
    answer: "Absolutely! Our invoice generator is perfect for freelancers, small businesses, consultants, and contractors. Create professional invoices that comply with standard business requirements."
  },
  {
    question: "What if I accidentally close the browser?",
    answer: "Don't worry! We auto-save your work every 30 seconds. When you return, your invoice will be right where you left it. You'll see an 'Auto-saved' timestamp in the header."
  },
  {
    question: "How do I send the invoice to my client?",
    answer: "Download the PDF and attach it to your email, or use your preferred file-sharing method. The PDF is professionally formatted and ready to send immediately."
  },
  {
    question: "Can I create recurring invoices?",
    answer: "Use the 'Copy Invoice' feature in Quick Actions to duplicate an existing invoice. Update the date and invoice number, and you're ready to go. This is perfect for recurring clients."
  }
];

export default function FAQ() {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="container">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FiHelpCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-600 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Frequently Asked Questions</h1>
              </div>
              <p className="text-sm text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our free invoice generator.
                Can't find what you're looking for? <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">Contact us</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="pb-10 lg:pb-16">
          <div className="container">
            <section className="bg-white rounded-lg border border-gray-200 p-4 md:p-8 mb-6 lg:mb-8 shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg hover:border-teal-200 transition-all hover:shadow-sm overflow-hidden">
                    <summary className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all rounded-lg">
                      <h2 className="font-semibold text-sm sm:text-base text-gray-900 pr-3 sm:pr-4 group-hover:text-teal-700">{faq.question}</h2>
                      <FiChevronDown className="w-5 h-5 text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 border border-teal-200 rounded-lg p-4 md:p-6 lg:p-8 mb-6 lg:mb-8 shadow-sm text-center">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <FiHelpCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 flex-shrink-0" />
                <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-gray-900">Still have questions?</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Our support team is here to help! Reach out through our contact page and we'll get back to you within 24-48 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg text-sm lg:text-lg font-semibold"
              >
                Contact Support
              </Link>
            </section>

            <section className="bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-lg lg:p-8 p-4 shadow-lg text-center">
              <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Ready to Create Invoices?</h2>
              <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                Start creating professional invoices in minutes with our free invoice generator.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl font-semibold lg:text-lg text-sm"
              >
                Start Creating Invoices
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
