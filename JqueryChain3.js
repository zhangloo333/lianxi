/**
 * Created by leizha on 5/16/17.
 */



function slow() {
    // setTimeout(function(){
    //     if (Math.random() > 0.5) {
    //         console.log("Error 417");
    //     }
    // },1000);
    console.log("Error 417");

}

function exec(fn){
//write your code here
    var self = this;



    this.done = function (fn2) {
        fn2();
        return self;
    }

    this.fail = function (fn3) {
        fn3();
        return self;
    }

    function f1() {
        setTimeout(function () {
            fn.call();
            arguments.callee;
        },0);
    }

    f1()
    return this;
}

exec(slow).done(function () {
    console.log(1);
}).fail(function(){
    console.log("Error: ");
})