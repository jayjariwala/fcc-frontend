import { fromSelect, toSelect, amountInput, result  } from "./elements.js";
import { formatCurrency } from './utils.js';
import { convertRate } from './lib.js';

async function handleInput(event) {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;
  const convertedRate = await convertRate(amount, from, to);
  const rate = formatCurrency(to, convertedRate);
  result.textContent = `${rate}`;
}

export default handleInput;