/**
 * Created by lee on 10/5/17.
 *
 * input : array;
 * return : sum / subarray 这个序列;
 *
 * DB:
     两个sum
     1. curSum = array[0];
     2. MaxSum = array[0];
    在遍历的途中，要看看是否存在 curSum = a[i] + curSum 来更新现在curSum
    maxSum = Math.max(curSum, maxSum) 来比较最小是否存在最大的sum

  window做法：
  lptr = 0， rptr = 0； sum， res
  当遇到 sum < 0 我们重新开一个窗口，并计算 res 和 sum当前值的大小；
  sum > 0 的情况，我们让sum 一直加arr[r]知道 sum > res 我们更新 out值

 *
 *
 */


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
            sum = arr[l];
            out = Math.max(out,sum);
        } else{
            if(r+1 < arr.length){
                sum += arr[++r];
                var temp = Math.max(out,sum);
                if(temp > out) {
                    board.pop();
                    board.push([l,r,temp]);
                    out = temp;
                }
            } else break;

        }
    }
    return board;
}

var num1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(max3(num1));
