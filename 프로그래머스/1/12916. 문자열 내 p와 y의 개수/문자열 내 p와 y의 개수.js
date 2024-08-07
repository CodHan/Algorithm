
function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    const upperS = s.toLowerCase().split('');
  for(let i = 0; i < upperS.length; i++){
        if(upperS[i] === "p"){
            pCnt += 1
        }
        if(upperS[i] === "y"){
            yCnt += 1
        }
  }
   return yCnt === pCnt

}


//문자열 대문자로 변경
//p의 개수를 담는 변수, y의 개수를 담는 변수
//push 후 같으면 true 다르면 false