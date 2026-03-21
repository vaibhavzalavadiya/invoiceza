import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://invoiceza.com';

  return [
    {
      url: baseUrl,
      lastModified: '2025-03-01',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2025-02-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2025-01-01',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2025-01-01',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: '2025-02-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: '2025-02-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Receipt, Quotation & Estimate Maker Pages
    {
      url: `${baseUrl}/receipt-maker`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quotation-maker`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estimate-maker`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Invoice Generator Pages
    {
      url: `${baseUrl}/invoice-generator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/online-invoice-generator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/invoice-maker`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/free-invoice-maker`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/invoice-creator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/invoice-generator-no-login`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/simple-invoice-generator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/freelance-invoice-generator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invoice-generator-pdf`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Invoice PDF Pages
    {
      url: `${baseUrl}/invoice-pdf-generator`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Invoice Template Pages
    {
      url: `${baseUrl}/invoice-template-pdf`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-invoice-template`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/simple-invoice-template`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/freelance-invoice-template`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invoice-template-simple`,
      lastModified: '2025-03-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}

