import { LineItem } from './invoice';

/**
 * Configuration for niche invoice generator pages.
 * 
 * Accepts sensible defaults so that future pages (e.g. GST Invoice Generator,
 * Photographer Invoice Generator) can pre-fill the invoice form with
 * region-specific or profession-specific settings — without duplicating
 * the core tool logic.
 *
 * @example
 * // GST Invoice Generator (India)
 * const gstConfig: InvoiceGeneratorConfig = {
 *   defaultCurrency: 'INR',
 *   defaultTaxLabel: 'GST',
 *   defaultTaxRate: 18,
 *   invoiceNumberPrefix: 'GST-',
 *   defaultPaymentTerms: 'Net 30',
 *   numberFormatLocale: 'en-IN',
 * };
 *
 * @example
 * // Photographer Invoice Generator
 * const photographerConfig: InvoiceGeneratorConfig = {
 *   defaultCurrency: 'USD',
 *   presetLineItems: [
 *     { description: 'Photography Session (2 hours)', quantity: 1, rate: 500 },
 *     { description: 'Photo Editing & Retouching', quantity: 1, rate: 200 },
 *     { description: 'Digital Delivery (high-res files)', quantity: 1, rate: 100 },
 *   ],
 *   defaultPaymentTerms: 'Due on Receipt',
 *   defaultNotes: 'Thank you for choosing us for your photography needs!',
 * };
 */
export interface InvoiceGeneratorConfig {
  /** Default currency code (e.g., 'USD', 'INR', 'GBP') */
  defaultCurrency?: string;

  /** Default tax label (e.g., 'GST', 'VAT', 'Sales Tax') */
  defaultTaxLabel?: string;

  /** Default tax rate percentage (e.g., 18 for GST) */
  defaultTaxRate?: number;

  /** Pre-filled line items for niche pages */
  presetLineItems?: Array<{
    description: string;
    quantity: number;
    rate: number;
  }>;

  /** Default payment terms text (e.g., 'Net 30', 'Due on Receipt') */
  defaultPaymentTerms?: string;

  /** Default notes text */
  defaultNotes?: string;

  /** Default terms text */
  defaultTerms?: string;

  /** Default invoice number prefix (e.g., 'GST-INV-', 'PHOTO-') */
  invoiceNumberPrefix?: string;

  /** Available payment methods for this niche */
  defaultPaymentMethods?: string[];

  /** Default bank details template */
  defaultBankDetails?: string;

  /** Number format locale (e.g., 'en-IN', 'en-US', 'de-DE') */
  numberFormatLocale?: string;

  /** Date format locale (e.g., 'en-IN', 'en-US') */
  dateFormatLocale?: string;
}
