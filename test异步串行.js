/**
 * Created by leizha on 8/1/17.
 */


function async(arg, callback) {
    // console.log('参数为 ' + arg +' , 1秒后返回结果');
    arg.call();
    setTimeout(function() { callback(); }, 1000);
}

function final(value) {
    console.log('完成');
}

// var items = [ "h1", "h2", "h3", "h4", "h5", "h6" ];
var items = [];

function a1(){
    console.log("h1");
}
function a2(){
    console.log("h2");
}
function a3(){
    console.log("h3");
}
function a4(){
    console.log("h4");
}

items.push(a1);
items.push(a2);
items.push(a3);
items.push(a4);





var results = [];
function run() {
    return series(items.shift());

}

function series(item) {
    if(item) {
        async( item, function(result) {
            return series(items.shift());
        });
    } else final()
}

run();

// series(items.shift());

