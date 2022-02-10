const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter x: "));
let num2 = Number(prompt("Enter y: "));

let total = 0;

while(num1 % num2 !== 0){
    console.log(num1);
    num1++;
}

console.log(num1 + " is divisible by " + num2)