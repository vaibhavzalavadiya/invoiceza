'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen || isAnimating) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [mobileMenuOpen, isAnimating]);

  const handleOpen = () => {
    setMobileMenuOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10); // Small delay to trigger animation
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 300); // Match animation duration
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image
                src="/images/logo.png"
                alt="Invoiceza Logo"
                width={155}
                height={30}
                className="md:max-w-38.75 max-w-[130px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center lg:gap-6 gap-4 lg:text-base text-sm">
              <Link href="/" className="text-black hover:text-teal-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-black hover:text-teal-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/how-it-works" className="text-black hover:text-teal-600 font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="text-black hover:text-teal-600 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-black hover:text-teal-600 font-medium transition-colors">
                Contact
              </Link>
              <Link
                href="/"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Create Invoice
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center gap-3'>
              <Link
                href="/"
                className="bg-teal-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-teal-700 transition-all duration-200 hover:shadow-lg font-medium text-center"
                onClick={handleClose}
              >
                Create Invoice
              </Link>
              <button
                onClick={() => {
                  if (mobileMenuOpen) {
                    handleClose();
                  } else {
                    handleOpen();
                  }
                }}
                className="text-black hover:text-teal-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
          />

          {/* Sidebar Menu */}
          <nav className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex items-center justify-between px-4 py-3.25 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Image
                      src="/images/logo.png"
                      alt="Invoiceza Logo"
                      width={135}
                      height={30}
                      className="max-w-33.75 object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-black"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-3 p-4 overflow-y-auto">
                <Link
                  href="/"
                  className="text-black hover:text-teal-600 font-medium"
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-black hover:text-teal-600 font-medium"
                  onClick={handleClose}
                >
                  Features
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-black hover:text-teal-600 font-medium"
                  onClick={handleClose}
                >
                  How It Works
                </Link>
                <Link
                  href="/faq"
                  className="text-black hover:text-teal-600 font-medium"
                  onClick={handleClose}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:text-teal-600 font-medium"
                  onClick={handleClose}
                >
                  Contact
                </Link>

              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
