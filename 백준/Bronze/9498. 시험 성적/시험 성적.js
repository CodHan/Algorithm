const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : '9498/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

if (input >= 90 && input <= 100) {
  return console.log('A');
} else if (input >= 80 && input <= 89) {
  return console.log('B');
} else if (input >= 70 && input <= 79) {
  return console.log('C');
} else if (input >= 60 && input <= 69) {
  return console.log('D');
}
return console.log('F');
