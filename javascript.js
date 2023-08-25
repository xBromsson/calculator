let displayValue = document.querySelector("#display");
let subDisplayValue = document.querySelector("#subdisplay");
let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = "";

const numberArray = document.querySelectorAll(".number");
const actionArray = document.querySelectorAll(".action");
const operationArray = document.querySelectorAll(".operation");

function updateDisplay() {
  if (!operator) {
    displayValue.textContent = firstNumber;
    if (!firstNumber) {
      displayValue.textContent = "0";
    }
  } else if (operator) {
    displayValue.textContent = secondNumber;
    if (!secondNumber) {
      displayValue.textContent = "0";
    }
  }
}

function limitInput(input) {
  return input.substring(0, 8);
}

for (let i = 0; i < numberArray.length; i++) {
  let clickedNumber = numberArray[i];
  clickedNumber.addEventListener("click", (event) => {
    if (result) {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = "";
    }

    if (clickedNumber.textContent === ".") {
      if (firstNumber.includes(".") || secondNumber.includes(".")) {
        return;
      }
    }

    if (!operator) {
      firstNumber = limitInput(firstNumber + clickedNumber.textContent);
    } else {
      secondNumber = limitInput(secondNumber + clickedNumber.textContent);
    }

    updateDisplay();
  });
}

for (let i = 0; i < operationArray.length; i++) {
  let self = operationArray[i];
  self.addEventListener("click", (event) => {
    operator = self.textContent;
    if (result) {
      secondNumber = "";
      result = "";
    }
  });
}

for (let i = 0; i < actionArray.length; i++) {
  let self = actionArray[i];
  self.addEventListener("click", (event) => {
    if (self.id === "ac") {
      firstNumber = "";
      secondNumber = "";
      result = "";
      operator = "";
      updateDisplay();
    }

    if (self.id === "operate") {
      result = operate(operator, Number(firstNumber), Number(secondNumber));
      displayValue.textContent = result;
      firstNumber = result;
    }

    if (self.id === "swap") {
      if (!operator) {
        firstNumber = limitInput(String(-Number(firstNumber)));
      } else if (result) {
        firstNumber = limitInput(String(-Number(firstNumber)));
      } else if (operator) {
        secondNumber = limitInput(String(-Number(secondNumber)));
      }

      updateDisplay();
    }
  });
}

function operate(operator, a, b) {
  let calcResult = 0;

  if (operator === "+") {
    calcResult = a + b;
  }

  if (operator === "-") {
    calcResult = a - b;
  }

  if (operator === "*") {
    calcResult = a * b;
  }

  if (operator === "/") {
    calcResult = a / b;
  }

  // Round the result to 4 decimal places
  calcResult = Math.round(calcResult * 10000) / 10000;

  result = calcResult.toString();
  return result;
}
