import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 lg:py-16 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-5">
          {/* Brand */}
          <div className="col-span-1">
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
            <p className="text-sm text-gray-400">
              Create professional invoices instantly. Free, no signup required.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold lg:mb-4 mb-2">Invoice Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/invoice-generator-no-login" className="text-sm hover:text-teal-500 transition-colors">
                  No Login Generator
                </Link>
              </li>
              <li>
                <Link href="/simple-invoice-generator" className="text-sm hover:text-teal-500 transition-colors">
                  Simple Generator
                </Link>
              </li>
              <li>
                <Link href="/invoice-generator-pdf" className="text-sm hover:text-teal-500 transition-colors">
                  PDF Generator
                </Link>
              </li>
              <li>
                <Link href="/freelance-invoice-generator" className="text-sm hover:text-teal-500 transition-colors">
                  Freelance Generator
                </Link>
              </li>
              <li>
                <Link href="/invoice-template-simple" className="text-sm hover:text-teal-500 transition-colors">
                  Invoice Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold lg:mb-4 mb-2">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm hover:text-teal-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-teal-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:text-teal-500 transition-colors">
                  Create Invoice
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold lg:mb-4 mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm hover:text-teal-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-teal-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-teal-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold lg:mb-4 mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 lg:mt-8 lg:pt-8 pt-5 mt-5 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Invoiceza. All rights reserved. Made with ❤️ for freelancers and small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
