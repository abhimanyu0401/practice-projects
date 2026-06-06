# Currency Converter

A simple, clean currency converter built with HTML, CSS, and JavaScript. No frameworks, no build tools — just open `index.html` in a browser and it works.

---

## Features

- Convert between 130+ world currencies
- Live exchange rates fetched from [open.er-api.com](https://open.er-api.com)
- Country flags loaded automatically from [flagcdn.com](https://flagcdn.com)
- Swap button to instantly flip the two currencies
- Monospace font for clean, aligned number display

---

## Files

```
currency-converter/
├── index.html   → page structure
├── style.css    → all styling
├── app.js       → all logic (fetch, convert, swap, flags)
└── codes.js     → currency code → country code mapping
```

---

## How to Run

1. Download all four files into the same folder
2. Open `index.html` in any browser
3. That's it — no installation needed

> Requires an internet connection to fetch live exchange rates and flag images.

---

## How It Works

1. `codes.js` holds a list mapping every currency code (e.g. `INR`) to its country code (e.g. `IN`)
2. On page load, `app.js` reads that list and fills both dropdowns
3. When you click **Convert**, it calls the open.er-api.com API with the selected base currency and gets back all exchange rates
4. The result is calculated as `amount × rate` and displayed on screen
5. Flag images are pulled from flagcdn.com using the country code

---

## API Used

| Purpose | API |
|---|---|
| Exchange rates | `https://open.er-api.com/v6/latest/{currency}` |
| Flag images | `https://flagcdn.com/w80/{countryCode}.png` |

Both are free and require no API key.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
