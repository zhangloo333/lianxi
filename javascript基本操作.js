/**
 * Created by lee on 10/29/17.
 */

var arr = [1,2,3,4,5,6,7];

console.log(arr);

// console.log(arr.splice(3,3));


var c = arr.filter(function (e) {
    return e > 4;
})
console.log(c);

var Matrix = function (m,n,init) {
    return Array(m).fill().map(function () {
        return Array(n).fill(init);
    })
}

console.log(Matrix(3,4,19));


var a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add(3);

console.log(a.delete(2));
// console.log(a.clear());
console.log(a);

// var a = new Object();

for(var ss of a) {
    console.log('ss',ss);
}
//
// a.c = "c"
// a.f = "cs"
// a.g = "cd"
//
//
// console.log(Object.keys(a).length);

var map1 = new Map();
map1.set('1',1);
map1.set('2',2);
map1.set('3',3);

for([key,value] of map1) {
    console.log( "key =>" + key + "value =>" + value);
}

// 查询：
console.log(map1.get('1'));
console.log(map1.has('1'));
console.log(map1.delete('2'));
console.log(map1);
console.log(map1.clear());
console.log(map1);

var cat = {
    a:1,
    b:2
}

console.log(cat.hasOwnProperty('a'));


function ACX() {
    this.string = '';
    this.arr = ['one','two','three'];
    var c="";

    this.arr.forEach(function (e) {
        console.log(this);
        c += e;
    })
    this.string = c;
    console.log(this.string);
}

new ACX();

