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
} from 'react-icons/fi';
import { InvoiceData, LineItem } from '../types/invoice';
import { calculateInvoiceTotals, formatCurrency, calculateLineItemAmount } from '../utils/calculations';
import { getTodayDate, getDueDateFromToday } from '../utils/formatters';
import { InvoicePDF } from './InvoicePDF';
import { getEmptyInvoiceData } from '../utils/sampleData';
import {
    loadBusinessProfile,
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
        '&:hover': { borderColor: '#3b82f6' },
        cursor: 'pointer',
    }),
    option: (base: any, state: any) => ({
        ...base,
        fontSize: '0.75rem',
        backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#eff6ff' : 'white',
        color: state.isSelected ? 'white' : '#374151',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({ ...base, fontSize: '0.75rem' }),
};

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

const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'sent', label: 'Sent' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'expired', label: 'Expired' },
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
        pageTitle: 'Free Quotation Maker – Create Professional Quotations',
        defaultNotes: 'This quotation is valid for 30 days from the date of issue.',
    };

    const [invoiceData, setInvoiceData] = useState<InvoiceData>(() => {
        const empty = getEmptyInvoiceData();
        empty.metadata.invoiceNumber = generateDocNumber(config.numberPrefix);
        empty.notes = config.defaultNotes;
        empty.metadata.status = 'draft';
        empty.metadata.validUntil = getDueDateFromToday(30);
        empty.scopeOfWork = '';
        return empty;
    });

    const [logoPreview, setLogoPreview] = useState<string>('');
    const [showClientSelector, setShowClientSelector] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string>('');
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

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {isGenerating && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
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
                    <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-6xl overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold">Quotation Preview</h2>
                            <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-black"><FiX className="w-6 h-6" /></button>
                        </div>
                        <iframe src={previewUrl} className="flex-1 w-full" />
                        <div className="p-4 border-t flex justify-end gap-3">
                            <button onClick={() => setShowPreview(false)} className="px-4 py-2 border rounded-lg">Close</button>
                            <button onClick={handleDownloadPDF} className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"><FiDownload /> Download PDF</button>
                        </div>
                    </div>
                </div>
            )}

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
                        <button onClick={handlePreviewPDF} className="px-4 py-1.5 border border-blue-500 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">Preview</button>
                        <button onClick={handleDownloadPDF} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1 transition-colors shadow-lg shadow-blue-100"><FiDownload className="w-4 h-4" /> Download</button>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">{config.pageTitle}</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-blue-600 shadow-sm">
                                <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                                    <div className="flex-1 space-y-4">
                                        <div className="w-32 h-32 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center overflow-hidden bg-gray-50 group relative">
                                            {logoPreview ? (
                                                <img src={logoPreview} alt="Logo" className="w-full h-full object-contain" />
                                            ) : (
                                                <label className="cursor-pointer flex flex-col items-center text-gray-300 group-hover:text-blue-400 transition-colors">
                                                    <FiImage className="w-8 h-8" />
                                                    <span className="text-[10px] mt-1 font-bold">LOGO</span>
                                                    <input type="file" className="hidden" onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const r = new FileReader();
                                                            r.onload = () => { setLogoPreview(r.result as string); setInvoiceData(p => ({ ...p, business: { ...p.business, logo: r.result as string } })); };
                                                            r.readAsDataURL(file);
                                                        }
                                                    }} />
                                                </label>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <input className="w-full text-xl font-bold placeholder:text-gray-200 focus:outline-none" placeholder="Business Name" value={invoiceData.business.name} onChange={(e) => setInvoiceData(p => ({ ...p, business: { ...p.business, name: e.target.value } }))} />
                                            <textarea className="w-full text-sm text-gray-500 placeholder:text-gray-200 focus:outline-none resize-none h-20" placeholder="Address, City, Contact" value={invoiceData.business.address} onChange={(e) => setInvoiceData(p => ({ ...p, business: { ...p.business, address: e.target.value } }))} />
                                        </div>
                                    </div>
                                    <div className="text-right space-y-4">
                                        <h2 className="text-4xl font-black text-blue-600 italic tracking-tighter">QUOTATION</h2>
                                        <div className="space-y-2 inline-block">
                                            <div className="flex items-center justify-end gap-2 text-xs">
                                                <span className="text-gray-300 font-bold uppercase tracking-widest">Quote No.</span>
                                                <input className="w-32 border-b border-gray-100 focus:border-blue-600 text-right outline-none font-bold" value={invoiceData.metadata.invoiceNumber} onChange={(e) => handleMetadataChange('invoiceNumber', e.target.value)} />
                                            </div>
                                            <div className="flex items-center justify-end gap-2 text-xs">
                                                <span className="text-gray-300 font-bold uppercase tracking-widest">Valid Until</span>
                                                <input type="date" className="w-32 border-b border-gray-100 focus:border-blue-600 text-right outline-none font-bold text-blue-600" value={invoiceData.metadata.validUntil} onChange={(e) => handleMetadataChange('validUntil', e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-gray-50">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center justify-between">Prepared For <button onClick={() => setShowClientSelector(true)} className="text-blue-600 normal-case font-bold flex items-center gap-1"><FiUsers /> Contacts</button></label>
                                        <textarea className="w-full p-4 bg-gray-50 rounded-xl text-sm border-2 border-transparent focus:border-blue-100 focus:bg-white transition-all outline-none h-28" placeholder="Client Name & Information" value={invoiceData.client.billTo} onChange={(e) => setInvoiceData(p => ({ ...p, client: { ...p.client, billTo: e.target.value } }))} />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-1"><FiActivity className="w-3 h-3 text-blue-400" /> Quotation Status</label>
                                            <Select styles={selectStyles} options={statusOptions} value={statusOptions.find(s => s.value === invoiceData.metadata.status)} onChange={(s) => s && handleMetadataChange('status', s.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-1"><FiBriefcase className="w-3 h-3 text-blue-400" /> Project Name</label>
                                            <input className="w-full p-2.5 bg-gray-50 rounded-xl text-sm border-2 border-transparent focus:border-blue-100 outline-none" placeholder="e.g. Website Redesign" value={invoiceData.metadata.projectName || ''} onChange={(e) => handleMetadataChange('projectName', e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Scope of Work</label>
                                    <textarea className="w-full p-4 bg-blue-50/30 rounded-xl text-sm border-2 border-transparent focus:border-blue-100 outline-none placeholder:text-gray-300 h-24 italic" placeholder="Briefly describe the proposed project scope or objectives..." value={invoiceData.scopeOfWork} onChange={(e) => setInvoiceData(p => ({ ...p, scopeOfWork: e.target.value }))} />
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="grid grid-cols-12 gap-4 text-[10px] font-black text-gray-300 uppercase tracking-widest px-2">
                                        <div className="col-span-12 md:col-span-6">Service / Description</div>
                                        <div className="hidden md:block col-span-2 text-right">Units</div>
                                        <div className="hidden md:block col-span-2 text-right">Rate</div>
                                        <div className="hidden md:block col-span-2 text-right">Total</div>
                                    </div>
                                    <div className="space-y-2">
                                        {invoiceData.lineItems.map(item => (
                                            <div key={item.id} className="grid grid-cols-12 gap-2 md:gap-4 p-2 rounded-xl group hover:bg-gray-50 transition-colors items-center">
                                                <div className="col-span-12 md:col-span-6 flex items-center gap-2">
                                                    <button onClick={() => setInvoiceData(p => ({ ...p, lineItems: p.lineItems.filter(i => i.id !== item.id) }))} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><FiTrash2 /></button>
                                                    <input className="w-full bg-transparent font-medium text-sm focus:outline-none" placeholder="Item/Service Name" value={item.description} onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)} />
                                                </div>
                                                <div className="col-span-4 md:col-span-2">
                                                    <input type="number" className="w-full bg-blue-50/50 p-1.5 rounded text-sm text-right focus:bg-white focus:outline-blue-200" value={item.quantity} onChange={(e) => handleLineItemChange(item.id, 'quantity', e.target.value)} />
                                                </div>
                                                <div className="col-span-4 md:col-span-2">
                                                    <input type="number" className="w-full bg-blue-50/50 p-1.5 rounded text-sm text-right focus:bg-white focus:outline-blue-200" value={item.rate} onChange={(e) => handleLineItemChange(item.id, 'rate', e.target.value)} />
                                                </div>
                                                <div className="col-span-4 md:col-span-2 text-right font-bold text-sm text-blue-600">
                                                    {formatCurrency(item.amount, invoiceData.currency)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => setInvoiceData(p => ({ ...p, lineItems: [...p.lineItems, { id: Date.now().toString(), description: '', quantity: 1, rate: 0, amount: 0 }] }))} className="text-xs font-black text-blue-600 flex items-center gap-1 hover:gap-2 transition-all py-2"><FiPlus /> ADD NEW ITEM</button>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between gap-10 pt-10 border-t border-gray-50">
                                    <div className="flex-1 space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Terms & Conditions</label>
                                            <textarea className="w-full p-4 bg-gray-50 rounded-xl text-xs h-32 focus:outline-blue-100" value={invoiceData.terms} onChange={(e) => setInvoiceData(p => ({ ...p, terms: e.target.value }))} />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-64 space-y-3">
                                        <div className="flex justify-between text-xs font-bold text-gray-400"><span>Subtotal</span> <span>{formatCurrency(totals.subtotal, invoiceData.currency)}</span></div>
                                        <div className="flex justify-between items-center text-xs font-bold text-gray-400"><span>Tax (%)</span> <input type="number" className="w-12 text-right border-b focus:border-blue-500 outline-none" value={invoiceData.taxRate} onChange={(e) => setInvoiceData(p => ({ ...p, taxRate: Number(e.target.value) }))} /></div>
                                        <div className="flex justify-between items-center text-xl font-black text-gray-900 pt-5 border-t-2 border-dashed border-gray-100"><span>TOTAL</span> <span className="text-blue-600">{formatCurrency(totals.total, invoiceData.currency)}</span></div>
                                    </div>
                                </div>

                                <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 gap-20">
                                    <div className="text-center space-y-1">
                                        <div className="h-10 border-b border-gray-200"></div>
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Authorized Signature</span>
                                    </div>
                                    <div className="text-center space-y-1">
                                        <div className="h-10 border-b border-gray-200"></div>
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Client Acceptance</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border-t shadow-sm space-y-4">
                                <h3 className="font-black text-xs text-gray-400 uppercase tracking-[0.2em]">Actions</h3>
                                <button onClick={handleDownloadPDF} className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2"><FiDownload /> DOWNLOAD PDF</button>
                                <button onClick={handlePreviewPDF} className="w-full py-4 border-2 border-blue-50 rounded-xl font-black text-sm text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">PREVIEW QUOTE</button>
                                <hr className="opacity-50" />
                                <button onClick={() => setShowSettings(true)} className="w-full py-2 flex items-center justify-between text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"><span>Preferences</span> <FiSettings /></button>
                                <button onClick={() => location.reload()} className="w-full py-2 flex items-center justify-between text-xs font-bold text-gray-500 hover:text-red-500 transition-colors"><span>Reset Form</span> <FiTrash2 /></button>
                            </div>

                            <div className="bg-blue-600 text-white p-6 rounded-2xl relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><FiFileText className="w-20 h-20" /></div>
                                <h3 className="font-bold flex items-center gap-2 mb-3"><FiCheckCircle className="text-blue-200" /> Professional Edge</h3>
                                <p className="text-xs text-blue-100 leading-relaxed">Always include an <strong>expiration date</strong> on your quotes. This creates urgency and protects you from price fluctuations in material or labor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

