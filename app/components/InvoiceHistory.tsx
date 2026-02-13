'use client';

import React, { useState, useEffect } from 'react';
import { SavedInvoice } from '../types/invoice';
import { loadInvoiceHistory, deleteInvoiceFromHistory } from '../utils/invoiceManager';
import { formatCurrency } from '../utils/calculations';
import { FiX, FiSearch, FiFileText, FiTrash2 } from 'react-icons/fi';

interface InvoiceHistoryProps {
    onLoadInvoice: (invoice: SavedInvoice) => void;
    onClose: () => void;
}

export const InvoiceHistory: React.FC<InvoiceHistoryProps> = ({ onLoadInvoice, onClose }) => {
    const [invoices, setInvoices] = useState<SavedInvoice[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setInvoices(loadInvoiceHistory());
    }, []);

    const handleDelete = (id: string) => {
        deleteInvoiceFromHistory(id);
        setInvoices(loadInvoiceHistory());
    };

    const filteredInvoices = invoices.filter(inv =>
        inv.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return 'bg-green-100 text-green-800';
            case 'sent': return 'bg-blue-100 text-blue-800';
            case 'overdue': return 'bg-red-100 text-red-800';
            case 'draft': return 'bg-gray-100 text-gray-800';
            case 'cancelled': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Invoice History</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-6 border-b border-gray-200">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by invoice number or client name..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Invoice List */}
                <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                    {filteredInvoices.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <FiFileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p className="text-lg font-medium">No invoices found</p>
                            <p className="text-sm">Create your first invoice to see it here</p>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice #</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredInvoices.map((invoice) => (
                                    <tr key={invoice.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.invoiceNumber}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{invoice.clientName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{invoice.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(invoice.status)}`}>
                                                {invoice.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <button
                                                onClick={() => onLoadInvoice(invoice)}
                                                className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                                            >
                                                Load
                                            </button>
                                            <button
                                                onClick={() => handleDelete(invoice.id)}
                                                className="text-red-600 hover:text-red-800 text-sm font-medium inline-flex items-center gap-1"
                                            >
                                                <FiTrash2 className="w-3 h-3" />
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};
