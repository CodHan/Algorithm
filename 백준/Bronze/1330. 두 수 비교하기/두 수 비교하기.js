const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '1330/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const A = input[0];
const B = input[1];

if (A > B) {
  return console.log('>');
} else if (A < B) {
  return console.log('<');
} else if (A == B) {
  return console.log('==');
}
