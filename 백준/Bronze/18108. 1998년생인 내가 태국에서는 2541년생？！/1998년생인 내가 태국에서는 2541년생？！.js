const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '18108/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const solution = input - 543;
console.log(solution);
