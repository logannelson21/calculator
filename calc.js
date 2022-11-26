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

function operate(operater , a , b) {
    a = Number(a);
    b = Number(b);
    if(operater === '+') {
        return add(a , b);
    } 
    else if(operater === '-') {
        return subtract(a , b);
    } 
    else if(operater === '*') {
        return multiply(a , b);
    }
    else if(operater === '/') {
        return divide(a , b);
    }
}