/**
 * Created by lee on 10/3/17.
 */


/**
 * Created by lee on 10/3/17.
 */
var minSubArrayLen = function(s, nums) {
    var l = 0;
    var r = -1;
    var sum = 0;
    var res = nums.length + 1;
    var helper = [];

    while(l < nums.length) {
        if(r+1 < nums.length && sum < s) {
            sum += nums[++r];
        } else {
            sum -= nums[l++];
        }

        if(sum >= s) {
            res = Math.min(res,r-l+1);
        }
    }

    if(res == nums.length + 1) return 0;
    return res;
};
var t =4;
var arr = [2,3,1];
console.log(minSubArrayLen(t,arr));