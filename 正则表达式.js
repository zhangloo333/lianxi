/**
 * Created by lee on 9/28/17.
 */

var target = /\b[A-Z]{2}/
var story = "ESbababa"
console.log(story.search(target));

console.log(0&&2);


String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g,'');
};

function trim(str) {
    if(str == null || str == undefined || str.length ==0) return "";
    var arr = str.split("");

    while(arr[0] == " "){
        arr.shift();
    }

    while(arr[arr.length-1] == " "){
        arr.pop();
    }

    return arr.join("");
}

console.log(trim("    asdasd asdsd   "));

console.log(new Date());

var reg = /^[a-zA-Z0-9_-]+@(163|abc)(\.com)$/

var reg1= /^[a-zA-Z0-9]+$/

console.log("username@abc.com".search(reg));
console.log("eeee".search(reg1));
