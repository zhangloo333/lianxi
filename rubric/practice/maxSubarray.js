/**
 * Created by lee on 11/1/17.
 * window的题是一定不能有 指针交叉的的问题
 *  注意这个循环是从 1 开始的。
 *  sum 和 cursum 都是nums【0】
 */


var Subarray = (nums) =>{
  if(!nums || nums.length == 0) return 0;

  let curSum = nums[0];
  let sum = nums[0];

  for(let i = 1; i < nums.length; i++) {
      curSum = Math.max(nums[i], nums[i]+curSum);
      sum = Math.max(curSum,sum);
  }
  return sum;
}

var t =[-2,1,-3,4,-1,2,1,-5,4];

console.log(Subarray(t));
