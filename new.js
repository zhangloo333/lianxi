/**
 * Created by lee on 5/5/17.
 */
var module = {
    age: 30,
    foo: function () {
        setTimeout(function(){
            console.log(this.age);
        }.bind(this),2000)
    },
    bra: function () {
        setTimeout(function(){
            console.log(this.age);
        }.bind(this),2000)
    }

}

var aaa = [];
aaa.push(module.foo);
aaa.push(module.bra);


var queue = {
    items: [],
    add: function() {
        for (var i = 0; i < arguments.length; i++) {
            this.items.push(arguments[i]);
        }
    },
    run: function() {
        //var this = that;
        this.items.shift()(function() {
            this.run();
        })
    }
};

queue.add(module.foo, module.bra);
console.log(queue.items);
queue.run();

console.log(aaa[0])

//function(){
//    setTimeout(function() {
//        $("#output").append(" one ");
//        setTimeout(function() {
//            $("#output").append(" two ");
//        }, 100);
//    }, 1000);
//}
//
//function runner(arh1,callback){
//    arh1.call();
//    if(callback){
//        runner(arh1,callback);
//    }
//}