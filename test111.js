/**
 * Created by lee on 4/29/17.
 */

var a = ['1','2','3','4','5'];
var b = ['1','2','3','4','5','6'];

function add(l1) {
    var temp = [];
    var i;
    for(i = 0; i <l1.length-1; i+=2) {
        temp.push(l1[i]+l1[i+1]);
    }
    console.log('i= ',i,"size-1= ", l1.length-1);

    if(i == l1.length-1){
        temp.push(l1[l1.length-1]);
    }
    return temp;
}


console.log(add(a));