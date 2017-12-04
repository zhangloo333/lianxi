
/**
 * Created by lee on 11/5/17.
 */


class Runner {
    constructor(capability) {
        this.queue = [];
        this.capability = capability;
    }

    add(task) {
        if(this.queue.length <= this.capability){
            this.queue.push(task);
        }
    }

    asyn(arg, fn){
        if(arg) {
            arg();
         setTimeout(function () {
             fn();
         },2000)
        } else{
            console.log('finish');
        }
    }

    run() {
        var self = this;
        self.asyn(self.queue.pop(),function () {
            self.run.call(self);
        })
    }
}

var exampleTask1 = function() {
    console.log('job1');
}

var exampleTask2 = function() {
    console.log('job2');
}

var exampleTask3 = function() {
    console.log('job3');
}

var taskRunner = new Runner(5);

taskRunner.add(exampleTask1);
taskRunner.add(exampleTask2);
taskRunner.add(exampleTask3);

taskRunner.run();