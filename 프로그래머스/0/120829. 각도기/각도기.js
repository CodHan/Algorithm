function solution(angle) {
    if(90>angle && angle>0){
       return 1;
    }if(angle === 90){
        return 2;
    }if(180>angle && angle>90){
        return 3;
    }if(angle === 180){
        return 4;
    }
}