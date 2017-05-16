/**
 * Created by leizha on 5/16/17.
 */


Function.prototype.curry = function() {
    if (arguments.length<1) {
        return this; //nothing to curry. return function
    }
    var self = this;
    var args = toArray(arguments);
    return function() {
        return self.apply(this, args.concat(toArray(arguments)));
    }
}

function toArray(args) {
    return Array.prototype.slice.call(args);
}

var multi=function () {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
        total += c;
    }
    return total;
};

var sum = multi.curry();

sum(100)(2)(3);
console.log(sum());