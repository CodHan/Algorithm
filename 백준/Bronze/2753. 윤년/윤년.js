const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '2753/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
  return console.log(1);
}
console.log(0);
