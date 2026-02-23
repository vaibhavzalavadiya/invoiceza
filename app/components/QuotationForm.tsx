'use client';

import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import {
    FiDownload,
    FiSettings,
    FiFileText,
    FiPlus,
    FiTrash2,
    FiImage,
    FiUsers,
    FiX,
    FiCheckCircle,
    FiActivity,
    FiBriefcase,
    FiEye,
    FiUser,
    FiCalendar,
    FiHash,
} from 'react-icons/fi';
import { InvoiceData, LineItem } from '../types/invoice';
import { calculateInvoiceTotals, formatCurrency, calculateLineItemAmount } from '../utils/calculations';
import { getTodayDate, getDueDateFromToday } from '../utils/formatters';
import { InvoicePDF } from './InvoicePDF';
import { getEmptyInvoiceData, getSampleQuotationData } from '../utils/sampleData';
import {
    saveBusinessProfile,
    loadBusinessProfile,
} from '../utils/invoiceManager';
import { ClientSelector } from './ClientSelector';
import { SettingsModal } from './SettingsModal';
import { ConfirmModal } from './ConfirmModal';

const selectStyles = {
    control: (base: any) => ({
        ...base,
        minHeight: '40px',
        fontSize: '0.875rem',
        borderColor: '#d1d5db',
        borderRadius: '0.5rem',
        '&:hover': { borderColor: '#3b82f6' },
        cursor: 'pointer',
    }),
    option: (base: any, state: any) => ({
        ...base,
        fontSize: '0.875rem',
        backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#eff6ff' : 'white',
        color: state.isSelected ? 'white' : '#374151',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({ ...base, fontSize: '0.875rem' }),
};

const currencyOptions = [
    { value: 'USD', label: 'USD ($) - US Dollar' },
    { value: 'EUR', label: 'EUR (€) - Euro' },
    { value: 'GBP', label: 'GBP (£) - British Pound' },
    { value: 'JPY', label: 'JPY (¥) - Japanese Yen' },
    { value: 'INR', label: 'INR (₹) - Indian Rupee' },
    { value: 'CAD', label: 'CAD ($) - Canadian Dollar' },
    { value: 'AUD', label: 'AUD ($) - Australian Dollar' },
    { value: 'SGD', label: 'SGD ($) - Singapore Dollar' },
    { value: 'CHF', label: 'CHF (Fr) - Swiss Franc' },
    { value: 'CNY', label: 'CNY (¥) - Chinese Yuan' },
    { value: 'HKD', label: 'HKD ($) - Hong Kong Dollar' },
    { value: 'NZD', label: 'NZD ($) - New Zealand Dollar' },
    { value: 'SEK', label: 'SEK (kr) - Sweden' },
    { value: 'NOK', label: 'NOK (kr) - Norway' },
    { value: 'MXN', label: 'MXN ($) - Mexico' },
    { value: 'BRL', label: 'BRL (R$) - Brazil' },
    { value: 'ZAR', label: 'ZAR (R) - South Africa' },
    { value: 'AED', label: 'AED (د.إ) - UAE' },
    { value: 'SAR', label: 'SAR (﷼) - Saudi Arabia' },
    { value: 'THB', label: 'THB (฿) - Thailand' },
    { value: 'MYR', label: 'MYR (RM) - Malaysia' },
    { value: 'PHP', label: 'PHP (₱) - Philippines' },
];

const statusOptions = [
    { value: 'draft', label: '📝 Draft' },
    { value: 'sent', label: '📤 Sent' },
    { value: 'accepted', label: '✅ Accepted' },
    { value: 'rejected', label: '❌ Rejected' },
    { value: 'expired', label: '⏰ Expired' },
];

function generateDocNumber(prefix: string): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${year}${month}-${random}`;
}

export default function QuotationForm() {
    const config = {
        documentTitle: 'QUOTATION',
        numberPrefix: 'QTN',
        pageTitle: 'Free Quotation Maker – Create Professional Quotations Online',
        defaultNotes: 'This quotation is valid for 30 days from the date of issue.',
    };

    const [invoiceData, setInvoiceData] = useState<InvoiceData>(() => {
        const empty = getEmptyInvoiceData();
        empty.metadata.invoiceNumber = `${config.numberPrefix}-001`;
        empty.notes = config.defaultNotes;
        empty.metadata.status = 'draft';
        empty.metadata.validUntil = '';
        empty.scopeOfWork = '';
        return empty;
    });

    // Set dynamic values on client to avoid hydration mismatch
    useEffect(() => {
        setInvoiceData(prev => ({
            ...prev,
            metadata: {
                ...prev.metadata,
                invoiceNumber: generateDocNumber(config.numberPrefix),
                date: getTodayDate(),
                validUntil: getDueDateFromToday(30),
            }
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [logoPreview, setLogoPreview] = useState<string>('');
    const [showClientSelector, setShowClientSelector] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
        type?: 'danger' | 'warning' | 'info' | 'success';
    }>({ isOpen: false, title: '', message: '', onConfirm: () => { } });

    useEffect(() => {
        const profile = loadBusinessProfile();
        if (profile) {
            setInvoiceData(prev => ({ ...prev, business: profile }));
            if (profile.logo) setLogoPreview(profile.logo);
        }
    }, []);

    useEffect(() => {
        const key = `draft_quotation`;
        const interval = setInterval(() => {
            if (invoiceData.lineItems.some(i => i.description)) {
                localStorage.setItem(key, JSON.stringify(invoiceData));
                setLastSaved(new Date());
            }
        }, 30000);
        return () => clearInterval(interval);
    }, [invoiceData]);

    const totals = calculateInvoiceTotals(
        invoiceData.lineItems,
        invoiceData.taxRate,
        invoiceData.discountAmount,
        invoiceData.discountType,
        invoiceData.shippingAmount,
        0
    );

    const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setLogoPreview(result);
                setInvoiceData(prev => ({ ...prev, business: { ...prev.business, logo: result } }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLineItemChange = (id: string, field: keyof LineItem, value: any) => {
        setInvoiceData(prev => ({
            ...prev,
            lineItems: prev.lineItems.map(item => {
                if (item.id === id) {
                    const updated = { ...item, [field]: value };
                    if (field === 'quantity' || field === 'rate') {
                        updated.amount = calculateLineItemAmount(Number(updated.quantity), Number(updated.rate));
                    }
                    return updated;
                }
                return item;
            }),
        }));
    };

    const handleMetadataChange = (field: keyof InvoiceData['metadata'], value: string) => {
        setInvoiceData(prev => ({ ...prev, metadata: { ...prev.metadata, [field]: value } }));
    };

    const handleDownloadPDF = async () => {
        setIsGenerating(true);
        try {
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="QUOTATION" />).toBlob();
            saveAs(blob, `Quotation-${invoiceData.metadata.invoiceNumber}.pdf`);
            showNotification('✓ Quotation downloaded successfully!');
        } finally {
            setIsGenerating(false);
        }
    };

    const handlePreviewPDF = async () => {
        setIsGenerating(true);
        try {
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="QUOTATION" />).toBlob();
            setPreviewUrl(URL.createObjectURL(blob));
            setShowPreview(true);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSaveProfile = () => {
        saveBusinessProfile(invoiceData.business);
        showNotification('✓ Business profile saved!');
    };

    const handleLoadSampleData = () => {
        setConfirmModal({
            isOpen: true,
            title: 'Load Sample Data?',
            message: 'This will overwrite your current quotation details. Are you sure?',
            type: 'info',
            onConfirm: () => {
                const sample = getSampleQuotationData();
                setInvoiceData(sample);
                if (sample.business.logo) setLogoPreview(sample.business.logo);
                showNotification('✓ Sample quotation data loaded!');
            }
        });
    };

    const handleResetForm = () => {
        setConfirmModal({
            isOpen: true,
            title: 'Clear Quotation?',
            message: 'Are you sure you want to clear all data? This action cannot be undone.',
            type: 'danger',
            onConfirm: () => {
                const empty = getEmptyInvoiceData();
                empty.metadata.invoiceNumber = generateDocNumber(config.numberPrefix);
                empty.notes = config.defaultNotes;
                empty.metadata.status = 'draft';
                empty.metadata.validUntil = getDueDateFromToday(30);
                empty.scopeOfWork = '';
                setInvoiceData(empty);
                setLogoPreview('');
                showNotification('✓ Form cleared successfully');
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Notification Toast */}
            {notification && (
                <div className={`fixed top-20 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in flex items-center gap-2 ${notification.type === 'success' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                    {notification.type === 'success' ? <FiCheckCircle className="w-4 h-4" /> : null}
                    {notification.message}
                </div>
            )}

            {/* Loading Overlay */}
            {isGenerating && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
                        <p className="font-medium text-gray-900">Preparing Quotation...</p>
                    </div>
                </div>
            )}

            <ConfirmModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                onConfirm={confirmModal.onConfirm}
                title={confirmModal.title}
                message={confirmModal.message}
                type={confirmModal.type}
            />

            {showClientSelector && (
                <ClientSelector
                    onSelect={(client) => { setInvoiceData(prev => ({ ...prev, client })); setShowClientSelector(false); }}
                    onClose={() => setShowClientSelector(false)}
                />
            )}

            {showSettings && (
                <SettingsModal
                    invoiceData={invoiceData}
                    onUpdate={(updates) => setInvoiceData(prev => ({ ...prev, ...updates }))}
                    onClose={() => setShowSettings(false)}
                />
            )}

            {showPreview && previewUrl && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full h-full max-w-6xl overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Quotation Preview</h2>
                            <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-black"><FiX className="w-6 h-6" /></button>
                        </div>
                        <iframe src={previewUrl} className="flex-1 w-full" />
                        <div className="p-4 border-t flex justify-end gap-3">
                            <button onClick={() => setShowPreview(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Close</button>
                            <button onClick={handleDownloadPDF} className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700"><FiDownload /> Download PDF</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Toolbar */}
            <div className="bg-white border-b border-gray-200 py-3 sticky xxl:top-[65px] xl:top-[64.6px] lg:top-[64.5px] top-[60.5px] z-29 shadow-sm overflow-visible">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-36 md:w-44">
                            <Select
                                styles={selectStyles}
                                value={currencyOptions.find(c => c.value === invoiceData.currency) || { value: invoiceData.currency, label: invoiceData.currency }}
                                options={currencyOptions}
                                onChange={(opt) => opt && setInvoiceData(prev => ({ ...prev, currency: opt.value }))}
                                isSearchable
                            />
                        </div>
                        {lastSaved && <span className="text-[10px] text-gray-400 hidden sm:inline">Auto-saved {lastSaved.toLocaleTimeString()}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={handlePreviewPDF} className="px-3 md:px-4 py-1.5 border border-blue-500 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 flex items-center gap-1.5 transition-colors"><FiEye className="w-4 h-4" /><span className="hidden sm:inline">Preview</span></button>
                        <button onClick={handleDownloadPDF} className="px-3 md:px-5 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-1.5 shadow-lg shadow-blue-200 transition-all"><FiDownload className="w-4 h-4" /><span className="hidden sm:inline">Download Quotation</span></button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-10 lg:py-16">
                <div className="container">
                    <div className="text-center mb-6 lg:mb-10">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            {config.pageTitle}
                        </h1>
                    </div>

                    <div className="flex md:flex-row flex-col lg:gap-6 gap-5">
                        {/* Main Editor */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg border border-gray-200 border-t-4 border-t-blue-600 p-4 lg:p-8 shadow-sm">
                                {/* Quotation Header — Business Info + Title */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-8 gap-4 md:gap-5">
                                    <div className="flex-1">
                                        {/* Logo Upload */}
                                        <label className="block cursor-pointer mb-4">
                                            <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                                            {logoPreview ? (
                                                <div className="relative group inline-block">
                                                    <img src={logoPreview} alt="Business Logo" className="max-h-16 rounded-lg" />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                                        <span className="text-white text-xs flex items-center gap-1"><FiImage className="w-3 h-3" /> Change</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center gap-2 px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
                                                    <FiImage className="w-4 h-4 text-gray-400" />
                                                    <span className="text-sm text-gray-500">Add Business Logo</span>
                                                </div>
                                            )}
                                        </label>

                                        {/* Business Details */}
                                        <div className="text-sm text-black space-y-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Business Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Acme Inc."
                                                    className="font-semibold text-gray-900 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none px-3 py-2 transition-all"
                                                    value={invoiceData.business.name}
                                                    onChange={(e) => setInvoiceData(prev => ({ ...prev, business: { ...prev.business, name: e.target.value } }))}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Address</label>
                                                <textarea
                                                    placeholder="Street address, City, State, ZIP"
                                                    rows={2}
                                                    className="w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none px-3 py-2 resize-none transition-all"
                                                    value={invoiceData.business.address}
                                                    onChange={(e) => setInvoiceData(prev => ({ ...prev, business: { ...prev.business, address: e.target.value } }))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left md:text-right text-black">
                                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3 md:mb-4 italic tracking-tight">QUOTATION</h2>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex md:justify-end gap-2 items-center">
                                                <FiHash className="w-3.5 h-3.5 text-gray-400" />
                                                <span className="text-gray-500 text-xs font-semibold">Quote #</span>
                                                <input
                                                    type="text"
                                                    className="w-32 md:text-right border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-2 py-1"
                                                    value={invoiceData.metadata.invoiceNumber}
                                                    onChange={(e) => handleMetadataChange('invoiceNumber', e.target.value)}
                                                />
                                            </div>
                                            <div className="flex md:justify-end gap-2 items-center">
                                                <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                                                <span className="text-gray-500 text-xs font-semibold">Date</span>
                                                <input
                                                    type="date"
                                                    className="w-32 md:text-right border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 px-2 py-1"
                                                    value={invoiceData.metadata.date}
                                                    onChange={(e) => handleMetadataChange('date', e.target.value)}
                                                />
                                            </div>
                                            <div className="flex md:justify-end gap-2 items-center">
                                                <FiCalendar className="w-3.5 h-3.5 text-blue-400" />
                                                <span className="text-blue-500 text-xs font-semibold">Valid Until</span>
                                                <input
                                                    type="date"
                                                    className="w-32 md:text-right border border-blue-200 rounded-md focus:outline-none focus:border-blue-500 px-2 py-1 text-blue-600 font-medium"
                                                    value={invoiceData.metadata.validUntil}
                                                    onChange={(e) => handleMetadataChange('validUntil', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Prepared For + Quotation Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-5 md:mb-8">
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 mb-3 flex items-center justify-between">
                                            <span className="flex items-center gap-1.5"><FiUser className="w-3.5 h-3.5" /> PREPARED FOR</span>
                                            <button onClick={() => setShowClientSelector(true)} className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-normal transition-colors">
                                                <FiUsers className="w-3 h-3" /> Contacts
                                            </button>
                                        </div>
                                        <textarea
                                            placeholder="Client Name & Address"
                                            rows={3}
                                            className="w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none px-3 py-2 resize-none transition-all"
                                            value={invoiceData.client.billTo}
                                            onChange={(e) => setInvoiceData(prev => ({ ...prev, client: { ...prev.client, billTo: e.target.value } }))}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center gap-1.5 block">
                                                <FiActivity className="w-3.5 h-3.5 text-blue-400" /> QUOTATION STATUS
                                            </label>
                                            <Select
                                                styles={selectStyles}
                                                options={statusOptions}
                                                value={statusOptions.find(s => s.value === invoiceData.metadata.status)}
                                                onChange={(s) => s && handleMetadataChange('status', s.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 flex items-center gap-1.5 block">
                                                <FiBriefcase className="w-3.5 h-3.5 text-blue-400" /> PROJECT NAME
                                            </label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none px-3 py-2 transition-all"
                                                placeholder="e.g. Website Redesign"
                                                value={invoiceData.metadata.projectName || ''}
                                                onChange={(e) => handleMetadataChange('projectName', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Scope of Work */}
                                <div className="mb-5 md:mb-8">
                                    <label className="text-xs font-semibold text-gray-500 mb-2 block">SCOPE OF WORK</label>
                                    <textarea
                                        className="w-full p-3 bg-blue-50/30 rounded-lg text-sm border border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none h-24"
                                        placeholder="Briefly describe the proposed project scope or objectives..."
                                        value={invoiceData.scopeOfWork}
                                        onChange={(e) => setInvoiceData(prev => ({ ...prev, scopeOfWork: e.target.value }))}
                                    />
                                </div>

                                {/* Items - Desktop Table */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="min-w-full mb-4">
                                        <thead>
                                            <tr className="bg-blue-600 text-white text-xs md:text-sm">
                                                <th className="text-left py-2.5 md:py-3 px-4 font-semibold rounded-tl-lg w-6"></th>
                                                <th className="text-left py-2.5 md:py-3 px-4 font-semibold">Service / Description</th>
                                                <th className="text-right py-2.5 md:py-3 px-4 font-semibold w-24">Units</th>
                                                <th className="text-right py-2.5 md:py-3 px-4 font-semibold w-28">Rate</th>
                                                <th className="text-right py-2.5 md:py-3 px-4 font-semibold rounded-tr-lg w-28">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoiceData.lineItems.map((item, index) => (
                                                <tr key={item.id} className={`group border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                                    <td className="py-2 px-2">
                                                        <button onClick={() => setInvoiceData(prev => ({ ...prev, lineItems: prev.lineItems.filter(i => i.id !== item.id) }))} className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-500 transition-all"><FiTrash2 className="w-3.5 h-3.5" /></button>
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        <input className="w-full bg-transparent text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-200 rounded px-2 py-1" placeholder="Item/Service Name" value={item.description} onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)} />
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        <input type="number" className="w-full bg-transparent text-sm text-right focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-200 rounded px-2 py-1" value={item.quantity} onChange={(e) => handleLineItemChange(item.id, 'quantity', e.target.value)} />
                                                    </td>
                                                    <td className="py-2 px-4">
                                                        <input type="number" className="w-full bg-transparent text-sm text-right focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-200 rounded px-2 py-1" value={item.rate} onChange={(e) => handleLineItemChange(item.id, 'rate', e.target.value)} />
                                                    </td>
                                                    <td className="py-2 px-4 text-right text-sm font-semibold text-blue-600">
                                                        {formatCurrency(item.amount, invoiceData.currency)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Items - Mobile Cards */}
                                <div className="md:hidden space-y-3 mb-4">
                                    {invoiceData.lineItems.map((item, index) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Item {index + 1}</span>
                                                {invoiceData.lineItems.length > 1 && (
                                                    <button onClick={() => setInvoiceData(prev => ({ ...prev, lineItems: prev.lineItems.filter(i => i.id !== item.id) }))} className="text-gray-400 hover:text-red-500 p-1 transition-colors">
                                                        <FiTrash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-1">Description</label>
                                                    <input className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none" placeholder="Item/Service Name" value={item.description} onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)} />
                                                </div>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div>
                                                        <label className="block text-xs text-gray-500 mb-1">Units</label>
                                                        <input type="number" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none" value={item.quantity} onChange={(e) => handleLineItemChange(item.id, 'quantity', e.target.value)} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs text-gray-500 mb-1">Rate</label>
                                                        <input type="number" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-200 focus:outline-none" value={item.rate} onChange={(e) => handleLineItemChange(item.id, 'rate', e.target.value)} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs text-gray-500 mb-1">Total</label>
                                                        <div className="bg-gray-50 border border-gray-200 rounded-md px-2 py-2 text-sm text-center font-medium text-blue-700">
                                                            {formatCurrency(item.amount, invoiceData.currency)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setInvoiceData(prev => ({ ...prev, lineItems: [...prev.lineItems, { id: Date.now().toString(), description: '', quantity: 1, rate: 0, amount: 0, taxable: true }] }))}
                                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all py-2 hover:gap-3"
                                >
                                    <FiPlus className="w-4 h-4" /> Add Line Item
                                </button>

                                {/* Notes/Terms + Totals */}
                                <div className="flex flex-col md:flex-row justify-between pt-6 md:pt-8 border-t border-gray-100 gap-6 md:gap-10 mt-4">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">TERMS & CONDITIONS</label>
                                            <textarea
                                                className="w-full p-3 bg-gray-50 rounded-lg text-sm h-24 outline-none focus:bg-white focus:border-blue-500 border border-gray-200 transition-all"
                                                value={invoiceData.terms}
                                                onChange={(e) => setInvoiceData(prev => ({ ...prev, terms: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">NOTES</label>
                                            <textarea
                                                className="w-full p-3 bg-gray-50 rounded-lg text-sm h-16 outline-none focus:bg-white focus:border-blue-500 border border-gray-200 transition-all"
                                                value={invoiceData.notes}
                                                onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-72 space-y-2">
                                        <div className="flex justify-between text-sm py-1.5">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="font-medium">{formatCurrency(totals.subtotal, invoiceData.currency)}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm py-1.5">
                                            <span className="text-gray-500">Tax Rate</span>
                                            <div className="flex items-center gap-1">
                                                <input type="number" className="w-14 text-right border border-gray-300 rounded-md focus:border-blue-500 outline-none text-sm px-2 py-0.5" value={invoiceData.taxRate} onChange={(e) => setInvoiceData(prev => ({ ...prev, taxRate: Number(e.target.value) }))} />
                                                <span className="text-gray-400 text-xs">%</span>
                                            </div>
                                        </div>
                                        {totals.taxAmount > 0 && (
                                            <div className="flex justify-between text-sm py-1.5">
                                                <span className="text-gray-500">Tax</span>
                                                <span className="font-medium">{formatCurrency(totals.taxAmount, invoiceData.currency)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-lg font-bold pt-4 border-t-2 border-dashed border-gray-200">
                                            <span>TOTAL</span>
                                            <span className="text-blue-600">{formatCurrency(totals.total, invoiceData.currency)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Signature Lines */}
                                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                                    <div className="text-center space-y-1">
                                        <div className="h-10 border-b border-gray-200"></div>
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Authorized Signature</span>
                                    </div>
                                    <div className="text-center space-y-1">
                                        <div className="h-10 border-b border-gray-200"></div>
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Client Acceptance</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full md:w-72 lg:w-80 space-y-5">
                            {/* Actions Card */}
                            <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                                <h3 className="font-bold text-sm text-gray-900">Actions</h3>
                                <button onClick={handleDownloadPDF} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                                    <FiDownload className="w-4 h-4" /> Download Quotation PDF
                                </button>
                                <button onClick={handlePreviewPDF} className="w-full py-3 border-2 border-blue-100 text-blue-600 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
                                    <FiEye className="w-4 h-4" /> Preview Quotation
                                </button>
                                <button onClick={handleLoadSampleData} className="w-full py-3 border-2 border-dashed border-blue-200 text-blue-600 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all">
                                    <FiFileText className="w-4 h-4" /> Load Sample Data
                                </button>
                                <hr className="border-gray-100" />
                                <button onClick={handleSaveProfile} className="w-full py-2 flex items-center justify-between text-sm text-gray-600 hover:text-blue-600 transition-all">
                                    <span>Save Business Profile</span> <FiUser className="w-4 h-4" />
                                </button>
                                <button onClick={() => setShowSettings(true)} className="w-full py-2 flex items-center justify-between text-sm text-gray-600 hover:text-blue-600 transition-all">
                                    <span>Document Settings</span> <FiSettings className="w-4 h-4" />
                                </button>
                                <button onClick={handleResetForm} className="w-full py-2 flex items-center justify-between text-sm text-red-600 bg-red-50 rounded-lg px-3 hover:bg-red-100 transition-all font-medium">
                                    <span>Clear & Reset Form</span> <FiTrash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Quotation Summary Card */}
                            <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 space-y-3">
                                <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2"><FiFileText className="text-blue-500" /> Quotation Summary</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Quote #:</span>
                                        <span className="font-medium">{invoiceData.metadata.invoiceNumber}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Items:</span>
                                        <span className="font-medium">{invoiceData.lineItems.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Status:</span>
                                        <span className="font-medium capitalize">{invoiceData.metadata.status}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Valid Until:</span>
                                        <span className="font-medium text-blue-600">{invoiceData.metadata.validUntil}</span>
                                    </div>
                                    {invoiceData.metadata.projectName && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Project:</span>
                                            <span className="font-medium truncate max-w-[120px]">{invoiceData.metadata.projectName}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Pro Tips Card */}
                            <div className="bg-blue-600 text-white p-5 md:p-6 rounded-xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><FiFileText className="w-20 h-20" /></div>
                                <h3 className="font-bold mb-2 flex items-center gap-2"><FiCheckCircle className="text-blue-200" /> Professional Edge</h3>
                                <p className="text-xs text-blue-100 leading-relaxed">Always include an <strong>expiration date</strong> on your quotes. This creates urgency and protects you from price fluctuations in material or labor costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
