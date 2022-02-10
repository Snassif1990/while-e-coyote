const prompt = require('prompt-sync')();

let count = prompt("Please eneter a string: ")

let count2 = count;

while(count.length < 10) {
    count = count + count2
    console.log(count);
}
