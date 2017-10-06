/**
 * Created by lee on 9/27/17.
 */
var ObjectSortByValue1 = function (obj){
    KeySorted = Object.keys(obj).sort(function (a,b) {
        return obj[a] - obj[b];
    })

    var out = {};
    KeySorted.forEach(function (e) {
        out[e] = obj[e]
    })

    return out;
}

var test = {
    a:1,
    c:2,
    w:3,
    b:4,
    f:9
}

console.log(ObjectSortByValue1(test));