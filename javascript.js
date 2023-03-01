let displayValue = document.querySelector('#display');
let firstNumber = 0;
let secondNumber = 0;
let operand = null;

console.log(displayValue.innerHTML)



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

