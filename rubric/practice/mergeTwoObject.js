
var curring = function (fn) {
    let _arg = [];
    return function () {
        var args = [...arguments];
        console.log(args);
        if(!args || args.length == 0){
             return fn.apply(this,_arg);
        }
        _arg = [..._arg,...args];
        // console.log(_arg);
        return arguments.callee;
    }
}

var add = (...args) =>{
    var sum = 0;
    args.forEach((e) => {
        sum += e;
    })
    return sum;
}

var sum = curring(add);

console.log(sum(1,2,3,4)(1,2)());