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
    FiCopy,
    FiSave,
    FiFolder,
    FiImage,
    FiUsers,
    FiX,
    FiHelpCircle,
    FiCheckCircle,
    FiAlertCircle,
    FiFile,
    FiCreditCard,
    FiCalendar,
    FiUser,
    FiCheck,
} from 'react-icons/fi';
import { InvoiceData, LineItem } from '../types/invoice';
import { calculateInvoiceTotals, formatCurrency, calculateLineItemAmount } from '../utils/calculations';
import { getTodayDate } from '../utils/formatters';
import { InvoicePDF } from './InvoicePDF';
import { getEmptyInvoiceData } from '../utils/sampleData';
import {
    saveBusinessProfile,
    loadBusinessProfile,
    saveRecentClient,
} from '../utils/invoiceManager';
import { ClientSelector } from './ClientSelector';
import { SettingsModal } from './SettingsModal';
import { ConfirmModal } from './ConfirmModal';

const selectStyles = {
    control: (base: any) => ({
        ...base,
        minHeight: '32px',
        fontSize: '0.75rem',
        borderColor: '#d1d5db',
        '&:hover': { borderColor: '#10b981' },
        cursor: 'pointer',
    }),
    option: (base: any, state: any) => ({
        ...base,
        fontSize: '0.75rem',
        backgroundColor: state.isSelected ? '#10b981' : state.isFocused ? '#f0fdf4' : 'white',
        color: state.isSelected ? 'white' : '#374151',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({
        ...base,
        fontSize: '0.75rem',
    }),
};

const paymentMethods = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Bank Transfer', label: 'Bank Transfer' },
    { value: 'PayPal', label: 'PayPal' },
    { value: 'Check', label: 'Check' },
    { value: 'Other', label: 'Other' },
];

const currencyOptions = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'EUR', label: 'EUR (€)' },
    { value: 'GBP', label: 'GBP (£)' },
    { value: 'JPY', label: 'JPY (¥)' },
    { value: 'INR', label: 'INR (₹)' },
    { value: 'CAD', label: 'CAD ($)' },
    { value: 'AUD', label: 'AUD ($)' },
    { value: 'SGD', label: 'SGD ($)' },
];

function generateDocNumber(prefix: string): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${year}${month}-${random}`;
}

export default function ReceiptForm() {
    const config = {
        documentTitle: 'RECEIPT',
        documentLabel: 'Receipt',
        numberPrefix: 'RCT',
        numberLabel: 'Receipt #',
        pageTitle: 'Free Receipt Maker – Create Professional Receipts',
        defaultNotes: 'Payment received. Thank you for your business!',
    };

    const [invoiceData, setInvoiceData] = useState<InvoiceData>(() => {
        const empty = getEmptyInvoiceData();
        empty.metadata.invoiceNumber = generateDocNumber(config.numberPrefix);
        empty.notes = config.defaultNotes;
        empty.metadata.status = 'paid';
        empty.metadata.paymentMethod = 'Cash';
        empty.metadata.paymentDate = getTodayDate();
        empty.metadata.receivedBy = '';
        return empty;
    });

    const [logoPreview, setLogoPreview] = useState<string>('');
    const [showClientSelector, setShowClientSelector] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

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
        const key = `draft_receipt`;
        const autoSaveInterval = setInterval(() => {
            if (invoiceData.lineItems.some(item => item.description)) {
                localStorage.setItem(key, JSON.stringify(invoiceData));
                setLastSaved(new Date());
            }
        }, 30000);
        return () => clearInterval(autoSaveInterval);
    }, [invoiceData]);

    const totals = calculateInvoiceTotals(
        invoiceData.lineItems,
        invoiceData.taxRate,
        invoiceData.discountAmount,
        invoiceData.discountType,
        invoiceData.shippingAmount,
        invoiceData.amountPaid
    );

    const isPaid = totals.balanceDue <= 0;

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

    const handleMetadataChange = (field: keyof InvoiceData['metadata'], value: string) => {
        setInvoiceData(prev => ({ ...prev, metadata: { ...prev.metadata, [field]: value } }));
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

    const handleDownloadPDF = async () => {
        setIsGenerating(true);
        try {
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="RECEIPT" />).toBlob();
            saveAs(blob, `Receipt-${invoiceData.metadata.invoiceNumber}.pdf`);
            showNotification('Receipt downloaded!');
        } finally {
            setIsGenerating(false);
        }
    };

    const handlePreviewPDF = async () => {
        setIsGenerating(true);
        try {
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="RECEIPT" />).toBlob();
            setPreviewUrl(URL.createObjectURL(blob));
            setShowPreview(true);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {notification && (
                <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in ${notification.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                    {notification.message}
                </div>
            )}

            {isGenerating && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-xl flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-emerald-600"></div>
                        <p className="font-medium">Generating Receipt...</p>
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
                    onSelect={(client) => {
                        setInvoiceData(prev => ({ ...prev, client }));
                        setShowClientSelector(false);
                    }}
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
                    <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-6xl overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold">Receipt Preview</h2>
                            <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-black"><FiX className="w-6 h-6" /></button>
                        </div>
                        <iframe src={previewUrl} className="flex-1 w-full" />
                        <div className="p-4 border-t flex justify-end gap-3">
                            <button onClick={() => setShowPreview(false)} className="px-4 py-2 border rounded-lg">Close</button>
                            <button onClick={handleDownloadPDF} className="px-6 py-2 bg-emerald-500 text-white rounded-lg flex items-center gap-2"><FiDownload /> Download</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Header Actions */}
            <div className="bg-white border-b sticky top-16 z-30 shadow-sm py-2">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-32">
                            <Select
                                styles={selectStyles}
                                value={{ value: invoiceData.currency, label: invoiceData.currency }}
                                options={currencyOptions}
                                onChange={(opt) => opt && setInvoiceData(prev => ({ ...prev, currency: opt.value }))}
                            />
                        </div>
                        {lastSaved && <span className="text-[10px] text-gray-400">Auto-saved {lastSaved.toLocaleTimeString()}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => localStorage.removeItem('draft_receipt')} className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Clear Draft"><FiTrash2 /></button>
                        <button onClick={handlePreviewPDF} className="px-4 py-1.5 border border-emerald-500 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-50">Preview</button>
                        <button onClick={handleDownloadPDF} className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 flex items-center gap-1"><FiDownload className="w-3.5 h-3.5" /> Download</button>
                    </div>
                </div>
            </div>


            <section className="py-10 lg:py-16">
                <div className="container">
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center lg:mb-10 mb-5">{config.pageTitle}</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Editor */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-emerald-500 shadow-sm relative overflow-hidden">
                                {isPaid && (
                                    <div className="absolute top-10 right-10 border-4 border-emerald-500/30 rounded-lg p-2 transform rotate-12 pointer-events-none">
                                        <span className="text-4xl font-black text-emerald-500/30">PAID</span>
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                                    <div className="flex-1 space-y-4">
                                        <div className="relative group w-32 h-32 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                                            {logoPreview ? (
                                                <>
                                                    <img src={logoPreview} alt="Logo" className="w-full h-full object-contain" />
                                                    <button onClick={() => { setLogoPreview(''); setInvoiceData(prev => ({ ...prev, business: { ...prev.business, logo: '' } })) }} className="absolute top-1 right-1 bg-white shadow-md rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"><FiX className="w-3 h-3 text-red-500" /></button>
                                                </>
                                            ) : (
                                                <label className="cursor-pointer flex flex-col items-center">
                                                    <FiImage className="w-8 h-8 text-gray-300" />
                                                    <span className="text-[10px] text-gray-400 mt-1">Upload Logo</span>
                                                    <input type="file" className="hidden" onChange={handleLogoUpload} />
                                                </label>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                className="w-full text-xl font-bold focus:outline-none placeholder:text-gray-300"
                                                placeholder="Your Business Name"
                                                value={invoiceData.business.name}
                                                onChange={(e) => setInvoiceData(prev => ({ ...prev, business: { ...prev.business, name: e.target.value } }))}
                                            />
                                            <textarea
                                                className="w-full text-sm text-gray-600 focus:outline-none placeholder:text-gray-300 resize-none h-20"
                                                placeholder="Business Address & Contact Info"
                                                value={invoiceData.business.address}
                                                onChange={(e) => setInvoiceData(prev => ({ ...prev, business: { ...prev.business, address: e.target.value } }))}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-right space-y-4">
                                        <h2 className="text-4xl font-black text-emerald-500 tracking-tight">RECEIPT</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-end gap-2 text-sm">
                                                <span className="text-gray-400 font-medium">Receipt #</span>
                                                <input className="w-32 border-b focus:border-emerald-500 text-right outline-none" value={invoiceData.metadata.invoiceNumber} onChange={(e) => handleMetadataChange('invoiceNumber', e.target.value)} />
                                            </div>
                                            <div className="flex items-center justify-end gap-2 text-sm">
                                                <span className="text-gray-400 font-medium">Date</span>
                                                <input type="date" className="w-32 border-b focus:border-emerald-500 text-right outline-none" value={invoiceData.metadata.date} onChange={(e) => handleMetadataChange('date', e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-between">
                                            Received From
                                            <button onClick={() => setShowClientSelector(true)} className="text-emerald-600 normal-case font-normal flex items-center gap-1"><FiUsers className="w-3 h-3" /> Recent</button>
                                        </label>
                                        <textarea
                                            className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:bg-white focus:border-emerald-500 outline-none transition-all placeholder:text-gray-300 h-24"
                                            placeholder="Client Name & Address"
                                            value={invoiceData.client.billTo}
                                            onChange={(e) => setInvoiceData(prev => ({ ...prev, client: { ...prev.client, billTo: e.target.value } }))}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><FiUser className="w-3 h-3" /> Received By</label>
                                            <input
                                                className="w-full p-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:bg-white focus:border-emerald-500 outline-none transition-all"
                                                placeholder="Staff Name / Signature"
                                                value={invoiceData.metadata.receivedBy}
                                                onChange={(e) => handleMetadataChange('receivedBy', e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><FiCreditCard className="w-3 h-3" /> Method</label>
                                                <Select
                                                    styles={selectStyles}
                                                    options={paymentMethods}
                                                    value={paymentMethods.find(m => m.value === invoiceData.metadata.paymentMethod)}
                                                    onChange={(m) => m && handleMetadataChange('paymentMethod', m.value)}
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><FiCalendar className="w-3 h-3" /> Pay Date</label>
                                                <input
                                                    type="date"
                                                    className="w-full p-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[11px] focus:bg-white focus:border-emerald-500 outline-none transition-all h-8"
                                                    value={invoiceData.metadata.paymentDate}
                                                    onChange={(e) => handleMetadataChange('paymentDate', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Items Table */}
                                <div className="space-y-4 mb-10">
                                    <div className="grid grid-cols-12 gap-4 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                        <div className="col-span-6">Description</div>
                                        <div className="col-span-2 text-right">Qty</div>
                                        <div className="col-span-2 text-right">Price</div>
                                        <div className="col-span-2 text-right">Total</div>
                                    </div>
                                    <div className="space-y-2">
                                        {invoiceData.lineItems.map((item) => (
                                            <div key={item.id} className="grid grid-cols-12 gap-x-4 gap-y-2 group items-center">
                                                <div className="col-span-6 flex items-center gap-2">
                                                    <button onClick={() => setInvoiceData(prev => ({ ...prev, lineItems: prev.lineItems.filter(i => i.id !== item.id) }))} className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-500 transition-all"><FiTrash2 className="w-3.5 h-3.5" /></button>
                                                    <input
                                                        className="w-full p-2 text-sm bg-emerald-50/20 rounded border border-transparent focus:bg-white focus:border-emerald-200 outline-none"
                                                        placeholder="Item description"
                                                        value={item.description}
                                                        onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-span-2">
                                                    <input
                                                        type="number"
                                                        className="w-full p-2 text-sm text-right bg-emerald-50/20 rounded border border-transparent focus:bg-white focus:border-emerald-200 outline-none"
                                                        value={item.quantity}
                                                        onChange={(e) => handleLineItemChange(item.id, 'quantity', e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-span-2">
                                                    <input
                                                        type="number"
                                                        className="w-full p-2 text-sm text-right bg-emerald-50/20 rounded border border-transparent focus:bg-white focus:border-emerald-200 outline-none"
                                                        value={item.rate}
                                                        onChange={(e) => handleLineItemChange(item.id, 'rate', e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-span-2 text-right text-sm font-semibold pr-2">
                                                    {formatCurrency(item.amount, invoiceData.currency)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => setInvoiceData(prev => ({ ...prev, lineItems: [...prev.lineItems, { id: Date.now().toString(), description: '', quantity: 1, rate: 0, amount: 0, taxable: true }] }))} className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-all py-2"><FiPlus className="w-4 h-4" /> ADD LINE ITEM</button>
                                </div>

                                {/* Calculations */}
                                <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-gray-100 gap-10">
                                    <div className="flex-1 space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Notes</label>
                                            <textarea className="w-full p-3 bg-gray-50 rounded-lg text-sm h-24 outline-none focus:bg-white focus:border-emerald-500 border border-transparent" value={invoiceData.notes} onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-64 space-y-2">
                                        <div className="flex justify-between text-sm py-1">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="font-medium">{formatCurrency(totals.subtotal, invoiceData.currency)}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm py-1">
                                            <span className="text-gray-500">Tax ({invoiceData.taxRate}%)</span>
                                            <input type="number" className="w-12 text-right border-b focus:border-emerald-500 outline-none text-xs" value={invoiceData.taxRate} onChange={(e) => setInvoiceData(prev => ({ ...prev, taxRate: Number(e.target.value) }))} />
                                        </div>
                                        <div className="flex justify-between text-lg font-black pt-4 border-t">
                                            <span>TOTAL</span>
                                            <span className="text-emerald-600">{formatCurrency(totals.total, invoiceData.currency)}</span>
                                        </div>
                                        <div className="bg-emerald-50 p-3 rounded-lg space-y-2 mt-4">
                                            <div className="flex justify-between text-xs font-bold text-emerald-800">
                                                <span>AMOUNT PAID</span>
                                                <input type="number" className="w-20 text-right bg-transparent border-b border-emerald-300 focus:border-emerald-600 outline-none" value={invoiceData.amountPaid} onChange={(e) => setInvoiceData(prev => ({ ...prev, amountPaid: Number(e.target.value) }))} />
                                            </div>
                                            <div className="flex justify-between text-xs font-bold text-emerald-800 pt-2 border-t border-emerald-200">
                                                <span>BALANCE DUE</span>
                                                <span>{formatCurrency(totals.balanceDue, invoiceData.currency)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
                                <h3 className="font-bold text-sm">Actions</h3>
                                <button onClick={handleDownloadPDF} className="w-full py-3 bg-emerald-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200"><FiDownload /> Download PDF</button>
                                <button onClick={handlePreviewPDF} className="w-full py-3 border-2 border-emerald-100 text-emerald-600 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all">View Preview</button>
                                <hr />
                                <button onClick={() => setShowSettings(true)} className="w-full py-2 flex items-center justify-between text-sm text-gray-600 hover:text-emerald-600 transition-all"><span>Document Settings</span> <FiSettings /></button>
                                <button onClick={() => window.location.reload()} className="w-full py-2 flex items-center justify-between text-sm text-gray-600 hover:text-red-500 transition-all"><span>Clear Form</span> <FiTrash2 /></button>
                            </div>

                            <div className="bg-emerald-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><FiCheckCircle className="w-20 h-20" /></div>
                                <h3 className="font-bold mb-2 flex items-center gap-2"><FiCheckCircle className="text-emerald-400" /> Pro Tip</h3>
                                <p className="text-xs text-emerald-100 leading-relaxed">Receipts usually don't have a due date. Always include the <strong>payment method</strong> and <strong>received from</strong> fields to make it official.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

