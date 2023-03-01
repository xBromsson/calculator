let displayValue = document.querySelector('#display');
let firstNumber = 0;
let secondNumber = 0;
let operand = null;

const btnClear = document.querySelector('#ac');
const btnSwap = document.querySelector('#swap');
const btnPercent = document.querySelector('#percent');
const btnDivide = document.querySelector('#divide');
const btnMultiply = document.querySelector('#multiply');
const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnOperate = document.querySelector('#operate');
const btnDecimal = document.querySelector('#decimal');
const btnNine = document.querySelector('#nine');
const btnEight = document.querySelector('#eight');
const btnSeven = document.querySelector('#seven');
const btnSix = document.querySelector('#six');
const btnFive = document.querySelector('#five');
const btnFour = document.querySelector('#four');
const btnThree = document.querySelector('#three');
const btnTwo = document.querySelector('#two');
const btnOne = document.querySelector('#one');
const btnZero = document.querySelector('#zero');

const btnArray = document.querySelectorAll('button');

for(let i = 0; i < btnArray.length; i++){
    let self = btnArray[i]
    self.addEventListener('click', doThings)
    
}

//this just updates the display to match the innards
function updateDisplay(){
    return;
}

//event listener function that will do various button actions
function doThings(){
    console.log('success')
}




console.log(displayValue.innerHTML)


// controls the math operations of the calculator
function operate(operater, a, b){

    if (operater === "+"){
        function add(){
            result = a + b
            return result
        }
    }

    if (operater === "-"){
        function subtract(){
            result = a - b
            return result
        }
    }

    if (operater === "*"){
        function multiply(){
            result = a * b
            return result
        }
    }

    if (operater === "/"){
        function divide(){
            result = a / b
            return result
        }
    }

}

