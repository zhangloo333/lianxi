/**
 * Created by lee on 5/15/17.
 */

var object = {

};

function sum() {
    var array = [].slice.call(arguments);
    var sum =0;
    array.map(e => sum += e);

    console.log("this----------");
    console.log(this);
    return sum;
}

//console.log(sum(1,2,3,4,5));
var c =sum.bind(object,10);

console.log(c);