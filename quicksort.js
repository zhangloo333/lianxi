/*
*  n = 1354
*
*  while n > 0 % /
*  1354 % 10 = 4
*  1354/10;
*
*  out*10 + 4
*
* */

function reverseNumber(n) {
    if(n>0 && n < 10) return n;
    else if(n > Number.MAX_VALUE || n < -Number.MAX_VALUE) return 0;


    var sign = 1;
    var out = 0;
    if(n<0){
        sign = -1;
        n = Math.abs(n);
    }

    while(n>0){
        out = out*10;
        var temp = n%10;
        out += temp;
        n = parseInt(n/10);
    }

    return sign*out;
}

console.log(reverseNumber(-1354));