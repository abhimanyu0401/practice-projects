// ── API endpoint for exchange rates ──
const BASE_URL = "https://open.er-api.com/v6/latest";

// ── Get references to HTML elements ──
const fromSelect  = document.getElementById("from-select");
const toSelect    = document.getElementById("to-select");
const fromFlag    = document.getElementById("from-flag");
const toFlag      = document.getElementById("to-flag");
const amountInput = document.getElementById("amount-input");
const toDisplay   = document.getElementById("to-display");
const convertBtn  = document.getElementById("convert-btn");
const swapBtn     = document.getElementById("swap-btn");
const errorMsg    = document.getElementById("error-msg");
const resultMain  = document.getElementById("result-main");
const resultSub   = document.getElementById("result-sub");

// ── Build the dropdown options from countryList (codes.js) ──
function buildDropdowns() {
  const currencies = Object.keys(countryList).sort();

  for (let i = 0; i < currencies.length; i++) {
    const code = currencies[i];

    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    if (code === "USD") option1.selected = true;
    fromSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = code;
    if (code === "INR") option2.selected = true;
    toSelect.appendChild(option2);
  }
}

// ── Update a flag image when a currency is selected ──
function updateFlag(flagImg, currencyCode) {
  const countryCode = countryList[currencyCode];
  if (countryCode) {
    flagImg.src = "https://flagcdn.com/w80/" + countryCode.toLowerCase() + ".png";
    flagImg.alt = currencyCode;
  }
}

// ── Format a number nicely (no ugly long decimals) ──
function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
  } else if (num >= 1) {
    return num.toFixed(4);
  } else {
    return num.toFixed(6);
  }
}

// ── Reset result area to blank state ──
function resetResult() {
  toDisplay.textContent = "—";
  resultMain.textContent = "—";
  resultSub.textContent = "Enter an amount above";
}

// ── Fetch exchange rate and show the result ──
async function convert() {
  errorMsg.textContent = "";

  const amount = parseFloat(amountInput.value);

  // Validate the amount
  if (isNaN(amount) || amount <= 0) {
    errorMsg.textContent = "Enter a valid amount.";
    return;
  }

  const fromCurrency = fromSelect.value;
  const toCurrency   = toSelect.value;

  // Disable button while loading
  convertBtn.disabled = true;
  convertBtn.textContent = "Converting…";

  try {
    // Fetch rates from the API
    const response = await fetch(BASE_URL + "/" + fromCurrency);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("API error");
    }

    const rate = data.rates[toCurrency];
    const converted = amount * rate;
    const formattedConverted = formatNumber(converted);
    const formattedRate = formatNumber(rate);

    // Show result in the "To" display box
    toDisplay.textContent = formattedConverted;

    // Show result in the green strip
    resultMain.textContent = formattedConverted + " " + toCurrency;
    resultSub.textContent  = "1 " + fromCurrency + " = " + formattedRate + " " + toCurrency;

  } catch (error) {
    errorMsg.textContent = "Could not fetch rates. Check your connection.";
    resetResult();
  }

  // Re-enable button
  convertBtn.disabled = false;
  convertBtn.textContent = "Convert";
}

// ── Swap the two selected currencies ──
function swapCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  updateFlag(fromFlag, fromSelect.value);
  updateFlag(toFlag, toSelect.value);
  resetResult();
}

// ── Event listeners ──
convertBtn.addEventListener("click", convert);

swapBtn.addEventListener("click", swapCurrencies);

amountInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    convert();
  }
});

fromSelect.addEventListener("change", function() {
  updateFlag(fromFlag, fromSelect.value);
  resetResult();
});

toSelect.addEventListener("change", function() {
  updateFlag(toFlag, toSelect.value);
  resetResult();
});

// ── Run on page load ──
buildDropdowns();
updateFlag(fromFlag, "USD");
updateFlag(toFlag, "INR");
