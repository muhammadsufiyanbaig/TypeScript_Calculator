"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let FirstNumber = parseInt(prompt(`Enter The First Number: `));
let SecondNumber = parseInt(prompt(`Enter The Second Number: `));
let operators = prompt(`Choose the Operators "+", "-", "*", "/", "%"`);
if (operators == "+") {
    let result = FirstNumber + SecondNumber;
    console.log(`The sum of ${FirstNumber} & ${SecondNumber} is ${result}`);
}
else if (operators == "-") {
    let result = FirstNumber - SecondNumber;
    console.log(`The subtraction of ${FirstNumber} & ${SecondNumber} is ${result}`);
}
else if (operators == "*") {
    let result = FirstNumber * SecondNumber;
    console.log(`The product of ${FirstNumber} & ${SecondNumber} is ${result}`);
}
else if (operators == "/") {
    let result = FirstNumber / SecondNumber;
    console.log(`The division of ${FirstNumber} & ${SecondNumber} is ${result}`);
}
else if (operators == "%") {
    let result = FirstNumber % SecondNumber;
    console.log(`The modulus of ${FirstNumber} & ${SecondNumber} is ${result}`);
}
else {
    console.log("Invalid Input");
}
