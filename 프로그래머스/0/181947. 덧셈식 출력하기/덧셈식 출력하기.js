const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = null;

rl.on('line', function (line) {
    input = line.split(' ');
    answer = Number(input[0]) + Number(input[1])
    
}).on('close', function () {
    console.log(`${input[0]} + ${input[1]} = ${answer}`);
});