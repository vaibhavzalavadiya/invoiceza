import type { Metadata } from 'next';
import ReceiptForm from '../components/ReceiptForm';

export const metadata: Metadata = {
    title: 'Free Receipt Maker – Create & Download PDF Receipts Instantly | Invoiceza',
    description: 'Create professional receipts in seconds. Free online receipt generator with PDF download. No signup needed. Add your business logo, itemize payments, and generate polished receipts.',
    alternates: { canonical: 'https://invoiceza.com/receipt-maker' },
    openGraph: {
        title: 'Free Receipt Maker – Create & Download PDF Receipts | Invoiceza',
        description: 'Create professional receipts in seconds. Free receipt generator with instant PDF download. No signup required.',
        url: 'https://invoiceza.com/receipt-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const receiptJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Receipt Maker - Invoiceza',
    url: 'https://invoiceza.com/receipt-maker',
    description: 'Free online receipt maker. Create, customize, and download professional PDF receipts instantly.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF receipt generation', 'Custom branding', 'Multiple currencies', 'Itemized receipts', 'Free to use'],
};

export default function ReceiptMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(receiptJsonLd) }}
            />
            <ReceiptForm />
        </>
    );
}
