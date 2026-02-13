# Developer Guide - Invoiceza

Complete technical documentation for developers working on this project.

## 🎯 Quick Start for Developers

### First Time Setup

```bash
# 1. Clone and install
git clone <repository-url>
cd invoice-generator-pro
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

### Development Workflow

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

## 🏗️ Architecture Overview

### Technology Stack

```
┌─────────────────────────────────────┐
│         Next.js 15 (App Router)     │
│  ┌───────────────────────────────┐  │
│  │      React 19 Components      │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   TypeScript 5.0        │  │  │
│  │  │   Tailwind CSS 4.0      │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
         ↓                    ↓
   LocalStorage          @react-pdf/renderer
   (Browser)             (PDF Generation)
```

### Data Flow

```
User Input → React State → Calculations → Display
                ↓
          LocalStorage (Auto-save)
                ↓
          PDF Generation (On demand)
```

## 📂 Detailed File Structure

### Core Application Files

```
app/
├── page.tsx                    # Main invoice editor (1200+ lines)
│   ├── State Management        # useState hooks for invoice data
│   ├── Auto-save Logic         # useEffect for 30s auto-save
│   ├── Keyboard Shortcuts      # useEffect for Ctrl+S, Ctrl+D, etc.
│   ├── Invoice Form            # Business info, client, line items
│   ├── Calculations Display    # Totals, tax, discount
│   └── Action Buttons          # Download, save, load, etc.
│
├── layout.tsx                  # Root layout with SEO
│   ├── Meta Tags               # Title, description, OG tags
│   ├── Schema Markup           # JSON-LD structured data
│   └── Global Providers        # (None currently, add if needed)
│
└── globals.css                 # Global styles
    ├── Tailwind Imports        # @import "tailwindcss"
    ├── CSS Variables           # Color palette, spacing
    ├── Custom Animations       # fadeIn, slideIn, scaleIn
    └── Utility Classes         # Container, cursor styles
```

### Component Files

```
components/
├── InvoicePDF.tsx              # PDF template (300+ lines)
│   ├── PDF Styles              # StyleSheet.create()
│   ├── Document Structure      # Page, View, Text components
│   ├── Theme Support           # Different color schemes
│   └── Dynamic Content         # Line items, totals rendering
│
├── ClientSelector.tsx          # Client selection modal
│   ├── Recent Clients List     # Load from LocalStorage
│   ├── Client Selection        # onClick handler
│   └── Modal UI                # Overlay, close button
│
├── InvoiceHistory.tsx          # Invoice history viewer
│   ├── Invoice List            # All saved invoices
│   ├── Load Invoice            # Populate form with saved data
│   ├── Delete Invoice          # Remove from history
│   └── Preview Display         # Show invoice details
│
├── ConfirmModal.tsx            # Confirmation dialogs
│   ├── Modal Types             # danger, warning, info, success
│   ├── Confirm/Cancel          # Action buttons
│   └── Custom Messages         # Title, message props
│
├── SettingsModal.tsx           # Settings dialog
│   ├── Business Settings       # Default business info
│   ├── Invoice Settings        # Default terms, notes
│   └── Preferences             # Theme, currency defaults
│
├── LoadingSpinner.tsx          # Loading indicator
│   └── Spinner Animation       # CSS animation
│
└── Tooltip.tsx                 # Tooltip component
    └── Hover Display           # Show help text
```

### Utility Files

```
utils/
├── calculations.ts             # Invoice math
│   ├── calculateInvoiceTotals()
│   │   ├── Subtotal calculation
│   │   ├── Tax calculation (taxable items only)
│   │   ├── Discount calculation (% or fixed)
│   │   ├── Shipping addition
│   │   ├── Amount paid subtraction
│   │   └── Balance due calculation
│   │
│   ├── calculateLineItemAmount()
│   │   └── quantity × rate
│   │
│   ├── formatCurrency()
│   │   └── Format number with currency symbol
│   │
│   └── generateInvoiceNumber()
│       └── Format: INV-YYYYMMDD-XXX
│
├── storage.ts                  # LocalStorage helpers
│   ├── saveDraft()             # Save invoice to 'invoiceDraft'
│   ├── loadDraft()             # Load from 'invoiceDraft'
│   ├── clearDraft()            # Remove 'invoiceDraft'
│   └── hasDraft()              # Check if draft exists
│
├── invoiceManager.ts           # Invoice CRUD
│   ├── saveInvoiceToHistory()  # Add to 'invoiceHistory' array
│   ├── loadInvoiceHistory()    # Get all invoices
│   ├── deleteInvoiceFromHistory() # Remove by ID
│   ├── saveBusinessProfile()   # Save to 'businessProfile'
│   ├── loadBusinessProfile()   # Load business info
│   ├── saveRecentClient()      # Add to 'recentClients' array
│   ├── loadRecentClients()     # Get recent clients
│   ├── generateNextInvoiceNumber() # Auto-increment
│   ├── exportInvoiceAsJSON()   # Download JSON file
│   └── importInvoiceFromJSON() # Parse JSON file
│
├── formatters.ts               # Date/string formatters
│   ├── getTodayDate()          # YYYY-MM-DD format
│   ├── getDueDateFromToday()   # Add days to today
│   └── formatDate()            # Custom date formatting
│
└── sampleData.ts               # Sample data generators
    ├── getEmptyInvoiceData()   # New blank invoice
    └── getSampleInvoiceData()  # Pre-filled example
```

### Type Definitions

```
types/
└── invoice.ts                  # TypeScript interfaces
    ├── InvoiceData             # Main invoice structure
    ├── LineItem                # Invoice line item
    ├── BusinessInfo            # Business details
    ├── ClientInfo              # Client details
    ├── InvoiceMetadata         # Invoice meta (number, dates, status)
    └── InvoiceTotals           # Calculated totals
```

## 🔄 State Management

### Main State (app/page.tsx)

```typescript
// Invoice data state
const [invoiceData, setInvoiceData] = useState<InvoiceData>(getEmptyInvoiceData());

// UI state
const [showDiscount, setShowDiscount] = useState(false);
const [showShipping, setShowShipping] = useState(false);
const [logoPreview, setLogoPreview] = useState<string>('');
const [showClientSelector, setShowClientSelector] = useState(false);
const [showHistory, setShowHistory] = useState(false);
const [showSettings, setShowSettings] = useState(false);
const [notification, setNotification] = useState<{message: string; type: 'success' | 'error'} | null>(null);
const [isGenerating, setIsGenerating] = useState(false);
const [lastSaved, setLastSaved] = useState<Date | null>(null);

// Modal state
const [confirmModal, setConfirmModal] = useState({
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  type?: 'danger' | 'warning' | 'info' | 'success';
});
```

### State Update Patterns

```typescript
// Update business info
const handleBusinessChange = (field: keyof InvoiceData['business'], value: string) => {
  setInvoiceData(prev => ({
    ...prev,
    business: { ...prev.business, [field]: value }
  }));
};

// Update line item
const handleLineItemChange = (id: string, field: keyof LineItem, value: string | number | boolean) => {
  setInvoiceData(prev => ({
    ...prev,
    lineItems: prev.lineItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    )
  }));
};

// Add line item
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
    lineItems: [...prev.lineItems, newItem]
  }));
};
```

## 💾 LocalStorage Schema

### Storage Keys

```typescript
// Draft storage
'invoiceDraft': InvoiceData

// Invoice history
'invoiceHistory': Array<{
  id: string;
  data: InvoiceData;
  createdAt: string;
  updatedAt: string;
}>

// Business profile
'businessProfile': {
  name: string;
  address: string;
  email: string;
  phone: string;
  logo: string;
}

// Recent clients
'recentClients': Array<{
  billTo: string;
  shipTo: string;
  lastUsed: string;
}>

// Invoice counter
'invoiceCounter': number
```

### Storage Limits

- **LocalStorage Limit:** ~5-10MB per domain
- **Recommended:** Keep invoice history < 100 items
- **Logo Size:** Max 2MB (enforced in code)

## 🎨 Styling Guide

### Tailwind Classes

```typescript
// Color Palette
primary: 'teal-500' (#14b8a6)
secondary: 'blue-500'
success: 'green-500'
warning: 'yellow-500'
error: 'red-500'
gray: 'gray-50' to 'gray-900'

// Common Patterns
button: 'px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors'
input: 'px-3 py-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
card: 'bg-white rounded-lg border border-gray-200 p-4 shadow-sm'
modal: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50'
```

### Custom CSS Variables

```css
/* globals.css */
:root {
  --primary-500: #14b8a6;
  --gray-50: #f9fafb;
  /* ... more variables */
}
```

### Responsive Breakpoints

```typescript
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
```

## 🔌 API Integration (Future)

### Recommended Structure

```typescript
// api/invoices/route.ts (if adding backend)
export async function POST(request: Request) {
  const invoice = await request.json();
  // Save to database
  return Response.json({ success: true });
}

export async function GET(request: Request) {
  // Get invoices from database
  return Response.json({ invoices: [] });
}
```

## 🧪 Testing Strategy

### Unit Tests (Recommended)

```typescript
// __tests__/utils/calculations.test.ts
import { calculateInvoiceTotals } from '@/app/utils/calculations';

describe('calculateInvoiceTotals', () => {
  it('should calculate subtotal correctly', () => {
    const lineItems = [
      { quantity: 2, rate: 100, amount: 200, taxable: true },
      { quantity: 1, rate: 50, amount: 50, taxable: false }
    ];
    const result = calculateInvoiceTotals(lineItems, 10, 0, 'fixed', 0, 0);
    expect(result.subtotal).toBe(250);
  });
});
```

### Component Tests (Recommended)

```typescript
// __tests__/components/ConfirmModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmModal } from '@/app/components/ConfirmModal';

describe('ConfirmModal', () => {
  it('should call onConfirm when confirm button clicked', () => {
    const onConfirm = jest.fn();
    render(
      <ConfirmModal 
        isOpen={true}
        onClose={() => {}}
        onConfirm={onConfirm}
        title="Test"
        message="Test message"
      />
    );
    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalled();
  });
});
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables

```env
# .env.production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Build Optimization

```typescript
// next.config.ts
const nextConfig = {
  output: 'standalone', // For Docker
  compress: true,       // Enable gzip
  poweredByHeader: false, // Remove X-Powered-By
  reactStrictMode: true,
};
```

## 🐛 Debugging Tips

### Common Issues

**Issue:** PDF not generating
```typescript
// Check: @react-pdf/renderer version compatibility
// Solution: Ensure React 19 compatible version
npm install @react-pdf/renderer@latest
```

**Issue:** LocalStorage not persisting
```typescript
// Check: Browser privacy settings
// Check: Incognito mode (LocalStorage cleared on close)
// Solution: Add error handling
try {
  localStorage.setItem('key', value);
} catch (e) {
  console.error('LocalStorage not available', e);
}
```

**Issue:** Auto-save not working
```typescript
// Check: useEffect dependencies
// Solution: Ensure invoiceData in dependency array
useEffect(() => {
  const interval = setInterval(() => {
    saveDraft(invoiceData);
  }, 30000);
  return () => clearInterval(interval);
}, [invoiceData]); // ← Important!
```

### Debug Mode

```typescript
// Add to page.tsx for debugging
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Invoice Data:', invoiceData);
    console.log('Totals:', totals);
  }
}, [invoiceData, totals]);
```

## 📊 Performance Monitoring

### Lighthouse Scores (Target)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Checklist

- [ ] Lazy load components
- [ ] Optimize images
- [ ] Minimize bundle size
- [ ] Enable compression
- [ ] Add caching headers
- [ ] Use CDN for static assets

## 🔐 Security Best Practices

### Input Validation

```typescript
// Validate user input
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Sanitize HTML (if needed)
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirty);
```

### XSS Prevention

- Never use `dangerouslySetInnerHTML` with user input
- Validate all form inputs
- Use TypeScript for type safety

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [@react-pdf/renderer Documentation](https://react-pdf.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Code Review Checklist

Before submitting PR:

- [ ] Code follows TypeScript best practices
- [ ] All components have proper types
- [ ] No console.log statements in production code
- [ ] Tailwind classes used (no inline styles)
- [ ] Responsive design tested
- [ ] Browser compatibility checked
- [ ] No ESLint errors
- [ ] Comments added for complex logic
- [ ] README updated if needed

---

**Happy Coding! 🚀**
