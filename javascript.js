let displayValue = document.querySelector('#display');
let subDisplayValue = document.querySelector('#subdisplay');
let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = "";
let process = false;

const numberArray = document.querySelectorAll('.number');
const actionArray = document.querySelectorAll('.action');
const operationArray = document.querySelectorAll('.operation');


//this just updates the display to match the innards
function updateDisplay(){
    
    if (operator === ""){
        displayValue.textContent = firstNumber.toString();
        if (firstNumber === ""){displayValue.textContent = "0"}
    } else if (operator != ""){
        displayValue.textContent = secondNumber.toString();
        if (secondNumber === ""){displayValue.textContent = "0"}
    }
    

}

function updateSubDisplay(){
    subDisplayValue.textContent = firstNumber + operator;
}

//listens for events on the number buttons 1 through 9 
for(let i = 0; i < numberArray.length; i++){
    let self = numberArray[i]
    self.addEventListener('click', (event) => {

        if (result != ""){
            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = "";
        }

        if (operator === ""){
            firstNumber += self.textContent;
        } else if (operator != ""){
            secondNumber += self.textContent;
        } 

        updateDisplay();    
    });    
}

//listens for events on the operations button , add, sub, div, multiply
for(let i = 0; i < operationArray.length; i++){
    let self = operationArray[i]
    self.addEventListener('click', (event) => {

        operator = self.textContent;
        if (result != ""){
            secondNumber = "";
            result = "";
        }
    
    });    
}

//listens for events on the action buttons, equal, make negative, clear, 
for(let i = 0; i < actionArray.length; i++){
    let self = actionArray[i]
    self.addEventListener('click', (event) => {

        if (self.id === "ac"){
            firstNumber = "";
            secondNumber = "";
            result = "";
            operator = "";
            process = false;
            updateDisplay();
            //updateSubDisplay();
        }

        if (self.id === "operate"){
            result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
            displayValue.textContent = result;
            firstNumber = result;
        }
    
        if (self.id === "swap"){
            if (operator === ""){
                firstNumber -= (parseInt(firstNumber) * 2);
            } else if (result != ""){
                firstNumber -= (firstNumber * 2);
            } else if (operator != ""){
                secondNumber -= (secondNumber * 2);
            } 

            updateDisplay;
        }
    });    
}

// controls the math operations of the calculator
function operate(operator, a, b){
    let result = 0;

    if (operator === "+"){
        result = a + b
    }

    if (operator === "-"){
            result = a - b
    }

    if (operator === "*"){
            result = a * b
    }

    if (operator === "/"){
            result = a / b
    }
    return result.toString();

}






