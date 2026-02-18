import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { InvoiceData, InvoiceTotals } from '../types/invoice';
import { formatCurrency } from '../utils/calculations';

// Helper function to break long text without spaces
const breakLongText = (text: string, maxLength: number = 50): string => {
    if (!text || text.length <= maxLength) return text;

    // If text has spaces, let it wrap naturally
    if (text.includes(' ') || text.includes('\n')) return text;

    // Break long text without spaces into chunks
    const chunks: string[] = [];
    for (let i = 0; i < text.length; i += maxLength) {
        chunks.push(text.slice(i, i + maxLength));
    }
    return chunks.join('\n');
};

// Theme configurations
const themeColors = {
    Classic: {
        primary: '#14b8a6',
        headerBg: '#1f2937',
        headerText: '#ffffff',
        accent: '#14b8a6',
    },
    Modern: {
        primary: '#3b82f6',
        headerBg: '#1e40af',
        headerText: '#ffffff',
        accent: '#3b82f6',
    },
    Minimal: {
        primary: '#000000',
        headerBg: '#f3f4f6',
        headerText: '#111827',
        accent: '#6b7280',
    },
    Professional: {
        primary: '#7c3aed',
        headerBg: '#5b21b6',
        headerText: '#ffffff',
        accent: '#7c3aed',
    },
};

const getThemeStyles = (theme: string) => {
    const colors = themeColors[theme as keyof typeof themeColors] || themeColors.Classic;

    return StyleSheet.create({
        page: {
            padding: 35,
            fontSize: 10,
            fontFamily: 'Helvetica',
            color: '#111827',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#e5e7eb',
        },
        logo: {
            width: 60,
            height: 60,
            objectFit: 'contain',
            marginBottom: 6,
        },
        businessInfo: {
            fontSize: 9,
            color: '#6b7280',
            marginBottom: 2,
            lineHeight: 1.3,
            maxWidth: 250,
        },
        invoiceTitle: {
            fontSize: 28,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 4,
            textAlign: 'right',
            letterSpacing: 1,
        },
        invoiceNumber: {
            fontSize: 10,
            color: '#6b7280',
            textAlign: 'right',
        },
        section: {
            marginBottom: 15,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
        },
        column: {
            width: '48%',
        },
        label: {
            fontSize: 8,
            color: '#9ca3af',
            marginBottom: 3,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: 0.5,
        },
        value: {
            fontSize: 9,
            color: '#111827',
            marginBottom: 2,
            lineHeight: 1.3,
        },
        table: {
            marginTop: 15,
            marginBottom: 15,
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: colors.headerBg,
            padding: 8,
            color: colors.headerText,
            fontWeight: 'bold',
            fontSize: 9,
        },
        tableRow: {
            flexDirection: 'row',
            padding: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#f3f4f6',
            fontSize: 9,
        },
        tableCol1: {
            width: '50%',
            paddingRight: 5,
        },
        tableCol2: {
            width: '15%',
            textAlign: 'right',
        },
        tableCol3: {
            width: '15%',
            textAlign: 'right',
        },
        tableCol4: {
            width: '20%',
            textAlign: 'right',
        },
        totalsSection: {
            marginTop: 15,
            alignItems: 'flex-end',
        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '45%',
            marginBottom: 6,
            paddingVertical: 1,
        },
        totalLabel: {
            fontSize: 9,
            color: '#6b7280',
        },
        totalValue: {
            fontSize: 9,
            color: '#111827',
            textAlign: 'right',
        },
        grandTotalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '45%',
            marginTop: 8,
            paddingTop: 8,
            borderTopWidth: 2,
            borderTopColor: colors.accent,
            paddingVertical: 2,
        },
        grandTotalLabel: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#111827',
        },
        grandTotalValue: {
            fontSize: 11,
            fontWeight: 'bold',
            color: colors.accent,
            textAlign: 'right',
        },
        notes: {
            marginTop: 15,
            padding: 10,
            backgroundColor: '#f9fafb',
            borderRadius: 4,
        },
        notesTitle: {
            fontSize: 9,
            fontWeight: 'bold',
            marginBottom: 4,
            color: '#374151',
        },
        notesText: {
            fontSize: 8,
            color: '#6b7280',
            lineHeight: 1.4,
        },
        detailsGrid: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            marginTop: 5,
            fontSize: 9,
        },
        detailItem: {
            marginBottom: 8,
        },
    });
};

interface InvoicePDFProps {
    data: InvoiceData;
    totals: InvoiceTotals;
    documentTitle?: string;
}

export const InvoicePDF: React.FC<InvoicePDFProps> = ({ data, totals, documentTitle = 'INVOICE' }) => {
    const styles = getThemeStyles(data.theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        {data.business.logo && (
                            <Image src={data.business.logo} style={styles.logo} />
                        )}
                        <Text style={styles.businessInfo}>{breakLongText(data.business.name, 35)}</Text>
                        <Text style={styles.businessInfo}>{breakLongText(data.business.address, 35)}</Text>
                        {data.business.email && (
                            <Text style={styles.businessInfo}>{breakLongText(data.business.email, 35)}</Text>
                        )}
                        {data.business.phone && (
                            <Text style={styles.businessInfo}>{data.business.phone}</Text>
                        )}
                    </View>
                    <View>
                        <Text style={styles.invoiceTitle}>{documentTitle}</Text>
                        <Text style={styles.invoiceNumber}>#{data.metadata.invoiceNumber}</Text>
                    </View>
                </View>

                {/* Bill To / Ship To / Received From */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>{documentTitle === 'RECEIPT' ? 'Received From' : 'Bill To'}</Text>
                        <Text style={styles.value}>{breakLongText(data.client.billTo, 35)}</Text>
                    </View>
                    {(data.client.shipTo || data.metadata.receivedBy) && (
                        <View style={styles.column}>
                            <Text style={styles.label}>{documentTitle === 'RECEIPT' ? 'Received By' : 'Ship To'}</Text>
                            <Text style={styles.value}>
                                {documentTitle === 'RECEIPT'
                                    ? breakLongText(data.metadata.receivedBy || '', 35)
                                    : breakLongText(data.client.shipTo || '', 35)}
                            </Text>
                        </View>
                    )}
                </View>

                {/* Document Details */}
                <View style={styles.detailsGrid}>
                    <View>
                        <View style={styles.detailItem}>
                            <Text style={styles.label}>Date</Text>
                            <Text style={styles.value}>{data.metadata.date}</Text>
                        </View>
                        {(data.metadata.dueDate || data.metadata.validUntil) && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>{data.metadata.validUntil ? 'Valid Until' : 'Due Date'}</Text>
                                <Text style={styles.value}>{data.metadata.validUntil || data.metadata.dueDate}</Text>
                            </View>
                        )}
                    </View>
                    <View>
                        {data.metadata.paymentTerms && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>Payment Terms</Text>
                                <Text style={styles.value}>{data.metadata.paymentTerms}</Text>
                            </View>
                        )}
                        {data.metadata.paymentMethod && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>Payment Method</Text>
                                <Text style={styles.value}>{data.metadata.paymentMethod}</Text>
                            </View>
                        )}
                        {data.metadata.paymentDate && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>Payment Date</Text>
                                <Text style={styles.value}>{data.metadata.paymentDate}</Text>
                            </View>
                        )}
                        {data.metadata.poNumber && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>PO Number</Text>
                                <Text style={styles.value}>{data.metadata.poNumber}</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Project / Scope for Quotations/Estimates */}
                {data.metadata.projectName && (
                    <View style={styles.section}>
                        <Text style={styles.label}>Project Name</Text>
                        <Text style={styles.value}>{data.metadata.projectName}</Text>
                    </View>
                )}

                {data.scopeOfWork && (
                    <View style={styles.section}>
                        <Text style={styles.label}>Scope of Work</Text>
                        <Text style={styles.value}>{data.scopeOfWork}</Text>
                    </View>
                )}

                {/* Line Items Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCol1}>Item</Text>
                        <Text style={styles.tableCol2}>Quantity</Text>
                        <Text style={styles.tableCol3}>Rate</Text>
                        <Text style={styles.tableCol4}>Amount</Text>
                    </View>

                    {data.lineItems.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCol1}>{breakLongText(item.description, 45)}</Text>
                            <Text style={styles.tableCol2}>{item.quantity}</Text>
                            <Text style={styles.tableCol3}>{formatCurrency(item.rate, data.currency)}</Text>
                            <Text style={styles.tableCol4}>{formatCurrency(item.amount, data.currency)}</Text>
                        </View>
                    ))}
                </View>

                {/* PAID STAMP for Receipts */}
                {documentTitle === 'RECEIPT' && (data.metadata.status === 'paid' || (data.amountPaid > 0 && totals.balanceDue <= 0)) && (
                    <View style={{
                        position: 'absolute',
                        top: 280,
                        right: 120,
                        borderWidth: 4,
                        borderColor: '#10b981',
                        borderRadius: 8,
                        padding: 10,
                        opacity: 0.3,
                        transform: 'rotate(-20deg)',
                    }}>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            color: '#10b981',
                        }}>PAID</Text>
                    </View>
                )}

                {/* Totals */}
                <View style={styles.totalsSection}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Subtotal:</Text>
                        <Text style={styles.totalValue}>{formatCurrency(totals.subtotal, data.currency)}</Text>
                    </View>

                    {data.taxRate > 0 && (
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Tax ({data.taxRate}%):</Text>
                            <Text style={styles.totalValue}>{formatCurrency(totals.taxAmount, data.currency)}</Text>
                        </View>
                    )}

                    {data.discountAmount > 0 && (
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Discount:</Text>
                            <Text style={styles.totalValue}>-{formatCurrency(totals.discountAmount, data.currency)}</Text>
                        </View>
                    )}

                    {data.shippingAmount > 0 && (
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Shipping:</Text>
                            <Text style={styles.totalValue}>{formatCurrency(totals.shippingAmount, data.currency)}</Text>
                        </View>
                    )}

                    <View style={styles.grandTotalRow}>
                        <Text style={styles.grandTotalLabel}>Total:</Text>
                        <Text style={styles.grandTotalValue}>{formatCurrency(totals.total, data.currency)}</Text>
                    </View>

                    {data.amountPaid > 0 && (
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Amount Paid:</Text>
                            <Text style={styles.totalValue}>{formatCurrency(totals.amountPaid, data.currency)}</Text>
                        </View>
                    )}

                    <View style={styles.totalRow}>
                        <Text style={styles.grandTotalLabel}>Balance Due:</Text>
                        <Text style={styles.grandTotalValue}>{formatCurrency(totals.balanceDue, data.currency)}</Text>
                    </View>
                </View>

                {/* Notes */}
                {data.notes && (
                    <View style={styles.notes}>
                        <Text style={styles.notesTitle}>Notes</Text>
                        <Text style={styles.notesText}>{breakLongText(data.notes, 80)}</Text>
                    </View>
                )}

                {/* Disclaimer */}
                {data.disclaimer && (
                    <View style={styles.notes}>
                        <Text style={styles.notesTitle}>Disclaimer</Text>
                        <Text style={styles.notesText}>{breakLongText(data.disclaimer, 80)}</Text>
                    </View>
                )}

                {/* Terms */}
                {data.terms && (
                    <View style={styles.notes}>
                        <Text style={styles.notesTitle}>Terms</Text>
                        <Text style={styles.notesText}>{breakLongText(data.terms, 80)}</Text>
                    </View>
                )}
            </Page>
        </Document>
    );
};
