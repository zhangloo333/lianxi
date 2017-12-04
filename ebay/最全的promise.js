/**
 * Created by lee on 11/17/17.
 */

/**
 * Created by lee on 11/17/17.
 */

function MyPromise(fn) {
    this.value;
    // 添加状态 for 不能同时执行 resolve 和 reject
    this.status = 'pending';
    //--end
    this.resolveFun = function() {};
    this.rejectFun = function() {};
    fn(this.resolve.bind(this),this.reject.bind(this));
}

MyPromise.prototype.resolve = function (val) {
    var self = this;

    if(this.status == 'pending') {
        this.status = 'resolved';
        self.value = val;
        setTimeout(function () {
            self.resolveFun(self.value);
        })
    }

    // for old
    // self.value = val;
    // setTimeout(function() {
    //     self.resolveFun(self.value);
    // },0)
}

MyPromise.prototype.reject = function (val) {
    var self = this;

    // 添加状态 for 不能同时执行 resolve 和 reject
        if(this.status == 'pending') {
            this.status = 'rejected';
            // same as the old
            self.value = val;
            setTimeout(function () {
                self.rejectFun(self.value);
            },0)
        }
    //--end

    // old
    // self.value = val;
    //
    // setTimeout(function () {
    //     self.rejectFun(self.value);
    // },0)
}

MyPromise.prototype.then = function (resolveFun,rejectFun) {
    this.resolveFun = rejectFun;
    this.rejectFun = rejectFun;
}

//解决链式调用的问题

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

// 解决链式调用的里面返回的有promise的情况
MyPromise.prototype.then = function(resolveFunc, rejectFunc) {
    var self = this;
    return new MyPromise(function(resolve_next, reject_next) {
        function resolveFuncWrap() {
            var result = resolveFunc(self.value);
            if (result && typeof result.then === 'function') {
                //如果result是MyPromise对象，则通过then将resolve_next和reject_next传给它
                result.then(resolve_next, reject_next);
            } else {
                //如果result是其他对象，则作为参数传给resolve_next
                resolve_next(result);
            }
        }
        function rejectFuncWrap() {
            var result = rejectFunc(self.value);
            if (result && typeof result.then === 'function') {
                //如果result是MyPromise对象，则通过then将resolve_next和reject_next传给它
                result.then(resolve_next, reject_next);
            } else {
                //如果result是其他对象，则作为参数传给resolve_next
                resolve_next(result);
            }
        }
        self.resolveFunc = resolveFuncWrap;
        self.rejectFunc = rejectFuncWrap;
    })
}

// for testing purpose
var fn=function(resolve, reject){
    console.log('begin to execute!');
    var number=Math.random();
    if(number<=0.5){
        resolve('less than 0.5' + number);
    }else{
        reject('greater than 0.5' + number);
    }
}

var p = new MyPromise(fn);
p.then(function(data) {
    console.log('resolve: ', data);
}, function(data) {
    console.log('reject: ', data);
});