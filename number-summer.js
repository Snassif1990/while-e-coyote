const prompt = require('prompt-sync')({sigint: true});

let num = prompt("Enter some numbers (type 'done' when complete): ");

// condition

let total = 0;
while (num !== "done"){
// input numbers
    total = total + parseInt(num);
    num = (prompt("> "))
}

console.log("Those numbers sum to " + total)