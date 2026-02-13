import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Free Invoice Generator – Create & Download Invoices Online | Invoice Maker",
  description: "Create professional invoices instantly with our free invoice generator. No signup required. Download PDF invoices, save drafts, and manage clients. Perfect for freelancers and small businesses.",
  keywords: ["free invoice generator", "invoice maker", "create invoice online", "professional invoice template", "invoice PDF", "online invoicing", "freelance invoice", "small business invoice", "invoice creator", "free invoice maker"],
  authors: [{ name: "Invoiceza" }],
  creator: "Invoiceza",
  publisher: "Invoiceza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://invoiceza.com'),
  alternates: {
    canonical: 'https://invoiceza.com',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "Free Invoice Generator – Create & Download Invoices Online",
    description: "Create professional invoices instantly. Free invoice maker with PDF download, no signup required. Perfect for freelancers and small businesses.",
    url: 'https://invoiceza.com',
    siteName: 'Invoiceza',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Invoiceza - Free Invoice Maker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator - Create Professional Invoices',
    description: 'Create professional invoices instantly. Free, no signup required.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Note: Add your actual verification codes in production
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Invoiceza',
    description: 'Free online invoice generator for creating professional invoices instantly. No signup required, works in browser, download as PDF.',
    url: 'https://Invoiceza.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Free invoice creation',
      'PDF generation and download',
      'Professional invoice templates',
      'No login or signup required',
      'Mobile responsive design',
      'Auto-save functionality',
      'Multiple currencies support',
      'Tax and discount calculations',
      'Client management',
      'Draft saving',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Invoiceza',
    url: 'https://Invoiceza.com',
    logo: 'https://Invoiceza.com/logo.png',
    sameAs: [
      'https://twitter.com/invoicegenpro',
      'https://facebook.com/invoicegenpro',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@Invoiceza.com',
      availableLanguage: ['English'],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="canonical" href="https://Invoiceza.com" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

