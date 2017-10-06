
function reversNumer(num) {

    if(num < 10 && num > -10) return num;
    else if(num > Number.MAX_VALUE || num < Number.MIN_VALUE) return 0;

    var sign = 1;
    var bit = 0;
    var out = 0;

    if(num < 0) {
        sign = -1;
        num = Math.abs(num);
    }

    while(num > 0) {
        out *= 10;
        out += num%10;
        console.log(out);
        num = parseInt(num/10);
    }

    return out*sign;
}

var test = 123;

console.log(reversNumer(test));