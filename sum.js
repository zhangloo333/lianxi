function curring(fn) {
    var _arg = [];
    return function () {
        if(arguments.length == 0) {
            return fn.apply(this,_arg);
        }
        _arg.push([].slice.call(arguments));
        return arguments.callee;
    }
}

function add() {
    var out = 0;

    for (var i = 0; i < arguments.length; i++) {
        out += parseInt(arguments[i]);
    }

    return out;
}

var sum = curring(add);

console.log(sum(1)(4)(6)());