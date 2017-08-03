/**
 * Created by leizha on 7/31/17.
 */
function timeout(ms) {
    return new Promise((resolve) => {
            setTimeout(resolve, ms);
});
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 50);

// 关于异步的函数


var fs = require('fs');

var readFile = function (filename) {
    return new Promise(function (resove, reject) {
        fs.readFile(fileName, function (error,data) {
            if(error) reject(error);
            resolve(data);
        })
    })
}

var gen = function* () {
    var f1 = yield readFile('/ETC/');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}