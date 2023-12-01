let firstNum = null;
let operator;
let secondNum = null;
let currentEquation = [];
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
    return firstNum / secondNum;
}

function operate (operator, firstNum, secondNum) {
    firstNum = parseInt(firstNum) //start here for change to floating point
    secondNum = parseInt(secondNum)
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

const operatorButtons = document.querySelector(".operators");

operatorButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="operators")) {
        if (firstNum === null) { // but this is currently reseting the first number instead of delivering the previous equated number, reset on = and clear only
            firstNum = currentNumber.join("");
            currentNumber = []
            operator = e.target.textContent;
        } else if (secondNum === null) {
            secondNum = currentNumber.join("");
            startEquation();
            firstNum = null;
            secondNum = null;
        } else {
        }
    }
})

const displayScreen = document.querySelector(".display")

function updateDisplayNumber () {
    display = currentNumber.join("");
    displayScreen.textContent = display;
}

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', function(e) {
    //currentEquation.push(""); try this later if there are issues with weird user inputs
    startEquation();
    }
)

function startEquation () {
    currentResult = operate(operator, firstNum, secondNum);
    displayScreen.textContent = currentResult;
    /*while ((currentEquation.length > 1)) {
        // send that to operate, get the result back and add it back to array at the start with unshift
        /*firstNum = getNum(currentEquation).join("");
        operator = currentEquation.splice(0, 1).toString();
        secondNum = getNum(currentEquation).join("");
        currentEquation.unshift((operate(operator, firstNum, secondNum)));
        displayScreen.textContent = currentEquation;
    }
    displayScreen.textContent = currentEquation;*/
}
// keep this in mind for potential refinement later (.split)
// can I use reduce? 
/*function getNum () {
    let endOfNum = currentEquation.findIndex(item => (
        item === " + "|| 
        item === " - "|| 
        item === " × "||
        item === " ÷ "));
    let numArr;
    if (!(endOfNum === -1)) {
        numArr = currentEquation.slice(0, endOfNum);
    } 
    else if (currentEquation.length > 1) {
        endOfNum = currentEquation.length;
        numArr = currentEquation.slice(0, endOfNum);
    } else if (endOfNum === -1) {
        numArr = currentEquation.slice(0);
    } 
    return currentEquation.splice(0, numArr.length);
}*/
//what if they start with a negative num? create special negative number? make sure it doesn't break if they use the subtract button

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', function(e) {
    removeEquation();
    }
)

function removeEquation () {

}

//click number / operator
//add number / operator to display


// user clicks number
// number goes to display
// user clicks another number
// number goes after first number (do this for n numebrs)
// user clicks operator
// preivous number stays on display
// user clicks number
// new number replaces previous numbers
// user clicks number 
//number goes after first number (do this for n numbers)
// user clicks operator
// evaluate first two numbers
// result of evaluation shows on display
// uswer clicks number
// number replaces evalution
// repeat

// keep doing an array but a check in the operator for the array length maybe (be careful abouut there being one numv)?