'use client';

import { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Is Invoiceza free to use?',
    answer: 'Yes, Invoiceza is 100% free to use with no hidden costs, subscriptions, or premium features. You can create unlimited invoices, download them as PDF, and use all features without any charges. There are no watermarks, no trial periods, and no credit card required.'
  },
  {
    question: 'Can I download invoices as PDF?',
    answer: 'Absolutely! Every invoice you create can be instantly downloaded as a professional PDF file. The PDF is print-ready, compatible with all devices, and maintains perfect formatting. You can also preview the PDF before downloading to ensure everything looks exactly as you want.'
  },
  {
    question: 'Do I need to sign up or create an account?',
    answer: 'No signup or registration is required. You can start creating invoices immediately without providing any personal information, email address, or creating an account. Your privacy is protected, and you won\'t receive any marketing emails or spam.'
  },
  {
    question: 'Is this invoice generator suitable for freelancers?',
    answer: 'Yes, Invoiceza is perfect for freelancers, consultants, and self-employed professionals. It includes features specifically designed for freelancers like hourly rate calculations, project-based billing, multiple currency support, and professional templates. You can also save client information for repeat invoicing.'
  },
  {
    question: 'Can I print invoices directly from the generator?',
    answer: 'Yes, you can print invoices directly from your browser or download them as PDF first and then print. All invoices are optimized for printing with proper margins, page breaks, and print-safe colors. The layout works perfectly on both color and black-and-white printers.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-10 lg:pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-40"></div>
      
      <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Everything you need to know about our free invoice generator
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="md:space-y-6 space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-start transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <h3 className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 ${
                      openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <FiChevronDown className={`w-6 h-6 transition-colors duration-200 ${
                      openIndex === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                    }`} />
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div>
                      <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
