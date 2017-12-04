function lSumR(arr) {
    if(!arr || arr.length == 0) return 0;

    var sum =0;
    var leftS = 0;

    arr.forEach(function (a) {
        sum += a;
    })

    for(var i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if(leftS === sum) {
            return i;
        }
        leftS += arr[i];
    }

    return -1;
}

var a = [-7,1,5,2,-4,3,0];
console.log(lSumR(a));