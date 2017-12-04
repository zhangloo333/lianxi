/**
 * Created by lee on 11/17/17.
 */

var lonhestCommonPrefix = function(arr) {
    var prefix = "";
    var len = arr.length;
    var len1 = arr[0].length;

    for(var i = 0; i <len1; i++) {
        for(var j = 1; j < len; j++) {
            if(i > arr[j].length || arr[j][i] !== arr[0][i]) {
                console.log('prefix', prefix);
                return prefix;
            }
        }
        prefix = prefix + arr[0].charAt(i);
        console.log(prefix);
    }
    return prefix

}

var testData = ['lea','leeee', 'lee'];
console.log(lonhestCommonPrefix(testData));