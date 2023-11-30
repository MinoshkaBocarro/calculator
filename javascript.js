let firstNumber
let operator
let secondNumber
let currentEquation = []

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate (operator, firstNumber, secondNumber) {
    switch(operator) {
        case "add":
            return add (firstNumber, secondNumber);
        case "subtract":
            return subtract (firstNumber, secondNumber);
        case "multiply":
            return multiply (firstNumber, secondNumber);
        case "divide":
            return divide (firstNumber, secondNumber);
    }
}

numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="numbers")) {
        currentEquation.push(e.target.textContent);
        console.log(currentEquation);
    }
})