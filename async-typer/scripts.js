function wait(ms = 0) {
  return new Promise(function(resolve, error){
    setTimeout(() => {
      resolve('done!');
    }, ms);
  });
}

function generateRandomNumber( min = 30, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min) ;
}

async function textEffect(textField) {
  let text = '';
  for(letter of textField.textContent) {
    const { typeMin , typeMax} = textField.dataset;
    text += letter;
    textField.textContent = text;
    await wait(generateRandomNumber(typeMin, typeMax));
  }
}

const data = document.querySelectorAll('[data-type]').forEach(textEffect);