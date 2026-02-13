# API Reference - Invoiceza

Complete reference for all functions, components, and utilities in the codebase.

## 📚 Table of Contents

- [Utility Functions](#utility-functions)
- [React Components](#react-components)
- [TypeScript Interfaces](#typescript-interfaces)
- [LocalStorage API](#localstorage-api)
- [Constants](#constants)

---

## Utility Functions

### calculations.ts

#### `calculateInvoiceTotals()`

Calculates all invoice totals including subtotal, tax, discount, shipping, and balance due.

```typescript
function calculateInvoiceTotals(
  lineItems: LineItem[],
  taxRate: number,
  discountAmount: number,
  discountType: 'fixed' | 'percentage',
  shippingAmount: number,
  amountPaid: number
): InvoiceTotals
```

**Parameters:**
- `lineItems` - Array of invoice line items
- `taxRate` - Tax rate as percentage (e.g., 10 for 10%)
- `discountAmount` - Discount value (percentage or fixed amount)
- `discountType` - Either 'fixed' (dollar amount) or 'percentage'
- `shippingAmount` - Shipping cost in currency units
- `amountPaid` - Amount already paid by client

**Returns:** `InvoiceTotals` object containing:
```typescript
{
  subtotal: number;        // Sum of all line items
  taxAmount: number;       // Calculated tax (only on taxable items)
  discountAmount: number;  // Calculated discount
  shippingAmount: number;  // Shipping cost (passthrough)
  total: number;           // Grand total
  amountPaid: number;      // Amount paid (passthrough)
  balanceDue: number;      // Remaining balance
}
```

**Example:**
```typescript
const totals = calculateInvoiceTotals(
  [{ quantity: 2, rate: 100, amount: 200, taxable: true }],
  10,    // 10% tax
  20,    // $20 discount
  'fixed',
  15,    // $15 shipping
  0      // $0 paid
);
// Result: { subtotal: 200, taxAmount: 20, discountAmount: 20, total: 215, ... }
```

---

#### `calculateLineItemAmount()`

Calculates the amount for a single line item.

```typescript
function calculateLineItemAmount(
  quantity: number,
  rate: number
): number
```

**Parameters:**
- `quantity` - Number of units
- `rate` - Price per unit

**Returns:** Total amount (quantity × rate)

**Example:**
```typescript
const amount = calculateLineItemAmount(5, 25.50);
// Result: 127.50
```

---

#### `formatCurrency()`

Formats a number as currency with the appropriate symbol.

```typescript
function formatCurrency(
  amount: number,
  currency: string
): string
```

**Parameters:**
- `amount` - Numeric amount to format
- `currency` - Currency code (USD, EUR, GBP, etc.)

**Returns:** Formatted currency string

**Example:**
```typescript
formatCurrency(1234.56, 'USD');  // "$1,234.56"
formatCurrency(1234.56, 'EUR');  // "€1,234.56"
formatCurrency(1234.56, 'GBP');  // "£1,234.56"
```

---

#### `generateInvoiceNumber()`

Generates a unique invoice number based on current date and counter.

```typescript
function generateInvoiceNumber(): string
```

**Returns:** Invoice number in format `INV-YYYYMMDD-XXX`

**Example:**
```typescript
generateInvoiceNumber();
// Result: "INV-20260210-001"
```

---

### storage.ts

#### `saveDraft()`

Saves invoice data to LocalStorage as a draft.

```typescript
function saveDraft(invoice: InvoiceData): void
```

**Parameters:**
- `invoice` - Complete invoice data object

**Storage Key:** `'invoiceDraft'`

**Example:**
```typescript
saveDraft(invoiceData);
```

---

#### `loadDraft()`

Loads saved invoice draft from LocalStorage.

```typescript
function loadDraft(): InvoiceData | null
```

**Returns:** Invoice data or null if no draft exists

**Example:**
```typescript
const draft = loadDraft();
if (draft) {
  setInvoiceData(draft);
}
```

---

#### `clearDraft()`

Removes saved draft from LocalStorage.

```typescript
function clearDraft(): void
```

**Example:**
```typescript
clearDraft();
```

---

#### `hasDraft()`

Checks if a draft exists in LocalStorage.

```typescript
function hasDraft(): boolean
```

**Returns:** `true` if draft exists, `false` otherwise

**Example:**
```typescript
if (hasDraft()) {
  console.log('Draft available');
}
```

---

### invoiceManager.ts

#### `saveInvoiceToHistory()`

Saves an invoice to the history list.

```typescript
function saveInvoiceToHistory(invoice: InvoiceData): void
```

**Parameters:**
- `invoice` - Invoice data to save

**Storage Key:** `'invoiceHistory'`

**Example:**
```typescript
saveInvoiceToHistory(invoiceData);
```

---

#### `loadInvoiceHistory()`

Loads all saved invoices from history.

```typescript
function loadInvoiceHistory(): SavedInvoice[]
```

**Returns:** Array of saved invoices with metadata

**Example:**
```typescript
const history = loadInvoiceHistory();
history.forEach(item => {
  console.log(item.data.metadata.invoiceNumber);
});
```

---

#### `deleteInvoiceFromHistory()`

Removes an invoice from history by ID.

```typescript
function deleteInvoiceFromHistory(id: string): void
```

**Parameters:**
- `id` - Unique invoice ID

**Example:**
```typescript
deleteInvoiceFromHistory('invoice-123');
```

---

#### `saveBusinessProfile()`

Saves business information for reuse.

```typescript
function saveBusinessProfile(business: BusinessInfo): void
```

**Parameters:**
- `business` - Business information object

**Storage Key:** `'businessProfile'`

**Example:**
```typescript
saveBusinessProfile({
  name: 'Acme Corp',
  address: '123 Main St',
  email: 'info@acme.com',
  phone: '555-1234',
  logo: 'data:image/png;base64,...'
});
```

---

#### `loadBusinessProfile()`

Loads saved business profile.

```typescript
function loadBusinessProfile(): BusinessInfo | null
```

**Returns:** Business info or null if not saved

**Example:**
```typescript
const profile = loadBusinessProfile();
if (profile) {
  setInvoiceData(prev => ({ ...prev, business: profile }));
}
```

---

#### `saveRecentClient()`

Adds a client to recent clients list.

```typescript
function saveRecentClient(client: ClientInfo): void
```

**Parameters:**
- `client` - Client information

**Storage Key:** `'recentClients'`

**Example:**
```typescript
saveRecentClient({
  billTo: 'John Doe\n123 Client St',
  shipTo: 'Same as billing'
});
```

---

#### `loadRecentClients()`

Loads list of recent clients.

```typescript
function loadRecentClients(): ClientInfo[]
```

**Returns:** Array of recent clients (max 10)

**Example:**
```typescript
const clients = loadRecentClients();
```

---

#### `generateNextInvoiceNumber()`

Generates next invoice number with auto-increment.

```typescript
function generateNextInvoiceNumber(): string
```

**Returns:** Next invoice number

**Storage Key:** `'invoiceCounter'`

**Example:**
```typescript
const nextNumber = generateNextInvoiceNumber();
// Result: "INV-20260210-002" (if previous was 001)
```

---

#### `exportInvoiceAsJSON()`

Exports invoice as downloadable JSON file.

```typescript
function exportInvoiceAsJSON(invoice: InvoiceData): void
```

**Parameters:**
- `invoice` - Invoice data to export

**Example:**
```typescript
exportInvoiceAsJSON(invoiceData);
// Downloads: invoice-INV-20260210-001.json
```

---

#### `importInvoiceFromJSON()`

Imports invoice from JSON file.

```typescript
async function importInvoiceFromJSON(file: File): Promise<InvoiceData>
```

**Parameters:**
- `file` - JSON file to import

**Returns:** Promise resolving to invoice data

**Throws:** Error if file is invalid

**Example:**
```typescript
const file = event.target.files[0];
try {
  const invoice = await importInvoiceFromJSON(file);
  setInvoiceData(invoice);
} catch (error) {
  console.error('Import failed:', error);
}
```

---

### formatters.ts

#### `getTodayDate()`

Gets today's date in YYYY-MM-DD format.

```typescript
function getTodayDate(): string
```

**Returns:** Date string

**Example:**
```typescript
getTodayDate();
// Result: "2026-02-10"
```

---

#### `getDueDateFromToday()`

Calculates due date by adding days to today.

```typescript
function getDueDateFromToday(days: number): string
```

**Parameters:**
- `days` - Number of days to add

**Returns:** Due date in YYYY-MM-DD format

**Example:**
```typescript
getDueDateFromToday(30);
// Result: "2026-03-12" (30 days from today)
```

---

### sampleData.ts

#### `getEmptyInvoiceData()`

Creates a new blank invoice with default values.

```typescript
function getEmptyInvoiceData(): InvoiceData
```

**Returns:** Empty invoice data structure

**Example:**
```typescript
const newInvoice = getEmptyInvoiceData();
setInvoiceData(newInvoice);
```

---

#### `getSampleInvoiceData()`

Creates a pre-filled sample invoice for demonstration.

```typescript
function getSampleInvoiceData(): InvoiceData
```

**Returns:** Sample invoice with example data

**Example:**
```typescript
const sample = getSampleInvoiceData();
setInvoiceData(sample);
```

---

## React Components

### InvoicePDF

PDF template component for rendering invoices.

```typescript
interface InvoicePDFProps {
  data: InvoiceData;
  totals: InvoiceTotals;
}

function InvoicePDF({ data, totals }: InvoicePDFProps): JSX.Element
```

**Props:**
- `data` - Complete invoice data
- `totals` - Calculated totals

**Usage:**
```typescript
import { InvoicePDF } from './components/InvoicePDF';
import { pdf } from '@react-pdf/renderer';

const blob = await pdf(<InvoicePDF data={invoiceData} totals={totals} />).toBlob();
```

---

### ClientSelector

Modal for selecting from recent clients.

```typescript
interface ClientSelectorProps {
  onSelect: (client: ClientInfo) => void;
  onClose: () => void;
}

function ClientSelector({ onSelect, onClose }: ClientSelectorProps): JSX.Element
```

**Props:**
- `onSelect` - Callback when client is selected
- `onClose` - Callback to close modal

**Usage:**
```typescript
<ClientSelector
  onSelect={(client) => {
    setInvoiceData(prev => ({ ...prev, client }));
  }}
  onClose={() => setShowClientSelector(false)}
/>
```

---

### InvoiceHistory

Modal for viewing and loading past invoices.

```typescript
interface InvoiceHistoryProps {
  onLoadInvoice: (saved: SavedInvoice) => void;
  onClose: () => void;
}

function InvoiceHistory({ onLoadInvoice, onClose }: InvoiceHistoryProps): JSX.Element
```

**Props:**
- `onLoadInvoice` - Callback when invoice is loaded
- `onClose` - Callback to close modal

**Usage:**
```typescript
<InvoiceHistory
  onLoadInvoice={(saved) => {
    setInvoiceData(saved.data);
  }}
  onClose={() => setShowHistory(false)}
/>
```

---

### ConfirmModal

Confirmation dialog component.

```typescript
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: 'danger' | 'warning' | 'info' | 'success';
}

function ConfirmModal(props: ConfirmModalProps): JSX.Element
```

**Props:**
- `isOpen` - Whether modal is visible
- `onClose` - Callback to close modal
- `onConfirm` - Callback when confirmed
- `title` - Modal title
- `message` - Confirmation message
- `type` - Visual style (optional)

**Usage:**
```typescript
<ConfirmModal
  isOpen={confirmModal.isOpen}
  onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
  onConfirm={confirmModal.onConfirm}
  title="Delete Invoice?"
  message="This action cannot be undone."
  type="danger"
/>
```

---

### SettingsModal

Settings configuration modal.

```typescript
interface SettingsModalProps {
  invoiceData: InvoiceData;
  onUpdate: (updates: Partial<InvoiceData>) => void;
  onClose: () => void;
}

function SettingsModal(props: SettingsModalProps): JSX.Element
```

**Props:**
- `invoiceData` - Current invoice data
- `onUpdate` - Callback with updated settings
- `onClose` - Callback to close modal

**Usage:**
```typescript
<SettingsModal
  invoiceData={invoiceData}
  onUpdate={(updates) => setInvoiceData(prev => ({ ...prev, ...updates }))}
  onClose={() => setShowSettings(false)}
/>
```

---

### LoadingSpinner

Loading indicator component.

```typescript
interface LoadingSpinnerProps {
  message?: string;
}

function LoadingSpinner({ message }: LoadingSpinnerProps): JSX.Element
```

**Props:**
- `message` - Optional loading message

**Usage:**
```typescript
{isGenerating && <LoadingSpinner message="Generating PDF..." />}
```

---

## TypeScript Interfaces

### InvoiceData

```typescript
interface InvoiceData {
  business: BusinessInfo;
  client: ClientInfo;
  metadata: InvoiceMetadata;
  lineItems: LineItem[];
  taxRate: number;
  taxLabel: string;
  discountAmount: number;
  discountType: 'fixed' | 'percentage';
  shippingAmount: number;
  amountPaid: number;
  notes: string;
  terms: string;
  theme: string;
  currency: string;
}
```

### LineItem

```typescript
interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  taxable: boolean;
}
```

### BusinessInfo

```typescript
interface BusinessInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  logo: string;
}
```

### ClientInfo

```typescript
interface ClientInfo {
  billTo: string;
  shipTo: string;
}
```

### InvoiceMetadata

```typescript
interface InvoiceMetadata {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  paymentTerms: string;
  poNumber: string;
}
```

### InvoiceTotals

```typescript
interface InvoiceTotals {
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingAmount: number;
  total: number;
  amountPaid: number;
  balanceDue: number;
}
```

---

## LocalStorage API

### Storage Keys

| Key | Type | Description |
|-----|------|-------------|
| `invoiceDraft` | `InvoiceData` | Current draft invoice |
| `invoiceHistory` | `SavedInvoice[]` | Array of saved invoices |
| `businessProfile` | `BusinessInfo` | Saved business information |
| `recentClients` | `ClientInfo[]` | Recent clients list (max 10) |
| `invoiceCounter` | `number` | Invoice number counter |

### Storage Limits

- **Total Limit:** ~5-10MB per domain
- **Recommended:** Keep history < 100 items
- **Logo Size:** Max 2MB (enforced)

---

## Constants

### Currency Codes

```typescript
const CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'CNY', 'INR', 'CAD', 'AUD',
  'CHF', 'SGD', 'HKD', 'NZD', 'SEK', 'NOK', 'DKK', 'MXN',
  'BRL', 'ZAR', 'KRW', 'RUB', 'TRY', 'AED', 'SAR', 'THB',
  'MYR', 'IDR', 'PHP', 'PLN', 'CZK', 'ILS'
];
```

### Invoice Themes

```typescript
const THEMES = ['Classic', 'Modern', 'Minimal', 'Professional'];
```

### Payment Terms

```typescript
const PAYMENT_TERMS = [
  'Due on Receipt',
  'Net 7',
  'Net 15',
  'Net 30',
  'Net 60',
  'Net 90'
];
```

### Invoice Status

```typescript
type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
```

---

**End of API Reference**
