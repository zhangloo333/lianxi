/**
 * Created by lee on 5/8/17.
 */
// function exampleTask(done) {
//     setTimeout(done, 2000);
// }
"use strict";
function exampleTask(done) {
    setTimeout(done, 2000);

}

var done = function (fn) {
    console.log("excute content");
    setTimeout(fn,0);
    // self.run();
    // fn.call();
}

class Runner{
    constructor(num){
        this.maxNum = num;
        this.counter = 0;
        this.queue = [];

    }


    push(callbackFn){
        if(this.queue.length <= this.maxNum){
            this.queue.push(callbackFn);
        }
    }

    run() {
        var self = this;
        done.bind(r,r.run);

        if (this.queue.length > 0) {
            setTimeout(function () {
                var task = self.queue.shift();

                task.call(self, done);

            }, 0);

        }
    }
}



var r = new Runner(3);
r.push(exampleTask) // run
r.push(exampleTask) // run
r.push(exampleTask) // run
r.push(exampleTask) // wait
r.push(exampleTask) // wait
r.run();
done.bind(r,r.run);
