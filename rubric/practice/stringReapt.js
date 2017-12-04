/**
 * Created by lee on 11/2/17.
 */

String.prototype.repeatify = function (nums){
    let out = [];
    for(let i = 0; i <nums; i++) {
        out.push(this);
    }
    return out.join();
}

console.log("abc".repeatify(3));