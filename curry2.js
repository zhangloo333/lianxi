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

var converter = function(input,factor, symbol){
    return input * factor + symbol;
}

var sum = currying(converter);

sum(100,200,2);
console.log(sum());