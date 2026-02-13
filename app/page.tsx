'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Select from 'react-select';
import {
  FiDownload,
  FiSettings,
  FiClock,
  FiFileText,
  FiPlus,
  FiTrash2,
  FiCopy,
  FiSave,
  FiFolder,
  FiUpload,
  FiImage,
  FiUsers,
  FiMoreVertical,
  FiFile,
  FiX,
  FiHelpCircle,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
  FiEdit
} from 'react-icons/fi';
import { InvoiceData, LineItem } from './types/invoice';
import { calculateInvoiceTotals, formatCurrency, calculateLineItemAmount, generateInvoiceNumber } from './utils/calculations';
import { saveDraft, loadDraft, clearDraft, hasDraft } from './utils/storage';
import { getTodayDate, getDueDateFromToday } from './utils/formatters';
import { InvoicePDF } from './components/InvoicePDF';
import { getEmptyInvoiceData, getSampleInvoiceData } from './utils/sampleData';
import {
  saveInvoiceToHistory,
  saveBusinessProfile,
  loadBusinessProfile,
  saveRecentClient,
  exportInvoiceAsJSON,
  importInvoiceFromJSON,
  generateNextInvoiceNumber
} from './utils/invoiceManager';
import { ClientSelector } from './components/ClientSelector';
import { InvoiceHistory } from './components/InvoiceHistory';
import { SettingsModal } from './components/SettingsModal';
import { ConfirmModal } from './components/ConfirmModal';
import { FAQSection } from './components/FAQSection';

// React Select custom styles
const selectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '32px',
    fontSize: '0.75rem',
    borderColor: '#d1d5db',
    '&:hover': { borderColor: '#14b8a6' },
    cursor: 'pointer',
  }),
  option: (base: any, state: any) => ({
    ...base,
    fontSize: '0.75rem',
    backgroundColor: state.isSelected ? '#14b8a6' : state.isFocused ? '#f0fdfa' : 'white',
    color: state.isSelected ? 'white' : '#374151',
    cursor: 'pointer',
  }),
  singleValue: (base: any) => ({
    ...base,
    fontSize: '0.75rem',
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    cursor: 'pointer',
  }),
  clearIndicator: (base: any) => ({
    ...base,
    cursor: 'pointer',
  }),
};

export default function Home() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(getEmptyInvoiceData());
  const [showDiscount, setShowDiscount] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [showClientSelector, setShowClientSelector] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [validationWarnings, setValidationWarnings] = useState<string[]>([]);

  // Confirmation modal state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    type?: 'danger' | 'warning' | 'info' | 'success';
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => { },
  });

  useEffect(() => {
    // Load business profile on mount
    const profile = loadBusinessProfile();
    if (profile) {
      setInvoiceData(prev => ({ ...prev, business: profile }));
      if (profile.logo) {
        setLogoPreview(profile.logo);
      }
    }
  }, []);

  // Auto-save functionality - saves draft every 30 seconds
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (invoiceData.lineItems.some(item => item.description || item.quantity > 0 || item.rate > 0)) {
        saveDraft(invoiceData);
        setLastSaved(new Date());
      }
    }, 30000); // 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [invoiceData]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + S to save draft
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveDraft(invoiceData);
        showNotification('Draft saved!');
        setLastSaved(new Date());
      }
      // Ctrl/Cmd + D to download PDF
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        handleDownloadPDF();
      }
      // Ctrl/Cmd + N to create new invoice
      if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        handleNewInvoice();
      }
      // Ctrl/Cmd + L to add line item
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        addLineItem();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [invoiceData]);

  // Validation on data change
  useEffect(() => {
    const warnings: string[] = [];

    // Date validation
    if (invoiceData.metadata.date && invoiceData.metadata.dueDate) {
      const invoiceDate = new Date(invoiceData.metadata.date);
      const dueDate = new Date(invoiceData.metadata.dueDate);
      if (dueDate < invoiceDate) {
        warnings.push('⚠️ Due date is earlier than invoice date');
      }
    }

    // Tax validation
    if (invoiceData.taxLabel && invoiceData.taxRate === 0) {
      warnings.push('⚠️ Tax label selected but tax rate is 0%');
    }

    // GST validation for India
    if (selectedPreset === 'india-gst' && !invoiceData.business.taxId) {
      warnings.push('⚠️ GSTIN number missing for Indian GST invoice');
    }

    // VAT validation for UK/EU
    if ((selectedPreset === 'uk-vat' || selectedPreset === 'eu-vat') && !invoiceData.business.taxId) {
      warnings.push('⚠️ VAT number missing for VAT invoice');
    }

    // Business info validation
    if (!invoiceData.business.name) {
      warnings.push('⚠️ Business name is required');
    }

    // Client info validation
    if (!invoiceData.client.billTo) {
      warnings.push('⚠️ Client information is required');
    }

    // Line items validation
    if (invoiceData.lineItems.length === 0 || !invoiceData.lineItems.some(item => item.description)) {
      warnings.push('⚠️ Add at least one line item');
    }

    // Payment terms validation
    if (!invoiceData.metadata.paymentTerms) {
      warnings.push('⚠️ Payment terms not specified');
    }

    setValidationWarnings(warnings);
  }, [invoiceData, selectedPreset]);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (showClientSelector || showHistory || showSettings || showPreview || confirmModal.isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [showClientSelector, showHistory, showSettings, showPreview, confirmModal.isOpen]);

  // Close more menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMoreMenu) {
        const target = event.target as HTMLElement;
        if (!target.closest('.more-menu-container')) {
          setShowMoreMenu(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMoreMenu]);


  const totals = calculateInvoiceTotals(
    invoiceData.lineItems,
    invoiceData.taxRate,
    invoiceData.discountAmount,
    invoiceData.discountType,
    invoiceData.shippingAmount,
    invoiceData.amountPaid
  );

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Calculate invoice completion percentage
  const calculateCompletionPercentage = () => {
    let completed = 0;
    const total = 7;

    if (invoiceData.business.name) completed++;
    if (invoiceData.client.billTo) completed++;
    if (invoiceData.lineItems.some(item => item.description && item.quantity > 0 && item.rate > 0)) completed++;
    if (invoiceData.metadata.invoiceNumber) completed++;
    if (invoiceData.metadata.date) completed++;
    if (invoiceData.metadata.dueDate) completed++;
    if (invoiceData.metadata.paymentTerms) completed++;

    return Math.round((completed / total) * 100);
  };

  const completionPercentage = calculateCompletionPercentage();

  // Smart Presets Configuration
  const smartPresets = {
    'india-gst': {
      name: 'India GST',
      taxLabel: 'GST',
      taxRate: 18,
      paymentTerms: 'Net 30',
      currency: 'INR',
      complianceText: 'This invoice complies with Indian GST rules and is accepted by most accounting software including Tally, Zoho Books, and QuickBooks India.',
      requiredFields: ['business.taxId'],
      taxIdLabel: 'GSTIN',
      defaultNotes: '',
    },
    'us-sales-tax': {
      name: 'US Sales Tax',
      taxLabel: 'Sales Tax',
      taxRate: 0,
      paymentTerms: 'Net 30',
      currency: 'USD',
      complianceText: 'This invoice meets US accounting standards and is compatible with QuickBooks, Xero, and FreshBooks.',
      requiredFields: [],
      taxIdLabel: 'Tax ID / EIN',
      defaultNotes: '',
    },
    'freelancer': {
      name: 'Freelancer',
      taxLabel: 'Tax',
      taxRate: 0,
      paymentTerms: 'Net 15',
      currency: 'USD',
      complianceText: 'Professional freelance invoice format accepted by clients worldwide and compatible with PayPal, Stripe, and bank transfers.',
      requiredFields: [],
      taxIdLabel: 'Tax ID',
      defaultNotes: 'Thank you for your business! Payment is due within 15 days.',
    },
    'uk-vat': {
      name: 'UK VAT',
      taxLabel: 'VAT',
      taxRate: 20,
      paymentTerms: 'Net 30',
      currency: 'GBP',
      complianceText: 'This invoice complies with UK VAT regulations and HMRC requirements for Making Tax Digital (MTD).',
      requiredFields: ['business.taxId'],
      taxIdLabel: 'VAT Number',
      defaultNotes: '',
    },
    'eu-vat': {
      name: 'EU VAT',
      taxLabel: 'VAT',
      taxRate: 21,
      paymentTerms: 'Net 30',
      currency: 'EUR',
      complianceText: 'This invoice complies with EU VAT directives and is accepted across all EU member states.',
      requiredFields: ['business.taxId'],
      taxIdLabel: 'VAT Number',
      defaultNotes: '',
    },
  };

  // Apply Smart Preset
  const applySmartPreset = (presetKey: string) => {
    // Handle clearing preset (None - Custom)
    if (!presetKey || presetKey === '') {
      setSelectedPreset('');
      showNotification('✓ Custom setup mode');
      return;
    }

    const preset = smartPresets[presetKey as keyof typeof smartPresets];
    if (!preset) return;

    setSelectedPreset(presetKey);
    setInvoiceData(prev => ({
      ...prev,
      taxLabel: preset.taxLabel,
      taxRate: preset.taxRate,
      metadata: {
        ...prev.metadata,
        paymentTerms: preset.paymentTerms,
      },
      currency: preset.currency,
      notes: preset.defaultNotes || prev.notes,
    }));
    showNotification(`✓ ${preset.name} preset applied!`);
  };

  // Get compliance text based on selected preset
  const getComplianceText = () => {
    if (!selectedPreset) return null;
    const preset = smartPresets[selectedPreset as keyof typeof smartPresets];
    return preset?.complianceText;
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        showNotification('Logo file size must be less than 2MB', 'error');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        setInvoiceData(prev => ({
          ...prev,
          business: { ...prev.business, logo: result },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBusinessChange = (field: keyof InvoiceData['business'], value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      business: { ...prev.business, [field]: value },
    }));
  };

  const handleClientChange = (field: keyof InvoiceData['client'], value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      client: { ...prev.client, [field]: value },
    }));
  };

  const handleMetadataChange = (field: keyof InvoiceData['metadata'], value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      metadata: { ...prev.metadata, [field]: value },
    }));
  };

  const handleLineItemChange = (id: string, field: keyof LineItem, value: string | number | boolean) => {
    setInvoiceData(prev => {
      const updatedItems = prev.lineItems.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = calculateLineItemAmount(
              Number(updatedItem.quantity),
              Number(updatedItem.rate)
            );
          }
          return updatedItem;
        }
        return item;
      });
      return { ...prev, lineItems: updatedItems };
    });
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0,
      taxable: true,
    };
    setInvoiceData(prev => ({
      ...prev,
      lineItems: [...prev.lineItems, newItem],
    }));
  };

  const removeLineItem = (id: string) => {
    if (invoiceData.lineItems.length > 1) {
      setInvoiceData(prev => ({
        ...prev,
        lineItems: prev.lineItems.filter(item => item.id !== id),
      }));
    }
  };

  const duplicateLineItem = (id: string) => {
    const itemToDuplicate = invoiceData.lineItems.find(item => item.id === id);
    if (itemToDuplicate) {
      const newItem = { ...itemToDuplicate, id: Date.now().toString() };
      setInvoiceData(prev => ({
        ...prev,
        lineItems: [...prev.lineItems, newItem],
      }));
    }
  };

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} />).toBlob();
      saveAs(blob, `Invoice-${invoiceData.metadata.invoiceNumber}.pdf`);
      showNotification('PDF downloaded successfully!');

      // Save to history
      saveInvoiceToHistory(invoiceData);
      if (invoiceData.client.billTo) {
        saveRecentClient(invoiceData.client);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      showNotification('Failed to generate PDF', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreviewPDF = async () => {
    try {
      setIsGenerating(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating preview:', error);
      showNotification('Failed to generate preview', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveBusinessProfile = () => {
    saveBusinessProfile(invoiceData.business);
    showNotification('Business profile saved!');
  };

  const handleNewInvoice = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Create New Invoice?',
      message: 'Any unsaved changes will be lost. Do you want to continue?',
      type: 'warning',
      onConfirm: () => {
        const newData = getEmptyInvoiceData();
        newData.metadata.invoiceNumber = generateNextInvoiceNumber();
        const profile = loadBusinessProfile();
        if (profile) {
          newData.business = profile;
          if (profile.logo) {
            setLogoPreview(profile.logo);
          }
        }
        setInvoiceData(newData);
        showNotification('New invoice created!');
      },
    });
  };

  const handleExportJSON = () => {
    exportInvoiceAsJSON(invoiceData);
    showNotification('Invoice exported as JSON!');
  };

  const handleImportJSON = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const data = await importInvoiceFromJSON(file);
        setInvoiceData(data);
        if (data.business.logo) {
          setLogoPreview(data.business.logo);
        }
        showNotification('Invoice imported successfully!');
      } catch (error) {
        showNotification('Failed to import invoice', 'error');
      }
    }
  };

  const handleDuplicateInvoice = () => {
    const newData = { ...invoiceData };
    newData.metadata.invoiceNumber = generateNextInvoiceNumber();
    newData.metadata.date = getTodayDate();
    newData.metadata.dueDate = getDueDateFromToday(30);
    newData.metadata.status = 'draft';
    newData.amountPaid = 0;
    setInvoiceData(newData);
    showNotification('Invoice duplicated!');
  };

  const handleLoadSampleData = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Load Sample Data?',
      message: 'This will replace your current invoice with sample data. Continue?',
      type: 'info',
      onConfirm: () => {
        setInvoiceData(getSampleInvoiceData());
        showNotification('Sample data loaded!');
      },
    });
  };

  const handleClearForm = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Clear Form?',
      message: 'This will reset all fields and clear the draft. This action cannot be undone.',
      type: 'danger',
      onConfirm: () => {
        setInvoiceData(getEmptyInvoiceData());
        setLogoPreview('');
        clearDraft();
        showNotification('Form cleared!');
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is Invoiceza free to use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Invoiceza is 100% free to use with no hidden costs, subscriptions, or premium features. You can create unlimited invoices, download them as PDF, and use all features without any charges. There are no watermarks, no trial periods, and no credit card required.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I download invoices as PDF?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! Every invoice you create can be instantly downloaded as a professional PDF file. The PDF is print-ready, compatible with all devices, and maintains perfect formatting. You can also preview the PDF before downloading to ensure everything looks exactly as you want.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need to sign up or create an account?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No signup or registration is required. You can start creating invoices immediately without providing any personal information, email address, or creating an account. Your privacy is protected, and you won\'t receive any marketing emails or spam.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is this invoice generator suitable for freelancers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Invoiceza is perfect for freelancers, consultants, and self-employed professionals. It includes features specifically designed for freelancers like hourly rate calculations, project-based billing, multiple currency support, and professional templates. You can also save client information for repeat invoicing.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I print invoices directly from the generator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, you can print invoices directly from your browser or download them as PDF first and then print. All invoices are optimized for printing with proper margins, page breaks, and print-safe colors. The layout works perfectly on both color and black-and-white printers.'
                }
              }
            ]
          })
        }}
      />

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in ${notification.type === 'success' ? 'bg-teal-500 text-white' : 'bg-red-500 text-white'
          }`}>
          {notification.message}
        </div>
      )}

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-xl flex flex-col items-center space-y-4 animate-fade-in">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-teal-600"></div>
            <p className="text-gray-700 font-medium">Generating PDF...</p>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
        type={confirmModal.type}
      />

      {/* Modals */}
      {showClientSelector && (
        <ClientSelector
          onSelect={(client) => {
            setInvoiceData(prev => ({ ...prev, client }));
            showNotification('Client loaded!');
          }}
          onClose={() => setShowClientSelector(false)}
        />
      )}

      {showHistory && (
        <InvoiceHistory
          onLoadInvoice={(saved) => {
            setInvoiceData(saved.data);
            if (saved.data.business.logo) {
              setLogoPreview(saved.data.business.logo);
            }
            setShowHistory(false);
            showNotification('Invoice loaded!');
          }}
          onClose={() => setShowHistory(false)}
        />
      )}

      {showSettings && (
        <SettingsModal
          invoiceData={invoiceData}
          onUpdate={(updates) => setInvoiceData(prev => ({ ...prev, ...updates }))}
          onClose={() => {
            setShowSettings(false);
            handleSaveBusinessProfile();
          }}
        />
      )}

      {/* Preview Modal */}
      {showPreview && previewUrl && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full h-full sm:max-w-6xl sm:h-[95vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Invoice Preview</h2>
              <button
                onClick={() => {
                  setShowPreview(false);
                  URL.revokeObjectURL(previewUrl);
                  setPreviewUrl('');
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              >
                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Body - PDF Preview */}
            <div className="flex-1 overflow-hidden bg-gray-800 min-h-0">
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title="Invoice Preview"
                style={{ minHeight: '400px' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 p-3 sm:p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
              <button
                onClick={() => {
                  setShowPreview(false);
                  URL.revokeObjectURL(previewUrl);
                  setPreviewUrl('');
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium order-2 sm:order-1"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownloadPDF();
                  setShowPreview(false);
                  URL.revokeObjectURL(previewUrl);
                  setPreviewUrl('');
                }}
                disabled={isGenerating}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all order-1 sm:order-2"
              >
                <FiDownload className="w-4 h-4" />
                {isGenerating ? 'Generating...' : 'Download PDF'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Editor Toolbar */}
      <div className="bg-white border-b border-gray-200 py-3 sticky xl:top-[65px] lg:top-[64.5px] md:top-[61px] top-[52px] z-29 shadow-sm overflow-visible">
        <div className="container flex items-center justify-between gap-2 overflow-visible">
          <div className="flex items-center gap-2 md:gap-3">
            {/* Currency Selector */}
            <div className="w-28 md:w-40">
              <Select
                instanceId="toolbar-currency-select"
                styles={{
                  ...selectStyles,
                  control: (base: any) => ({
                    ...base,
                    minHeight: '32px',
                    fontSize: '0.75rem',
                    borderColor: '#d1d5db',
                  }),
                }}
                value={{ value: invoiceData.currency, label: `${invoiceData.currency}` }}
                onChange={(option) => option && setInvoiceData(prev => ({ ...prev, currency: option.value }))}
                options={[
                  { value: 'USD', label: 'USD ($) - United States' },
                  { value: 'EUR', label: 'EUR (€) - European Union' },
                  { value: 'GBP', label: 'GBP (£) - United Kingdom' },
                  { value: 'JPY', label: 'JPY (¥) - Japan' },
                  { value: 'CNY', label: 'CNY (¥) - China' },
                  { value: 'INR', label: 'INR (₹) - India' },
                  { value: 'CAD', label: 'CAD ($) - Canada' },
                  { value: 'AUD', label: 'AUD ($) - Australia' },
                  { value: 'CHF', label: 'CHF (Fr) - Switzerland' },
                  { value: 'SGD', label: 'SGD ($) - Singapore' },
                  { value: 'HKD', label: 'HKD ($) - Hong Kong' },
                  { value: 'NZD', label: 'NZD ($) - New Zealand' },
                  { value: 'SEK', label: 'SEK (kr) - Sweden' },
                  { value: 'NOK', label: 'NOK (kr) - Norway' },
                  { value: 'DKK', label: 'DKK (kr) - Denmark' },
                  { value: 'MXN', label: 'MXN ($) - Mexico' },
                  { value: 'BRL', label: 'BRL (R$) - Brazil' },
                  { value: 'ZAR', label: 'ZAR (R) - South Africa' },
                  { value: 'KRW', label: 'KRW (₩) - South Korea' },
                  { value: 'RUB', label: 'RUB (₽) - Russia' },
                  { value: 'TRY', label: 'TRY (₺) - Turkey' },
                  { value: 'AED', label: 'AED (د.إ) - UAE' },
                  { value: 'SAR', label: 'SAR (﷼) - Saudi Arabia' },
                  { value: 'THB', label: 'THB (฿) - Thailand' },
                  { value: 'MYR', label: 'MYR (RM) - Malaysia' },
                  { value: 'IDR', label: 'IDR (Rp) - Indonesia' },
                  { value: 'PHP', label: 'PHP (₱) - Philippines' },
                  { value: 'PLN', label: 'PLN (zł) - Poland' },
                  { value: 'CZK', label: 'CZK (Kč) - Czech Republic' },
                  { value: 'ILS', label: 'ILS (₪) - Israel' },
                ]}
                isSearchable
              />
            </div>
            {lastSaved && (
              <span className="text-xs text-gray-500 whitespace-nowrap hidden lg:inline">
                Auto-saved {new Date(lastSaved).toLocaleTimeString()}
              </span>
            )}
          </div>
          <div className="flex items-center md:gap-2  gap-3 relative overflow-visible">
            {/* Quick Actions */}
            <button
              onClick={() => {
                saveDraft(invoiceData);
                setLastSaved(new Date());
                showNotification('✓ Draft saved!');
              }}
              className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center gap-1 md:px-3 md:py-1.5 rounded md:hover:bg-gray-50"
            >
              <FiSave className="w-4 h-4" />
              <span className="hidden md:inline">Save Draft</span>
            </button>
            <button
              onClick={() => {
                const draft = loadDraft();
                if (draft) {
                  setInvoiceData(draft);
                  if (draft.business.logo) setLogoPreview(draft.business.logo);
                  showNotification('✓ Draft loaded!');
                } else {
                  showNotification('No draft found', 'error');
                }
              }}
              className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center gap-1 md:px-3 md:py-1.5 rounded md:hover:bg-gray-50"
            >
              <FiFolder className="w-4 h-4" />
              <span className="hidden md:inline">Load Draft</span>
            </button>
            <button
              onClick={handleNewInvoice}
              className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center gap-1 md:px-3 md:py-1.5 rounded md:hover:bg-gray-50"
            >
              <FiPlus className="w-4 h-4" />
              <span className="hidden md:inline">New Invoice</span>
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center gap-1 md:px-3 md:py-1.5 rounded md:hover:bg-gray-50"
            >
              <FiClock className="w-4 h-4" />
              <span className="hidden md:inline">History</span>
            </button>
            <div className="relative more-menu-container">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="text-gray-600 hover:text-gray-900 text-xs md:text-sm font-medium flex items-center gap-1 md:px-3 md:py-1.5 rounded md:hover:bg-gray-50"
              >
                <FiMoreVertical className="w-4 h-4" />
                <span className="hidden md:inline">More</span>
              </button>
              {showMoreMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-scale-in transition-all duration-200">
                  <button
                    onClick={() => {
                      handleDuplicateInvoice();
                      setShowMoreMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 rounded-t-lg"
                  >
                    <FiCopy className="w-4 h-4" />
                    Duplicate Invoice
                  </button>
                  <button
                    onClick={() => {
                      handleExportJSON();
                      setShowMoreMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FiDownload className="w-4 h-4" />
                    Export as JSON
                  </button>
                  <label className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                    <FiUpload className="w-4 h-4" />
                    Import from JSON
                    <input
                      type="file"
                      accept=".json"
                      onChange={(e) => {
                        handleImportJSON(e);
                        setShowMoreMenu(false);
                      }}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={() => {
                      handleLoadSampleData();
                      setShowMoreMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FiFile className="w-4 h-4" />
                    Load Sample Data
                  </button>
                  <button
                    onClick={() => {
                      handleClearForm();
                      setShowMoreMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-gray-200 rounded-b-lg"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Clear Form
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section id="invoice-editor" className="py-10 lg:py-16">
        <div className='container'>
          {/* Section Title */}
          <div className="text-center mb-6 lg:mb-10">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Free Invoice Generator – Create & Download Invoices Online
            </h1>
          </div>

          <div className="flex md:flex-row flex-col lg:gap-6 gap-5">
            <div className="flex-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-8 shadow-sm">

                {/* Invoice Progress - Always Visible */}
                <div className="mb-6 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-3">
                  {/* Empty State Helper */}
                  {!invoiceData.business.name && !invoiceData.client.billTo && invoiceData.lineItems.length === 1 && !invoiceData.lineItems[0].description && (
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-teal-200">
                      <div className="flex items-center gap-2">
                        <FiHelpCircle className="w-4 h-4 text-teal-600" />
                        <h4 className="text-sm font-semibold text-gray-900">Get Started</h4>
                      </div>
                      <button
                        onClick={handleLoadSampleData}
                        className="text-xs text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
                      >
                        <FiFile className="w-3 h-3" />
                        Load Sample
                      </button>
                    </div>
                  )}

                  {/* Invoice Progress */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-teal-600">{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                      {invoiceData.business.name ? <FiCheckCircle className="w-3 h-3 text-green-500" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>}
                      <span>Business</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {invoiceData.client.billTo ? <FiCheckCircle className="w-3 h-3 text-green-500" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>}
                      <span>Client</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {invoiceData.lineItems.some(item => item.description && item.quantity > 0 && item.rate > 0) ? <FiCheckCircle className="w-3 h-3 text-green-500" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>}
                      <span>Items</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {invoiceData.metadata.paymentTerms ? <FiCheckCircle className="w-3 h-3 text-green-500" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>}
                      <span>Terms</span>
                    </div>
                  </div>
                </div>

                {/* Invoice Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-8 gap-4 md:gap-5">
                  <div className="flex-1">
                    {/* Logo Upload */}
                    <label className="block cursor-pointer mb-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                      {logoPreview ? (
                        <div className="relative group inline-block">
                          <img src={logoPreview} alt="Logo" className="max-h-16" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                            <span className="text-white text-xs flex items-center gap-1">
                              <FiImage className="w-3 h-3" />
                              Change
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-3 py-2 border-2 border-dashed border-gray-300 rounded hover:border-teal-500 transition-colors cursor-pointer">
                          <FiImage className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Add Logo</span>
                        </div>
                      )}
                    </label>

                    {/* Business Info - Editable */}
                    <div className="text-sm text-gray-600 space-y-3">
                      <input
                        type="text"
                        placeholder="Your Business Name"
                        className="font-semibold text-gray-900 w-full border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 transition-all"
                        value={invoiceData.business.name}
                        onChange={(e) => handleBusinessChange('name', e.target.value)}
                      />
                      <textarea
                        placeholder="Your business address"
                        rows={2}
                        className="w-full border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 resize-none transition-all"
                        value={invoiceData.business.address}
                        onChange={(e) => handleBusinessChange('address', e.target.value)}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="email"
                          placeholder="Email (optional)"
                          className="w-full border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 transition-all"
                          value={invoiceData.business.email}
                          onChange={(e) => handleBusinessChange('email', e.target.value)}
                        />
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          className="w-full border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 transition-all"
                          value={invoiceData.business.phone}
                          onChange={(e) => handleBusinessChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">INVOICE</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex md:justify-end gap-2 items-center">
                        <span className="text-gray-600">#</span>
                        <input
                          type="text"
                          className="w-32 md:text-right border-b border-gray-300 focus:outline-none focus:border-teal-500 px-2 py-1"
                          value={invoiceData.metadata.invoiceNumber}
                          onChange={(e) => handleMetadataChange('invoiceNumber', e.target.value)}
                        />
                      </div>
                      <div className="flex md:justify-end items-center gap-2">
                        <span className="text-gray-600 text-xs">Status:</span>
                        <Select
                          instanceId="invoice-status-select"
                          styles={selectStyles}
                          value={{ value: invoiceData.metadata.status, label: invoiceData.metadata.status.charAt(0).toUpperCase() + invoiceData.metadata.status.slice(1) }}
                          onChange={(option) => option && handleMetadataChange('status', option.value)}
                          options={[
                            { value: 'draft', label: 'Draft' },
                            { value: 'sent', label: 'Sent' },
                            { value: 'paid', label: 'Paid' },
                            { value: 'overdue', label: 'Overdue' },
                            { value: 'cancelled', label: 'Cancelled' },
                          ]}
                          className="w-32"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bill To / Ship To - Editable */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-5 md:mb-8">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-3 flex items-center justify-between">
                      BILL TO
                      <button
                        onClick={() => setShowClientSelector(true)}
                        className="text-xs text-teal-600 hover:text-teal-700 flex items-center gap-1 font-normal transition-colors"
                        title="Load recent client"
                      >
                        <FiUsers className="w-3 h-3" />
                        Recent
                      </button>
                    </div>
                    <textarea
                      placeholder="Who is this for?"
                      rows={3}
                      className={`w-full text-sm text-gray-700 border rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 resize-none transition-all ${!invoiceData.client.billTo && completionPercentage < 100 ? 'border-orange-300 bg-orange-50/30' : 'border-gray-300'
                        }`}
                      value={invoiceData.client.billTo}
                      onChange={(e) => handleClientChange('billTo', e.target.value)}
                    />
                    {!invoiceData.client.billTo && completionPercentage > 30 && (
                      <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                        <FiAlertCircle className="w-3 h-3" />
                        Client information is required
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-3">SHIP TO (OPTIONAL)</div>
                    <textarea
                      placeholder="Shipping address if different"
                      rows={3}
                      className="w-full text-sm text-gray-700 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none px-3 py-2 resize-none transition-all"
                      value={invoiceData.client.shipTo}
                      onChange={(e) => handleClientChange('shipTo', e.target.value)}
                    />
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-8 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date</span>
                    <input
                      type="date"
                      className="text-right border-b border-gray-300 focus:outline-none focus:border-teal-500 px-2 py-1"
                      value={invoiceData.metadata.date}
                      onChange={(e) => handleMetadataChange('date', e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payment Terms</span>
                    <Select
                      instanceId="payment-terms-select"
                      styles={selectStyles}
                      value={invoiceData.metadata.paymentTerms ? { value: invoiceData.metadata.paymentTerms, label: invoiceData.metadata.paymentTerms } : null}
                      onChange={(option) => handleMetadataChange('paymentTerms', option?.value || '')}
                      options={[
                        { value: '', label: 'Select' },
                        { value: 'Due on Receipt', label: 'Due on Receipt' },
                        { value: 'Net 7', label: 'Net 7' },
                        { value: 'Net 15', label: 'Net 15' },
                        { value: 'Net 30', label: 'Net 30' },
                        { value: 'Net 60', label: 'Net 60' },
                        { value: 'Net 90', label: 'Net 90' },
                      ]}
                      className="w-40"
                      isClearable
                      placeholder="Select"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Due Date</span>
                    <input
                      type="date"
                      className="text-right border-b border-gray-300 focus:outline-none focus:border-teal-500 px-2 py-1"
                      value={invoiceData.metadata.dueDate}
                      onChange={(e) => handleMetadataChange('dueDate', e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PO Number</span>
                    <input
                      type="text"
                      className="w-32 text-right border-b border-gray-300 focus:outline-none focus:border-teal-500 px-2 py-1"
                      value={invoiceData.metadata.poNumber}
                      onChange={(e) => handleMetadataChange('poNumber', e.target.value)}
                    />
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="overflow-x-auto -mx-3 sm:-mx-4 md:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full mb-4">
                        <thead>
                          <tr className="bg-gray-800 text-white text-xs md:text-sm">
                            <th className="text-left py-2 px-2 md:px-3">Item</th>
                            <th className="text-center py-2 px-2 w-12 md:w-16">Tax</th>
                            <th className="text-right py-2 px-2 md:px-3 w-16 md:w-20">Qty</th>
                            <th className="text-right py-2 px-2 md:px-3 w-20 md:w-24">Rate</th>
                            <th className="text-right py-2 px-2 md:px-3 w-24 md:w-28">Amount</th>
                            <th className="w-12 md:w-16"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.lineItems.map((item, index) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-2 px-2 md:px-3 min-w-[190px]">
                                <input
                                  type="text"
                                  placeholder="Description of item/service..."
                                  className="w-full focus:outline-none text-sm"
                                  value={item.description}
                                  onChange={(e) => handleLineItemChange(item.id, 'description', e.target.value)}
                                />
                              </td>
                              <td className="py-2 px-2 text-center">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                  checked={item.taxable}
                                  onChange={(e) => handleLineItemChange(item.id, 'taxable', e.target.checked)}
                                  title="Taxable item"
                                />
                              </td>
                              <td className="py-2 px-3">
                                <input
                                  type="number"
                                  min="1"
                                  className="w-full text-right focus:outline-none text-sm"
                                  value={item.quantity}
                                  onChange={(e) => handleLineItemChange(item.id, 'quantity', Number(e.target.value))}
                                />
                              </td>
                              <td className="py-2 px-3">
                                <input
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  className="w-full text-right focus:outline-none text-sm"
                                  value={item.rate}
                                  onChange={(e) => handleLineItemChange(item.id, 'rate', Number(e.target.value))}
                                />
                              </td>
                              <td className="py-2 px-2 md:px-3 text-right text-xs md:text-sm font-medium">
                                {formatCurrency(item.amount, invoiceData.currency)}
                              </td>
                              <td className="py-2 px-1 md:px-2">
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => duplicateLineItem(item.id)}
                                    className="text-gray-400 hover:text-teal-600"
                                    title="Duplicate"
                                  >
                                    <FiCopy className="w-4 h-4" />
                                  </button>
                                  {invoiceData.lineItems.length > 1 && (
                                    <button
                                      onClick={() => removeLineItem(item.id)}
                                      className="text-gray-400 hover:text-red-600"
                                      title="Delete"
                                    >
                                      <FiTrash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                  <button
                    onClick={addLineItem}
                    className="text-teal-500 text-sm hover:text-teal-600 flex items-center gap-1 font-medium"
                  >
                    <FiPlus className="w-4 h-4" />
                    Add Line Item
                  </button>

                  {/* Quick Add Common Items */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span>Quick add:</span>
                    <button
                      onClick={() => {
                        const newItem: LineItem = {
                          id: Date.now().toString(),
                          description: 'Consulting Services',
                          quantity: 1,
                          rate: 100,
                          amount: 100,
                          taxable: true,
                        };
                        setInvoiceData(prev => ({ ...prev, lineItems: [...prev.lineItems, newItem] }));
                      }}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                    >
                      Consulting
                    </button>
                    <button
                      onClick={() => {
                        const newItem: LineItem = {
                          id: Date.now().toString(),
                          description: 'Design Work',
                          quantity: 1,
                          rate: 75,
                          amount: 75,
                          taxable: true,
                        };
                        setInvoiceData(prev => ({ ...prev, lineItems: [...prev.lineItems, newItem] }));
                      }}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                    >
                      Design
                    </button>
                    <button
                      onClick={() => {
                        const newItem: LineItem = {
                          id: Date.now().toString(),
                          description: 'Development',
                          quantity: 1,
                          rate: 150,
                          amount: 150,
                          taxable: true,
                        };
                        setInvoiceData(prev => ({ ...prev, lineItems: [...prev.lineItems, newItem] }));
                      }}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
                    >
                      Development
                    </button>
                  </div>
                </div>

                {/* Notes and Terms */}
                <div className="lg:mb-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Notes */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Notes</div>
                    <textarea
                      placeholder="Notes - any relevant information not already covered"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm resize-none"
                      value={invoiceData.notes}
                      onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>

                  {/* Terms */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Terms & Conditions</div>
                    <textarea
                      placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm resize-none"
                      value={invoiceData.terms}
                      onChange={(e) => setInvoiceData(prev => ({ ...prev, terms: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Invoice Totals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatCurrency(totals.subtotal, invoiceData.currency)}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center gap-1 sm:gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Tax"
                            className="w-full sm:w-32 md:w-40 px-2 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={invoiceData.taxLabel}
                            onChange={(e) => setInvoiceData(prev => ({ ...prev, taxLabel: e.target.value }))}
                          />
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 justify-between sm:justify-end">
                          <div className='flex items-center gap-1 sm:gap-2'>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              placeholder="0"
                              className="w-14 sm:w-16 text-right px-1 sm:px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                              value={invoiceData.taxRate || ''}
                              onChange={(e) => setInvoiceData(prev => ({ ...prev, taxRate: Number(e.target.value) }))}
                            />
                            <span className="text-gray-600 text-sm">%</span>
                          </div>
                          <span className="font-medium text-right min-w-[70px] sm:min-w-[100px] text-sm">{formatCurrency(totals.taxAmount, invoiceData.currency)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 text-sm">
                      <button
                        onClick={() => setShowDiscount(!showDiscount)}
                        className={`text-teal-500 hover:text-teal-600 ${showDiscount ? 'font-medium' : ''}`}
                      >
                        {showDiscount ? '−' : '+'} Discount
                      </button>
                      <button
                        onClick={() => setShowShipping(!showShipping)}
                        className={`text-teal-500 hover:text-teal-600 ${showShipping ? 'font-medium' : ''}`}
                      >
                        {showShipping ? '−' : '+'} Shipping
                      </button>
                    </div>

                    {showDiscount && (
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">Discount</span>
                        <div className="flex items-center gap-1 sm:gap-2 justify-between sm:justify-end flex-1 sm:flex-initial">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0"
                            className="w-20 sm:w-24 text-right px-2 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                            value={invoiceData.discountAmount || ''}
                            onChange={(e) => setInvoiceData(prev => ({ ...prev, discountAmount: Number(e.target.value) }))}
                          />
                          <div className="w-16 sm:w-20">
                            <Select
                              instanceId="discount-type-select"
                              styles={{
                                ...selectStyles,
                                control: (base: any) => ({
                                  ...base,
                                  minHeight: '32px',
                                  fontSize: '0.75rem',
                                  borderColor: '#d1d5db',
                                }),
                                singleValue: (base: any) => ({
                                  ...base,
                                  fontSize: '0.75rem',
                                  textAlign: 'center',
                                }),
                              }}
                              value={{ value: invoiceData.discountType, label: invoiceData.discountType === 'percentage' ? '%' : '$' }}
                              onChange={(option) => option && setInvoiceData(prev => ({ ...prev, discountType: option.value as 'fixed' | 'percentage' }))}
                              options={[
                                { value: 'percentage', label: '%' },
                                { value: 'fixed', label: '$' },
                              ]}
                            />
                          </div>
                          <span className="font-medium min-w-[70px] sm:min-w-[100px] text-right text-red-600 text-xs sm:text-sm">-{formatCurrency(totals.discountAmount, invoiceData.currency)}</span>
                        </div>
                      </div>
                    )}

                    {showShipping && (
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">Shipping</span>
                        <div className="flex items-center gap-1 sm:gap-2 justify-between sm:justify-end flex-1 sm:flex-initial">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0.00"
                            className="w-20 sm:w-24 text-right px-1 sm:px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                            value={invoiceData.shippingAmount || ''}
                            onChange={(e) => setInvoiceData(prev => ({ ...prev, shippingAmount: Number(e.target.value) }))}
                          />
                          <span className="font-medium min-w-[70px] sm:min-w-[100px] text-right text-xs sm:text-sm">{formatCurrency(totals.shippingAmount, invoiceData.currency)}</span>
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-base font-bold">
                        <span className="text-gray-900">Total</span>
                        <span className="text-teal-600">{formatCurrency(totals.total, invoiceData.currency)}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                      <span className="text-gray-600">Amount Paid</span>
                      <div className="flex items-center gap-1 sm:gap-2 justify-between sm:justify-end flex-1 sm:flex-initial">
                        <span className="text-gray-600 text-xs sm:text-sm">{invoiceData.currency === 'USD' ? '$' : invoiceData.currency}</span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0"
                          className="w-20 sm:w-24 text-right px-1 sm:px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                          value={invoiceData.amountPaid || ''}
                          onChange={(e) => setInvoiceData(prev => ({ ...prev, amountPaid: Number(e.target.value) }))}
                        />
                      </div>
                    </div>

                    <div className="border-t-2 border-gray-300 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-gray-900">Balance Due</span>
                        <span className={`${totals.balanceDue > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {formatCurrency(totals.balanceDue, invoiceData.currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pro Tips Section */}
                {completionPercentage >= 70 && (
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <FiHelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">💡 Pro Tips</h4>
                        <ul className="text-xs text-gray-600 space-y-1.5">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>Include clear payment terms to avoid confusion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>Add your logo for a professional look</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>Use "Save Business Profile" to reuse your details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>Press Ctrl+S to save draft anytime</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:max-w-[290px] md:max-w-[220px] w-full space-y-4">
              {/* Primary Actions - More Prominent */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FiFileText className="w-4 h-4 text-teal-500" />
                  Actions
                </h3>
                <div className="space-y-3">
                  {/* Download PDF - Primary Action */}
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
                  >
                    <FiDownload className="w-5 h-5" />
                    {isGenerating ? 'Generating...' : 'Download PDF'}
                  </button>

                  {/* View Preview */}
                  <button
                    onClick={handlePreviewPDF}
                    disabled={isGenerating}
                    className="w-full bg-purple-500 text-white py-2.5 rounded-lg hover:bg-purple-600 font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiFileText className="w-4 h-4" />
                    {isGenerating ? 'Loading...' : 'View Preview'}
                  </button>

                  {/* Load Sample Data */}
                  <button
                    className="w-full bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600 font-medium flex items-center justify-center gap-2 transition-all"
                    onClick={handleLoadSampleData}
                  >
                    <FiFile className="w-4 h-4" />
                    Load Sample Data
                  </button>

                  {/* Clear Form */}
                  <button
                    className="w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 font-medium flex items-center justify-center gap-2 transition-all"
                    onClick={handleClearForm}
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Clear Form
                  </button>
                </div>
              </div>

              {/* Settings Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FiSettings className="w-4 h-4 text-gray-500" />
                  Settings
                </h3>
                <div className="space-y-4">
                  {/* Theme Selector */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Theme</label>
                    <Select
                      instanceId="theme-select"
                      styles={selectStyles}
                      value={{ value: invoiceData.theme, label: invoiceData.theme }}
                      onChange={(option) => option && setInvoiceData(prev => ({ ...prev, theme: option.value }))}
                      options={[
                        { value: 'Classic', label: 'Classic' },
                        { value: 'Modern', label: 'Modern' },
                        { value: 'Minimal', label: 'Minimal' },
                        { value: 'Professional', label: 'Professional' },
                      ]}
                    />
                  </div>

                  {/* Currency Selector */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Currency</label>
                    <Select
                      instanceId="currency-select"
                      styles={selectStyles}
                      value={{ value: invoiceData.currency, label: `${invoiceData.currency}` }}
                      onChange={(option) => option && setInvoiceData(prev => ({ ...prev, currency: option.value }))}
                      options={[
                        { value: 'USD', label: 'USD ($) - United States' },
                        { value: 'EUR', label: 'EUR (€) - European Union' },
                        { value: 'GBP', label: 'GBP (£) - United Kingdom' },
                        { value: 'JPY', label: 'JPY (¥) - Japan' },
                        { value: 'CNY', label: 'CNY (¥) - China' },
                        { value: 'INR', label: 'INR (₹) - India' },
                        { value: 'CAD', label: 'CAD ($) - Canada' },
                        { value: 'AUD', label: 'AUD ($) - Australia' },
                        { value: 'CHF', label: 'CHF (Fr) - Switzerland' },
                        { value: 'SGD', label: 'SGD ($) - Singapore' },
                        { value: 'HKD', label: 'HKD ($) - Hong Kong' },
                        { value: 'NZD', label: 'NZD ($) - New Zealand' },
                        { value: 'SEK', label: 'SEK (kr) - Sweden' },
                        { value: 'NOK', label: 'NOK (kr) - Norway' },
                        { value: 'DKK', label: 'DKK (kr) - Denmark' },
                        { value: 'MXN', label: 'MXN ($) - Mexico' },
                        { value: 'BRL', label: 'BRL (R$) - Brazil' },
                        { value: 'ZAR', label: 'ZAR (R) - South Africa' },
                        { value: 'KRW', label: 'KRW (₩) - South Korea' },
                        { value: 'RUB', label: 'RUB (₽) - Russia' },
                        { value: 'TRY', label: 'TRY (₺) - Turkey' },
                        { value: 'AED', label: 'AED (د.إ) - UAE' },
                        { value: 'SAR', label: 'SAR (﷼) - Saudi Arabia' },
                        { value: 'THB', label: 'THB (฿) - Thailand' },
                        { value: 'MYR', label: 'MYR (RM) - Malaysia' },
                        { value: 'IDR', label: 'IDR (Rp) - Indonesia' },
                        { value: 'PHP', label: 'PHP (₱) - Philippines' },
                        { value: 'PLN', label: 'PLN (zł) - Poland' },
                        { value: 'CZK', label: 'CZK (Kč) - Czech Republic' },
                        { value: 'ILS', label: 'ILS (₪) - Israel' },
                      ]}
                      isSearchable
                    />
                  </div>

                  {/* Smart Presets Selector */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Quick Setup</label>
                    <Select
                      instanceId="quick-setup-select"
                      styles={selectStyles}
                      value={selectedPreset ? { value: selectedPreset, label: smartPresets[selectedPreset as keyof typeof smartPresets].name } : null}
                      onChange={(option) => {
                        if (option) {
                          applySmartPreset(option.value);
                        } else {
                          // Handle clear (when user clicks X or selects None)
                          applySmartPreset('');
                        }
                      }}
                      options={[
                        { value: '', label: 'None - Custom' },
                        { value: 'india-gst', label: '🇮🇳 India GST' },
                        { value: 'us-sales-tax', label: '🇺🇸 US Sales Tax' },
                        { value: 'uk-vat', label: '🇬🇧 UK VAT' },
                        { value: 'eu-vat', label: '🇪🇺 EU VAT' },
                        { value: 'freelancer', label: '💼 Freelancer' },
                      ]}
                      placeholder="Select preset..."
                      isClearable
                    />
                  </div>
                </div>
              </div>

              {/* Invoice Stats */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Invoice Summary</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items:</span>
                    <span className="font-medium">{invoiceData.lineItems.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium capitalize">{invoiceData.metadata.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due:</span>
                    <span className="font-medium">{invoiceData.metadata.dueDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Invoiceza?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The best online invoice maker for creating professional invoices instantly - no signup or login required
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-teal-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3"> Instant Invoice Creation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Create professional invoices in seconds with our fast, intuitive invoice generator. No waiting, no delays.</p>
            </div>
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">No Signup Required</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Start creating invoices immediately without registration, login, or providing personal information. Your privacy matters.</p>
            </div>
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">PDF & Print Ready</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Download invoice as PDF instantly or print directly. Professional formatting guaranteed on all devices and printers.</p>
            </div>
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Free Forever</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">No hidden fees, no subscriptions, no premium features. Create unlimited invoices completely free with our invoice generator.</p>
            </div>
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3"> Works Worldwide</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Supports multiple currencies, tax systems (GST, VAT, Sales Tax), and international formats. Perfect for global businesses.</p>
            </div>
            <div className="group bg-white p-4 md:p-6 md:rounded-2xl rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-pink-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 to-pink-600 md:rounded-xl rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3"> Mobile Friendly</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Create and send invoices from any device - desktop, tablet, or smartphone. Fully responsive design works everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Powerful Features Built for You
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create professional invoices and manage your billing efficiently.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 p-4 sm:p-8 md:p-12">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-teal-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiZap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Smart Presets for Quick Setup</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Pre-configured templates for India GST, US Sales Tax, UK VAT, EU VAT, and Freelancers. Get started in seconds with region-specific settings.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Real-Time Validation</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Inline warnings help you catch errors before sending invoices to clients. Ensure accuracy with smart validation checks.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiDownload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Download Invoice as PDF Instantly</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Download your invoice as a PDF instantly with our invoice generator pdf tool, ready to send to clients.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Client Management System</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Save client information for faster invoice creation next time. Build your client database effortlessly.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Invoice History & Tracking</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Track all your invoices with automatic local storage and easy access. Never lose track of your billing.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiEdit className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Easy Invoice Editing Online</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Edit invoices anytime with our intuitive online editor. Make changes instantly without starting over.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:md:rounded-xl rounded-lg flex items-center justify-center">
                    <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">Professional Invoice Templates</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Choose from multiple professional invoice templates designed for different business types and industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Create Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              How to Create an Invoice in 5 Simple Steps
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Creating a professional invoice takes just a few minutes with our intuitive interface.
            </p>
          </div>
          <div className="relative">
            {/* Connecting Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 via-blue-200 to-purple-200 transform -translate-x-1/2"></div>
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-xl   shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enter Your Business Details</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Add your company name, address, contact information, and logo to personalize your invoice.</p>
                  </div>
                </div>
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl sm:text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="md:w-1/2 md:pr-8 lg:pr-12 hidden md:block"></div>
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl sm:text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-xl   shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Add Client Information</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Select an existing client or add new client details including billing address and contact info.</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-xl   shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">List Your Items or Services</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Add line items with descriptions, quantities, and rates. Calculations happen automatically in real-time.</p>
                  </div>
                </div>
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl sm:text-3xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="md:w-1/2 md:pr-8 lg:pr-12 hidden md:block"></div>
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl sm:text-3xl font-bold text-white">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-xl   shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Configure Tax and Payment Terms</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Add applicable taxes (GST, VAT, Sales Tax) and set payment terms and due dates for your invoice.</p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="md:w-1/2 md:text-right md:pr-8 lg:pr-12 w-full">
                  <div className="bg-white p-4 md:p-6 rounded-xl   shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Download and Send</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Choose your preferred theme, download as PDF, and send to your client. It's that simple!</p>
                  </div>
                </div>
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl sm:text-3xl font-bold text-white">5</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 lg:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Perfect for Freelancers and Small Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The ideal invoice maker for self-employed professionals, freelancers, and growing businesses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-200">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Save Time and Money</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Stop wasting time on complicated invoicing software or expensive accounting tools. Create professional invoices in minutes without any learning curve or monthly fees.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get Paid Faster</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Professional-looking invoices with clear payment terms help you get paid faster. Our templates are designed to be clear, easy to understand, and encourage prompt payment.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Stay Organized</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Keep track of all your invoices with our built-in history feature. Never lose track of who owes you money, when payments are due, or which invoices have been sent.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-7 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Maintain Professionalism</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                First impressions matter. Send polished, professional invoices that reflect the quality of your work and build trust with clients from the very first interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-4 sm:p-8 lg:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Invoice Generator - Simple, Fast & Free
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Create professional invoices in minutes with our free invoice generator. No signup, no login required - just instant, professional invoicing for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white md:rounded-xl rounded-lg md:p-6 p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Login Required</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Start creating invoices immediately with our free invoice generator without login. No passwords, no verification emails, no account management. Our invoice generator no signup approach means you can begin invoicing in seconds, not minutes.
                </p>
                <Link href="/invoice-generator-no-login" className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center gap-1 group">
                  Learn more about no-login invoicing
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white md:rounded-xl rounded-lg md:p-6 p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simple & Quick</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our simple invoice generator online is designed for speed. As a basic invoice generator and easy invoice generator free tool, we focus on what matters. The minimal invoice generator interface and quick invoice generator features help you create invoices in under 2 minutes.
                </p>
                <Link href="/simple-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center gap-1 group">
                  Explore simple invoicing
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white md:rounded-xl rounded-lg md:p-6 p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant PDF Generation</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Create invoice pdf online with our invoice generator pdf free technology. Get instant invoice generator pdf quality with our printable invoice generator. Download invoice pdf files that are ready to send to clients immediately.
                </p>
                <Link href="/invoice-generator-pdf" className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center gap-1 group">
                  Discover PDF features
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white md:rounded-xl rounded-lg md:p-6 p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect for Freelancers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The best invoice generator for freelancers and self-employed professionals. Our freelance invoice generator free tool helps you create professional freelancer invoice pdf files. Ideal invoice for self employed workers and invoice tool for freelancers.
                </p>
                <Link href="/freelance-invoice-generator" className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center gap-1 group">
                  See freelance features
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 md:rounded-xl rounded-lg p-4 sm:p-8 border border-teal-100 mb-8">
              <div className="flex items-start gap-4 sm:flex-row flex-col">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Invoice Templates</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Looking for ready-made templates? Browse our collection of simple invoice template pdf files, basic invoice template free downloads, and blank invoice template pdf options. We offer professional invoice template designs and small business invoice template layouts that you can customize instantly.
                  </p>
                  <Link href="/invoice-template-simple" className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center gap-1 group">
                    Browse invoice templates
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our online Invoicezavides everything you need to create invoice online professionally. As a comprehensive invoice maker and invoice generator free solution, we deliver both simplicity and power. The invoice generator no watermark policy ensures your invoices represent your brand perfectly, while our online invoice generator no account system protects your privacy.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether you need an instant invoice generator pdf for urgent billing or a reliable invoice generator download pdf tool for regular use, our platform handles it all. Join thousands of professionals who trust our free invoice generator for their invoicing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="bg-white rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 md:mb-6 mb-4 text-center">
              Explore Our Invoice Tools & Templates
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/invoice-generator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice Generator</h3>
                <p className="text-sm text-gray-600">Create professional invoices online instantly</p>
              </Link>
              <Link href="/online-invoice-generator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Online Invoice Generator</h3>
                <p className="text-sm text-gray-600">Web-based invoice maker with PDF download</p>
              </Link>
              <Link href="/invoice-maker" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice Maker</h3>
                <p className="text-sm text-gray-600">Simple & fast invoice creation tool</p>
              </Link>
              <Link href="/free-invoice-maker" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Free Invoice Maker</h3>
                <p className="text-sm text-gray-600">100% free with no signup required</p>
              </Link>
              <Link href="/invoice-creator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice Creator</h3>
                <p className="text-sm text-gray-600">Build professional invoices in minutes</p>
              </Link>
              <Link href="/invoice-generator-no-login" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">No Login Invoice Generator</h3>
                <p className="text-sm text-gray-600">Instant access without registration</p>
              </Link>
              <Link href="/invoice-pdf-generator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice PDF Generator</h3>
                <p className="text-sm text-gray-600">Generate and download PDF invoices</p>
              </Link>
              <Link href="/invoice-template-pdf" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice Template PDF</h3>
                <p className="text-sm text-gray-600">Professional PDF templates with preview</p>
              </Link>
              <Link href="/free-invoice-template" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Free Invoice Template</h3>
                <p className="text-sm text-gray-600">PDF, Word & online templates</p>
              </Link>
              <Link href="/simple-invoice-template" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Simple Invoice Template</h3>
                <p className="text-sm text-gray-600">Clean & minimal invoice designs</p>
              </Link>
              <Link href="/freelance-invoice-generator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Freelance Invoice Generator</h3>
                <p className="text-sm text-gray-600">Built for freelancers & self-employed</p>
              </Link>
              <Link href="/freelance-invoice-template" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Freelance Invoice Template</h3>
                <p className="text-sm text-gray-600">Templates designed for freelancers</p>
              </Link>
              <Link href="/simple-invoice-generator" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Simple Invoice Generator</h3>
                <p className="text-sm text-gray-600">Easy & straightforward invoice tool</p>
              </Link>
              <Link href="/invoice-generator-pdf" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Invoice Generator PDF</h3>
                <p className="text-sm text-gray-600">PDF invoice generation tool</p>
              </Link>
              <Link href="/invoice-template-simple" className="group p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Simple Invoice Template</h3>
                <p className="text-sm text-gray-600">Basic templates for quick invoicing</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Markup */}
      <FAQSection />

      {/* CTA Section */}
      <section className="pb-10 lg:pb-16">
        <div className="container">
          <div className="relative text-center p-4 sm:p-7 md:p-10 lg:p-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl md:rounded-3xl">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-6">
              Ready to Create Your First Invoice?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
              Start using our free invoice generator now. No registration required, no credit card needed. Get started in seconds!
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white text-teal-600 px-4 sm:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 sm:gap-3"
            >
              Create Invoice Now
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
              Join thousands of freelancers and small businesses who trust our invoice generator
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}