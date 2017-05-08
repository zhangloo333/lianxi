/**
 * Created by lee on 5/8/17.
 */




class Runner{

    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.counter = 0;
    }

    push(fn){
        if(this.queue.length < this.limit){
            this.queue.push(fn);
        }
    }

    remove(fn) {
        this.queue.pop();
    }

    run(){
        // if(this.queue.length == this.limit) {
        //
        //     this.queue.forEach(function (e) {
        //         e.call();
        //     })
        // }
        var self = this;

        if(this.queue.length > 0 && this.counter < this.limit){
            setTimeout(function () {
                self.counter++;
            var task = self.queue.shift();
            var done = function(){
                self.counter--;
                console.log(`number at this moment:${self.counter}`)
                self.run();
            }
            task.call(this,done);
            },0);
        }
    }
}

var r = new Runner(3);

// var done= function() {
//     // return function () {
//     var d = new Date();
//         console.log(d.getTime());
//     // }
// }
var exampleTask = function (){

    setTimeout(function () {
        console.log(112);
    },2000);
}

r.push(exampleTask);
r.push(exampleTask);
r.push(exampleTask);
r.push(exampleTask);

console.log(r.queue);

r.run();