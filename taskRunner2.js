/**
 * Created by lee on 5/8/17.
 */
// function exampleTask(done) {
//     setTimeout(done, 2000);
// }

function exampleTask(done) {
    setTimeout(done, 2000);

}

class Runner {
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

    run(){
        // var self = this;
        // if(this.queue.length > 0) {
        //     setTimeout(function () {
        //         var task = self.queue.shift();
        //         var done = function () {
        //             console.log("excute content");
        //             self.run();
        //         }
        //         task.call(this,done);
        //     },0);

        var self = this;
            if(self.queue.length >0) {
                var task = self.queue.shift();
                var done = function () {
                    console.log("excute content");
                    self.run();
                }
                task(done);
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