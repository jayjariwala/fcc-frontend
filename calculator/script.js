// let displayScreen = document.querySelector('.display');
// let result = 0;
// let keystrokes = [];
// const digitRestriction = 12;
// let rawInputs = [];
// let operation = 0;

// function displayKeyStroke(key)
// {
//   if(keystrokes.length >= digitRestriction) return;
//   keystrokes.push(key);
//   rawInputs.push(parseFloat(keystrokes.join("")));
//   displayScreen.textContent = keystrokes.join("");
// }

// function displayResult()
// {
//   displayScreen.textContent = result;
// }

// function decimalCheck(key)
// {
//   if (keystrokes.includes(".")) return;
//   if(keystrokes.length === digitRestriction - 1) return;
//   if (keystrokes.length === 0)
//   {
//     keystrokes.push(0);
//   }
//   displayKeyStroke(key);
// }

// function plusButtonClick(key)
// {
//   if(keystrokes.length === 0 ) return result;
//   result += parseFloat(keystrokes.join(""));
//   keystrokes.splice(0, keystrokes.length);
//   displayResult();
// }

// function equaltoButtonClick(key)
// {
//   if(rawInputs.length === 0 ) return;
//   let initNumber = 0;
//   if(rawInputs.length === 1) 
//   {
//     initNumber = rawInputs[0];
//     result += initNumber;
//   }
//   else
//   {
//     result = rawInputs.reduce( (acc, val) => {
//     return acc + val;
//   })
//   }
//   keystrokes.splice(0, keystrokes.length);
//   displayResult();
// }

// function buttonClick()
// {
//   const key = this.dataset.key;
//   switch(key)
//   {
//     case "=":
//       equaltoButtonClick();
//       break;
//     case "+":
//       plusButtonClick();
//       break;
//     case "*":
//       console.log("*");
//       break;
//     case "-":
//       console.log("-")
//       break;
//     case "/":
//       console.log("/");
//       break;
//     case "%":
//       console.log("%");
//       break;
//     case "c":
//       console.log("c");
//       break;
//     case ".":
//       decimalCheck(key);
//       break;
//     default:
//       displayKeyStroke(key);
//   }
// }

// document.querySelectorAll('button').forEach((button) => {
//   button.addEventListener('click', buttonClick);
// })

// *********************************** EVERY DAY IS THE NEW BEGINING **************************************** //

var calculator = {
  "operation": '0',
  "display": [],
  "result": 0,
  "limit":12
}

function showkeypressed()
{
  if( calculator.display.length === 0 && calculator.operation === '0')
  {
    screen.textContent = 0;
  }
  else
  {
    if(calculator.display.join("").length > calculator.limit) {
      calculator.display.splice(calculator.limit);
      return;
    } else {
      screen.textContent = calculator.display.join("");
    }
    
  }
}


function showResult(val) {
  if(val.toString().length > 12 && val.toString().length < 17) {
    screen.style.fontSize = "42px";
  } else if(val.toString().length >= 17 && val.toString().length < 22) {
    screen.style.fontSize = "32px";
  } else if (val.toString().length >= 22) {
    console.log("comes here");
    screen.style.fontSize = "22px";    
  } else {
    screen.style.fontSize = "52px";    
  }
  screen.textContent = val; 
}

let temp = 0;

function buttonClick()
{
  const key = this.dataset.key;

  switch(key)
  {
    case "=":
      if(calculator.display.length != 0 && calculator.operation === '+')
      {
          temp = parseFloat(calculator.display.join(""));
          calculator.result += temp;
          showResult(calculator.result);
          calculator.display.splice(0,calculator.display.length);
      }
      else if( calculator.operation === '+')
      {
        if(temp != 0)
        {
          let resultString = calculator.result.toString();
          if(resultString.includes('.')) {
            let precisionPoint = resultString.slice(resultString.indexOf('.') + 1 ,resultString.toString().length).length;
            calculator.result = parseFloat((calculator.result + temp).toFixed(parseInt(precisionPoint + 1)));
            showResult(calculator.result);
          } else {
            calculator.result += temp;
            showResult(calculator.result);
          }
        }
        else
        {
          temp = calculator.result;
          calculator.result += temp;
          showResult(calculator.result);
        }
      }
      else if(calculator.display.length != 0 && calculator.operation === '-')
      {
        temp = parseFloat(calculator.display.join(""));
        calculator.result -= temp;
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      else if( calculator.operation === '-')
      {
        if(temp != 0)
        {
          calculator.result -= temp;
          showResult(calculator.result);
        }
        else
        {
          temp = calculator.result;
          calculator.result -= temp;
          showResult(calculator.result);
        }
      }
      else if(calculator.display.length != 0 && calculator.operation === '*')
      {
        temp = parseFloat(calculator.display.join(""));
        calculator.result *= temp;
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      else if( calculator.operation === '*')
      {
        if(temp != 0)
        {
          calculator.result *= temp;
          showResult(calculator.result);
        }
        else
        {
          temp = calculator.result;
          calculator.result *= temp;
          showResult(calculator.result);
        }
      }
      else if(calculator.display.length != 0 && calculator.operation === '/')
      {
        temp = parseFloat(calculator.display.join(""));
        calculator.result /= temp;
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      else if( calculator.operation === '/')
      {
        if(temp != 0)
        {
          calculator.result /= temp;
          showResult(calculator.result);
        }
        else
        {
          temp = calculator.result;
          calculator.result /= temp;
          showResult(calculator.result);
        }
      }
      else if( calculator.operation === '%')
      {
        if(Math.sign(calculator.result) === -1)
        {
          calculator.operation = '-'; 
          calculator.result += temp;
          temp = temp - calculator.result;
          showResult(calculator.result);
        }
        else
        {
          calculator.operation = '+'; 
          calculator.result += temp;
          temp = calculator.result - temp;
          showResult(calculator.result);
        }
      }
      break;
    case "+":
      if( calculator.operation === '-' && calculator.display.length != 0 )
      {
        calculator.result -= parseFloat(calculator.display.join(""));
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
        calculator.operation = "+";
      }
      else
      {
        calculator.operation = "+";
        temp = 0;
        if ( calculator.display.length === 0 ) return;
        calculator.result += parseFloat(calculator.display.join(""));
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      break;
    case "*":
      if( calculator.operation === '-' && calculator.display.length != 0 )
      {
        calculator.result -= parseFloat(calculator.display.join(""));
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
        calculator.operation = "*";
      }
      else
      {
        calculator.operation = "*";
        temp = 0;
        if ( calculator.display.length === 0 ) return;
        if(calculator.result === 0) 
        {
          calculator.result = parseFloat(calculator.display.join(""));
        }
        else
        {
          calculator.result *= parseFloat(calculator.display.join(""));
        }
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      break;
    case "-":
      if( calculator.operation === '-' && calculator.display.length != 0 )
      {
        calculator.result -= parseFloat(calculator.display.join(""));
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
        calculator.operation = "-";
      }
      else
      {
        calculator.operation = "-";
        temp = 0;
        if ( calculator.display.length === 0 ) return;
        if(calculator.result === 0) 
        {
          calculator.result = parseFloat(calculator.display.join(""));
        }
        else
        {
          calculator.result -= parseFloat(calculator.display.join(""));
        }
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      break;
    case "/":
      if( calculator.operation === '-' && calculator.display.length != 0 )
      {
        calculator.result -= parseFloat(calculator.display.join(""));
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
        calculator.operation = "/";
      }
      else
      {
        calculator.operation = "/";
        temp = 0;
        if ( calculator.display.length === 0 ) return;
        if(calculator.result === 0) 
        {
          calculator.result = parseFloat(calculator.display.join(""));
        }
        else
        {
          calculator.result /= parseFloat(calculator.display.join(""));
        }
        showResult(calculator.result);
        calculator.display.splice(0,calculator.display.length);
      }
      break;
    case "c":
      calculator.operation = "0";
      calculator.display = [];
      calculator.result = 0;
      showResult(0);
      showkeypressed();
      break;
    case ".":
      if (calculator.display.includes(".")) return;
      // if(keystrokes.length === digitRestriction - 1) return;
      if (calculator.display.length === 0)
      {
        calculator.display.push(0);
      }
      calculator.display.push('.');
      showkeypressed();
      break;
    default:
      calculator.display.push(key);
      showkeypressed();
  }
}

document.querySelectorAll('button').forEach((button) => { 
  button.addEventListener('click', buttonClick);
})

const screen = document.querySelector('.js-display');
showkeypressed();

