let firstNum
let operator
let secondNum
let currentEquation = []
let display

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
    return firstNum / secondNum;
}

function operate (operator, getFirstNum, getSecondNum) {
    firstNum = parseInt(getFirstNum) //start here for change to floating
    secondNum = parseInt(getSecondNum)
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
        currentEquation.push(e.target.textContent);
        updateDisplay (); 
        console.log(currentEquation)
        console.log(display)
    }
})

const operatorButtons = document.querySelector(".operators");

operatorButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="operators")) {
        currentEquation.push(` ${e.target.textContent} `);
        updateDisplay (); 
        console.log(currentEquation)
        console.log(display)
    }
})

const displayScreen = document.querySelector(".display")

function updateDisplay () {
    display = currentEquation.join("");
    displayScreen.textContent = display;
}

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', function(e) {
    startEquation();
    }
)

function startEquation () {

}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', function(e) {
    removeEquation();
    }
)

function removeEquation () {

}

//click number / operator
//add number / operator to display