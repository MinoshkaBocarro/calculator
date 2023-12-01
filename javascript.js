let firstNumber
let operator
let secondNumber
let currentEquation = []
let display

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
        updateDisplay (); 
        console.log(currentEquation)
        console.log(display)
    }
})

operatorButtons = document.querySelector(".operators");

operatorButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="operators")) {
        currentEquation.push(e.target.className);
        updateDisplay (); 
        console.log(currentEquation)
        console.log(display)
    }
})

equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', function(e) {
    startEquation();
    }
)

function updateDisplay () {
    display = currentEquation.join(" ");
}

function startEquation () {

}

//click number / operator
//add number / operator to display