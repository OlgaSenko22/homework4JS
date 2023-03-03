"use strict";
let operator;
let result;
for (;;){
    operator = prompt("What do you want to do: add, sub, mult, div", 'add');
    if(
        operator === "add" ||
        operator === "sub" ||
        operator === "mult" ||
        operator === "div"
)
        break;
    else(alert("You entered wrong operator! What do you want to do: add, sub, mult, div?"))
}
let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");
const num1 = firstNumber;
const num2 = secondNumber;
switch (operator) {
    case "add":
        result=num1 + num2;
        alert(`${num1}+${num2}=${result}`);
        break;
    case "sub":
        result=num1 - num2;
        alert(`${num1}-${num2}=${result}`);
        break;
    case "mult":
        result=num1 * num2;
        alert(`${num1}*${num2}=${result}`);
        break;
    case "div":
        result=num1 / num2;
        alert(`${num1}/${num2}=${result}`);
        break;
}