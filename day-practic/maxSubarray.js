/**
 * Created by lee on 1/17/18.
 */

const maxSubArray = (arr)=> {
    if(!arr) return 0;

    let currentSum = arr[0];
    let maxSum = arr[0];
    let subArr = [arr[0]];

    for(let i = 1; i < arr.length; i++) {
        // currentSum = Math.max(arr[i], arr[i]+currentSum);
        // maxSum = Math.max(currentSum,maxSum);

    }

    console.log(subArr);
    return maxSum;
}

var num1 = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(num1))