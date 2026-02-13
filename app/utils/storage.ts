import { InvoiceData } from '../types/invoice';

const STORAGE_KEY = 'invoice_draft';

export const saveDraft = (invoiceData: InvoiceData): boolean => {
    try {
        const jsonData = JSON.stringify(invoiceData);
        localStorage.setItem(STORAGE_KEY, jsonData);
        return true;
    } catch (error) {
        console.error('Error saving draft:', error);
        return false;
    }
};

export const loadDraft = (): InvoiceData | null => {
    try {
        const jsonData = localStorage.getItem(STORAGE_KEY);
        if (!jsonData) return null;
        return JSON.parse(jsonData) as InvoiceData;
    } catch (error) {
        console.error('Error loading draft:', error);
        return null;
    }
};

export const clearDraft = (): boolean => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing draft:', error);
        return false;
    }
};

export const hasDraft = (): boolean => {
    try {
        return localStorage.getItem(STORAGE_KEY) !== null;
    } catch (error) {
        console.error('Error checking draft:', error);
        return false;
    }
};
