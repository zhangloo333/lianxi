/**
 * Created by lee on 10/5/17.*/

/**
 *
 *
 * */


function maxSubarray(array) {
    if(array == null || array.length ==0) {
        return Number.MIN_VALUE;
    }

    var gSum=0;
    var tSum =0;
    var header;

    for(var i =0; i < array.length; i++) {
        if(array[i]>0){
            header =i;
            break;
        }
    }

    for(var i = header; i < array.length; i++) {
        tSum += array[i];
        if(tSum < 0){
            tSum = 0;
        }
        gSum = Math.max(tSum, gSum);
    }

    return gSum;
}

function maxSarray2(array) {
    if (array == null || array.length == 0) {
        return Number.MIN_VALUE;
    }

    var curSum = array[0];
    var MaxSum = array[0];

    for (var i = 1; i < array.length; i++) {
        curSum = Math.max(array[i], array[i] + curSum);
        MaxSum = Math.max(curSum, MaxSum);
    }
    return MaxSum;
}

var num1 = [-2,1,-3,4,-1,2,1,-5,4];

// 使用欢动窗口开看看， 寻找之间存在的最大的 sum 的和
function max3(arr) {
    var l = 0, r = 0;
    var sum = arr[0];
    var out = arr[0];
    var board = [];

    while(l < arr.length && r < arr.length) {
        if(sum < 0) {
            l++;
            r = l;
            out = Math.max(out,arr[l]);
            sum = arr[l];
            console.log(out);
        } else{
            if(r+1 < arr.length){
                sum += arr[++r];
                var temp = Math.max(out,sum);
                if(temp > out) {
                    board.pop();
                    board.push([l,r,temp]);
                    out = temp;
                }
                console.log('out2', out);
            } else break;

        }
    }
    return board;
}



// console.log(maxSubarray(num1));
console.log(maxSarray2(num1));
console.log(max3(num1));