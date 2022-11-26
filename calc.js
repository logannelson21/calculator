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
    switch (operater) {
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