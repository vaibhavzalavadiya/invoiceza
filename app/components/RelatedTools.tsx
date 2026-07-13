import Link from 'next/link';

const allTools = [
    { href: '/', label: 'Create Invoice', description: 'Professional invoice generator' },
    { href: '/invoice-generator', label: 'Invoice Generator', description: 'Create professional invoices online' },
    { href: '/receipt-maker', label: 'Receipt Maker', description: 'Create professional receipts' },
    { href: '/quotation-maker', label: 'Quotation Maker', description: 'Generate price quotations' },
    { href: '/estimate-maker', label: 'Estimate Maker', description: 'Create project estimates' },
];

interface RelatedToolsProps {
    /** The current page's href to exclude from the list */
    currentPage?: string;
}

export function RelatedTools({ currentPage }: RelatedToolsProps) {
    const filteredTools = allTools.filter(tool => tool.href !== currentPage);

    return (
        <section className="lg:mb-16 mb-10">
            <div className="container">
                <div className="bg-gray-100 rounded-lg lg:p-6 p-4">
                    <h3 className="lg:text-xl text-base font-semibold text-gray-900 lg:mb-4 mb-3">
                        Explore All Invoice Tools & Templates
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {filteredTools.map((tool) => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors group"
                            >
                                <span className="text-teal-600 mt-0.5 flex-shrink-0">→</span>
                                <div>
                                    <span className="text-sm font-medium text-teal-600 group-hover:text-teal-700">
                                        {tool.label}
                                    </span>
                                    <p className="text-xs text-gray-500">{tool.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
