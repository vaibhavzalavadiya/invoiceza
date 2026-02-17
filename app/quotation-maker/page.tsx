import type { Metadata } from 'next';
import QuotationForm from '../components/QuotationForm';

export const metadata: Metadata = {
    title: 'Free Quotation Maker – Create & Download PDF Quotations Instantly | Invoiceza',
    description: 'Create professional quotations in seconds. Free online quotation generator with PDF download. No signup needed. Itemize services, set validity dates, and send polished quotes.',
    alternates: { canonical: 'https://invoiceza.com/quotation-maker' },
    openGraph: {
        title: 'Free Quotation Maker – Create & Download PDF Quotations | Invoiceza',
        description: 'Create professional quotations in seconds. Free quotation generator with instant PDF download. No signup required.',
        url: 'https://invoiceza.com/quotation-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const quotationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Quotation Maker - Invoiceza',
    url: 'https://invoiceza.com/quotation-maker',
    description: 'Free online quotation maker. Create, customize, and download professional PDF quotations instantly.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF quotation generation', 'Custom branding', 'Multiple currencies', 'Valid until dates', 'Free to use'],
};

export default function QuotationMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(quotationJsonLd) }}
            />
            <QuotationForm />
        </>
    );
}
