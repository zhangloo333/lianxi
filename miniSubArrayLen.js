/**
 * Created by lee on 10/3/17.
 */
var minSubArrayLen = function(s, nums) {
    var l = 0;
    var r = -1;
    var sum = 0;
    var res = nums.length;
    var helper = [];

    while(l < nums.length) {
        if(r+1 < nums.length && sum < s) {
            console.log("res=", res, "l=",l,"rB",r,"r-l+1=",(r-l+1), "sum",sum);
            sum += nums[++r];
            console.log("res=", res, "l=",l,"rE",r,"r-l+1=",(r-l+1), "sum",sum);
        } else {
            console.log("res=", res, "lB=",l,"r",r,"r-l+1=",(r-l+1), "sum",sum);
            sum -= nums[l++];
            console.log("res=", res, "lE=",l,"r",r,"r-l+1=",(r-l+1), "sum",sum);
        }
        console.log('----------');

        if(sum >= s) {
            // console.log("res=", res, "l=",l,"r",r,"r-l+1=",(r-l+1));
            if(res > (r-l+1)){
                helper.push([l,r]);
            }
            res = Math.min(res,r-l+1);

        }
        console.log(helper);
    }

    if(res == nums.length) return 0;
    return res;
};
var t =4;
var arr = [2,3,1];
console.log(minSubArrayLen(t,arr));