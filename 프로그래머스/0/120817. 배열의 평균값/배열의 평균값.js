function solution(numbers) {
    var answer = 0;
    let sum = 0; //모든 합을 누적시킬 변수
    let cnt = 0;
    while(cnt < numbers.length){
        sum = sum + numbers[cnt];
        cnt = cnt + 1;
    }
    // sum에는 배열의 총합이 들어있다.

    return sum / numbers.length;
}






//평균값 구하기
//1.각 원소들을 다 더 한다.
//2.원소의 길이만큼 나눈다.