/**
 * Created by lee on 5/4/17.
 */


var map = new Map();

map.set(1,"1");
map.set(2,"3");
map.set(3,"3");
map.set(4,"4");
map.set(5,"5");


function buildStr(value,key,map) {
    console.log(value);
    console.log(key);
    console.log(map)
}

map.forEach(buildStr);


var findReat = function(str) {
    if(str.length == 0) return "";

    var tempArray = str.split("");
    var hash = new Map();
    var out = "";

    for(var i = 0; i < tempArray.length; i++){
        if(hash.has(tempArray[i])){
            hash.set(tempArray[i],hash.get(tempArray[i])+1);
        } else{
            hash.set(tempArray[i],1);
        }
    }

    hash.forEach((key,value,map)=>{
        out += key+value;
    });

    return out;

}

var sampe = "abcdb";
var out = findReat(sampe);
console.log(out);