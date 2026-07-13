import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const freeTools = [
    { href: '/invoice-generator', label: 'Invoice Generator' },
    { href: '/receipt-maker', label: 'Receipt Maker' },
    { href: '/quotation-maker', label: 'Quotation Maker' },
    { href: '/estimate-maker', label: 'Estimate Maker' },
  ];

  const quickLinks = [
    { href: '/', label: 'Create Invoice' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/faq', label: 'FAQ' },
  ];

  const company = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container">
        <div className="grid lg:py-16 py-10 grid-cols-2 md:grid-cols-4 lg:gap-8 gap-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Invoiceza Logo"
                  width={155}
                  height={30}
                  className="md:max-w-[155px] max-w-[130px] object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-xs">
              Create professional invoices, receipts, quotations, and estimates instantly. 100% free, no signup required.
            </p>
          </div>

          {/* Free Tools */}
          <nav aria-label="Free Tools">
            <h3 className="text-white font-semibold lg:mb-4 mb-2 text-sm uppercase tracking-wider">Free Tools</h3>
            <ul className="space-y-2">
              {freeTools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-white font-semibold lg:mb-4 mb-2 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-white font-semibold lg:mb-4 mb-2 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              © {currentYear} Invoiceza. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️ for freelancers and small businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
