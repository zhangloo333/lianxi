/**
 * Created by lee on 1/17/18.
 */

class Runner {
    constructor() {
        this.store = [];
        this.add = this.add.bind(this);
        this.async = this.async.bind(this);
        this.run = this.run.bind(this);
    }

    add(task) {
        this.store.push(task);
    }

    async(arg,callback) {
        arg.call();
        setTimeout(function () {
            return callback()
        },2000)
    }

    run() {

        if(this.store.length > 0) {
            this.async(this.store.pop(), this.run);
        } else {
            console.log('finished task')
        }
    }
}

const t1 = ()=> {
    console.log('1');
}

const t2 = ()=> {
    console.log('2');
}

const t3 = ()=> {
    console.log('3');
}

let runner = new Runner();
runner.add(t1);
runner.add(t2);
runner.add(t3);

runner.run();