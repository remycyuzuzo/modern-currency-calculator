const currencies = [
    { currency: "USD", rate: 0.7 },
    { currency: "RWF", rate: 0.001 },
];

const currencySwitchers = document.querySelectorAll("select.currency-switcher");
const amountInputEl = document.querySelector(".amount-input");
const inputCurrencySelector = document.querySelector(".top select.currency-switcher")
const outputCurrencySelector = document.querySelector(".bottom select.currency-switcher")
const resultEl = document.querySelector(".result>span");

currencySwitchers.forEach((select) => {
    const options = currencies.map((currency) => {
        const option = document.createElement("option");
        option.value = `${currency.currency}`;
        option.innerHTML = `${currency.currency}`;
        return option;
    });

    options.forEach((option) => {
        select.appendChild(option);
    });
});

function convertCurrency() {
    const inputAmount = amountInputEl.value;
    const inputCurrency = inputCurrencySelector.value;
    const convertTo = outputCurrencySelector.value
}

