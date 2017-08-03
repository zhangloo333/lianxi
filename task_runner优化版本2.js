/**
 * Created by leizha on 8/1/17.
 */

class Runner {
    constructor(num) {
        this.maxNum = num;
        this.counter = 0;
        this.taskQueue = [];
        this.remove = this.remove.bind(this);
        this.async =this.async.bind(this);
        this.run =this.run.bind(this);

    }

    push(fn){
        if(this.taskQueue.length < this.maxNum) {
            this.taskQueue.push(fn);
        } else return;
    }

    remove(fn){
        this.taskQueue.pop();
    }

    async(arg,callback) {
        if(arg) {
            arg.call();
            setTimeout(function () {
                callback()
            },1000);
        }

    }

    run(){
        var self = this;
        if(self.taskQueue){
            self.async(self.taskQueue.pop(), function () {
                return self.run.call();
            })
        } else{
            console.log('finsh');
        }

    }

}

function exampleTask1(callback) {
    console.log('hello1');
    callback();
}

function exampleTask2(callback) {
    console.log('hello2');
    callback();

}

function exampleTask3(callback) {
    console.log('hello3');
    callback();

}


let run1 = new Runner(4);
run1.push(exampleTask1);
run1.push(exampleTask2);
run1.push(exampleTask3);
// run1.remove();
run1.run();
