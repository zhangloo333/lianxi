var Foo = function(a) {
    this.a = a;
    function bar() {
        return this.a;
    }
    this.baz = function() {
        return this.a;
    };
};

Foo.prototype = {
    biz: function() {
        return this.a;
    }
};

var Foo = function( a ) {
    // this.a = a;
    function bar() {
        return a;
    }
    this.baz = function() {
        return a;
    };
};

Foo.prototype = {
    biz: function() {
        return a;
    }
};

var f = new Foo( 7 );
f.bar();
f.baz();
f.biz();


var f = new Foo(7);
// console.log(f.bar())// f.bar();
// console.log(f.baz());
console.log(f.biz());
// console.log(bar())