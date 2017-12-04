/**
 * Created by lee on 11/17/17.
 */

function Mypromise(fn) {
    this.value;
    this.resolveFun = function () {};
    this.rejectFun = function () {};
    fn(this.resolve.bind(this),this.reject.bind());
}

Mypromise.prototype.resolve = function (val) {
    var self = this;
    self.value = val;
    setTimeout(function () {
        self.resolveFun(self.value);
    },0)
}

Mypromise.prototype.reject = function (val) {
    var self = this;
    self.value = val;
    setTimeout(function () {
       self.rejectFun(self.value);
    },0)
}

Mypromise.prototype.then = function (resolveFun,rejectFun) {
    var self = this;
    return new MyPromise(function (resolve_next, reject_next) {
        function resolveFuncWrap() {
            var result = resolveFun(self.value);
            resolve_next(result);
        }
        function rejectFuncWrap() {
            var result = rejectFun(self.value);
            resolve_next(result);
        }
        self.resolveFun = resolveFuncWrap;
        self.rejectFun = rejectFuncWrap;
    })
}

