/**
 * Created by lee on 5/15/17.
 */
var currying = function (fn) {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        Array.prototype.push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
};

var multi=function () {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
        total += c;
    }
    return total;
};

var sum = currying(multi);

sum(100,200)(300);
sum(400);
console.log(sum());