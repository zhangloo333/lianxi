/**
 * Created by lee on 5/15/17.
 */


var adder = function () {
    var _args = [];

    return function () {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        [].push.apply(_args, [].slice.call(arguments));
        console.log("this is for arges ",_args);
        return arguments.callee;
    }
};
var sum = adder();

console.log(sum);     // Function

//sum(300,100,400);    // 调用形式灵活，一次调用可输入一个或者多个参数，并且支持链式调用
// sum(400)(100)(300);
console.log(sum(400)(100)(300)());   // 1000 （加总计算）