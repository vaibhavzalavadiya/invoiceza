'use client';

import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import {
    FiDownload,
    FiSettings,
    FiPlus,
    FiTrash2,
    FiImage,
    FiUsers,
    FiX,
    FiCheckCircle,
    FiFileText,
    FiTool,
    FiBox,
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
        '&:hover': { borderColor: '#7c3aed' },
        cursor: 'pointer',
    }),
    option: (base: any, state: any) => ({
        ...base,
        fontSize: '0.75rem',
        backgroundColor: state.isSelected ? '#7c3aed' : state.isFocused ? '#f5f3ff' : 'white',
        color: state.isSelected ? 'white' : '#374151',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({ ...base, fontSize: '0.75rem' }),
};

const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'sent', label: 'Sent' },
    { value: 'approved', label: 'Approved' },
    { value: 'declined', label: 'Declined' },
];

function generateDocNumber(prefix: string): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${year}${month}-${random}`;
}

export default function EstimateForm() {
    const config = {
        documentTitle: 'ESTIMATE',
        numberPrefix: 'EST',
        pageTitle: 'Free Estimate Maker – Create Professional Estimates',
        defaultDisclaimer: 'This is an estimate only. Final project costs may vary depending on actual labor and material requirements.',
    };

    const [invoiceData, setInvoiceData] = useState<InvoiceData>(() => {
        const empty = getEmptyInvoiceData();
        empty.metadata.invoiceNumber = generateDocNumber(config.numberPrefix);
        empty.notes = '';
        empty.disclaimer = config.defaultDisclaimer;
        empty.metadata.status = 'draft';
        empty.metadata.validUntil = getDueDateFromToday(30);
        empty.metadata.projectName = '';
        return empty;
    });

    const [logoPreview, setLogoPreview] = useState<string>('');
    const [showClientSelector, setShowClientSelector] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string>('');
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
        const key = `draft_estimate`;
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
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="ESTIMATE" />).toBlob();
            saveAs(blob, `Estimate-${invoiceData.metadata.invoiceNumber}.pdf`);
        } finally {
            setIsGenerating(false);
        }
    };

    const handlePreviewPDF = async () => {
        setIsGenerating(true);
        try {
            const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} documentTitle="ESTIMATE" />).toBlob();
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
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-violet-600"></div>
                        <p className="font-medium text-gray-900">Preparing Estimate...</p>
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
                            <h2 className="text-xl font-bold">Estimate Preview</h2>
                            <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-black"><FiX className="w-6 h-6" /></button>
                        </div>
                        <iframe src={previewUrl} className="flex-1 w-full" />
                        <div className="p-4 border-t flex justify-end gap-3">
                            <button onClick={() => setShowPreview(false)} className="px-4 py-2 border rounded-lg">Close</button>
                            <button onClick={handleDownloadPDF} className="px-6 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-2 font-bold"><FiDownload /> Download PDF</button>
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
                                options={[{ value: 'USD', label: 'USD' }, { value: 'EUR', label: 'EUR' }, { value: 'GBP', label: 'GBP' }]}
                                onChange={(opt) => opt && setInvoiceData(prev => ({ ...prev, currency: opt.value }))}
                            />
                        </div>
                        {lastSaved && <span className="text-[10px] text-gray-400">Draft saved {lastSaved.toLocaleTimeString()}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={handlePreviewPDF} className="p-2 border rounded-lg text-violet-600 border-violet-200 hover:bg-violet-50 transition-all"><FiFileText /></button>
                        <button onClick={handleDownloadPDF} className="px-5 py-2 bg-violet-600 text-white rounded-lg text-sm font-bold hover:bg-violet-700 flex items-center gap-2 shadow-lg shadow-violet-100 transition-all"><FiDownload className="w-4 h-4" /> Download PDF</button>
                    </div>
                </div>
            </div>

            <div className="container py-10">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
                            <div className="space-y-6 flex-1">
                                <div className="w-24 h-24 bg-violet-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-violet-100 group relative cursor-pointer">
                                    {logoPreview ? (
                                        <img src={logoPreview} alt="Logo" className="w-full h-full object-contain p-2" />
                                    ) : (
                                        <div className="text-violet-200 flex flex-col items-center">
                                            <FiImage className="w-8 h-8" />
                                            <span className="text-[10px] font-black mt-1">BRANDING</span>
                                        </div>
                                    )}
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => {
                                        const f = e.target.files?.[0];
                                        if (f) {
                                            const r = new FileReader();
                                            r.onload = () => { setLogoPreview(r.result as string); setInvoiceData(p => ({ ...p, business: { ...p.business, logo: r.result as string } })); };
                                            r.readAsDataURL(f);
                                        }
                                    }} />
                                </div>
                                <div className="space-y-4">
                                    <input className="w-full text-2xl font-black text-gray-900 placeholder:text-gray-200 focus:outline-none" placeholder="Business Name" value={invoiceData.business.name} onChange={(e) => setInvoiceData(p => ({ ...p, business: { ...p.business, name: e.target.value } }))} />
                                    <textarea className="w-full text-sm text-gray-400 placeholder:text-gray-200 focus:outline-none resize-none h-20 leading-relaxed" placeholder="Business address, tax ID, and contact details..." value={invoiceData.business.address} onChange={(e) => setInvoiceData(p => ({ ...p, business: { ...p.business, address: e.target.value } }))} />
                                </div>
                            </div>
                            <div className="text-right space-y-4 pt-2">
                                <h2 className="text-5xl font-black text-violet-600 tracking-tighter">ESTIMATE</h2>
                                <div className="flex flex-col items-end gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Reference No.</span>
                                        <input className="w-32 bg-gray-50 p-2 rounded-lg text-sm font-bold text-right outline-none focus:ring-2 focus:ring-violet-100" value={invoiceData.metadata.invoiceNumber} onChange={(e) => handleMetadataChange('invoiceNumber', e.target.value)} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Valid Until</span>
                                        <input type="date" className="w-32 bg-violet-50 p-2 rounded-lg text-sm font-bold text-violet-600 text-right outline-none focus:ring-2 focus:ring-violet-200" value={invoiceData.metadata.validUntil} onChange={(e) => handleMetadataChange('validUntil', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 shadow-2xl shadow-violet-200/30">
                            <div className="md:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-violet-400 uppercase tracking-widest block">Project Recipient</label>
                                <textarea className="w-full bg-transparent text-lg font-medium placeholder:text-gray-700 focus:outline-none resize-none h-24" placeholder="Client Name & Project Address..." value={invoiceData.client.billTo} onChange={(e) => setInvoiceData(p => ({ ...p, client: { ...p.client, billTo: e.target.value } }))} />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-violet-400 uppercase tracking-widest block">Estimate Status</label>
                                    <Select styles={{
                                        control: (b) => ({ ...b, background: '#1f2937', borderColor: '#374151', color: 'white' }),
                                        singleValue: (b) => ({ ...b, color: 'white' }),
                                        option: (b, s) => ({ ...b, background: s.isFocused ? '#7c3aed' : '#1f2937', color: 'white' }),
                                    }} options={statusOptions} value={statusOptions.find(s => s.value === invoiceData.metadata.status)} onChange={(s) => s && handleMetadataChange('status', s.value)} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-violet-400 uppercase tracking-widest block">Project Name</label>
                                    <input className="w-full bg-gray-800 border border-gray-700 p-2 rounded text-sm text-white focus:outline-none focus:border-violet-500" value={invoiceData.metadata.projectName || ''} onChange={(e) => handleMetadataChange('projectName', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 mb-16">
                            <h3 className="text-xl font-black text-gray-900 flex items-center gap-2"><FiTool className="text-violet-500" /> Cost Breakdown</h3>
                            <div className="space-y-4">
                                {invoiceData.lineItems.map(item => (
                                    <div key={item.id} className="group p-4 rounded-2xl bg-gray-50/50 hover:bg-violet-50/50 border border-transparent hover:border-violet-100 transition-all">
                                        <div className="grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
                                                <button onClick={() => setInvoiceData(p => ({ ...p, lineItems: p.lineItems.filter(i => i.id !== item.id) }))} className="text-gray-300 hover:text-red-500"><FiTrash2 /></button>
                                                <input className="w-full bg-transparent font-bold text-gray-800 focus:outline-none" placeholder="Description of work or material" value={item.description} onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)} />
                                            </div>
                                            <div className="col-span-4 md:col-span-2">
                                                <input type="number" className="w-full bg-white p-2 text-right rounded-lg text-sm focus:outline-violet-200" value={item.quantity} onChange={(e) => handleLineItemChange(item.id, 'quantity', e.target.value)} />
                                            </div>
                                            <div className="col-span-4 md:col-span-2">
                                                <input type="number" className="w-full bg-white p-2 text-right rounded-lg text-sm focus:outline-violet-200" value={item.rate} onChange={(e) => handleLineItemChange(item.id, 'rate', e.target.value)} />
                                            </div>
                                            <div className="col-span-4 md:col-span-2 text-right font-black text-violet-600">
                                                {formatCurrency(item.amount, invoiceData.currency)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={() => setInvoiceData(p => ({ ...p, lineItems: [...p.lineItems, { id: Date.now().toString(), description: '', quantity: 1, rate: 0, amount: 0 }] }))} className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-gray-300 font-bold hover:border-violet-200 hover:text-violet-300 transition-all flex items-center justify-center gap-2"><FiPlus /> ADD PROJECT ITEM</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-50">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Important Disclaimer</label>
                                    <textarea className="w-full p-4 bg-gray-50 rounded-xl text-xs h-32 leading-relaxed italic text-gray-500" value={invoiceData.disclaimer} onChange={(e) => setInvoiceData(p => ({ ...p, disclaimer: e.target.value }))} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold text-gray-400"><span>Project Estimate</span> <span>{formatCurrency(totals.subtotal, invoiceData.currency)}</span></div>
                                <div className="flex justify-between items-center text-xs font-bold text-gray-400"><span>Contingency / Tax (%)</span> <input type="number" className="w-12 text-right border-b focus:border-violet-500 outline-none" value={invoiceData.taxRate} onChange={(e) => setInvoiceData(p => ({ ...p, taxRate: Number(e.target.value) }))} /></div>
                                <div className="flex justify-between items-center pt-6 border-t font-black">
                                    <span className="text-gray-900 uppercase tracking-widest text-xs">Estimated Total</span>
                                    <span className="text-3xl text-violet-600">{formatCurrency(totals.total, invoiceData.currency)}</span>
                                </div>
                                <p className="text-[10px] text-gray-300 italic text-right mt-2 font-medium">Pricing is subject to change based on final measurements.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-violet-900 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,rgba(124,58,237,0.4),transparent)]"></div>
                        <div className="relative space-y-4 flex-1">
                            <h3 className="text-2xl font-black flex items-center gap-3"><FiBox className="text-violet-300" /> Need a fixed Quote?</h3>
                            <p className="text-violet-100 text-sm leading-relaxed">Once you've finalized the project scope, convert this estimate into a formal <strong>Quotation</strong> to lock in the price for your client.</p>
                        </div>
                        <button onClick={handleDownloadPDF} className="relative bg-white text-violet-900 px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">GENERATE ESTIMATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

