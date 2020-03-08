import { generateOptions } from './utils.js';
import { fromSelect, toSelect, form } from './elements.js';
import  handleInput  from './handler.js';

function app() {
  const options = generateOptions();
  fromSelect.innerHTML = options;
  toSelect.innerHTML = options;
  form.addEventListener('input', handleInput);
}

export default app;