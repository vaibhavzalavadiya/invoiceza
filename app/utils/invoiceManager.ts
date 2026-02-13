import { InvoiceData, SavedInvoice } from '../types/invoice';

const INVOICES_KEY = 'saved_invoices';
const BUSINESS_PROFILE_KEY = 'business_profile';
const RECENT_CLIENTS_KEY = 'recent_clients';

// Save invoice to history
export const saveInvoiceToHistory = (invoice: InvoiceData): boolean => {
    try {
        const saved = loadInvoiceHistory();
        const clientName = invoice.client.billTo.split('\n')[0] || 'Unnamed Client';
        
        const newInvoice: SavedInvoice = {
            id: Date.now().toString(),
            invoiceNumber: invoice.metadata.invoiceNumber,
            clientName,
            date: invoice.metadata.date,
            total: 0, // Will be calculated
            status: invoice.metadata.status,
            data: invoice,
        };
        
        saved.unshift(newInvoice);
        
        // Keep only last 50 invoices
        if (saved.length > 50) {
            saved.splice(50);
        }
        
        localStorage.setItem(INVOICES_KEY, JSON.stringify(saved));
        return true;
    } catch (error) {
        console.error('Error saving invoice to history:', error);
        return false;
    }
};

// Load invoice history
export const loadInvoiceHistory = (): SavedInvoice[] => {
    try {
        const data = localStorage.getItem(INVOICES_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading invoice history:', error);
        return [];
    }
};

// Delete invoice from history
export const deleteInvoiceFromHistory = (id: string): boolean => {
    try {
        const saved = loadInvoiceHistory();
        const filtered = saved.filter(inv => inv.id !== id);
        localStorage.setItem(INVOICES_KEY, JSON.stringify(filtered));
        return true;
    } catch (error) {
        console.error('Error deleting invoice:', error);
        return false;
    }
};

// Save business profile
export const saveBusinessProfile = (business: InvoiceData['business']): boolean => {
    try {
        localStorage.setItem(BUSINESS_PROFILE_KEY, JSON.stringify(business));
        return true;
    } catch (error) {
        console.error('Error saving business profile:', error);
        return false;
    }
};

// Load business profile
export const loadBusinessProfile = (): InvoiceData['business'] | null => {
    try {
        const data = localStorage.getItem(BUSINESS_PROFILE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading business profile:', error);
        return null;
    }
};

// Save recent client
export const saveRecentClient = (client: InvoiceData['client']): boolean => {
    try {
        const clients = loadRecentClients();
        const clientName = client.billTo.split('\n')[0];
        
        // Check if client already exists
        const existingIndex = clients.findIndex(c => c.billTo.split('\n')[0] === clientName);
        if (existingIndex !== -1) {
            clients.splice(existingIndex, 1);
        }
        
        clients.unshift(client);
        
        // Keep only last 20 clients
        if (clients.length > 20) {
            clients.splice(20);
        }
        
        localStorage.setItem(RECENT_CLIENTS_KEY, JSON.stringify(clients));
        return true;
    } catch (error) {
        console.error('Error saving recent client:', error);
        return false;
    }
};

// Load recent clients
export const loadRecentClients = (): InvoiceData['client'][] => {
    try {
        const data = localStorage.getItem(RECENT_CLIENTS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading recent clients:', error);
        return [];
    }
};

// Export invoice data as JSON
export const exportInvoiceAsJSON = (invoice: InvoiceData): void => {
    const dataStr = JSON.stringify(invoice, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `invoice-${invoice.metadata.invoiceNumber}.json`;
    link.click();
    URL.revokeObjectURL(url);
};

// Import invoice from JSON
export const importInvoiceFromJSON = (file: File): Promise<InvoiceData> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target?.result as string);
                resolve(data as InvoiceData);
            } catch (error) {
                reject(new Error('Invalid JSON file'));
            }
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
};

// Generate next invoice number
export const generateNextInvoiceNumber = (): string => {
    const history = loadInvoiceHistory();
    if (history.length === 0) {
        return 'INV-001';
    }
    
    // Try to extract number from last invoice
    const lastInvoice = history[0];
    const match = lastInvoice.invoiceNumber.match(/(\d+)$/);
    
    if (match) {
        const nextNum = parseInt(match[1]) + 1;
        const prefix = lastInvoice.invoiceNumber.substring(0, lastInvoice.invoiceNumber.length - match[1].length);
        return `${prefix}${nextNum.toString().padStart(match[1].length, '0')}`;
    }
    
    return `INV-${history.length + 1}`;
};
