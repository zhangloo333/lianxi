
var triangleNumber = function (arr) {
    if(!arr || arr.length < 3) return 0;
    var count = 0, i, j;

    arr.sort(function (a,b) {
        return a-b;
    })

    for(i = 0; i < arr.length-2; i++) {
        var k = i + 2;
        for(j = i + 1; j < arr.length-1 && arr[i] !== 0; j++) {
            while(k < arr.length && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            count += k-j-1;
            /*
            * 最关键的就是 这个以式子，因为k++，所以k最后是超出 arr的length的 所以 K-J-1其实就是
            * k与j之间的数
            * */
        }
    }

    return count;
}

var test = [1,1,3,4];
console.log(triangleNumber(test));