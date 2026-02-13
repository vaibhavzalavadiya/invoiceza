# Quick Start Guide 🚀

Get up and running with Invoiceza in 5 minutes!

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

## 🎯 First Time Setup (2 minutes)

### Step 1: Configure Your Business Profile
1. Click **"Settings"** in the top navigation
2. Go to **"Business Info"** tab
3. Fill in:
   - Business Name
   - Address
   - Email & Phone
   - Website
   - Tax ID (optional)
4. Click **"Save Changes"**

### Step 2: Upload Your Logo (Optional)
1. Click the **"Add Your Logo"** box in the left sidebar
2. Select your logo image (max 2MB)
3. Logo will appear in preview and PDFs

### Step 3: Set Payment Details (Optional)
1. Click **"Settings"** → **"Payment Details"** tab
2. Add your bank details
3. Select accepted payment methods
4. Click **"Save Changes"**

## 💼 Creating Your First Invoice (3 minutes)

### Basic Information
1. **Invoice Number**: Auto-generated (you can change it)
2. **Date**: Today's date (editable)
3. **Payment Terms**: Select from dropdown (Net 30, etc.)
4. **Due Date**: Auto-calculated based on terms

### Client Information
1. Fill in **"Bill To"** field:
   ```
   Client Name
   Street Address
   City, State ZIP
   ```
2. (Optional) Fill in **"Ship To"** if different

### Add Line Items
1. Click in the **Item** column
2. Enter description: "Website Design"
3. Set **Quantity**: 1
4. Set **Rate**: 5000
5. Check **Tax** checkbox if taxable
6. Amount calculates automatically
7. Click **"+ Add Line Item"** for more items

### Set Tax & Totals
1. Enter **Tax Rate**: 10 (for 10%)
2. (Optional) Click **"+ Discount"** to add discount
3. (Optional) Click **"+ Shipping"** to add shipping
4. All totals calculate automatically

### Add Notes & Terms
1. Scroll down to **Notes** section
2. Add any relevant information
3. Add **Terms & Conditions** (payment terms, late fees, etc.)

### Download PDF
1. Click **"Download PDF"** button (top right)
2. PDF downloads automatically
3. Invoice saved to history

## 🎨 Customization

### Change Currency
1. Right sidebar → **Currency** dropdown
2. Select your currency (USD, EUR, GBP, etc.)

### Change Theme
1. Right sidebar → **Theme** dropdown
2. Select theme (Classic, Modern, Minimal, Professional)

### Custom Tax Label
1. Click **"Settings"** → **"Preferences"**
2. Change **Tax Label** to "VAT", "GST", "Sales Tax", etc.

## 💡 Pro Tips

### Save Time with Recent Clients
1. Click **"📋 Recent"** next to "Bill To"
2. Select from previously used clients
3. Information auto-fills

### Duplicate Invoices
1. Create an invoice
2. Click **"More"** → **"Duplicate Invoice"**
3. New invoice created with same details
4. Update client and items as needed

### Use Drafts
1. Click **"💾 Save Draft"** in left sidebar
2. Come back later
3. Click **"📂 Load Draft"** to continue

### View History
1. Click **"History"** in top navigation
2. Search by invoice number or client name
3. Click **"Load"** to edit an invoice
4. Click **"Delete"** to remove from history

### Keyboard Shortcuts (Coming Soon)
- `Ctrl/Cmd + S` - Save draft
- `Ctrl/Cmd + D` - Download PDF
- `Ctrl/Cmd + N` - New invoice

## 📊 Common Workflows

### Workflow 1: Simple Invoice
1. Fill in client info
2. Add 1-3 line items
3. Set tax rate
4. Download PDF
**Time: 2 minutes**

### Workflow 2: Detailed Invoice
1. Load business profile (auto)
2. Select recent client
3. Add multiple line items
4. Set tax, discount, shipping
5. Add notes and terms
6. Download PDF
**Time: 5 minutes**

### Workflow 3: Recurring Client
1. Click "History"
2. Find previous invoice for client
3. Click "Load"
4. Click "More" → "Duplicate Invoice"
5. Update items and amounts
6. Download PDF
**Time: 3 minutes**

## 🔧 Troubleshooting

### Logo Not Showing
- Check file size (must be < 2MB)
- Use JPG, PNG, or SVG format
- Try a different image

### PDF Not Downloading
- Check browser popup blocker
- Try different browser
- Clear browser cache

### Data Not Saving
- Check browser LocalStorage is enabled
- Don't use incognito/private mode
- Clear browser data and try again

### Calculations Wrong
- Verify tax rate is percentage (10 for 10%)
- Check discount type (% or fixed)
- Ensure line item quantities and rates are correct

## 📱 Mobile Usage

The app works on mobile but is optimized for desktop. For best experience:
- Use landscape mode on tablets
- Desktop browser recommended for complex invoices
- Mobile good for quick invoices

## 🆘 Need Help?

### Common Questions

**Q: Can I send invoices via email?**  
A: Email feature coming soon! For now, download PDF and attach to email.

**Q: Is my data secure?**  
A: All data stored locally in your browser. No data sent to servers.

**Q: Can I use this offline?**  
A: Yes! Once loaded, works offline. PDFs generate locally.

**Q: How many invoices can I create?**  
A: Unlimited! History stores last 50 for quick access.

**Q: Can I customize the PDF template?**  
A: Currently 4 themes available. More customization coming soon.

### Get Support
- Check FEATURES.md for detailed feature list
- Open issue on GitHub
- Check documentation

## 🎓 Next Steps

1. ✅ Create your first invoice
2. ✅ Set up business profile
3. ✅ Explore settings
4. ✅ Try different themes
5. ✅ Test export/import
6. ✅ Review invoice history
7. ✅ Customize tax labels
8. ✅ Add payment details

## 🚀 Advanced Features

Once comfortable with basics, explore:
- **Invoice Status Tracking**: Mark as Sent, Paid, Overdue
- **Export/Import**: Backup invoices as JSON
- **Taxable Items**: Control tax per line item
- **Discount Types**: Percentage or fixed amount
- **Payment Tracking**: Record partial payments
- **Custom Terms**: Save default terms & conditions

---

**Ready to create professional invoices? Let's go! 🎉**

Visit http://localhost:3000 and start invoicing!
