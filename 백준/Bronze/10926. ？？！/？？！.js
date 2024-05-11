const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '10926/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = input + '??!';
console.log(solution);
