import currencyObj from './currency.js';

export function generateOptions() {
  const currencyArray = Object.entries(currencyObj);
  return currencyArray.map((currency) => {
    return `<option value='${currency[0]}'>${currency[0]} - ${currency[1]}</option>`
  }).join('');
}

export function formatCurrency(to, rate) {
  const formattedCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: to}).format(rate);
  return formattedCurrency;
}
