import { InvoiceData } from '../types/invoice';
import { getTodayDate, getDueDateFromToday } from './formatters';

export const getSampleInvoiceData = (): InvoiceData => {
    return {
        business: {
            name: 'Acme Design Studio',
            address: '123 Creative Street, New York, NY 10001',
            email: 'hello@acmedesign.com',
            phone: '+1 (555) 123-4567',
            website: 'www.acmedesign.com',
            taxId: 'TAX-123456789',
        },
        client: {
            billTo: 'Tech Corp Inc\n456 Business Avenue\nSan Francisco, CA 94102',
            shipTo: '',
            email: 'billing@techcorp.com',
            phone: '+1 (555) 987-6543',
        },
        metadata: {
            invoiceNumber: 'INV-001',
            date: getTodayDate(),
            paymentTerms: 'Net 30',
            dueDate: getDueDateFromToday(30),
            poNumber: 'PO-2024-001',
            status: 'draft',
        },
        lineItems: [
            {
                id: '1',
                description: 'Website Design & Development',
                quantity: 1,
                rate: 5000,
                amount: 5000,
                taxable: true,
            },
            {
                id: '2',
                description: 'Logo Design',
                quantity: 1,
                rate: 1500,
                amount: 1500,
                taxable: true,
            },
            {
                id: '3',
                description: 'Brand Guidelines Document',
                quantity: 1,
                rate: 800,
                amount: 800,
                taxable: true,
            },
        ],
        taxRate: 10,
        taxLabel: 'Sales Tax',
        discountAmount: 5,
        discountType: 'percentage',
        shippingAmount: 0,
        amountPaid: 0,
        notes: 'Thank you for your business! Payment is due within 30 days.',
        terms: 'Payment accepted via bank transfer, credit card, or check. Late payments subject to 5% monthly interest.',
        theme: 'Classic',
        currency: 'USD',
        paymentMethods: ['Bank Transfer', 'Credit Card', 'PayPal'],
        bankDetails: 'Bank: Chase Bank\nAccount: 1234567890\nRouting: 987654321',
    };
};

export const getEmptyInvoiceData = (): InvoiceData => {
    return {
        business: {
            name: '',
            address: '',
        },
        client: {
            billTo: '',
            shipTo: '',
        },
        metadata: {
            invoiceNumber: '1',
            date: getTodayDate(),
            paymentTerms: '',
            dueDate: getDueDateFromToday(30),
            poNumber: '',
            status: 'draft',
        },
        lineItems: [
            {
                id: '1',
                description: '',
                quantity: 1,
                rate: 0,
                amount: 0,
                taxable: true,
            },
        ],
        taxRate: 0,
        taxLabel: 'Tax',
        discountAmount: 0,
        discountType: 'percentage',
        shippingAmount: 0,
        amountPaid: 0,
        notes: '',
        terms: '',
        theme: 'Classic',
        currency: 'USD',
    };
};
