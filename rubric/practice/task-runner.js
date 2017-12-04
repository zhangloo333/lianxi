/**
 * Created by lee on 11/2/17.
 */


class Runner {
    constructor(){
        this.queue = [];
        this.async = this.async.bind(this);
    }

    add(task) {
        this.queue.push(task);
    }

    async(arg,callback){
        if(arg){
            arg.call(this);
            setTimeout(()=>callback.call(),2000);
        }
    }

    run(){
        var seft = this;
        if(this.queue.length !== 0){
            seft.async(this.queue.pop(),()=>{
                seft.run.call(this);
            })
        } else {
            console.log('finish');
        }
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

var taskRunner = new Runner();

taskRunner.add(exampleTask1);
taskRunner.add(exampleTask2);
taskRunner.add(exampleTask3);

taskRunner.run();