/**
 * Created by lee on 12/9/17.
 */


class MyController{
    constructor(){
        console.log(this);
    }
    get bar() {
        console.log(this);
        return this.get('model')
    }
}

let a = new MyController();

