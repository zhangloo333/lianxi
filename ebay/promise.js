/**
 * Created by lee on 11/17/17.
 */

function MyPromise(fn) {
    this.value;
    this.resolveFun = function() {};
    this.rejectFun = function() {};
    fn(this.resolve.bind(this),this.reject.bind(this));
}

MyPromise.prototype.resolve = function (val) {
    var self = this;
    self.value = val;
    setTimeout(function() {
        self.resolveFun(self.value);
    },0)
}

MyPromise.prototype.reject = function (val) {
    var self = this;
    self.value = val;

    setTimeout(function () {
        self.rejectFun(self.value);
    },0)
}

// MyPromise.prototype.then = function (resolveFun,rejectFun) {
//     this.resolveFun = rejectFun;
//     this.rejectFun = rejectFun;
// }


MyPromise.prototype.then = function(resolveFunc, rejectFunc) {
    var self = this;
    return new MyPromise(function(resolve_next, reject_next) {
        function resolveFuncWrap() {
            var result = resolveFunc(self.value);
            resolve_next(result);
        }
        function rejectFuncWrap() {
            var result = rejectFunc(self.value);
            resolve_next(result);
        }

        self.resolveFunc = resolveFuncWrap;
        self.rejectFunc = rejectFuncWrap;
    }) // end my MyPromise
}

// for testing purpose basic
//  var fn=function(resolve, reject){
//     console.log('begin to execute!');
//     var number=Math.random();
//     if(number<=0.5){
//         resolve('less than 0.5' + number);
//     }else{
//         reject('greater than 0.5' + number);
//     }
// }
//
//  var p = new MyPromise(fn);
//  p.then(function(data) {
//     console.log('resolve: ', data);
// }, function(data) {
//     console.log('reject: ', data);
// });


// testing for chine;
var fn=function(resolve, reject){
    resolve('hello');
}

var p1=new Promise(fn);
p1.then(function(data){
    console.log(data);
    return 'hello again';
}).then(function(data){
    console.log(data);
    return 'hello third time!';}
    )
.then(function(data){
    console.log(data);
});

