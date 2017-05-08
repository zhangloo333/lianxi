/**
 * Created by lee on 5/4/17.
 */


var hasCircle = function(node) {
    if(node == null || node == undefined) return false;

    var faster = node;
    var slower = node;


    while(faster != null || faster.next != null) {
        slower = slower.next;
        faster = faster.next.next;

        if(faster == slower) return true;
    }
    return false;


}

function sum(a) {
    function add(b) {
        return a+b;
    }
    return add;
}

var r = new Runner(3);

function exampleTask(done) {
    setTimeout(done, 2000);
}

class Runner {

    constructor(limit){
        this.storage = [];
        this.limit = limit;
    }

    push(fn) {
        this.storage.push(fn);
    }

    remover(){
        this.storage.pop();
    }

    run() {
        if(this.storage.length >= limit) {
            this.storage.forEach((fn,index) =>{
                fn.call(index);

        });
        }
    }
}