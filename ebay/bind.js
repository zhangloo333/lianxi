/**
 * Created by lee on 11/17/17.
 */
var x = 22;
var obj = {
    x: 125,
    getX: function () {
        return this.x;
    }
};
//怎么让 getX 输出 22， 其实就是用 bind(this),因为this是在global里面所有这个this指的是 global的this
console.log(obj.getX.bind(this)()) //输出 22 如果不绑定this 输出的是 123