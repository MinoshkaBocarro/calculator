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
    firstNum = parseInt(getFirstNum) //start here for change to floating point
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
    //currentEquation.push(""); try this later if there are issues with weird user inputs
    startEquation();
    }
)

function startEquation () {
    while ((currentEquation.length > 1)) {
         // maybe make this a function outside?
        // Slice up to first num, slice operator, repeat (maybe make this a loop length too within the while loop?) to get second numb, send that to operate, get the result back and add it back to array at the start with unshift
        firstNum = getNum(currentEquation);
        operator = currentEquation.splice(0, 1);
        secondNum = getNum(currentEquation);
    }
}
// keep this in mind for potential refinement later (.split)

function getNum () {
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
        endOfNum = currentEquation.length-1;
        numArr = currentEquation.slice(0, endOfNum);
    } else if (endOfNum === -1) {
        numArr = currentEquation.slice(0);
    } 
    return currentEquation.splice(0, numArr.length);
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