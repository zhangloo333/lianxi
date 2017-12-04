/**
 * Created by lee on 10/26/17.
 */

function decorator(fn) {
    return function () {
        var _arg = [].slice.call(arguments);
        fn.apply(this,_arg);
        return this;
    }
}

function Person(){}

Person.prototype.setName = decorator(function (f,l) {
    this.first = f;
    this.last = l;
})

Person.prototype.sayName = decorator(function () {
    console.log(this.first, this.last);
})

var per = new Person();
per.setName('a','b').sayName().setName('c','d').sayName();