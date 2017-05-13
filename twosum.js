/**
 * Created by leizha on 5/12/17.
 * 找到后就跳出循环体
 */



var twoSum = function(array,start,end,target) {
    if(array == null || array.length == 0) return [];

    var indexSet = [];
    var store = array.sort(function (a,b) {
        return a-b;
    })
    while(start < end) {
        var result = store[start] + store[end];

        if(result == target) {
            indexSet.push(store[start],store[end]);
            break;
        } else if(result > target) {
            end--;
        } else if(result < target){
            start++;
        }
    }
    return indexSet;

}

var twoSum = function(nums, target) {
    if(nums == null || nums.length == 0) return [];

    var indexSet = [];
    var mapset = new Map();

    for(var i = 0; i < nums.length; i++) {
        if(mapset.has(target-nums[i])){
            indexSet.push(mapset.get(target-nums[i]));
            indexSet.push(i);
            return indexSet
        }
        mapset.set(nums[i],i);
    }
    console.log(mapset,'----');


    return indexSet;
};

var test = [3,2,4];
var target = 6;

console.log(twoSum(test,target));
