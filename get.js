/**
 * Created by lee on 9/30/17.
 */


 a  = {
    a:'haha',
    getA: function () {
       console.log(this.a);
    }
}

var b = {
    a:'hello'
}

var getA = a.getA;
var getA2 = getA.bind(a);

function run(fn) {
    fn();
}

a.getA();
getA();
run(a.getA);
getA2.call(b);