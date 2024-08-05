const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str.forEach((item,idx)=>{
        if(item === item.toUpperCase()){
            str[idx] = item.toLowerCase();
        } else{
             str[idx] = item.toUpperCase();
        }
       
    })
    console.log(str.join(''))
});