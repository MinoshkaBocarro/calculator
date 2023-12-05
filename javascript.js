let firstNum = null;
let operator;
let secondNum = null;
let currentNumber = [];
let operatorClicked;
let equalsClicked;

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
    if ((operatorClicked === false) && equalsClicked) {
        firstNum = null;
        secondNum = null;
        equalsClicked = false;
    }
    operatorClicked = false
    currentNumber.push(givenNum);
    updateDisplayNumber ();     
}

const displayScreen = document.querySelector(".display");

function updateDisplayNumber () {
    displayScreen.textContent = currentNumber.join("");
}

const operatorButtons = document.querySelectorAll(".operators");

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(e) {
        getOperator(e.target.classList[0]);
    })
}

function getOperator (givenOperator) {
    operatorClicked = true
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
            equalsClicked = true;
        }
    if (operatorClicked) {
        secondNum = firstNum;
        startEquation();
        operatorClicked = false;
        equalsClicked = true;
    }
}


function startEquation () {
    currentResult = operate(operator, firstNum, secondNum);
    if (currentResult.toString().length > 16) {
        roundNum();
    }
    displayScreen.textContent = currentResult; 
    firstNum = currentResult;
    secondNum = null;
    currentNumber = [];
}

function roundNum() {
    const roundDecimalTo = currentResult.toString().split("").indexOf(".")
    if (roundDecimalTo !== -1) {
        roundBy = 10 ** (15 - roundDecimalTo)
        currentResult = Math.round((currentResult + Number.EPSILON) * roundBy) / roundBy;
    }
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
    operator = null;
    currentNumber = [];
    displayScreen.textContent = "CLEAR";
    }
);
