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
            date: '',
            paymentTerms: '',
            dueDate: '',
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

export const getSampleReceiptData = (): InvoiceData => {
    return {
        business: {
            name: 'Urban Coffee House',
            address: '88 Barista Lane, Seattle, WA 98101',
            email: 'orders@urbancoffee.com',
            phone: '+1 (206) 555-8899',
        },
        client: {
            billTo: 'James Mitchell\n742 Evergreen Terrace\nPortland, OR 97201',
            shipTo: '',
        },
        metadata: {
            invoiceNumber: 'RCT-202602-001',
            date: getTodayDate(),
            paymentTerms: '',
            dueDate: '',
            poNumber: '',
            status: 'paid',
            paymentMethod: 'Credit Card',
            paymentDate: getTodayDate(),
            receivedBy: 'Sarah Johnson',
        },
        lineItems: [
            { id: '1', description: 'Catering Service – Corporate Event (50 pax)', quantity: 1, rate: 1250, amount: 1250, taxable: true },
            { id: '2', description: 'Premium Coffee Package', quantity: 50, rate: 8, amount: 400, taxable: true },
            { id: '3', description: 'Pastry Assortment Platter', quantity: 5, rate: 45, amount: 225, taxable: true },
        ],
        taxRate: 8.5,
        taxLabel: 'Sales Tax',
        discountAmount: 0,
        discountType: 'percentage',
        shippingAmount: 0,
        amountPaid: 2031.38,
        notes: 'Payment received. Thank you for your business!',
        terms: '',
        theme: 'Classic',
        currency: 'USD',
    };
};

export const getSampleQuotationData = (): InvoiceData => {
    return {
        business: {
            name: 'PixelForge Digital Agency',
            address: '200 Innovation Drive, Suite 400\nAustin, TX 78701',
            email: 'hello@pixelforge.io',
            phone: '+1 (512) 555-7700',
            website: 'www.pixelforge.io',
            taxId: 'TAX-PF-88291',
        },
        client: {
            billTo: 'GreenLeaf Organics\nAttn: Lisa Park, Marketing Director\n550 Market Street\nSan Francisco, CA 94104',
            shipTo: '',
        },
        metadata: {
            invoiceNumber: 'QTN-202602-015',
            date: getTodayDate(),
            paymentTerms: '50% upfront, 50% on delivery',
            dueDate: '',
            poNumber: '',
            status: 'sent',
            validUntil: getDueDateFromToday(30),
            projectName: 'E-Commerce Website Redesign',
        },
        lineItems: [
            { id: '1', description: 'UX Audit & Wireframing (20 pages)', quantity: 1, rate: 3500, amount: 3500, taxable: true },
            { id: '2', description: 'UI Design – Desktop & Mobile', quantity: 1, rate: 6000, amount: 6000, taxable: true },
            { id: '3', description: 'Frontend Development (React / Next.js)', quantity: 1, rate: 8500, amount: 8500, taxable: true },
            { id: '4', description: 'Backend Integration & API Development', quantity: 1, rate: 4500, amount: 4500, taxable: true },
            { id: '5', description: 'QA Testing & Launch Support', quantity: 1, rate: 2000, amount: 2000, taxable: true },
        ],
        taxRate: 0,
        taxLabel: 'Tax',
        discountAmount: 10,
        discountType: 'percentage',
        shippingAmount: 0,
        amountPaid: 0,
        notes: 'This quotation is valid for 30 days. Prices are fixed once accepted.',
        terms: 'Payment Terms: 50% deposit upon acceptance, 50% upon project completion. Changes to scope may result in revised pricing. All work remains property of PixelForge until full payment is received.',
        theme: 'Classic',
        currency: 'USD',
        scopeOfWork: 'Complete e-commerce website redesign including UX research, UI design, frontend development, backend integration, and launch support. Includes responsive design for desktop, tablet, and mobile devices.',
    };
};

export const getSampleEstimateData = (): InvoiceData => {
    return {
        business: {
            name: 'Summit Home Renovations',
            address: '45 Builder\'s Way, Unit 12\nDenver, CO 80202',
            email: 'projects@summitreno.com',
            phone: '+1 (720) 555-3344',
        },
        client: {
            billTo: 'Robert & Karen Chen\n1234 Maple Drive\nBoulder, CO 80301',
            shipTo: '',
        },
        metadata: {
            invoiceNumber: 'EST-202602-008',
            date: getTodayDate(),
            paymentTerms: '',
            dueDate: '',
            poNumber: '',
            status: 'draft',
            validUntil: getDueDateFromToday(30),
            projectName: 'Kitchen Renovation – Full Remodel',
        },
        lineItems: [
            { id: '1', description: 'Demolition & Disposal', quantity: 1, rate: 2500, amount: 2500, taxable: true },
            { id: '2', description: 'Electrical Rewiring (Kitchen area)', quantity: 1, rate: 3200, amount: 3200, taxable: true },
            { id: '3', description: 'Plumbing – Sink & Dishwasher', quantity: 1, rate: 1800, amount: 1800, taxable: true },
            { id: '4', description: 'Custom Cabinetry (12 units)', quantity: 12, rate: 650, amount: 7800, taxable: true },
            { id: '5', description: 'Countertop – Quartz (35 sq ft)', quantity: 35, rate: 85, amount: 2975, taxable: true },
            { id: '6', description: 'Tile Backsplash Installation', quantity: 1, rate: 1400, amount: 1400, taxable: true },
            { id: '7', description: 'Painting & Finishing', quantity: 1, rate: 1200, amount: 1200, taxable: true },
        ],
        taxRate: 5,
        taxLabel: 'Tax',
        discountAmount: 0,
        discountType: 'percentage',
        shippingAmount: 0,
        amountPaid: 0,
        notes: 'Estimated timeline: 6-8 weeks from start date. Materials sourced from approved suppliers.',
        terms: '',
        theme: 'Classic',
        currency: 'USD',
        disclaimer: 'This is an estimate only. Final project costs may vary depending on actual labor hours, material availability, and any unforeseen structural issues discovered during renovation. A revised quote will be provided if costs change by more than 10%.',
    };
};

