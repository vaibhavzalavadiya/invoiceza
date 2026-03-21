import type { Metadata } from 'next';
import Link from 'next/link';
import EstimateForm from '../components/EstimateForm';
import { RelatedTools } from '../components/RelatedTools';

export const metadata: Metadata = {
    title: 'Free Estimate Maker – Create & Download PDF Estimates Online | Invoiceza',
    description: 'Create professional cost estimates online in seconds with our free estimate maker. No signup required. Itemize labor and materials, add disclaimers, track status, and download estimate as PDF instantly. Best free estimate generator online.',
    keywords: 'free estimate maker, estimate generator, online estimate maker, estimate template, make an estimate online, free estimate generator, estimate maker online free, create estimate PDF, cost estimate maker, project estimate creator, construction estimate maker, job estimate template',
    alternates: { canonical: 'https://invoiceza.com/estimate-maker' },
    openGraph: {
        title: 'Free Estimate Maker – Create & Download PDF Estimates Online | Invoiceza',
        description: 'Create professional cost estimates in seconds. Free estimate generator with instant PDF download. No signup required. Best free online estimate maker.',
        url: 'https://invoiceza.com/estimate-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const estimateJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Estimate Maker - Invoiceza',
    url: 'https://invoiceza.com/estimate-maker',
    description: 'Free online estimate maker. Create, customize, and download professional PDF cost estimates instantly. No signup required.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF estimate generation', 'Cost breakdown', 'Custom branding', 'Multiple currencies', 'Valid until dates', 'Disclaimer section', 'Status tracking', 'Free to use'],
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I create a cost estimate online for free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Visit our estimate maker, enter your business details, add the labor/materials with pricing, set the validity date, and click Download PDF. No signup or login required.' },
        },
        {
            '@type': 'Question',
            name: 'What is the difference between an estimate and a quotation?',
            acceptedAnswer: { '@type': 'Answer', text: 'An estimate is an approximate cost projection that may change based on actual conditions. A quotation is a fixed price commitment for specific work. Estimates are used when final costs are uncertain, while quotations lock in pricing.' },
        },
        {
            '@type': 'Question',
            name: 'Can I convert an estimate to a quotation?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes! Once you finalize the project scope and costs, you can use our quotation maker to create a formal fixed-price quote based on your estimate.' },
        },
        {
            '@type': 'Question',
            name: 'What should I include in a project estimate?',
            acceptedAnswer: { '@type': 'Answer', text: 'A good estimate includes: business details, client information, project name, itemized costs (labor and materials), contingency/tax percentage, a disclaimer about cost variability, and a validity date.' },
        },
        {
            '@type': 'Question',
            name: 'Is this estimate maker really free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes! Our estimate maker is 100% free with no hidden fees, watermarks, or subscription requirements. Create unlimited cost estimates at no cost.' },
        },
    ],
};

export default function EstimateMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(estimateJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div id="estimate-form">
                <EstimateForm />
            </div>

            {/* Why Use Our Estimate Maker */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Why Use Our Free Estimate Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            The best online estimate generator for creating professional cost projections — no signup or login required
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-violet-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500 to-violet-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Accurate Cost Breakdown</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Itemize labor, materials, and services with quantities and rates. All costs are automatically calculated in real-time for accuracy.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-indigo-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Built-in Disclaimer</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Protect your business with a customizable disclaimer that clearly states the estimate is subject to change based on actual conditions.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Contingency & Tax</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Add contingency percentages and tax rates to account for unexpected costs. Automatically calculated and displayed in the estimate total.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Convert to Quotation</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Once you finalize the scope, easily convert your estimate into a formal quotation with fixed pricing using our quotation maker.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Project Name Tracking</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Organize estimates by project name and reference number. Track estimate status as Draft, Sent, Approved, or Declined.</p>
                        </div>
                        <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-pink-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-pink-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Free, No Signup</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">No hidden fees, no registration, no watermarks. Create unlimited professional estimates completely free of charge, forever.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Create an Estimate */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="text-center mb-5 lg:mb-10">
                        <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            How to Create a Cost Estimate in 5 Simple Steps
                        </h2>
                        <p className="text-sm md:text-lg text-black max-w-2xl mx-auto">
                            Creating a professional cost estimate online takes just minutes with our free estimate generator.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-200 via-purple-200 to-pink-200 transform -translate-x-1/2"></div>
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enter Your Business Details</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add your business name, logo, and contact info to brand your estimate professionally.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">1</span></div>
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
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Add Project & Client Info</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Fill in the project recipient, set the project name, and specify the estimate status and validity period.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Build Cost Breakdown</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Add each labor task and material with quantities and rates. Totals are calculated automatically in real-time.</p>
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
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Add Contingency & Disclaimer</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Set a contingency/tax percentage for unexpected costs and customize your disclaimer to protect your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Download & Share</h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">Preview your estimate and download it as a professional PDF. Share via email, print, or messaging apps.</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white"><span className="text-2xl sm:text-3xl font-bold text-white">5</span></div>
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
                            Who Needs a Cost Estimate Maker?
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Our free estimate generator is perfect for professionals who need to provide approximate cost projections
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                        <div className="group bg-gradient-to-br from-violet-50 to-violet-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Contractors & Builders</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Provide cost estimates for construction, renovation, or repair projects. Break down labor, materials, and overhead for clients before starting work.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Service Providers</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Plumbers, electricians, landscapers, and other service professionals can quickly create estimates for repair, installation, or maintenance jobs.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Interior Designers</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Provide project cost estimates including furniture, fixtures, labor, and design fees. Give clients a clear picture of expected investment.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Event Planners</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                Create event cost estimates for weddings, corporate events, and parties. Include venue, catering, décor, and entertainment costs in one document.
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
                            Frequently Asked Questions About Estimates
                        </h2>
                        <p className="text-black max-w-2xl mx-auto">
                            Everything you need to know about creating professional cost estimates online
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">How do I create a cost estimate online for free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Visit our estimate maker, enter your business details, add the labor/materials with pricing, set the validity date, and click Download PDF. No signup or login required. The entire process takes under 5 minutes.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">What is the difference between an estimate and a quotation?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">An estimate is an approximate cost projection that may change based on actual labor, materials, and conditions. A quotation is a fixed-price commitment for specific work. Estimates are best used when final costs are uncertain.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Can I convert an estimate to a quotation?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes! Once you finalize the project scope and have accurate costs, you can use our quotation maker to create a formal fixed-price quote based on your estimate. There&apos;s a direct link in the estimate form sidebar.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">What should I include in a project estimate?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">A good estimate includes: business details, client information, project name, itemized costs (labor and materials), contingency/tax percentage, a disclaimer about cost variability, and a validity date.</p>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Is this estimate maker really free?</h3>
                            <p className="text-sm sm:text-base text-black leading-relaxed">Yes! Our estimate maker is 100% free with no hidden fees, watermarks, or subscription requirements. You can create unlimited cost estimates at no cost, forever. No signup or credit card needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-10 lg:pb-16">
                <div className="container">
                    <div className="relative text-center p-4 sm:p-7 md:p-10 lg:p-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl md:rounded-3xl">
                        <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
                            Start Creating Professional Estimates Now
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
                            Win client trust with clear, professional cost estimates. No registration, no credit card, no hidden fees.
                        </p>
                        <Link
                            href="#estimate-form"
                            className="group bg-white text-violet-600 px-4 sm:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 sm:gap-3"
                        >
                            Create Estimate Now
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </Link>
                        <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
                            Join thousands of professionals using our free estimate generator for project cost documentation
                        </p>
                    </div>
                </div>
            </section>

            <RelatedTools currentPage="/estimate-maker" />
        </>
    );
}
