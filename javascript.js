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
        return "Hmmmm should I compute this? Nah";
    }
    return firstNum / secondNum;
}

function operate (operator, firstNum, secondNum) {
    firstNum = Number(firstNum); 
    secondNum = Number(secondNum);
    switch(operator) {
        case "+":
            return add (firstNum, secondNum);
        case "-":
            return subtract (firstNum, secondNum);
        case "*":
            return multiply (firstNum, secondNum);
        case "/":
            return divide (firstNum, secondNum);
    }
}

const numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener('click', function(e){
    if (!(e.target.className==="numbers")) {
        getNumber(e.target.textContent);
    }
});

const zeroButton = document.querySelector(".zero");

zeroButton.addEventListener('click', function(e){
    getNumber(e.target.textContent);
});

const calculator = document.querySelector(".calculator");

calculator.addEventListener('keyup', function (e) {
    if (isFinite(e.key)) {
        getNumber(e.key);
    } else if (e.key === "+"||
                e.key === "-"||
                e.key === "/"||
                e.key === "*") {
                    getOperator(e.key);
    } else if (e.key === "="|| e.key === "Enter") {
        getResult();
    } else if (e.key === "Backspace") {
        useBackspace();
    }
}
);

function getNumber(givenNum) {
        currentNumber.push(givenNum);
        updateDisplayNumber ();     
}

const displayScreen = document.querySelector(".display");

function updateDisplayNumber () {
    display = currentNumber.join("");
    displayScreen.textContent = display;
}

const operatorButtons = document.querySelector(".operators");

operatorButtons.addEventListener('click', function(e) {
    if (!(e.target.className==="operators")) {
        getOperator(e.target.className);
    }
});

function getOperator (givenOperator) {
    if (firstNum === null && currentNumber.length > 0) { 
        firstNum = currentNumber.join("");
        currentNumber = [];
        operator = givenOperator;
    } else if (secondNum === null && currentNumber.length > 0) {
        secondNum = currentNumber.join("");
        startEquation();
        operator = givenOperator;
    } else {
        operator = givenOperator;
    }
}

const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener('click', function (e) {
    if (!(currentNumber.includes("."))) {
        currentNumber.push(e.target.textContent);
        updateDisplayNumber (); 
    }
});

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', function() {
    getResult();
});

function getResult () {
    if (!(firstNum === null) 
        && !(firstNum === "") 
        && (currentNumber.length > 0)){
            secondNum = currentNumber.join("");
            startEquation();
            firstNum = null;
            secondNum = null;
    }
}

function startEquation () {
    currentResult = operate(operator, firstNum, secondNum);
    if (typeof currentResult === "number") {
        currentResult = Math.round((currentResult + Number.EPSILON) * 100) / 100;
    }
    displayScreen.textContent = currentResult; 
    firstNum = currentResult;
    secondNum = null;
    currentNumber = [];
}

const backspaceButton = document.querySelector(".backspace")

backspaceButton.addEventListener('click', function () {
    useBackspace();
});

function useBackspace () {
    if (currentNumber.length > 0) {
        currentNumber.pop();
        updateDisplayNumber();
    }
}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', function() {
    firstNum = null;
    secondNum = null;
    currentNumber = [];
    displayScreen.textContent = "CLEAR";
    }
);

//Rounding decimals to fit screen
//pretty
    // keep the display at fixed hight
//once click equals to should implement if want to continue function after that