
/**
 * Created by lee on 5/2/17.
 */

var sumUp = function(){
    var temp = [].slice.call(arguments);
    var sum = 0
    for(var i = 0; i < arguments.length; i++) {
        arguments[i].map(x => sum+=x);
    }

    console.log(sum);
    console.log(temp);
}

var a1 = [1,2,3,4,5];
var a2 = [5,3,2,2,4];
sumUp(a1,a2);


var a = { b: {c: 4} , d: { e: {f: 1} } };
var g = Object.assign({}, a);

console.log(g);
