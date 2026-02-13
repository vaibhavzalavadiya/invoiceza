'use client';

import React, { useState } from 'react';
import { InvoiceData } from '../types/invoice';
import { FiX, FiBriefcase, FiCreditCard, FiSettings } from 'react-icons/fi';

interface SettingsModalProps {
    invoiceData: InvoiceData;
    onUpdate: (data: Partial<InvoiceData>) => void;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ invoiceData, onUpdate, onClose }) => {
    const [activeTab, setActiveTab] = useState<'business' | 'payment' | 'preferences'>('business');

    const tabs = [
        { id: 'business' as const, label: 'Business Info', icon: <FiBriefcase className="w-4 h-4" /> },
        { id: 'payment' as const, label: 'Payment Details', icon: <FiCreditCard className="w-4 h-4" /> },
        { id: 'preferences' as const, label: 'Preferences', icon: <FiSettings className="w-4 h-4" /> },
    ];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                                activeTab === tab.id
                                    ? 'text-teal-600 border-b-2 border-teal-600'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    {activeTab === 'business' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    value={invoiceData.business.name}
                                    onChange={(e) => onUpdate({ business: { ...invoiceData.business, name: e.target.value } })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                    value={invoiceData.business.address}
                                    onChange={(e) => onUpdate({ business: { ...invoiceData.business, address: e.target.value } })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        value={invoiceData.business.email || ''}
                                        onChange={(e) => onUpdate({ business: { ...invoiceData.business, email: e.target.value } })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        value={invoiceData.business.phone || ''}
                                        onChange={(e) => onUpdate({ business: { ...invoiceData.business, phone: e.target.value } })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                                    <input
                                        type="url"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        value={invoiceData.business.website || ''}
                                        onChange={(e) => onUpdate({ business: { ...invoiceData.business, website: e.target.value } })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID / VAT Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        value={invoiceData.business.taxId || ''}
                                        onChange={(e) => onUpdate({ business: { ...invoiceData.business, taxId: e.target.value } })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'payment' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Bank Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Bank Name&#10;Account Number&#10;Routing Number&#10;SWIFT/BIC Code"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                    value={invoiceData.bankDetails || ''}
                                    onChange={(e) => onUpdate({ bankDetails: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Accepted Payment Methods</label>
                                <div className="space-y-2">
                                    {['Bank Transfer', 'Credit Card', 'PayPal', 'Check', 'Cash', 'Cryptocurrency'].map((method) => (
                                        <label key={method} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                                checked={invoiceData.paymentMethods?.includes(method)}
                                                onChange={(e) => {
                                                    const methods = invoiceData.paymentMethods || [];
                                                    if (e.target.checked) {
                                                        onUpdate({ paymentMethods: [...methods, method] });
                                                    } else {
                                                        onUpdate({ paymentMethods: methods.filter(m => m !== method) });
                                                    }
                                                }}
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{method}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    value={invoiceData.currency}
                                    onChange={(e) => onUpdate({ currency: e.target.value })}
                                >
                                    <option value="USD">USD ($) - US Dollar</option>
                                    <option value="EUR">EUR (€) - Euro</option>
                                    <option value="GBP">GBP (£) - British Pound</option>
                                    <option value="INR">INR (₹) - Indian Rupee</option>
                                    <option value="JPY">JPY (¥) - Japanese Yen</option>
                                    <option value="CAD">CAD ($) - Canadian Dollar</option>
                                    <option value="AUD">AUD ($) - Australian Dollar</option>
                                    <option value="CNY">CNY (¥) - Chinese Yuan</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tax Label</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Sales Tax, VAT, GST"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    value={invoiceData.taxLabel}
                                    onChange={(e) => onUpdate({ taxLabel: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Default Payment Terms</label>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    value={invoiceData.metadata.paymentTerms}
                                    onChange={(e) => onUpdate({ metadata: { ...invoiceData.metadata, paymentTerms: e.target.value } })}
                                >
                                    <option value="">Select payment terms</option>
                                    <option value="Due on Receipt">Due on Receipt</option>
                                    <option value="Net 7">Net 7</option>
                                    <option value="Net 15">Net 15</option>
                                    <option value="Net 30">Net 30</option>
                                    <option value="Net 60">Net 60</option>
                                    <option value="Net 90">Net 90</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Default Terms & Conditions</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your default terms and conditions..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                    value={invoiceData.terms}
                                    onChange={(e) => onUpdate({ terms: e.target.value })}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};
