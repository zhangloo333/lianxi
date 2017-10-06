/**
 * Created by lee on 9/27/17.
 */


function Dictionary() {
    this.dataStore = [];
}

Dictionary.prototype.add = function(key,value) {
    this.dataStore[key] = value;
}

var ds = new Dictionary();
ds.add("a",1);
ds.add("c",3);
ds.add("e",5);
ds.add("b",2);
ds.add("d",6);

console.log(Object.keys(ds.dataStore).sort(function (a, b) {
    return ds.dataStore[a] - ds.dataStore[b];
}));


var test = {
    a :1,
    b : 9,
    c :11,
    d :14
}


//

function fibonaqie(n) {
    var val = new Array(n).fill(0);

    if(n == 1 || n == 2) {
        return 1;
    } else{
        val[1] = 1;
        val[2] = 1;
        for(var i = 3; i <= n; i++) {
            val[i] = val[i-1] + val[i-2];
        }
        console.log(val);
        return val[n-1];
    }
}

console.log(fibonaqie(10));