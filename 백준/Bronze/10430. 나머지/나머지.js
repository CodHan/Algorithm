const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '10430/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const A = input[0];
const B = input[1];
const C = input[2];
const solution = [
  (A + B) % C,
  ((A % C) + (B % C)) % C,
  (A * B) % C,
  ((A % C) * (B % C)) % C,
];
for (let i = 0; i < solution.length; i++) {
  console.log(solution[i]);
}
