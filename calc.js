/* The Math!! */

const add = function(a , b){
    return a+b;
}
console.log(add);

const subtract = function(a , b) {
    return a - b;
}
console.log(subtract);

const divide = function(a , b) {
    return a / b;
}
console.log(divide);

const multiply = function(a , b) {
    return a * b;
}
console.log(multiply);

/* Operator Function */

function operate(operator , a , b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a , b);
        case '-':
            return subtract(a , b);
        case '*':
            return multiply(a , b);
        case '/':
            if(b === 0) return null;
            else return divide(a , b)
        default:
            return null;                     
    }

}

/* Display Functions */

let operator = '';
let inputValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded' , function() {
    let clear = document.querySelector('.clr');    
    let decimal = document.querySelector('#decimal');
    let dlt = document.querySelector('.dlt');

    let numbers = document.querySelectorAll('.number')
    let operators = document.querySelectorAll('.operator');

    let inputScreen = document.querySelector('.input');
    let currentScreen = document.querySelector('.current');
    let equal = document.querySelector('#equals');

    numbers.forEach((number) => number.addEventListener('click' , function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click' , function(e){
        handleOperator(e.target.textContent)
        inputScreen.textContent = inputValue + ' ' + operator;

    }))

    clear.addEventListener('click' , function(){
        inputValue = '';
        currentValue = '';
        operator = '';
        inputScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener('click' , function(){
       if(currentValue != '' && inputValue != ''){
        calculate()
        inputScreen.textContent = '';
        if(inputValue.length <= 5) {
        currentScreen.textContent = inputValue;
        } else {
            currentScreen.textContent = inputValue(0,5) + '...';
        }
       }
    })

    decimal.addEventListener('click' , function(){
        addDecimal();
    })
})


function handleNumber(num) {
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    inputValue = currentValue;
    currentValue = '';
}

function calculate() {
    inputValue = Number(inputValue);
    currentValue = Number(currentValue);

    if(operator === '+') {
        inputValue += currentValue;
    } else if(operator === '-') {
        inputValue -= currentValue;
    } else if(operator === 'x') {
        inputValue *= currentValue;
    } else {
        inputValue /= currentValue;
    }

    inputValue = roundNumber(inputValue);
    inputValue = inputValue.toString();
    currentValue = inputValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}
