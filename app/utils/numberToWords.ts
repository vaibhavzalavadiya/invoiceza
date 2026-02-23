// Convert a number to words (e.g., 1234.56 → "One Thousand Two Hundred Thirty-Four and 56/100")

const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function convertHundreds(num: number): string {
    let result = '';
    if (num >= 100) {
        result += ones[Math.floor(num / 100)] + ' Hundred';
        num %= 100;
        if (num > 0) result += ' ';
    }
    if (num >= 20) {
        result += tens[Math.floor(num / 10)];
        num %= 10;
        if (num > 0) result += '-' + ones[num];
    } else if (num > 0) {
        result += ones[num];
    }
    return result;
}

export function numberToWords(amount: number, currency: string = 'USD'): string {
    if (amount === 0) return 'Zero';
    if (amount < 0) return 'Negative ' + numberToWords(-amount, currency);

    const currencyNames: Record<string, { main: string; sub: string }> = {
        USD: { main: 'Dollars', sub: 'Cents' },
        EUR: { main: 'Euros', sub: 'Cents' },
        GBP: { main: 'Pounds', sub: 'Pence' },
        INR: { main: 'Rupees', sub: 'Paise' },
        CAD: { main: 'Dollars', sub: 'Cents' },
        AUD: { main: 'Dollars', sub: 'Cents' },
        JPY: { main: 'Yen', sub: 'Sen' },
        CNY: { main: 'Yuan', sub: 'Fen' },
        CHF: { main: 'Francs', sub: 'Centimes' },
        SGD: { main: 'Dollars', sub: 'Cents' },
        AED: { main: 'Dirhams', sub: 'Fils' },
        SAR: { main: 'Riyals', sub: 'Halalas' },
        MYR: { main: 'Ringgit', sub: 'Sen' },
    };

    const curr = currencyNames[currency] || { main: currency, sub: 'units' };

    const wholePart = Math.floor(amount);
    const decimalPart = Math.round((amount - wholePart) * 100);

    const billions = Math.floor(wholePart / 1000000000);
    const millions = Math.floor((wholePart % 1000000000) / 1000000);
    const thousands = Math.floor((wholePart % 1000000) / 1000);
    const remainder = wholePart % 1000;

    let result = '';

    if (billions > 0) {
        result += convertHundreds(billions) + ' Billion ';
    }
    if (millions > 0) {
        result += convertHundreds(millions) + ' Million ';
    }
    if (thousands > 0) {
        result += convertHundreds(thousands) + ' Thousand ';
    }
    if (remainder > 0) {
        result += convertHundreds(remainder);
    }

    result = result.trim();

    if (result) {
        result += ' ' + curr.main;
    }

    if (decimalPart > 0) {
        result += ' and ' + convertHundreds(decimalPart) + ' ' + curr.sub;
    } else {
        result += ' Only';
    }

    return result;
}
