/**
 * Created by leizha on 5/17/17.
 */

'use strict';
function exampleTask(done) {
    setTimeout(done, 2000);

}

class Runner{
    constructor(num) {
        this.maxNum = num;
        this.counter = 0;
        this.queue = [];
    }

    push(callbackFn) {
        if (this.queue.length <= this.maxNum) {
            this.queue.push(callbackFn);
        }
    }

    run() {
        var self = this;
        if (this.queue.length > 0) {
            setTimeout(function () {
                var task = self.queue.shift();
                var done = function () {
                    console.log("excute content");
                    self.run();
                }
                task.call(this, done);
            }, 0);

        }
    }
}

var rr = new Runner(3);

rr.push(exampleTask);
rr.push(exampleTask);
rr.push(exampleTask);
rr.push(exampleTask);
rr.push(exampleTask);

rr.run();