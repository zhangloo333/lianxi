/**
 * Created by lee on 11/5/17.
 */


function curry(fn) {
    var _arg = [];
    return function () {
        if(arguments.length == 0) {
            console.log("enter");
            return fn.apply(this, _arg);
        }
        [].push.apply(_arg,[].slice.call(arguments));
        return arguments.callee;
    }
}

function add() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var sum = curry(add);
console.log(sum(1,2,3)(1));