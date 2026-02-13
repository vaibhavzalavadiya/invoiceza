export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  taxable?: boolean;
}

export interface BusinessInfo {
  logo?: string;
  name: string;
  address: string;
  email?: string;
  phone?: string;
  website?: string;
  taxId?: string;
}

export interface ClientInfo {
  billTo: string;
  shipTo: string;
  email?: string;
  phone?: string;
}

export interface InvoiceMetadata {
  invoiceNumber: string;
  date: string;
  paymentTerms: string;
  dueDate: string;
  poNumber: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
}

export interface InvoiceData {
  business: BusinessInfo;
  client: ClientInfo;
  metadata: InvoiceMetadata;
  lineItems: LineItem[];
  taxRate: number;
  taxLabel: string;
  discountAmount: number;
  discountType: 'fixed' | 'percentage';
  shippingAmount: number;
  amountPaid: number;
  notes: string;
  terms: string;
  theme: string;
  currency: string;
  paymentMethods?: string[];
  bankDetails?: string;
  signature?: string;
}

export interface InvoiceTotals {
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingAmount: number;
  total: number;
  amountPaid: number;
  balanceDue: number;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
}

export interface SavedInvoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  date: string;
  total: number;
  status: string;
  data: InvoiceData;
}
