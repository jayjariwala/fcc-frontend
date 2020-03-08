const endPoint = `https://api.exchangeratesapi.io/latest`;
const baseCurrency = {};

export async function fetchBaseRate(baseCurrency = 'USD') {
  const ratePromise = await fetch(`${endPoint}?base=${baseCurrency}`);
  const rate = await ratePromise.json();
  return rate;
}

export async function convertRate(amount, from, to) {
  if(!baseCurrency[from]) {
    //fetch the rate
    const rate = await fetchBaseRate(from);
    baseCurrency[from] = rate;
  }
  const convertedRate = (amount * baseCurrency[from].rates[to]).toFixed(2);
  return convertedRate;
}