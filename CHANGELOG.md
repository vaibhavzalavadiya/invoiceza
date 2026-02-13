# Changelog

All notable changes to Invoiceza.

## [2.0.0] - 2024 - Major Feature Release 🎉

### 🎨 Complete UI Redesign
- Redesigned entire interface to match invoice-generator.com
- Changed color scheme from blue to professional teal
- Implemented 3-column layout (Form | Preview | Actions)
- Added sticky header with navigation
- Improved spacing, typography, and visual hierarchy
- Added smooth transitions and hover effects

### ✨ New Features

#### Business Management
- **Business Profile System**: Save and auto-load business information
- **Logo Upload**: Add company logo with preview (max 2MB)
- **Extended Business Info**: Email, phone, website, Tax ID/VAT number
- **Save as Default**: One-click save for business profile

#### Client Management
- **Recent Clients**: Quick access to previously used clients
- **Client Selector Modal**: Search and select from history
- **Auto-save Clients**: Automatically save client info for reuse
- **Separate Ship To**: Optional shipping address field

#### Invoice Management
- **Invoice History**: View, search, and manage up to 50 recent invoices
- **Status Tracking**: Draft, Sent, Paid, Overdue, Cancelled
- **Duplicate Invoices**: Clone existing invoices with one click
- **Auto-numbering**: Smart invoice number generation
- **Export/Import**: Backup and restore invoices as JSON

#### Advanced Calculations
- **Per-Item Tax Control**: Taxable checkbox for each line item
- **Flexible Discount**: Choose percentage or fixed amount
- **Shipping Costs**: Add shipping to invoices
- **Amount Paid Tracking**: Record partial payments
- **Balance Due**: Automatic calculation
- **Custom Tax Labels**: VAT, GST, Sales Tax, etc.

#### Line Items
- **Duplicate Items**: Clone line items quickly
- **Taxable Toggle**: Control tax per item
- **Item Actions**: Duplicate and delete buttons
- **Unlimited Items**: Add as many items as needed

#### Settings & Customization
- **Settings Modal**: Comprehensive settings with 3 tabs
  - Business Info tab
  - Payment Details tab
  - Preferences tab
- **Payment Methods**: Select accepted payment methods
- **Bank Details**: Add banking information
- **Default Terms**: Set default payment terms and conditions
- **Currency Selection**: 8 currencies supported
- **Theme Selection**: 4 professional themes

#### User Experience
- **Toast Notifications**: Success and error messages
- **Loading States**: PDF generation progress indicator
- **Quick Actions Panel**: Save/Load/Clear in sidebar
- **Dropdown Menus**: More actions menu
- **Modal Dialogs**: Clean, focused interactions
- **Keyboard Support**: Better keyboard navigation

### 🔧 Technical Improvements

#### Code Structure
- **New Components**:
  - `ClientSelector.tsx` - Recent clients modal
  - `InvoiceHistory.tsx` - Invoice history management
  - `SettingsModal.tsx` - Settings dialog with tabs
- **New Utilities**:
  - `invoiceManager.ts` - Invoice CRUD operations
  - Enhanced `calculations.ts` with new functions
  - `sampleData.ts` improvements

#### Data Management
- **Enhanced Types**: More comprehensive TypeScript interfaces
- **LocalStorage**: Improved data persistence
- **History Management**: Efficient storage of recent invoices
- **Profile Management**: Business and client profiles

#### Performance
- **Optimized Rendering**: Better React performance
- **Efficient Calculations**: Improved math functions
- **Smart Updates**: Reduced unnecessary re-renders

### 📱 UI Components

#### New Modals
- Client Selector with search
- Invoice History with filters
- Settings with tabbed interface

#### Enhanced Forms
- Better input styling
- Inline editing in preview
- Dropdown selectors
- Checkbox controls
- Date pickers

#### Visual Feedback
- Loading overlays
- Toast notifications
- Hover states
- Active states
- Disabled states

### 💰 Financial Features

#### Tax System
- Customizable tax labels
- Per-item tax control
- Tax rate percentage
- Tax amount calculation
- Taxable subtotal tracking

#### Discount System
- Percentage discount
- Fixed amount discount
- Toggle discount visibility
- Discount amount display

#### Payment Tracking
- Amount paid field
- Balance due calculation
- Payment methods list
- Bank details section
- Payment terms presets

### 📄 PDF Improvements
- Logo in PDF output
- Enhanced formatting
- Better spacing
- Professional styling
- Complete information display

### 🎯 Workflow Enhancements

#### Quick Actions
- New Invoice
- Save Draft
- Load Draft
- Clear Form
- Duplicate Invoice
- Load Sample Data
- Export JSON
- Import JSON

#### Smart Features
- Auto-generate invoice numbers
- Auto-calculate due dates
- Auto-save recent clients
- Auto-load business profile
- Smart number incrementing

### 🌍 Internationalization
- Multi-currency support (8 currencies)
- Currency-specific formatting
- Locale-aware number formatting
- Custom tax labels for regions

### 📚 Documentation
- **README.md**: Comprehensive project documentation
- **FEATURES.md**: Detailed feature list with future roadmap
- **QUICKSTART.md**: 5-minute getting started guide
- **CHANGELOG.md**: This file

### 🐛 Bug Fixes
- Fixed calculation rounding issues
- Improved form validation
- Better error handling
- Fixed logo upload issues
- Corrected date formatting

### 🔄 Breaking Changes
- Changed data structure for invoices
- Updated TypeScript interfaces
- Modified storage keys
- New component architecture

### ⚠️ Known Issues
- Email feature is placeholder (coming soon)
- Mobile responsiveness needs improvement
- No cloud sync (local storage only)
- Limited to 50 invoices in history

---

## [1.0.0] - Initial Release

### Features
- Basic invoice creation
- PDF generation
- Simple calculations
- Draft saving
- Sample data loading

---

## Future Releases

### [2.1.0] - Planned
- Email integration
- Improved mobile responsiveness
- More themes
- Keyboard shortcuts
- Print functionality

### [3.0.0] - Planned
- User accounts
- Cloud sync
- Payment gateway integration
- Recurring invoices
- Advanced reporting

---

**Version Format**: MAJOR.MINOR.PATCH
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)
