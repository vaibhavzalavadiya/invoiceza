import type { Metadata } from 'next';
import EstimateForm from '../components/EstimateForm';

export const metadata: Metadata = {
    title: 'Free Estimate Maker – Create & Download PDF Estimates Instantly | Invoiceza',
    description: 'Create professional estimates in seconds. Free online estimate generator with PDF download. No signup needed. Itemize services, set validity dates, and share polished estimates.',
    alternates: { canonical: 'https://invoiceza.com/estimate-maker' },
    openGraph: {
        title: 'Free Estimate Maker – Create & Download PDF Estimates | Invoiceza',
        description: 'Create professional estimates in seconds. Free estimate generator with instant PDF download. No signup required.',
        url: 'https://invoiceza.com/estimate-maker',
        siteName: 'Invoiceza',
        type: 'website',
    },
};

const estimateJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Estimate Maker - Invoiceza',
    url: 'https://invoiceza.com/estimate-maker',
    description: 'Free online estimate maker. Create, customize, and download professional PDF estimates instantly.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['PDF estimate generation', 'Custom branding', 'Multiple currencies', 'Valid until dates', 'Free to use'],
};

export default function EstimateMakerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(estimateJsonLd) }}
            />
            <EstimateForm />
        </>
    );
}
