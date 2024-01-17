function solution(n) {
    var answer = 0;
    let cnt = 1;
    while(cnt <= n){
        if(cnt % 2 === 0){
            answer = answer + cnt;
        }
        cnt = cnt + 1;
    }
    return answer;
}