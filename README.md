# Invoiceza 🧾

A free, professional, and user-friendly invoice generator built with Next.js 15, React 19, and TypeScript. Create beautiful invoices instantly without signup - all data stays in your browser.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

## 🚀 Live Demo

Visit: [https://Invoiceza.com](https://Invoiceza.com)

## ✨ Features

### Core Functionality
- ✅ **Free Invoice Creation** - Unlimited invoices, no signup required
- ✅ **PDF Generation** - Download professional PDF invoices instantly
- ✅ **Auto-Save** - Automatic draft saving every 30 seconds
- ✅ **Local Storage** - All data stored in browser (privacy-first)
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **30+ Currencies** - Support for major world currencies
- ✅ **Multiple Themes** - Classic, Modern, Minimal, Professional

### Advanced Features
- 🎯 **Progress Indicator** - Visual completion tracking
- ⌨️ **Keyboard Shortcuts** - Ctrl+S (save), Ctrl+D (download), Ctrl+N (new), Ctrl+L (add item)
- 🚀 **Quick Add Items** - Pre-defined service buttons
- 📊 **Real-time Calculations** - Tax, discount, shipping auto-calculated
- 💾 **Draft Management** - Save, load, and manage drafts
- 👥 **Client Management** - Recent clients selector
- 📋 **Copy Invoice** - Duplicate invoices for recurring clients
- 🎨 **Logo Upload** - Add company logo to invoices
- 📈 **Invoice History** - Track all created invoices

### UX Enhancements
- 🎨 **Empty State Guidance** - Helpful onboarding for new users
- ✅ **Inline Validation** - Real-time field validation
- 💡 **Pro Tips** - Context-aware helpful tips
- 🔔 **Smart Notifications** - Success/error feedback
- 📱 **Mobile-First Design** - Optimized for touch devices

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 4.0
- **Icons:** React Icons (Feather Icons)
- **PDF Generation:** @react-pdf/renderer
- **Form Controls:** react-select

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint
- **Code Formatting:** Prettier (recommended)
- **Version Control:** Git

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/invoice-generator-pro.git

# Navigate to project directory
cd invoice-generator-pro

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
invoice-generator-pro/
├── app/                          # Next.js App Router
│   ├── components/              # React components
│   │   ├── ClientSelector.tsx   # Client selection modal
│   │   ├── ConfirmModal.tsx     # Confirmation dialogs
│   │   ├── InvoiceHistory.tsx   # Invoice history viewer
│   │   ├── InvoicePDF.tsx       # PDF template component
│   │   ├── LoadingSpinner.tsx   # Loading indicator
│   │   ├── SettingsModal.tsx    # Settings dialog
│   │   └── Tooltip.tsx          # Tooltip component
│   ├── types/                   # TypeScript type definitions
│   │   └── invoice.ts           # Invoice data types
│   ├── utils/                   # Utility functions
│   │   ├── calculations.ts      # Invoice calculations
│   │   ├── formatters.ts        # Date/currency formatters
│   │   ├── invoiceManager.ts    # Invoice CRUD operations
│   │   ├── sampleData.ts        # Sample invoice data
│   │   └── storage.ts           # LocalStorage helpers
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page with schema
│   ├── features/                # Features page
│   ├── how-it-works/            # Tutorial page
│   ├── privacy-policy/          # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage (invoice editor)
│   ├── globals.css              # Global styles
│   └── sitemap.ts               # Dynamic sitemap
├── public/                      # Static assets
│   ├── robots.txt               # Search engine rules
│   └── *.svg                    # Icon files
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── next.config.ts               # Next.js config
├── postcss.config.mjs           # PostCSS config
└── README.md                    # This file
```

## 🎨 Component Architecture

### Main Components

#### `app/page.tsx` - Invoice Editor (Main Page)
- **Purpose:** Primary invoice creation interface
- **State Management:** React useState hooks
- **Key Features:**
  - Invoice data management
  - Real-time calculations
  - Auto-save functionality
  - Keyboard shortcuts
  - Progress tracking
- **Dependencies:** All utility functions, PDF renderer

#### `components/InvoicePDF.tsx` - PDF Template
- **Purpose:** Renders invoice as PDF
- **Library:** @react-pdf/renderer
- **Features:**
  - Professional layout
  - Multiple theme support
  - Dynamic content rendering
  - Logo support

#### `components/ClientSelector.tsx` - Client Management
- **Purpose:** Select from recent clients
- **Storage:** LocalStorage
- **Features:**
  - Recent clients list
  - Quick selection
  - Client data population

#### `components/InvoiceHistory.tsx` - History Viewer
- **Purpose:** View and load past invoices
- **Storage:** LocalStorage
- **Features:**
  - Invoice list with preview
  - Load invoice
  - Delete invoice

### Utility Modules

#### `utils/calculations.ts`
```typescript
// Core calculation functions
- calculateInvoiceTotals()    // Calculate all totals
- calculateLineItemAmount()   // Calculate line item total
- formatCurrency()            // Format currency display
- generateInvoiceNumber()     // Generate invoice numbers
```

#### `utils/storage.ts`
```typescript
// LocalStorage management
- saveDraft()                 // Save invoice draft
- loadDraft()                 // Load saved draft
- clearDraft()                // Clear draft
- hasDraft()                  // Check if draft exists
```

#### `utils/invoiceManager.ts`
```typescript
// Invoice CRUD operations
- saveInvoiceToHistory()      // Save to history
- loadInvoiceHistory()        // Get all invoices
- deleteInvoiceFromHistory()  // Delete invoice
- saveBusinessProfile()       // Save business info
- loadBusinessProfile()       // Load business info
- saveRecentClient()          // Save client
- loadRecentClients()         // Get recent clients
- generateNextInvoiceNumber() // Auto-increment number
- exportInvoiceAsJSON()       // Export invoice
- importInvoiceFromJSON()     // Import invoice
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
# Site URL (for SEO)
NEXT_PUBLIC_SITE_URL=https://Invoiceza.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=support@Invoiceza.com
```

### Tailwind Configuration

Custom theme in `tailwind.config.ts`:
- Primary color: Teal (#14b8a6)
- Font: Inter
- Custom animations
- Responsive breakpoints

## 📊 Data Models

### InvoiceData Type

```typescript
interface InvoiceData {
  business: {
    name: string;
    address: string;
    email: string;
    phone: string;
    logo: string;
  };
  client: {
    billTo: string;
    shipTo: string;
  };
  metadata: {
    invoiceNumber: string;
    date: string;
    dueDate: string;
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    paymentTerms: string;
    poNumber: string;
  };
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

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  taxable: boolean;
}
```

## 🎯 SEO Implementation

### Meta Tags
- Optimized title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Robots meta tags

### Structured Data (Schema.org)
- **WebApplication Schema** - Main app details
- **Organization Schema** - Company information
- **FAQ Schema** - Structured Q&A
- **Aggregate Rating** - User ratings

### Sitemap & Robots
- Dynamic XML sitemap (`/sitemap.xml`)
- Robots.txt with crawl rules
- All pages indexed and crawlable

### Internal Linking
- Footer navigation with all pages
- Cross-linking between related pages
- Breadcrumb navigation (recommended to add)

## 🚀 Performance Optimization

### Current Optimizations
- ✅ Server-side rendering (SSR)
- ✅ Static page generation where possible
- ✅ Code splitting (automatic with Next.js)
- ✅ Image optimization (Next.js Image component ready)
- ✅ CSS optimization (Tailwind purge)
- ✅ Lazy loading components

### Recommended Improvements
- [ ] Add image optimization for logos
- [ ] Implement service worker for offline support
- [ ] Add loading skeletons
- [ ] Optimize bundle size
- [ ] Add performance monitoring

## 🔒 Security & Privacy

### Privacy-First Approach
- **No Server Storage:** All data stored locally in browser
- **No Tracking:** No personal data collection
- **No Signup:** No user accounts or authentication
- **HTTPS Ready:** SSL certificate recommended

### Data Storage
- **LocalStorage:** Invoice drafts, business profile, client data
- **SessionStorage:** Temporary data (if needed)
- **No Cookies:** No tracking cookies used

## 🧪 Testing

### Manual Testing Checklist
- [ ] Invoice creation flow
- [ ] PDF generation
- [ ] Auto-save functionality
- [ ] Keyboard shortcuts
- [ ] Mobile responsiveness
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] LocalStorage persistence
- [ ] Form validation

### Recommended Testing Tools
- Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests
- Lighthouse for performance audits

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly buttons (min 44x44px)
- Horizontal scroll for tables
- Optimized font sizes
- Collapsible sections

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind for styling (no inline styles)
- Write descriptive commit messages
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React team for the UI library
- Tailwind CSS for the utility-first CSS
- React Icons for the icon library
- @react-pdf/renderer for PDF generation

## 📞 Support

- **Documentation:** [Full docs](https://Invoiceza.com/how-it-works)
- **FAQ:** [Common questions](https://Invoiceza.com/faq)
- **Contact:** [Support form](https://Invoiceza.com/contact)
- **Issues:** [GitHub Issues](https://github.com/yourusername/invoice-generator-pro/issues)

## 🗺️ Roadmap

### Planned Features
- [ ] Multiple invoice templates
- [ ] Recurring invoices
- [ ] Payment tracking
- [ ] Email integration
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Invoice analytics
- [ ] Bulk invoice creation
- [ ] Custom branding options
- [ ] API for integrations

## 📈 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4 for traffic
- Google Search Console for SEO
- Sentry for error tracking
- Vercel Analytics for performance

---

**Made with ❤️ for freelancers and small businesses**

**Star ⭐ this repo if you find it helpful!**
