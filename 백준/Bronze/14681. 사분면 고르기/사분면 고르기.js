const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '14681/input.txt';
let input = fs.readFileSync(0, 'utf-8').trim().toString().split('\n');

input = [...input].map((item) => Number(item.replace('\r', '')));

const A = input[0];
const B = input[1];

if (A > 0 && B > 0) {
  return console.log(1);
} else if (A < 0 && B > 0) {
  return console.log(2);
} else if (A < 0 && B < 0) {
  return console.log(3);
} else if (A > 0 && B < 0) {
  return console.log(4);
}
return;
