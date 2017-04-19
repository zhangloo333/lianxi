/**
 * Created by leizha on 4/13/17.
 */

/**  * Created by leizha on 9/26/16.

function Super() {
    this.val = 1;
    this.arr = [1];
}

function Sub() {

}

Sub.prototype = new Super();



 */

/**
 * call 分享一个父类实例*/

function Super() {
    this.val = 1;
    this.arr = [1];
}


function Sub() {
    Super.call(this);
}
Sub.prototype = new Super();




// testing 函数
var sub1 = new Sub();
var sub2 = new Sub();

sub1.val = 2;
sub1.arr.push(2);

console.log(sub1.val);
console.log(sub2.val);

console.log('-------------');
console.log(sub1.arr);
console.log(sub2.arr);