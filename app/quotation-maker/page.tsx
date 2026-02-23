import type { Metadata } from 'next';
import Link from 'next/link';
import QuotationForm from '../components/QuotationForm';
import { RelatedTools } from '../components/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Quotation Maker – Create & Download PDF Quotations Online | Invoiceza',
    description: 'Create professional quotations online in seconds with our free quotation maker. No signup required. Itemize services, set validity dates, add scope of work, and download quotation as PDF instantly. Best free quotation generator online.',
    keywords: 'free quotation maker, quotation generator, online quotation maker, quotation template, make a quotation online, free quotation generator, quotation maker online free, create quotation PDF, price quotation maker, quotation creator, business quote maker, quote generator free',
    alternates: { canonical: 'https://invoiceza.com/quotation-maker' },
    openGraph: {
        title: 'Free Quotation Maker – Create & Download PDF Quotations Online | Invoiceza',
        description: 'Create professional quotations in seconds. Free quotation generator with instant PDF download. No signup required. Best free online quotation maker.',
        url: 'https://invoiceza.com/quotation-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const quotationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Quotation Maker - Invoiceza',
    url: 'https://invoiceza.com/quotation-maker',
    description: 'Free online quotation maker. Create, customize, and download professional PDF quotations instantly. No signup required.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF quotation generation', 'Custom branding', 'Multiple currencies', 'Valid until dates', 'Scope of work', 'Quotation status tracking', 'Free to use'],
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I create a quotation online for free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Visit our quotation maker, enter your business details, add the services/items with pricing, set a validity date, and click Download PDF. No signup or login required.' },
        },
        {
            '@type': 'Question',
            name: 'What is the difference between a quotation and an invoice?',
            acceptedAnswer: { '@type': 'Answer', text: 'A quotation is sent before work begins to propose pricing, while an invoice is sent after work is completed to request payment. Quotations have expiry dates and can be accepted or rejected.' },
        },
        {
            '@type': 'Question',
            name: 'Can I track quotation status?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, our quotation maker lets you track status as Draft, Sent, Accepted, Rejected, or Expired. This helps you manage your sales pipeline effectively.' },
        },
        {
            '@type': 'Question',
            name: 'Can I add a scope of work to my quotation?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, our quotation maker includes a dedicated Scope of Work section where you can describe the project objectives, deliverables, and expectations before listing individual line items.' },
        },
        {
            '@type': 'Question',
            name: 'Is this quotation maker really free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes! Our quotation maker is 100% free with no hidden fees, watermarks, or subscription requirements. Create unlimited quotations at no cost.' },
        },
    ],
};

export default function QuotationMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(quotationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <QuotationForm />

            {/* Why Use Our Quotation Maker */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Why Use Our Free Quotation Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            The best online quotation generator for creating professional business quotes instantly — no signup or login required
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Create Quotes in Seconds</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Generate professional price quotations in under a minute. Add services, set pricing, and download — no complicated setup needed.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-indigo-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Scope of Work Included</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Define project scope, deliverables, and objectives directly in your quotation. Help clients understand exactly what they&apos;re paying for.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Validity Date Tracking</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Set expiration dates on your quotations to create urgency and protect against price fluctuations. Stay organized with status tracking.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Status Management</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Track whether your quotation is Draft, Sent, Accepted, Rejected, or Expired. Manage your sales pipeline effortlessly.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Signature Fields</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Professional quotations with dedicated signature fields for both authorized representative and client acceptance — just like formal proposals.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-pink-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-pink-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Free, No Signup</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">No hidden fees, no registration, no watermarks. Create unlimited professional quotations completely free of charge, forever.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Create a Quotation */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            How to Create a Quotation in 5 Simple Steps
                        </h2>
                        <p className="text-sm md:text-lg text-black max-w-2xl mx-auto">
                            Making a professional quotation online takes just minutes with our free quotation generator.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 transform -translate-x-1/2"></div>
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enter Your Business Details</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add your business name, logo, and address to brand your quotation professionally.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">1</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:pr-8 lg:pr-12 hidden md:block"></div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">2</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Add Client & Project Info</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Fill in who the quotation is for, set the project name, and define the scope of work with clear deliverables.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">List Services & Pricing</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add each service or product with quantities and rates. Totals are calculated automatically in real-time.</p>
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
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Set Validity & Terms</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Set an expiration date for your quote and add terms & conditions to protect your business interests.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Download & Send</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Preview your quotation and download it as a professional PDF. Share via email, print, or messaging apps.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">5</span></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
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
                            Who Needs a Quotation Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Our free quotation generator is perfect for businesses and professionals who need to send price proposals
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                        <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Freelancers & Consultants</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Send professional price quotations to potential clients before starting work. Clearly define project scope, deliverables, and costs to win more business.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Contractors & Agencies</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Create detailed quotations for renovation, construction, marketing, or design projects. Include scope of work, material costs, and labor charges in one document.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Retailers & Wholesalers</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Provide price quotes for bulk orders, custom products, or wholesale pricing. Set validity periods so customers know when the offer expires.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">IT & Software Companies</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Quote software development projects, SaaS packages, or IT consulting services. Include milestones, phases, and payment schedules in your quotations.
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
                            Frequently Asked Questions About Quotations
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Everything you need to know about creating professional quotations online
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">How do I create a quotation online for free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Visit our quotation maker, enter your business details, add the services/items with pricing, set a validity date, and click Download PDF. No signup or login required. The entire process takes under 5 minutes.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">What is the difference between a quotation and an invoice?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">A quotation is a proposed price for goods or services sent before work begins. An invoice is a request for payment sent after the work is completed. Quotations have expiry dates and can be accepted or rejected, while invoices are binding payment requests.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I track quotation status?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes! Our quotation maker lets you set and track status as Draft, Sent, Accepted, Rejected, or Expired. This helps you manage your sales pipeline and follow up with prospects effectively.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I add a scope of work to my quotation?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes, our quotation maker includes a dedicated Scope of Work section where you can describe the project objectives, deliverables, and expectations before listing individual line items with pricing.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Is this quotation maker really free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes! Our quotation maker is 100% free with no hidden fees, watermarks, or subscription requirements. You can create unlimited quotations at no cost, forever. No signup or credit card needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="relative text-center p-4 sm:p-7 md:p-10 lg:p-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl md:rounded-3xl">
                        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
                            Start Creating Professional Quotations Now
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
                            Win more business with polished, professional quotations. No registration, no credit card, no hidden fees.
                        </p>
                        <Link
                            href="#"
                            className="group bg-white text-blue-600 px-4 sm:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 sm:gap-3"
                        >
                            Create Quotation Now
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </Link>
                        <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
                            Join thousands of businesses using our free quotation generator to win more clients
                        </p>
                    </div>
                </div>
            </section>

            <RelatedTools currentPage="/quotation-maker" />
        </>
    );
}
