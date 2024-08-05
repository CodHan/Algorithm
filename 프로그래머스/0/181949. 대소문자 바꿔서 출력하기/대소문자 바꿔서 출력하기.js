const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = ""
    
    let i = 0
    while(i<str.length){
        str[i] === str[i].toUpperCase() ? answer += str[i].toLowerCase() : answer += str[i].toUpperCase()
                
     i++;
    }
    console.log(answer);
});