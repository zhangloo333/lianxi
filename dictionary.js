/**
 * Created by lee on 10/11/17.
 */


var arr = {};

arr["a"] = "1";
arr["b"] = "6";
arr["c"] = "5";
arr["d"] = "4";
arr["e"] = "3";
arr["f"] = "2";

var c = Object.keys(arr);
console.log(Object.keys(arr));
console.log(c.sort(function (a,b) {
    if(a > b) return -1
    else return 1;
}));
