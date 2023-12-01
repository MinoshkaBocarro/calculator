let firstNum = null;
let operator;
let secondNum = null;
let display;
let currentNumber = [];

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    if (secondNum === 0) {
        return "Hmmmm should I compute this? Nah"
    }
    return firstNum / secondNum;
}

function operate (operator, firstNum, secondNum) {
    firstNum = Number(firstNum) 
    secondNum = Number(secondNum)
    switch(operator) {
        case "+":
            return add (firstNum, secondNum);
        case "-":
            return subtract (firstNum, secondNum);
        case "×":
            return multiply (firstNum, secondNum);
        case "÷":
            return divide (firstNum, secondNum);
    }
}

const numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="numbers")) {
        currentNumber.push(e.target.textContent);
        updateDisplayNumber (); 
    }
})

const displayScreen = document.querySelector(".display")

function updateDisplayNumber () {
    display = currentNumber.join("");
    displayScreen.textContent = display;
}

const operatorButtons = document.querySelector(".operators");

operatorButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="operators")) {
        if (firstNum === null && currentNumber.length > 0) { 
            firstNum = currentNumber.join("");
            currentNumber = [];
            operator = e.target.textContent;
        } else if (secondNum === null && currentNumber.length > 0) {
            secondNum = currentNumber.join("");
            startEquation();
            operator = e.target.textContent;
        } else {
            operator = e.target.textContent;
        }
    }
})

const decimalButton = document.querySelector(".decimal")

decimalButton.addEventListener('click', function (e) {
    if (!(currentNumber.includes("."))) {
        currentNumber.push(e.target.textContent);
        updateDisplayNumber (); 
    }
})

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', function() {
    if (!(firstNum === null) 
        && !(firstNum === "") 
        && (currentNumber.length > 0)){
            secondNum = currentNumber.join("");
            startEquation();
            firstNum = null;
            secondNum = null;
    }
})


function startEquation () {
    currentResult = operate(operator, firstNum, secondNum);
    if (typeof currentResult === "number") {
        currentResult = Math.round((currentResult + Number.EPSILON) * 100) / 100
    }
    displayScreen.textContent = currentResult; 
    firstNum = currentResult;
    secondNum = null;
    currentNumber = [];
}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', function() {
    firstNum = null;
    secondNum = null;
    currentNumber = [];
    displayScreen.textContent = "CLEAR"
    }
)

//Rounding to fit screen
//pretty
//backspace button
//keyboard suppport