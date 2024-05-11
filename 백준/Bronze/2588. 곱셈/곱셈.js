const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '2588/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = [...input].map((item) => Number(item.replace('\r', '')));

const A = input[0];
const B = input[1];
const C = input[1].toString();

const t = [];

for (let i = 0; i < C.length; i++) {
  t.push(Number(C[i]));
}

const solution = [
  A * t[t.length - 1],
  A * t[t.length - 2],
  A * t[t.length - 3],
];

for (let e = 0; e < solution.length; e++) {
  console.log(solution[e]);
}
console.log(A * B);
