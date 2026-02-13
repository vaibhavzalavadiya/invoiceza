import Link from 'next/link';
import { FiDollarSign, FiClock, FiCheck, FiFileText, FiDownload, FiUsers } from 'react-icons/fi';

export const metadata = {
    title: 'Freelance Invoice Generator (Free Tool) | Invoiceza',
    description: 'The best invoice generator for freelancers. Create professional freelance invoices in minutes with our free invoice tool designed specifically for self-employed professionals and independent contractors.',
    keywords: 'freelance invoice generator, invoice for freelancers, self employed invoice, freelancer invoice pdf',
};

export default function FreelanceInvoiceGenerator() {
    // WebPage Schema for SEO
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Freelance Invoice Generator (Free Tool)",
        "description": "The best invoice generator for freelancers. Create professional freelance invoices in minutes with our free invoice tool designed specifically for self-employed professionals and independent contractors.",
        "url": "https://Invoiceza.com/freelance-invoice-generator",
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
                            Freelance Invoice Generator (Free Tool)
                        </h1>
                        <p className="text-sm sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto">
                            The best invoice generator for freelancers. Create professional freelance invoices in minutes with our free invoice tool designed specifically for self-employed professionals and independent contractors.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm lg:text-lg shadow-lg"
                        >
                            <FiFileText className="w-5 h-5" />
                            Create Freelance Invoice Now
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
                            Invoice Generator for Freelancers - Built for Your Needs
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our invoice generator for freelancers understands the unique challenges faced by independent professionals. Unlike generic invoicing tools, this freelance invoice generator free solution is specifically designed for the way freelancers work. Whether you're a designer, writer, developer, consultant, or any other type of freelancer, you need invoicing tools that are fast, flexible, and don't require expensive subscriptions or complicated setup.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The invoice generator for freelancers includes features that matter most to independent professionals: quick invoice creation between projects, the ability to work from anywhere, no monthly fees eating into your profits, and professional-looking invoices that help you get paid faster. We've eliminated the features that freelancers rarely use and focused on making the essential tasks as efficient as possible.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            What makes this invoice generator for freelancers special is its understanding of freelance workflows. You can create invoices on your phone while traveling, save client information for repeat projects, duplicate invoices for recurring work, and download professional PDFs that clients can pay immediately. Everything is designed to help you spend less time on administration and more time on billable work.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4 lg:p-8 mb-6 lg:mb-8">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiDollarSign className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 text-teal-600" />
                            Freelance Invoice Generator Free - No Hidden Costs
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As a freelancer, every expense matters. That's why our freelance invoice generator free tool is completely free with no hidden costs, no usage limits, and no premium tiers. Many invoicing platforms charge $10-30 per month, which adds up to $120-360 per year - money that could be going into your pocket instead. Our free invoice tool for freelancers eliminates this expense entirely.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The freelance invoice generator free model isn't a trial or limited version. You get full access to all features: unlimited invoices, PDF downloads, custom branding, tax calculations, and more. There's no watermark on your invoices, no "upgrade now" prompts, and no features locked behind a paywall. This is genuinely free invoicing for freelancers who want to keep their overhead low and their profits high.
                        </p>
                        <div className="bg-white rounded-lg p-6 my-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">What You Save with Free Invoicing</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700"><strong>$120-360/year</strong> in subscription fees compared to paid invoicing software</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700"><strong>Hours of setup time</strong> - start invoicing immediately without configuration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700"><strong>Training costs</strong> - intuitive interface requires no learning curve</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700"><strong>IT support</strong> - browser-based tool works everywhere with no installation</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-lg border border-gray-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiFileText className="lg:w-8 lg:h-8 w-5 h-5 flex-shrink-0 text-teal-600" />
                            Invoice for Self Employed - Professional Presentation
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you're self-employed, your invoice is often a client's first impression of your professionalism. Our invoice for self employed professionals ensures you always present yourself in the best light. Every invoice includes professional formatting, clear line item breakdowns, accurate calculations, and a polished appearance that builds client confidence and trust.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The invoice for self employed tool includes features that help you look established and professional, even if you're just starting out. Add your logo to build brand recognition, customize colors to match your brand identity, and include professional payment terms that set clear expectations. These details matter when competing for clients and establishing yourself as a serious professional.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Self-employed professionals often work with a mix of individual clients and corporate accounts. Our invoice tool handles both scenarios perfectly. Create simple invoices for individual clients or detailed invoices with purchase order numbers and multiple line items for corporate clients. The flexibility ensures you can adapt to each client's requirements while maintaining your professional image.
                        </p>
                    </section>

                    <section className="bg-white rounded-lg border border-gray-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiDownload className="lg:w-8 lg:h-8 w-5 h-5 flex-shrink-0 text-teal-600" />
                            Freelancer Invoice PDF - Ready to Send
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Every freelancer invoice pdf generated by our tool is immediately ready to send to clients. The PDF format is universally accepted by businesses worldwide, ensuring your clients can open and process your invoices regardless of their systems or software. The freelancer invoice pdf includes all necessary information formatted professionally and clearly.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The freelancer invoice pdf is optimized for both digital and print use. If your client prefers to print invoices for their records, the PDF will look perfect on paper. If they process invoices digitally, the file size is small enough for easy email transmission and the format is compatible with most accounting software for easy import and processing.
                        </p>
                        <div className="bg-gray-50 rounded-lg lg:p-6 p-4 my-6">
                            <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">PDF Invoice Benefits for Freelancers</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Professional appearance that builds client confidence</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Universal compatibility - works with all email systems and devices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Cannot be easily edited, protecting your invoice details</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Small file size for quick email delivery</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">Print-ready for clients who need physical copies</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FiClock className="lg:w-8 lg:h-8 w-5 h-5 flex-shrink-0 text-teal-600" />
                            Invoice Tool for Freelancers - Time-Saving Features
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Time is your most valuable asset as a freelancer. Our invoice tool for freelancers includes numerous time-saving features designed to minimize the time you spend on invoicing. Create invoices in under two minutes, save client information for instant reuse, duplicate invoices for recurring projects, and download PDFs with a single click.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The invoice tool for freelancers understands that you often work on multiple projects simultaneously. Switch between invoices easily, save drafts automatically, and access your work from any device. Whether you're finishing a project at midnight or creating an invoice between client meetings, the tool is always available and always fast.
                        </p>
                        <div className="bg-white rounded-lg lg:p-6 p-4 lg:my-6 my-4">
                            <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Time-Saving Features</h3>
                            <div className="grid md:grid-cols-2 md:gap-4 gap-3">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Quick Invoice Creation</h4>
                                    <p className="text-gray-700 text-sm">Create complete invoices in under 2 minutes with streamlined data entry</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Client Information Saving</h4>
                                    <p className="text-gray-700 text-sm">Save client details and load them instantly for repeat projects</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Invoice Duplication</h4>
                                    <p className="text-gray-700 text-sm">Copy existing invoices for recurring work or similar projects</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Auto-Save Drafts</h4>
                                    <p className="text-gray-700 text-sm">Never lose work with automatic draft saving every 30 seconds</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Keyboard Shortcuts</h4>
                                    <p className="text-gray-700 text-sm">Power users can navigate and create invoices without touching the mouse</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Instant PDF Generation</h4>
                                    <p className="text-gray-700 text-sm">Download professional PDFs in under 2 seconds</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-lg border border-gray-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="md:text-3xl text-lg font-bold text-gray-900 md:mb-4 mb-3">Perfect for All Types of Freelancers</h2>
                        <p className="text-gray-700 leading-relaxed lg:mb-6 mb-4">
                            Our freelance invoice generator works for every type of independent professional. Here's how different freelancers use our tool:
                        </p>
                        <div className="lg:space-y-6 space-y-4">
                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Designers & Creatives</h3>
                                <p className="text-gray-700 mb-3">
                                    Designers, illustrators, and creative professionals need invoices that reflect their aesthetic sensibility. Upload your logo, customize colors to match your brand, and create invoices that look as polished as your portfolio. Bill by the project or by the hour, add revision rounds as line items, and include deposit or milestone payments.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Project-based billing with deposits, milestone payments, and final deliverables
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Writers & Content Creators</h3>
                                <p className="text-gray-700 mb-3">
                                    Writers and content creators often juggle multiple clients and projects. Create invoices quickly for articles, blog posts, copywriting, or content packages. Bill by the word, by the piece, or by the hour. Save client information for publications you write for regularly and duplicate invoices for recurring content contracts.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Per-article billing, monthly retainers, and content package invoicing
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Developers & Tech Professionals</h3>
                                <p className="text-gray-700 mb-3">
                                    Developers, programmers, and IT consultants need detailed invoices that break down complex projects. List different development phases, bug fixes, feature additions, and maintenance hours separately. Include technical details in descriptions while keeping the overall invoice clean and professional.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Hourly billing with detailed task breakdowns, sprint-based invoicing, and maintenance contracts
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Consultants & Coaches</h3>
                                <p className="text-gray-700 mb-3">
                                    Consultants and coaches bill for expertise and time. Create professional invoices for consulting sessions, coaching packages, strategy work, and advisory services. Include session dates, topics covered, and any deliverables. Set clear payment terms and include your professional credentials.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Session-based billing, package deals, and retainer agreements
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Photographers & Videographers</h3>
                                <p className="text-gray-700 mb-3">
                                    Visual professionals need to invoice for shoots, editing time, licensing, and deliverables. Create detailed invoices that separate shooting fees, editing hours, travel expenses, and usage rights. Include package details and any additional services like rush delivery or extra revisions.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Event-based billing, licensing fees, and post-production services
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg lg:p-6 p-4">
                                <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-3">Freelance Marketers & Social Media Managers</h3>
                                <p className="text-gray-700 mb-3">
                                    Marketing professionals and social media managers often work on retainers or project-based contracts. Invoice for campaign management, content creation, ad spend management, and analytics reporting. Break down services clearly so clients understand the value they're receiving.
                                </p>
                                <p className="text-gray-700 text-sm italic">
                                    Common use: Monthly retainers, campaign-based billing, and performance bonuses
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-lg border border-gray-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="md:text-3xl text-lg font-bold text-gray-900 md:mb-4 mb-3">Freelance Invoicing Best Practices</h2>
                        <p className="text-gray-700 leading-relaxed lg:mb-6 mb-4">
                            Get paid faster and maintain professional relationships with these invoicing best practices for freelancers:
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Invoice Immediately After Completion</h4>
                                    <p className="text-gray-700 text-sm">Send invoices as soon as work is delivered. Delays in invoicing often lead to delays in payment. Our quick invoice generator makes it easy to invoice immediately.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Include Clear Payment Terms</h4>
                                    <p className="text-gray-700 text-sm">Specify when payment is due (Net 15, Net 30, etc.) and what payment methods you accept. Clear terms prevent confusion and disputes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Use Sequential Invoice Numbers</h4>
                                    <p className="text-gray-700 text-sm">Number your invoices sequentially (001, 002, 003) for easy tracking and professional appearance. Our tool can auto-increment invoice numbers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Provide Detailed Descriptions</h4>
                                    <p className="text-gray-700 text-sm">Clearly describe what you're billing for. Vague descriptions can delay payment while clients seek clarification.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Include Your Contact Information</h4>
                                    <p className="text-gray-700 text-sm">Make it easy for clients to reach you with questions. Include email, phone, and business address on every invoice.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Save Copies for Your Records</h4>
                                    <p className="text-gray-700 text-sm">Keep copies of all invoices for tax purposes and business records. Download PDFs and save them in an organized folder system.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 lg:p-8 p-4 lg:mb-8 mb-6">
                        <h2 className="md:text-3xl text-lg font-bold text-gray-900 md:mb-4 mb-3">Getting Started as a Freelancer</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you're new to freelancing, professional invoicing is essential for getting paid and maintaining client relationships. Here's what you need to know:
                        </p>
                        <div className="bg-white rounded-lg lg:p-6 p-4 lg:my-6 my-4">
                            <h3 className="lg:text-xl text-base font-semibold text-gray-900 lg:mb-4 mb-2">Essential Invoice Information</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Your business name and contact information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Client name and billing address</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Unique invoice number</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Invoice date and due date</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Detailed description of services provided</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Quantity, rate, and amount for each line item</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Subtotal, taxes (if applicable), and total amount due</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span className="text-gray-700">Payment terms and accepted payment methods</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-teal-600 text-white rounded-lg lg:p-8 p-4 text-center">
                        <h2 className="md:text-3xl text-lg font-bold lg:mb-4 mb-2">Start Invoicing Like a Pro</h2>
                        <p className="md:text-lg text-sm lg:mb-6 mb-5 text-teal-50">
                            Join thousands of freelancers who trust our free invoice generator for their invoicing needs. Create professional invoices in minutes, get paid faster, and focus on what you do best.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-white text-teal-600 lg:px-8 lg:py-4 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold lg:text-lg text-sm"
                        >
                            <FiFileText className="w-5 h-5" />
                            Create Your Freelance Invoice Now
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
                            <Link href="/invoice-generator-no-login" className="text-teal-600 hover:text-teal-700 font-medium">
                                → Invoice Generator No Login
                            </Link>
                            <Link href="/simple-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium">
                                → Simple Invoice Generator
                            </Link>
                            <Link href="/invoice-generator-pdf" className="text-teal-600 hover:text-teal-700 font-medium">
                                → Invoice Generator PDF
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
