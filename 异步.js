/**
 * Created by leizha on 8/1/17.
 */
'use strict';


// function async(arg, callback) {
//     console.log('参数为 ' + arg +' , 1秒后返回结果');
//     setTimeout(function() { callback(arg * 2); }, 1000);
// }
//
// function final(value) {
//     console.log('完成: ', value);
// }
//
// var items = [ 1, 2, 3, 4, 5, 6 ];
// var results = [];
//
// function series(item) {
//     if(item) {
//         async( item, function(result) {
//             console.log(results);
//             results.push(result);
//             return series(items.shift());
//         });
//     } else {
//         return final(results);
//     }
// }
//
// series(items.shift());

//

class Runner {
    constructor(num) {
        this.maxNum = num;
        this.counter = 0;
        this.taskQueue = [];
        this.runer = [];
        this.async =this.async.bind(this);
        this.run =this.run.bind(this);
        // this.series = this.series.bind(this);

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

function exampleTask1() {
    console.log('hello1');
}

function exampleTask2() {
    console.log('hello2');

}

function exampleTask3() {
    console.log('hello3');

}


let run1 = new Runner(4);
run1.push(exampleTask1);
run1.push(exampleTask2);
run1.push(exampleTask3);
// run1.remove();
run1.run();

// console.log(run1.taskQueue);