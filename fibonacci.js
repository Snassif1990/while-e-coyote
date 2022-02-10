const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter a value for 'n': "));

// F(n) = F(n-1) + F(n-2)
let [n1, n2, n3, count] = [0, 1, 1, 0];

if(count < 0) {
    console.log(n1); 
    count = count + 1;
}
if(count < 0) {
    console.log(n2); 
    count = count + 1;
}

while(count < num){
    console.log(n3);
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
    count = count + 1;
}
