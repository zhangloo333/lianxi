/**
 * Created by leizha on 5/17/17.
 */

var a = function() {
    console.log('1');
    setTimeout(function () {
        console.log('2')
    },0)
    console.log('3');
    console.log('4');

}

a()