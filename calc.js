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

    numbers.forEach((number) => number.addEventListener('click' , function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click' , function(e){
        handleOperator(e.target.textContent)
        inputScreen.textContent = inputValue + '' + operator;

    }))

    clear.addEventListener('click' , function(){
        inputValue = '';
        currentValue = '';
        operator = '';
        inputScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
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
