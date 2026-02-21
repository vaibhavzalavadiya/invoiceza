import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Script from "next/script";

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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
    url: 'https://invoiceza.com',
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
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Invoiceza',
    url: 'https://invoiceza.com',
    logo: 'https://invoiceza.com/images/logo.png',
    // TODO: Add real social media profile URLs when they exist
    // sameAs: [
    //   'https://twitter.com/invoiceza',
    //   'https://facebook.com/invoiceza',
    // ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@invoiceza.com',
      availableLanguage: ['English'],
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Canonical is handled by Next.js metadata API — do not add a manual canonical tag here */}
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vkd890fga2");`}
        </Script>
      </body>
    </html>
  );
}

