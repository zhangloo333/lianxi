/**
 * Created by leizha on 5/16/17.
 */

var curring = function (fn) {
    var _arg = [];

    return function () {
        if(arguments.length == 0) {
            return fn.apply(this,_arg);
        }
        [].push.apply(_arg, [].slice.call(arguments));
        return arguments.callee;
    }
}

var add = function () {
    var sum = 0;
    console.log(arguments.length);
    for(var i = 0,e; i < arguments.length; i++) {
        e = arguments[i];
        sum += e;
    }
    return sum;
}

var sum = curring(add);

sum(1)(2)(3,4);

console.log(sum());

var array = [1,2,3,4,5];

var loop = function (a) {
    if(!undefined){
        console.log(a[10])
    }
    for(var i =0, e; undefined;){
        console.log(e);
    }
}

loop(array)