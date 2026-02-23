import type { Metadata } from 'next';
import Link from 'next/link';
import ReceiptForm from '../components/ReceiptForm';
import { RelatedTools } from '../components/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Receipt Maker – Create & Download PDF Receipts Online | Invoiceza',
    description: 'Create professional receipts online in seconds with our free receipt maker. No signup required. Add business logo, itemize payments, choose payment method, and download receipt as PDF instantly. Best free receipt generator online.',
    keywords: 'free receipt maker, receipt generator, online receipt maker, receipt template, make a receipt online, free receipt generator, receipt maker online free, create receipt PDF, payment receipt maker, receipt creator, digital receipt maker',
    alternates: { canonical: 'https://invoiceza.com/receipt-maker' },
    openGraph: {
        title: 'Free Receipt Maker – Create & Download PDF Receipts Online | Invoiceza',
        description: 'Create professional receipts in seconds. Free receipt generator with instant PDF download. No signup required. Best free online receipt maker.',
        url: 'https://invoiceza.com/receipt-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const receiptJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Receipt Maker - Invoiceza',
    url: 'https://invoiceza.com/receipt-maker',
    description: 'Free online receipt maker. Create, customize, and download professional PDF receipts instantly. No signup required.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF receipt generation', 'Custom branding', 'Multiple currencies', 'Itemized receipts', 'Payment method tracking', 'Free to use'],
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I create a receipt online for free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Simply visit our receipt maker page, fill in your business details, add the items or services paid for, select the payment method, and click Download PDF. No signup or login is required.' },
        },
        {
            '@type': 'Question',
            name: 'Is this receipt maker really free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes! Our receipt maker is 100% free with no hidden fees, watermarks, or subscription requirements. Create unlimited receipts at no cost.' },
        },
        {
            '@type': 'Question',
            name: 'Can I add my business logo to receipts?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can upload your business logo to personalize your receipts and make them look more professional. The logo will appear on the downloaded PDF.' },
        },
        {
            '@type': 'Question',
            name: 'What payment methods can I include on a receipt?',
            acceptedAnswer: { '@type': 'Answer', text: 'Our receipt maker supports Cash, Credit Card, Debit Card, Bank Transfer, UPI, PayPal, Check, and other custom payment methods.' },
        },
        {
            '@type': 'Question',
            name: 'Can I use this receipt maker on mobile?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, our receipt maker is fully responsive and works on all devices including smartphones, tablets, laptops, and desktops.' },
        },
    ],
};

export default function ReceiptMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(receiptJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <ReceiptForm />

            {/* Why Use Our Receipt Maker */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Why Use Our Free Receipt Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            The best online receipt generator for creating professional payment receipts instantly — no signup or login required
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-emerald-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Instant Receipt Generation</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Create professional payment receipts in under 60 seconds. Fill in the details, click download, and your receipt PDF is ready to send.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Multiple Payment Methods</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Track payment methods including cash, credit card, bank transfer, UPI, PayPal, and more. Document every transaction accurately.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Professional PDF Download</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Download receipts as high-quality PDF files. Print-ready formatting with your business logo, itemized charges, and payment confirmation.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Free, No Signup</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">No hidden fees, no registration, no watermarks. Create unlimited professional receipts completely free of charge.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Multi-Currency Support</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Create receipts in 20+ currencies including USD, EUR, GBP, INR, AUD, CAD, and more. Perfect for international businesses.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-pink-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-pink-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Mobile-Friendly Design</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Create receipts from any device — smartphone, tablet, or desktop. Our receipt maker adapts perfectly to every screen size.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Create a Receipt */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            How to Create a Receipt in 4 Simple Steps
                        </h2>
                        <p className="text-sm md:text-lg text-black max-w-2xl mx-auto">
                            Making a professional receipt online takes less than a minute with our free receipt generator.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-blue-200 to-purple-200 transform -translate-x-1/2"></div>
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enter Business & Payer Details</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add your business name, logo, and address. Then fill in who the payment was received from and the staff member who received it.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">1</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:pr-8 lg:pr-12 hidden md:block"></div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">2</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Add Items & Payment Details</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">List the items or services paid for with quantities and prices. Select the payment method — cash, card, bank transfer, UPI, or others.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Set Tax & Confirm Amount</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add applicable tax rates and confirm the total amount paid. The balance due is calculated automatically in real-time.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">3</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:pr-8 lg:pr-12 hidden md:block"></div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">4</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Download Receipt as PDF</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Preview your receipt and download it as a professional PDF. Share it with your customer via email, print, or WhatsApp.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Who Needs a Receipt Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Our free receipt generator is perfect for businesses of all sizes and individuals who need proof of payment
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                        <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Small Businesses & Shops</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Issue professional receipts to customers for every sale. Keep your business records organized and maintain customer trust with branded payment receipts.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Freelancers & Consultants</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Confirm payment for your services with a professional receipt. Document project payments, retainer fees, and consultation charges with ease.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Landlords & Property Managers</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Generate rent receipts for tenants as proof of payment. Essential for tenants claiming HRA exemptions and for maintaining proper rental records.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Service Providers & Contractors</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Provide payment confirmation for completed services. From plumbing to tutoring — give your clients proper documentation of every payment received.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Frequently Asked Questions About Receipts
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Everything you need to know about creating professional receipts online
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">How do I create a receipt online for free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Simply visit our receipt maker page, fill in your business details, add the items or services paid for, select the payment method, and click Download PDF. No signup or login is required. The entire process takes less than a minute.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Is this receipt maker really free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes! Our receipt maker is 100% free with no hidden fees, watermarks, or subscription requirements. You can create unlimited receipts at no cost, forever.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I add my business logo to receipts?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes, you can upload your business logo to personalize your receipts. The logo will appear on the downloaded PDF, making your receipts look professional and branded.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">What payment methods can I include on a receipt?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Our receipt maker supports Cash, Credit Card, Debit Card, Bank Transfer, UPI, PayPal, Check, and a custom &quot;Other&quot; option for any payment method you use.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I use this receipt maker on my phone?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes, our receipt maker is fully responsive and works perfectly on smartphones, tablets, laptops, and desktops. You can create and download receipts from any device.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="relative text-center p-4 sm:p-7 md:p-10 lg:p-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl md:rounded-3xl">
                        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
                            Start Creating Professional Receipts Now
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
                            Our free receipt maker is ready to use. No registration, no credit card, no hidden fees. Create your first receipt in under 60 seconds!
                        </p>
                        <Link
                            href="#"
                            className="group bg-white text-emerald-600 px-4 sm:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 sm:gap-3"
                        >
                            Create Receipt Now
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </Link>
                        <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
                            Join thousands of businesses using our free receipt generator for their payment documentation
                        </p>
                    </div>
                </div>
            </section>

            <RelatedTools currentPage="/receipt-maker" />
        </>
    );
}
