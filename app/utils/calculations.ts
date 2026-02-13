import { LineItem, InvoiceTotals } from '../types/invoice';

export const calculateLineItemAmount = (quantity: number, rate: number): number => {
    return Number((quantity * rate).toFixed(2));
};

export const calculateSubtotal = (lineItems: LineItem[]): number => {
    return Number(lineItems.reduce((sum, item) => sum + item.amount, 0).toFixed(2));
};

export const calculateTaxableSubtotal = (lineItems: LineItem[]): number => {
    return Number(lineItems.filter(item => item.taxable).reduce((sum, item) => sum + item.amount, 0).toFixed(2));
};

export const calculateTaxAmount = (lineItems: LineItem[], taxRate: number): number => {
    const taxableSubtotal = calculateTaxableSubtotal(lineItems);
    return Number((taxableSubtotal * (taxRate / 100)).toFixed(2));
};

export const calculateDiscountAmount = (subtotal: number, discount: number, discountType: 'fixed' | 'percentage'): number => {
    if (discountType === 'percentage') {
        return Number((subtotal * (discount / 100)).toFixed(2));
    }
    return Number(discount.toFixed(2));
};

export const calculateTotal = (
    subtotal: number,
    taxAmount: number,
    discountAmount: number,
    shippingAmount: number
): number => {
    return Number((subtotal + taxAmount - discountAmount + shippingAmount).toFixed(2));
};

export const calculateBalanceDue = (total: number, amountPaid: number): number => {
    return Number((total - amountPaid).toFixed(2));
};

export const calculateInvoiceTotals = (
    lineItems: LineItem[],
    taxRate: number,
    discountAmount: number,
    discountType: 'fixed' | 'percentage',
    shippingAmount: number,
    amountPaid: number
): InvoiceTotals => {
    const subtotal = calculateSubtotal(lineItems);
    const taxAmount = calculateTaxAmount(lineItems, taxRate);
    const calculatedDiscountAmount = calculateDiscountAmount(subtotal, discountAmount, discountType);
    const total = calculateTotal(subtotal, taxAmount, calculatedDiscountAmount, shippingAmount);
    const balanceDue = calculateBalanceDue(total, amountPaid);

    return {
        subtotal,
        taxAmount,
        discountAmount: calculatedDiscountAmount,
        shippingAmount,
        total,
        amountPaid,
        balanceDue,
    };
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    const currencyMap: { [key: string]: string } = {
        'USD': 'en-US',
        'EUR': 'de-DE',
        'GBP': 'en-GB',
        'INR': 'en-IN',
        'JPY': 'ja-JP',
        'CAD': 'en-CA',
        'AUD': 'en-AU',
        'CNY': 'zh-CN',
    };
    
    const locale = currencyMap[currency] || 'en-US';
    
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);
};

export const generateInvoiceNumber = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `INV-${year}${month}-${random}`;
};
