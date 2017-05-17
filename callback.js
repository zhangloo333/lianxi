/**
 * Created by leizha on 5/17/17.
 */

function callback(fn) {
    setTimeout( function () {console.log('done')},1010);
    setTimeout(fn,1000);

}

function all() {
    console.log("this is callback");
}

callback(all);


// function f() {
//     console.log("foo");
//     setTimeout(g, 0);
//     console.log("baz");
//     h();
// }
//
// function g() {
//     console.log("bar");
// }
//
// function h() {
//     console.log("blix");
// }
//
// f();