function threeSume(arr,target) {

    arr.sort(function (a,b) {
        return a - b;
    });

    var res = Number.MAX_VALUE;
    var minDistance = Number.MAX_VALUE; //这个变量是全局如果写在for loop里面，当下一个有盖被重新赋值了

    for(var i = 0; i < arr.length -2; i++) {
        if(i > 0 && arr[i] == arr[i-1]) { // 这一点容易出错 i -1 而不是 i +1 因为是和她的前一个进行对比。
            continue;
        }

        var j = i + 1;
        var k = arr.length-1;
        var sum = target-arr[i];

        while(j < k){
            var tempMin = Math.abs(Math.abs(arr[j] + arr[k] + arr[i] - target));
            if(arr[j]+arr[k] == sum) {
                return target;
            } else if(arr[j] + arr[k] > sum){
                k--;
            } else {
                j++;
            }
            if(tempMin < minDistance){
                minDistance  = tempMin;
                res = arr[j] + arr[k] + arr[i];
            }
        }
    }
    return res;

}

var nums = [1,1,1,0];

var numSort =[ -4, -1, -1, 0, 1, 2 ];

console.log(threeSume(nums,-1000));
