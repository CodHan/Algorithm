const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '2884/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let H = input[0];
let M = input[1];

M -= 45;

if (M < 0) {
  M = M + 60;
  if (H === 0) {
    H = 24;
  }
  H--;
}
console.log(H, M);
