import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // General crawlers
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/'],
            },
            {
                // OpenAI / ChatGPT
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                // Anthropic / Claude
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                // Anthropic web crawler
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                // Perplexity AI
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                // Google Extended (Gemini training)
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                // Bing / Copilot
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                // Meta AI
                userAgent: 'meta-externalagent',
                allow: '/',
            },
        ],
        sitemap: 'https://invoiceza.com/sitemap.xml',
    };
}
